const taskTitles = [
  'Home chores',
  'Paying bills',
  'Marketing',
  'Design website',
  'Write blog post',
  'Create social media campaign',
  'Test application functionality',
  'Optimize website performance',
  'Develop new feature',
  'Fix bugs in code',
  'Create wireframes for UI',
  'Setup database',
  'Conduct user research',
  'Plan marketing strategy',
  'Implement SEO techniques',
  'Coordinate team meeting',
  'Review and provide feedback',
  'Perform code review',
  'Deploy application to server',
  'Analyze data and generate reports',
];

const projectTitles = [
  'Web Development',
  'Marketing Campaign',
  'Branding Redesign',
  'Mobile App Development',
  'Content Creation',
  'E-commerce Website',
  'Social Media Management',
  'Graphic Design',
  'UI/UX Design',
  'Data Analysis',
  'Event Planning',
  'SEO Optimization',
  'Product Launch',
  'Video Production',
  'Email Marketing',
  'Market Research',
  'Software Testing',
  'Business Consulting',
  'Project Management',
  'Customer Support',
];

function getRandomProjectTitle() {
  const randomIndex = Math.floor(Math.random() * projectTitles.length);
  return projectTitles[randomIndex];
}

function getRandomTaskTitle() {
  const randomIndex = Math.floor(Math.random() * taskTitles.length);
  return taskTitles[randomIndex];
}

let id = 0;

const catalogue: Catalogue = {
  projects: [
    {
      id: ++id,
      title: getRandomProjectTitle(),
      tasks: [
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
      ],
    },
    {
      id: ++id,
      title: getRandomProjectTitle(),
      tasks: [
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
      ],
    },
    {
      id: ++id,
      title: getRandomProjectTitle(),
      tasks: [
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
      ],
    },
    {
      id: ++id,
      title: getRandomProjectTitle(),
      tasks: [
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
      ],
    },
    {
      id: ++id,
      title: getRandomProjectTitle(),
      tasks: [
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
      ],
    },
    {
      id: ++id,
      title: getRandomProjectTitle(),
      tasks: [
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
      ],
    },
    {
      id: ++id,
      title: getRandomProjectTitle(),
      tasks: [
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
      ],
    },
    {
      id: ++id,
      title: getRandomProjectTitle(),
      tasks: [
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
        { id: ++id, title: getRandomTaskTitle() },
      ],
    },
  ],
  tasks: [
    { id: ++id, title: getRandomTaskTitle() },
    { id: ++id, title: getRandomTaskTitle() },
    { id: ++id, title: getRandomTaskTitle() },
    { id: ++id, title: getRandomTaskTitle() },
    // { id: ++id, title: getRandomTaskTitle() },
    // { id: ++id, title: getRandomTaskTitle() },
    // { id: ++id, title: getRandomTaskTitle() },
    // { id: ++id, title: getRandomTaskTitle() },
    // { id: ++id, title: getRandomTaskTitle() },
    // { id: ++id, title: getRandomTaskTitle() },
    // { id: ++id, title: getRandomTaskTitle() },
    // { id: ++id, title: getRandomTaskTitle() },
    // { id: ++id, title: getRandomTaskTitle() },
    // { id: ++id, title: getRandomTaskTitle() },
  ],
};

export default catalogue;
