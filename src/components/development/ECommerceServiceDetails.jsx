import { useEffect, useRef } from "react";

import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import ecomm from "../../../public/assets/imgs/thumb/ecomm/thumb.png";

const ECommServiceDetails = () => {
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
                  E-Commerce
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    E-commerce (electronic commerce) is the activity of buying
                    or selling of products on online services or over the
                    Internet. Electronic commerce draws on technologies such as
                    mobile commerce, electronic funds transfer, supply chain
                    management, Internet marketing, online transaction
                    processing, electronic data interchange (EDI), inventory
                    management systems, and automated data collection systems.
                  </p>
                  <p>
                    E-commerce is in turn driven by the technological advances
                    of the semiconductor industry, and is the largest sector of
                    the electronics industry. Modern electronic commerce
                    typically uses the World Wide Web for at least one part of
                    the transaction's life cycle although it may also use other
                    technologies such as e-mail.
                  </p>
                </div>
                <ul>
                  <li>+ Online Shopping</li>
                  <li>+ Online Marketplaces</li>
                  <li>+ Online Auctions</li>
                  <li>+ Payment Gateways</li>
                  <li>+ Internet Banking</li>
                  <li>+ Online Ticketing</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ecomm}
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

export default ECommServiceDetails;
