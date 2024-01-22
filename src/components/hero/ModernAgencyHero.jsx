import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/plugins";
import Shape23 from "../../../public/assets/imgs/shape/23.png";
import ScrollDown from "../../../public/assets/imgs/essential-img/scrolldown.svg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

gsap.registerPlugin(ScrollTrigger);

const ModernAgencyHero = () => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  const heroTextAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
    if (typeof window !== "undefined") {
      let hero__text_animation = heroTextAnim.current;
      let tHero = gsap.context(() => {
        let split_text_animation = new SplitText(hero__text_animation, {
          type: "chars words",
        });
        gsap.from(
          split_text_animation.words,
          { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );
        let imageTl_8 = gsap.timeline({
          scrollTrigger: {
            trigger: ".portfolio__big",
            start: "top top+=90",
            pin: true,
            markers: false,
            scrub: 1,
            pinSpacing: false,
            end: "bottom bottom+=150",
          },
        });
        imageTl_8.to(".portfolio__big-inner", {
          width: "100%",
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="hero__area-4 sp-x">
        <div className="hero__content-8">
          <h2
            className="sec-title-4 sec-title-5 animation__char_come"
            ref={charAnim}
          >
            Nunosoft{" "}
            <Image
              priority
              width={108}
              style={{ height: "auto" }}
              src={Shape23}
              alt="shape"
            />
          </h2>
          <h2 className="sec-title-4 animation__char_come" ref={charAnim2}>
            Development <span>Studio</span>
          </h2>
          <div className="scroll-wrapper">
            <div className="scroll-down">
              <span>scroll</span>
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={ScrollDown}
                alt="Scroll Down"
              />
            </div>
            <p className="discription hero__text-animation" ref={heroTextAnim}>
              Building websites and applications with modern technologies and a touch of creativity. We can bring your wild ideas to life.
            </p>
          </div>
        </div>
      </section>
      <div className="portfolio__big">
        <div
          className="portfolio__big-inner"
        >
          <video width="100%" height="100%" loop autoPlay muted playsInline>
            <source src="assets/imgs/main/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default ModernAgencyHero;
