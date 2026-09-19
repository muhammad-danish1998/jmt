// Categories for blogs
export const BLOG_CATEGORIES = [
  'All Posts',
  'Education',
  'Board Comparison',
  'University Admissions',
  'Exam Tips',
  'School News',
];

// No static/demo blogs — all real blogs are managed dynamically in Supabase through the Admin Portal (/admin)
export const BLOG_POSTS = [];

// Blog Template Helper for Admin Editor
export const BLOG_TEMPLATE = {
  title: '',
  slug: '',
  category: 'Education',
  excerpt: '',
  snippet_answer: '',
  key_takeaways: [
    'Point 1: Key requirement or board policy',
    'Point 2: Important eligibility criteria',
    'Point 3: Guidance for admission & exams',
  ],
  content: `<h3>Overview</h3>
<p>Write your detailed blog post here. You can include paragraphs, bold text, lists, and headings.</p>

<h4>Important Guidelines</h4>
<ul>
  <li>Requirement 1: Official Board NOC or Migration Certificate</li>
  <li>Requirement 2: Educational marksheets & B-Form copies</li>
</ul>

<h4>Conclusion & Next Steps</h4>
<p>For complete admission assistance, contact JMT Public Higher Secondary School & College.</p>`,
  image: '/hero-students.jpg',
  secondary_image: '',
  author: 'JMT Academic Team',
  read_time: '5 min read',
  featured: false,
};
