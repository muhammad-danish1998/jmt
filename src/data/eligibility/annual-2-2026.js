export const ANNUAL_2_2026_DATA = {
  session: 'Annual (II) 2026',
  slug: 'annual-2-2026',
  sourceText: 'Source: official ZUEB eligibility criteria for the Annual (II) Examination 2026.',
  pdfUrl: 'https://zueb.edu.pk/wp-content/uploads/2026/07/Eligibility-Criteria-Annual-II-Examination-2026.pdf',

  categories: {
    combined: [
      {
        id: 'combined-ssc',
        badge: 'SSC Part I & II',
        title: 'Combined SSC (Gap)',
        whoCanApply: 'At least a 2-year gap after passing Grade VIII, appearing as a private candidate in the Part I & II Combined SSC exam.',
        ageLimits: [
          'SSC Science: 14 to 20 years',
          'SSC General: 14 years and above, no upper limit',
        ],
        documents: [
          'B-Form / CRC / CNIC',
          'Recent formal photo, blue or white background',
          'School Leaving Certificate',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Combined SSC (Gap) (Annual (II) 2026).',
      },
      {
        id: 'combined-hssc',
        badge: 'HSSC Part I & II',
        title: 'Combined HSSC (Gap)',
        whoCanApply: 'At least a 2-year gap after passing SSC, appearing as a private candidate in the Part I & II Combined HSSC exam.',
        ageLimits: [
          'HSSC Science: up to 25 years',
          'HSSC Commerce: up to 35 years',
          'HSSC Humanities: no age limit',
        ],
        documents: [
          'B-Form / CRC / CNIC',
          'Recent formal photo, blue or white background',
          'SSC Marksheet & Certificate',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Combined HSSC (Gap) (Annual (II) 2026).',
      },
    ],
    newEnrollment: [
      {
        id: 'grade-ix',
        badge: 'SSC Part I',
        title: 'Grade IX',
        whoCanApply: [
          { label: 'Regular', text: 'Passed Grade VIII in 2025 or before.' },
          { label: 'Private', text: 'Any fresh candidate who is at least 12 years old.' },
        ],
        ageLimits: [
          'Regular: 12 to 20 years',
          'Private: minimum 12 years',
        ],
        documents: [
          'B-Form / CRC / CNIC',
          'Recent photo, blue or white background',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Grade IX (Annual (II) 2026).',
      },
      {
        id: 'grade-xi',
        badge: 'HSSC Part I',
        title: 'Grade XI',
        whoCanApply: [
          { label: 'Regular', text: 'Passed SSC in 2025 or within the last 5 years (2020 or later).' },
          { label: 'Private', text: 'Candidates with a gap of more than 5 years after passing SSC.' },
        ],
        ageLimits: [
          'Regular: up to 25 years',
        ],
        documents: [
          'B-Form / CRC / CNIC',
          'Recent formal photo, blue or white background',
          'SSC Marksheet & Certificate',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Grade XI (Annual (II) 2026).',
      },
    ],
    continuing: [
      {
        id: 'grade-x',
        badge: 'SSC Part II',
        title: 'Grade X',
        iconType: 'book',
        points: [
          'Passed Grade IX from ZUEB in 2023 or later, with a Grade IX enrollment still valid within the three-year period.',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Grade X (Annual (II) 2026).',
      },
      {
        id: 'grade-xii',
        badge: 'HSSC Part II',
        title: 'Grade XII',
        iconType: 'cap',
        points: [
          'Passed Grade XI from ZUEB in 2023 or later, with a Grade XI enrollment still valid within the three-year period.',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Grade XII (Annual (II) 2026).',
      },
      {
        id: 'failure',
        badge: 'Failed subjects only',
        title: 'Failure / Absentees',
        iconType: 'repeat',
        points: [
          'ZUEB candidates who failed in Part I or Part II in 2023 or later. Appear in the failed subject(s) only, with a valid enrollment.',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Failure / Absentees (Annual (II) 2026).',
      },
      {
        id: 'improvement',
        badge: 'SSC / HSSC',
        title: 'Improvement',
        iconType: 'trend',
        points: [
          'ZUEB candidates who passed SSC or HSSC in 2024 or later, with a valid enrollment. Appear in all subjects of Part I, Part II or Part I & II Combined.',
        ],
        permissionNote: 'Improvement of Grade Permission',
        whatsappText: 'Hello JMT, I want to enquire about Improvement (Annual (II) 2026).',
      },
      {
        id: 'additional',
        badge: 'SSC / HSSC',
        title: 'Additional',
        iconType: 'plus',
        points: [
          'ZUEB candidates who passed SSC or HSSC in 2024 or later may add subject(s), with a valid enrollment and the basic subject requirements.',
        ],
        ageLimits: [
          'SSC Science: up to 23 years',
          'HSSC Science: up to 28 years',
          'HSSC Commerce: up to 38 years',
        ],
        permissionNote: 'Additional Subject(s) Permission',
        whatsappText: 'Hello JMT, I want to enquire about Additional (Annual (II) 2026).',
      },
      {
        id: 'parallel',
        badge: 'Add-on',
        title: 'Parallel Stream / Group',
        iconType: 'layers',
        points: [
          'Opt for a parallel stream alongside your core stream in Grade IX or XI.',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Parallel Stream / Group (Annual (II) 2026).',
      },
    ],
  },

  boardRules: [
    {
      title: 'Annual (I) vs Annual (II)',
      description: 'Part I students who appeared in the Annual (I) Exam 2026 are not eligible to appear in the Annual (II) Exam 2026.',
      iconType: 'calendar',
    },
    {
      title: 'Enrollment validity',
      description: 'Enrollment is valid for three consecutive years. An expired enrollment may be renewed for another year after paying the necessary dues.',
      iconType: 'clock',
    },
    {
      title: 'Migration certificate',
      description: 'SSC candidates from any province other than Sindh must submit a valid Migration Certificate / NOC issued by the relevant board.',
      iconType: 'pin',
    },
    {
      title: 'Document scans',
      description: 'Scanned copies of original documents must be uploaded on the portal.',
      iconType: 'upload',
    },
    {
      title: 'Objections and refunds',
      description: "ZUEB can block or cancel an enrollment form if the Board's objection is not fixed within four attempts. No refund is made.",
      iconType: 'alert',
      fullWidth: true,
    },
  ],
};
