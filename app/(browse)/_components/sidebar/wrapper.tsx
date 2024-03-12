"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";
import { ToggleSkeleton } from "@/app/(browse)/_components/sidebar/toggle";
import { RecommendedSkeleton } from "@/app/(browse)/_components/sidebar/recommended";

export function Wrapper({ children }: PropsWithChildren) {
    const [isClient, setIsClient] = useState(false);
    const { collapsed } = useSidebar((state) => state);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
                <ToggleSkeleton />
                <RecommendedSkeleton />
            </aside>
        );
    }

    return (
        <aside
            className={cn(
                "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
                collapsed && "w-[70px]"
            )}
        >
            {children}
        </aside>
    );
}