"use client"
import React, { useState, useEffect } from "react";

function AboutHomeThree() {
  const [acfData, setAcfData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://myearnitapp.com/blog/wp-json/wp/v2/pages");
        const data = await response.json();
        if (data && data.length > 0 && data[0].acf) {
          setAcfData(data[0].acf);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <section
        className="appie-about-3-area pt-60 pb-100"
        id="features"
        style={{ textAlign: "center" }}
      >
        <div dangerouslySetInnerHTML={{ __html: acfData.first }} />
        <div className="container">
        <div dangerouslySetInnerHTML={{ __html: acfData.second }} />
        </div>
        <div className="container">
        <div dangerouslySetInnerHTML={{ __html: acfData.third }} />
        </div>
      </section>
    </>
  );
}

export default AboutHomeThree;
