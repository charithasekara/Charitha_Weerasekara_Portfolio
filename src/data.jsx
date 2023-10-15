import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import{PiFigmaLogoThin} from 'react-icons/pi';
import {FaGithub} from 'react-icons/fa';
import {TbBrandFiverr} from 'react-icons/tb';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Charitha',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Weerasekara',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '25 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Sri Lankan',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Anuradhapura Road, Welenagama, Upuldeniya',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+94702516984',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'charithmadhushansekara@gmail.com',
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'steve.milner',
  // },

  {
    id: 9,
    title: 'Langages : ',
    description: 'Sinhala, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '20+',
    title: 'Completed Freelance <br /> Projects',
  },

  {
    id: 3,
    no: '10+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '2',
    title: ' Ceritificates <br /> ',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - PRESENT',
    title: 'Freelancer <span> Fiver </span>',
    desc: 'Working as a freelance designer and working on illustrations and graphical designs',
  },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Individual </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 - Present',
    title: 'BSc (Hons) in Computing & Information Systems <span> Sabaragamuwa University of Sri Lanka </span>',
    desc: 'I am currently studying in the third year in the Department of Computing and Information Systems, Faculty of Computing',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015 - 2018',
    title: 'Physical Science Stream <span> Anuradhapura Central College </span>',
    desc: 'G.C.E Advanced Level in 2017 in Physical Science stream',
  },

  // {
  //   id: 6,
  //   category: 'education',
  //   icon: <FaGraduationCap />,
  //   year: '2009',
  //   title: 'Bachelor Degree <span> Tunis High School </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  // },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '25',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'App Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Blog community app',
      },
      {
        icon: <FiUser />,
        title: 'Distribution : ',
        desc: 'Individual',
      },
      {
        icon: <FaCode />,
        title: 'Technologies : ',
        desc: 'Flutter | Figma',
      },
      {
        icon: <PiFigmaLogoThin />,
        title: 'Figma : ',
        desc: 'https://rb.gy/xvxjx',
      },
      {
        icon: <FaGithub />,
        title: 'GitHub : ',
        desc: 'https://rb.gy/7s50r',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'people management website',
      },
      {
        icon: <FiUser />,
        title: 'Distribution : ',
        desc: 'Group',
      },
      {
        icon: <FaCode />,
        title: 'Technologies : ',
        desc: 'Vue JS | Figma',
      },
      {
        icon: <PiFigmaLogoThin />,
        title: 'Figma : ',
        desc: 'https://rb.gy/sod5q',
      },
      {
        icon: <FaGithub />,
        title: 'GitHub : ',
        desc: 'https://rb.gy/eihfb',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'App Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Lost item find app',
      },
      {
        icon: <FiUser />,
        title: 'Distribution : ',
        desc: 'Individual',
      },
      {
        icon: <FaCode />,
        title: 'Technologies : ',
        desc: 'Figma',
      },
      {
        icon: <PiFigmaLogoThin />,
        title: 'Figma : ',
        desc: 'https://rb.gy/7hgw5',
      },
      
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Freelancing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Graphic Design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Fiver',
      },
      {
        icon: <FaCode />,
        title: 'Technologies : ',
        desc: 'Adobe Illustrator | Adobe Photoshop',
      },
      {
        icon: <TbBrandFiverr />,
        title: 'Fiver : ',
        desc: 'https://www.fiverr.com/charithsekara',
      },
    ],
  },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: 'Landing Page',
  //   details: [
  //     {
  //       title: 'Project : ',
  //       desc: 'Website',
  //     },
  //     {
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       title: 'Language : ',
  //       desc: 'React JS, Node JS',
  //     },
  //     {
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

// export const themes = [
//   {
//     id: 1,
//     img: Theme1,
//     color: 'hsl(252, 35%, 51%)',
//   },

//   {
//     id: 2,
//     img: Theme2,
//     color: 'hsl(4, 93%, 54%)',
//   },

//   {
//     id: 3,
//     img: Theme3,
//     color: 'hsl(271, 76%, 53%)',
//   },

//   {
//     id: 4,
//     img: Theme4,
//     color: 'hsl(225, 73%, 57%)',
//   },

//   {
//     id: 5,
//     img: Theme5,
//     color: 'hsl(43, 74%, 49%)',
//   },

//   {
//     id: 6,
//     img: Theme6,
//     color: 'hsl(339, 81%, 66%)',
//   },

//   {
//     id: 7,
//     img: Theme7,
//     color: 'hsl(80, 61%, 50%)',
//   },

//   {
//     id: 8,
//     img: Theme8,
//     color: 'hsl(19, 96%, 52%)',
//   },

//   {
//     id: 9,
//     img: Theme9,
//     color: 'hsl(88, 65%, 43%)',
//   },

//   {
//     id: 10,
//     img: Theme10,
//     color: 'hsl(42, 100%, 50%)',
//   },
// ];
