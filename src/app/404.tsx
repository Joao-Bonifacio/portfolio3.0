import Link from "next/link"

export default function Error404() {
    return (
    <div className="bg-red-400 p-8 rounded-md mx-auto my-auto w-xl text-gray-800 text-center">
        <h1>404 - Pagina não encontrada!</h1>
        <Link href="/" className="text-blue-500">
            Voltar para a página inicial
        </Link>
    </div>
    ) 
}