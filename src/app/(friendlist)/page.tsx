import DirectMessageList from "@/components/friendsPage/dm-list";
import FriendList from "@/components/friendsPage/friend-list";
import topNav from "@/components/topnav/topnav";
import {Metadata} from "next";
export const metadata: Metadata = {
  title: 'Friend List',
};

export default function Page() {
  return (
    <main className="md:p-8 h-full flex md:gap-8 ">
        { topNav({displayedTitle: 'Friend List'})}
        { DirectMessageList() }
        { FriendList() }
    </main>
  );
}
