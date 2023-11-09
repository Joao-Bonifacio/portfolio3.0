export default function Contact() {
    return (
    <section className="mx-auto">
        <h2 className="bg-blue-700 text-xl font-bold text-gray-200 p-3 rounded-tl-md rounded-tr-md">Entre em contato</h2>
        <form method="post" className="bg-gray-200 p-5 rounded-b-md w-full">
            <input type="text" name="name" placeholder="Nome:" required className="p-3 rounded-md w-full min-w-7 mb-3"/>
            <input type="email" name="name" placeholder="Email (opcional):" required className="p-3 rounded-md w-full min-w-7 mb-3"/>
            <textarea placeholder="Mensagem:" name="message" required className="p-3 rounded-md w-full mb-5" style={{resize:'none'}}></textarea>
            <div className="text-center">
                <button type="submit" className="px-7 py-2 bg-blue-400 rounded-md hover:bg-blue-700"> Enviar </button>
            </div>
        </form>
    </section>
    )
}