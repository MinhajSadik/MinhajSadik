import { FunctionComponent } from "react";
import FrameComponent from "/";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import TestimonialSection from "../components/TestimonialSection";
import VideoSection from "../components/VideoSection";
import BlogsContent from "../components/BlogsContent";
import BlogPosts from "../components/BlogPosts";
import Main from "../components/Main";
import Info from "../components/Info";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <section className={styles.colorShapeParent}>
        <img className={styles.colorShapeIcon} alt="" src="/color-shape.svg" />
        <img
          className={styles.b10f139403dfb6b5d46f5HeroGraIcon}
          alt=""
          src="/650b10f139403dfb6b5d46f5-hero-gradient-2@2x.png"
        />
        <img
          className={styles.lineBackgroundShapes}
          alt=""
          src="/line-background-shapes.svg"
        />
        <img
          className={styles.b10f139403dfb6b5d46f5HeroGraIcon1}
          alt=""
          src="/650b10f139403dfb6b5d46f5-hero-gradient-1.svg"
        />
      </section>
      <FrameComponent />
      <FrameComponent3 />
      <section className={styles.itemsWrapper}>
        <div className={styles.items}>
          <div className={styles.architectureTitle}>
            <div className={styles.architectureLabel}>
              <h3 className={styles.architectures}>Architectures</h3>
            </div>
          </div>
          <h1 className={styles.microservice}>Microservice</h1>
          <div className={styles.architectureTypes}>
            <h1 className={styles.h1}>*</h1>
          </div>
          <h1 className={styles.microservice}>Monolithic</h1>
          <div className={styles.architectureTypes}>
            <h1 className={styles.h1}>*</h1>
          </div>
          <h1 className={styles.clientServer}>Client-Server</h1>
          <div className={styles.architectureTypes}>
            <h1 className={styles.h1}>*</h1>
          </div>
          <h1 className={styles.clientServer}>System Design</h1>
          <div className={styles.technologiesTitleParent}>
            <div className={styles.technologiesTitle}>
              <h3 className={styles.architectures}>Technologies</h3>
            </div>
            <h1 className={styles.prototype}>Prototype</h1>
            <h1 className={styles.prototype1}>Prototype</h1>
          </div>
        </div>
      </section>
      <section className={styles.featuredWork}>
        <div className={styles.featuredAndWorkProcessSect}>
          <FrameComponent1 />
          <FrameComponent2 />
        </div>
        <TestimonialSection />
      </section>
      <VideoSection />
      <section className={styles.blogsSection}>
        <BlogsContent />
        <BlogPosts />
      </section>
      <section className={styles.footer}>
        <footer className={styles.content}>
          <Main />
          <Info />
        </footer>
      </section>
    </div>
  );
};

export default Homepage;