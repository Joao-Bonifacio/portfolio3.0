import Image from "next/image"
import Link from "next/link"

export default function AboutMe() {
    return(
    <section className="mb-8 mx-auto">
        <div className="mr-2 bg-gray-200 shadow-md">
            <h2 className="bg-blue-700 text-xl font-bold text-gray-200 p-3 rounded-tl-md rounded-tr-md">Sobre mim</h2>
            <Image src="/images/foto.jpg" width="215" height="215" alt="autor" className="mx-auto my-2" style={{borderRadius: '100%'}} />
            <div className="w-full">
                <div className="p-5 bg-gray-800 rounded-md text-gray-300"> 
                    <h4>João Júnior</h4>
                    <p>Cursando <span className="text-blue-400">Ciências da computação</span> e <span className="text-blue-400">Economia</span></p>
                    <p className="text-blue-400">Desenvolvedor Full-Stack <span className="text-white">e</span> Analista de segurança</p>
                </div> 
                <p className="p-5 mt-[-6px] text-gray-700">
                    <br />
                    <span className="text-blue-700">Front-End:</span> React, Next.js, JavaScript, TypeScript, Tailwind, html+css, etc...
                    <br />
                    <span className="text-blue-700">Back-End:</span> Nest.js, JavaScript, Typescript, MongoDB, MySQL, etc...
                    <br />
                    <span className="text-blue-700">CLI:</span> Python e ShellScript.
                </p>
            </div>
            <div className="text-center">
                <Link href="/sobre" className="text-white bg-blue-500 hover:bg-blue-700 rounded-md py-2 px-4">Mais detalhes</Link>
            </div>
        </div>
    </section>
    )
}