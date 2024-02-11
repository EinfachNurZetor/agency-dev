import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../public/assets/imgs/thumb/dev-1.jpg";
import ThumbDev2 from "../../../public/assets/imgs/thumb/dev-2.jpg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import emerging from "../../../public/assets/imgs/thumb/emergingtech/thumb.png";

const EmergingDetails = () => {
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
                  Emerging Technology
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    Emerging technologies are technologies that are perceived as
                    capable of changing the status quo. These technologies are
                    generally new but include older technologies that are still
                    controversial and relatively undeveloped in potential.
                  </p>
                  <p>
                    This may include technologies such as artificial
                    intelligence (AI), augmented reality (AR), blockchain,
                    Internet of Things (IoT), and 5G.
                  </p>
                </div>
                <ul>
                  <li>+ Artificial Intelligence</li>
                  <li>+ Augmented Reality</li>
                  <li>+ Blockchain</li>
                  <li>+ Internet of Things</li>
                  <li>+ 5G</li>
                  <li>+ 3D Printing</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={emerging}
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

export default EmergingDetails;
