import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { ProductType } from "@/types/productType";
export default function Products({ products } : InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className='grid grid-cols-5 gap-5 grid-flow-col w-11/12 mx-auto justify-between'>
            {products.map((data: ProductType) => {
                return (
                    <div key={data.id} className=' p-2 bg-slate-400 rounded-md'>
                        <img src={data.image} alt="" />
                        <p>{data.name}</p>
                        <p>{data.category}</p>
                        <p>{data.price}</p>
                    </div>
                )
            })}
        </div>
    );
}

export const getServerSideProps = (async () => {
    const response= await fetch('http://localhost:3000/api/products')
    const json = await response.json()
    return {
        props: {
            products: json.data
        }
    }
}) satisfies GetServerSideProps<{ products: ProductType }>