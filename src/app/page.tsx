import { UserAvatar } from "@/components/auth/user-avatar";

export default function Home() {
	return (
		<main className="min-h-screen p-8">
			<header className="mb-8">
				<nav className="flex justify-between items-center">
					<h1 className="text-2xl font-bold">Corporate Site</h1>
					<UserAvatar />
				</nav>
			</header>
			<section>
				<h2 className="text-xl mb-4">Welcome to our Corporate Site</h2>
				<p>
					This is a Next.js application with NextAuth authentication integrated.
				</p>
			</section>
		</main>
	);
}
