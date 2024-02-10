import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowRight from "../../../public/assets/imgs/portfolio/11/arrow-right.png";
import Link from "next/link";
import Image from "next/image";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "tOQ9W3lh9";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { useEffect, useRef, useState } from "react";

export default function Footer5() {
  const menuAnim = useRef();
  const menuAnim2 = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation(menuAnim);
    }
    if (menuAnim2.current) {
      menuAnimation(menuAnim2);
    }
  }, []);
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ email });
    setEmail("");
    alert("Form submitted");
  };

  const menuAnimation = (data) => {
    let rootParent = data.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("");
      let spanData = "";
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == " ") {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + "</div>";
      firstParent[0].innerHTML = result;
    }
  };
  return (
    <>
      <footer className="footer__area-8 pt-120">
        <div className="footer__top-2 text-anim">
          <div className="contact_wrap">
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
                      {"let's"} <span> connect </span>
                    </h2>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h2 className="rollslide_title-1">
                      {"let's"} <span> connect </span>
                    </h2>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>

            <Link href="/contact" className="link">
              click here
            </Link>
          </div>
        </div>
        <div className="footer_categories">
          <div className="categories_item">
            <h4 className="cat_title">useful links</h4>
            <ul className="cat_links menu-anim" ref={menuAnim}>
              <li>
                <Link href="https://nunosoft.net">company</Link>
              </li>
              <li>
                <Link href="https://join.com/companies/nunosoft">career</Link>
              </li>
              <li>
                <Link href="https://legal.nunosoft.net/privacy">
                  privacy policy
                </Link>
              </li>
              <li>
                <Link href="https://legal.nunosoft.net/imprint">imprint</Link>
              </li>
            </ul>
          </div>
          <div className="categories_item">
            <h4 className="cat_title">follow us</h4>
            <ul className="cat_links menu-anim" ref={menuAnim2}>
              <li>
                <Link href="https://www.linkedin.com/company/nunosoft/">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/nunosoftnet">Twitter</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/nunosoftnet/">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="categories_item l_item">
            <h4 className="cat_title">newsletter</h4>
            <div className="footer__subscribe-2">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="submit" disabled={submitting}>
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    src={ArrowRight}
                    alt="Arrow Icon"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer__copyright-8">
          <p>
            © Alrights reserved by{" "}
            <a href="https://nunosoft.net/" target="_blank">
              Nunosoft
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
