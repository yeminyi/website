import { Config, Project } from './config.interface';
import { InjectionToken } from '@angular/core';

export { Config } from './config.interface';

const exampleProjectDescription: string =
  'Lorem ipsum dolor sit amet, ' +
  'consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,' +
  ' molestias magnam, recusandae quos quis inventore quisquam velit asperiores,' +
  ' vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.';

const projects: Project[] = [
  {
    name: 'Task Manager',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/task-manager.jpg'
  },
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/PropertAHome.png'
  },
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/circus.png'
  },
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/game.png'
  },
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/safe.png'
  },
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/submarine.png'
  }
];

export const DEFAULT_CONFIG: Config = {
  title: 'I am Amy Ye',
  description: 'Full Stack Web Developer - Angular | ASP.net(C#) ',
  url: 'https://github.com/yeminyi',
  domain: 'github.com',
  projects: projects,
  about: {
    section1:
      '4 years experience of ASP.NET, C#, MVC, Web Forms' +
      '5+ years experience in developing web based applications' +
      'Experience with JavaScript frameworks such as AngularJS, Angular4+,React Js',
    section2:
      'Whether you are a student looking to showcase your work, a' +
      ' professional looking to attract clients, or a graphic artist looking to share your projects, this template ' +
      'is the perfect starting point!'
  },
  social: {
    github: 'https://github.com/yeminyi',
    linkedin: 'https://www.linkedin.com/in/amy-ye-7b55115a/'
  },
  address: {
    country: 'Australia',
    state: 'Victoria',
    city: 'Melbourne',
    street: 'South Eastern'
  }
};

export const ConfigToken = new InjectionToken<Config>('AngularMaterialFreelancerThemeConfig');
