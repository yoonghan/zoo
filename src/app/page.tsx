import { Menu } from "@/components/Menu";
import { zooMenu } from "@/config/menu";

export default function Home() {
  return (
    <>
      <header>
        <Menu model={zooMenu} />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
