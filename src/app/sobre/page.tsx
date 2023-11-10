import Image from "next/image"
import Header from "@/components/Header";

export default function About() {
    return (
    <div className="bg-white h-screen">
        <Header />
        <div className="flex flex-wrap justify-start">
            <div className="p-5 w-200px md:w-1/3">
                <div className="rounded-full bg-blue-700 w-[200px] h-[200px] p-3">
                    <div className="rounded-full w-[170px] h-[170px] bg-gray-300 mx-auto my-auto p-1">
                        <Image src="/images/foto.jpg" width="160" height="160" alt="João" className="rounded-full" />
                    </div>
                </div>
            </div>
            <div className="text-gray-700 md:w-2/3 p-6">
                <div className="max-w-xl">
                    <h4 className="bg-blue-700 text-xl mb-2bg-blue-700 font-bold text-gray-200 p-3 rounded-tl-md rounded-tr-md">Experiencias profissionais</h4>
                    <p className="text-justify p-4 bg-gray-100 rounded-md">
                        <span className="text-blue-600">Assistente de peprofessor de robótica</span>: Ensino de montagem e programação de robôs para alunos do fundamental.
                    </p>
                    <p className="text-justify p-4 bg-gray-100 rounded-md">
                        <span className="text-blue-600">Agente Censitário Supervisor(ACS - IBGE)</span>: Auxilio e supervisão dos trabalhos realizados por recenseadores durante o censo demográfico do IBGE.
                    </p>
                </div>
            </div>
        </div>
        <div className="text-gray-700 p-5">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste totam at illo soluta laboriosam magnam est repudiandae id tempore, dolorem sequi distinctio harum eius voluptatibus. Hic iusto explicabo consequuntur ullam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, a at sapiente facere eum nam vitae vel porro ipsa recusandae molestiae, maiores mollitia voluptate odit doloribus reiciendis eius earum quo.</p>
        </div>
    </div>
    ) 
}