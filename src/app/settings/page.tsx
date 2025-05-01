import Button from "@/components/Button";

import RightSidebar, { LeftSidebar } from "@/components/RightSidebar";

export default function SettingsPage() {
  var test = 1;
  return (
    <div style={{ paddingTop: "160px" }}>
      <span>Settings page</span>
      <Button title="Save Changes"></Button>
      {test}
      <RightSidebar />
      <LeftSidebar />
    </div>
  );
}
