import { redirect } from "next/navigation";

export default function Notfound() {
  redirect("/admin/dashboard");
  return <div>not-found</div>;
}
