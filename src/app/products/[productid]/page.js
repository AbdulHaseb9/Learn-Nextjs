export function generateMetadata({ params }) {
    return {
        title: `Products ${params.productid}`,
    }
}

export default function Productdetail({ params }) {
    return (
        <main className="h-screen flex justify-center flex-col items-center text-4xl">
            <h1>Welcome to Products Details Page {params.productid}</h1>
            <h3 className="text-xl my-4">You want to know about product</h3>
            <p>Price of product is {params.productid * 10}</p>
        </main>
    );
}
