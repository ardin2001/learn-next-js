import { PostData } from "@/utils/FetchProducts";
type Product = {
    category: string,
    id: string,
    image: string,
    name: string,
    price: number,
}
export default function AddProducts() {
    const HandlerPost = (e:any) => {
        e.preventDefault();
        PostData("products",{
            name: e.target.name.value,
            category: e.target.category.value,
            image: e.target.image.value,
            price: Number(e.target.price.value)}).then(res => console.log(res))
    }
    return (
        <div className=' w-1/6 mx-auto'>
            <form onSubmit={HandlerPost} className="flex flex-col gap-3 h-1/2">
                <input type="text" className="outline-none border-2 border-slate-500" placeholder="name" name="name" />
                <input type="text" className="outline-none border-2 border-slate-500" placeholder="category" name="category" />
                <input type="text" className="outline-none border-2 border-slate-500" placeholder="image" name="image" />
                <input type="text" className="outline-none border-2 border-slate-500" placeholder="price" name="price" />
                <button type="submit" className="block bg-green-500">add data</button>
            </form>
        </div >
    );
}
