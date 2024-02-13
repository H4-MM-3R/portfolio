import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
    items?: NavItem[];
}

export function Nav({ items }: MainNavProps) {
    const currentRoute = usePathname() || "/";

    return (
        <nav className="flex gap-12">
            {items?.map(
                (item, index) =>
                    item.href && (
                        <Link
                            key={index}
                            href={item.href}
                            data-active={currentRoute === item.href}
                            className={cn(fontMono.className, 
                                `${currentRoute === item.href
                                    ? "flex items-center text-md font-medium text-[#2aa198]"
                                    : "flex items-center text-md font-medium text-muted-foreground hover:text-[#2aa198] transition-all duration-700"
                                }`,
                            )}
                        >
                            {item.title}
                        </Link>
                    ),
            )}
        </nav>
    );
}
