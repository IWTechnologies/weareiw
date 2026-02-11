import Link from "next/link";
import Image from "next/image";

export default function ProductsHero() {
    return (
        <div className="relative min-h-dvh w-full overflow-hidden bg-brand-blue">
            <Image src="/productsHero/shutterstock_422662612-scaled.jpg" alt="placeholder" priority width={2048} height={1357}
            className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-navy to-transparent"></div>

            <div className="relative z-11 min-h-dvh w-1/2 mx-auto flex flex-col items-start justify-center">
                <h1 className="pb-5 text-5xl font-bold text-white">
                Your End-to-End Point of Sale Partner
                </h1>
                <p className="pb-5 text-2xl font-medium text-white">
                    IW Technologies pairs cutting-edge technology with
                    unmatched customer service to be your complete
                    enterprise solution partner.
                </p>
                <Link href="#" 
                className="transition duration-300 ease-in-out px-[1em] py-[.33em]
                border-3 border-brand-aqua rounded-md text-[22px] text-brand-navy bg-brand-aqua
                hover:bg-transparent hover:text-brand-aqua">
                    Partner With Us
                </Link>
            </div>
        </div>
    )
}