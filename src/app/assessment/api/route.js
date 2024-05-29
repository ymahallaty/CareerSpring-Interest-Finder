import axios from "axios"
import { NextResponse } from 'next/server'


export const GET = async(req,res) => {

    // const {url} = req.query;
    // console.log('get the url: ', url)

    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');

    try {
        const options = {
            auth: {
                username:process.env.LOGIN_NAME,
                password: process.env.PASSWORD
            }
        }
        // const response = await axios.get('https://services.onetcenter.org/ws/mnm/interestprofiler/questions', options)
        const response = await axios.get(url, options)
        return NextResponse.json(response.data)        
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch data' })
    }
}