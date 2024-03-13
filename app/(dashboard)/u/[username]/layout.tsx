import { PropsWithChildren } from "react";
import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import { Navbar } from "@/app/(dashboard)/u/[username]/_components/navbar";
import { Sidebar } from "@/app/(dashboard)/u/[username]/_components/sidebar";
import { Container } from "@/app/(dashboard)/u/[username]/_components/container";

type CreatorLayoutProps = {
    params: { username: string };
};

export default async function CreatorLayout({ children, params }: PropsWithChildren<CreatorLayoutProps>) {
    const self = await getSelfByUsername(params.username);

    if (!self) {
        redirect("/");
    }

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