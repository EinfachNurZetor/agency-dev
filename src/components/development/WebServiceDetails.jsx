import { useEffect, useRef } from "react";

import web from "../../../public/assets/imgs/thumb/webservice/thumb.png";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const WebServiceDetails = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Web Development
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    Web development is the work involved in developing a Website
                    for the Internet or an intranet. Web development can range
                    from developing a simple single static page of plain text to
                    complex Web-based Internet applications, electronic
                    businesses, and social network services.
                  </p>
                  <p>
                    Web development may include Web design, Web content
                    creation, client-side/server-side scripting, and network
                    security configuration, among other tasks. Your website is a
                    key component of your business. It’s the hub of all of your
                    online activity.
                  </p>
                </div>
                <ul>
                  <li>+ API Development</li>
                  <li>+ WordPress</li>
                  <li>+ Cloud Migration</li>
                  <li>+ Front- & Backend Development</li>
                  <li>+ JavaScript / Typescript</li>
                  <li>+ React / Vue / Angular</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={web}
                  alt="Development Image"
                  data-speed="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebServiceDetails;
