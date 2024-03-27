import MonitoringSystemThumbnail from '@/assets/images/1.svg'
import DevelopmentForumThumbnail from '@/assets/images/2.svg'
import JobBoardThumbnail from '@/assets/images/3.svg'
import RecommendationsSystemThumbnail from '@/assets/images/4.svg'
import { jobBoard, recommendationsSystem } from './code'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'
import MonitorIcon from '@/components/icons/MonitorIcon.vue'

export const BLOGS = {
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
        title: 'Chat in Django & React',
        demo: ''
      },
      content: [
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
  },
  about: {
    link: 'about',
    title: 'About me - Kamil Kamiński',
    date: 'Mar 25, 2024',
    sections: [],
    tutorial: {
      header: {
        date: 'Mar 25, 2024',
        read: '1 min read',
        title: "Hi 👋, I'm Kamil",
        demo: ''
      },
      content: [
        {
          type: 'paragraph',
          text:
            'When I was 19 years old I decided to pursue a degree in computer science. During my first semesters I was ' +
            'able to gain knowledge of basic concepts in programming and computer science. The first programming language ' +
            'that I had contact with was C followed by C++.'
        },
        {
          type: 'paragraph',
          text:
            'During next semesters I was introduced to a language called Python which ' +
            'quickly became my go-to language for tackling various projects. Its extensive libraries and ' +
            'frameworks (specifically Django) provided me the tools needed to bring my ideas to life.'
        },
        {
          type: 'paragraph',
          text:
            "I graduated from college in 2020 with a Bachelor's degree and in the same year I undertook a Master's degree " +
            'which I am completing to this day. During this time I did apprenticeships and was offered an internship. ' +
            'After some time I received my first job.'
        },
        {
          type: 'title',
          text: 'Development Experience'
        },
        {
          type: 'paragraph',
          text:
            'You can read more about my experience on my ' +
            '<a href="https://kamilkaminski.pl" target="_blank" rel="noopener noreferrer" class="tutorial__content-link">website</a>.'
        },
        {
          type: 'paragraph',
          text:
            'I recently started a <a href="/blog">blog</a>. The goal is to share some of my experiences throughout my journey as a ' +
            'Software Engineer and provide coding examples on various topics. It also allows me to showcase chunks of my projects and ' +
            'improve my writing skills. 😁'
        },
        {
          type: 'title',
          text: 'Development Tools'
        },
        {
          type: 'subtitle',
          text: 'Backend'
        },
        {
          type: 'paragraph',
          text:
            'Like I said before, my main language is Python, framework Django, libraries Django REST Framework and Django Channels. ' +
            'I also have experience with Flask, SQLAlchemy, Event Sourcing and DDD (domain-driven design).'
        },
        {
          type: 'subtitle',
          text: 'Frontend'
        },
        {
          type: 'paragraph',
          text:
            'My favourite framework is React written in TypeScript. Aside React I also utilize my projects using Vue and for styling ' +
            'CSS and SASS. For smaller projects I usually use JavaScript.'
        },
        {
          type: 'subtitle',
          text: 'Databases and DevOps'
        },
        {
          type: 'paragraph',
          text:
            'For relational databases I use PostgreSQL or MySQL and containerize my projects with Docker. For deployment I use AWS ' +
            "and Vercel. K8's is also a tool that I use quite often."
        },
        {
          type: 'paragraph',
          text: 'Thanks for reading. 🙏'
        },
        {
          type: 'paragraph',
          text: '<strong>"In real open source, you have the right to control your own destiny"</strong> | Linus Torvalds'
        }
      ]
    }
  }
}

export const PROJECTS = {
  jobBoard: {
    feature: true,
    date: 'Oct 7, 2023',
    link: 'job-board',
    thumbnail: JobBoardThumbnail,
    title: 'IT Recruitment Platform',
    desc: 'Search for candidates and apply for jobs',
    tutorial: {
      header: {
        date: 'Oct 7, 2023',
        title: 'Job Board',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/job-board/main/frontend/src/assets/images/demo1.png'
      },
      content: [
        { type: 'title', text: 'Hello! 📝' },
        {
          type: 'paragraph',
          text:
            'Job Board is a web application designed to streamline the job search process for both job seekers and ' +
            'employers. This project aims to provide a user-friendly platform where job seekers can search for relevant ' +
            'job listings and apply for positions, while employers can efficiently post job openings and manage applications.'
        },
        { type: 'title', text: 'Key Features' },
        {
          type: 'list',
          items: [
            '<strong>OAuth (Open Authentication)</strong> is an open standard for access delegation'
          ]
        },
        { type: 'title', text: 'Project Setup' },
        {
          type: 'paragraph',
          text: 'Docker Compose'
        },
        {
          type: 'code',
          lang: jobBoard[0].lang,
          text: jobBoard[0].code
        },
        { type: 'title', text: 'Links' },
        {
          type: 'icons',
          icons: [
            {
              icon: GitHubIcon,
              text: 'GitHub',
              link: 'https://github.com/kamilkaminski01/job-board'
            }
          ]
        }
      ]
    }
  },
  developmentForum: {
    feature: true,
    date: 'Mar 9, 2023',
    link: 'development-forum',
    thumbnail: DevelopmentForumThumbnail,
    title: 'Forum about development topics',
    desc: 'Create topics, rooms and help others',
    tutorial: {
      header: {
        date: 'Mar 9, 2023',
        title: 'Development Forum',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/development-forum/main/app/static/images/demo1.png'
      },
      content: [
        { type: 'title', text: 'Welcome!' },
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        { type: 'title', text: 'Links' },
        {
          type: 'icons',
          icons: [
            {
              icon: GitHubIcon,
              text: 'GitHub',
              link: 'https://github.com/kamilkaminski01/development-forum'
            }
          ]
        }
      ]
    }
  },
  monitoringSystem: {
    feature: true,
    date: 'Nov 27, 2022',
    link: 'monitoring-system',
    thumbnail: MonitoringSystemThumbnail,
    title: 'Web apps with real-time monitoring',
    desc: 'Whiteboard, Tic Tac Toe, Bingo and more',
    tutorial: {
      header: {
        date: 'Nov 27, 2022',
        title: 'Monitoring System',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/monitoring-system/master/frontend/src/assets/images/demo.png'
      },
      content: [
        { type: 'title', text: 'Welcome back!' },
        {
          type: 'paragraph',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        { type: 'title', text: 'Links' },
        {
          type: 'icons',
          icons: [
            {
              icon: GitHubIcon,
              text: 'GitHub',
              link: 'https://github.com/kamilkaminski01/monitoring-system'
            },
            {
              icon: MonitorIcon,
              text: 'Live',
              link: 'https://monitoring-system.app/'
            }
          ]
        }
      ]
    }
  },
  recommendationsSystem: {
    feature: false,
    date: 'Oct 13, 2022',
    link: 'recommendations-system',
    thumbnail: RecommendationsSystemThumbnail,
    title: 'Campaign platform for recruitment',
    desc: 'Recommend potential candidates for prizes',
    tutorial: {
      header: {
        date: 'Oct 13, 2022',
        read: '2 min read',
        title: 'Recommendations System',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/recommendations-system/main/frontend/src/assets/images/demo1.png'
      },
      content: [
        { type: 'title', text: 'Hello friend! 👋' },
        {
          type: 'paragraph',
          text:
            '<strong>Recommendations System</strong> is a project based on recruitment and advertisement for companies. Companies can ' +
            'log in to the Django admin panel and publish their offers.'
        },
        {
          type: 'paragraph',
          text:
            'On the other hand, users can register, log in to the site, ' +
            'browse offers and recommend candidates in recruitment offers or advertise commercial offers for potential clients. ' +
            'When the company hires a referred candidate or sells a product for a customer that has been recommended, the referrer ' +
            'receives points declared in the offer as a reward. 🎁'
        },
        {
          type: 'paragraph',
          text:
            'Thanks to this feature, the recommender can spend their points in a shop ' +
            "that's available on the site. Products in the shop are added and maintained by the owner of the site."
        },
        { type: 'title', text: 'Technology' },
        {
          type: 'list',
          items: [
            '<strong>The backend side</strong> is built with Python, <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a> and ' +
              '<a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">Django REST Framework</a>.',
            '<strong>The frontend side</strong> is built with JavaScript, <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React.js</a> and ' +
              '<a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SCSS</a>.',
            '<strong>The database</strong> is handled by <a href="https://www.postgresql.org.pl/" target="_blank" rel="noopener noreferrer">Postgres</a> in a ' +
              '<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> container.'
          ]
        },
        { type: 'title', text: 'Running the app' },
        {
          type: 'paragraph',
          text: 'Docker Compose setup:'
        },
        {
          type: 'code',
          lang: recommendationsSystem[0].lang,
          text: recommendationsSystem[0].code
        },
        {
          type: 'warning',
          text:
            'Note that you need <a href="https://docs.docker.com/compose/migrate/" target="_blank" rel="noopener noreferrer">Compose V2</a> ' +
            'in order to run these Docker commands successfully'
        },
        {
          type: 'paragraph',
          text: 'If <code class="inline-code">make</code> is not supported you can use the following Docker Compose commands:'
        },
        {
          type: 'code',
          lang: recommendationsSystem[1].lang,
          text: recommendationsSystem[1].code
        },
        {
          type: 'title',
          text: 'Application setup'
        },
        {
          type: 'paragraph',
          text:
            'After running the app, you can set up the database with mocked data thanks to the ' +
            '<code class="inline-code">make initial-data</code> command. More information about what data will populate the database ' +
            'is available 👉 ' +
            '<a href="https://github.com/kamilkaminski01/recommendations-system?tab=readme-ov-file#application-setup" target="_blank" rel="noopener noreferrer">here</a>.'
        },
        { type: 'title', text: 'Links' },
        {
          type: 'icons',
          icons: [
            {
              icon: GitHubIcon,
              text: 'GitHub',
              link: 'https://github.com/kamilkaminski01/recommendations-system'
            }
          ]
        }
      ]
    }
  }
}
