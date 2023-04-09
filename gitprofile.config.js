// gitprofile.config.js

const config = {
  github: {
    username: 'Osman1435', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Price-forcast-of-Tomatoes-in-Ashanti-Region'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'https://twitter.com/sthylo4?t=N-_Kz57DnNYhnjdgmQwyfQ&s=09',
    mastodon: '',
    facebook: 'http://www.facebook.com/profile.php?id=100088449301779',
    instagram: 'dhy_sthylo_4',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: 'Dhy Sthylo',
    website: '',
    phone: '+233553248376',
    email: 'usmanmuba99@gmail.com',
  },
  resume: {
    fileUrl:
      ' ', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'word',
    'Excel',
    'R Sotfware', 
  ],
  experiences: [
    {
      company: 'Fludo Cocoa Company',
      position: 'Assistant accountant',
      from: 'July 2021',
      to: ' Dec  2021',
      companyLink: 'https://fludococoa.gh/',
    },
    {
      company: 'Department of Teacher Education, Kwame Nkrumah University of Science and Technology, Kumasi',
      position: 'Teaching and Administrative Assistant',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://dte.knust.edu.gh/',
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
      title: '',
      description:
        '',
      imageUrl: '', 
      link: '',
    },
    {
      title: '',
      description:
        '',
      imageUrl: '',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: '', // How many posts to display. Max is 10.
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
