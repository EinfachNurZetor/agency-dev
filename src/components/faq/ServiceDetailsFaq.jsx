import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/faq.jpg";
import Image from "next/image";

const ServiceDetailsFaq = () => {
  return (
    <>
      <section className="faq__area">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  Frequently Asked Questions
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingOne"
                      >
                        How do you approach a new project?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          First we need to understand your business and your
                          goals. We will ask you a lot of questions about your
                          business, your customers, and your competitors. We
                          will also ask you about your goals for the project.
                          Once we have a clear understanding of your business
                          and your goals, we will create a strategy that will
                          help you achieve those goals.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        What is your design philosophy?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          A good design is one that is functional, beautiful,
                          and accessible. We create designs people love to see,
                          remember and enjoy using.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        How much does my project cost?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          The cost of your project will depend on the size and
                          complexity of the project. We will provide you with a
                          detailed estimate after we have a clear understanding
                          of your project requirements.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        How long does it take to complete my project?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          The time it takes to complete your project will depend
                          on the size and complexity of the project. We are
                          going to provide you with a detailed timeline after we
                          have a clear understanding of your project
                          requirements.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsFaq;
