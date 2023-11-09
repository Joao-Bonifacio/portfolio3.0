
import Link from "next/link"
import Image from "next/image"
import projects from "@data/projects.json"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

export default function Projects() {
    return (
    <section className="mb-4 w-full md:w-2/3 mx-auto">
        <div className="ml-2 bg-gray-200 shadow-md">
            <h2 className="bg-blue-700 text-xl font-bold text-gray-200 p-3 rounded-tl-md rounded-tr-md">Projetos</h2>
            <ul className="mt-2 text-gray-600 p-5">
                {projects.map(e => (
                    <li key={e.id} className="relative">
                        <Link href={"/projetos/"+e.id} className="flex flex-wrap mx-5 bg-blue-300 hover:bg-blue-400 rounded-md mb-4">
                            <Image src={e.image} width="160" height="110" alt={e.title} className="rounded-l-md ml-0 p-2"/>
                            <div className="p-4 w-2/3">
                                <h4 className="font-bold">{e.title}</h4>
                                <p>{e.short_desc}</p>
                            </div>
                            <div className="absolute right-10 top-8">
                                <BsFillArrowRightCircleFill className="text-3xl text-blue-500 hover:text-blue-800" />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </section>
    ) 
}