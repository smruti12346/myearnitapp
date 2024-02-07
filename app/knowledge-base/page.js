import Image from "next/image";
import logo from "../../assets/images/icon1.png";
import HeroPages from "@/components/HeroPages";
import { api_url } from "@/Auth";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(`${api_url}/pages?categories=33`);
  const data = await res.json();
  return data;
};
export default async function Page() {
  const title1 = "Help Topics";
  const desc = "For help with other EarnIt!<br/> features please contact";
  let data = await getData();
  return (
    <>
      <HeroPages
        tt={title1}
        desc={desc}
      />
      <section className="appie-blog-3-area cHomeNavigationTiles">
        <div className="container mt-5 mb-5">
          <div className="slds-text-heading_large mainHeading">
            Help Topics!
          </div>
          <div className="row mx-auto">
            {data.map((item, index) => (
              <>
                <div
                  className="col-md-6 col-lg-4 col-xl-3 col-12 mx-auto mb-3"
                  key={index}
                >
                  <div
                    className="slds-col slds-col slds-large-size--3-of-12 slds-medium-size--6-of-12 slds-small-size--6-of-12 slds-max-small-size--12-of-12 commonDiv tile_0"
                    style={{ position: "relative" }}
                  >
                    <Link
                      className="tileLinks"
                      // onClick={() => handleOpen(item.mainDesc)}
                      style={{ cursor: "pointer" }}
                      href={`/knowledge-base/${item.slug}`}
                    >
                      <div className="mainDivTiles">
                        <div className="mainImg">
                          <div className="img staticImg">
                            <Image
                              alt="User-added image"
                              className="image"
                              src={logo}
                              width={60}
                              height={58}
                            />
                          </div>
                          <div>
                            <div
                              className="title"
                              style={{ cursor: "pointer" }}
                            >
                              <label
                                className="Name"
                                style={{ cursor: "pointer" }}
                                dangerouslySetInnerHTML={{
                                  __html: item.title.rendered,
                                }}
                              ></label>
                            </div>
                            <div className="desp">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: item.content.rendered.substring(
                                    0,
                                    90
                                  ),
                                }}
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* second section */}
        </div>
      </section>
      <section className={`appie-project-3-area`}>
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
                  Need more help? No problem! Contact our phenomenal
                  <br />
                  support team!
                </h4>
                <a
                  className="main-btn"
                  href="mailto:support@myearnitapp.com"
                >
                  Email a Human
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
