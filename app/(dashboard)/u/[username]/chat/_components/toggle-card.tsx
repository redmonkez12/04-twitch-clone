"use client";

import { Switch } from "@/components/ui/switch";
import { startTransition, useTransition } from "react";
import { updateStream } from "@/actions/stream";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

type ToggleCardProps = {
    label: string;
    value: boolean;
    field: FieldTypes;
}

export function ToggleCard({ label, value, field }: ToggleCardProps) {
    const [isPending, startTransition] = useTransition();

    function onChange() {
        startTransition(() => {
            updateStream({ [field]: !value })
                .then(() =>  toast.success(`Chat settings updated!`))
                .catch(() => toast.error("Something went wrong"));
        });
    }

    return (
        <div className="rounded-xl bg-muted p-6">
            <div className="flex items-center justify-between">
                <div className="font-semibold shrink-0">
                    {label}
                </div>
                <div className="space-y-2">
                    <Switch
                        disabled={isPending}
                        onCheckedChange={onChange}
                        checked={value}
                    >
                        {value ? "On" : "Off"}
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export const ToggleCardSkeleton = () => {
    return (
        <Skeleton className="rounded-xl p-10 w-full" />
    );
};
