
export interface SkillGroup {
    title: string;
    items: string[];
    icon: string;
  }
  
  export const skillGroups: SkillGroup[] = [
    {
      title: 'Programming languages',
      icon: 'Code2',
      items: [
        'JavaScript (ES6+)',
        'TypeScript',
        'HTML5',
        'CSS3',
        'SCSS',
      ],
    },
  
    {
      title: 'Frontend development',
      icon: 'PanelsTopLeft',
      items: [
        'React.js',
        'React Hooks',
        'React Router',
      ],
    },
  
    {
      title: 'State management',
      icon: 'Workflow',
      items: [
        'Redux Toolkit',
        'Redux',
        'Context API',
      ],
    },
  
    {
      title: 'UI frameworks',
      icon: 'Blocks',
      items: [
        'Tailwind CSS',
        'Material UI',
        'Bootstrap',
      ],
    },
  
    {
      title: 'API integration',
      icon: 'Network',
      items: [
        'REST APIs',
        'Axios',
        'Fetch API',
      ],
    },
  
    {
      title: 'Testing',
      icon: 'TestTube2',
      items: [
        'Jest',
        'React Testing Library',
      ],
    },
  
    {
      title: 'Performance',
      icon: 'Gauge',
      items: [
        'Code Splitting',
        'Lazy Loading',
        'Memoization',
        'Render Optimization',
        'Debouncing',
      ],
    },
  
    {
      title: 'Tools',
      icon: 'Wrench',
      items: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
      ],
    },
  ];
  