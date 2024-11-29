import { FunctionComponent, useCallback } from "react";
import CTAContent from "../components/CTAContent";
import HackerrankOne from "../components/HackerrankOne";
import LeftContent from "../components/LeftContent";
import { useNavigate } from "react-router-dom";
import CheckmarkContainers from "../components/CheckmarkContainers";
import CourseModule from "../components/CourseModule";
import VisionMissionPair from "../components/VisionMissionPair";
import styles from "./CourseViewPage.module.css";

const CourseViewPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconPlayContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.courseViewPage}>
      <div className={styles.courseViewPageChild} />
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.titleParent}>
                <div className={styles.title}>
                  <CTAContent rectangle1="/rectangle-1@2x.png" />
                  <div className={styles.buttonDiv}>
                    <div className={styles.exploreButtonContainerParent}>
                      <div className={styles.exploreButtonContainer}>
                        <button className={styles.buttonContactUs}>
                          <div className={styles.exploreMyWork}>
                            Explore My Work
                          </div>
                        </button>
                        <div className={styles.iconPlay}>
                          <img
                            className={styles.playIcon}
                            loading="lazy"
                            alt=""
                            src="/vector-1.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.buttonContactUs1}>
                        <div className={styles.contactMe}>Contact Me</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.socialLinks}>
                  <h2 className={styles.followMinhajOnlineContainer}>
                    <span>{`Follow `}</span>
                    <span className={styles.minhaj}>Minhaj</span>
                    <span> online -</span>
                  </h2>
                  <div className={styles.socialIcons}>
                    <div className={styles.github}>
                      <img
                        className={styles.githubIcon}
                        alt=""
                        src="/github.svg"
                      />
                      <div className={styles.github1}>GitHub</div>
                    </div>
                    <HackerrankOne frame4="/frame-4@2x.png" />
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <LeftContent
                  leftContentFlex="unset"
                  leftContentPosition="absolute"
                  leftContentWidth="1448px"
                  leftContentMargin="0 !important"
                  leftContentTop="-44px"
                  leftContentLeft="-1368px"
                />
                <div
                  className={styles.iconPlay1}
                  onClick={onIconPlayContainerClick}
                >
                  <img
                    className={styles.cancel01Icon}
                    loading="lazy"
                    alt=""
                    src="/cancel01.svg"
                  />
                </div>
              </div>
              <div className={styles.pageContent}>
                <div className={styles.contentContainer}>
                  <img
                    className={styles.contentDividerIcon}
                    alt=""
                    src="/content-divider@2x.png"
                  />
                  <div className={styles.texts}>
                    <h2 className={styles.h3}>
                      The Complete 2024 Web Development Bootcamp
                    </h2>
                    <div className={styles.peragraph1}>
                      Become a Full-Stack Web Developer with just ONE course.
                      HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and
                      DApps
                    </div>
                    <div className={styles.calendarContent}>
                      <img
                        className={styles.cancel01Icon}
                        loading="lazy"
                        alt=""
                        src="/calendar03.svg"
                      />
                      <div className={styles.peragraph2}>
                        Last updated 8/2024
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkmarkContent}>
                    <div className={styles.h31}>What you'll learn</div>
                    <div className={styles.checkmarkItems}>
                      <CheckmarkContainers />
                      <CheckmarkContainers tick02BackgroundColor="unset" />
                      <CheckmarkContainers tick02BackgroundColor="#fff" />
                      <CheckmarkContainers tick02BackgroundColor="#fff" />
                    </div>
                  </div>
                  <div className={styles.videoContent}>
                    <div className={styles.h31}>This course includes:</div>
                    <div className={styles.videoItems}>
                      <div className={styles.videoContainers}>
                        <input className={styles.video02} type="checkbox" />
                        <div className={styles.peragraph21}>
                          61 hours on-demand video
                        </div>
                      </div>
                      <div className={styles.videoContainers}>
                        <input className={styles.video02} type="checkbox" />
                        <div className={styles.peragraph21}>
                          194 downloadable resources
                        </div>
                      </div>
                      <div className={styles.videoContainers2}>
                        <input className={styles.video02} type="checkbox" />
                        <div className={styles.peragraph21}>
                          Certificate of completion
                        </div>
                      </div>
                      <div className={styles.videoContainers}>
                        <img
                          className={styles.cancel01Icon}
                          alt=""
                          src="/fileempty01.svg"
                        />
                        <div className={styles.peragraph21}>65 articles</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.courseModuleContainer}>
                  <div className={styles.frameContainer}>
                    <div className={styles.h3Parent}>
                      <a className={styles.h33}>course module</a>
                      <img
                        className={styles.cancel01Icon}
                        alt=""
                        src="/download04.svg"
                      />
                    </div>
                    <div className={styles.courseModules}>
                      <CourseModule
                        aroowUp="/aroow-up.svg"
                        h3="introduction"
                        showModuleDurationHeader
                        h31="Free"
                        h32="4lac"
                      />
                      <div className={styles.moduleVideoPlayers}>
                        <div className={styles.videoPlayerContainers}>
                          <div className={styles.videoPlayerButtons}>
                            <img
                              className={styles.cancel01Icon}
                              alt=""
                              src="/playcircle.svg"
                            />
                            <div className={styles.h34}>Welcome video</div>
                          </div>
                          <div className={styles.videoPlayerProgress}>
                            <div className={styles.h35}>09:40</div>
                          </div>
                        </div>
                        <div className={styles.videoPlayerContainers}>
                          <div className={styles.videoPlayerButtons}>
                            <img
                              className={styles.cancel01Icon}
                              alt=""
                              src="/playcircle.svg"
                            />
                            <a className={styles.h36}>Video 1</a>
                          </div>
                          <div className={styles.videoPlayerProgress}>
                            <div className={styles.h37}>02:10</div>
                          </div>
                        </div>
                        <div className={styles.videoPlayerContainers}>
                          <div className={styles.videoPlayerButtons}>
                            <img
                              className={styles.cancel01Icon}
                              loading="lazy"
                              alt=""
                              src="/playcircle.svg"
                            />
                            <div className={styles.h38}>Video 2</div>
                          </div>
                          <div className={styles.videoPlayerProgress}>
                            <div className={styles.h39}>20:20</div>
                          </div>
                        </div>
                        <div className={styles.videoPlayerContainers}>
                          <div className={styles.videoPlayerButtons}>
                            <input className={styles.playCircle} type="radio" />
                            <div className={styles.h310}>Video 3</div>
                          </div>
                          <div className={styles.videoPlayerProgress}>
                            <div className={styles.h311}>27:50</div>
                          </div>
                        </div>
                      </div>
                      <CourseModule
                        courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
                        aroowUp="/arrowdown01.svg"
                        h3="Course content"
                        h3TextDecoration="unset"
                        showModuleDurationHeader={false}
                        h31="9lac"
                        h32="9lac"
                      />
                      <CourseModule
                        courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
                        aroowUp="/arrowdown01.svg"
                        h3="Course content"
                        h3TextDecoration="unset"
                        showModuleDurationHeader={false}
                        h31="9lac"
                        h32="9lac"
                      />
                      <CourseModule
                        courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
                        aroowUp="/arrowdown01.svg"
                        h3="Course content"
                        h3TextDecoration="unset"
                        showModuleDurationHeader={false}
                        h31="9lac"
                        h32="9lac"
                      />
                      <CourseModule
                        courseModuleBorderBottom="unset"
                        aroowUp="/arrowdown01.svg"
                        h3="Course content"
                        h3TextDecoration="unset"
                        showModuleDurationHeader={false}
                        h31="9lac"
                        h32="9lac"
                      />
                    </div>
                  </div>
                  <button className={styles.heading}>
                    <div className={styles.h312}>Buy now - $1</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.contentAboutUsWrapper}>
              <div className={styles.contentAboutUs}>
                <div className={styles.frameParent}>
                  <div className={styles.innerAboutContainer}>
                    <div className={styles.placeholder} />
                    <div className={styles.visionGoal}>
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
      </div>
      <h1 className={styles.minhaj1}>Minhaj</h1>
      <div className={styles.bg} />
      <div className={styles.shapesContainer}>
        <img
          className={styles.shapeCollectionIcon}
          alt=""
          src="/rectangle-158@2x.png"
        />
        <img
          className={styles.shapeCollectionIcon1}
          alt=""
          src="/rectangle-159@2x.png"
        />
        <img
          className={styles.shapeCollectionIcon2}
          alt=""
          src="/rectangle-160@2x.png"
        />
        <img
          className={styles.shapeCollectionIcon3}
          alt=""
          src="/rectangle-161@2x.png"
        />
        <img
          className={styles.shapeCollectionIcon4}
          alt=""
          src="/rectangle-162@2x.png"
        />
        <main className={styles.dividerParent}>
          <div className={styles.divider} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/background1.svg"
          />
        </main>
      </div>
      <div className={styles.itemsContainer}>
        <footer className={styles.items}>
          <div className={styles.itemCollection}>
            <div className={styles.itemPair}>
              <h2 className={styles.architectures}>Architectures</h2>
            </div>
          </div>
          <h1 className={styles.microservice}>Microservice</h1>
          <div className={styles.itemCollection1}>
            <h1 className={styles.h1}>*</h1>
          </div>
          <h1 className={styles.microservice}>Monolithic</h1>
          <div className={styles.itemCollection1}>
            <h1 className={styles.h1}>*</h1>
          </div>
          <h1 className={styles.clientServer}>Client-Server</h1>
          <div className={styles.itemCollection1}>
            <h1 className={styles.h1}>*</h1>
          </div>
          <h1 className={styles.clientServer}>System Design</h1>
          <div className={styles.itemCollection}>
            <div className={styles.itemPair}>
              <h2 className={styles.architectures}>Technologies</h2>
            </div>
          </div>
          <h1 className={styles.microservice}>Prototype</h1>
          <h1 className={styles.prototype1}>Prototype</h1>
        </footer>
      </div>
    </div>
  );
};

export default CourseViewPage;
