import Link from "next/link"
import HeroPage from "@/pages/homePage"

export const metadata = {
    "title" :"Blogger.io",
    "description" :"Create, update and delete blogs of your choice!"  
  }
export default function Home(){
    return(
        <div>
    <HeroPage/>

    </div>
    )
}
