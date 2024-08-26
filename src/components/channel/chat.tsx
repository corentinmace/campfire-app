'use client';
import Image from 'next/image'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { useDebouncedCallback } from 'use-debounce';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlaneTop } from '@fortawesome/pro-light-svg-icons'

export default function Chat() {

    function sendMessage(e: any) {
        e.preventDefault()
        console.log(e)
        console.log("Message sent")
    }

    const userTyping = (term: String) => {
        console.log("user typing", term)
    }


    return (
        <div className={"w-full h-full relative"}>
            <div className={"w-full odd:bg-neutral-200 flex p-3 gap-2"}>
                <Image src={"/campfire/global/defaultPfp.jpg"} alt={'blabla'} width={50} height={50} className={"rounded-full"} />
                <div>
                    <p></p>
                </div>
            </div>
            <form onSubmit={sendMessage} className={"bottom-0 absolute w-full p-2 flex items-center gap-2"}>
                <input onChange={(e) => {
                    userTyping(e.target.value)
                }} className={"w-full p-2 rounded-full text-black"} placeholder={"Type your message here..."}/>
                <FontAwesomeIcon onClick={sendMessage} icon={faPaperPlaneTop}
                                 className={"p-3 bg-blue-700 rounded-full scale-100 hover:scale-105 transition-all duration-200 ease-in-out"}/>
            </form>

        </div>
    );
}
