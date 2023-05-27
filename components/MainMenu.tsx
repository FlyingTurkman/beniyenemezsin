import Link from "next/link";
import { IoHome } from "react-icons/io5";





export default function MainMenu() {
    return(
        <div className="flex w-full h-10 bg-blue-600 items-center px-10 text-white font-semibold space-x-2">
            <div className="flex h-full px-2 items-center justify-center hover:bg-blue-800 transition-all">
                <Link href={'/'}>
                    <IoHome className="text-2xl"/>
                </Link>
            </div>
            <div className="flex h-full px-2 items-center justify-center hover:bg-blue-800 transition-all">
                <Link href={'/play'} className="text-xl">1/2</Link>
            </div>
            {/* <div className="flex h-full px-2 items-center justify-center hover:bg-blue-800 transition-all">
                <Link href={'/'}>İstatistikler</Link>
            </div> */}
        </div>
    )
}