import { PropsWithChildren } from "react";
import { Navbar } from "@/app/(browse)/_components/navbar";
import { Sidebar } from "@/app/(browse)/_components/sidebar";
import { Container } from "@/app/(browse)/_components/container";

export default function BrowseLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar/>
            <div className="flex h-full pt-20">
                <Sidebar/>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    );
}