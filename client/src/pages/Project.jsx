import gotravlImage from "../assets/gotravl.png";
import letterboxMobileImage from "../assets/letterbox-mobile.png";
import letterboxWebImage from "../assets/letterbox-web.png";
import uniqlohImage from "../assets/uniqloh.png";
import wanderMarkImage from "../assets/wander-mark.png";
import gdImage from "../assets/gd.png";

export default function Project() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-12 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-3xl text-neutral-800 mb-8">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src={gotravlImage}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-xl font-medium sm:text-3xl">Go TravL.</h2>
                <p className="mt-4 text-md leading-8 text-neutral-600">
                  Introducing GoTravL: redefining the way you experience travel.
                  With our state-of-the-art itinerary maker and insightful AI
                  assistant, no destination remains a mystery.
                </p>
                <p className="mt-4 text-md leading-8 text-neutral-600">
                  Join a vibrant community of travelers, share experiences, and
                  foster new relationships on the road. From top-notch
                  recommendations to real-time assistance, GoTravL ensures every
                  journey is memorable.
                </p>

                <a
                  target="_block"
                  href="https://github.com/kresnawijayaa/final-project-hacktiv8-GoTravL"
                  className="mt-8 inline-block rounded border border-neutral-800 bg-neutral-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-neutral-800 focus:outline-none focus:ring active:text-neutral-700"
                >
                  View detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-12 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-end-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-xl font-medium sm:text-3xl">
                  Letter Box Mobile
                </h2>
                <p className="mt-4 text-md leading-8 text-neutral-600">
                  The Letter Box Mobile App is designed for movie enthusiasts.
                  It provides users with access to the latest movies and allows
                  them to view detailed information about each film, including
                  ratings, casts, genre, and synopses.
                </p>

                <a
                  target="_block"
                  href="https://github.com/kresnawijayaa/letter-box-mobile-app-hacktiv8-p3c2"
                  className="mt-8 inline-block rounded border border-neutral-800 bg-neutral-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-neutral-800 focus:outline-none focus:ring active:text-neutral-700"
                >
                  View detail
                </a>
              </div>
            </div>

            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src={letterboxMobileImage}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-12 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src={letterboxWebImage}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-xl font-medium sm:text-3xl">
                  Letter Box Web
                </h2>
                <p className="mt-4 text-md leading-8 text-neutral-600">
                  The Letter Box Web App caters to movie enthusiasts, providing
                  them with the ability to explore the latest films and access
                  detailed information for each movie, including ratings, casts,
                  genre, and synopses. Additionally, the application includes
                  admin features for managing movies, genres, and admin accounts
                  (CRUD operations).
                </p>

                <a
                  target="_block"
                  href="https://github.com/kresnawijayaa/letter-box-web-app-hacktiv8-p3c1"
                  className="mt-8 inline-block rounded border border-neutral-800 bg-neutral-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-neutral-800 focus:outline-none focus:ring active:text-neutral-700"
                >
                  View detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-12 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-end-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-xl font-medium sm:text-3xl">Wander Mark</h2>
                <p className="mt-4 text-md leading-8 text-neutral-600">
                  The Wander Mark Web App is a social media website designed for
                  users to tag and share their favorite places.
                </p>
                <p className="mt-4 text-md leading-8 text-neutral-600">
                  Users can view and create posts with detailed location
                  information, which is seamlessly integrated with the Google
                  Map API. Additionally, the application offers the ability to
                  generate captivating captions using the OpenAI API.
                </p>

                <a
                  target="_block"
                  href="https://github.com/kresnawijayaa/wander-mark-web-app-hacktiv8-p2-iproject"
                  className="mt-8 inline-block rounded border border-neutral-800 bg-neutral-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-neutral-800 focus:outline-none focus:ring active:text-neutral-700"
                >
                  View detail
                </a>
              </div>
            </div>

            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src={wanderMarkImage}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-12 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src={uniqlohImage}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-xl font-medium sm:text-3xl">Uniqloh</h2>
                <p className="mt-4 text-md leading-8 text-neutral-600">
                  The Uniqloh Web App is a simple e-commerce-like website that
                  offers a selection of clothing items for sale. Users can
                  browse the available clothing items, apply filters to narrow
                  down their choices, and add clothing items to their favorites
                  list.
                </p>

                <a
                  target="_block"
                  href="https://github.com/kresnawijayaa/uniqloh-web-app-hacktiv8-p2c3"
                  className="mt-8 inline-block rounded border border-neutral-800 bg-neutral-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-neutral-800 focus:outline-none focus:ring active:text-neutral-700"
                >
                  View detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-12 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-end-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-xl font-medium sm:text-3xl">
                  TRAVL. (UI/UX)
                </h2>
                <p className="mt-4 text-md leading-8 text-neutral-600">
                  Travl. is an application that helps you to prepare for a
                  vacation trip, which provides all the needs in one facility
                  that has destination references by influencers, lists of
                  popular destinations, application reviews from various
                  platforms, saves favorite destinations, and creates
                  itineraries.
                </p>

                <a
                  target="_block"
                  href="https://kresna-wijaya.notion.site/Personal-Project-TRAVL-105fe0cc5f874398b4bd87ae8902b111"
                  className="mt-8 inline-block rounded border border-neutral-800 bg-neutral-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-neutral-800 focus:outline-none focus:ring active:text-neutral-700"
                >
                  View detail
                </a>
              </div>
            </div>

            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://kresna-wijaya.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd762c2d6-e1f6-49e0-bf82-a68d85a1ec0b%2FImage_4.png?table=block&id=c09b8270-0ae4-4432-b64b-5f7a68d33d7f&spaceId=4f224007-4272-4b9b-93ee-ddda2dc6c347&width=2000&userId=&cache=v2"
                  className="absolute inset-0 lg:h-[340px] lg:w-full h-[200px] w-full object-cover lg:rounded-xl my-auto drop-shadow "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-12 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src={gdImage}
                  className="absolute inset-0 lg:h-[340px] lg:w-full h-[200px] w-full object-cover lg:rounded-xl my-auto drop-shadow "
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-xl font-medium sm:text-3xl">
                  Graphic Design Portfolio
                </h2>
                <p className="mt-4 text-md leading-8 text-neutral-600">
                  My graphic design portfolio highlights my two years of work
                  and internship experiences. Explore a variety of projects,
                  including branding, logos, web design, print materials, and
                  motions. It showcases my growth, skills, and passion in
                  graphic design, offering a glimpse into my unique style and
                  quality of work.
                </p>

                <a
                  target="_block"
                  href="https://www.behance.net/kresnawijaya"
                  className="mt-8 inline-block rounded border border-neutral-800 bg-neutral-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-neutral-800 focus:outline-none focus:ring active:text-neutral-700"
                >
                  View detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
