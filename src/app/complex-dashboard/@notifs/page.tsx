import Card from "@/pages/card";
import Link  from "next/link";
export default function Notifs() {
  return (
    <div>
      <Card>
        <div>Notifications</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
      
    </div>
  );
}
