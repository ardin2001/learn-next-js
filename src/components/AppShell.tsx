import Navbar from "./Navbar"
import Footer from "./Footer"
export default function AppShell(props: any) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}