export const blogs = {
  djangoReactChat: {
    link: 'django-react-chat',
    title: 'Chat in Django & React',
    date: 'Apr 26, 2024',
    sections: [
      {
        title: 'Introduction',
        desc: 'Get started with an overview of the chat tutorial and its objectives.'
      },
      {
        title: 'Environment',
        desc: 'Set up a development environment for building the chat application.'
      },
      {
        title: 'Database and Redis',
        desc: 'Configure the database and integrate Redis for real-time messages.'
      },
      {
        title: 'Backend with Django',
        desc: 'Code up the backend side of the chat application using Django.'
      },
      {
        title: 'Consumers',
        desc: 'Concept of consumers in Django Channels and WebSockets.'
      },
      {
        title: 'Frontend with React',
        desc: 'Frontend interface enabling users to interact seamlessly.'
      }
    ],
    tutorial: {
      header: {
        date: 'Apr 26, 2024',
        title: 'Job Board',
        demo: '/src/assets/images/3.svg'
      }
    }
  },
  about: {
    link: 'about',
    title: 'About me - Kamil Kamiński',
    date: 'Mar 28, 2024',
    sections: [],
    tutorial: {
      header: {
        date: 'Mar 28, 2024',
        title: 'Job Board',
        demo: '/src/assets/images/3.svg'
      }
    }
  }
}

export const projects = {
  jobBoard: {
    feature: true,
    date: 'Oct 7, 2023',
    link: 'job-board',
    thumbnail: '/src/assets/images/3.svg',
    title: 'IT Recruitment Platform',
    desc: 'Search for candidates and apply for jobs',
    tutorial: {
      header: {
        date: 'Oct 7, 2023',
        title: 'Job Board',
        demo: '/src/assets/images/3.svg'
      },
      content: [
        { type: 'title', text: 'Hello there!' },
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
  },
  developmentForum: {
    feature: true,
    date: 'Mar 9, 2023',
    link: 'development-forum',
    thumbnail: '/src/assets/images/2.svg',
    title: 'Forum about development topics',
    desc: 'Create topics, rooms and help others',
    tutorial: {
      header: {
        date: 'Mar 9, 2023',
        title: 'Development Forum',
        demo: '/src/assets/images/2.svg'
      },
      content: [
        { type: 'title', text: 'Welcome!' },
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
      ]
    }
  },
  monitoringSystem: {
    feature: true,
    date: 'Nov 27, 2022',
    link: 'monitoring-system',
    thumbnail: '/src/assets/images/1.svg',
    title: 'Web apps with real-time monitoring',
    desc: 'Whiteboard, Tic Tac Toe, Bingo and more',
    tutorial: {
      header: {
        date: 'Nov 27, 2022',
        title: 'Monitoring System',
        demo: '/src/assets/images/1.svg'
      },
      content: [
        { type: 'title', text: 'Welcome back!' },
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
      ]
    }
  },
  recommendationsSystem: {
    feature: false,
    date: 'Oct 13, 2022',
    link: 'recommendations-system',
    thumbnail: '/src/assets/images/4.svg',
    title: 'Campaign platform for recruitment',
    desc: 'Recommend potential candidates for prizes',
    tutorial: {
      header: {
        date: 'Oct 13, 2022',
        title: 'Recommendations System',
        demo: '/src/assets/images/4.svg'
      },
      content: [
        { type: 'title', text: 'Hi there' },
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
      ]
    }
  }
}
