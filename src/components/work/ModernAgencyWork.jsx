import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import work1 from "../../../public/assets/imgs/work/portfolio/work-01.jpg";
import work2 from "../../../public/assets/imgs/work/portfolio/work-02.jpg";
import work3 from "../../../public/assets/imgs/work/portfolio/work-03.jpg";
import work4 from "../../../public/assets/imgs/work/portfolio/work-04.jpg";
import work5 from "../../../public/assets/imgs/work/portfolio/work-05.jpg";
import work6 from "../../../public/assets/imgs/work/portfolio/work-06.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";

const ModernAgencyWork = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_3", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_3");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom_3", {
            scrollTrigger: {
              trigger: ".fade_bottom_3",
              start: "top center+=300",
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <div className="work__area-8">
        <div className="sec-top sp-x">
          <h6 className="text-end about-sub-right">Our work</h6>
          <div className="section_wrapper">
            <h4 className="react_border">
              <span>03</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="roll__slider">
            <Swiper
              modules={[FreeMode, Autoplay]}
              spaceBetween={60}
              slidesPerView={1}
              freeMode={true}
              loop={true}
              centeredSlides={true}
              allowTouchMove={false}
              speed={10000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
              }}
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <h2 className="rollslide_title-1">
                    Selected <span>Work</span>
                  </h2>
                </SwiperSlide>
                <SwiperSlide>
                  <h2 className="rollslide_title-1">
                    Selected <span>Work</span>
                  </h2>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>

        <div className="work8__title fade_bottom_3">
          <p>
            {" "}
            Some of our <span>selected</span> works we made with love in the
            recent years. We cant wait to make your project a reality.
          </p>
        </div>

        <div className="workitems sp-x">
          <div className="work8 fade_bottom_3">
            <Tilt className="work8__inner">
              <Link href="/" className="wc-tilt" data-speed="1">
                <div className="work8__thumb">
                  <video
                    width="100%"
                    height="100%"
                    loop
                    autoPlay
                    muted
                    playsInline
                  >
                    <source
                      src="assets/imgs/portfolio/agencypage.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="work8__content tilt">
                  <h4 className="work8__content__title">
                    Nunosoft Agency <span>FULL-SERVICE</span>
                  </h4>
                  <p>
                    Nunosoft Network <br />- 2023
                  </p>
                </div>
              </Link>
            </Tilt>
          </div>

          <div className="work8 fade_bottom_3">
            <Tilt className="work8__inner">
              <Link href="/" className="wc-tilt" data-speed="1.2">
                <div className="work8__thumb">
                  <video
                    width="100%"
                    height="100%"
                    loop
                    autoPlay
                    muted
                    playsInline
                  >
                    <source
                      src="assets/imgs/portfolio/apilib-vid.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="work8__content tilt">
                  <h4 className="work8__content__title">
                    API-Lib Homepage <span>FULL-SERVICE</span>
                  </h4>
                  <p>
                    API-Lib <br />- 2023
                  </p>
                </div>
              </Link>
            </Tilt>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="work8__btn">
              <Link href="/portfolio" className="blog__btn about_btn">
                view all works
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernAgencyWork;
