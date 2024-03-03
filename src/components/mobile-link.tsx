import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
    setHoveredPath?: React.Dispatch<React.SetStateAction<string>>;
    currentRoute?: string;
}

export function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    currentRoute,
    setHoveredPath,
    ...props
}: MobileLinkProps) {
    const router = useRouter();
    const handleMouseOver = () => {
        setHoveredPath?.(String(href)); // Ensure href is converted to a string
    };

    const handleMouseLeave = () => {
        setHoveredPath?.(String(currentRoute)); // Ensure currentRoute is converted to a string
    };

    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn(className)}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </Link>
    );
}
