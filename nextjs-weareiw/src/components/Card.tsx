import Link from "next/link";
import Image from "next/image";

export default function Card() {
    return (
        <div className="flex flex-col">
            <div>
                <Image className="max-h-[250px] h-auto w-auto object-contain" 
                src="/Services-Moody-Blue.png" alt="Services card image" width={669} height={375} />
            </div>
        </div>
    )
}