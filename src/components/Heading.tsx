export type HeadingProps = {
  title: string;
};

export default function Heading(props: HeadingProps) {
  return <h1 style={{}}>{props.title}</h1>; // use a valid HTML tag
}
