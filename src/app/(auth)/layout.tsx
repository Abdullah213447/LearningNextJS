"use client"

import Link from "next/link";   
import { usePathname } from "next/navigation";
import './styles.css';
const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
];

export default function AuthLayout({
    children,
}:{
    children: React.ReactNode;
})
{
    const pathname = usePathname();

    return(
        <div>
            {navLinks.map(navLink =>{
                const isActive = pathname?.startsWith(navLink.href)
                return(
                    <Link key={navLink.name} href={navLink.href} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                        {navLink.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}