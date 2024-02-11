import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../public/assets/imgs/thumb/dev-1.jpg";
import ThumbDev2 from "../../../public/assets/imgs/thumb/dev-2.jpg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import devops from "../../../public/assets/imgs/thumb/devops/thumb.png";

const DevOpsDetails = () => {
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
                  DevOps Services
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    DevOps is a set of practices that combines software and IT
                    operations. It aims to shorten the systems development life
                    cycle and provide continuous delivery with high software
                    quality. DevOps is complementary with Agile software
                    development; several DevOps aspects came from Agile
                    methodology.
                  </p>
                  <p>
                    DevOps is the combination of cultural philosophies,
                    practices, and tools that increases an organization’s
                    ability to deliver applications and services at high
                    velocity: evolving and improving products at a faster pace
                    than organizations using traditional software development
                    and infrastructure management processes.
                  </p>
                </div>
                <ul>
                  <li>+ Integration</li>
                  <li>+ Deployment</li>
                  <li>+ Monitoring</li>
                  <li>+ Feedback</li>
                  <li>+ Testing</li>
                  <li>+ Security</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={devops}
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

export default DevOpsDetails;
