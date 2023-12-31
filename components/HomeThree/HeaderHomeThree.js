"use client";
import React, { useEffect } from "react";
import logo from "../../assets/images/logo-4.png";
import StickyMenu from "../../lib/StickyMenu";
import Navigation from "../Navigation";
import Image from "next/image";
import Link from "next/link";

function HeaderHomeThree({ action }) {
  useEffect(() => {
    StickyMenu();
  });
  return (
    <>
      <header className="appie-header-area appie-header-3-area appie-sticky sticky">
        <div className="container">
          <div className="header-nav-box header-nav-box-3">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                <div className="appie-logo-box">
                  <a href="/">
                    <Image
                      width={130}
                      height={80}
                      src={logo}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-sm-1 order-3 order-sm-2">
                <div className="appie-header-main-menu">
                  <Navigation />
                </div>
              </div>
              <div className="col-lg-2  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                <div className="appie-btn-box text-right">
                  {/* <a
                    className="login-btn"
                    href="#"
                  >
                    <i className="fal fa-user" /> Login
                  </a> */}
                  <Link
                    className="main-btn ml-30"
                    href="contact"
                  >
                    Contact
                  </Link>
                  <div
                    onClick={(e) => action(e)}
                    className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                  >
                    <i className="fa fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderHomeThree;
