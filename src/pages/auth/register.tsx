import { useState } from "react";

export default function Register() {
    const [message,setMessage] =useState(null);
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
            const {message} = await response.json();
            setMessage(message)
        })()
    };
    return (
        <div>
            <form onSubmit={HandlerRegister} className="grid w-1/2 m-0-auto bg-green-300 p-5 m-auto gap-3">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button type="submit" className="bg-blue-500 py-1">Register</button>
                <p>{message}</p>
            </form>
        </div>
    );
}