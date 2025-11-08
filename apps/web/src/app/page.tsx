import { UserAvatar } from "@/components/auth/user-avatar";
import Link from "next/link";
import React from "react";
import { css } from "../../styled-system/css";

export default function Home() {
	return (
		<main
			className={css({
				minHeight: "screen",
				padding: { base: "4", md: "8" },
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				color: "white",
			})}
		>
			<header
				className={css({
					marginBottom: { base: "6", md: "12" },
				})}
			>
				<nav
					className={css({
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						padding: { base: "4", md: "6" },
						backgroundColor: "rgba(255, 255, 255, 0.1)",
						borderRadius: "lg",
						backdropFilter: "blur(10px)",
					})}
				>
					<h1
						className={css({
							fontSize: { base: "xl", md: "2xl" },
							fontWeight: "bold",
						})}
					>
						Einja Management Template
					</h1>
					<UserAvatar />
				</nav>
			</header>

			<div
				className={css({
					maxWidth: "4xl",
					margin: "0 auto",
					padding: { base: "4", md: "8" },
				})}
			>
				<section
					className={css({
						textAlign: "center",
						marginBottom: { base: "8", md: "12" },
					})}
				>
					<h2
						className={css({
							fontSize: { base: "2xl", md: "4xl" },
							fontWeight: "bold",
							marginBottom: "4",
							textShadow: "0 2px 4px rgba(0,0,0,0.3)",
						})}
					>
						管理画面テンプレート
					</h2>
					<p
						className={css({
							fontSize: { base: "lg", md: "xl" },
							opacity: "0.9",
							lineHeight: "relaxed",
						})}
					>
						Next.js 15 + TypeScript + PandaCSS + NextAuth を使用した
						<br />
						モダンな管理画面テンプレートです
					</p>
				</section>

				<div
					className={css({
						display: "grid",
						gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
						gap: { base: "4", md: "8" },
						marginBottom: { base: "8", md: "12" },
					})}
				>
					<div
						className={css({
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							padding: { base: "4", md: "6" },
							borderRadius: "lg",
							backdropFilter: "blur(10px)",
						})}
					>
						<h3
							className={css({
								fontSize: { base: "lg", md: "xl" },
								fontWeight: "semibold",
								marginBottom: "3",
							})}
						>
							🚀 技術スタック
						</h3>
						<ul
							className={css({
								fontSize: "sm",
								lineHeight: "relaxed",
								opacity: "0.9",
							})}
						>
							<li>• Next.js 15 (App Router)</li>
							<li>• TypeScript (Strict Mode)</li>
							<li>• PandaCSS (CSS-in-JS)</li>
							<li>• NextAuth v5 (認証)</li>
							<li>• Prisma ORM + PostgreSQL</li>
							<li>• shadcn/ui コンポーネント</li>
							<li>• Biome (Linting & Formatting)</li>
						</ul>
					</div>

					<div
						className={css({
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							padding: { base: "4", md: "6" },
							borderRadius: "lg",
							backdropFilter: "blur(10px)",
						})}
					>
						<h3
							className={css({
								fontSize: { base: "lg", md: "xl" },
								fontWeight: "semibold",
								marginBottom: "3",
							})}
						>
							✨ 主な機能
						</h3>
						<ul
							className={css({
								fontSize: "sm",
								lineHeight: "relaxed",
								opacity: "0.9",
							})}
						>
							<li>• メール・パスワード認証</li>
							<li>• ユーザー登録・ログイン</li>
							<li>• 認証保護されたダッシュボード</li>
							<li>• レスポンシブデザイン</li>
							<li>• Docker対応（PostgreSQL）</li>
							<li>• Vercel デプロイ対応</li>
							<li>• 拡張可能なアーキテクチャ</li>
						</ul>
					</div>
				</div>

				<section
					className={css({
						backgroundColor: "rgba(255, 255, 255, 0.1)",
						padding: { base: "4", md: "6" },
						borderRadius: "lg",
						backdropFilter: "blur(10px)",
						marginBottom: { base: "6", md: "8" },
					})}
				>
					<h3
						className={css({
							fontSize: { base: "lg", md: "xl" },
							fontWeight: "semibold",
							marginBottom: "4",
						})}
					>
						🔧 セットアップ手順
					</h3>
					<div
						className={css({
							fontSize: "sm",
							lineHeight: "relaxed",
							opacity: "0.9",
						})}
					>
						<ol
							className={css({
								listStyleType: "decimal",
								paddingLeft: "4",
								gap: "2",
								display: "flex",
								flexDirection: "column",
							})}
						>
							<li>
								<strong>依存関係のインストール:</strong>{" "}
								<code>npm install</code>
							</li>
							<li>
								<strong>データベース起動:</strong>{" "}
								<code>docker-compose up postgres -d</code>
							</li>
							<li>
								<strong>環境変数設定:</strong> <code>.env.example</code> を{" "}
								<code>.env</code> にコピー
							</li>
							<li>
								<strong>データベースセットアップ:</strong>{" "}
								<code>npm run db:push</code>
							</li>
							<li>
								<strong>開発サーバー起動:</strong> <code>npm run dev</code>
							</li>
						</ol>
					</div>
				</section>

				<div
					className={css({
						display: "flex",
						justifyContent: "center",
						gap: "4",
						flexWrap: "wrap",
					})}
				>
					<Link
						href="/signup"
						className={css({
							backgroundColor: "white",
							color: "#667eea",
							padding: { base: "3 6", md: "4 8" },
							borderRadius: "lg",
							fontWeight: "semibold",
							fontSize: { base: "sm", md: "base" },
							textDecoration: "none",
							transition: "all 0.2s",
							boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
							_hover: {
								transform: "translateY(-2px)",
								boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
							},
						})}
					>
						新規登録
					</Link>
					<Link
						href="/signin"
						className={css({
							backgroundColor: "transparent",
							color: "white",
							padding: { base: "3 6", md: "4 8" },
							borderRadius: "lg",
							fontWeight: "semibold",
							fontSize: { base: "sm", md: "base" },
							textDecoration: "none",
							border: "2px solid white",
							transition: "all 0.2s",
							_hover: {
								backgroundColor: "white",
								color: "#667eea",
								transform: "translateY(-2px)",
							},
						})}
					>
						ログイン
					</Link>
					<Link
						href="/dashboard"
						className={css({
							backgroundColor: "rgba(255, 255, 255, 0.2)",
							color: "white",
							padding: { base: "3 6", md: "4 8" },
							borderRadius: "lg",
							fontWeight: "semibold",
							fontSize: { base: "sm", md: "base" },
							textDecoration: "none",
							border: "1px solid rgba(255, 255, 255, 0.3)",
							transition: "all 0.2s",
							_hover: {
								backgroundColor: "rgba(255, 255, 255, 0.3)",
								transform: "translateY(-2px)",
							},
						})}
					>
						デモを見る
					</Link>
				</div>
			</div>
		</main>
	);
}
