"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { DataTable } from "./data-table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./dropdown-menu";
import { H2, H3 } from "./typography";

// サンプルデータの型定義
type User = {
	id: string;
	name: string;
	email: string;
	status: "active" | "inactive" | "pending";
	role: "admin" | "user" | "moderator";
	lastLogin: string;
	createdAt: string;
};

// サンプルデータ
const sampleUsers: User[] = [
	{
		id: "1",
		name: "田中太郎",
		email: "tanaka@example.com",
		status: "active",
		role: "admin",
		lastLogin: "2024-01-15",
		createdAt: "2023-06-01",
	},
	{
		id: "2",
		name: "佐藤花子",
		email: "sato@example.com",
		status: "active",
		role: "user",
		lastLogin: "2024-01-14",
		createdAt: "2023-07-15",
	},
	{
		id: "3",
		name: "鈴木一郎",
		email: "suzuki@example.com",
		status: "inactive",
		role: "moderator",
		lastLogin: "2024-01-10",
		createdAt: "2023-08-20",
	},
	{
		id: "4",
		name: "高橋美咲",
		email: "takahashi@example.com",
		status: "pending",
		role: "user",
		lastLogin: "2024-01-13",
		createdAt: "2024-01-01",
	},
	{
		id: "5",
		name: "伊藤健",
		email: "ito@example.com",
		status: "active",
		role: "user",
		lastLogin: "2024-01-16",
		createdAt: "2023-09-10",
	},
];

// ステータスのバッジコンポーネント
const StatusBadge = ({ status }: { status: User["status"] }) => {
	const statusConfig = {
		active: { label: "アクティブ", variant: "default" as const },
		inactive: { label: "非アクティブ", variant: "secondary" as const },
		pending: { label: "保留中", variant: "outline" as const },
	};

	const config = statusConfig[status];
	return <Badge variant={config.variant}>{config.label}</Badge>;
};

// 役割のバッジコンポーネント
const RoleBadge = ({ role }: { role: User["role"] }) => {
	const roleConfig = {
		admin: { label: "管理者", variant: "destructive" as const },
		moderator: { label: "モデレーター", variant: "default" as const },
		user: { label: "ユーザー", variant: "secondary" as const },
	};

	const config = roleConfig[role];
	return <Badge variant={config.variant}>{config.label}</Badge>;
};

// カラム定義
const columns: ColumnDef<User>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="全て選択"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="行を選択"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					名前
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="font-medium">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					メールアドレス
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
	},
	{
		accessorKey: "status",
		header: "ステータス",
		cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
	},
	{
		accessorKey: "role",
		header: "役割",
		cell: ({ row }) => <RoleBadge role={row.getValue("role")} />,
	},
	{
		accessorKey: "lastLogin",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					最終ログイン
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			return <div>{row.getValue("lastLogin")}</div>;
		},
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					作成日
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			return <div>{row.getValue("createdAt")}</div>;
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const user = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">メニューを開く</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>操作</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(user.id)}
						>
							IDをコピー
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>詳細を表示</DropdownMenuItem>
						<DropdownMenuItem>編集</DropdownMenuItem>
						<DropdownMenuItem className="text-destructive">
							削除
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

export function DataTableExamples() {
	return (
		<div className="container mx-auto py-10">
			<div className="space-y-8">
				<div>
					<H2>TanStack Table + shadcn/ui</H2>
					<p className="text-muted-foreground">
						TanStack
						Tableとshadcn/uiを組み合わせた高機能なデータテーブルの例です。
					</p>
				</div>

				<div className="space-y-4">
					<H3>ユーザー管理テーブル</H3>
					<DataTable
						columns={columns}
						data={sampleUsers}
						searchKey="name"
						searchPlaceholder="名前で検索..."
						enableColumnVisibility={true}
						enablePagination={true}
						pageSize={5}
					/>
				</div>

				<div className="space-y-4">
					<H3>シンプルテーブル（ページネーションなし）</H3>
					<DataTable
						columns={columns.filter(
							(col) => col.id !== "select" && col.id !== "actions",
						)}
						data={sampleUsers.slice(0, 3)}
						enableColumnVisibility={false}
						enablePagination={false}
					/>
				</div>

				<div className="space-y-4">
					<H3>機能説明</H3>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<div className="space-y-2">
							<h4 className="font-semibold">ソート機能</h4>
							<p className="text-sm text-muted-foreground">
								ヘッダーをクリックして昇順・降順でソートできます。
							</p>
						</div>
						<div className="space-y-2">
							<h4 className="font-semibold">フィルター機能</h4>
							<p className="text-sm text-muted-foreground">
								検索ボックスで特定の列の値をフィルターできます。
							</p>
						</div>
						<div className="space-y-2">
							<h4 className="font-semibold">カラム表示切替</h4>
							<p className="text-sm text-muted-foreground">
								「列」ボタンから表示するカラムを選択できます。
							</p>
						</div>
						<div className="space-y-2">
							<h4 className="font-semibold">行選択</h4>
							<p className="text-sm text-muted-foreground">
								チェックボックスで個別または全選択が可能です。
							</p>
						</div>
						<div className="space-y-2">
							<h4 className="font-semibold">ページネーション</h4>
							<p className="text-sm text-muted-foreground">
								大量データを分割して表示できます。
							</p>
						</div>
						<div className="space-y-2">
							<h4 className="font-semibold">アクションメニュー</h4>
							<p className="text-sm text-muted-foreground">
								各行に対する操作メニューを提供できます。
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
