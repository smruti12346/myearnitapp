"use client";
import React, { useState } from "react";
import FunFactThumb from "../../assets/images/fun-fact-thumb.png";
import CounterUpCom from "@/lib/CounterUpCom";
import PopupVideo from "../PopupVideo";
import Image from "next/image";
function FunFactHomeThree() {
  const [showVideo, setVideoValue] = useState(false);
  const handleShowVideo = (e) => {
    e.preventDefault();
    setVideoValue(!showVideo);
  };
  return (
    <>
      {showVideo && (
        <PopupVideo
          videoSrc="https://player.vimeo.com/video/685199027?h=08a61a3858"
          handler={(e) => handleShowVideo(e)}
        />
      )}
      <section
        className="appie-fun-fact-area"
        id="fun-fact-area"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="appie-fun-fact-box wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="appie-fun-fact-content">
                      <h3 className="title">Get Started With EarnIt!</h3>
                      <p>The chore App for kids</p>
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="appie-fun-fact-item">
                            <h4 className="title">
                              <CounterUpCom
                                endValue="700"
                                sectionSelect="fun-fact-area"
                              />
                              k
                            </h4>
                            <span>Chores Created</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="appie-fun-fact-item">
                            <h4 className="title">
                              <CounterUpCom
                                endValue="476"
                                sectionSelect="fun-fact-area"
                              />
                              +
                            </h4>
                            <span>Average Review</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="appie-fun-fact-item">
                            <h4 className="title">
                              <CounterUpCom
                                endValue="30"
                                sectionSelect="fun-fact-area"
                              />
                              M
                            </h4>
                            <span>Active Users</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="appie-fun-fact-play">
                      <a
                        onClick={(e) => handleShowVideo(e)}
                        className="appie-video-popup"
                        href="https://vimeo.com/523199716"
                      >
                        <i className="fas fa-play" />
                      </a>
                      <Image
                        width={498}
                        height={316}
                        src={FunFactThumb}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FunFactHomeThree;
