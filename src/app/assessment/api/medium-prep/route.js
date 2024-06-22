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
        let url = 'https://services.onetcenter.org/ws/mnm/interestprofiler/careers?answers={}'
        const getQueryStr = req.nextUrl.searchParams
        // console.log('lets get the medium url: ', url)
        // console.log('lets get the query string: ', getQueryStr)

        //this is for testing purposes
        // let answers = '544543444454543454454544545454454454545454454545545445554455'
        // if(answers){
        //     url = url + `?answers=${answers}`
        // }

        if(getQueryStr){
            const answers = getQueryStr.get('answers')
            // console.log('HERE ARE THE ANSWERS: ', answers)
            // url = url + `?answers=${answers}`
            url = `${url}?answers=${answers}`
            // console.log('HERE IS THE UPDATED URL: ', url)
        }
        // else{
        //     console.log('something is missing')
        // }

        const response = await axios.get(url, options)
        // console.log('HERE IS THE RESPONSE: ', response.data)
        return NextResponse.json(response.data)   
    } catch (error) {
        return NextResponse.json({ error: 'Unable to fetch data' }, {status: 500})
    }
}