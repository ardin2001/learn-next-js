import { useRouter } from "next/router";
import Link from "next/link";

export default function SlugSetting() {
    const { query,push} = useRouter();
    const HandlerLogout = () =>{
        push('/')
    }
    return (
      <div>
        <p>Hello, this is page slug setting : {query.slug && query.slug[0]}</p>
        <p>slug : {query.slug}</p>
        <p>Register ? <Link href="/register"  className="link">Register</Link></p>
        <button onClick={HandlerLogout}>Logout</button>
      </div>
    );
  }