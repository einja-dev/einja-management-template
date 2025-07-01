import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * 認証が必要なページで使用する高階関数
 * セッションがない場合は/signinにリダイレクトする
 */
export function withAuth<T extends unknown[], R>(
	fn: (...args: T) => Promise<R>,
): (...args: T) => Promise<R> {
	return async (...args: T): Promise<R> => {
		const session = await auth();

		if (!session) {
			redirect("/signin");
		}

		return fn(...args);
	};
}

/**
 * 認証チェック用のユーティリティ関数
 * セッションを取得し、ない場合は/signinにリダイレクト
 */
export async function requireAuth() {
	const session = await auth();

	if (!session) {
		redirect("/signin");
	}

	return session;
}
