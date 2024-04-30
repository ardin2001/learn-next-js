import { useSession, signIn, signOut } from "next-auth/react"
export default function Navbar() {
    const { data: session } = useSession()
    return (
        <div className="navbar mb-10 flex justify-between px-5">
            <h3 className="text-xl">Navbar</h3>
            <p>{session ? `Signed in as ${session.user?.email}` : null}</p>
            {session ? <button className="bg-red-500 px-4 py-1 text-white font-semibold" onClick={() => signOut()}>Logout</button> : <button className="bg-blue-500 px-4 py-1 text-white font-semibold" onClick={() => signIn()}>Login</button>}
        </div>
    )
}