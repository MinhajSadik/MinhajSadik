import { FunctionComponent } from "react";
import styles from "./Posts.module.css";

export type PostsType = {
  className?: string;
  post?: string;
  supportingText?: string;
};

const Posts: FunctionComponent<PostsType> = ({
  className = "",
  post,
  supportingText,
}) => {
  return (
    <div className={[styles.posts, className].join(" ")}>
      <img className={styles.postIcon} alt="" src={post} />
      <div className={styles.content}>
        <div className={styles.supportingText}>{supportingText}</div>
        <i className={styles.supportingText1}>September 5, 2024</i>
      </div>
      <div className={styles.supportingText2}>
        Discover how to set up and optimize CI/CD pipelines using Jenkins,
        GitLab CI, and more to boost deployment speed.
      </div>
    </div>
  );
};

export default Posts;
