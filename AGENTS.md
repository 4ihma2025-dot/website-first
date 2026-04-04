# Repository Guidelines

## Project Structure & Module Organization
This repository is a static website for **CY BOTAX & PARTNERS**, built with a custom Single-Page-Application (SPA) architecture. `index.html` serves as the primary shell, while specific page content (e.g., `home.html`, `contact.html`, `corporate.html`) are dynamically injected into the `#app` container using the `loadPage` function in [./script.js](./script.js). Shared components like [./navbar.html](./navbar.html) and [./footer.html](./footer.html) are similarly loaded via AJAX/Fetch to ensure UI consistency.

## Build, Test, and Development Commands
As a static site, there is no formal build process. Local development requires a web server to support dynamic file fetching:
- `npx http-server . -p 8080`: Start a local development server (recommended).

## Coding Style & Naming Conventions
- **JavaScript**: Use camelCase for functions and general variables; use PascalCase or ALL_CAPS for global constants (e.g., `EMAILJS_PUBLIC_KEY`).
- **HTML**: Modular fragments should omit boilerplate tags (`<html>`, `<head>`, `<body>`) as they are injected into the main container.
- **CSS**: Enforce visual states via class toggles (e.g., `.scrolled`, `.dark-mode`, `.reveal`, `.show`).
- **Assets**: Audio files (`cash.mp3`, `coin.mp3`) are used for professional UI sound effects.

## Testing Guidelines
There is no automated test suite. Manual verification is required for:
- **Navigation**: Verify smooth page transitions and URL hash updates.
- **Form Submission**: Test the contact form integration with EmailJS (requires valid keys in `script.js`).
- **Responsive Design**: Ensure mobile menu toggles and layout adjustments work correctly.
- **Dark Mode**: Toggle theme via UI and verify persistence in `localStorage`.

## Commit & Pull Request Guidelines
Commit messages should be concise and direct. Follow the existing pattern of using uppercase for significant updates or feature additions:
- `UPDATE [Component Name]`
- `FIX [Issue Description]`
- `NEW FEATURE - [Feature Name]`
- `CLAUDE FIX` for AI-assisted corrections.
Avoid overly verbose messages unless documenting complex logic changes.
