export const ANNUAL_1_2027_DATA = {
  session: 'Annual (I) 2027',
  slug: 'annual-1-2027',
  sourceText: 'Source: official ZUEB eligibility criteria for Annual (I) 2027 enrollment (ver. 01).',
  pdfUrl: 'https://zueb.edu.pk/wp-content/uploads/2026/09/Eligibility-Criteria-Annual-I-Enrollment-Examination-2027-ver.01.pdf',
  
  categories: {
    combined: [
      {
        id: 'combined-ssc',
        badge: 'SSC Part I & II',
        title: 'Combined SSC (Gap)',
        whoCanApply: 'At least a 2-year gap after passing Grade VIII.',
        ageLimits: [
          'SSC Science: 14 to 20 years',
          'SSC General: 14 years and above, no upper limit',
        ],
        documents: [
          'B-Form / CRC / CNIC',
          'Recent formal photo, blue or white background',
          'School Leaving Certificate (of 2024 or before)',
        ],
        note: 'Combined (Gap) enrollment is valid for one academic year only.',
        whatsappText: 'Hello JMT, I want to enquire about Combined SSC (Gap) (Annual (I) 2027).',
      },
      {
        id: 'combined-hssc',
        badge: 'HSSC Part I & II',
        title: 'Combined HSSC (Gap)',
        whoCanApply: 'At least a 2-year gap after passing SSC (passed in 2024 or before).',
        ageLimits: [
          'HSSC Science: up to 25 years',
          'HSSC Commerce: up to 35 years',
          'HSSC Humanities: no age limit',
        ],
        documents: [
          'B-Form / CRC / CNIC',
          'Recent formal photo, blue or white background',
          'SSC Marksheet & Certificate',
          'SSC Migration Certificate (if from outside Sindh)',
        ],
        note: 'Combined (Gap) enrollment is valid for one academic year only.',
        whatsappText: 'Hello JMT, I want to enquire about Combined HSSC (Gap) (Annual (I) 2027).',
      },
    ],
    newEnrollment: [
      {
        id: 'grade-ix',
        badge: 'SSC Part I',
        title: 'Grade IX',
        whoCanApply: [
          { label: 'Regular', text: 'Passed Grade VIII in 2026 or earlier.' },
          { label: 'Private', text: 'Any fresh candidate who is at least 12 years old.' },
        ],
        ageLimits: [
          'Regular: 12 to 18 years',
          'Private: minimum 12 years',
        ],
        documents: [
          'B-Form / CRC / CNIC',
          'Recent passport-size photo, blue or white background',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Grade IX (Annual (I) 2027).',
      },
      {
        id: 'grade-xi',
        badge: 'HSSC Part I',
        title: 'Grade XI',
        whoCanApply: [
          { label: 'Regular', text: 'Passed SSC in 2026 or within the last 5 years (2021 or later).' },
          { label: 'Private', text: 'Any fresh candidate who is at least 14 years old, or anyone with a gap of more than 5 years after SSC.' },
        ],
        ageLimits: [
          'Regular: up to 23 years',
          'Private: minimum 14 years',
        ],
        documents: [
          'B-Form / CRC / CNIC',
          'Recent formal photo, blue or white background',
          'SSC Marksheet & Certificate',
          'SSC Migration Certificate (if from outside Sindh)',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Grade XI (Annual (I) 2027).',
      },
    ],
    continuing: [
      {
        id: 'grade-x',
        badge: 'SSC Part II',
        title: 'Grade X',
        iconType: 'book',
        points: [
          'Passed Grade IX from ZUEB.',
          'Enrolled in 2024 or later.',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Grade X (Annual (I) 2027).',
      },
      {
        id: 'grade-xii',
        badge: 'HSSC Part II',
        title: 'Grade XII',
        iconType: 'cap',
        points: [
          'Passed Grade XI from ZUEB.',
          'Enrolled in 2024 or later.',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Grade XII (Annual (I) 2027).',
      },
      {
        id: 'failure',
        badge: 'Failed subjects only',
        title: 'Failure / Absentees',
        iconType: 'repeat',
        points: [
          'Received your SSC or HSSC marksheet and failed Part I, Part II or both from ZUEB. Appear in the failed subject(s) only.',
          'Enrolled in 2024 or later.',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Failure / Absentees (Annual (I) 2027).',
      },
      {
        id: 'improvement',
        badge: 'SSC / HSSC',
        title: 'Improvement',
        iconType: 'trend',
        points: [
          'ZUEB candidates who passed SSC or HSSC with a valid enrollment. Appear in all subjects of Part I, Part II or Part I & II Combined. One opportunity only.',
          'Enrolled in 2024 or later.',
          'Expired enrollment can be renewed for one more academic year.',
        ],
        permissionNote: 'Improvement of Grade Permission',
        whatsappText: 'Hello JMT, I want to enquire about Improvement (Annual (I) 2027).',
      },
      {
        id: 'additional',
        badge: 'SSC / HSSC',
        title: 'Additional',
        iconType: 'plus',
        points: [
          'ZUEB candidates who passed SSC or HSSC may add subject(s), with a valid enrollment and the basic subject requirements.',
          'Enrolled in 2024 or later.',
          'Expired enrollment can be renewed for one more academic year.',
        ],
        ageLimits: [
          'SSC Science: up to 23 years',
          'HSSC Science: up to 28 years',
          'HSSC Commerce: up to 38 years',
        ],
        permissionNote: 'Additional Subject(s) Permission',
        whatsappText: 'Hello JMT, I want to enquire about Additional (Annual (I) 2027).',
      },
      {
        id: 'parallel',
        badge: 'Add-on',
        title: 'Parallel Stream / Group',
        iconType: 'layers',
        points: [
          'Opt for a parallel stream alongside your core stream in Grade IX or XI.',
        ],
        whatsappText: 'Hello JMT, I want to enquire about Parallel Stream / Group (Annual (I) 2027).',
      },
    ],
  },

  boardRulesGroups: [
    {
      groupTitle: 'Enrollment: Grade IX, Grade XI and Combined (Gap)',
      rules: [
        {
          title: 'Document scans',
          description: 'Scanned copies of documents in their original condition must be uploaded on the portal. Photocopies are not acceptable.',
          iconType: 'upload',
        },
        {
          title: 'Migration certificate',
          description: 'Migration certificates are required for students who passed Matriculation from boards outside Sindh Province. The Migration Certificate / NOC must be issued in the name of ZUEB.',
          iconType: 'pin',
        },
        {
          title: 'Enrollment validity',
          description: "The candidate's enrollment is valid as per the date mentioned on the enrollment card.",
          iconType: 'clock',
        },
        {
          title: 'Objections and refunds',
          description: "ZUEB can block or cancel any candidate's enrollment form if the school fails to rectify the Board's objection in four attempts. No refund will be made.",
          iconType: 'alert',
        },
      ],
    },
    {
      groupTitle: 'Combined (Gap)',
      rules: [
        {
          title: 'One academic year',
          description: 'Combined (Gap) enrollment is valid for one academic year only.',
          iconType: 'calendar',
        },
      ],
    },
    {
      groupTitle: 'Examination: Grade X, Grade XII and Failure / Absentees',
      rules: [
        {
          title: 'Enrollment validity',
          description: "The candidate's enrollment is valid as per the date mentioned on the enrollment card.",
          iconType: 'clock',
        },
        {
          title: 'Examination form',
          description: "ZUEB can withhold any candidate's examination form if the school fails to rectify the Board's objection. No refund will be made.",
          iconType: 'alert',
        },
      ],
    },
    {
      groupTitle: 'Improvement and Additional',
      rules: [
        {
          title: 'One opportunity',
          description: 'Candidates are allowed one opportunity to appear in the Improvement Examination.',
          iconType: 'repeat',
        },
        {
          title: 'Renewal',
          description: 'An expired enrollment can be renewed for one more academic year.',
          iconType: 'clock',
        },
      ],
    },
  ],
};
