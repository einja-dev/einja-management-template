module.exports = {
	// TypeScriptファイルの型チェック
	"**/*.{ts,tsx}": () => "npm run typecheck",

	// Biomeによるリントとフォーマット
	"**/*.{js,jsx,ts,tsx,json,md}": ["npm run lint:fix", "npm run format:fix"],
};
