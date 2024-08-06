"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigateLinks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
    {
        name: 'Login',
        href: '/login'
    },
    {
        name: 'Register',
        href: '/register'
    },
    {
        name: 'Products',
        href: '/products'
    },
]

export default function Navbar() {

    const pathname = usePathname()

    return (
        <header className="w-full flex justify-center items-center py-3">
            <nav className="space-x-4">
                {
                    navigateLinks.map((item) => {
                        const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href)
                        return (
                            <Link href={item.href} key={item.name} className={`${isActive ? `font-semibold text-xl` : `text-sm`}`}>{item.name}</Link>
                        )
                    }
                    )
                }
            </nav>
        </header>
    )
}
