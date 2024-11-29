import { FunctionComponent } from "react";
import styles from "./TestimonialSection.module.css";

export type TestimonialSectionType = {
  className?: string;
};

const TestimonialSection: FunctionComponent<TestimonialSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialSection, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.testimonialHeader}>
          <div className={styles.header}>
            <h3 className={styles.testimonials}>Testimonials</h3>
            <h1
              className={styles.whatClients}
            >{`What Clients & Colleagues Say`}</h1>
          </div>
        </div>
        <div className={styles.quotes}>
          <div className={styles.quote}>
            <img
              className={styles.clientImageIcon}
              alt=""
              src="/client-image@2x.png"
            />
            <img
              className={styles.quotationMarksIcon}
              rows={15}
              cols={21}
              alt=""
              src="/quotation-marks@2x.png"
            />
          </div>
          <div className={styles.feedback}>
            <div className={styles.content1}>
              <blockquote className={styles.supportingText}>
                “ Working with Minhaj has been a game-changer for our project.
                His expertise in DevOps and microservices architecture allowed
                us to scale efficiently and deliver releases much faster. His
                proactive approach and attention to detail have been invaluable
                to our team “
              </blockquote>
              <div className={styles.client}>
                <div className={styles.info}>
                  <img
                    className={styles.profilePictureIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-144@2x.png"
                  />
                  <div className={styles.details}>
                    <div className={styles.supportingText1}>Dipu paul</div>
                    <div className={styles.supportingText2}>UI UX Designer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navigation}>
              <img
                className={styles.clientImageIcon}
                alt=""
                src="/frame-1000011759-1@2x.png"
              />
              <img
                className={styles.nextIcon}
                loading="lazy"
                alt=""
                src="/frame-1000011760-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
