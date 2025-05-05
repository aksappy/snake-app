import Button from "@/components/Button";
import Heading from "@/components/Heading";
export default function ChildPage() {
  return (
    <div style={{ paddingTop: "160px" }}>
      Child Page <Button title="Child Button"></Button>
      <Heading title="Welcome to My Site" />
    </div>
  );
}
