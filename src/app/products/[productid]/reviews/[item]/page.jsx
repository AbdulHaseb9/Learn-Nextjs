import { notFound } from "next/navigation"

export default function Reviews({ params }) {

    if (parseInt(params.item) > 100) {
        return notFound()
    }

    return (
        <div>
            product review is {params.item}
        </div>
    )
}
