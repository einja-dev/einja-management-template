module.exports = {
	// Biomeによるリントとフォーマット（CLAUDE.md、docs/specs/を除外）
	"**/*.{js,jsx,ts,tsx,json}": (filenames) => {
		const filteredFiles = filenames.filter(
			(filename) =>
				!filename.includes("CLAUDE.md") &&
				!filename.includes(".claude/") &&
				!filename.includes("docs/specs/"),
		);
		if (filteredFiles.length === 0) return [];
		return ["pnpm lint:fix", "pnpm format:fix"];
	},
	"**/*.md": (filenames) => {
		// CLAUDE.md、.claudeディレクトリ、docs/specs/を除外
		const filteredFiles = filenames.filter(
			(filename) =>
				!filename.includes("CLAUDE.md") &&
				!filename.includes(".claude/") &&
				!filename.includes("docs/specs/"),
		);
		if (filteredFiles.length === 0) return [];
		return ["pnpm lint:fix", "pnpm format:fix"];
	},
};
