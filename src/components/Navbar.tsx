import { useSession, signIn, signOut } from "next-auth/react"
import Script from "next/script"
export default function Navbar() {
    const { data: session } = useSession()
    return (
        <div className="navbar mb-10 flex justify-between px-5">
            <h3 className="text-xl" id="title"></h3>
            <Script id='strategy' strategy='lazyOnload'>
                {/* berguna untuk load script seperti google analytics, facebook analytics */}
                {`document.getElementById("title").innerText = "Navbar"`}
            </Script>
            <p>{session ? `Signed in as ${session.user?.email}` : null}</p>
            {session ? <button className="bg-red-500 px-4 py-1 text-white font-semibold" onClick={() => signOut()}>Logout</button> : <button className="bg-blue-500 px-4 py-1 text-white font-semibold" onClick={() => signIn()}>Login</button>}
        </div>
    )
}