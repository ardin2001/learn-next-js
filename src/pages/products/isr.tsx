import { ProductType } from "@/types/productType";
import {GetData} from "@/utils/FetchProducts";
export default function Products({products}:{products:ProductType[]}) {
    return (
        <div className='grid grid-cols-5 gap-5 grid-flow-row w-11/12 mx-auto justify-between'>
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

export async function getStaticProps() {
    const response= await GetData('products')
    return {
        props: {
            products: response
        },
        // revalidate:10,
    }
}