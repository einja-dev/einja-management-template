"use client";

import { signIn } from "next-auth/react";

interface LoginButtonProps {
	provider?: "google" | "github" | "credentials";
	children?: React.ReactNode;
	className?: string;
}

export function LoginButton({
	provider = "google",
	children,
	className = "",
}: LoginButtonProps) {
	const handleSignIn = async () => {
		await signIn(provider, { callbackUrl: "/" });
	};

	const defaultText = {
		google: "Sign in with Google",
		github: "Sign in with GitHub",
		credentials: "Sign in with Email",
	};

	return (
		<button
			type="button"
			onClick={handleSignIn}
			className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${className}`}
		>
			{children || defaultText[provider]}
		</button>
	);
}
