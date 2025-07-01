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
		<>
			<Header user={session.user} />
			{children}
		</>
	);
}
