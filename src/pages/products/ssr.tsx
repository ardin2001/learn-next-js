import { ProductType } from "@/types/productType";
import { DeleteData } from '@/utils/FetchProducts';
export default function Products({products}:{products:ProductType[]}) {
    const HandlerDelete = async (id:any) =>{
        DeleteData('products',id)
    }
    return (
        <div className='grid grid-cols-5 gap-5 grid-flow-row w-11/12 mx-auto justify-between'>
            {products.map((data: ProductType) => {
                return (
                    <div key={data.id} className=' p-2 bg-slate-400 rounded-md'>
                        <img src={data.image} alt="" />
                        <p>{data.name}</p>
                        <p>{data.category}</p>
                        <p>{data.price}</p>
                        <button className='bg-red-500 px-2 py-1 text-white' onClick={() => HandlerDelete(data.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export async function getServerSideProps() {
    const response= await fetch('http://localhost:3000/api/products')
    const json = await response.json()
    return {
        props: {
            products: json.data
        }
    }
}