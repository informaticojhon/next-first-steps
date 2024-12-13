import type { Metadata } from "next";

export const metadata: Metadata = {
    title:'Pricing Page',
    description: 'SEO Description',
    keywords: ['Pricing Page', 'Jhon Chiguay', 'Información', '...'],
};

export default function PricingPage(){
    return(
        <>
        <span className="text-8xl">Pricing Page</span>
        </>
    )
}