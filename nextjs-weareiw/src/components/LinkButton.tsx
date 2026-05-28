import Link from "next/link";

export type LinkVariant = "light" | "dark";

type LinkProps = {
    href: string;
    label: string;
    subLabel?: string;
    variant?: LinkVariant;
    className?: string;
    prefetch?: boolean;
    target?: string;
};

const VARIANT_STYLES: Record<LinkVariant, string> = {
  light: "bg-background text-brand-black border-3 border-background hover:bg-transparent hover:text-white active:bg-transparent active:text-white",
  dark: "bg-brand-black text-white border-3 border-brand-black hover:bg-transparent hover:text-brand-black active:bg-transparent active:text-brand-black",
};

export default function LinkButton({ href, label, subLabel, variant = "dark", className ="", prefetch, target }: LinkProps) {

    const isAnchor = href.startsWith("#") || href.startsWith("/#");

    return (
            <Link href={href}
            prefetch={isAnchor ? false : prefetch} target={target}
            className={`w-full sm:w-fit flex flex-col items-center
            transition duration-300 ease-in-out px-[1em] py-[.33em]
            rounded-md ${VARIANT_STYLES[variant]} ${className}
            focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua`}>
                <div className="">
                    {label}
                </div>
                <div>
                    {subLabel}
                </div>
            </Link>
    )
}