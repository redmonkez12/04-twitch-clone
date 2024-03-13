"use client";

import { Button } from "@/components/ui/button";
import { onFollow, onUnfollow } from "@/actions/follow";
import { useTransition } from "react";
import { toast } from "sonner";
import { onBlock } from "@/actions/block";

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

    function handleBlock() {
        startTransition(() => {
           onBlock(userId)
               .then(data => toast.success(`Blocked the user ${data.blocked.username}`))
               .catch((error) => {
                   console.log(error);
                   return toast.error("Something went wrong");
               })
        });
    }

    return (
        <>
            <Button
                onClick={onClick}
                variant="primary"
                disabled={isPending}>
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>
            <Button onClick={handleBlock} disabled={isPending}>
                Block
            </Button>
        </>
    );
}