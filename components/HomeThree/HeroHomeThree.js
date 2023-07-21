"use client";
import React, { useState } from "react";
import heroThumb from "../../assets/images/hero-thumb-4.png";
import PopupVideo from "../PopupVideo";
import Image from "next/image";
import Link from "next/link";
function HeroHomeThree() {
  const [showVideo, setVideoValue] = useState(false);
  const handleShowVideo = (e) => {
    e.preventDefault();
    setVideoValue(!showVideo);
  };
  return (
    <>
      {showVideo && (
        <PopupVideo
          videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
          handler={(e) => handleShowVideo(e)}
        />
      )}
      <section className="appie-hero-area appie-hero-3-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="appie-hero-content text-center">
                <h1 className="appie-title">Earn It Mobile App For Kids - </h1>
                <p>
                  The Best Chore App for Families, Couples and Kids
                  <br />
                </p>
                <div className="hero-btns">
                  <div class="apps-download-btn">
                    <ul>
                      <li>
                        <Link href="https://apps.apple.com/us/app/my-earnit-app/id1457263188">
                          <i class="fab fa-apple"></i> Download for iOS
                        </Link>
                      </li>
                      <li>
                        <Link href="https://play.google.com/store/apps/details?id=com.firepitmedia.earnit">
                          <i class="fab fa-google-play"></i> Download for
                          Android
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="thumb mt-100 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="400ms"
                >
                  <Image
                    width={972}
                    height={361}
                    src={heroThumb}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHomeThree;
