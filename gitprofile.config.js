// gitprofile.config.js

const config = {
  github: {
    username: 'DavidNart90', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Login-Page-Concept', 'Boston-Dataset-LinearRegression ', 'DavidNart90'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/david-nartey-bb9722179',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'https://medium.com/@davidnart90',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: 'David Nart',
    website: 'https://davidnart.netlify.app/',
    phone: '+233551687501',
    email: 'davidnart90@gmailcom',
  },
  resume: {
    fileUrl:
      ' ', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'Django',
    'Tableau',
    'PowerBI',
    'Flask',
    'Git',
    'Wordpress',
    'Excel',
    'Machine Learning',
    'Data Science',
    'Pyscript',
    'Data Mining',
    
  ],
  experiences: [
    {
      company: 'FixedByte',
      position: 'Trainee Programme',
      from: 'June 2022',
      to: 'August 2022',
      companyLink: 'https://fixedbyte.com/',
    },
    {
      company: 'FloodGates Solutions',
      position: 'Software Engineer (Remote)',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://floodgates.solutions/',
    },
    {
      company: 'King Jesus School',
      position: 'Tutor',
      from: 'February 2023',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'AWS Machine Learning Foundations 2022',
      body: 'A certificate of completion from Udacity',
      year: 'November 2022',
      link: 'https://graduation.udacity.com/confirm/NTGWDKAY'
    },
    
    {
      name: 'Shape AI Webdevelopment with Boostrap',
      body: 'Developers Student Clubs Certification',
      year: 'November 2022',
      link: 'https://cert.shapeai.tech/verify/2n57Vx'
    },
    
    {
      name: 'Machine Learning with Python and R',
      body: 'A certificate of completion from Udemy',
      year: 'January 2022',
      link: 'https://www.udemy.com/certificate/UC-2a102420-68ee-42e3-9aed-51ebde63ce4c/'
    },
  ], 
  education: [
    {
      institution: 'Kwame Nkurumah University of Science and Technology',
      degree: 'Degree',
      from: '2018',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'FloodGates Solution Website',
      description:
        'This personal project involves designing a digital marketing mock-up website for an IT startup. The aim is to create user-friendly website that showcases the startups services and products, while also highlighting its unique value proposition.',
      imageUrl: 'https://floodgates.solutions/wp-content/uploads/2022/12/image2vector.svg', 
      link: 'https://floodgates.solutions/',
    },
    {
      title: 'Predict It',
      description:
        'Predict It is a mega ML prediction website for every sector of Business. The project is still under construction',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*uQrLhsTuvnC3fpQI4S3B7w.png',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'davidventuri', // to hide blog section, keep it empty
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
