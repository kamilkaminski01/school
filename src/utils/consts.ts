import ProjectThumbnailRecommendSystem from '@/assets/images/projects/recommendations-system.png'
import ProjectThumbnailMonitoringSystem from '@/assets/images/projects/monitoring-system.png'
import ProjectThumbnailDevelopmentForum from '@/assets/images/projects/development-forum.png'
import ProjectThumbnailJobBoard from '@/assets/images/projects/job-board.png'
import ProjectThumbnailEventsManager from '@/assets/images/projects/events-manager.png'
import BlogDjangoReactChatThumbnail from '@/assets/images/blogs/djangoReactChat/thumbnail.png'
import BlogDjangoReactChat1 from '@/assets/images/blogs/djangoReactChat/first-run.png'
import BlogDjangoReactChat2 from '@/assets/images/blogs/djangoReactChat/first-glance.png'
import BlogDjangoReactChat3 from '@/assets/images/blogs/djangoReactChat/demo.png'
import GitLabCiCdPipelineThumbnail from '@/assets/images/blogs/gitlabCiCdPipeline/thumbnail.svg'
import GitLabCiCdPipeline1 from '@/assets/images/blogs/gitlabCiCdPipeline/variables.png'
import GitLabCiCdPipeline2 from '@/assets/images/blogs/gitlabCiCdPipeline/pipeline.png'
import GitLabCiCdPipeline3 from '@/assets/images/blogs/gitlabCiCdPipeline/jobs.png'
import GitLabCiCdPipeline4 from '@/assets/images/blogs/gitlabCiCdPipeline/stage.png'
import JenkinsCiCdPipelineThumbnail from '@/assets/images/blogs/jenkinsCiCdPipeline/jenkins-docker.png'
import JenkinsCiCdPipeline1 from '@/assets/images/blogs/jenkinsCiCdPipeline/gitlab-access-token.png'
import JenkinsCiCdPipeline2 from '@/assets/images/blogs/jenkinsCiCdPipeline/jenkins-new-credentials.png'
import JenkinsCiCdPipeline3 from '@/assets/images/blogs/jenkinsCiCdPipeline/jenkins-gitlab-config.png'
import JenkinsCiCdPipeline4 from '@/assets/images/blogs/jenkinsCiCdPipeline/multibranch-pipeline.png'
import JenkinsCiCdPipeline5 from '@/assets/images/blogs/jenkinsCiCdPipeline/pipeline-settings.png'
import JenkinsCiCdPipeline6 from '@/assets/images/blogs/jenkinsCiCdPipeline/gitlab-jenkins-integration.png'
import JenkinsCiCdPipeline7 from '@/assets/images/blogs/jenkinsCiCdPipeline/lockable-resource.png'
import JenkinsCiCdPipeline8 from '@/assets/images/blogs/jenkinsCiCdPipeline/jenkins-credentials.png'
import JenkinsCiCdPipeline9 from '@/assets/images/blogs/jenkinsCiCdPipeline/gitlab-pipeline-status.png'
import JenkinsCiCdPipeline10 from '@/assets/images/blogs/jenkinsCiCdPipeline/gitlab-pipeline-jobs.png'
import JenkinsCiCdPipeline11 from '@/assets/images/blogs/jenkinsCiCdPipeline/blue-ocean-pipeline.png'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'
import MonitorIcon from '@/components/icons/MonitorIcon.vue'
import { CONTENT_TYPE } from '@/models/tutorial'
import {
  blogCodeDjangoReactChat,
  blogCodeGitLabCiCdPipeline,
  blogCodeJenkinsCiCdPipeline,
  projectCodeDevelopmentForum,
  projectCodeEventsManager,
  projectCodeJobBoard,
  projectCodeMonitoringSystem,
  projectCodeRecommendSystem
} from './code'
import { blogTreesDjangoReactChat, blogTreesGitLabCiCdPipeline } from '@/utils/trees'

export const BLOGS = {
  jenkinsCiCdPipeline: {
    link: 'jenkins-ci-cd-pipeline',
    title: 'Jenkins CI/CD Pipeline',
    subtitle: 'Test, Build, Deploy with Jenkins | 10 min read',
    date: 'Aug 1, 2024',
    tutorial: {
      header: {
        date: 'Aug 1, 2024',
        readTime: '10 min read',
        title: 'Jenkins CI/CD Pipeline',
        demo: JenkinsCiCdPipelineThumbnail
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Hi there 🤵🏻' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'I am happy to share this guide on creating a Jenkins pipeline that will run tests, builds and deployments for an application ensuring CI/CD. We will start with a brief configuration of a Jenkins controller and get on to defining a <strong>Jenkinsfile</strong> with scripted pipeline syntax written in Groovy.'
        },
        { type: CONTENT_TYPE.title, text: 'Prerequisites' },
        {
          type: CONTENT_TYPE.quote,
          text: 'The Jenkins controller and jobs will run in a Docker environment, so make sure that you have <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> installed on your machine.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Jenkins documentation provides a great step-by-step tutorial on how to set up Jenkins on any machine. In my case I followed the <a href="https://www.jenkins.io/doc/book/installing/docker/#on-macos-and-linux" target="_blank" rel="noopener noreferrer">macOS and Linux</a> guide on my remote server and ran <strong>dind</strong> and <strong>Blue Ocean</strong>.'
        },
        {
          type: CONTENT_TYPE.quote,
          text: 'An application will be needed that could be tested, built and deployed to a server. In this case I will be implementing CI/CD for a project that is described 👉🏼 <a href="/projects/monitoring-system">here</a>.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Language, framework or used technologies don\'t matter in your chosen project. For the needs of this guide, it is important that the project can be tested, built into Docker images and the images can be pushed to a repository. We will create backend and frontend images and push them to <a href=\'https://hub.docker.com/\'  target="_blank" rel="noopener noreferrer">Docker Hub</a>.'
        },
        {
          type: CONTENT_TYPE.quote,
          text: 'The project should be stored in a <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">GitLab</a> repository since we are going to integrate our pipeline with the GitLab UI. Although this is not mandatory, it enhances the development experience which Jenkins and GitLab integration provides.'
        },
        { type: CONTENT_TYPE.title, text: 'Plugins' },
        {
          type: CONTENT_TYPE.paragraph,
          text: "After running Jenkins and logging in with your initial admin password, let's get on to installing plugins that will help with our jobs and enable GitLab integration. In order to do that navigate to Manage Jenkins -> Plugins -> Available plugins and search for:"
        },
        {
          type: CONTENT_TYPE.orderedList,
          items: [
            'GitLab API Plugin',
            'GitLab Authentication plugin',
            'GitLab Plugin',
            'Lockable Resources plugin',
            'Docker plugin'
          ]
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Install the listed plugins and make sure they are displayed in the "Available plugins" tab.'
        },
        { type: CONTENT_TYPE.title, text: 'GitLab access token' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Now let\'s create a GitLab access token for the Jenkins controller. Log in to your GitLab account, select "Access tokens" in user settings and create a personal access token with the "api" scope selected'
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline1 },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Navigate back to Jenkins and select Manage Jenkins -> Credentials -> System -> Global credentials -> Add Credentials. Here we will add credentials to authenticate Jenkins with our GitLab account. Select the "GitLab API Token" option and provide your created personal access token in GitLab:'
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline2 },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'To use the created credentials go to Manage Jenkins -> System and scroll down to the "GitLab" section. Here, set the options as provided in the image below:'
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline3 },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Verify if the connection works with the "Test Connection" button. If a <strong>Success</strong> message appears, it means that you configured Jenkins -> GitLab correctly. We will also need to integrate our GitLab account with Jenkins but now let\'s proceed to our pipeline creation.'
        },
        {
          type: CONTENT_TYPE.title,
          text: 'Creating a pipeline'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'To create a pipeline, go to the dashboard and choose "New Item". Jenkins provides multiple options when creating pipelines or jobs, but in this case we will pick <strong>Multibranch Pipeline</strong> and name it by the name of the project (in my case it will be monitoring-system, but you can name it whatever your project is named).'
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline4 },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Next, we need to configure the pipeline "Branch Sources" settings. My choice is to clone the repository through SSH, so I provided the repository SSH url, forwarded by creating SSH credentials named "jenkins".'
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline5 },
        { type: CONTENT_TYPE.subtitle, text: 'SSH Credentials' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'We will need to create SSH keys in our Jenkins container, because jobs such as cloning repositories will be ran by Jenkins (also in Docker containers). In order to do this, we need to assign the created SSH key to our GitLab account.'
        },
        {
          type: CONTENT_TYPE.note,
          text: "📝 Worth noting that that's why we need <strong>dind</strong> which stands for Docker in Docker"
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'To create SSH public and private keys in a Jenkins container, you can go through these steps:'
        },
        {
          type: CONTENT_TYPE.orderedList,
          items: [
            'Exec into the jenkins blue ocean container: <code class="inline-code">docker exec -it jenkins-blueocean bash</code>',
            'Create the ssh public and private keys: <code class="inline-code">ssh-keygen -t rsa -b 4096</code>',
            'Print the created public key with: <code class="inline-code">cat ~/.ssh/id_rsa.pub</code>',
            'Copy the key and assign it to your GitLab account at User settings -> SSH Keys -> Add new key'
          ]
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Going back to pipeline settings. To assign <strong>jenkins</strong> as credentials, first navigate to Manage Jenkins -> Credentials -> System -> Global Credentials -> Add Credentials, pick the "SSH Username with private key" option and paste the previously created private key in our Jenkins container under the "Private Key" field. You can copy it by going through the same steps as said above but instead of <code class="inline-code">id_rsa.pub</code> you should cat <code class="inline-code">id_rsa</code>.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Once the pipeline options get completed, make sure to save the changes.'
        },
        { type: CONTENT_TYPE.title, text: 'GitLab integration' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Previously we integrated Jenkins -> GitLab, now we need to integrate GitLab -> Jenkins. Select your project in GitLab, open the integrations tab in the projects settings and select "Configure" besides the Jenkins option.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Here you will need to provide the Jenkins server URL. You can get this value under Manage Jenkins -> System -> Jenkins Location section and by copying the Jenkins URL. My configuration looks like this:'
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline6 },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Remember that your configuration will be different depending on your Jenkins server URL, project name and user credentials for the Jenkins server. If your configuration will be correct, a <strong>Connection successful</strong> message will appear when clicking the <code class="inline-code">Test settings</code> button.'
        },
        { type: CONTENT_TYPE.title, text: 'Defining a Jenkinsfile' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'At this point we set up a Jenkins controller and integrated our GitLab account and project with Jenkins. It\'s finally time to define jobs that will test, build and deploy our project. According to Jenkins <a href="https://www.jenkins.io/doc/book/pipeline/pipeline-as-code/" target="_blank" rel="noopener noreferrer">Pipeline as Code</a> documentation, we should create a file named <code class=\'inline-code\'>Jenkinsfile</code> in the repository root.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'As I mentioned before, we will define our <code class="inline-code">Jenkinsfile</code> in a scripted pipeline syntax. This allows us to bypass some limitations of the declarative syntax.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Start from the "node" block and <code class="inline-code">onBuild()</code>, <code class="inline-code">onFinal()</code> functions in a try/except block:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeJenkinsCiCdPipeline[0].lang,
          text: blogCodeJenkinsCiCdPipeline[0].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'As you can see, the main function is called <code class="inline-code">onBuild</code>, but of course we need to be resilient to errors, so we wrapped the function in a try/except block. <code class="inline-code">onFinal</code> will serve as a cleanup function and <code class="inline-code">onError</code> will be called when a stage fails in our main function:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeJenkinsCiCdPipeline[1].lang,
          text: blogCodeJenkinsCiCdPipeline[1].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'The function runs a <code class="inline-code">make clear</code> command which is defined in my projects <code class="inline-code">Makefile</code> - check out the defined rules <a href="https://github.com/kamilkaminski01/monitoring-system/blob/master/Makefile" target="_blank" rel="noopener noreferrer">here</a>. <code class="inline-code">cleanWs()</code> is a function that the <a href="https://www.jenkins.io/doc/pipeline/steps/ws-cleanup/" target="_blank" rel="noopener noreferrer">Workspace Cleanup Plugin</a> provides. It should be installed by default on your Jenkins instance, if not please install it.'
        },
        {
          type: CONTENT_TYPE.note,
          text: '💡 <code class="inline-code">updateGitlabCommitStatus</code> is a function provided by the <a href="https://www.jenkins.io/doc/pipeline/steps/gitlab-plugin/" target="_blank" rel="noopener noreferrer">GitLab Plugin</a>. It\'s also going to be used in other stages to update the status of our running pipeline'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Moving on, let's define some helper functions that in the past could be easily refactored depending on the project in which this <code class='inline-code'>Jenkinsfile</code> will be found without actually modifying the logic of the script:"
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeJenkinsCiCdPipeline[2].lang,
          text: blogCodeJenkinsCiCdPipeline[2].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'A quick explanation about whats going on in these functions:'
        },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            '<code class="inline-code">import org.jenkinsci.plugins.pipeline.modeldefinition.Utils</code> this imported function will be used in later stages, but because these function are on the top-level of the script I also included it',
            '<code class="inline-code">getGitlabConnection()</code> here we are returning the GitLab connection name defined in Manage Jenkins -> System -> GitLab section',
            '<code class="inline-code">getDeployBranches</code> this is a helper function for <code class="inline-code">isDeployBranch</code> where we return a list of branches on which our build and deploy stages should execute',
            '<code class="inline-code">getProject</code> returns our projects name. Also, a helper function used in the deploy stage and for returning the images repository url',
            '<code class="inline-code">isDeployBranch</code> as described in the comment - returns True if the build should be pushed to a registry and deployed',
            '<code class="inline-code">getImagesRepository</code> returns a string that includes the registry user and project for example: "tester/example-project"'
          ]
        },
        { type: CONTENT_TYPE.subtitle, text: 'Environment variables' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Jenkins provides a lot of built-in environment variables listed in the <code class="inline-code">/env-vars.html/</code> path of your Jenkins instance. Environment variables can be used in pipelines with <code class="inline-code">&#36;{env.&lt;VARIABLE&gt;}</code> or simply <code class="inline-code">&#36;{&lt;VARIABLE&gt;}</code>. As you can see, there isn\'t any built-in environment variable as <code class=\'inline-code\'>REGISTRY_USER</code>, which means it needs to be defined manually. To define custom variables go to Manage Jenkins -> System, select "Environment variables" and provide a name and value of the variable - in this case the image registry user.'
        },
        { type: CONTENT_TYPE.subtitle, text: 'Main onBuild function' },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Now let's define our main function where we will implement most of the logic. As you know, a pipeline consists of several steps that can be grouped in stages. Among these stages we will:"
        },
        {
          type: CONTENT_TYPE.orderedList,
          items: [
            'Pull code from the repository',
            'Run unit tests',
            'Perform static code checks',
            'Build the newly pushed code into docker images',
            'Push the built images to a registry',
            'Deploy the images to a server'
          ]
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Starting from establishing the GitLab connection, pulling code from the repository and building an environment for unit tests and static code checks:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeJenkinsCiCdPipeline[3].lang,
          text: blogCodeJenkinsCiCdPipeline[3].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Going on, we installed <code class="inline-code">Lockable Resources plugin</code> because we must avoid conflicts in case that other builds are not using same the ports. That is why tests and clean code check stages have to be locked. This can be possible by adding a lockable resource at Manage Jenkins -> System and scrolling down to "Lockable Resources Manager". Here add a resource called <strong>docker_compose_run</strong>:'
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline7 },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Additional information about lockable resources can be found in the <a href="https://plugins.jenkins.io/lockable-resources/" target="_blank" rel="noopener noreferrer">Lockable Resources documentation</a>. Now let\'s wrap our stages in a <code class="inline-code">lock</code> function provided by the plugin:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeJenkinsCiCdPipeline[4].lang,
          text: blogCodeJenkinsCiCdPipeline[4].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'As you can see, we are running our tests and clean code checks thanks to rules defined in the <code class="inline-code">Makefile</code>. Before and after every executed rule we are keeping the pipeline status in GitLab up-to-date while going through each stage.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Testing and clean code check stages are ran on every branch ensuring that the pushed code meets with high quality and doesn't brake anything. That means that if we are pushing our code into a fix/feature branch or just any other branch than <strong>master</strong> - the docker build, docker push and deploy stages won't execute."
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Starting from the <strong>Docker build</strong> stage where we will build docker images of the backend and frontend side of our application:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeJenkinsCiCdPipeline[5].lang,
          text: blogCodeJenkinsCiCdPipeline[5].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: "After building, it's time to push the created images. An important aspect of pipelines is handling sensitive data such as credentials. When running a pipeline, the machine logs information about the progress of running jobs. For security reasons we don't want to log passwords, keys or any other secret information, that's why Jenkins provides a built-in plugin called <a href='https://www.jenkins.io/doc/pipeline/steps/credentials-binding/' target=\"_blank\" rel=\"noopener noreferrer\">Credentials Binding Plugin</a>."
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'This plugin allows us to use a withCredentials wrapper thanks to which we can access credentials from our Jenkins credentials settings and define them as variables within the scope of the step. This is needed for our <strong>Docker push</strong> stage because we need to be authenticated before pushing images into a repository: '
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeJenkinsCiCdPipeline[6].lang,
          text: blogCodeJenkinsCiCdPipeline[6].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'With credentials settings being said, here is how the credentials settings in this case look like. They can be found at Manage Jenkins -> Credentials:'
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline8 },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Moving on to the last stage of the <code class="inline-code">onBuild</code> function - deploy. Like in the previous stage we wrap the code inside a try block with <code class="inline-code">withCredentials</code> and <code class="inline-code">withEnv</code> wrappers. The rest now is SSH\'ing into our machine, logging into docker, stopping running containers of the project, deleting old images and running the project once again by pulling our newly built images from the repository.'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeJenkinsCiCdPipeline[7].lang,
          text: blogCodeJenkinsCiCdPipeline[7].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'And with that we completed the Jenkinsfile script. 🎉'
        },
        { type: CONTENT_TYPE.paragraph, text: 'This is how the finished code should look like:' },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeJenkinsCiCdPipeline[8].lang,
          text: blogCodeJenkinsCiCdPipeline[8].code
        },
        { type: CONTENT_TYPE.title, text: 'Pipeline status with Blue Ocean' },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Let's take a look of Jenkins in action with Blue Ocean. Thanks to the integration with GitLab, after pushing a commit to the projects repository, Jenkins will automatically trigger the pipeline and GitLab will display the current status and stage which is running."
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline9 },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'After selecting a pipeline ID, we can see all of stages that where ran:'
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline10 },
        {
          type: CONTENT_TYPE.paragraph,
          text: "If we wan't to see the pipeline in more detail just click any stage and a new tab opens. Blue Ocean provides a great visual representation of every stage, its jobs and individual steps which makes debugging easier and an overall development experience better. 😎"
        },
        { type: CONTENT_TYPE.img, img: JenkinsCiCdPipeline11 },
        { type: CONTENT_TYPE.title, text: 'Summary' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'We have successfully integrated Jenkins with a project and from now on our test, build and deployment processes are automated. This tool can be integrated with many other technologies, making it a versatile solution for automating different stages of the software development lifecycle. ♾️'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Once again, check out my project for which I created this CI/CD pipeline with Jenkins 👉🏼 <a href="https://github.com/kamilkaminski01/monitoring-system" target="_blank" rel="noopener noreferrer">here</a>.'
        },
        { type: CONTENT_TYPE.paragraph, text: 'Thanks for reading. 🙏🏼' }
      ]
    }
  },
  gitlabCiCdPipeline: {
    link: 'gitlab-ci-cd-pipeline',
    title: 'GitLab CI/CD Pipeline',
    subtitle: 'Test, Build, Deploy with GitLab | 7 min read',
    date: 'Jul 21, 2024',
    tutorial: {
      header: {
        date: 'Jul 21, 2024',
        readTime: '7 min read',
        title: 'GitLab CI/CD Pipeline',
        demo: GitLabCiCdPipelineThumbnail
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Welcome back ♾️' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'This tutorial will cover topics including GitLab, GitLabs CI/CD pipelines and enhancing CI/CD processes. Thanks to this guide you will be able to automate your workflows by testing, building and deploying code after a single git push.'
        },
        { type: CONTENT_TYPE.subtitle, text: 'Introduction' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Let\'s imagine that you have a project divided into a backend and frontend side, both containerized in a <a href=\'https://www.docker.com/\' target="_blank" rel="noopener noreferrer">Docker</a> environment. The backend is responsible for handling API requests and database interactions, while the frontend provides a user interface built with modern JavaScript frameworks like React or Vue. Both parts need to be tested, built and deployed consistently after making changes to the code.'
        },
        { type: CONTENT_TYPE.subtitle, text: 'Why use CI/CD pipelines?' },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Continuous Integration (CI) and Continuous Deployment (CD) are practices that help software engineers in faster code integrations and delivery. Instead of manually building new versions of an app, verifying it's reliability with tests and deploying it to a server, pipelines do it for you. 🧙🏼‍"
        },
        { type: CONTENT_TYPE.title, text: 'Prerequisites' },
        { type: CONTENT_TYPE.paragraph, text: 'Before you start, you will need:' },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            'A <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">GitLab</a> account.',
            'A project in GitLab to implement CI/CD.',
            'Maintainer or Owner role for the project.'
          ]
        },
        { type: CONTENT_TYPE.title, text: 'Defining a pipeline' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'GitLab CI/CD pipelines are defined in a file called <code class="inline-code">.gitlab-ci.yml</code>, which resides in the root of a repository. This file contains the pipeline configuration that GitLab CI/CD uses to automate tests, builds, deployments and much more:'
        },
        { type: CONTENT_TYPE.tree, text: blogTreesGitLabCiCdPipeline[0].tree },
        { type: CONTENT_TYPE.subtitle, text: 'Stages' },
        { type: CONTENT_TYPE.paragraph, text: 'Our pipeline will consist of 3 ordered stages:' },
        {
          type: CONTENT_TYPE.orderedList,
          items: [
            '<strong>Test</strong> - in this stage we will run unit tests and perform linting/static code checks to ensure quality and functionality',
            '<strong>Build</strong> - in this stage we will build our newly developed code into Docker images, separating them into backend and frontend images, and then push these images into a Docker registry',
            '<strong>Deploy</strong> - in this stage we will pull the latest images from the Docker registry and deploy them to a production environment'
          ]
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeGitLabCiCdPipeline[0].lang,
          text: blogCodeGitLabCiCdPipeline[0].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Stages run jobs which include scripts. In this case we will run <code class="inline-code">Makefile</code> rules to run our docker compose commands. GitLabs runners default image is Ruby, but we want to execute docker compose commands in a Docker environment. We can do this thanks to <code class="inline-code">dind</code> which stands for <strong>Docker in Docker</strong>.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Starting from the <strong>test</strong> stage, our job will look like this:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeGitLabCiCdPipeline[1].lang,
          text: blogCodeGitLabCiCdPipeline[1].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Firstly, in the <code class="inline-code">before_script</code> we need to install <code class="inline-code">make</code> and build our docker environment. Next in the <code class="inline-code">script</code> part we perform our static code checks and run unit tests. If everything passes, we can pursue our next job.'
        },
        { type: CONTENT_TYPE.subtitle, text: 'Variables' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Pipelines often require environment variables which we should not define in our code. To avoid this, we can use GitLab CI/CD variables defining them in the projects settings:'
        },
        { type: CONTENT_TYPE.img, img: GitLabCiCdPipeline1 },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Referring variables in our pipeline code we can use the '$' symbol as a prefix to our variable key. It's worth mentioning that GitLab provides <a href='https://docs.gitlab.com/ee/ci/variables/predefined_variables.html' target=\"_blank\" rel=\"noopener noreferrer\">predefined CI/CD variables</a> that make our life even easier. 😎"
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeGitLabCiCdPipeline[2].lang,
          text: blogCodeGitLabCiCdPipeline[2].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Secondly, we define the <strong>build</strong> job where we also create a docker in docker environment for the GitLab runner. Going forward - we log in to the Docker client, build images with our commited code and push them to a Docker registry. At the end of our job in the <code class="inline-code">after_script</code> we log out from the Docker client.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'After pushing the newly created images, we can now use them in a production environment.'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeGitLabCiCdPipeline[3].lang,
          text: blogCodeGitLabCiCdPipeline[3].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Finally, we are in our third and last stage - <strong>deploy</strong>. Here we ssh into a server, log in to the Docker client, stop and remove running containers, remove old images and run a production environment with fresh images that were pushed to the registry.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'The finished <code class="inline-code">.gitlab-ci.yml</code> file should look like this:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeGitLabCiCdPipeline[4].lang,
          text: blogCodeGitLabCiCdPipeline[4].code
        },
        { type: CONTENT_TYPE.title, text: 'Status of the pipeline and jobs' },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Now, let's commit some changes and watch how our pipeline works 🚀"
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'In the pipelines tab we can see our pipeline with three stages:'
        },
        { type: CONTENT_TYPE.img, img: GitLabCiCdPipeline2 },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Besides that we can see a visual representation of the pipeline by selecting the pipeline ID:'
        },
        { type: CONTENT_TYPE.img, img: GitLabCiCdPipeline3 },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'More details can be seen by selecting a job name. For example here are some logs of the <code class="inline-code">deploy</code> job:'
        },
        { type: CONTENT_TYPE.img, img: GitLabCiCdPipeline4 },
        { type: CONTENT_TYPE.title, text: 'Conclusion' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'We have successfully created a CI/CD pipeline in GitLab! From now on, after pushing code to a GitLab repository, the pipeline automates testing, building and deploying changes to a project. Check out one of my web apps which leverages the same exact CI/CD in real life on 👉🏼 <a href="https://github.com/kamilkaminski01/events-manager" target="_blank" rel="noopener noreferrer">GitHub</a>.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'GitLab CI/CD offers more advanced features such as caching, artifacts and environment-specific configurations, but even in this basic use case we can see the power of DevOps automation. ♾️'
        },
        { type: CONTENT_TYPE.paragraph, text: 'Thanks for reading. 🙏🏼' }
      ]
    }
  },
  djangoReactChat: {
    link: 'django-react-chat',
    title: 'Django & React Chat',
    subtitle: 'Full Stack Web App | 10 min read',
    date: 'Apr 26, 2024',
    sections: [
      {
        title: 'Prerequisites',
        desc: 'Get started with an overview of the chat tutorial and its objectives.'
      },
      {
        title: 'Creating the Environment',
        desc: 'Set up a development environment for building the chat application.'
      },
      {
        title: 'Channels and Channel Layers',
        desc: 'Redis integration and setting up layers for real-time messages.'
      },
      {
        title: 'Backend with Django',
        desc: 'Code up the backend side of the chat application using Django.'
      },
      {
        title: 'Consumers and Routing',
        desc: 'Concept of consumers in Django Channels and Routing.'
      },
      {
        title: 'Frontend with React',
        desc: 'Frontend interface enabling users to interact seamlessly.'
      }
    ],
    tutorial: {
      header: {
        date: 'Apr 26, 2024',
        readTime: '10 min read',
        title: 'Chat in Django & React',
        demo: BlogDjangoReactChatThumbnail
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Hello everyone 👋🏼' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'I am excited to share this tutorial about creating a chat app with Django and React. The idea behind this project is to code up a basic application that allows users to communicate in real-time.'
        },
        { type: CONTENT_TYPE.title, text: 'Prerequisites' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'This project is going to be created using the <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a> and <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> frameworks. Additionally, for styling we will use <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a> instead of CSS, so it\'s expected that you have basic understanding of:'
        },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            'Python and creating a virtual environment',
            "TypeScript, if you know how to use JavaScript you'll be fine",
            'HTML/CSS',
            "Docker and running it's basic commands"
          ]
        },
        { type: CONTENT_TYPE.title, text: 'Creating the Environment' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Let\'s initialize the <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a> and <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> projects:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[0].lang,
          text: blogCodeDjangoReactChat[0].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Instead of using the basic <code class="inline-code">create-react-app</code> we will use <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> with TypeScript:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[1].lang,
          text: blogCodeDjangoReactChat[1].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Change the <code class="inline-code">vite-config.ts</code> file by setting the default server port to 3000:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[2].lang,
          text: blogCodeDjangoReactChat[2].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'I also added <code class="inline-code">checker</code> as a debugging tool and <code class="inline-code">tsconfigPaths</code> to set <code class="inline-code">src/</code> as the root path. Install them by going into the <code class="inline-code">frontend/</code> directory and type: <code class="inline-code">npm install vite-plugin-checker --save-dev</code> next <code class="inline-code">npm install vite-tsconfig-paths --save-dev</code>'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'We are going to run this project in a <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> environment and use a python virtual environment. Before, we separated the backend and frontend into two directories, now place the backend dependencies in a <code class="inline-code">requirements.txt</code> file and create dedicated Dockerfiles:'
        },
        { type: CONTENT_TYPE.tree, text: blogTreesDjangoReactChat[0].tree },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Backend <code class="inline-code">local.Dockerfile</code> and <code class="inline-code">requirements.txt</code>'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[3].lang,
          text: blogCodeDjangoReactChat[3].code
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[4].lang,
          text: blogCodeDjangoReactChat[4].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Frontend <code class="inline-code">local.Dockerfile</code>'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[5].lang,
          text: blogCodeDjangoReactChat[5].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: '<code class="inline-code">docker-compose.yml</code>'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[6].lang,
          text: blogCodeDjangoReactChat[6].code
        },
        {
          type: CONTENT_TYPE.note,
          text: '📝 Note that we are using <code class="inline-code">local.Dockerfile</code> naming because normal <code class="inline-code">Dockerfile</code>\'s files are reserved for the production environment of the app'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Now let\'s build and run the project: <code class="inline-code">make build && make run</code>'
        },
        { type: CONTENT_TYPE.img, img: BlogDjangoReactChat1 },
        { type: CONTENT_TYPE.subtitle, text: 'Channels integration and enabling channel layers' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'It\'s time to integrate the <a href="https://channels.readthedocs.io/en/stable/index.html" target="_blank" rel="noopener noreferrer">Channels</a> library. Let\'s start by creating a routing configuration for Channels. In that it tells Channels what code to run when an HTTP request is received by the Channels server, start by adjusting the <code class="inline-code">backend/asgi.py</code> file to include the following code:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[7].lang,
          text: blogCodeDjangoReactChat[7].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Now add the Channels and Daphne libraries to the list of installed apps, in order to enable an ASGI versions of the runserver command:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[8].lang,
          text: blogCodeDjangoReactChat[8].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: "You'll also need to point Daphne at the root routing configuration:"
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[9].lang,
          text: blogCodeDjangoReactChat[9].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Before we can use a channel layer, we must configure it. Edit the <code class="inline-code">backend/settings.py</code> file and add a <strong>CHANNEL_LAYERS</strong> setting. It should look like:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[10].lang,
          text: blogCodeDjangoReactChat[10].code
        },
        { type: CONTENT_TYPE.title, text: 'Backend with Django' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'We will put the code for the chat server in its own app. Make sure you\'re in the same directory as <code class="inline-code">manage.py</code> and type this command:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[11].lang,
          text: blogCodeDjangoReactChat[11].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'We also need to tell our project that the chat app is installed. Again, edit the <code class="inline-code">backend/settings.py</code> file and add the chat app to the <strong>INSTALLED_APPS</strong> setting:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[12].lang,
          text: blogCodeDjangoReactChat[12].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Instead of using the standard Django <code class="inline-code">views.py</code> and <code class="inline-code">urls.py</code> files, we will be using <code class="inline-code">consumers.py</code> and <code class="inline-code">routing.py</code> files. This is a convention in writing asynchronous code, so your backend file structure should look like this:'
        },
        { type: CONTENT_TYPE.tree, text: blogTreesDjangoReactChat[1].tree },
        { type: CONTENT_TYPE.title, text: 'Consumers and Routing' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'When Channels accepts a WebSocket connection, it consults the root routing configuration to lookup a consumer, and then calls various functions on the consumer to handle events from the connection. We will write a consumer that accepts WebSocket connections on the path <code class="inline-code">/ws/chat/</code> that takes any message it receives on the WebSocket and sends it back to consumers. Let\'s start from creating our consumer in the <code class="inline-code">backend/consumers.py</code> file:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[13].lang,
          text: blogCodeDjangoReactChat[13].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Now let\'s edit the <code class="inline-code">backend/routing.py</code> file:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[14].lang,
          text: blogCodeDjangoReactChat[14].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Going back to the <code class="inline-code">backend/asgi.py</code> file, we need to point the main ASGI configuration at the <strong>chat.routing</strong> module. Here\'s how the file should look like:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[15].lang,
          text: blogCodeDjangoReactChat[15].code
        },
        { type: CONTENT_TYPE.title, text: 'Frontend with React' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'As we coded up the backend side, let\'s begin with the user interface. Remove the boilerplate code after creating a React project and convert <code class="inline-code">.css</code> files to <code class="inline-code">.scss</code>. Your file structure should look like this:'
        },
        { type: CONTENT_TYPE.tree, text: blogTreesDjangoReactChat[2].tree },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'According to the <a href="https://vitejs.dev/guide/features#css-pre-processors" target="_blank" rel="noopener noreferrer">Vite documentation</a>, we also need to add <code class="inline-code">sass</code> as a dev dependency so <code class="inline-code">cd</code> into the <code class="inline-code">frontend</code> directory and type:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[16].lang,
          text: blogCodeDjangoReactChat[16].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Starting from the scss files, they should look like this:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[17].lang,
          text: blogCodeDjangoReactChat[17].code
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[18].lang,
          text: blogCodeDjangoReactChat[18].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Let\'s install <code class="inline-code">react-router-dom</code> so we could use the <a href="https://github.com/remix-run/react-router" target="_blank" rel="noopener noreferrer">React Router</a> in our web application. Go to the <code class="inline-code">frontend/</code> directory and type:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[19].lang,
          text: blogCodeDjangoReactChat[19].code
        },
        {
          type: CONTENT_TYPE.warning,
          text: "👆🏼 This step is not necessary if you won't develop this project further into a multi-page app"
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Going forward, the <code class="inline-code">App.tsx</code> and <code class="inline-code">main.tsx</code> files should look like this:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[20].lang,
          text: blogCodeDjangoReactChat[20].code
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[21].lang,
          text: blogCodeDjangoReactChat[21].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Note that you shouldn't wrap the App component with BrowserRouter if you didn't install <code class=\"inline-code\">react-router-dom</code>. Nevertheless, let's assume that this project will be developed in the future."
        },
        { type: CONTENT_TYPE.title, text: 'Creating the chat component' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Put the chat component in a <code class="inline-code">components/</code> directory that includes an <code class="inline-code">index.tsx</code> and <code class="inline-code">style.scss</code> file. Also create a <code class="inline-code">models/</code> directory that will store our <code class="inline-code">message.ts</code> file with the message model that comes from the backend and an enum containing the message types like we did in our <code class="inline-code">consumers.py</code> file. The file structure should look like this:'
        },
        { type: CONTENT_TYPE.tree, text: blogTreesDjangoReactChat[3].tree },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Let\'s install a couple of more dependencies, we\'ll start with the <a href="https://www.npmjs.com/package/classnames" target="_blank" rel="noopener noreferrer">classnames</a> library. It\'s necessary, so we could easily apply classes based on the message type that a consumer receives:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[22].lang,
          text: blogCodeDjangoReactChat[22].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Next <a href="https://www.npmjs.com/package/react-use-websocket" target="_blank" rel="noopener noreferrer">React useWebSocket</a> - this is a library that provides usefull utilities when leveraging the WebSocket protocol in React:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[23].lang,
          text: blogCodeDjangoReactChat[23].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Now we are ready to code up our chat user interface. Before we connect the React frontend with the Django backend, let's create a base structure of the chat component and add its styling."
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: '<code class="inline-code">models/message.ts</code>'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[24].lang,
          text: blogCodeDjangoReactChat[24].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: '<code class="inline-code">components/Chat/index.tsx</code>'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[25].lang,
          text: blogCodeDjangoReactChat[25].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: '<code class="inline-code">components/Chat/style.scss</code>'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[26].lang,
          text: blogCodeDjangoReactChat[26].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Get back to the <code class="inline-code">App.tsx</code> file and edit it by importing our chat component and setting its route to <code class="inline-code">/</code>:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[27].lang,
          text: blogCodeDjangoReactChat[27].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'There you go! Open the chat, provide a username and type some messages. 🥳'
        },
        { type: CONTENT_TYPE.img, img: BlogDjangoReactChat2 },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Now we have our fully responsive chat application. At this moment we can only chat with ourselves but let's get on to connecting our chat component with the backend thanks to WebSockets."
        },
        { type: CONTENT_TYPE.title, text: 'Connecting our frontend with the backend' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'In order to connect our two projects we will define the chats websocket url in a <code class="inline-code">consts.ts</code> file, use the React useWebSocket hook to connect to through the websocket protocol and send messages. Lastely create a custom <code class="inline-code">useLeaveSocket</code> hook to send information for others users when a user disconnects.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'So, create a <code class="inline-code">src/utils/consts.ts</code> file and define our backends websocket route:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[28].lang,
          text: blogCodeDjangoReactChat[28].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Create a <code class="inline-code">src/hooks/useLeaveSocket.ts</code> file to store our custom hook. The idea behind this hook is to send a notification to other users informing that one of them disconnected. We will trigger the <code class="inline-code">sendJsonMessage</code> function on the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event" target="_blank" rel="noopener noreferrer">beforeunload</a> event. You would ask - why can\'t we do it on a websocket close event? Well this won\'t work, because we need to send this message from the client side, specifically the client that disconnects providing also his username. That\'s why we need to do it <strong>before</strong> he actually disconnects so the message can be sent:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[29].lang,
          text: blogCodeDjangoReactChat[29].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Head over to <code class="inline-code">Chat/index.tsx</code> and implement the useWebSocket hook and our above changes:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: blogCodeDjangoReactChat[30].lang,
          text: blogCodeDjangoReactChat[30].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Finally! You can now chat with other users in real-time. 💬'
        },
        { type: CONTENT_TYPE.img, img: BlogDjangoReactChat3 },
        { type: CONTENT_TYPE.title, text: 'Edge Case' },
        {
          type: CONTENT_TYPE.paragraph,
          text: "When users join the chat with the same username, their messages will appear as if they sent it (blue color) even though one of them didn't. To prevent this, we would need to apply validation on setting a username and check if a provided username isn't already  connected to the chat. Another method would be to indentify every user with a unique ID and pass this ID while sending a message."
        },
        { type: CONTENT_TYPE.title, text: 'Conclusion' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'We created a responsive web app that leverages the WebSocket protocol to ensure real-time communication between users. You can check out the projects repository on my <a href="https://github.com/kamilkaminski01" target="_blank" rel="noopener noreferrer">GitHub</a> or try it live <a href="https://chat.kamilkaminski.pl/" target="_blank" rel="noopener noreferrer">here</a>.'
        },
        { type: CONTENT_TYPE.paragraph, text: 'Thanks for reading. 🙏🏼' },
        { type: CONTENT_TYPE.title, text: 'Links' },
        {
          type: CONTENT_TYPE.icons,
          icons: [
            {
              icon: GitHubIcon,
              text: 'GitHub',
              link: 'https://github.com/kamilkaminski01/django-react-chat'
            },
            {
              icon: MonitorIcon,
              text: 'Live',
              link: 'https://chat.kamilkaminski.pl/'
            }
          ]
        }
      ]
    }
  },
  about: {
    link: 'about',
    title: 'About me - Kamil Kamiński',
    date: 'Mar 25, 2024',
    tutorial: {
      header: {
        date: 'Mar 25, 2024',
        readTime: '1 min read',
        title: "Hi 👋, I'm Kamil"
      },
      content: [
        {
          type: CONTENT_TYPE.paragraph,
          text: 'When I was 19 years old I decided to pursue a degree in computer science. During my first semesters I was able to gain knowledge of basic concepts in programming and computer science. The first programming language that I had contact with was C followed by C++.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'During next semesters I was introduced to a language called Python which quickly became my go-to language for tackling various projects. Its extensive libraries and frameworks (specifically Django) provided me the tools needed to bring my ideas to life.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: "I graduated from college in 2020 with a Bachelor's degree and in the same year I undertook a Master's degree which I am completing to this day. During this time I did apprenticeships and was offered an internship. After some time I received my first job."
        },
        { type: CONTENT_TYPE.title, text: 'Development Experience' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'You can read more about my experience on my <a href="https://kamilkaminski.pl" target="_blank" rel="noopener noreferrer" class="tutorial__content-link">website</a>.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'I recently started a <a href="/blog">blog</a>. The goal is to share some of my experiences throughout my journey as a Software Engineer and provide coding examples on various topics. It also allows me to showcase chunks of my projects and improve my writing skills. 😁'
        },
        { type: CONTENT_TYPE.title, text: 'Development Tools' },
        { type: CONTENT_TYPE.subtitle, text: 'Backend' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'My main language is Python aside with web frameworks such as Django, FastAPI and Flask. In terms of libraries - Django REST Framework, Django Channels, Marshmallow and Pydantic. I also have experience with SQLAlchemy, Event Sourcing and DDD (domain-driven design).'
        },
        { type: CONTENT_TYPE.subtitle, text: 'Frontend' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'My favourite framework is React written in TypeScript. Aside React I also utilize my projects using Vue and for styling CSS and SASS. For smaller projects I usually use JavaScript.'
        },
        { type: CONTENT_TYPE.subtitle, text: 'Databases and DevOps' },
        {
          type: CONTENT_TYPE.paragraph,
          text: "For relational databases I use PostgreSQL or MySQL and containerize my projects with Docker. For deployment I use AWS and Vercel. K8's is also a tool that I use quite often."
        },
        { type: CONTENT_TYPE.paragraph, text: 'Thanks for reading. 🙏' },
        {
          type: CONTENT_TYPE.paragraph,
          text: '<strong>"In real open source, you have the right to control your own destiny"</strong> | Linus Torvalds'
        }
      ]
    }
  }
}

export const PROJECTS = {
  eventsManager: {
    feature: true,
    date: 'Apr 23, 2023',
    link: 'events-manager',
    thumbnail: ProjectThumbnailEventsManager,
    title: 'Events and Participants Manager',
    desc: "Manage events, it's participants and hosts",
    tutorial: {
      header: {
        date: 'Apr 23, 2023',
        readTime: '2 min read',
        title: 'Events Manager',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/events-manager/master/frontend/src/assets/images/demo/demo1.png'
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Welcome ✍🏼' },
        {
          type: CONTENT_TYPE.paragraph,
          text: '<strong>Events Manager</strong> is a robust web app that allows to create, update, delete and manage events along with its participants. Thanks to its sleek UI, navigating through functionalities is a breeze.'
        },
        {
          type: CONTENT_TYPE.quote,
          text: "Participants are created by providing their first name, last name, meal preference and meal types. Meal preference's are chosen between carnivorous and vegetarian. Meal types can be breakfasts, dinners and suppers."
        },
        {
          type: CONTENT_TYPE.quote,
          text: "Events are created by providing their name, it's host (that should be an already created participant and isn't a host) and participants."
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Every participant and event have their dedicated pages providing details on what event participants are attending to. On the other hand, event pages provide information about their participants and host.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'In order to create events, register participants and modify or delete existing data you need to be logged in. Authentication is handled by JWT tokens.'
        },
        { type: CONTENT_TYPE.title, text: 'Technologies' },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Here's a breakdown of the used technologies in the project:"
        },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            'The primary backend language for server-side logic is <code class="inline-code">Python</code>',
            'A RESTful API is written in the <a href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank" rel="noopener noreferrer">Flask</a> framework assisted by <a href="https://www.sqlalchemy.org/" target="_blank" rel="noopener noreferrer">SQLAlchemy</a>\'s ORM',
            'User interface is built with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> written in <code class="inline-code">TypeScript</code>',
            'Instead of the regular create-react-app building tool, this project leverages <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>',
            'Styling is handled by a CSS extension - <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a>',
            'The database is managed by <a href="https://www.postgresql.org.pl/" target="_blank" rel="noopener noreferrer">PostgreSQL</a>',
            'Everything is containerized in a <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> environment'
          ]
        },
        { type: CONTENT_TYPE.title, text: 'Running the app with Docker Compose' },
        {
          type: CONTENT_TYPE.code,
          lang: projectCodeEventsManager[0].lang,
          text: projectCodeEventsManager[0].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'You can initialize the database with example data by using a custom command <code class="inline-code">make initial-data</code>, and to log in create an admin user by running <code class="inline-code">make admin</code>. The credentials will be <code class="inline-code">admin:admin</code>.'
        },
        { type: CONTENT_TYPE.title, text: 'Future features' },
        {
          type: CONTENT_TYPE.paragraph,
          text: "This project leaves room for numerous amount of features thanks to it's scalable technologies and code base. For example, an event could have more than one host or &quot;special&quot; participants. Also, participants could choose their meals for individual events or define how much time they would participate in an event. These are just drops in the ocean of potential capabilities."
        },
        { type: CONTENT_TYPE.title, text: 'Links' },
        {
          type: CONTENT_TYPE.icons,
          icons: [
            {
              icon: GitHubIcon,
              text: 'GitHub',
              link: 'https://github.com/kamilkaminski01/events-manager'
            },
            {
              icon: MonitorIcon,
              text: 'Live',
              link: 'https://events-manager.kamilkaminski.pl/'
            }
          ]
        }
      ]
    }
  },
  jobBoard: {
    feature: true,
    date: 'Oct 7, 2023',
    link: 'job-board',
    thumbnail: ProjectThumbnailJobBoard,
    title: 'IT Recruitment Platform',
    desc: 'Search for candidates and apply for jobs',
    tutorial: {
      header: {
        date: 'Oct 7, 2023',
        readTime: '3 min read',
        title: 'Job Board',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/job-board/main/frontend/src/assets/images/demo1.png'
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Hello! 📝' },
        {
          type: CONTENT_TYPE.paragraph,
          text: '<strong>Job Board</strong> is a web application designed to streamline the job search process for both jobseekers and employers. This project aims to provide a platform where people can search for relevant jobs in the IT industry and apply for positions, while employers can post job offers and manage their candidates.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Creating this project, I was inspired by the <a href="https://justjoin.it/" target="_blank" rel="noopener noreferrer">Just Join IT</a> platform and while searching for my first job this was my go-to website. In my opinion their UX/UI design is very user-friendly, so I challenged myself to create something similar. 😎'
        },
        { type: CONTENT_TYPE.title, text: 'Technologies' },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            '<a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a> for the server side application aside with <a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">Django REST Framework</a> for a REST API',
            '<a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> written in TypeScript for the user interface',
            '<a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a> for styling',
            '<a href="https://www.postgresql.org.pl/" target="_blank" rel="noopener noreferrer">Postgres</a> for the database',
            '<a href="https://python-rq.org/" target="_blank" rel="noopener noreferrer">RQ</a> for an asynchronous worker for time-consuming tasks such as sending emails.',
            'Everything running in a <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> environment'
          ]
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'More technical details can be found in the projects <a href="https://github.com/kamilkaminski01/job-board#readme" target="_blank" rel="noopener noreferrer">README</a>.'
        },
        { type: CONTENT_TYPE.title, text: 'Key Features' },
        {
          type: CONTENT_TYPE.quote,
          text: '<strong>Social authentication</strong> - users can register and login through Google OAuth 2.0 or GitHub OAuth. Users can dive into the site using their existing Google or GitHub accounts, eliminating the need to create or remember additional credentials.'
        },
        {
          type: CONTENT_TYPE.quote,
          text: '<strong>Emailing</strong> - when applying for a job offer, the candidate as well as the employer receive notifications in a form of an email. This feature is handled by <a href="https://aws.amazon.com/ses/" target="_blank" rel="noopener noreferrer">AWS SES</a>.'
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
          text: '<strong>Global colors customization</strong> - main, secondary and hover colors can be modified through the Django admin panel by the maintainer of the site.'
        },
        {
          type: CONTENT_TYPE.quote,
          text: '<strong>Skeletons</strong> - during loading job offers instead of a blank space, skeletons mimic the structure and layout of the content that is being loaded, indicating that the page is actively fetching data.'
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
          lang: projectCodeJobBoard[0].lang,
          text: projectCodeJobBoard[0].code
        },
        { type: CONTENT_TYPE.title, text: 'Application setup' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'The database can be initialized with mocked data thanks to the <code class="inline-code">make initial-data</code> command. More information on what data will populate the database can be found 👉🏼 <a href="https://github.com/kamilkaminski01/job-board?tab=readme-ov-file#application-setup" target="_blank" rel="noopener noreferrer">here</a>.'
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
    feature: false,
    date: 'Mar 9, 2023',
    link: 'development-forum',
    thumbnail: ProjectThumbnailDevelopmentForum,
    title: 'Forum for software topics',
    desc: 'Create topics, rooms and help others',
    tutorial: {
      header: {
        date: 'Mar 9, 2023',
        readTime: '2 min read',
        title: 'Development Forum',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/development-forum/main/app/static/images/demo1.png'
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Hi friend 👋🏼' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'This project is a question-and-answer/forum website for developers similar to <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">Stack Overflow</a>. Users can publish a question in a self-made topic or an existing one. The site is not narrowed down to just questions because users can also discuss on computer programming topics and its surroundings.'
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
          text: '<strong>Development Forum</strong> leverages <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a> for the web server framework and HTML/CSS for the frontend side. Additional requirements can be found in the <a href="https://github.com/kamilkaminski01/development-forum/blob/main/requirements.txt" target="_blank" rel="noopener noreferrer">requirements.txt</a> file, but it\'s nothing major.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'There is also a <a href="https://github.com/kamilkaminski01/development-forum/blob/main/Dockerfile" target="_blank" rel="noopener noreferrer">Dockerfile</a> because in the past I pushed this project into production on <a href="https://railway.app/" target="_blank" rel="noopener noreferrer">Railway</a>. To find some Docker commands that can be used for this application, head over to the <a href="https://github.com/kamilkaminski01/development-forum/blob/main/Makefile" target="_blank" rel="noopener noreferrer">Makefile</a>.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Static files such as profile avatars can be hosted on <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">AWS S3</a> and this project is ready for just that. Environment variables are set in the <code class="inline-code">app/.env</code> file.'
        },
        { type: CONTENT_TYPE.title, text: 'Running the app' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Clone the repo and create a virtual environment:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: projectCodeDevelopmentForum[0].lang,
          text: projectCodeDevelopmentForum[0].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Install the dependencies and initialize the database with migrations:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: projectCodeDevelopmentForum[1].lang,
          text: projectCodeDevelopmentForum[1].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Finally, run the app ⚡️:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: projectCodeDevelopmentForum[2].lang,
          text: projectCodeDevelopmentForum[2].code
        },
        { type: CONTENT_TYPE.title, text: 'Application setup' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'The database can be initialized with mocked data. More information on what data will populate the database can be found 👉🏼 <a href="https://github.com/kamilkaminski01/development-forum?tab=readme-ov-file#application-setup" target="_blank" rel="noopener noreferrer">here</a>. Thanks to this custom command you can dive straight into work without wasting any time. Here are the required steps:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: projectCodeDevelopmentForum[3].lang,
          text: projectCodeDevelopmentForum[3].code
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: "If your machine doesn't support <code class='inline-code'>make</code>, cd in to the <code class='inline-code'>app/</code> directory and run this:"
        },
        {
          type: CONTENT_TYPE.code,
          lang: projectCodeDevelopmentForum[4].lang,
          text: projectCodeDevelopmentForum[4].code
        },
        { type: CONTENT_TYPE.title, text: 'Credits' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'This project was forked from Dennis Ivy&apos;s <a href="https://github.com/divanov11/StudyBud/" target="_blank" rel="noopener noreferrer">Study Bud</a>. Check out his free <a href="https://www.youtube.com/watch?v=PtQiiknWUcI" target="_blank" rel="noopener noreferrer">course</a> on how he created it.'
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
    thumbnail: ProjectThumbnailMonitoringSystem,
    title: 'Web apps with real-time monitoring',
    desc: 'Whiteboard, Tic Tac Toe, Bingo and more',
    tutorial: {
      header: {
        date: 'Nov 27, 2022',
        readTime: '3 min read',
        title: 'Monitoring System',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/monitoring-system/master/frontend/src/assets/images/demo.png'
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Welcome back! 🖥️' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'In a nutshell, this project is a platform for users to interact within web apps and games. Monitoring System also provides a dashboard that unlocks additional features for authenticated users. Thanks to this component, every web app on the platform can be tracked in real-time.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Aside to the web apps and its measurements, users can message each other through dedicated chats. These chats also provide notifications about game actions. I wrote a whole tutorial about creating this kind of chat, you can check it out 👉🏼 <a href="/blog/django-react-chat">here</a>.'
        },
        { type: CONTENT_TYPE.title, text: 'Web apps' },
        {
          type: CONTENT_TYPE.quote,
          text: '<strong>Whiteboard</strong> is a simple drawing application that can handle up to 5 users per room. A special menu provides information about participants in a whiteboard and are wether they or active or not.'
        },
        {
          type: CONTENT_TYPE.quote,
          text: '<strong>Fifteen Puzzle</strong> is a single player logic game. The goal of the puzzle is to place the tiles in numerical order (from left to right, top to bottom). Additionally, there is a counter that tracks every tile move, the fewer moves the better. 😎'
        },
        {
          type: CONTENT_TYPE.quote,
          text: '<strong>Tic Tac Toe</strong> is the standard game as you know it. Two players join a room, declare that they are ready and can play numerous rounds. Features like tracking the activity of players or their turns are also included.'
        },
        {
          type: CONTENT_TYPE.quote,
          text: '<strong>Bingo</strong> is a multiplayer game. To win you should collect every letter from the word BINGO first, amongst all the players in the room. For every row, column or diagonal of chosen numbers you get one letter. Every player gets provided a different board but the total of numbers is shared. A number can be chosen once and every player gets a turn to choose every round.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Multiplayer web apps provide a menu to create or join rooms. Beneath these options, you can see rooms that are online at the moment.'
        },
        { type: CONTENT_TYPE.title, text: 'Core features technologies' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'Real-time communication while being connected to a web app is handled by the WebSocket protocol. Current state retrieval when connecting to a web app is supported through a REST API.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'I mentioned used technologies in the about page on the live site, check it out here 👉🏼 <a href="https://monitoring-system.app/about" target="_blank" rel="noopener noreferrer">here</a>. <br />In terms of libraries and building tools:'
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
        {
          type: CONTENT_TYPE.code,
          lang: projectCodeMonitoringSystem[0].lang,
          text: projectCodeMonitoringSystem[0].code
        },
        {
          type: CONTENT_TYPE.note,
          text: '👍🏼 Make rules can be found in the <a href="https://github.com/kamilkaminski01/monitoring-system/blob/master/Makefile" target="_blank" rel="noopener noreferrer">Makefile</a>. Note that this project runs in a <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> environment.'
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
          text: 'Environment variables can be found in the <code class="inline-code">.envs/</code> directory. In order to use production based docker compose commands use the <code class="inline-code">env=prod</code> flag, for example: <code class="inline-code">make build env=prod</code>'
        },
        { type: CONTENT_TYPE.title, text: 'Conclusion' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'It took me some time to create this project from scratch, but it was worth it. I learned not only about real-time communication on the backend and frontend side but also deployment to a cloud based server provider such as <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS</a>. That\'s it for this project, thank you for your time. 🎉'
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
    thumbnail: ProjectThumbnailRecommendSystem,
    title: 'Campaign platform for recruitment',
    desc: 'Recommend potential candidates for prizes',
    tutorial: {
      header: {
        date: 'Oct 13, 2022',
        readTime: '2 min read',
        title: 'Recommendations System',
        demo: 'https://raw.githubusercontent.com/kamilkaminski01/recommendations-system/main/frontend/src/assets/images/demo1.png'
      },
      content: [
        { type: CONTENT_TYPE.title, text: 'Hello friend! 👋' },
        {
          type: CONTENT_TYPE.paragraph,
          text: '<strong>Recommendations System</strong> is a project based on recruitment and advertisement for companies. Companies can log in to the Django admin panel and publish their offers.'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'On the other hand, users can register, log in to the site, browse offers and recommend candidates in recruitment offers or advertise commercial offers for potential clients. When the company hires a referred candidate or sells a product for a customer that has been recommended, the referrer receives points declared in the offer as a reward. 🎁'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: "Thanks to this feature, the recommender can spend their points in a shop that's available on the site. Products in the shop are added and maintained by the owner of the site."
        },
        { type: CONTENT_TYPE.title, text: 'Technology' },
        {
          type: CONTENT_TYPE.unorderedList,
          items: [
            '<strong>The backend side</strong> is built with Python, <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a> and <a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">Django REST Framework</a>.',
            '<strong>The frontend side</strong> is built with JavaScript, <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React.js</a> and <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SCSS</a>.',
            '<strong>The database</strong> is handled by <a href="https://www.postgresql.org.pl/" target="_blank" rel="noopener noreferrer">Postgres</a> in a <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> container.'
          ]
        },
        { type: CONTENT_TYPE.title, text: 'Running the app' },
        { type: CONTENT_TYPE.paragraph, text: 'Docker Compose setup:' },
        {
          type: CONTENT_TYPE.code,
          lang: projectCodeRecommendSystem[0].lang,
          text: projectCodeRecommendSystem[0].code
        },
        {
          type: CONTENT_TYPE.warning,
          text: 'Note that you need <a href="https://docs.docker.com/compose/migrate/" target="_blank" rel="noopener noreferrer">Compose V2</a> in order to run these Docker commands successfully'
        },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'If <code class="inline-code">make</code> is not supported you can use the following Docker Compose commands:'
        },
        {
          type: CONTENT_TYPE.code,
          lang: projectCodeRecommendSystem[1].lang,
          text: projectCodeRecommendSystem[1].code
        },
        { type: CONTENT_TYPE.title, text: 'Application setup' },
        {
          type: CONTENT_TYPE.paragraph,
          text: 'After running the app, you can set up the database with mocked data thanks to the <code class="inline-code">make initial-data</code> command. More information about what data will populate the database is available 👉 <a href="https://github.com/kamilkaminski01/recommendations-system?tab=readme-ov-file#application-setup" target="_blank" rel="noopener noreferrer">here</a>.'
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
