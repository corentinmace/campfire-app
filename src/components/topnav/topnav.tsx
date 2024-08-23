
export default function topNav({displayedTitle}: {
    displayedTitle?: string;
}) {
    return (
        <div id="top-nav" className="w-screen left-[50px] md:left-[85px] top-0 fixed bg-neutral-200 dark:bg-neutral-700 h-12 md:h-[60px] flex items-center p-4">
            <p className={"text-xl"}>{ displayedTitle }</p>
        </div>
    );
}