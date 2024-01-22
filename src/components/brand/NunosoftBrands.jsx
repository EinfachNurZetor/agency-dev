import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import NunosoftDevelopment from "../../../public/assets/imgs/logo/light/nunosoft-development.svg";
import NunosoftGames from "../../../public/assets/imgs/logo/light/nunosoft-games.svg";
import NunosoftDreamcraft from "../../../public/assets/imgs/logo/light/nunosoft-dreamcraft.svg";
import NunosoftMarketing from "../../../public/assets/imgs/logo/light/nunosoft-marketing.svg";
import NunosoftEvents from "../../../public/assets/imgs/logo/light/nunosoft-events.svg";
import Nunosoft from "../../../public/assets/imgs/logo/light/nunosoft-brands.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const NunosoftBrands = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_5", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_5");
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
          gsap.to(".fade_bottom_5", {
            scrollTrigger: {
              trigger: ".fade_bottom_5",
              start: "top center+=300",
              markers: false,
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
      <div className="client__area-8 sp-x">
        <h6 className="text-end about-sub-right">Nunosoft</h6>
        <div className="section_wrapper">
          <h4 className="react_border">
            <span>04</span>
          </h4>
        </div>
        <div className="client__section">
          <h2 className="client__section__title fade_bottom_5">
            Explore the world of <span>Nunosoft</span>
          </h2>
          <p className="client__section__dis fade_bottom_5">
            {
              "We're Your Gateway To Dreams: Development, Media, Games, Events, And Beyond."
            }
          </p>
        </div>
        <div className="client__logo">
          <Image
            priority
            width={170}
            src={NunosoftGames}
            alt="company logo"
            className="fade_bottom_5"
          />
          <Image
            priority
            width={170}
            src={NunosoftDevelopment}
            alt="company logo"
            className="fade_bottom_5"
          />
          <Image
            priority
            width={170}
            src={NunosoftDreamcraft}
            alt="company logo"
            className="fade_bottom_5"
          />
          <Image
            priority
            width={170}
            src={NunosoftMarketing}
            alt="company logo"
            className="fade_bottom_5"
          />
          <Image
            priority
            width={170}
            src={NunosoftEvents}
            alt="company logo"
            className="fade_bottom_5"
          />
          <Image
            priority
            width={170}
            src={Nunosoft}
            alt="company logo"
            className="fade_bottom_5"
          />
        </div>
      </div>
    </>
  );
};

export default NunosoftBrands;
