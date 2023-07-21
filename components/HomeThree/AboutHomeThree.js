import React from "react";
import aboutThumb from "@/assets/images/about-thumb-2.png";
import aboutThumb3 from "@/assets/images/about-thumb-3.png";
import icon1 from "@/assets/images/icon/1.png";
import icon5 from "@/assets/images/icon/5.svg";
import icon6 from "@/assets/images/icon/6.svg";
import icon7 from "@/assets/images/icon/7.svg";
import Image from "next/image";
import Link from "next/link";
function AboutHomeThree() {
  return (
    <>
      <section
        className="appie-about-3-area pt-60 pb-100"
        id="features"
        style={{ textAlign: "center" }}
      >
        <div class="container large-title no-bottom">
          <div className="appie-section-title text-center">
            <h3 className="appie-title">
              Chores Don&apos;t Have to be Annoying
            </h3>
            {/* <p>
              The full monty spiffing good time no biggie cack grub fantastic.
            </p> */}
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Image
              width={200}
              height={200}
              src="/images/EASbadge.png"
              alt="img"
            />
          </div>
          <h4 className="title py-3">Teacher Review</h4>
          <p>
            &quot;Earn it offers an array of parental tools at your fingertips
            to encourage children to complete tasks and teach them the value of
            responsibility....&quot;
            <br />
            <Link href="https://www.educationalappstore.com/app/my-earnit-app">
              View the full report
            </Link>
          </p>
          <div class="center-socials">
            <Link
              href="https://www.facebook.com/myearnitapp/"
              class="facebook-color facebook-social"
            >
              <i class="fa fa-facebook"></i>
            </Link>
            <Link
              href="https://twitter.com/AppEarnit"
              class="twitter-color twitter-social"
            >
              <i class="fa fa-twitter"></i>
            </Link>
          </div>
          <h4 className="title py-3">Free Chores App</h4>
          <p>
            Earn It is a free chores app. You can easily download it on your
            iPhone or Android Device. It is a mobile app that makes it easy to
            assign and track household chores or any kind of chores without any
            hassle.
            <br />
            And, you can easily customize it to match your needs. For instance,
            you can create tasks for your kids and your spouse/partner
            separately. This way, you will be able to manage everything easily.
          </p>
          <h4 className="title py-3">The Chore App for Kids</h4>
          <p>
            Earn It is an excellent app for kids. Parents can use the app to
            assign tasks for kids with a deadline. Additionally, parents can
            also add reward for the chore completed. This way, you can encourage
            your kids to complete the tasks on time.
            <br />
            Kids chores app like Earn It are easy to use and it will save time.
            Plus, it will motivate kids to work.
            <br />
            Earn It is also a great chore tracker for autistic kids. It is a
            tool that can be easily customized to match specific requirements.
          </p>
          <div class="decoration"></div>
          <h4 className="title py-3">
            EarnIt! Partners with CollegeAdvisor.com, Woo Hoooo!!!!
          </h4>
          We&apos;re proud to announce we&apos;ve teamed up with
          CollegeAdvisor.com to help pave a path to success for kids. Helping
          them learn &amp; earn, and how to be responsible children that grow
          into responsible adults. Sign up for a free account at{" "}
          <a href="https://app.collegeadvisor.com/register?utm_source=Earnit&amp;utm_medium=marketing&amp;utm_campaign=MarchPromo">
            CollegeAdvisor.com
          </a>{" "}
          to learn more, or checkout our blog for more information.
          <br />
          <a href="https://www.collegeadvisor.com/?utm_source=Earnit&amp;utm_medium=marketing&amp;utm_campaign=MarchPromo">
            <Image
              src="/images/calogo.jpg"
              alt="College Advisor"
              width={400}
              height={100}
              className="mb-4"
            />
          </a>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="appie-about-thumb-3 wow animated fadeInLeft"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                {/* <Image
                  width={500}
                  height={520}
                  src={aboutThumb}
                  alt=""
                /> */}
                <iframe
                  src="https://player.vimeo.com/video/523199716?h=b274388539"
                  width="100%"
                  height="360"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-traffic-title">
                <h3
                  className="title"
                  style={{ fontSize: "28px" }}
                >
                  The Best Chore Tracker App
                </h3>
                <p className="text-left">
                  What makes Earn It the best chore tracker app? Because it
                  comes with many amazing features, such as App lock and
                  monitoring, taking photos before approving task for kids, and
                  much more. Here are some of the things you can do with Earn
                  It:
                </p>
              </div>
              <div className="row">
                {/* <div className="col-sm-6">
                  <div className="appie-traffic-service mb-30">
                    <div className="icon">
                      <Image
                        width={24}
                        height={24}
                        src={icon5}
                        alt=""
                      />
                    </div>
                    <h5 className="title">Carefully designed</h5>
                    <p>Mucker plastered bugger all mate morish are.</p>
                  </div>
                </div> */}
                {/* <div className="col-sm-6">
                  <div className="appie-traffic-service item-2 mb-30">
                    <div className="icon">
                      <Image
                        width={24}
                        height={24}
                        src={icon1}
                        alt=""
                      />
                    </div>
                    <h5 className="title">Seamless Sync</h5>
                    <p>Mucker plastered bugger all mate morish are.</p>
                  </div>
                </div> */}
                {/* <div className="col-lg-12">
                  <div className="traffic-btn mt-50">
                    <a
                      className="main-btn"
                      href="#"
                    >
                      Learn More <i className="fal fa-arrow-right" />
                    </a>
                  </div>
                </div> */}
                <div className="col-12">
                  <ul className="cntr">
                    <li>
                      {" "}
                      Create custom chore lists for family members including
                      your kids. All the tasks can be accessed on one platform.
                    </li>
                    <li>
                      {" "}
                      You can automatically assign and re-assign the tasks
                      without any hassle.
                    </li>
                    <li>
                      The tasks can be accessed and tracked from anywhere and
                      anytime.
                    </li>
                    <li>You will get notification for completed tasks.</li>
                    <li>
                      {" "}
                      You can easily add, delete and make changes without any
                      problem.
                    </li>
                    <li> You can set reminders and deadlines for the tasks.</li>
                    <li>
                      Use the app to monitor and reward kids for completing
                      their chores
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-100 flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <div className="appie-traffic-title">
                <h3 className="title">Browse over 40k Apps over the world</h3>
                <p>
                  He nicked it tickety boo harry the cras bargy chap mush
                  spiffing spend a penny the full monty burke butty.
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="appie-traffic-service mb-30 item-3">
                    <div className="icon">
                      <Image
                        width={24}
                        height={24}
                        src={icon6}
                        alt=""
                      />
                    </div>
                    <h5 className="title">User Interactive</h5>
                    <p>Mucker plastered bugger all mate morish are.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="appie-traffic-service item-2 mb-30 item-4">
                    <div className="icon">
                      <Image
                        width={24}
                        height={24}
                        src={icon7}
                        alt=""
                      />
                    </div>
                    <h5 className="title">Choose a App</h5>
                    <p>Mucker plastered bugger all mate morish are.</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="traffic-btn mt-50">
                    <Link
                      className="main-btn"
                      href="/knowledge-base"
                    >
                      Learn More <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <Image
                  width={500}
                  height={520}
                  src={aboutThumb3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHomeThree;
