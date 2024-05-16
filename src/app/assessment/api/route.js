import axios from "axios"
import { NextResponse } from 'next/server'


export const GET = async(req,res) => {

    const options = {
        auth: {
            username:"input the username from the O*NET API",
            password: "input the password from the O*NET API"
        }
    }
    const response = await axios.get('input the url to fetch data from the O*NET API', options)

    return NextResponse.json(response.data)

 
}