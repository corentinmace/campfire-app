import Image from "next/image";
import Link from "next/link";
import DirectMessage from "@/components/friendsPage/dm";
import sidenavLink from "@/components/sidenav/sidenav-link";

export default function DirectMessageList() {
    const dms = [
        {"username": "Echo", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 0, "status": "disconnected"},
        {"username": "Kai", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 1, "status": "away"},
        {"username": "Kai", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 2, "status": "disconnected"},
        {"username": "Storm", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 3, "status": "dnd"},
        {"username": "Lyra", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 4, "status": "connected"},
        {"username": "Orion", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 5, "status": "connected"},
        {"username": "Indigo", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 6, "status": "disconnected"},
        {"username": "Kuha", "link": "/", "image": "https://cdn.discordapp.com/avatars/184425060130357268/349ecf853dd57b25736b83a81a360152.webp", "key": 7, "status": "dnd"},
        {"username": "Ember", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 8, "status": "disconnected"},
        {"username": "Raven", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 9, "status": "connected"},
        {"username": "Nova", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 10, "status": "dnd"},
        {"username": "Shadow", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 11, "status": "connected"},
        {"username": "Indigo", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 12, "status": "connected"},
        {"username": "River", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 13, "status": "disconnected"},
        {"username": "River", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 14, "status": "away"},
        {"username": "Lyra", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 15, "status": "connected"},
        {"username": "Raven", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 16, "status": "disconnected"},
        {"username": "Echo", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 17, "status": "disconnected"},
        {"username": "Frost", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 18, "status": "dnd"},
        {"username": "Blaze", "link": "/", "image": "/campfire/global/defaultPfp.jpg", "key": 19, "status": "dnd"},
    ]

    return (
        <div className={"h-full w-56 bg-neutral-200 dark:bg-neutral-700 p-4 rounded-2xl flex flex-col gap-4 overflow-scroll"}>
            { dms.map((dm) => (
                DirectMessage(dm)
            ))}
        </div>
    );
}