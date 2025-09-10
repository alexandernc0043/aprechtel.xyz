"use client";

import Link from "next/link";
import {ReactNode} from "react";
import {bottomNavLinks} from "@/config/nav";

type NavItem = {
    href: string;
    label: string;
    target?: string | "_self";
    icon?: ReactNode;

};

export default function BottomNav({items}: { items?: NavItem[] }) {
    const links = items ?? bottomNavLinks;

    if (!links?.length) return null;

    return (
        <nav
            aria-label="Bottom navigation"
            className="absolute bottom-0 left-0 right-0 z-40 border-t border-foreground/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div className="mx-auto max-w-4xl px-4 py-3 pb-[calc(0.75rem)]">
                <ul className="flex items-center justify-between gap-2">
                    {links.map((item: NavItem) => (
                        <li key={item.href} className="flex-1 text-center">
                            <Link
                                href={item.href}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/90 transition hover:bg-foreground/10 hover:text-foreground"
                                target={item.target}
                            >
                                {/*{item.icon}*/}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

