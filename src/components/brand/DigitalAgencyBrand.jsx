import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import NunosoftDevelopment from "../../../public/assets/imgs/logo/dark/nunosoft-development.svg";
import NunosoftGames from "../../../public/assets/imgs/logo/dark/nunosoft-games.svg";
import NunosoftDreamcraft from "../../../public/assets/imgs/logo/dark/nunosoft-dreamcraft.svg";
import NunosoftMarketing from "../../../public/assets/imgs/logo/dark/nunosoft-marketing.svg";
import NunosoftEvents from "../../../public/assets/imgs/logo/dark/nunosoft-events.svg";
import NunosoftBrands from "../../../public/assets/imgs/logo/dark/nunosoft-brands.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBrand = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
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
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
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
      <section className="brand__area">
        <div className="container g-0 line pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Nunosoft Network</h2>
                <h3 className="sec-title title-anim">
                  We are happy to be a part of the Nunosoft Network to deliver products with the highest possible quality.
                </h3>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="brand__list">
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={150}
                    src={NunosoftGames}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={150}
                    src={NunosoftDevelopment}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={150}
                    src={NunosoftDreamcraft}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={150}
                    src={NunosoftMarketing}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={150}
                    src={NunosoftEvents}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={150}
                    src={NunosoftBrands}
                    alt="Brand Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBrand;
