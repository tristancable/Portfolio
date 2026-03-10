import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    id?: string;
    className?: string;
}

export default function Section({ children, id, className = "" }: Props) {
    return (
        <section
            id={id}
            className={`py-24 sm:py-32 ${className}`}
        >
            {children}
        </section>
    );
}