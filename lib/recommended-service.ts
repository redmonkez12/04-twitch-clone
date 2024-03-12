import { db } from "@/lib/db";

export async function getRecommended() {
    return db.user.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}
