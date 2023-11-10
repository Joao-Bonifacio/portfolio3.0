import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Header() {
    return (
    <header className="bg-blue-700 shadow flex items-center w-[100%]">
        <h1 className="text-2xl font-bold text-white w-[48%] ml-5">Portfolio do João</h1>
        <nav className="container px-4 py-6 w-[48%] mr-5 flex justify-end">
            <Link href="https://github.com/Joao-Bonifacio" target="blank"> 
                <FaGithub className="mr-3 text-xl hover:text-gray-800" />
            </Link>
            <Link href="https://www.linkedin.com/in/jo%C3%A3o-j%C3%BAnior-7499b6218/" target="blank">
                <FaLinkedin className="mr-3 text-xl hover:text-gray-800" />
            </Link>
            <Link href="https://www.instagram.com/jao_jj_/" target="blank">
                <FaInstagram className="mr-5 text-xl hover:text-gray-800" />
            </Link>
        </nav>
    </header>
    ) 
}