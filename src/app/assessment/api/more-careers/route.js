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
        let url = `https://services.onetcenter.org/ws/mnm/interestprofiler/careers`;

        const getQueryStr = req.nextUrl.searchParams;
        if(getQueryStr){
            const area = getQueryStr.get('area');
            const job_zone = getQueryStr.get('job_zone');
            url = url + `?area=${area}` + `&job_zone=${job_zone}` + '&start=1&end=999999999';
        }

        const response = await axios.get(url, options)
        return NextResponse.json(response.data)   
    } catch (error) {
        return NextResponse.json({ error: 'Unable to fetch data' }, {status: 500})
    }
}