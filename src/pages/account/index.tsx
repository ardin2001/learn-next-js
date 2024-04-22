import styles from './account.module.css';
import { useSession } from 'next-auth/react';
export default function Accout() {
  const { data: session } = useSession()
    return (
      <div>
        <p className='text-xl text-red-400 font-semibold'>Hello, {session?.user?.name}, welcome to your account</p>
        <p className="title">Hello, Ardin, welcome to your account, style className</p>
        <p style={{color:"red",backgroundColor:"yellow"}}>this`s text style internal</p>
        <p className="text-red-600 font-semibold">this`s text tailwind style</p>
        <p className={styles.text}>text module css</p>
      </div>
    );
  }
  