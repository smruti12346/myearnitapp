import dynamic from "next/dynamic";
import Image from "next/image";
import thumb from "@/assets/images/about-thumb-2.png";
const HeroPages = dynamic(() => import("@/components/HeroPages"));
export default function Page() {
  const title1 = "About Us";
  const desc = "Families who work and play<br/> together, stay together.";
  return (
    <>
      <HeroPages
        tt={title1}
        desc={desc}
      />
      <section className="appie-blog-3-area cHomeNavigationTiles">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-6 col-12">
              <Image
                src={thumb}
                width={500}
                height={500}
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-md-6 col-12"
              style={{ margin: "auto" }}
            >
              <div class="text">
                <h2>About Us</h2>
                <h5>
                  Chore App For <span>Child</span>
                </h5>
                <p>
                  In the constantly changing and fast paced digital world,
                  children, and adults alike need help with structure. EarnIt
                  was born out of a blended family where each individual family
                  was chaotic enough. Trying to navigate how two sisters who
                  never had brothers, and two brothers who never had sisters,
                  now have each other, became a weekly dance. Chores, homework,
                  sports, dishes, sleepover leftovers stuffed in the couch
                  cushions, all needed some attention and so we came up with the
                  EarnIt! app. Since its inception in 2017, EarnIt has undergone
                  significant changes, and the team behind it is planning to
                  introduce more updates this year to enhance its usefulness and
                  fun factor for kids and parents alike. The app&apos;s creators
                  are not part of a big company; they are simply parents who
                  want their children to experience the same healthy challenges
                  and rewards they did while growing up. Our CEO shares a
                  personal story (too often:) from his childhood. He recalls
                  how, at the age of 7, he and his best friend walked nearly 5
                  miles to the mall to spend his hard-earned allowance. Earning
                  $20 a week by working with his grandfather to install auto
                  glass was no easy task, but the experience instilled in him a
                  sense of accomplishment and empowerment. We understand that
                  times have changed, and children today may not have the same
                  expectations as our Gen X founders. However, the app&apos;s
                  creators firmly believe in the inherent value of challenging
                  oneself and reaping the rewards that come with it. We strive
                  to foster a sense of achievement and personal growth in
                  children using EarnIt!
                </p>
                {/* <div class="data">
                  <a
                    href="#"
                    class="hire"
                  >
                    Hire Me
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
