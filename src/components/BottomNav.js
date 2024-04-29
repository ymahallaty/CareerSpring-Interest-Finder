import Link from "next/link";

//routes are named in alphabetical order to make them easy to search for now. Will update
//when we know what each route will be for
export default function BottomNav() {
    return (
        <>
        <h1>Click the number underneath the circle to test out routes.</h1>
            <div className="overflow-x-auto">
        
                <ul className="steps">
                    <li className="step underline"><Link href="/a-first">start</Link></li>
                    <li className="step underline"><Link href="/b-second">2</Link></li>
                    <li className="step underline"><Link href="/c-third">3</Link></li>
                    <li className="step underline"><Link href="/d-fourth">4</Link></li>
                    <li className="step underline"><Link href="/e-fifth">5</Link></li>
                    <li className="step underline"><Link href="/f-sixth">6</Link></li>
                    <li className="step underline"><Link href="/g-seventh">7</Link></li>
                    <li className="step underline"><Link href="/h-eigth">8</Link></li>
                    <li className="step underline"><Link href="/i-ninth">9</Link></li>
                    <li className="step underline"><Link href="/j-tenth">10</Link></li>
                </ul>
            </div>
        </>
    )
}