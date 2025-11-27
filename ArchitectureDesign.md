Architecture Design Document1. High-Level ArchitectureThe application is a Client-Side Single Page Application (SPA) built with React. It utilizes client-side state management to handle routing (view switching) to ensure instant transitions without page reloads.2. Tech StackFramework: React 18+Build Tool: Vite (for fast HMR and optimized production builds)Styling: Tailwind CSS (Utility-first for rapid UI development and theming)Icons: Lucide React (Lightweight, consistent SVG icons)Deployment: Vercel (CI/CD integration with GitHub)3. Directory StructureRefactoring the prototype into a scalable structure:/src
  /assets        # Images, PDFs (Resume)
  /components    # Reusable UI components
    /ui          # Buttons, Cards, Inputs
    /layout      # Navbar, Footer
  /data          # JSON files for structured data
    experience.js
    projects.js
    personalInfo.js
  /hooks         # Custom hooks (useTheme, useScroll)
  /pages         # Main view components
    Home.jsx
    Projects.jsx
    Resume.jsx
    Contact.jsx
  App.jsx        # Main entry point & Router logic
4. Data ModelData is decoupled from the UI to allow easy updates without touching code logic.Example projects.js Schema:{
  "id": "string",
  "title": "string",
  "category": "Professional | Academic",
  "description": "string",
  "tags": ["string"],
  "image": "path/to/image",
  "link": "url (optional)"
}
5. Theming EngineStrategy: CSS Variable / Tailwind Config approach or State-based Class switching.Implementation: A ThemeContext provider wraps the application.State: theme: 'forest' | 'bright'Persistence: localStorage to remember user preference on reload.6. Security & PerformanceSecurity: No sensitive data stored. Input sanitization on contact forms (if backend added).Performance:Lazy loading for images.Code splitting for routes (if moving to React Router later).Asset optimization (WebP images).