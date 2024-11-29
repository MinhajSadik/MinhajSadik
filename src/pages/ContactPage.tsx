import { FunctionComponent, useCallback } from "react";
import LeftInner from "../components/LeftInner";
import HackerrankOne from "../components/HackerrankOne";
import Input1 from "../components/Input1";
import { useNavigate } from "react-router-dom";
import VisionMissionPair from "../components/VisionMissionPair";
import styles from "./ContactPage.module.css";

const ContactPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconPlayContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactPageChild} />
      <footer className={styles.items}>
        <div className={styles.itemsInner}>
          <div className={styles.architecturesWrapper}>
            <div className={styles.architectures}>Architectures</div>
          </div>
        </div>
        <h2 className={styles.microservice}>Microservice</h2>
        <div className={styles.items1}>
          <h1 className={styles.itemDetails}>*</h1>
        </div>
        <h2 className={styles.microservice}>Monolithic</h2>
        <div className={styles.items1}>
          <h1 className={styles.itemDetails}>*</h1>
        </div>
        <h2 className={styles.clientServer}>Client-Server</h2>
        <div className={styles.items1}>
          <h1 className={styles.itemDetails}>*</h1>
        </div>
        <h2 className={styles.clientServer}>System Design</h2>
        <div className={styles.prototypes}>
          <div className={styles.prototypesInner}>
            <div className={styles.technologiesWrapper}>
              <div className={styles.architectures}>Technologies</div>
            </div>
          </div>
          <h2 className={styles.prototype}>Prototype</h2>
          <h2 className={styles.prototype1}>Prototype</h2>
        </div>
      </footer>
      <h1 className={styles.minhaj}>Minhaj</h1>
      <div className={styles.content} />
      <div className={styles.content1} />
      <div className={styles.content2} />
      <div className={styles.content3} />
      <div className={styles.bg} />
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-158@2x.png" />
        <img className={styles.frameItem} alt="" src="/rectangle-159@2x.png" />
        <img className={styles.frameInner} alt="" src="/rectangle-160@2x.png" />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-161@2x.png"
        />
        <img
          className={styles.frameChild1}
          alt=""
          src="/rectangle-162@2x.png"
        />
        <img className={styles.backgroundIcon} alt="" src="/background1.svg" />
      </div>
      <div className={styles.content4} />
      <div className={styles.content5} />
      <div className={styles.content6} />
      <div className={styles.content7} />
      <div className={styles.leftInnerParent}>
        <LeftInner />
        <div className={styles.titleInnerParent}>
          <div className={styles.titleInner}>
            <div className={styles.title}>
              <div className={styles.ctaContent}>
                <div className={styles.name}>
                  <h1 className={styles.minhajSadik}>
                    <b>Minhaj Sadik</b>
                    <span className={styles.span}>{` `}</span>
                  </h1>
                  <img
                    className={styles.nameChild}
                    loading="lazy"
                    alt=""
                    src="/rectangle-1@2x.png"
                  />
                  <h1 className={styles.h12}>-</h1>
                </div>
                <h1
                  className={styles.softwareEngineer}
                >{`Software Engineer &`}</h1>
                <h1 className={styles.devopsSpecialist}>DevOps Specialist</h1>
                <div className={styles.buildingScalableAnd}>
                  Building scalable and secure architectures for modern
                  applications.
                </div>
              </div>
              <div className={styles.buttonDiv}>
                <div className={styles.buttonOne}>
                  <div className={styles.exploreButton}>
                    <div className={styles.buttonContactUs}>
                      <div className={styles.exploreMyWork}>
                        Explore My Work
                      </div>
                    </div>
                    <div className={styles.iconPlay}>
                      <input className={styles.vector} type="checkbox" />
                    </div>
                  </div>
                  <div className={styles.buttonContactUs1}>
                    <div className={styles.contactMe}>Contact Me</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.followMinhajOnlineParent}>
              <div className={styles.followMinhajOnlineContainer}>
                <span>{`Follow `}</span>
                <span className={styles.span}>Minhaj</span>
                <span> online -</span>
              </div>
              <div className={styles.githubOne}>
                <button className={styles.github}>
                  <input className={styles.github1} type="checkbox" />
                  <div className={styles.github2}>GitHub</div>
                </button>
                <HackerrankOne frame4="/frame-41@2x.png" />
              </div>
            </div>
          </div>
          <div className={styles.contactFormParent}>
            <div className={styles.contactForm}>
              <a className={styles.getInTouch}>Get in Touch</a>
              <form className={styles.form}>
                <div className={styles.inputFields}>
                  <Input1 email="Full Name" />
                  <Input1 email="Email" emailTextDecoration="none" />
                  <Input1 email="Phone" emailTextDecoration="unset" />
                  <Input1 email="Subject" emailTextDecoration="unset" />
                  <Input1 email="Message" emailTextDecoration="unset" />
                </div>
                <div className={styles.exploreButton}>
                  <button className={styles.buttonContactUs2}>
                    <div className={styles.submit}>Submit</div>
                  </button>
                  <div className={styles.iconPlay1}>
                    <img
                      className={styles.sentIcon}
                      loading="lazy"
                      alt=""
                      src="/sent.svg"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.linksTwo}>
              <div className={styles.socialLinksTwo}>
                <button className={styles.github3}>
                  <img
                    className={styles.githubIcon}
                    alt=""
                    src="/github-11.svg"
                  />
                  <div className={styles.hackerrank}>GitHub</div>
                </button>
                <div className={styles.hackerrankTwo}>
                  <img
                    className={styles.hackerrankTwoChild}
                    alt=""
                    src="/frame-4-1@2x.png"
                  />
                  <button className={styles.hackerrankLinkTwo}>
                    <img
                      className={styles.hackerrankIcon}
                      alt=""
                      src="/hackerrank-11.svg"
                    />
                    <div className={styles.hackerrank}>HackerRank</div>
                  </button>
                </div>
              </div>
              <div className={styles.spesility}>
                <div className={styles.experinced}>
                  <img
                    className={styles.mail01Icon}
                    alt=""
                    src="/mail011.svg"
                  />
                  <div className={styles.supportingText}>+8801781583107</div>
                </div>
                <div className={styles.support}>
                  <img
                    className={styles.mail01Icon}
                    alt=""
                    src="/smartphone011.svg"
                  />
                  <div className={styles.supportingText1}>
                    minhaj@littleprogrammers.org
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.iconPlay2} onClick={onIconPlayContainerClick}>
            <img
              className={styles.sentIcon}
              loading="lazy"
              alt=""
              src="/cancel01.svg"
            />
          </div>
        </div>
        <div className={styles.contentAboutUsWrapper}>
          <div className={styles.contentAboutUs}>
            <div className={styles.aboutInnerOne}>
              <div className={styles.ctaContent}>
                <div className={styles.aboutInnerTwoChild} />
                <div className={styles.visionGoalParent}>
                  <VisionMissionPair
                    visionMissionPairMinWidth="unset"
                    minhajVision="Minhaj Vision"
                    vision1="/vision-1.svg"
                  />
                  <VisionMissionPair
                    visionMissionPairMinWidth="unset"
                    minhajVision="Minhaj Goal"
                    vision1="/targeticon-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;