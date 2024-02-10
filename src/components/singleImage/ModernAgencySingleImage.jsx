import Link from "next/link";
import { useEffect, useRef } from "react";
import VideoFrame from "../../../public/assets/imgs/essential-img/video-frame.png";
import SvgStar from "../../../public/assets/imgs/essential-img/svgstar.png";
import Shape24 from "../../../public/assets/imgs/shape/24.png";
import Image from "next/image";

const ModernAgencySingleImage = () => {
  

  return (
    <>
      <div className="single__image-8 pt-130 pb-200 text-center sp-x">
        <div className="col-lg-10 text-center m-auto">
          <div className="singlecontent">
            <div className="hover_8_wrap">
            <h2 className="tech_title fade_bottom_4">
                WE BUILD WEBSITE, APP AND SOFTWARE SOLUTIONS THAT MAKE A DIFFERENCE <br/>
                <Link href="/">Imagination Brought To Life.</Link>
              </h2>
            </div>
            <p className="single_dis pb-110 fade_bottom_4">
            Creating a website involves more than just aesthetic appeal. It's about developing a site that is easy to navigate, loads quickly, and is optimized for search engines. Similarly, with software, our aim is not only to ensure it functions correctly, but also to make it user-friendly and visually appealing.            </p>
            <div className="single__thumb">
            <video loop muted autoPlay playsInline>
                <source src="assets/video/textloop.mp4" type="video/mp4" />
              </video>
              <Image
                priority
                style={{ width: "100%", height: "100%" }}
                src={VideoFrame}
                alt="image"
                className="video-frame"
              />
              <Image
                priority
                width={113}
                style={{ height: "auto" }}
                className="svgstar"
                src={SvgStar}
                alt="shape"
              />
              <Image
                priority
                width={77}
                style={{ height: "auto" }}
                src={Shape24}
                alt="shape"
                className="shape-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernAgencySingleImage;
