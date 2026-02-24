import Image from "next/image";

export default function ProductsHero() {
    return (
        <div className="relative min-h-dvh w-full overflow-hidden bg-brand-blue">
            <Image src="/productsHero/shutterstock_422662612-scaled.jpg" alt="placeholder" priority width={2048} height={1357}
            className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 z-10 bg-linear-to-t from-brand-navy to-transparent"></div>

            <div className="relative z-11 min-h-dvh w-1/2 mx-auto flex flex-col items-start justify-center">
                <h1 className="pb-5 text-white">
                Placeholder
                </h1>
                <h3 className="pb-5 text-white">
                    IW Technologies pairs cutting-edge technology with
                    unmatched customer service to be your complete
                    enterprise solution partner.
                </h3>
            </div>
        </div>
    )
}