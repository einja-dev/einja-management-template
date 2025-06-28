import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { css } from "../../../styled-system/css";
import { hstack, vstack } from "../../../styled-system/patterns";

export default async function DashboardPage() {
	const session = await auth();

	if (!session) {
		redirect("/signin");
	}

	return (
		<div
			className={css({
				minHeight: "100vh",
				background:
					"linear-gradient(135deg, {colors.gray.50} 0%, {colors.blue.50} 100%)",
			})}
		>
			<DashboardHeader user={session.user} />

			<main
				className={css({
					maxWidth: "7xl",
					margin: "0 auto",
					padding: {
						base: "1.5rem 1rem",
						md: "2rem 1.5rem",
						lg: "2.5rem 2rem",
					},
				})}
			>
				<div className={vstack({ gap: "2rem", alignItems: "stretch" })}>
					{/* ページタイトル */}
					<div className={vstack({ gap: "0.75rem", alignItems: "flex-start" })}>
						<h1
							className={css({
								fontSize: { base: "2xl", md: "3xl" },
								fontWeight: "bold",
								color: "{colors.gray.900}",
								lineHeight: "tight",
							})}
						>
							ダッシュボード
						</h1>
						<p
							className={css({
								fontSize: { base: "base", md: "lg" },
								color: "{colors.gray.600}",
								lineHeight: "relaxed",
							})}
						>
							ようこそ、{session.user?.name || session.user?.email}さん
						</p>
					</div>

					{/* 統計情報カード */}
					<DashboardStats />

					{/* メインコンテンツエリア */}
					<div
						className={css({
							display: "grid",
							gridTemplateColumns: { base: "1fr", lg: "2fr 1fr" },
							gap: "2rem",
						})}
					>
						{/* 左側：メインダッシュボード */}
						<div className={vstack({ gap: "1.5rem" })}>
							<div
								className={css({
									background: "white",
									borderRadius: "lg",
									padding: { base: "1.25rem", md: "1.5rem", lg: "2rem" },
									boxShadow: "sm",
									border: "1px solid {colors.gray.200}",
								})}
							>
								<h2
									className={css({
										fontSize: { base: "lg", md: "xl" },
										fontWeight: "semibold",
										color: "{colors.gray.900}",
										marginBottom: "1.25rem",
									})}
								>
									最近のアクティビティ
								</h2>
								<div className={vstack({ gap: "0.75rem" })}>
									{Array.from({ length: 5 }).map((_, i) => (
										<div
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={i}
											className={hstack({
												gap: "0.75rem",
												padding: "0.75rem",
												background: "{colors.gray.50}",
												borderRadius: "md",
											})}
										>
											<div
												className={css({
													width: "2rem",
													height: "2rem",
													background: "{colors.blue.500}",
													borderRadius: "50%",
													flexShrink: 0,
												})}
											/>
											<div
												className={vstack({
													gap: "0.25rem",
													alignItems: "flex-start",
												})}
											>
												<p
													className={css({
														fontSize: "sm",
														fontWeight: "medium",
														color: "{colors.gray.900}",
													})}
												>
													サンプルアクティビティ {i + 1}
												</p>
												<p
													className={css({
														fontSize: "xs",
														color: "{colors.gray.500}",
													})}
												>
													{i + 1}分前
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* 右側：サイドバー */}
						<div className={vstack({ gap: "1.5rem" })}>
							<div
								className={css({
									background: "white",
									borderRadius: "lg",
									padding: { base: "1.25rem", md: "1.5rem" },
									boxShadow: "sm",
									border: "1px solid {colors.gray.200}",
								})}
							>
								<h3
									className={css({
										fontSize: { base: "base", md: "lg" },
										fontWeight: "semibold",
										color: "{colors.gray.900}",
										marginBottom: "1.25rem",
									})}
								>
									クイックアクション
								</h3>
								<div className={vstack({ gap: "0.75rem" })}>
									{[
										"新規プロジェクト作成",
										"レポート生成",
										"設定変更",
										"ヘルプ・サポート",
									].map((action, i) => (
										<button
											type="button"
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={i}
											className={css({
												width: "100%",
												padding: "0.75rem",
												background: "{colors.blue.50}",
												border: "1px solid {colors.blue.200}",
												borderRadius: "md",
												fontSize: "sm",
												fontWeight: "medium",
												color: "{colors.blue.700}",
												cursor: "pointer",
												transition: "all 0.2s",
												_hover: {
													background: "{colors.blue.100}",
													borderColor: "{colors.blue.300}",
												},
											})}
										>
											{action}
										</button>
									))}
								</div>
							</div>

							<div
								className={css({
									background: "white",
									borderRadius: "lg",
									padding: { base: "1.25rem", md: "1.5rem" },
									boxShadow: "sm",
									border: "1px solid {colors.gray.200}",
								})}
							>
								<h3
									className={css({
										fontSize: { base: "base", md: "lg" },
										fontWeight: "semibold",
										color: "{colors.gray.900}",
										marginBottom: "1.25rem",
									})}
								>
									システム状態
								</h3>
								<div className={vstack({ gap: "0.75rem" })}>
									<div
										className={hstack({
											gap: "0.5rem",
											justifyContent: "space-between",
										})}
									>
										<span
											className={css({
												fontSize: "sm",
												color: "{colors.gray.600}",
											})}
										>
											サーバー
										</span>
										<span
											className={css({
												fontSize: "xs",
												fontWeight: "medium",
												color: "{colors.green.600}",
												background: "{colors.green.100}",
												padding: "0.25rem 0.5rem",
												borderRadius: "full",
											})}
										>
											正常
										</span>
									</div>
									<div
										className={hstack({
											gap: "0.5rem",
											justifyContent: "space-between",
										})}
									>
										<span
											className={css({
												fontSize: "sm",
												color: "{colors.gray.600}",
											})}
										>
											データベース
										</span>
										<span
											className={css({
												fontSize: "xs",
												fontWeight: "medium",
												color: "{colors.green.600}",
												background: "{colors.green.100}",
												padding: "0.25rem 0.5rem",
												borderRadius: "full",
											})}
										>
											正常
										</span>
									</div>
									<div
										className={hstack({
											gap: "0.5rem",
											justifyContent: "space-between",
										})}
									>
										<span
											className={css({
												fontSize: "sm",
												color: "{colors.gray.600}",
											})}
										>
											最終更新
										</span>
										<span
											className={css({
												fontSize: "xs",
												color: "{colors.gray.500}",
											})}
										>
											1分前
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
