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
    description: 'It is a platform for task management. Including users register, login in, tasks CRUD operations, different view for tasks, and project&task tracking. ',
    imageURL: 'assets/img/portfolio/task-manager.jpg',
    url:'https://yeminyi.github.io/task-manager/'
  },
  {
    name: 'PropertA',
    description: 'PropertA is an online property management platform that connects the agents, landlords and tenants, with more prompt communications, tracking and data protections.',
    imageURL: 'assets/img/portfolio/properta.png'
  },
  {
    name: 'Eshop Demo',
    description: 'It is an Eshop Demo which can search by Product Category and shows product details, the comments and the star rating.',
    imageURL: 'assets/img/portfolio/eshop.jpg',
    url:'https://eshopdemo2019.firebaseapp.com'
  },
  {
    name: 'Accounting-assistant',
    description: 'It is a small practise using ReactJS. ',
    imageURL: 'assets/img/portfolio/react.jpg',
    url:'https://yeminyi.github.io/Accounting-assistant/'
  },
  {
    name: 'ShowMine',
    description: 'ShowMine is a cloud-based marketing platform.I was the Key Developer both in Front End and Back End. ',
    imageURL: 'assets/img/portfolio/showmine.jpg',
    url:'https://www.showmine66.com/'
  }
];

export const DEFAULT_CONFIG: Config = {
  title: 'title',
  description: 'Web Developer - Angular | ASP.net(C#) ',
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
