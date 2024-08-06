import { notFound } from "next/navigation"

export default function Features({ params }) {
    if (params.slug?.length == 1) {
        return <div className="text-center content-center h-screen text-2xl">Fetures {params.slug[0]}</div>
    } else if (params.slug?.length == 2) {
        if (params.slug[1] > 100) {
            return notFound()
        }
        return <div className="text-center content-center h-screen text-2xl">Fetures {params.slug[0]} Example {params.slug[1]}</div>
    }
    return (
        <div className="text-center content-center h-screen text-2xl">Docs Home Page</div>
    )
}

// Catch all segments
// if you want all url parameters in array like /user/profile and display according to url length
// if example url greater than 100 return example not found page