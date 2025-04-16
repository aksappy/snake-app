import RightSidebar from "@/components/RightSidebar";

export default function ChildLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <RightSidebar />
            {children}
            <footer>This is only in child page</footer>
        </>
    );
}