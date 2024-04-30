import { useEffect, useState } from 'react';
import useSWR from "swr";
import { fetcher } from '@/utils/fetcher';
import { DeleteData } from '@/utils/FetchProducts';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {Roboto} from 'next/font/google'

type Product = {
    category: string,
    id: string,
    image: string,
    name: string,
    price: number,
}

const roboto = Roboto({ subsets: ['latin'], weight: '700' })

export default function Products() {
    const router = useRouter();
    // const [products, setProducts] = useState<Product[]>([]);
    // useEffect(() => {
    //     (async function getDataProducts() {
    //         const data = await fetch('/api/products');
    //         const json = await data.json();
    //         setProducts(json.data);
    //     })();
    // }, [])
    const HandlerDelete = async (id:any) =>{
        DeleteData('products',id)
        router.push('/products')
    }
    const { data, error, isLoading } = useSWR('/api/products', fetcher);
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <div className='grid grid-cols-5 gap-5 grid-flow-row w-11/12 mx-auto justify-between'>
            {data.data.map((data: Product) => {
                return (
                    <div key={data.id} className=' p-2 bg-slate-400 rounded-md'>
                        {/* <img src={data.image} alt="" /> */}
                        <Image src={data.image} alt="" width={800} height={80000} />
                        <p className={roboto.className}>{data.name}</p>
                        <p>{data.category}</p>
                        <p>{data.price}</p>
                        <button className='bg-red-500 px-2 py-1 text-white' onClick={() => HandlerDelete(data.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}
