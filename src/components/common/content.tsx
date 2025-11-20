import { ReactNode } from "react";

type ContentProps = {
    children: ReactNode;
    className?: string;
};

export default function Content({ children, className = "" }: ContentProps) {
    return <div className={`mx-auto my-10 max-w-6xl px-2 ${className}`}>{children}</div>;
}
