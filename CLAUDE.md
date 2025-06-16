# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core development commands:
- `npm run dev` - Start development server with Turbopack (clears .next cache first)
- `npm run build` - Production build (runs Panda CSS codegen first)
- `npm run start` - Start production server
- `npm run storybook` - Start Storybook development server on port 6006

### Code quality commands:
- `npm run lint` - Check code with Biome linter
- `npm run lint:fix` - Auto-fix linting issues with Biome
- `npm run format` - Check code formatting with Biome
- `npm run format:fix` - Auto-format code with Biome
- `npm run typecheck` - TypeScript type checking

### Testing:
- Tests run via Vitest with Storybook integration
- Browser testing uses Playwright with Chromium
- Setup files located in `.storybook/vitest.setup.ts`

## Architecture

### Styling System:
- **Panda CSS** for styling with design tokens and recipes
- CSS-in-JS with type-safe style generation
- Styled components output to `styled-system/` directory
- Custom breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1440px)

### Code Quality:
- **Biome** for linting and formatting (tab indentation, double quotes)
- Husky pre-commit hooks with lint-staged
- Ignores `styled-system/` directory in formatting/linting

### Framework Setup:
- Next.js 15 with App Router
- React 19
- TypeScript with strict type checking
- Volta for Node.js version management (v22.16.0)

### Special Notes:
- Always run `panda codegen` before building for production
- Biome uses tab indentation and double quotes
- ESLint is disabled during builds (using Biome instead)