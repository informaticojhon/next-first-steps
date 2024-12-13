import type { Metadata } from "next";

export const metadata: Metadata = {
    title:'Contact Page',
    description: 'SEO Description',
    keywords: ['Contact Page', 'Jhonchi', 'Información', '...'],
};



export default function ContactPage(){
    return(
        <>
        <span className="text-6xl">Contact Page</span>
        </>
    )
}