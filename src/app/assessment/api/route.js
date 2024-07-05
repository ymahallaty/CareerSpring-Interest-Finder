import axios from "axios"
import { NextResponse } from 'next/server'


export const GET = async(req,res) => { 
    try {
        let currentApiUrl = 'https://services.onetcenter.org/ws/mnm/interestprofiler/questions'
    
        const searchParams = req.nextUrl.searchParams
        if([...searchParams].length){
            let start = searchParams.get('start');
            let end = searchParams.get('end')
            currentApiUrl = currentApiUrl + `?start=${start}&end=${end}`
        }
        const options = {
            auth: {
                username:process.env.LOGIN_NAME,
                password: process.env.PASSWORD
            }
        }
        const response = await axios.get(currentApiUrl, options)
        return NextResponse.json(response.data)           
    } catch (error) {
        // res.status(500).json({ error: 'Unable to fetch data' })
        return NextResponse.json({ error: `Unable to fetch data: ${error}` }, {status: 500})
    }
}