import { useRouter } from "next/router";
export default function SlugShop() {
    const router = useRouter();
    console.log(router.query.slug)
    return (
      <div>
        <p>Hello, this is page slug shop : {router.query.slug}</p>
      </div>
    );
  }