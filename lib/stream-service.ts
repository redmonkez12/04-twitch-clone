import { db } from "@/lib/db";

export const getStreamByUserId = (userId: string) => {
    return db.stream.findUnique({
       where: { userId },
    });
}