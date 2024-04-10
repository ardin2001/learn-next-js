import styles from './account.module.css'
export default function Accout() {
    return (
      <div>
        <p className="title">Hello, Ardin, welcome to your account, style className</p>
        <p style={{color:"red",backgroundColor:"yellow"}}>this`s text style internal</p>
        <p className="text-red-600 font-semibold">this`s text tailwind style</p>
        <p className={styles.text}>text module css</p>
      </div>
    );
  }
  