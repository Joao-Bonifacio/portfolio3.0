import Link from "next/link";

export default function Header() {
    return (
    <header className="bg-blue-700 shadow flex items-center w-[100%]">
        <h1 className="text-2xl font-bold text-white w-[48%] ml-5">Portfolio do João</h1>
        <nav className="container px-4 py-6 w-[48%] mr-5 flex justify-end">
            <Link href="/">Home</Link>
            <Link href="/sobre" className="ml-4">Sobre</Link>
            <Link href="/contato" className="ml-4">Contato</Link>
        </nav>
    </header>
    ) 
}