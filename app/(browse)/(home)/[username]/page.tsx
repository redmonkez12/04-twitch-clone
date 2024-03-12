type UserPageParams = {
    params: {
        username: string;
    };
};

export default function UserPage({ params }: UserPageParams) {
    return (
        <div>User {params.username}</div>
    );
}
