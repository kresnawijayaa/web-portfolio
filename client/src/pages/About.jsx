import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FiExternalLink } from "react-icons/fi";

import "../SkillsSlideshow.css";
import "../AnimatedElement.css";

const experienceData = [
  {
    id: 1,
    companyName: "Indomaret Group",
    role: "Full Stack Developer",
    date: "Jan 2025 - Present",
    description:
      "Working at Indomaret Group (Head Office) as a Full Stack Developer in the IT Software Development 3 division, focusing on logistics and distribution center operations. Responsible for maintaining and improving applications that support 100+ DCs and 20,000+ Indomaret stores, ensuring system reliability and efficiency through database optimization (Oracle, PostgreSQL) and scalable deployments with Docker and Nginx.",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlaHLTwYDO3yEDfpNPUfdYm_sBAfIxeLO3g&s",
  },
  {
    id: 2,
    companyName: "Indomaret Group",
    role: "MDP IT Specialist",
    date: "Jan 2024 - Jan 2025",
    description:
      "Developed expertise in Indomaret Group’s tech stack, including C#, .NET, VB, Oracle, PostgreSQL, Docker, and Nginx. Successfully handled 20+ applications (desktop, web, API, Windows services) and contributed to logistics systems supporting 100+ distribution centers and 20,000+ stores across Indonesia.",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlaHLTwYDO3yEDfpNPUfdYm_sBAfIxeLO3g&s",
  },
  {
    id: 3,
    companyName: "Astra Credit Companies",
    role: "Graphic Design Intern",
    date: "Mar 2023 - Jun 2023",
    description:
      "As a Graphic Design Intern, I created visually captivating graphics and collaborated with cross-functional teams, resulting in a 15% boost in social media engagement, including obtaining Instagram's verified status.",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KiJQzbaOPQ0IAQogkH7PElRynf0SeCD6Hg&s",
  },
  {
    id: 4,
    companyName: "Bank Neo Commerce",
    role: "Graphic Design Intern",
    date: "Jan 2023 - Mar 2023",
    description:
      "During my internship as a Graphic Designer, I designed and delivered various materials, including recruitment brochures and website graphics, while establishing and maintaining a comprehensive visual style guide for consistent employer branding.",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozuDlU2KZbHea740euVjteMCXhGSAxbjiKw&s",
  },
  {
    id: 5,
    companyName: "Tiket.com",
    role: "Creative Design Intern",
    date: "Apr 2022 - Dec 2022",
    description:
      "In my role as a Creative Designer Intern, I collaborated extensively with the marketing team to produce over 200 engaging graphic designs for marketing materials, effectively promoting our transport services and maintaining a consistent visual brand identity across platforms.",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYgVdJJW9aBRqyNWaMESB4xuXB_9fuL3ZPg&s",
  },
  {
    id: 6,
    companyName: "TaniHub",
    role: "Graphic Design Intern",
    date: "Aug 2021 - Feb 2022",
    description:
      "As a Graphic Design Intern, I tracked industry trends, contributed to increased infographic and visual material production, and collaborated with the Corporate Communication team to convey the company's message and values through captivating graphics and presentations.",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKpQvVEER_6dfdVukKUJW4hI3RPJNtKIATg&s",
  },
];

// const certificatesData = [
//   {
//     name: "HackerRank JavaScript (Basic)",
//     issuer: "HackerRank",
//     issuedDate: "October 2023",
//     certificateNumber: "A9A9B5529E37",
//     link: "https://www.hackerrank.com/certificates/a9a9b5529e37",
//     photo: "https://i.ibb.co/BzksPT3/hr1-javascript.jpg",
//   },
//   {
//     name: "HackerRank SQL (Basic)",
//     issuer: "HackerRank",
//     issuedDate: "October 2023",
//     certificateNumber: "2BC6BA5986EA",
//     link: "https://www.hackerrank.com/certificates/2bc6ba5986ea",
//     photo: "https://i.ibb.co/KjWJ5W5/hr4-sql.jpg",
//   },
//   {
//     name: "HackerRank Node (Basic)",
//     issuer: "HackerRank",
//     issuedDate: "October 2023",
//     certificateNumber: "1C5D87D23CA5",
//     link: "https://www.hackerrank.com/certificates/1c5d87d23ca5",
//     photo: "https://i.ibb.co/C1tLNLG/hr2-nodejs.jpg",
//   },
//   {
//     name: "HackerRank React (Basic)",
//     issuer: "HackerRank",
//     issuedDate: "October 2023",
//     certificateNumber: "602332E6ACDE",
//     link: "https://www.hackerrank.com/certificates/602332e6acde",
//     photo: "https://i.ibb.co/vzvGMN6/hr3-react.jpg",
//   },
//   {
//     name: "HackerRank CSS",
//     issuer: "HackerRank",
//     issuedDate: "October 2023",
//     certificateNumber: "F7735C1C2E33",
//     link: "https://www.hackerrank.com/certificates/f7735c1c2e33",
//     photo: "https://i.ibb.co/gz36Dp1/hr5-css.jpg",
//   },
//   {
//     name: "Dasar Pemrograman JavaScript",
//     issuer: "Dicoding Indonesia",
//     issuedDate: "October 2023",
//     certificateNumber: "KEXLLQVNMXG2",
//     link: "https://www.dicoding.com/certificates/KEXLLQVNMXG2",
//     photo: "https://i.ibb.co/34Zrs7g/dicoding2-dasar-javascript.jpg",
//   },
//   {
//     name: "Dasar Pemrograman Web",
//     issuer: "Dicoding Indonesia",
//     issuedDate: "October 2023",
//     certificateNumber: "N9ZO5N1GYPG5",
//     link: "https://www.dicoding.com/certificates/N9ZO5N1GYPG5",
//     photo: "https://i.ibb.co/YDVn8NG/dicoding3-dasar-web.jpg",
//   },
//   {
//     name: "Membuat Aplikasi Back-End",
//     issuer: "Dicoding Indonesia",
//     issuedDate: "October 2023",
//     certificateNumber: "6RPN47JO4X2M",
//     link: "https://www.dicoding.com/certificates/6RPN47JO4X2M",
//     photo: "https://i.ibb.co/LnYK0qG/dicoding4-backend.jpg",
//   },
//   {
//     name: "Membuat Front-End Web",
//     issuer: "Dicoding Indonesia",
//     issuedDate: "October 2023",
//     certificateNumber: "EYX4YQN3RZDL",
//     link: "https://www.dicoding.com/certificates/EYX4YQN3RZDL",
//     photo: "https://i.ibb.co/7zGqKbc/dicoding5-frontend.jpg",
//   },
//   {
//     name: "Cloud Practitioner Essentials (Dasar AWS Cloud)",
//     issuer: "Dicoding Indonesia",
//     issuedDate: "October 2023",
//     certificateNumber: "GRX52WMRVX0M",
//     link: "https://www.dicoding.com/certificates/GRX52WMRVX0M",
//     photo: "https://i.ibb.co/HxCdCfW/dicoding1-aws.jpg",
//   },
//   {
//     name: "Software Engineering Virtual Experience Program",
//     issuer: "JPMorgan Chase & Co.",
//     issuedDate: "October 2023",
//     certificateNumber: "zYfjp6nAX3RpyZKhr",
//     link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_zYfjp6nAX3RpyZKhr_1697175738259_completion_certificate.pdf",
//     photo: "https://i.ibb.co/R20zcry/forage1-jpmorgan.jpg",
//   },
//   {
//     name: "Advanced Software Engineering Virtual Experience Program",
//     issuer: "Walmart Global Tech",
//     issuedDate: "October 2023",
//     certificateNumber: "zYfjp6nAX3RpyZKhr",
//     link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_zYfjp6nAX3RpyZKhr_1697125287850_completion_certificate.pdf",
//     photo: "https://i.ibb.co/tYN5btG/forage2-walmart.jpg",
//   },
//   {
//     name: "Front-End Software Engineering Virtual Experience Program",
//     issuer: "Skyscanner",
//     issuedDate: "October 2023",
//     certificateNumber: "zYfjp6nAX3RpyZKhr",
//     link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_zYfjp6nAX3RpyZKhr_1697129593891_completion_certificate.pdf",
//     photo: "https://i.ibb.co/vBZz48w/forage3-skyscanner.jpg",
//   },
// ];

const certifications = [
  {
    title: "HackerRank",
    items: [
      {
        name: "JavaScript (Intermediate)",
        link: "https://www.hackerrank.com/certificates/7d70d18e76a8",
        issued: "October 2023",
      },
      {
        name: "SQL (Intermediate)",
        link: "https://www.hackerrank.com/certificates/ef5b5a4ca8ef",
        issued: "October 2023",
      },
      {
        name: "Node (Basic)",
        link: "https://www.hackerrank.com/certificates/1c5d87d23ca5",
        issued: "October 2023",
      },
      {
        name: "React (Basic)",
        link: "https://www.hackerrank.com/certificates/602332e6acde",
        issued: "October 2023",
      },
      {
        name: "CSS",
        link: "https://www.hackerrank.com/certificates/f7735c1c2e33",
        issued: "October 2023",
      },
    ],
  },
  {
    title: "Dicoding Indonesia",
    items: [
      {
        name: "Dasar Pemrograman JavaScript",
        link: "#",
        issued: "October 2023",
      },
      { name: "Dasar Pemrograman Web", link: "https://www.dicoding.com/certificates/N9ZO5N1GYPG5", issued: "October 2023" },
      { name: "Membuat Aplikasi Back-End", link: "https://www.dicoding.com/certificates/6RPN47JO4X2M", issued: "October 2023" },
      { name: "Membuat Front-End Web", link: "https://www.dicoding.com/certificates/EYX4YQN3RZDL", issued: "October 2023" },
      {
        name: "Cloud Practitioner Essentials (AWS)",
        link: "https://www.dicoding.com/certificates/GRX52WMRVX0M",
        issued: "October 2023",
      },
    ],
  },
  {
    title: "BuildWithAngga",
    items: [
      {
        name: "Complete UI Designer: Visual Design, Prototype, Usability Testing (qj1hWVNcVP)",
        link: "https://buildwithangga.com/cek-sertifikat",
        issued: "October 2022",
      },
    ],
  },
  {
    title: "Skilvul",
    items: [
      {
        name: "UI/UX Design Mastery",
        link: "https://skilvul.com/courses/uiux-design-mastery/student/cklhgzxllbvax0757eewbeewx/",
        issued: "August 2022",
      },
    ],
  },
];

const skillData = [
  {
    name: "HTML5",
    logo: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
  },
  {
    name: "CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {
    name: "C#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png",
  },
  {
    name: "Python",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256",
  },
  {
    name: "Vue JS",
    logo: "https://docs.vuejs.id/images/logo.png",
  },
  {
    name: "React JS",
    logo: "https://cdn-icons-png.flaticon.com/128/1260/1260667.png",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/kristerkari/react-native-svg-transformer/images/react-native-logo.png",
  },
  {
    name: "Tailwind",
    logo: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
  },
  {
    name: "jQuery",
    logo: "https://static-00.iconduck.com/assets.00/jquery-original-wordmark-icon-485x512-7kn0h2yt.png",
  },
  {
    name: "Node JS",
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968322.png",
  },
  {
    name: "Express JS",
    logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
  },
  {
    name: "Sequelize",
    logo: "https://sequelize.org/img/logo.svg",
  },
  {
    name: ".NET",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png",
  },
  {
    name: "PostgreSQL",
    logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
  },
  {
    name: "MongoDB",
    logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    name: "Firestore",
    logo: "https://static-00.iconduck.com/assets.00/file-type-firestore-icon-1780x2048-0rzupks3.png",
  },
  {
    name: "Oracle",
    logo: "https://capitalhillgroup.ca/wp-content/uploads/2020/07/Oracle-Logo-Square-Micro-SP-300x300.jpg",
  },
  {
    name: "Docker",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
  },
  {
    name: "Redux",
    logo: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
  },
  {
    name: "Pinia",
    logo: "https://pinia.vuejs.org/logo.svg",
  },
  {
    name: "GraphQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png",
  },
  {
    name: "Apollo",
    logo: "https://lh3.googleusercontent.com/KtHUawUCvmUZ35V1K66as9B8a5Lqjjt4Yg--3YX-s5cyyuuA7_PPChegV4SVJ1rsXEv8GFWNrUv7yiHVVdlN4Q",
  },
  {
    name: "Redis",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-redis-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175103.png?f=webp&w=256",
  },
  {
    name: "Jest",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png",
  },
  {
    name: "HTML5",
    logo: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
  },
  {
    name: "CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {
    name: "C#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png",
  },
  {
    name: "Python",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256",
  },
  {
    name: "Vue JS",
    logo: "https://docs.vuejs.id/images/logo.png",
  },
  {
    name: "React JS",
    logo: "https://cdn-icons-png.flaticon.com/128/1260/1260667.png",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/kristerkari/react-native-svg-transformer/images/react-native-logo.png",
  },
  {
    name: "Tailwind",
    logo: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
  },
  {
    name: "jQuery",
    logo: "https://static-00.iconduck.com/assets.00/jquery-original-wordmark-icon-485x512-7kn0h2yt.png",
  },
  {
    name: "Node JS",
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968322.png",
  },
  {
    name: "Express JS",
    logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
  },
  {
    name: "Sequelize",
    logo: "https://sequelize.org/img/logo.svg",
  },
  {
    name: ".NET",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png",
  },
  {
    name: "PostgreSQL",
    logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
  },
  {
    name: "MongoDB",
    logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    name: "Firestore",
    logo: "https://static-00.iconduck.com/assets.00/file-type-firestore-icon-1780x2048-0rzupks3.png",
  },
  {
    name: "Oracle",
    logo: "https://capitalhillgroup.ca/wp-content/uploads/2020/07/Oracle-Logo-Square-Micro-SP-300x300.jpg",
  },
  {
    name: "Docker",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
  },
  {
    name: "Redux",
    logo: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
  },
  {
    name: "Pinia",
    logo: "https://pinia.vuejs.org/logo.svg",
  },
  {
    name: "GraphQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png",
  },
  {
    name: "Apollo",
    logo: "https://lh3.googleusercontent.com/KtHUawUCvmUZ35V1K66as9B8a5Lqjjt4Yg--3YX-s5cyyuuA7_PPChegV4SVJ1rsXEv8GFWNrUv7yiHVVdlN4Q",
  },
  {
    name: "Redis",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-redis-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175103.png?f=webp&w=256",
  },
  {
    name: "Jest",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png",
  },
  {
    name: "HTML5",
    logo: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
  },
  {
    name: "CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {
    name: "C#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png",
  },
  {
    name: "Python",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256",
  },
  {
    name: "Vue JS",
    logo: "https://docs.vuejs.id/images/logo.png",
  },
  {
    name: "React JS",
    logo: "https://cdn-icons-png.flaticon.com/128/1260/1260667.png",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/kristerkari/react-native-svg-transformer/images/react-native-logo.png",
  },
  {
    name: "Tailwind",
    logo: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
  },
  {
    name: "jQuery",
    logo: "https://static-00.iconduck.com/assets.00/jquery-original-wordmark-icon-485x512-7kn0h2yt.png",
  },
  {
    name: "Node JS",
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968322.png",
  },
  {
    name: "Express JS",
    logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
  },
  {
    name: "Sequelize",
    logo: "https://sequelize.org/img/logo.svg",
  },
  {
    name: ".NET",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png",
  },
  {
    name: "PostgreSQL",
    logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
  },
  {
    name: "MongoDB",
    logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    name: "Firestore",
    logo: "https://static-00.iconduck.com/assets.00/file-type-firestore-icon-1780x2048-0rzupks3.png",
  },
  {
    name: "Oracle",
    logo: "https://capitalhillgroup.ca/wp-content/uploads/2020/07/Oracle-Logo-Square-Micro-SP-300x300.jpg",
  },
  {
    name: "Docker",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
  },
  {
    name: "Redux",
    logo: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
  },
  {
    name: "Pinia",
    logo: "https://pinia.vuejs.org/logo.svg",
  },
  {
    name: "GraphQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png",
  },
  {
    name: "Apollo",
    logo: "https://lh3.googleusercontent.com/KtHUawUCvmUZ35V1K66as9B8a5Lqjjt4Yg--3YX-s5cyyuuA7_PPChegV4SVJ1rsXEv8GFWNrUv7yiHVVdlN4Q",
  },
  {
    name: "Redis",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-redis-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175103.png?f=webp&w=256",
  },
  {
    name: "Jest",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png",
  },
  // Add more skills
];

const skillData2 = [
  {
    name: "AWS",
    logo: "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
  },
  {
    name: "Firebase",
    logo: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
  },
  {
    name: "Github",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "VSCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    name: "NPM",
    logo: "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png",
  },
  {
    name: "Postman",
    logo: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    name: "Vite",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
  },
  {
    name: "Ubuntu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/1200px-Logo-ubuntu_cof-orange-hex.svg.png",
  },
  {
    name: "Nginx",
    logo: "https://static-00.iconduck.com/assets.00/nginx-icon-444x512-0meva297.png",
  },
  {
    name: "AWS",
    logo: "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
  },
  {
    name: "Firebase",
    logo: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
  },
  {
    name: "Github",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "VSCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    name: "NPM",
    logo: "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png",
  },
  {
    name: "Postman",
    logo: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    name: "Vite",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
  },
  {
    name: "Ubuntu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/1200px-Logo-ubuntu_cof-orange-hex.svg.png",
  },
  {
    name: "Nginx",
    logo: "https://static-00.iconduck.com/assets.00/nginx-icon-444x512-0meva297.png",
  },
  {
    name: "AWS",
    logo: "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
  },
  {
    name: "Firebase",
    logo: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
  },
  {
    name: "Github",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "VSCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    name: "NPM",
    logo: "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png",
  },
  {
    name: "Postman",
    logo: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    name: "Vite",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
  },
  {
    name: "Ubuntu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/1200px-Logo-ubuntu_cof-orange-hex.svg.png",
  },
  {
    name: "Nginx",
    logo: "https://static-00.iconduck.com/assets.00/nginx-icon-444x512-0meva297.png",
  },
  {
    name: "AWS",
    logo: "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
  },
  {
    name: "Firebase",
    logo: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
  },
  {
    name: "Github",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "VSCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    name: "NPM",
    logo: "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png",
  },
  {
    name: "Postman",
    logo: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    name: "Vite",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
  },
  {
    name: "Ubuntu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/1200px-Logo-ubuntu_cof-orange-hex.svg.png",
  },
  {
    name: "Nginx",
    logo: "https://static-00.iconduck.com/assets.00/nginx-icon-444x512-0meva297.png",
  },
  {
    name: "AWS",
    logo: "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
  },
  {
    name: "Firebase",
    logo: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
  },
  {
    name: "Github",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "VSCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    name: "NPM",
    logo: "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png",
  },
  {
    name: "Postman",
    logo: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    name: "Vite",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
  },
  {
    name: "Ubuntu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/1200px-Logo-ubuntu_cof-orange-hex.svg.png",
  },
  {
    name: "Nginx",
    logo: "https://static-00.iconduck.com/assets.00/nginx-icon-444x512-0meva297.png",
  },
  {
    name: "AWS",
    logo: "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
  },
  {
    name: "Firebase",
    logo: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
  },
  {
    name: "Github",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "VSCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    name: "NPM",
    logo: "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png",
  },
  {
    name: "Postman",
    logo: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    name: "Vite",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
  },
  {
    name: "Ubuntu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/1200px-Logo-ubuntu_cof-orange-hex.svg.png",
  },
  {
    name: "Nginx",
    logo: "https://static-00.iconduck.com/assets.00/nginx-icon-444x512-0meva297.png",
  },
  // Add more skills
];

const skillData3 = [
  {
    name: "Figma",
    logo: "https://logowik.com/content/uploads/images/figma.jpg",
  },
  {
    name: "Whimsical",
    logo: "https://i.pinimg.com/736x/ea/2a/b2/ea2ab287b40acfe28348c71eb780d11c.jpg",
  },
  {
    name: "Miro",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Adobe Illustrator",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
  },
  {
    name: "Adobe Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
  },
  {
    name: "Adobe Premiere Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
  },
  {
    name: "Adobe After Effect",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
  },
  {
    name: "Figma",
    logo: "https://logowik.com/content/uploads/images/figma.jpg",
  },
  {
    name: "Whimsical",
    logo: "https://i.pinimg.com/736x/ea/2a/b2/ea2ab287b40acfe28348c71eb780d11c.jpg",
  },
  {
    name: "Miro",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Adobe Illustrator",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
  },
  {
    name: "Adobe Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
  },
  {
    name: "Adobe Premiere Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
  },
  {
    name: "Adobe After Effect",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
  },
  {
    name: "Figma",
    logo: "https://logowik.com/content/uploads/images/figma.jpg",
  },
  {
    name: "Whimsical",
    logo: "https://i.pinimg.com/736x/ea/2a/b2/ea2ab287b40acfe28348c71eb780d11c.jpg",
  },
  {
    name: "Miro",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Adobe Illustrator",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
  },
  {
    name: "Adobe Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
  },
  {
    name: "Adobe Premiere Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
  },
  {
    name: "Adobe After Effect",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
  },
  {
    name: "Figma",
    logo: "https://logowik.com/content/uploads/images/figma.jpg",
  },
  {
    name: "Whimsical",
    logo: "https://i.pinimg.com/736x/ea/2a/b2/ea2ab287b40acfe28348c71eb780d11c.jpg",
  },
  {
    name: "Miro",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Adobe Illustrator",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
  },
  {
    name: "Adobe Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
  },
  {
    name: "Adobe Premiere Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
  },
  {
    name: "Adobe After Effect",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
  },
  {
    name: "Figma",
    logo: "https://logowik.com/content/uploads/images/figma.jpg",
  },
  {
    name: "Whimsical",
    logo: "https://i.pinimg.com/736x/ea/2a/b2/ea2ab287b40acfe28348c71eb780d11c.jpg",
  },
  {
    name: "Miro",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Adobe Illustrator",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
  },
  {
    name: "Adobe Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
  },
  {
    name: "Adobe Premiere Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
  },
  {
    name: "Adobe After Effect",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
  },
  {
    name: "Figma",
    logo: "https://logowik.com/content/uploads/images/figma.jpg",
  },
  {
    name: "Whimsical",
    logo: "https://i.pinimg.com/736x/ea/2a/b2/ea2ab287b40acfe28348c71eb780d11c.jpg",
  },
  {
    name: "Miro",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Adobe Illustrator",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
  },
  {
    name: "Adobe Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
  },
  {
    name: "Adobe Premiere Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
  },
  {
    name: "Adobe After Effect",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Modal responsif
  maxWidth: 540, // Batas maksimum lebar modal
  bgcolor: "background.paper",
  boxShadow: 24,
  p: { xs: 2, sm: 4 }, // Padding lebih kecil di layar kecil
  borderRadius: 4,
};

const links = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/kresnawijaya/" },
  { name: "Github", url: "https://github.com/kresnawijayaa" },
  { name: "Google Mail", url: "mailto:kresnawijaya511@gmail.com" },
  { name: "WhatsApp", url: "https://wa.me/6281314250902" },
  { name: "✌️😁 Instagram", url: "https://www.instagram.com/kresnawijaya__/" },
];

export default function About() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className='min-h-screen'
        style={{
          background:
            "linear-gradient(0deg, rgba(1,126,255,1) 0%, rgba(0,100,210,1) 100%)", // #017EFF (0) - #0064d2 (100)
        }}
      >
        {/* new */}
        {/* new */}
        {/* new */}

        <section className='flex items-center justify-center text-center py-20'>
          <div className='mx-auto max-w-screen-xl'>
            <div>
              <div className='sif-l'>
                <h1 className='sm:text-6xl text-4xl font-bold text-white text-center transition duration-300 transform hover:scale-105 sm:mx-80 mx-6'>
                  Kresna Wijaya{" "}
                  <span className='font-medium sm:text-2xl text-xl'>
                    · he/him
                  </span>
                </h1>
              </div>
              <div className='sif-r'>
                {" "}
                <p className='text-white sm:text-lg text-sm flex-1 mt-12 sm:leading-8 leading-7 transition duration-300 transform hover:scale-105 sm:mx-40 mx-6'>
                  👨‍💻 a passionate software engineer from Jakarta, Indonesia.
                  Armed with a degree in Computer Science and bolstered by
                  Hacktiv8's Full Stack JavaScript bootcamp, I've refined my
                  skills in creating user-centric software that's both
                  technically sound and aesthetically pleasing. I have 1 year of
                  experience as a Full Stack Developer at Indomaret Group, where
                  I've honed my abilities in building scalable and efficient web
                  applications. Explore my portfolio to discover a seamless
                  blend of code and creativity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white items-center justify-center text-center py-20'>
          <div className='mx-auto max-w-screen-xl sif-b'>
            <h1 className='text-4xl font-bold text-neutral-800 text-center transition duration-300 transform hover:scale-105'>
              My Tech Toolkit 🛠️
            </h1>
            <p className='text-neutral-600 sm:text-lg text-sm flex-1 mt-4 mb-2 sm:leading-8 leading-7 transition duration-300 transform hover:scale-105 mx-6'>
              Crafting digital experiences with a diverse skill set, where code
              and creativity merge seamlessly.
            </p>
            <div className='slider'>
              <div className='slide-track'>
                {skillData.map((skill, index) => (
                  <div
                    key={index}
                    className='slide'
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className='skill-logo'
                    />
                    <p className='skill-name text-sm text-neutral-500'>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='slider'>
              <div className='slide-track2'>
                {skillData2.map((skill, index) => (
                  <div
                    key={index}
                    className='slide'
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className='skill-logo'
                    />
                    <p className='skill-name text-sm text-neutral-500'>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='slider'>
              <div className='slide-track3'>
                {skillData3.map((skill, index) => (
                  <div
                    key={index}
                    className='slide'
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className='skill-logo'
                    />
                    <p className='skill-name text-sm text-neutral-500'>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <button>
              <a
                onClick={handleOpen}
                className='mt-6 inline-block bg-[#0965c0] hover:bg-[#3a3b92] text-white font-semibold text-md py-2 px-12 rounded-full transition duration-300 transform hover:scale-105'
              >
                View all
              </a>
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
              className='flex items-center justify-center'
            >
              <Box sx={style}>
                <div>
                  <div className='mb-4'>
                    <h1 className='text-neutral-800 font-bold text-md'>
                      Programming Language
                    </h1>
                    <p className='text-neutral-600 text-md'>JavaScript, C#, Python</p>
                  </div>
                  <div className='mb-4'>
                    <h1 className='text-neutral-800 font-bold text-md'>
                      Front End
                    </h1>
                    <p className='text-neutral-600 text-md'>
                      HTML5, CSS, Vue JS, React JS, React Native, Tailwind,
                      jQuery
                    </p>
                  </div>
                  <div className='mb-4'>
                    <h1 className='text-neutral-800 font-bold text-md'>
                      Back End
                    </h1>
                    <p className='text-neutral-600 text-md'>
                      Node JS, Express JS, Sequelize, ASP.NET
                    </p>
                  </div>
                  <div className='mb-4'>
                    <h1 className='text-neutral-800 font-bold text-md'>
                      Databases
                    </h1>
                    <p className='text-neutral-600 text-md'>
                      PostgreSQL, MongoDB, Firestore, Oracle
                    </p>
                  </div>
                  <div className='mb-4'>
                    <h1 className='text-neutral-800 font-bold text-md'>
                      Others
                    </h1>
                    <p className='text-neutral-600 text-md'>
                      GraphQL, Jest, Pinia, Redux, JWT, Docker, AWS, Firebase,
                      Vite, Postman, NPM, VSCode, Github, Ubuntu, Nginx
                    </p>
                  </div>
                  <div>
                    <h1 className='text-neutral-800 font-bold text-md'>
                      Design Tools
                    </h1>
                    <p className='text-neutral-600 text-md'>
                      Figma, Whimsical, Miro, Adobe Illustrator, Adobe
                      Photoshop, Adobe Premiere Pro, Adobe After Effect
                    </p>
                  </div>
                </div>
                <div className='flex justify-end mt-6'>
                  <button>
                    <a
                      onClick={handleClose}
                      className='inline-block bg-[#0965c0] hover:bg-[#3a3b92] text-white font-semibold text-md py-2 px-8 rounded-full transition duration-300 transform hover:scale-105'
                    >
                      Close
                    </a>
                  </button>
                </div>
              </Box>
            </Modal>
          </div>
        </section>

        <section className='py-20'>
          <div className='mx-auto max-w-screen-xl sif-b'>
            <div className='grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-24 gap-12'>
              <div>
                <div className='sif-l'>
                  <h1 className=' text-4xl font-bold text-white transition duration-300 transform hover:scale-105'>
                    Education &
                  </h1>
                  <h1 className=' text-4xl font-bold text-white transition duration-300 transform hover:scale-105'>
                    Experience 🎓💻
                  </h1>

                  <div className='flex mt-16 transition duration-300 transform hover:scale-105'>
                    <div className='mr-4 w-[60px] h-[60px] bg-white flex items-center justify-center rounded-full shadow-md aspect-square'>
                      <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVF6lDvLC4AMbsZ4t2Ez6pehN3UflXBIuqA&s'
                        alt=''
                        className='w-[48px] h-[48px] object-cover rounded-full'
                      />
                    </div>
                    <div>
                      <h1 className='text-white font-bold text-xl'>
                        Hacktiv8 Indonesia
                      </h1>
                      <p className='text-white text-sm'>
                        Full Stack JavaScript Immersive Program{" "}
                        <a
                          href='https://drive.google.com/file/d/1u5NhylOaWjlB5Rih36s-QBvtkrnE3zkV/view?usp=sharing'
                          className='text-white underline italic'
                          target='_blank'
                        >
                          (Honor Award - Transcript)
                        </a>
                      </p>
                      <p className='text-white text-sm'>
                        June 2023 - Sept 2023
                      </p>
                    </div>
                  </div>

                  <div className='flex mt-8 transition duration-300 transform hover:scale-105'>
                    <div className='mr-4 w-[60px] h-[60px] bg-white flex items-center justify-center rounded-full shadow-md aspect-square'>
                      <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rPL4qIuqao4lZID9NcJEuL_XQWsiWrZRCQ&s'
                        alt=''
                        className='w-[40px] h-[40px] object-cover rounded-xl'
                      />
                    </div>
                    <div>
                      <h1 className='text-white font-bold text-xl'>
                        Udayana University
                      </h1>
                      <p className='text-white text-sm'>
                        Bachelor's degree, Computer Science (GPA 3.66/4.00)
                        {/* <a
                      href="https://drive.google.com/file/d/1ajwIvq-KuMkBMJAmvfw5SWjrRjYNrDNs/view?usp=sharing"
                      className="text-blue-600"
                      target="_blank"
                    >
                      (Transcript)
                    </a> */}
                      </p>
                      <p className='text-white text-sm'>2018 - 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='space-y-6'>
                  {experienceData.map((item) => (
                    <details
                      key={item.id}
                      className='transition duration-300 transform hover:scale-105 overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden'
                    >
                      <summary className='flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition'>
                        <div className='flex'>
                          <img
                            src={item.logoUrl}
                            alt=''
                            className='inline-block rounded w-[50px] h-[50px] mb-2'
                          />
                          <div className='flex-1 ml-4'>
                            <h1 className='text-neutral-800 font-semibold text-md'>
                              {item.companyName}
                            </h1>
                            <p className='text-neutral-600 text-sm font-normal'>
                              {item.role} ({item.date})
                            </p>
                          </div>
                        </div>
                        <span className='transition group-open:-rotate-180'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                            />
                          </svg>
                        </span>
                      </summary>
                      <div className='border-t border-gray-200 bg-white p-4'>
                        <p className='text-neutral-600 text-sm font-normal mt-1 leading-6'>
                          {item.description}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className='bg-white flex items-center justify-center text-center py-20'>
          <div className='mx-auto max-w-screen-xl'>
            <div>
              <div className='sif-l'>
                <h1 className=' text-4xl font-bold text-neutral-800 text-center transition duration-300 transform hover:scale-105 mx-80'>
                  Certifications 🏆
                </h1>
                <p className='text-neutral-600 text-lg flex-1 mt-4 mb-2 leading-8 transition duration-300 transform hover:scale-105 mx-40'>
                  Unlocking the digital realm with my coding certifications.
                </p>
              </div>
              <div className='sif-r'>
                <ul className='grid gap-6 mt-12 lg:grid-cols-5 px-8'>
                  {certificatesData.map((certificate, index) => (
                    <li
                      key={index}
                      className='transition duration-300 transform hover:scale-105'
                    >
                      <a
                        href={certificate.link}
                        target='_blank'
                      >
                        <img
                          src={certificate.photo}
                          alt=''
                          className='h-[160px]'
                        />

                        <div className='pt-1'>
                          <p className='text-neutral-800 font-bold text-md hover:underline line-clamp-1'>
                            {certificate.name}
                          </p>
                          <p className='text-neutral-600 text-sm transition duration-300 transform hover:scale-105'>
                            {certificate.issuer}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        <section className='bg-white flex items-center justify-center text-center py-20'>
          <div className='mx-auto max-w-screen-xl px-6'>
            {/* Header Section */}
            <div>
              <h1 className='text-4xl font-bold text-neutral-800 transition duration-300 transform hover:scale-105'>
                Certifications 🏆
              </h1>
              <p className='text-neutral-600 text-lg mt-4 mb-6 leading-8 transition duration-300 transform hover:scale-105'>
                Unlocking the digital realm with my coding certifications.
              </p>
            </div>

            {/* Certification List */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 text-left'>
              {certifications.map((cert, index) => (
                <div key={index}>
                  <h3 className='text-xl font-semibold text-neutral-800'>
                    {cert.title}
                  </h3>
                  <ul className='list-disc list-inside text-neutral-600'>
                    {cert.items.map((item, i) => (
                      <li key={i}>
                        {item.name} -{" "}
                        <a
                          href={item.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-blue-500 underline'
                        >
                          Certificate
                        </a>{" "}
                        - Issued: {item.issued}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-20'>
          <div className='mx-auto max-w-screen-xl sif-b'>
            <div>
              <div className='sif-l'>
                <h1 className='text-4xl font-bold text-white text-center transition duration-300 transform hover:scale-105'>
                  Keep in touch! ✨
                </h1>
              </div>
              <div className='flex flex-col sm:flex-row items-center justify-center sm:gap-16 gap-8 mt-16 mb-2'>
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white text-lg transition duration-300 transform hover:scale-110 hover:border-b border-white flex items-center gap-1'
                  >
                    <button>{link.name} </button>
                    <FiExternalLink size={14} />
                  </a>
                ))}
              </div>

              {/* <div // LinkedIn Badges
                class="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="kresnawijaya"
                data-version="v1"
              ></div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
