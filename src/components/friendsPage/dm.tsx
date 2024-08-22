import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/pro-light-svg-icons'


export default function DirectMessage({username, link, image, status, alt, key}: {
    username: string;
    status: 'connected' | 'dnd' | 'away' | 'disconnected'
    link:  string;
    image: string;
    alt?: string;
    key?: number;

}) {
    if(!alt) alt = username;
    if(!key) key = 0;
    if(!status) status = 'disconnected'
    return (
        <Link href={link} key={key} className={clsx(
            "group flex gap-2 items-center pr-1 rounded-full w-full transition-all duration-300 ease-in-out bg-gradient-to-r relative ",
            {
                'hover:from-teal-400/50 to-teal-600/50': status === 'connected',
                'hover:from-red-600/50 to-red-800/50': status === 'dnd',
                'hover:from-amber-400/50 to-amber-600/50': status === 'away',
                'hover:from-neutral-50/50 to-neutral-200/50': status === 'disconnected'
            }
            )}>
            <Image src={image} alt={alt} width={40} height={40} className={clsx(
            'rounded-full outline outline-2 group-hover:outline-0 transition-all duration-100 ease-in-out',
            {
                'outline-teal-400': status === 'connected',
                'outline-red-600': status === 'dnd',
                'outline-amber-400': status === 'away',
                'outline-neutral-50': status === 'disconnected'
            })}
            />
            <p>{username}</p>
            <span className={"absolute right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"}>
                <FontAwesomeIcon icon={faXmark} className="fa-fw opacity-20 hover:opacity-100 transition-all duration-300 ease-in-out" />
            </span>
        </Link>
    );
}