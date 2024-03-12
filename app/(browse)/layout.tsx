import { PropsWithChildren, Suspense } from "react";
import { Navbar } from "@/app/(browse)/_components/navbar";
import { Sidebar, SidebarSkeleton } from "@/app/(browse)/_components/sidebar";
import { Container } from "@/app/(browse)/_components/container";

export default function BrowseLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar/>
            <div className="flex h-full pt-20">
                <Suspense fallback={<SidebarSkeleton/>}>
                    <Sidebar/>
                </Suspense>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    );
}