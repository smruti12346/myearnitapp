import React from "react";
import Link from "next/link";
import logo from "../../assets/images/logo-4.png";
import Image from "next/image";

function FooterHomeThree({ className }) {
  return (
    <>
      <section className={`appie-footer-area appie-footer-3-area ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget footer-about-widget-3">
                <div className="logo">
                  <a href="#">
                    <Image
                      width={150}
                      height={100}
                      src={logo}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  We&apos;re proud to announce we&apos;ve teamed up with
                  CollegeAdvisor.com to help pave a path to success for kids.
                </p>
                <Link href="/about">
                  Read More <i className="fal fa-arrow-right" />
                </Link>
                <div className="social mt-30">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/myearnitapp/">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://twitter.com/AppEarnit">
                        <i className="fab fa-twitter" />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-navigation footer-navigation-3">
                <h4 className="title">Company</h4>
                <ul>
                  <li>
                    <Link href="/task-app-for-autism">Task App For Autism</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="https://myearnitapp.com/blog/">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-navigation footer-navigation-3">
                <h4 className="title">Support</h4>
                <ul>
                  <li>
                    <Link href="/knowledge-base">Knowledge Base</Link>
                  </li>
                  <li>
                    <Link href="/faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="/privacy-terms">Privacy & Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">Get In Touch</h4>
                <ul>
                  {/* <li>
                    <a href="#">
                      <i className="fal fa-envelope" /> support@earnit.com
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="#">
                      <i className="fal fa-phone" /> +(642) 342 762 44
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-map-marker-alt" /> 442 Belle Terre St
                      Floor 7, San Francisco, AV 4206
                    </a>
                  </li> */}
                  <li className="d-flex">
                    <input
                      className="form-control"
                      placeholder="Email"
                      style={{ borderRadius: "0px" }}
                    />
                    <button
                      className="btn btn-success btn-small"
                      style={{ borderRadius: "0px" }}
                    >
                      Subscribe
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="
                footer-copyright
                d-flex
                align-items-center
                justify-content-between
                pt-35
              "
              >
                <div className="apps-download-btn">
                  <ul>
                    <li>
                      <Link href="https://apps.apple.com/us/app/my-earnit-app/id1457263188">
                        <i className="fab fa-apple" /> Download for iOS
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="item-2"
                        href="https://play.google.com/store/apps/details?id=com.firepitmedia.earnit"
                      >
                        <i className="fab fa-google-play" /> Download for
                        Android
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text">
                  <p>Copyright 2019, EarnIt. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterHomeThree;
