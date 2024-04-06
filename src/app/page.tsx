import Image from "next/image";
import { Menu } from "@/components/Menu";
import { zooMenu } from "@/config/menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu model={zooMenu} />
    </main>
  );
}
