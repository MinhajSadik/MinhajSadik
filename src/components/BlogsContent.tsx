import { FunctionComponent } from "react";
import styles from "./BlogsContent.module.css";

export type BlogsContentType = {
  className?: string;
};

const BlogsContent: FunctionComponent<BlogsContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.blogsContent, className].join(" ")}>
      <div className={styles.blogsHeader}>
        <h3 className={styles.blogs}>Blogs</h3>
        <h1
          className={styles.insightsIndustry}
        >{`Insights & Industry Trends`}</h1>
      </div>
      <div className={styles.blogsActions}>
        <button className={styles.buttonContactUs}>
          <a className={styles.allBlogs}>all Blogs</a>
        </button>
        <div className={styles.iconPlay}>
          <img
            className={styles.arrowUpLeft01Icon}
            loading="lazy"
            alt=""
            src="/arrowupleft01.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsContent;
