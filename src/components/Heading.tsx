import styles from "./Headingstyle.module.css";

export type HeadingProps = {
  title: string;
};

export default function Heading({ title }: HeadingProps) {
  return <button className={styles.button}>{title}</button>;
}
