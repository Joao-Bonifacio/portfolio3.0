import Link from "next/link"

export default function CV() {
    return(
        <div className="bg-gray-200 p-4 mr-2 w-full my-5 text-blue-800 text-center rounded-md">
            <Link href="/download/Curriculo.pdf" download target="blank">
                Download do currículo
            </Link>
        </div>
    )
}