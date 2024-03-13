"use server";

import { followUser, unfollowUser } from "@/lib/follower-service";
import { revalidatePath } from "next/cache";

export async function onFollow(id: string) {
    try {
        const followedUser = await followUser(id);

        revalidatePath("/");

        if (followedUser) {
            revalidatePath(`/${followedUser.following.username}`);
        }

        return followedUser;
    } catch (error) {
        console.log(error);
        throw new Error("Internal Error");
    }
}

export const onUnfollow = async (id: string) => {
    try {
        const unfollowedUser = await unfollowUser(id);

        revalidatePath("/");

        if (unfollowedUser) {
            revalidatePath(`/${unfollowedUser.following.username}`)
        }

        return unfollowedUser;
    } catch (error) {
        throw new Error("Internal Error");
    }
}