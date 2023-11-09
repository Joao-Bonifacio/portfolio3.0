'use client'
import axios from "axios"
import { useState } from "react"

interface Data{
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [data, setData] = useState<Data>({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setData(oldData => ({...oldData, [name]: value}))
    }

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()
        axios.post('/api/notionMessage.ts', data)
        .then(() => {
            setData({
                name: '',
                email: '',
                message: ''
            })
            alert("Obrigado, irei responder assim que puder 😁")
        })
        .catch(e => console.log('Erro ao enviar', e.message))
    }

    return (
    <section className="mx-auto mr-2">
        <h2 className="bg-blue-700 text-xl font-bold text-gray-200 p-3 rounded-tl-md rounded-tr-md">Entre em contato</h2>
        <form method="post" onSubmit={submitForm} className="bg-gray-200 p-5 rounded-b-md w-full text-gray-800">
            <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Nome:" required className="p-3 rounded-md w-full min-w-7 mb-3"/>
            <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email (opcional):" className="p-3 rounded-md w-full min-w-7 mb-3"/>
            <textarea name="message" value={data.message} onChange={handleChange} placeholder="Mensagem:" required className="p-3 rounded-md w-full mb-5" style={{resize:'none'}}></textarea>
            <div className="text-center text-gray-200">
                <button type="submit" className="px-7 py-2 bg-blue-500 rounded-md hover:bg-blue-700"> Enviar </button>
            </div>
        </form>
    </section>
    )
}