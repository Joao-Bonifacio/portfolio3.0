'use client'
import { useParams } from "next/navigation"
import Image from "next/image"
import Header from "@/components/Header"
import projects from "@data/projects.json"
import Error404 from "@/app/404"

export default function Projects() {
    const params = useParams()
    const project = projects.find(projects => projects.id.toString() == params.id)


    return project?(
    <>
    <Header />
    <h2 className="bg-blue-500 text-xl font-bold text-gray-200 p-3 text-center"> {project!.title} </h2>
    <div className="p-8 bg-white">
        <div className="mx-auto max-w-3xl bg-gray-100 rounded-md p-3 text-gray-800">
            <Image src={project.image} width="400" height="350" alt={project.title} className="mx-auto py-3"/>
            <div className="p-5">
                <h4 className="text-center font-bold text-xl my-2 bg-gray-500 rounded-sm text-gray-200">Descrição</h4>
                <p className="indent-5 pb-3">{project.short_desc}</p>
                {project.long_desc.map(e => (
                    <p key={e.slice(1)[0]} className="indent-5 pb-3">{e}</p>
                ))}

                <h4 className="text-center font-bold text-xl my-2 bg-gray-500 rounded-sm text-gray-200">Tecnologias utilizadas</h4>
                <ul className="flex flex-wrap">
                    {project.techs.map(e => (
                        <li key={e} className="p-3">{e}</li>
                    ))}
                </ul>

                <h4 className="font-bold text-xl mb-3">Links</h4>
                {project.links.map((e, i) => (
                    <a key={i} href={e} target="blank" className="text-blue-800 mx-5 bg-blue-200 p-2 rounded-md">
                        { e.includes("github.com") ? "Código": "Site" }
                    </a>
                ))}
            </div>
        </div>
    </div>
    </>
    )
    :
    <Error404 />
}