import axios from "axios"
import { NextResponse } from 'next/server'


export const GET = async(req,res) => {
    const options = {
        auth: {
            username:"tkh1",
            password: "2774ndq"
        }
    }
    const response = await axios.get("https://services.onetcenter.org/ws/mnm/interestprofiler/questions", options)
    return NextResponse.json(response.data)
}