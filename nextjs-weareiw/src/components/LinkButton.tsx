import Link from "next/link";

export type LinkVariant = "light" | "dark";

type LinkProps = {
    href: string;
    label: string;
    variant?: LinkVariant;
};

const VARIANT_STYLES: Record<LinkVariant, string> = {
  light: "bg-background text-brand-black border-3 border-background hover:bg-transparent hover:text-white",
  dark: "bg-brand-black text-white border-3 border-brand-black hover:bg-transparent hover:text-brand-black",
};

export default function LinkButton({ href, label, variant = "dark" }: LinkProps) {
    return (
            <Link href={href} 
            className={`w-full sm:w-fit transition duration-300 ease-in-out px-[1em] py-[.33em]
            rounded-md ${VARIANT_STYLES[variant]}`}>
                {label}
            </Link>
    )
}