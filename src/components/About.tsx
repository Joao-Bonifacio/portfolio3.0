import Image from "next/image"

export default function AboutMe() {
    return(
    <section className="mb-8 w-1/3">
        <div className="mr-2 bg-gray-200 shadow-md">
            <h2 className="bg-blue-700 text-xl font-bold text-gray-200 p-3 rounded-tl-md rounded-tr-md">Sobre mim</h2>
            <Image src="/images/foto.jpg" width="215" height="215" alt="autor" className="mx-auto my-2" style={{borderRadius: '100%'}} />
            <div className="w-full">
                <div className="p-5 bg-gray-800 rounded-md text-gray-300"> 
                    <h4>João Júnior</h4>
                    <p>Cursando <span className="text-blue-400">Ciências da computação</span> e <span className="text-blue-400">Economia</span></p>
                    <p>Desenvolvedor Full-Stack e Analista de segurança</p>
                </div> 
                <p className="p-5 mt-[-6px] text-gray-600">
                    <br />
                    <span className="text-blue-700">Front-End:</span> React, Next, JavaScript, TypeScript, Tailwind, html+css, etc...
                    <br />
                    <span className="text-blue-700">Back-End:</span> Express, JavaScript, Typescript, MongoDB, MySQL, etc...
                    <br />
                    <span className="text-blue-700">CLI:</span> Python e ShellScript.
                </p>
            </div>
        </div>
    </section>
    )
}