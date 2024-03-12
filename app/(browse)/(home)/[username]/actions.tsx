"use client";

import { Button } from "@/components/ui/button";
import { onFollow, onUnfollow } from "@/actions/follow";
import { useTransition } from "react";
import { toast } from "sonner";

type ActionsProps = {
    isFollowing: boolean;
    userId: string;
};

export function Actions({ isFollowing, userId }: ActionsProps) {
    const [isPending, startTransition] = useTransition();

    function handleFollow() {
        startTransition(() => {
            onFollow(userId)
                .then((data) => toast.success(`Your are now following ${data.following.username}`))
                .catch(() => toast.error("Something went wrong"));
        });
    }

    function handleUnFollow() {
        startTransition(() => {
            onUnfollow(userId)
                .then((data) => toast.success(`Your have unfollowed ${data.following.username}`))
                .catch(() => toast.error("Something went wrong"));
        });
    }

    function onClick() {
        if (isFollowing) {
            handleUnFollow();
        } else {
            handleFollow();
        }
    }

    return (
        <Button
            onClick={onClick}
            variant="primary"
            disabled={isPending}>
            {isFollowing ? "Unfollow" : "Follow"}
        </Button>
    );
}