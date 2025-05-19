import TextHeading from "@/components/childheading";

export default function HomePage() {
  return (
    <div>
      <TextHeading title="Main Title" level={1} />
      <TextHeading title="Section Title" level={2} />
      <TextHeading title="Subsection" level={3} />
    </div>
  );
}
