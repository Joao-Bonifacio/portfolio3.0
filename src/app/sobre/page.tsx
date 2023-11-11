import Image from "next/image"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CV from "@/components/Download_CV";
import habilitys from "@data/habilitys.json"

export default function About() {
    return (
    <div className="bg-white h-screen">
        <Header />
        <div className="flex flex-wrap justify-center bg-blue-200">
            <div className="p-5 w-200px md:w-1/3 rounded-xl mx-auto">
                <div className="rounded-full bg-blue-700 w-[200px] h-[200px] p-3">
                    <div className="rounded-full w-[170px] h-[170px] bg-gray-300 mx-auto my-auto p-2">
                        <Image src="/images/foto.jpg" width="160" height="160" alt="João" className="rounded-full" />
                    </div>
                </div>
            </div>
            <div className="text-gray-700 md:w-2/3 p-6">
                <div className="max-w-xl">
                    <h4 className="bg-blue-700 text-xl mb-2bg-blue-700 font-bold text-gray-200 p-3 rounded-tl-md rounded-tr-md">Experiencias profissionais</h4>
                    <p className="text-justify p-4 bg-gray-100">
                        <span className="text-blue-600">Assistente de professor de robótica</span>: Ensino de montagem e programação de robôs para alunos do fundamental.
                    </p>
                    <p className="text-justify p-4 bg-gray-100 rounded-b-md">
                        <span className="text-blue-600">Agente Censitário Supervisor(ACS - IBGE):</span> Auxilio e supervisão dos trabalhos realizados por recenseadores durante o censo demográfico do IBGE.
                    </p>
                </div>
            </div>
        </div>

        <div className="text-gray-700 p- flex flex-wrap justify-center bg-gray-200">
            <div className="max-w-2xl md:w-1/2 p-4">
                <h4 className="bg-blue-700 text-xl mb-2bg-blue-700 font-bold text-gray-200 p-3 rounded-tl-md rounded-tr-md">Motivações</h4>
                <p className="text-justify px-4 pt-4 bg-gray-100">
                    Sempre fui facinado em entender o funcionamento das coisas ao meu redor, escolhi a área da computação por explorar muito a parte de funcionamento de sistemas, além da liberdade criativa que essa área pode proporcionar enquanto posso evoluir meu conhecimento agregando valor para outras pessoas.
                </p>
                <p className="text-justify p-4 bg-gray-100">
                    Enquanto a área de economia, acredito que possa ser uma ótima base para entender melhor os &#34;bastidores&#34; do mundo em que vivemos.
                </p>
            </div>
            <div className="max-w-xl md:w-1/2 px-4 pt-4">
                <h4 className="bg-blue-700 text-xl mb-2bg-blue-700 font-bold text-gray-200 p-3 rounded-tl-md rounded-tr-md">Graduações</h4>
                <p className="text-justify p-4 bg-gray-100">
                    <span className="text-blue-600">Ciências da computação:</span> Estácio - Estimativa de formatura para 2025.
                </p>
                <p className="text-justify px-4 pb-4 bg-gray-100 rounded-b-md">
                    <span className="text-blue-600">Economia:</span> Estácio - Estimativa de formatura para 2027.
                </p>
                <CV />
            </div>
        </div>
        <div className="text-gray-700 pb-4">
            <div className="w-full px-4 pt-4">
                <h4 className="bg-blue-700 text-xl mb-2bg-blue-700 font-bold text-gray-200 p-3 rounded-tl-md rounded-tr-md">Conhecimentos</h4>
                <div className="text-justify p-6 bg-gray-100 rounded-b-md">
                    {habilitys.map(e => (
                        <div key={e.title} className="mb-3">
                            <p>
                                <span className="text-blue-700">{e.title}</span>: {e.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </div>
    ) 
}