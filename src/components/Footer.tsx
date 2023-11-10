import { FaGithub, FaLinkedin, FaInstagram, FaUserAlt } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
    return (
    <footer className="bg-gray-200 py-4 flex justfy-between">
        <div className="container mx-auto text-gray-600 ml-5">
          <FaUserAlt className="inline mr-2"/>
          &copy; 2023 João Júnior.
        </div>
        <div className="flex text-gray-600">
            <Link href="https://github.com/Joao-Bonifacio" target="blank"> 
                <FaGithub className="mr-3 text-xl hover:text-gray-800" />
            </Link>
            <Link href="https://www.linkedin.com/in/jo%C3%A3o-j%C3%BAnior-7499b6218/" target="blank">
                <FaLinkedin className="mr-3 text-xl hover:text-gray-800" />
            </Link>
            <Link href="https://www.instagram.com/jao_jj_/" target="blank">
                <FaInstagram className="mr-5 text-xl hover:text-gray-800" />
            </Link>
        </div>
    </footer>
    ) 
}