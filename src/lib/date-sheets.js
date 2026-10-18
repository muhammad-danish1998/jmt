import fs from 'fs';
import path from 'path';

/**
 * Filter groups supported on the HSSC date sheet page.
 */
export const HSSC_GROUPS = [
  { slug: 'all', label: 'All groups', matchName: null },
  { slug: 'pre-medical', label: 'Pre-Medical', matchName: 'Pre-Medical' },
  { slug: 'pre-engineering', label: 'Pre-Engineering', matchName: 'Pre-Engineering' },
  { slug: 'general-science', label: 'General Science', matchName: 'General Science' },
  { slug: 'commerce', label: 'Commerce', matchName: 'Commerce' },
  { slug: 'humanities', label: 'Humanities', matchName: 'Humanities' },
  { slug: 'pre-nursing', label: 'Pre-Nursing', matchName: 'Pre-Nursing' },
  { slug: 'medical-technology', label: 'Medical Technology', matchName: 'Medical Technology' },
];

/**
 * Cached date sheet JSON.
 */
let cachedHsscData = null;

export function getRawHsscData() {
  if (cachedHsscData) return cachedHsscData;
  const filePath = path.join(process.cwd(), 'data', 'date-sheets', 'annual-2-2026-hssc.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  cachedHsscData = JSON.parse(fileContent);
  return cachedHsscData;
}

/**
 * Format ISO date string (YYYY-MM-DD) into display formats.
 * @param {string} isoDate - e.g. "2026-11-17"
 * @param {string} dayName - e.g. "Tuesday"
 */
export function formatDate(isoDate, dayName) {
  const [year, month, day] = isoDate.split('-');
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const mIndex = parseInt(month, 10) - 1;
  const dayNum = parseInt(day, 10);
  const mName = monthNames[mIndex] || month;
  const shortDay = dayName ? dayName.slice(0, 3) : '';

  return {
    raw: isoDate,
    display: `${dayNum} ${mName} ${year}`, // e.g. "17 Nov 2026"
    mobileBadge: `${shortDay}, ${dayNum} ${mName} ${year}`, // e.g. "Tue, 17 Nov 2026"
    day: dayName,
  };
}

/**
 * Groups an array of papers by date into date blocks with rowspan counts.
 * @param {Array} papers
 */
function groupPapersByDate(papers) {
  const dateMap = new Map();

  for (const paper of papers) {
    if (!dateMap.has(paper.date)) {
      dateMap.set(paper.date, {
        date: paper.date,
        day: paper.day,
        formatted: formatDate(paper.date, paper.day),
        papers: [],
      });
    }
    dateMap.get(paper.date).papers.push(paper);
  }

  return Array.from(dateMap.values());
}

/**
 * Get HSSC Date Sheet data with optional group filtering.
 * @param {string} [groupSlug] - slug of the selected group ('all', 'pre-medical', etc.)
 */
export function getHsscDateSheet(groupSlug = 'all') {
  const hsscData = getRawHsscData();
  const activeSlug = (groupSlug || 'all').toLowerCase();
  const groupConfig = HSSC_GROUPS.find((g) => g.slug === activeSlug) || HSSC_GROUPS[0];
  const targetGroup = groupConfig.matchName;

  // Filter papers:
  // - If 'all', keep everything
  // - Otherwise, keep if paper has 'All Groups' or matches the target group or has no printed group
  const filteredPapers = hsscData.papers.filter((paper) => {
    if (!targetGroup) return true;
    const groups = paper.groups || [];
    if (groups.length === 0) return true; // e.g. Urdu where group was omitted in notice
    if (groups.includes('All Groups')) return true;
    return groups.includes(targetGroup);
  });

  const papersClassXI = filteredPapers.filter((p) => p.class === 'XI');
  const papersClassXII = filteredPapers.filter((p) => p.class === 'XII');

  const xiDateBlocks = groupPapersByDate(papersClassXI);
  const xiiDateBlocks = groupPapersByDate(papersClassXII);

  const totalXI = hsscData.papers.filter((p) => p.class === 'XI').length;
  const totalXII = hsscData.papers.filter((p) => p.class === 'XII').length;
  const uniqueDatesCount = new Set(hsscData.papers.map((p) => p.date)).size;

  return {
    meta: {
      session: hsscData.session,
      level: hsscData.level,
      source: hsscData.source,
      sourceCheckedOn: hsscData.sourceCheckedOn,
      sourceCheckedDisplay: 'October 2026',
      classes: hsscData.classes,
      shifts: hsscData.shifts,
      instructions: hsscData.instructions,
      downloadPdfUrl: '/downloads/JMT-ZUEB-HSSC-Annual-II-2026-Time-Table.pdf',
      downloadPdfFileName: 'JMT-ZUEB-HSSC-Annual-II-2026-Time-Table.pdf',
    },
    activeGroup: groupConfig,
    allGroups: HSSC_GROUPS,
    stats: {
      totalPapersXI: totalXI, // 24
      totalPapersXII: totalXII, // 21
      totalPapers: hsscData.papers.length, // 45
      totalUniqueDates: uniqueDatesCount, // 19
      filteredCountXI: papersClassXI.length,
      filteredCountXII: papersClassXII.length,
    },
    classXI: {
      title: 'Class XI (HSSC Part I)',
      anchorId: 'class-xi',
      headingId: 'class-xi-h',
      session: hsscData.session,
      dateBlocks: xiDateBlocks,
    },
    classXII: {
      title: 'Class XII (HSSC Part II)',
      anchorId: 'class-xii',
      headingId: 'class-xii-h',
      session: hsscData.session,
      dateBlocks: xiiDateBlocks,
    },
  };
}

/**
 * FAQ items for the HSSC date sheet page.
 */
export const HSSC_FAQS = [
  {
    question: 'Where is the official date sheet?',
    answer:
      'On the ZUEB website under Date Sheet. We link the official notice on this page. If our copy and the official notice ever differ, the official notice is correct.',
  },
  {
    question: 'What if ZUEB changes a date?',
    answer:
      'ZUEB can issue an updated schedule. We update this page and the PDF, and show the new date. Always check the official notice before your paper.',
  },
  {
    question: 'Why does the PDF have the JMT logo?',
    answer:
      'It is a copy of the ZUEB schedule made for students, with our logo in the background. ZUEB did not issue it. The official notice is the PDF linked on this page.',
  },
];
