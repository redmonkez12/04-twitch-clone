import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { isFollowingUser } from "@/lib/follower-service";
import { Actions } from "@/app/(browse)/(home)/[username]/actions";

type UserPageParams = {
    params: {
        username: string;
    };
};

export default async function UserPage({ params }: UserPageParams) {
    const user = await getUserByUsername(params.username);

    if (!user) {
        notFound()
    }

    const isFollowing = await isFollowingUser(user.id);

    return (
        <div className="flex flex-col gap-y-4">
            <p>username: {user.username}</p>
            <p>user ID: {user.id}</p>
            <p>is following: {`${isFollowing}`}</p>
            <Actions isFollowing={isFollowing} userId={user.id}/>
        </div>
    );
}
