import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Sandro from "../../../public/assets/imgs/team/nunosoft/sandro.png";
import Wolfgang from "../../../public/assets/imgs/team/nunosoft/wolfgang.png";
import Daniel from "../../../public/assets/imgs/team/nunosoft/daniel.png";
import Mirko from "../../../public/assets/imgs/team/nunosoft/mirko.png";
import None from "../../../public/assets/imgs/team/nunosoft/none.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";

const AboutTeam = () => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }
  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    try {
      const target = e.target;
      let tHero = gsap.context(() => {
        let tl = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });
        let t2 = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });

        // Team Page Team Cursor
        if (target.closest(".team__slider")) {
          tl.to(
            team_cursor,
            {
              opacity: 1,
              ease: "power4.out",
            },
            "-=0.3"
          );
        } else {
          t2.to(
            team_cursor,
            {
              opacity: 0,
              ease: "power4.out",
            },
            "-=0.3"
          );
        }
      });
      return () => tHero.revert();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="team__area pt-140 pb-140">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title title-anim">Our Team</h2>
          <h3 className="sec-title title-anim">
            Behind the code
          </h3>
        </div>

        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Sandro}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Sandro Löb</h4>
                    <h5 className="team__member-role">Founder & CEO</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Wolfgang}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Wolfgang Preinfalk</h4>
                    <h5 className="team__member-role">Founder & COO</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Mirko}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Mirko Jahn</h4>
                    <h5 className="team__member-role">Senior Finance Manager & Business Advisor</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={None}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Ermin Bihorac</h4>
                    <h5 className="team__member-role">Project Manager</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Daniel}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Daniel Rockenschaub</h4>
                    <h5 className="team__member-role">Project Manager</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={None}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Johannes Göbel</h4>
                    <h5 className="team__member-role">Developer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/team-details">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={None}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Fabian Becker</h4>
                    <h5 className="team__member-role">Developer</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
