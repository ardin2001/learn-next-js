import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
    const [message, setMessage] = useState("");
    const router = useRouter();
    const callbackUrl: any = router.query.callbackUrl || "/"
    const HandlerLogin = async (event: any) => {
        event.preventDefault();
        try {
            const response:any = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl: callbackUrl,
            })
            if(response.ok){
                router.push(callbackUrl)
            }else{
                setMessage("Error email or password")
            }
        } catch (err:any) {
            setMessage(err.message);
        }
    };
    return (
        <div>
            <h3 className="text-center text-3xl text-green-500 font-bold pb-5">Login Page</h3>
            <form onSubmit={HandlerLogin} className="grid w-1/3 m-0-auto bg-green-300 p-5 m-auto gap-3">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button type="submit" className="bg-blue-500 py-1">Login</button>
                <p className="text-center">{message}</p>
            </form>
            <p className="text-center font-semibold text-white text-lg w-1/3 bg-red-500 m-auto py-3 cursor-pointer" onClick={() => signIn("google", { callbackUrl: callbackUrl,redirect: false })}>Login With Google</p>
        </div>
    );
}