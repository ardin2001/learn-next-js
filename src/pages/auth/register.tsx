import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
    const [message,setMessage] =useState(null);
    const router = useRouter()
    const HandlerRegister = (event:any) => {
        event.preventDefault();
        (async function PostData() {
            const response = await fetch("/api/users",{
                body:JSON.stringify({
                    username: event.target.username.value,
                    password: event.target.password.value
                }),
                method:"POST"
            })
            const {message,status} = await response.json();
            setMessage(message)
            if(status){
                router.push("/auth/login")
            }
        })()
    };
    return (
        <div>
        <h3 className="text-center text-3xl text-green-500 font-bold pb-5">Register Page</h3>
            <form onSubmit={HandlerRegister} className="grid w-1/3 m-0-auto bg-green-300 p-5 m-auto gap-3">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button type="submit" className="bg-blue-500 py-1">Register</button>
                <p className="text-center">{message}</p>
            </form>
        </div>
    );
}