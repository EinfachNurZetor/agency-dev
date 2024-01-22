import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  const serviceList = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });

          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">Services</h2>
                <h3 className="sec-title title-anim">
                  Our development <br /> Services
                </h3>
                <p>
                  We create digital experiences for brands and companies by
                  using creativity & technology. For the past 8 years, we have
                  been creating high-performance websites, apps, and products.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3" ref={serviceList}>
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link
                      href="/service-web-development"
                      className="service__title-3"
                    >
                      Web <br /> Development
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Websites are the most important part of your business. We
                      help you to build your website with the latest technology.
                    </p>
                    <ul className="">
                      <li>+ Web Design</li>
                      <li>+ Web Development</li>
                      <li>+ Web Maintenance</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-web-development"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3>
                    <Link
                      href="/service-software-development"
                      className="service__title-3 "
                    >
                      Software <br />
                      Development
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Software is used to automate business processes, increase
                      efficiency, and reduce human error. We create your custom
                      software to meet your business needs.
                    </p>
                    <ul className="">
                      <li>+ Mobile Applications</li>
                      <li>+ Desktop Applications</li>
                      <li>+ Maintenance</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-software-development"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link
                      href="/service-ecommerce"
                      className="service__title-3"
                    >
                      E-Commerce
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      E-Commerce is the buying and selling of products and
                      services online. We create your online store - you sell
                      your goods.
                    </p>
                    <ul className="">
                      <li>+ Design</li>
                      <li>+ Development</li>
                      <li>+ Maintenance</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-ecommerce"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/service-devops" className="service__title-3">
                      DevOps <br />
                      Services
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      DevOps is a set of practices that combines software and IT
                      operations. We help you to automate your business
                      processes.
                    </p>
                    <ul className="">
                      <li>+ Cloud Services</li>
                      <li>+ Automation</li>
                      <li>+ Maintenance</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-devops"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link
                      href="/service-emerging-tech"
                      className="service__title-3"
                    >
                      Emerging <br />
                      Technologies
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Emerging technologies are technologies that are perceived
                      as capable of changing the status quo. We help you to
                      implement these technologies.
                    </p>
                    <ul className="">
                      <li>+ Blockchain</li>
                      <li>+ AI & ML</li>
                      <li>+ IoT</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-emerging-tech"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link
                      href="/service-consulting"
                      className="service__title-3"
                    >
                      Consulting &
                      <br />
                      Project Management
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Consulting and project management are the most important
                      parts of a project. We help you to manage your project.
                    </p>
                    <ul className="">
                      <li>+ Consulting</li>
                      <li>+ Project Management</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-consulting"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;
