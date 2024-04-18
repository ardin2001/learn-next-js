import { useRouter } from "next/router";
export default function SlugShop() {
    const router = useRouter();
    return (
      <div>
        <p>coba ...id : {router.query.id}</p>
      </div>
    );
  }