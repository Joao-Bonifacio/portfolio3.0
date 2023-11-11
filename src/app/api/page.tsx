import type { NextApiRequest } from "next"
import { Client } from "@notionhq/client"

interface DTO {
    name: string,
    email: string,
    message: string,
}
interface Data {
    request: NextApiRequest,
    searchParams: DTO
}

const notion = new Client({
    auth: process.env.NOTION_API_KEY
})

export default async function handler(req: Data){
    const { name, email, message } = req.searchParams
    await notion.pages.create({
        parent: {
            database_id: process.env.NOTION_DATABASE_ID || ''
        },
        properties:{
            Name: {
                type: "title",
                title: [{
                    type: "text",
                    text: { content:  name}
                }]
            },

            Email: {
                type: "email",
                email: email
            },

            Message: {
                type: "rich_text",
                rich_text: [{
                    type: "text",
                    text: {
                        content: message
                    }
                }]
            }
        }
    })
}