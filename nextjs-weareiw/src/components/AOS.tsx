"use client";
import { useEffect } from "react";
import AOSLibrary from "aos";
import "aos/dist/aos.css";

export default function AOS({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOSLibrary.init({
            duration: 800,
            once: true,
        });
    }, []);

    return <>{children}</>
}