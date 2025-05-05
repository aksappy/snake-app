import Headingstyle from "Headingstyle";

export type HeadingProps = {
  title: string;
};

export default function Heading({ title }: HeadingProps) {
  return <button>{title}</button>;
}
