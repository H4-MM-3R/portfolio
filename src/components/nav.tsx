import { fontMont } from "@/lib/fonts";
import { NavItem } from "@/types/nav";
import clsx from "clsx";
import Link from "next/link";

interface MainNavProps {
  items?: NavItem[];
}

export function Nav({ items }: MainNavProps) {
  return (
    <nav className="flex gap-12">
      {items?.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={clsx(fontMont.className, "flex items-center text-md font-medium text-muted-foreground hover:text-blue-500")}
            >
              {item.title}
            </Link>
          ),
      )}
    </nav>
  );
}
