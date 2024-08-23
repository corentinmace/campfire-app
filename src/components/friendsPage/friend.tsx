'use client'
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/pro-light-svg-icons'
import {faComment, faUserMinus} from "@fortawesome/pro-solid-svg-icons";

const test = () => {
    console.log("clicked")
}

export default function FriendItem({username, link, image, status, alt, key}: {
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
        <div className={"w-full bg-neutral-200 dark:bg-neutral-700 md:rounded-2xl md:p-4 p-2 flex justify-between items-center md:border-b-2 border-neutral-100 dark:border-neutral-900"}>
            <div className={"flex gap-3 items-center"}>
                <Image src={"/campfire/global/defaultPfp.jpg"} alt={"bla"} width={50} height={50} className={clsx(
                'rounded-full outline outline-2 group-hover:outline-0 transition-all duration-100 ease-in-out',
                {
                    'outline-teal-400': status === 'connected',
                    'outline-red-600': status === 'dnd',
                    'outline-amber-400': status === 'away',
                    'outline-neutral-50': status === 'disconnected'
                })}/>
                <div>
                    <p className={"text-xl"}>{username}</p>
                    <p className={"text-xs"}>Campfire-ID: </p>
                </div>
            </div>
            <div className={"flex gap-1 md:gap-3 flex-col md:flex-row"}>
                <Link href={link}>
                    <FontAwesomeIcon icon={ faComment } className={"text-xl bg-blue-500  p-3 w-5 h-5 rounded-full scale-100 hover:scale-105 transition-all duration-200 ease-in-out"}/>
                </Link>
                <div onClick={test} >
                    <FontAwesomeIcon icon={ faUserMinus } className={"text-xl bg-red-500 p-3 w-5 h-5 rounded-full scale-100 hover:scale-105 transition-all duration-200 ease-in-out"} />
                </div>
            </div>
        </div>
    );
}