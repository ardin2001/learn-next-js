import { ProductType } from "@/types/productType";
export default function Products({ products }: { products: ProductType }) {
    return (
        <div className='grid grid-cols-5 gap-5 grid-flow-row w-11/12 mx-auto justify-between'>
            <div key={products.id} className=' p-2 bg-slate-400 rounded-md col-start-3'>
                <img src={products.image} alt="" />
                <p>{products.name}</p>
                <p>{products.category}</p>
                <p>{products.price}</p>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const response = await fetch('http://localhost:3000/api/products')
    const json = await response.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = json.data.map((post:any) => ({
      params: { id: post.id },
    }))
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export async function getStaticProps({params}:any) {
    const response = await fetch('http://localhost:3000/api/products/'+params.id)
    const json = await response.json()
    return {
        props: {
            products: json.data
        }
    }
}