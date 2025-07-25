import { cleanup } from "@testing-library/react";
import { afterEach, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

// Next.jsの設定モック
Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

afterEach(() => {
	cleanup();
});
