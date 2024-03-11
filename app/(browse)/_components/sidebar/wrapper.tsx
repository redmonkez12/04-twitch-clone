"use client";

import { PropsWithChildren } from "react";
import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

export function Wrapper({ children }: PropsWithChildren) {
    const { collapsed } = useSidebar((state) => state);

    return (
        <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2d2e35] z-50",
            collapsed && "w-[70px]")}>
            {children}
        </aside>
    );
}