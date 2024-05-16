import axios from "axios"
import { NextResponse } from 'next/server'


// regular function GET 
export async function GET(req,res) {

    const options = {
        auth: {
            username: 'this is where you place your username from the O*NET API',
            password: 'this is where you put your password from the O*NET API'
        }
    }
    const response = await axios.get('this is where you place your url for fetching data from the O*NET API', options)

    return NextResponse.json(response.data)

    
}