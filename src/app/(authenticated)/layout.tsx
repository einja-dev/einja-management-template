import { Sidebar } from "@/components/shared/Sidebar";
import { Header } from "@/components/shared/header";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthenticatedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	if (!session) {
		redirect("/signin");
	}

	return (
		<div className="flex h-screen bg-background">
			<Sidebar />
			<div className="flex-1 flex flex-col overflow-hidden">
				<Header user={session.user} />
				<main className="flex-1 overflow-auto p-6">{children}</main>
			</div>
		</div>
	);
}
