import axios from "axios"
import { NextResponse } from 'next/server'


export const GET = async(req,res) => {

    
    // else{
    //     console.log('no searchParams:')
    //     // console.log('here is the req.url: ', req.url)
    //     // console.log('here is the req.url.search: ', req.url.search)
    // }
    
    // const {start, end} = req.query
    // if(start && end){
    //     currentApiUrl = currentApiUrl + `?${start}&${end}`
    // }
    

    // if(start && end){
    //     currentApiUrl = currentApiUrl + `?${start}&${end}`
    // }

    // const testing = req.query;
    // console.log('get the value of url2: ', testing)

    // const { searchParams } = new URL(req.url);
    // console.log('get the value of searchParams: ', searchParams)
    // const url = searchParams.get('url');
    // console.log('get the value of url: ', url)
    // console.log('get the value of requrest.url: ', req.url)

//////////////////////////////////////////// 
    try {
        let currentApiUrl = 'https://services.onetcenter.org/ws/mnm/interestprofiler/questions'
    
        const searchParams = req.nextUrl.searchParams
        console.log('get the nextURL: ', req.nextUrl)
        console.log('get the searchParams: ', searchParams)
        // console.log('get the searchParams in terms of length: ', [...searchParams].length)
        // const getQuery = searchParams.get('start')
        // const getQuery2 = searchParams.get('end')
        // console.log('get getQuery: ', getQuery)
        // console.log('get getQuery2: ', getQuery2)
        if([...searchParams].length){
        //  console.log('get the searchParams: ', searchParams))
            // let start = req.query.start;
            // let end = req.query.end
            let start = searchParams.get('start');
            let end = searchParams.get('end')
            // console.log('here is the start: ', start)
            // console.log('here is the end: ', end)
            currentApiUrl = currentApiUrl + `?start=${start}&end=${end}`
            // console.log('here is the NEW URL: ', currentApiUrl)
        }
        const options = {
            auth: {
                username:process.env.LOGIN_NAME,
                password: process.env.PASSWORD
            }
        }
        // const response = await axios.get('https://services.onetcenter.org/ws/mnm/interestprofiler/questions', options)
        // const response = await axios.get(url, options)
        const response = await axios.get(currentApiUrl, options)
        // console.log('here is the FINAL FINAL URL: ', currentApiUrl )
        // console.log('here is the response: ', response)
        // console.log('here is the response data: ', response.data)

        // https://services.onetcenter.org/ws/mnm/interestprofiler/questions?start=13&end=24
        return NextResponse.json(response.data)       
        // return response.data       
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch data' })
    }
}