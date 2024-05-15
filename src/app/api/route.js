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

//   export const GET = async(req,res) => {

//     const options = {
//         auth: {
//             username:"tkh1",
//             password: "2774ndq"
//         }
//     }
//     const response = await axios.get('https://services.onetcenter.org/ws/mnm/interestprofiler/questions', options)
//     return NextResponse.json(response.data)
   
//     return Response.json({ sprites })

    
//   }



// export const GET = async (req, res) => {
//     try {
//         const options = {
//             auth: {
//                 username:"tkh1",
//                 password: "2774ndq"
//             }
//         }
//         const response = await axios.get('https://services.onetcenter.org/ws/mnm/interestprofiler/questions', options)
//       return NextResponse.json({ data: response.data }, { status: 200 })
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         return NextResponse.json({ error: error.message }, { status: 500 })
//       } else {
//         throw error
//       }
//     }
//   }