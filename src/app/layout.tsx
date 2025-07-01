import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { AuthProvider } from "@/components/providers/session-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Corporate Site",
		template: "%s | Corporate Site",
	},
	description:
		"Next.js corporate site boilerplate with modern development tools",
	verification: {
		google: "your-google-site-verification",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<QueryProvider>
					<AuthProvider>{children}</AuthProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
