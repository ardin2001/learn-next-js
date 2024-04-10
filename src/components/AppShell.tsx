import Navbar from "./Navbar"
import Footer from "./Footer"
import { useRouter } from "next/router"
import { ReactNode } from "react"

type AppShellprops = {
    children : ReactNode
}

export default function AppShell(props: AppShellprops) {
    const disablenavbar = ["/login", "/register","/404"]
    const {route} =  useRouter()
    return (
        <>
            {disablenavbar.find(item => item === route) ? null : <Navbar />}
            {props.children}
            {!disablenavbar.includes(route) && <Footer />}
        </>
    )
}