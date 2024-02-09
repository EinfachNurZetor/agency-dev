import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";

// Import images
import Sandro from "../../../public/assets/imgs/team/nunosoft/sandro.png";
import Wolfgang from "../../../public/assets/imgs/team/nunosoft/wolfgang.png";
import Daniel from "../../../public/assets/imgs/team/nunosoft/daniel.png";
import Mirko from "../../../public/assets/imgs/team/nunosoft/mirko.png";
import None from "../../../public/assets/imgs/team/nunosoft/none.png";

// Team members data
const teamMembers = [
  { name: "Sandro Löb", role: "CEO & Lead Nunosoft Games", src: Sandro },
  { name: "Wolfgang Preinfalk", role: "COO & Lead Nunosoft Development", src: Wolfgang },
  { name: "Mirko Jahn", role: "Senior Finance Manager & Business Advisor", src: Mirko },
  { name: "Alexander Schmid", role: "Project Manager", src: None },
  { name: "Daniel Rockenschaub", role: "Project Manager", src: Daniel },
  { name: "Ermin Bihorac", role: "Project Manager", src: None },
  { name: "Johannes Göbel", role: "Lead Nunosoft Marketing", src: None },
  { name: "Fabian Becker", role: "Lead Nunosoft Dreamcraft", src: None },
  { name: "Michael Fischer", role: "Lead Nunosoft Events", src: None },
  { name: "Sarah Bauer", role: "Lead Nunosoft Brands", src: None }
];

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
          <h3 className="sec-title title-anim">Behind the games</h3>
        </div>

        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={false}
            speed={2000}
            breakpoints={{
              640: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="team__slide">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={member.src}
                      alt="Team Member"
                    />
                    <div className="team__info">
                      <h4 className="team__member-name">{member.name}</h4>
                      <h5 className="team__member-role">{member.role}</h5>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
