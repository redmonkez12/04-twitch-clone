"use server";

import { blockUser, unblockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";
import { getSelf } from "@/lib/auth-service";

export async function onBlock(id: string) {
    const blockedUser = await blockUser(id);

    if (!blockedUser) {
        revalidatePath(``);
    }

    return blockedUser;
}

export const onUnblock = async (id: string) => {
    const self = await getSelf();
    const unblockedUser = await unblockUser(id);

    revalidatePath(`/u/${self.username}/community`);
    return unblockedUser;
};