import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "About Us"
    },
    description: "This is a simple about me page"

    
}

export default function About(){
    return(
    <h1>About Us</h1>
    )
}