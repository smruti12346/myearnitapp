import React from "react";
import Link from "next/link";
import BlogFour from "../../assets/images/blog-4.jpg";
import BlogFive from "../../assets/images/blog-5.jpg";
import BlogSix from "../../assets/images/blog-6.jpg";
import BlogSeven from "../../assets/images/blog-7.jpg";
import Image from "next/image";

function BlogHomeThree() {
  return (
    <>
      <section className="appie-blog-3-area pt-90 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Latest blog posts</h3>
                <p>The app provides for child & parents.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="appie-blog-item-3 mt-30">
                <div className="thumb">
                  <Image
                    width={120}
                    height={120}
                    src="https://myearnitapp.com/blog/wp-content/uploads/2023/05/myearnitapp-banner.jpg"
                    alt=""
                    style={{ width: "120px" }}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a
                      href="https://myearnitapp.com/blog/the-role-of-rewards-in-a-kids-chore-app-finding-the-right-balance/"
                      target="_blank"
                    >
                      The Role of Rewards in a Kids Chore App: Finding the Right
                      Balance
                    </a>
                  </h5>
                  <div className="meta-item">
                    <ul>
                      <li>
                        <i className="fal fa-clock" /> May 10, 2023
                      </li>
                      <li>
                        <i className="fal fa-comments" /> May 10, 2023
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-blog-item-3 mt-30">
                <div className="thumb">
                  <Image
                    width={120}
                    height={120}
                    src="https://myearnitapp.com/blog/wp-content/uploads/2023/04/MY-EARN-IT-BLOG-BANNER-01.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a
                      href="https://myearnitapp.com/blog/whats-the-ideal-chore-chart-for-2-year-old-3-year-old-kids/"
                      target="_blank"
                    >
                      What’s The Ideal Chore Chart For 2-Year-Old & 3-Year-Old
                      Kids
                    </a>
                  </h5>
                  <div className="meta-item">
                    <ul>
                      <li>
                        <i className="fal fa-clock" /> April 28, 2023
                      </li>
                      <li>
                        <i className="fal fa-comments" /> April 28, 2023
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-blog-item-3 mt-30">
                <div className="thumb">
                  <Image
                    width={120}
                    height={120}
                    src="https://myearnitapp.com/blog/wp-content/uploads/2023/04/myearnit.jpg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a
                      href="https://myearnitapp.com/blog/how-to-use-a-family-chore-app-that-works-for-everyone/"
                      target="_blank"
                    >
                      How to Use a Family Chore App That Works For Everyone
                    </a>
                  </h5>
                  <div className="meta-item">
                    <ul>
                      <li>
                        <i className="fal fa-clock" /> April 28, 2023
                      </li>
                      <li>
                        <i className="fal fa-comments" /> April 28, 2023
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-blog-item-3 mt-30">
                <div className="thumb">
                  <Image
                    width={120}
                    height={120}
                    src="https://myearnitapp.com/blog/wp-content/uploads/2023/04/7334dddddd.jpg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a
                      href="https://myearnitapp.com/blog/should-you-limit-your-younger-childrens-screen-time/"
                      target="_blank"
                    >
                      Should You Limit Your Younger Children’s Screen Time
                    </a>
                  </h5>
                  <div className="meta-item">
                    <ul>
                      <li>
                        <i className="fal fa-clock" /> April 26, 2023
                      </li>
                      <li>
                        <i className="fal fa-comments" /> April 26, 2023
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="blog-btn text-center mt-60">
                <Link
                  className="main-btn"
                  href="https://myearnitapp.com/blog"
                  target="_blank"
                >
                  View All Posts <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogHomeThree;
