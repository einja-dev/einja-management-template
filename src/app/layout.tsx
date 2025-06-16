import "./globals.css";
import { AuthProvider } from "@/components/providers/session-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Corporate Site",
		template: "%s | Corporate Site",
	},
	description:
		"Next.js corporate site boilerplate with modern development tools",
	keywords: ["Next.js", "React", "TypeScript", "Corporate Site"],
	authors: [{ name: "Your Company" }],
	creator: "Your Company",
	publisher: "Your Company",
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com",
	),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "/",
		title: "Corporate Site",
		description:
			"Next.js corporate site boilerplate with modern development tools",
		siteName: "Corporate Site",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Corporate Site",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Corporate Site",
		description:
			"Next.js corporate site boilerplate with modern development tools",
		images: ["/og-image.png"],
		creator: "@your_twitter",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
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
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}
