import { Skill } from '@/types/skill';
import {
  CodeIcon,
  Computer,
  Paintbrush,
  LayoutIcon,
  SmartphoneIcon
} from 'lucide-react';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Web Development',
    Icon: CodeIcon,
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`
  },
  {
    name: 'UI/UX Design',
    Icon: LayoutIcon,
    description: `UI/UX Design focuses on creating delightful user experiences through visually appealing and highly functional designs. This skill includes a variety of technologies, frameworks, and best practices to enhance user satisfaction and usability.`
  },
  {
    name: 'Design & Illustration',
    Icon: Paintbrush,
    description: `Design involves expressing other people's ideas through various mediums such as traditional and digital art. It includes creating commissions, logos, web design, and more.`
  },
  {
    name: 'Front-End Development',
    Icon: Computer,
    description: `Front-End Development focuses on creating the user interface and experience of websites and web applications. This skill includes a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`
  }
];

export { trimLen, skills };
