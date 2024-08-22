import Image from "next/image";
import Link from "next/link";

export default function sidenavLink({serverName, link, image, alt}: {
    serverName?: string;
    link:  string;
    image: string;
    alt?: string;

}) {
    if(!alt) alt = serverName;
    return (

        <Link href={link} className={"group bg-neutral-900 rounded-3xl p-1 md:p-3 transition-all ease-in-out duration-500 hover:rounded-[50%] relative z-20"}>
            <Image src={image} width={60} height={60} alt={alt || ""} />
            <p className={"group-hover:block hidden absolute -right-[150%] top-1/2 -translate-y-1/2 bg-neutral-900 px-2 py-1 rounded-lg z-20"}>{serverName}</p>
        </Link>
    );
}