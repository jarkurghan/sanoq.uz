import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
    return <div className={`mx-auto my-10 max-w-4xl px-2 ${className}`}>{children}</div>;
}
