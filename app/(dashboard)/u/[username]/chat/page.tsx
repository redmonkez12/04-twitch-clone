import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { getStreamByUserId } from "@/lib/stream-service";
import { ToggleCard } from "@/app/(dashboard)/u/[username]/chat/_components/toggle-card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function ChatPage() {
    const self = await currentUser();

    if (!self) {
        redirect("/")
    }

    const stream = await getStreamByUserId(self.id);

    if (!stream) {
        throw new Error("Stream not found")
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    Chat Settings
                </h1>
            </div>
            <div className="space-y-4">
                <ToggleCard
                    field="isChatEnabled"
                    label="Enable Chat"
                    value={stream.isChatEnabled}
                />
                <ToggleCard
                    field="isChatDelayed"
                    label="Delay Chat"
                    value={stream.isChatDelayed}
                />
                <ToggleCard
                    field="isChatFollowersOnly"
                    label="Must be following to chat"
                    value={stream.isChatFollowersOnly}
                />
            </div>
        </div>
    );
}

