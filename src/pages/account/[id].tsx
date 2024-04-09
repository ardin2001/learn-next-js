import { useRouter } from "next/router";
export default function DetailAccout() {
    const router = useRouter();
    return (
      <div>
        <p>Hello, Ardin, welcome to your account id : {router.query.id}</p>
      </div>
    );
  }
  