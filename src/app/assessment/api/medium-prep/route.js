import axios from "axios"
import { NextResponse } from 'next/server'


export const GET = async(req,res) => {
    try {
        const options = {
            auth: {
                username:process.env.LOGIN_NAME,
                password: process.env.PASSWORD
            }
        }
        let url = 'https://services.onetcenter.org/ws/mnm/careers'
        console.log('lets get the medium url: ', url)
        const response = await axios.get(url, options)
        return NextResponse.json(response.data)   
    } catch (error) {
        return NextResponse.json({ error: 'Unable to fetch data' }, {status: 500})
    }
}