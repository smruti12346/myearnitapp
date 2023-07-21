import React from "react";
import downloadThumb from "@/assets/images/download-thumb-1.png";
import downloadThumbTwo from "@/assets/images/download-thumb-2.png";
import Image from "next/image";
import Link from "next/link";

function DownloadHomeThree({ className }) {
  return (
    <>
      <section
        className={`appie-download-3-area pt-100 ${className || ""}`}
        id="download"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Download app today!</h3>
                <p>Download app for Andraoid today — it&apos;s free.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="appie-download-3-box mt-30 mr-20 wow animated fadeInLeft"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="content">
                  <h4 className="title">Android</h4>
                  <p>Download app for Android today — it&apos;s free.</p>
                  <Link
                    className="main-btn"
                    href="https://play.google.com/store/apps/details?id=com.firepitmedia.earnit"
                  >
                    <i className="fab fa-google-play" />
                    Download for Android
                  </Link>
                </div>
                <div className="thumb text-center">
                  <Image
                    src={downloadThumb}
                    alt=""
                    width={420}
                    height={332}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-download-3-box mt-30 ml-20 wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="content">
                  <h4 className="title">iOS & iPadOS</h4>
                  <p>Download app for iOS today — it&apos;s free.</p>
                  <Link
                    className="main-btn main-btn-2"
                    href="https://apps.apple.com/us/app/my-earnit-app/id1457263188"
                  >
                    <i className="fab fa-apple" />
                    Download for iOS
                  </Link>
                </div>
                <div className="thumb text-right">
                  <Image
                    src={downloadThumbTwo}
                    alt=""
                    width={520}
                    height={345}
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

export default DownloadHomeThree;
