import { Wrapper } from "@/app/(browse)/_components/sidebar/wrapper";
import { Toggle, ToggleSkeleton } from "@/app/(browse)/_components/sidebar/toggle";
import { Recommended, RecommendedSkeleton } from "@/app/(browse)/_components/sidebar/recommended";
import { getRecommended } from "@/lib/recommended-service";
import { getFollowedUsers } from "@/lib/follow-service";
import { Following, FollowingSkeleton } from "@/app/(browse)/_components/sidebar/following";

export async function Sidebar() {
    const recommended = await getRecommended();
    const following = await getFollowedUsers();

    return (
        <Wrapper>
            <Toggle/>
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended data={recommended}/>
                <Following data={following}/>
            </div>
        </Wrapper>
    );
}

export const SidebarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
            <ToggleSkeleton/>
            <FollowingSkeleton/>
            <RecommendedSkeleton />
        </aside>
    );
};