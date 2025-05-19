import styles from "./childheading.module.css";

export type HeadingProps = {
  title: string;
};

export default function TextHeading({ title, level = 1 }) {
  const Tag = `h${level}`;

  return <Tag className={styles.heading}>{title}</Tag>;
}
