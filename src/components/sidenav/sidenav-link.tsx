import Image from "next/image";
import Link from "next/link";

export default function sidenavLink({serverName, link, image, alt, key}: {
    serverName?: string;
    link:  string;
    image: string;
    alt?: string;
    key?: number;

}) {
    if(!alt) alt = serverName;
    if(!key) key = 0;
    return (
        <Link key={key} href={link} className={"group bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-1 md:p-3 transition-all ease-in-out duration-500 hover:rounded-[50%] relative z-20"}>
            <Image src={image} width={60} height={60} alt={alt || ""} />
            <p className={"group-hover:block hidden shadow-lg dark:shadow-neutral-600/40 absolute left-[125%] text-center text-sm w-max max-w-36 top-1/2 -translate-y-1/2 bg-neutral-200 dark:bg-neutral-900 px-2 py-1 rounded-lg z-20"}>{serverName}</p>
        </Link>
    );
}