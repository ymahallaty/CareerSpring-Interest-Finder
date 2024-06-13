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
        // let url = `https://services.onetcenter.org/ws/mnm/interestprofiler/results?answers=${'545555454545444454434545555543454545554444455555445545544555'}`
        let url = `https://services.onetcenter.org/ws/mnm/interestprofiler/results`
        const getQueryStr = req.nextUrl.searchParams
        // const getQueryStr = '545555454545444454434545555543454545554444455555445545544555'
        console.log('can I see the getQueryStr: ', getQueryStr)
        if(getQueryStr){
            let answers = getQueryStr.get('answers')
            // url = url + `?${getQueryStr}`
            url = url + `?answers=${answers}`
        }

        const response = await axios.get(url, options)
        return NextResponse.json(response.data)   
    } catch (error) {
        return NextResponse.json({ error: 'Unable to fetch data' }, {status: 500})
    }
}