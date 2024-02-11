import { useEffect, useRef } from "react";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import management from "../../../public/assets/imgs/thumb/projectmanagement/thumb.png";

const ConsultingServiceDetails = () => {
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
                  Consulting & Project Management
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    IT Consulting is a field that focuses on advising businesses
                    on how best to use information technology to meet their
                    business objectives. In addition to providing advice, IT
                    consultancies often implement, deploy, and administer IT
                    systems on businesses behalf.
                  </p>
                  <p>
                    Project management is the process of leading the work of a
                    team to achieve goals and meet success criteria at a
                    specified time. The primary challenge of project management
                    is to achieve all of the project goals within the given
                    constraints.
                  </p>
                </div>
                <ul>
                  <li>+ IT Consulting</li>
                  <li>+ Project Management</li>
                  <li>+ Opportunities</li>
                  <li>+ IT-Related Advises</li>
                  <li>+ Technology</li>
                  <li>+ Strategy</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={management}
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

export default ConsultingServiceDetails;
