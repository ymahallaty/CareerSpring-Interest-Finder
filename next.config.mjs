/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source:"/assessment/api/:path",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "http://localhost:3000"}, 
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                ]
            }
        ]
    }
};

export default nextConfig;
src\app\assessment\api