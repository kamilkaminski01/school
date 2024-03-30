import MonitoringSystemThumbnail from '@/assets/images/monitoring-system.png'
import DevelopmentForumThumbnail from '@/assets/images/development-forum.png'
import JobBoardThumbnail from '@/assets/images/job-board.png'
import RecommendationsSystemThumbnail from '@/assets/images/recommendations-system.png'
import { CONTENT_TYPE } from '@/models/tutorial'
import { developmentForum, jobBoard, monitoringSystem, recommendationsSystem } from './code'
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
          type: CONTENT_TYPE.paragraph,
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
          type: CONTENT_TYPE.paragraph,
          text:
            'When I was 19 years old I decided to pursue a degree in computer science. During my first semesters I was ' +
            'able to gain knowledge of basic concepts in programming and computer science. The first programming language ' +
            'that I had contact with was C followed by C++.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'During next semesters I was introduced to a language called Python which ' +
            'quickly became my go-to language for tackling various projects. Its extensive libraries and ' +
            'frameworks (specifically Django) provided me the tools needed to bring my ideas to life.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            "I graduated from college in 2020 with a Bachelor's degree and in the same year I undertook a Master's degree " +
            'which I am completing to this day. During this time I did apprenticeships and was offered an internship. ' +
            'After some time I received my first job.'
        },
        {
          type: CONTENT_TYPE.title,
          text: 'Development Experience'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'You can read more about my experience on my ' +
            '<a href="https://kamilkaminski.pl" target="_blank" rel="noopener noreferrer" class="tutorial__content-link">website</a>.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'I recently started a <a href="/blog">blog</a>. The goal is to share some of my experiences throughout my journey as a ' +
            'Software Engineer and provide coding examples on various topics. It also allows me to showcase chunks of my projects and ' +
            'improve my writing skills. 😁'
        },
        {
          type: CONTENT_TYPE.title,
          text: 'Development Tools'
        },
        {
          type: CONTENT_TYPE.subtitle,
          text: 'Backend'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'Like I said before, my main language is Python, framework Django, libraries Django REST Framework and Django Channels. ' +
            'I also have experience with Flask, SQLAlchemy, Event Sourcing and DDD (domain-driven design).'
        },
        {
          type: CONTENT_TYPE.subtitle,
          text: 'Frontend'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'My favourite framework is React written in TypeScript. Aside React I also utilize my projects using Vue and for styling ' +
            'CSS and SASS. For smaller projects I usually use JavaScript.'
        },
        {
          type: CONTENT_TYPE.subtitle,
          text: 'Databases and DevOps'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'For relational databases I use PostgreSQL or MySQL and containerize my projects with Docker. For deployment I use AWS ' +
            "and Vercel. K8's is also a tool that I use quite often."
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Thanks for reading. 🙏'
        },
        {
          type: CONTENT_TYPE.paragraph,
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
        read: '3 min read',
        title: 'Job Board',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/job-board/main/frontend/src/assets/images/demo1.png'
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Hello! 📝' },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            '<strong>Job Board</strong> is a web application designed to streamline the job search process for both jobseekers and ' +
            'employers. This project aims to provide a platform where people can search for relevant ' +
            'jobs in the IT industry and apply for positions, while employers can post job offers and manage their candidates.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'Creating this project I was inspired by the <a href="https://justjoin.it/" target="_blank" rel="noopener noreferrer">Just Join IT</a> platform and ' +
            'while searching for my first job this was my go-to website. In my opinion their UX/UI design is very user-friendly, so I challenged myself to ' +
            'create something similar. 😎'
        },
        { type: CONTENT_TYPE.title, text: 'Technologies' },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            '<a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a> for the server side application aside with ' +
              '<a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">Django REST Framework</a> for the REST API',
            '<a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> written in TypeScript for the user interface',
            '<a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a> for styling',
            '<a href="https://www.postgresql.org.pl/" target="_blank" rel="noopener noreferrer">Postgres</a> for the database',
            '<a href="https://python-rq.org/" target="_blank" rel="noopener noreferrer">RQ</a> for an asynchronous worker for time-consuming tasks such as sending emails.',
            'Everything running in a <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> environment'
          ]
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'More technical details can be found in the ' +
            '<a href="https://github.com/kamilkaminski01/job-board#readme" target="_blank" rel="noopener noreferrer">README</a> project.'
        },
        { type: CONTENT_TYPE.title, text: 'Key Features' },
        {
          type: CONTENT_TYPE.quote,
          text:
            '<strong>Social authentication</strong> - users can register and login through Google OAuth 2.0 or GitHub OAuth. Users can dive into the site ' +
            'using their existing Google or GitHub account, eliminating the need to create or remember additional credentials.'
        },
        {
          type: CONTENT_TYPE.quote,
          text:
            '<strong>Emailing</strong> - when applying for a job offer, a candidate as well as the employer receive notifications in a form of an email. This ' +
            'feature is handled by <a href="https://aws.amazon.com/ses/" target="_blank" rel="noopener noreferrer">AWS SES</a>.'
        },
        {
          type: CONTENT_TYPE.quote,
          text: '<strong>Pagination</strong> - jobs are listed 20 per page which provides optimization during searching.'
        },
        {
          type: CONTENT_TYPE.quote,
          text: '<strong>Filters</strong> - offers can be filtered by newest, minimal or maximal salary or by the salary range of an offer.'
        },
        {
          type: CONTENT_TYPE.quote,
          text:
            '<strong>Global colors customization</strong> - main, secondary and details like hover colors can be modified through the Django admin panel by the ' +
            'maintainer of the site.'
        },
        {
          type: CONTENT_TYPE.quote,
          text:
            '<strong>Skeletons</strong> - during loading job offers instead of a blank space, skeletons mimic the structure and layout of the content that is being loaded, ' +
            'indicating that the page is actively fetching data.'
        },
        {
          type: CONTENT_TYPE.warning,
          text: 'Note that to use AWS SES or social OAuth you need additional configurations on their sites'
        },
        { type: CONTENT_TYPE.title, text: 'Project Setup' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Make sure you have <a href="https://docs.docker.com/compose/migrate/" target="_blank" rel="noopener noreferrer">Compose V2</a> installed:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: jobBoard[0].lang,
          text: jobBoard[0].code
        },
        { type: CONTENT_TYPE.title, text: 'Application setup' },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'The database can be initialized with mocked data thanks to the <code class="inline-code">make initial-data</code> command. ' +
            'More information on what data will populate the database can be found ' +
            '<a href="https://github.com/kamilkaminski01/job-board?tab=readme-ov-file#application-setup" target="_blank" rel="noopener noreferrer">here</a>.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'If <code class="inline-code">make</code> is not supported, you can use <code class="inline-code">python manage.py initialize_data</code>'
        },
        { type: CONTENT_TYPE.title, text: 'Usage workflow' },
        {
          type: CONTENT_TYPE.orderedList,
          items: [
            'A maintainer of the site registers companies through the admin panel',
            'The company representative logs into the admin panel and creates jobs offers',
            'A user registers on the site and updates his profile with additional information',
            'The user seeks, finds a job offer and then applies',
            'Both candidate and company receive emails notifying that the application has had place',
            'Companies representatives manages candidates applications for their job offers',
            'The user can see his applications history on his profile'
          ]
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Additionally the owner/maintainer of the site can modify global colors of the frontend app, send emails to users/companies and more. 👨🏽‍💻'
        },
        { type: CONTENT_TYPE.title, text: 'Links' },
        {
          type: CONTENT_TYPE.icons,
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
    title: 'Forum for software topics',
    desc: 'Create topics, rooms and help others',
    tutorial: {
      header: {
        date: 'Mar 9, 2023',
        read: '2 min read',
        title: 'Development Forum',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/development-forum/main/app/static/images/demo1.png'
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Hi friend 👋🏼' },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'This project is a question-and-answer/forum website for developers similar to ' +
            '<a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">Stack Overflow</a>. Users can public ' +
            'a question in a self-made topic or an existing one. The site is not narrowed down to just questions because users can ' +
            'also discuss on computer programming topics and its surroundings.'
        },
        { type: CONTENT_TYPE.title, text: 'Key features' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'CRUD operations, authentication and searching are all included, but in details:'
        },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            'Session based authentication',
            'User profile personalization',
            'User functions such as moderators and superusers',
            'CRUD operations on topics, rooms, replies and users',
            'Ability to search for rooms of interest'
          ]
        },
        { type: CONTENT_TYPE.title, text: 'Technology' },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            '<strong>Development Forum</strong> leverages <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a> ' +
            'for the web server framework and HTML/CSS for the frontend side. Additional requirements can be found in the ' +
            '<a href="https://github.com/kamilkaminski01/development-forum/blob/main/requirements.txt" target="_blank" rel="noopener noreferrer">requirements.txt</a> file, ' +
            "but it's nothing major."
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'Additionally, there is a <a href="https://github.com/kamilkaminski01/development-forum/blob/main/Dockerfile" target="_blank" rel="noopener noreferrer">Dockerfile</a> ' +
            'because in the past I pushed this project into production on <a href="https://railway.app/" target="_blank" rel="noopener noreferrer">Railway</a>. To find some Docker commands ' +
            'that can be used for this application, head over to the <a href="https://github.com/kamilkaminski01/development-forum/blob/main/Makefile" target="_blank" rel="noopener noreferrer">Makefile</a>.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'Static files such as profile avatars can be hosted on <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">AWS S3</a> and this project is ready for just that. ' +
            'Environment variables are set in the <code class="inline-code">app/.env</code> file.'
        },
        { type: CONTENT_TYPE.title, text: 'Running the app' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Clone the repo and create a virtual environment:'
        },
        { type: CONTENT_TYPE.code, lang: developmentForum[0].lang, text: developmentForum[0].code },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Install the dependencies and initialize the database with migrations:'
        },
        { type: CONTENT_TYPE.code, lang: developmentForum[1].lang, text: developmentForum[1].code },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Finally, run the app ⚡️:'
        },
        { type: CONTENT_TYPE.code, lang: developmentForum[2].lang, text: developmentForum[2].code },
        { type: CONTENT_TYPE.title, text: 'Application setup' },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'The database can be initialized with mocked data. More information on what data will populate the database can be found 👉🏼 ' +
            '<a href="https://github.com/kamilkaminski01/development-forum?tab=readme-ov-file#application-setup" target="_blank" rel="noopener noreferrer">here</a>. ' +
            'Thanks to this custom command you can dive straight into work without wasting any time. Here are the required steps:'
        },
        { type: CONTENT_TYPE.code, lang: developmentForum[3].lang, text: developmentForum[3].code },
        {
          type: CONTENT_TYPE.paragraph,
          text: "If your machine doesn't support <code class='inline-code'>make</code>, cd in to the <code class='inline-code'>app/</code> directory and run this:"
        },
        { type: CONTENT_TYPE.code, lang: developmentForum[4].lang, text: developmentForum[4].code },
        { type: CONTENT_TYPE.title, text: 'Credits' },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'This project was forked from Dennis Ivy&apos;s <a href="https://github.com/divanov11/StudyBud/" target="_blank" rel="noopener noreferrer">Study Bud</a>. Check ' +
            'out his free <a href="https://www.youtube.com/watch?v=PtQiiknWUcI" target="_blank" rel="noopener noreferrer">course</a> on how he created it.'
        },
        { type: CONTENT_TYPE.title, text: 'Links' },
        {
          type: CONTENT_TYPE.icons,
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
        read: '3 min read',
        title: 'Monitoring System',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/monitoring-system/master/frontend/src/assets/images/demo.png'
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Welcome back! 🖥️' },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'In a nutshell, this project is a platform for users to interact within web apps and games. ' +
            'Monitoring System also provides a dashboard that unlocks additional features for authenticated users. Thanks to this ' +
            'component, every web app on the platform can be tracked in real-time.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'Aside to the web apps and its measurements, users can message each other through dedicated chats. These chats also ' +
            'provide notifications about game actions. I wrote a whole tutorial about creating this kind of chat, ' +
            'you can check it out 👉🏼 <a href="/blog/django-react-chat">here</a>.'
        },
        { type: CONTENT_TYPE.title, text: 'Web apps' },
        {
          type: CONTENT_TYPE.quote,
          text:
            '<strong>Whiteboard</strong> is a simple drawing application that can handle up to 5 users per room. A special menu provides ' +
            'information about participants in a whiteboard and are they or active or not.'
        },
        {
          type: CONTENT_TYPE.quote,
          text:
            '<strong>Fifteen Puzzle</strong> is a single player logic game. The goal of the puzzle is to place the tiles in numerical ' +
            'order (from left to right, top to bottom). Additionally, there is a counter that tracks every tile move, the fewer moves the better. 😎'
        },
        {
          type: CONTENT_TYPE.quote,
          text:
            '<strong>Tic Tac Toe</strong> is the standard game as you know it. Two players join a room, declare that they are ready and can play ' +
            'numerous rounds. Features like tracking the activity of players or their turns are also included.'
        },
        {
          type: CONTENT_TYPE.quote,
          text:
            '<strong>Bingo</strong> is a multiplayer game. To win you should collect every letter from the word BINGO first, amongst all the players in the ' +
            'room. For every row, column or diagonal of chosen numbers you get one letter. Every player gets provided a different board but the total ' +
            'of numbers is shared. A number can be chosen once and every player gets a turn to choose every round.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Multiplayer web apps provide a menu to create or join rooms. Beneath these options, you can see rooms that are online at the moment.'
        },
        { type: CONTENT_TYPE.title, text: 'Core features technologies' },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'Real-time communication while being connected to a web app is handled by the WebSocket protocol. Current state ' +
            'retrieval when connecting to a web app is supported through a REST API.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'I mentioned used technologies in the about page on the live site, check it out here ' +
            '👉🏼 <a href="https://monitoring-system.app/about" target="_blank" rel="noopener noreferrer">here</a>. <br />' +
            'In terms of libraries and building tools: '
        },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            '<a href="https://github.com/django/daphne" target="_blank" rel="noopener noreferrer">Daphne</a>',
            '<a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">Django REST Framework</a>',
            '<a href="https://channels.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Django Channels</a>',
            '<a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite.js</a>',
            '<a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener noreferrer">Axios</a>',
            '<a href="https://github.com/robtaussig/react-use-websocket" target="_blank" rel="noopener noreferrer">React useWebSocket</a>'
          ]
        },
        { type: CONTENT_TYPE.title, text: 'Docker Compose setup' },
        { type: CONTENT_TYPE.code, lang: monitoringSystem[0].lang, text: monitoringSystem[0].code },
        {
          type: CONTENT_TYPE.note,
          text:
            '👍🏼 Make rules can be found in the ' +
            '<a href="https://github.com/kamilkaminski01/monitoring-system/blob/master/Makefile" target="_blank" rel="noopener noreferrer">Makefile</a>. ' +
            'Note that this project runs in a <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> environment.'
        },
        { type: CONTENT_TYPE.title, text: 'Worth mentioning' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'This is a production ready project, therefore you can find two docker compose yaml files:'
        },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            '<code class="inline-code">docker-compose.yml</code> is designed for development purposes.',
            '<code class="inline-code">docker-compose-prod.yml</code> is designed for production purposes.'
          ]
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'Environment variables can be found in the <code class="inline-code">.envs/</code> directory. In order to use production based docker compose commands use the ' +
            '<code class="inline-code">env=prod</code> flag, for example: <code class="inline-code">make build env=prod</code>'
        },
        { type: CONTENT_TYPE.title, text: 'Conclusion' },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'It took me some time to create this project from scratch, but it was worth it. I learned not only about real-time communication ' +
            'on the backend and frontend side but also deployment to a cloud based server provider such as <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS</a>. ' +
            "That's it for this project, thank you for your time. 🎉"
        },
        { type: CONTENT_TYPE.title, text: 'Links' },
        {
          type: CONTENT_TYPE.icons,
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
        { type: CONTENT_TYPE.title, text: 'Hello friend! 👋' },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            '<strong>Recommendations System</strong> is a project based on recruitment and advertisement for companies. Companies can ' +
            'log in to the Django admin panel and publish their offers.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'On the other hand, users can register, log in to the site, ' +
            'browse offers and recommend candidates in recruitment offers or advertise commercial offers for potential clients. ' +
            'When the company hires a referred candidate or sells a product for a customer that has been recommended, the referrer ' +
            'receives points declared in the offer as a reward. 🎁'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'Thanks to this feature, the recommender can spend their points in a shop ' +
            "that's available on the site. Products in the shop are added and maintained by the owner of the site."
        },
        { type: CONTENT_TYPE.title, text: 'Technology' },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            '<strong>The backend side</strong> is built with Python, <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a> and ' +
              '<a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">Django REST Framework</a>.',
            '<strong>The frontend side</strong> is built with JavaScript, <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React.js</a> and ' +
              '<a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SCSS</a>.',
            '<strong>The database</strong> is handled by <a href="https://www.postgresql.org.pl/" target="_blank" rel="noopener noreferrer">Postgres</a> in a ' +
              '<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> container.'
          ]
        },
        { type: CONTENT_TYPE.title, text: 'Running the app' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Docker Compose setup:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: recommendationsSystem[0].lang,
          text: recommendationsSystem[0].code
        },
        {
          type: CONTENT_TYPE.warning,
          text:
            'Note that you need <a href="https://docs.docker.com/compose/migrate/" target="_blank" rel="noopener noreferrer">Compose V2</a> ' +
            'in order to run these Docker commands successfully'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'If <code class="inline-code">make</code> is not supported you can use the following Docker Compose commands:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: recommendationsSystem[1].lang,
          text: recommendationsSystem[1].code
        },
        {
          type: CONTENT_TYPE.title,
          text: 'Application setup'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text:
            'After running the app, you can set up the database with mocked data thanks to the ' +
            '<code class="inline-code">make initial-data</code> command. More information about what data will populate the database ' +
            'is available 👉 ' +
            '<a href="https://github.com/kamilkaminski01/recommendations-system?tab=readme-ov-file#application-setup" target="_blank" rel="noopener noreferrer">here</a>.'
        },
        { type: CONTENT_TYPE.title, text: 'Links' },
        {
          type: CONTENT_TYPE.icons,
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
