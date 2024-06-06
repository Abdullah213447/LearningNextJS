import Card from "@/pages/card";
import Link from "next/link";
export default function ArchivedNotifs() {
  return (
    <Card>
      <div>
        Archived <br />
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}
