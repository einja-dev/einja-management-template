module.exports = {
	// TypeScriptファイルの型チェック
	"**/*.{ts,tsx}": () => "npm run typecheck",

	// Biomeによるリントとフォーマット（CLAUDE.mdを除外）
	"**/*.{js,jsx,ts,tsx,json}": ["npm run lint:fix", "npm run format:fix"],
	"**/*.md": (filenames) => {
		// CLAUDE.md、.claudeディレクトリ、docs/specs/を除外
		const filteredFiles = filenames.filter(
			(filename) =>
				!filename.includes("CLAUDE.md") &&
				!filename.includes(".claude/") &&
				!filename.includes("docs/specs/"),
		);
		if (filteredFiles.length === 0) return [];
		return [
			`npm run lint:fix ${filteredFiles.join(" ")}`,
			`npm run format:fix ${filteredFiles.join(" ")}`,
		];
	},
};
