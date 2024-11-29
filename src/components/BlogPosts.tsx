import { FunctionComponent } from "react";
import Posts from "./Posts";
import styles from "./BlogPosts.module.css";

export type BlogPostsType = {
  className?: string;
};

const BlogPosts: FunctionComponent<BlogPostsType> = ({ className = "" }) => {
  return (
    <div className={[styles.blogPosts, className].join(" ")}>
      <Posts
        post="/post@2x.png"
        supportingText="Optimizing CI/CD Pipelines: Best Practices for Faster Delivery"
      />
      <img className={styles.navigationIcon} alt="" src="/navigation@2x.png" />
      <Posts
        post="/rectangle-151-1@2x.png"
        supportingText="The Power of Infrastructure as Code with Terraform"
      />
    </div>
  );
};

export default BlogPosts;
