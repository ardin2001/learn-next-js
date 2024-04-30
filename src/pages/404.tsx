
import Head from "next/head";
import Image from "next/image";
export default function SlugShop() {
    return (
      <div className="my-10">
        <Head>
            <title>404</title>
        </Head>
        <Image className="mx-auto" src="/404.png" width={600} height={14050} alt="404" />
        <p className="font-semibold text-red-400 text-xl text-center">404 | Page Not Found</p>
      </div>
    );
  }