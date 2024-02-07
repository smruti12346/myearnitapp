import AboutHomeThree from "@/components/HomeThree/AboutHomeThree";
import BlogHomeThree from "@/components/HomeThree/BlogHomeThree";
import DownloadHomeThree from "@/components/HomeThree/DownloadHomeThree";
import FunFactHomeThree from "@/components/HomeThree/FunFactHomeThree";
import HeroHomeThree from "@/components/HomeThree/HeroHomeThree";
import ServicesHomeThree from "@/components/HomeThree/ServicesHomeThree";
import ShowCaseHomeThree from "@/components/HomeThree/ShowCaseHomeThree";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <HeroHomeThree />
      <ServicesHomeThree />
      <FunFactHomeThree />
      <AboutHomeThree />
      <ShowCaseHomeThree />
      <DownloadHomeThree />
      <BlogHomeThree />
      <section className={`appie-project-3-area `}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="
                appie-project-3-box
                d-block d-md-flex
                justify-content-between
                align-items-center
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <h4 className="title">
                  {/* Need more help? No problem! Contact our phenomenal */}
                  Simplify your life today!
                  {/* <br />
                  support team! */}
                </h4>
                <ul>
                  <li className="mb-3">
                    <Link
                      href="https://apps.apple.com/us/app/my-earnit-app/id1457263188"
                      style={{ width: "280px" }}
                    >
                      <i className="fab fa-apple" /> Download for iOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="item-2"
                      href="https://play.google.com/store/apps/details?id=com.firepitmedia.earnit"
                      style={{ width: "280px" }}
                    >
                      <i className="fab fa-google-play" /> Download for Android
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
