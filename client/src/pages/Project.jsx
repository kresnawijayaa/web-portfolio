import gotravlImage from "../assets/gotravl.png";
import letterboxMobileImage from "../assets/letterbox-mobile.png";
import letterboxWebImage from "../assets/letterbox-web.png";
import uniqlohImage from "../assets/uniqloh.png";
import wanderMarkImage from "../assets/wander-mark.png";
import gdImage from "../assets/gd.png";

const projectsData = [
  {
    title: "Go TravL.",
    imageSrc: gotravlImage,
    description:
      "Introducing GoTravL: redefining the way you experience travel. With our state-of-the-art itinerary maker and insightful AI assistant, no destination remains a mystery. Join a vibrant community of travelers, share experiences, and foster new relationships on the road. From top-notch recommendations to real-time assistance, GoTravL ensures every journey is memorable.",
    technologies: [
      "React Native",
      "NodeJS",
      "PostgreSQL",
      "Firestore",
      "Google Map API",
      "OpenAI API",
    ],
    githubLink:
      "https://github.com/kresnawijayaa/final-project-hacktiv8-GoTravL",
    month: "Sept",
    year: "2023",
  },
  {
    title: "Letter Box Mobile",
    imageSrc: letterboxMobileImage,
    description:
      "The Letter Box Mobile App is designed for movie enthusiasts. It provides users with access to the latest movies and allows them to view detailed information about each film, including ratings, casts, genre, and synopses.",
    technologies: ["React Native", "ExpressJS", "Apollo Server", "PostgreSQL"],
    githubLink:
      "https://github.com/kresnawijayaa/letter-box-mobile-app-hacktiv8-p3c2",
    month: "Sept",
    year: "2023",
  },
  {
    title: "Letter Box Web",
    imageSrc: letterboxWebImage,
    description:
      "The Letter Box Web App caters to movie enthusiasts, providing them with the ability to explore the latest films and access detailed information for each movie, including ratings, casts, genre, and synopses. Additionally, the application includes admin features for managing movies, genres, and admin accounts (CRUD operations).",
    technologies: ["ReactJS", "ExpressJS", "PostgreSQL", "GraphQL"],
    githubLink:
      "https://github.com/kresnawijayaa/letter-box-web-app-hacktiv8-p3c1",
    month: "Sept",
    year: "2023",
  },
  {
    title: "Wander Mark",
    imageSrc: wanderMarkImage,
    description:
      "The Wander Mark Web App is a social media website designed for users to tag and share their favorite places. Users can view and create posts with detailed location information, which is seamlessly integrated with the Google Map API. Additionally, the application offers the ability to generate captivating captions using the OpenAI API.",
    technologies: [
      "VueJS",
      "ExpressJS",
      "PostgreSQL",
      "Google Maps API",
      "OpenAI API",
    ],
    githubLink:
      "https://github.com/kresnawijayaa/wander-mark-web-app-hacktiv8-p2-iproject",
    month: "Aug",
    year: "2023",
  },
  {
    title: "Uniqloh",
    imageSrc: uniqlohImage,
    description:
      "The Uniqloh Web App is a simple e-commerce-like website that offers a selection of clothing items for sale. Users can browse the available clothing items, apply filters to narrow down their choices, and add clothing items to their favorites list.",
    technologies: ["VueJS", "ExpressJS", "PostgreSQL", "Jest", "AWS"],
    githubLink:
      "https://github.com/kresnawijayaa/uniqloh-web-app-hacktiv8-p2c3",
    month: "Aug",
    year: "2023",
  },
  {
    title: "TRAVL. (UI/UX)",
    imageSrc:
      "https://kresna-wijaya.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd762c2d6-e1f6-49e0-bf82-a68d85a1ec0b%2FImage_4.png?table=block&id=c09b8270-0ae4-4432-b64b-5f7a68d33d7f&spaceId=4f224007-4272-4b9b-93ee-ddda2dc6c347&width=2000&userId=&cache=v2",
    description:
      "Travl. is an application that helps you to prepare for a vacation trip, which provides all the needs in one facility that has destination references by influencers, lists of popular destinations, application reviews from various platforms, saves favorite destinations, and creates itineraries.",
    technologies: ["Figma", "Whimsical", "Miro", "Notion"],
    githubLink:
      "https://kresna-wijaya.notion.site/Personal-Project-TRAVL-105fe0cc5f874398b4bd87ae8902b111",
    month: "Sept",
    year: "2023",
  },
  {
    title: "Graphic Design Portfolio",
    imageSrc: gdImage,
    description:
      "My graphic design portfolio highlights my two years of work and internship experiences. Explore a variety of projects, including branding, logos, web design, print materials, and motions. It showcases my growth, skills, and passion in graphic design, offering a glimpse into my unique style and quality of work.",
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe After Effect",
    ],
    githubLink: "https://www.behance.net/kresnawijaya",
    month: "Sept",
    year: "2023",
  },
];

export default function Project() {
  return (
    <>
      <div
        className='min-h-screen'
        style={{
          background:
            "linear-gradient(0deg, rgba(1, 126, 255, 1) 0%, rgba(0, 100, 210, 1) 100%)",
        }}
      >
        <section className='items-center justify-center text-center py-20'>
          <div className='mx-auto max-w-screen-xl sif-b'>
            <div>
              <div>
                <div className='sif-l'>
                  <h1 className='text-4xl font-bold text-white text-center transition duration-300 transform hover:scale-105 mx-10'>
                    My Digital Creations 🌟
                  </h1>
                </div>
                <div className='sif-r'>
                  <p className='text-white  sm:text-lg text-sm flex-1 mt-4 mb-2 sm:leading-8 leading-7 transition duration-300 transform hover:scale-105 mx-6'>
                    Welcome to my digital realm. Here, you'll find a showcase of
                    my coding projects and creative endeavors.
                  </p>
                </div>
              </div>
              <div className='sif-b'>
                <ul className='grid gap-12 mt-12 px-8'>
                  {projectsData.map((project, index) => (
                    <article
                      className='flex bg-white transition hover:shadow-xl transition duration-300 transform hover:scale-105'
                      key={index}
                    >
                      <div className='rotate-180 p-2 [writing-mode:_vertical-lr]'>
                        <time className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900'>
                          <span>{project.year}</span>
                          <span className='w-px flex-1 bg-gray-900/10'></span>
                          <span>{project.month}</span>
                        </time>
                      </div>
                      <div className="sm:flex">
                        <div className='basis-80'>
                          <img
                            alt='Project'
                            src={project.imageSrc}
                            className='h-full w-full object-cover'
                          />
                        </div>
                        <div className='flex flex-1 flex-col justify-between'>
                          <div className='border-s border-gray-900/10 p-8 sm:border-l-transparent text-left'>
                            <div className='mb-4'>
                              <h2 className='text-2xl font-semibold text-neutral-800   mb-2'>
                                {project.title}
                              </h2>
                              <p className='text-sm leading-6 text-neutral-600 line-clamp-4'>
                                {project.description}
                              </p>
                            </div>
                            <div>
                              {project.technologies.map((tech, techIndex) => (
                                <div
                                  key={techIndex}
                                  className='m-1 inline-block bg-[#0965c0] hover:bg-[#3a3b92] text-white font-medium py-2 px-3 text-xs rounded-full transition duration-300 transform hover:scale-105'
                                >
                                  <p>{tech}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className='sm:flex sm:items-end sm:justify-end'>
                            <a
                              target='_block'
                              href={project.githubLink}
                              className='block bg-neutral-800 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-neutral-900 hover:underline'
                            >
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
