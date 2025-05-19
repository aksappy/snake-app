import styles from "./Headingstyle.module.css";

export type HeadingProps = {
  title: string;
  variant?: "default" | "secondary"; // optional variant prop
};

export default function Heading({ title, variant = "default" }: HeadingProps) {
  const classList =
    variant === "secondary"
      ? `${styles.button} ${styles.secondary}`
      : styles.button;

  return <button className={classList}>{title}</button>;
}
