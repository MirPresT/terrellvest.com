import configurePortfolioBank from './configurePortfolioBank';

const portfolioPosts = [
  {
    title: "Entrepreneur Workshop",
    pic: true,
    date: [2015, 12, 4], // year, month, day
    subheader: 'Miramar College Business Club 2015',
    type: 'business', // business or web
    color: '#4996c3',
    colorDark: '#0f4d72',
    dcr:
      'An on campus event aimed to address student interest in entrepreneurship as a potential career path'
  },
  {
    title: "Marketing Proposal",
    subheader: 'SAY San Diego 2014-2016',
    date: [2015, 11, 18], // year, month, day
    type: 'business', // business or web
    color: '#ffe9df',
    colorDark: '#ff9800',
    dcr:
      'A marketing project designed to aid a Local Non Profit in their pursuit to increase awereness, share information, and tell their story to other businesses in San Diego'
  },
  {
    title: 'Master Your Money',
    pic: true,
    color: '#84bbb3',
    colorDark: '#077766',
    subheader: 'Miramar College Business Club 2015',
    date: [2015, 5, 20], // year, month, day
    type: 'business', // business or web
    dcr:
      'A financial literacy workshop for college students that addressed topics such as budgeting and debt management'
  },
  {
    title: "Personal Website",
    subheader: 'React, Markdown, Node.js Build Process',
    date: [2016,3,7], // year, month, day
    type: 'web', // business or web
    color: '#c9ddf0',
    colorDark: '#66b3f6',
    dcr:
      'An insight into the development of terrellvest.com as it pertains to the build, design, and depoyment process',
    links: {
      app: '/',
      github: 'https://github.com/MirPresT/terrellvest.com'
    }
  },
  {
    title: "Tic Tac Toe",
    subheader: 'React, Flux, Webpack, Computer Algorithm.',
    date: [2015,11,21], // year, month, day
    type: 'web', // business or web
    color: '#c9e9f0',
    colorDark: '#4bd5ca ',
    dcr:
      'Play Tic-Tac-Toe against a computer that, depending on the difficulty, will guess your next move',
    links: {
      app: 'http://mirprest.github.io/tic-tac-toe/',
      github: 'https://github.com/MirPresT/tic-tac-toe'
    }
  },
  {
    title: "Twitch Viewer",
    subheader: 'Angular, Grunt, Nested Promises',
    date: [2015,9,14], // year, month, day
    type: 'web', // business or web
    color: '#cfcede',
    colorDark: '#ad9ae2',
    dcr:
      'Track the status of various twitch channels and their current or previus stream',
    links: {
      app: 'https://mirprest.github.io/Twitch-Viewer/',
      github: 'https://github.com/MirPresT/Twitch-Viewer'
    }
  },
  {
    title: "Clock",
    subheader: 'Angular, Grunt, Javascipt Time, Animation',
    date: [2015,9,1], // year, month, day
    type: 'web', // business or web\
    color: '#f0e1c9',
    colorDark: '#f4a526',
    dcr:
      'Set a promodoro timer with individual tasks and start a stopwatch that displays lap times',
    links: {
      app: 'https://mirprest.github.io/Clock/#/',
      github: 'https://github.com/MirPresT/Clock'
    }
  },
  {
    title: "Weather Forecast",
    subheader: 'Vanilla Javascipt, gulp',
    date: [2015,8,1], // year, month, day
    type: 'web', // business or web
    color: '#c9f0e7',
    colorDark: '#62eccc',
    dcr:
      'View the current weather and 3 day forecast for your particular location',
    links: {
      app: 'https://mirprest.github.io/Weather-App/',
      github: 'https://github.com/MirPresT/Weather-App'
    }
  },
  {
    title: "Random Quote Generator",
    subheader: 'Jquery, first project',
    date: [2015,7,1], // year, month, day
    type: 'web', // business or web
    color: '#dae5f1',
    colorDark: '#5499e1',
    dcr:
      'Click through a collection of quotes and share your favorite one on twitter',
    links: {
      app: 'https://rawgit.com/MirPresT/Random-Quote-Generator/master/html/index.html',
      github: 'https://github.com/MirPresT/Random-Quote-Generator'
    }
  }
];

// DONE EDIT CODE BELOW THIS LINE IF ADDING A POST
export default configurePortfolioBank
  .build(portfolioPosts);
