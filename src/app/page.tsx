import Image from "next/image";
import DirectMessageList from "@/components/friendsPage/dm-list";

export default function Home() {
  return (
    <main className="p-8 h-full">
      { DirectMessageList() }
    </main>
  );
}
