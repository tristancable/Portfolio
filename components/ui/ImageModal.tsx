"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageModal({ src }: { src: string }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className="relative w-full h-full cursor-zoom-in"
                onClick={() => setOpen(true)}
            >
                <Image
                    src={src}
                    alt="Project Screenshot"
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                />
            </div>

            {open && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 cursor-zoom-out"
                    onClick={() => setOpen(false)}
                >
                    <div className="relative max-w-5xl w-full aspect-video">
                        <Image src={src} alt="Expanded Screenshot" fill className="object-contain" />
                    </div>
                </div>
            )}
        </>
    );
}