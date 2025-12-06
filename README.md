# Math Clutch - Vector Mastery Study Suite

A comprehensive Next.js web application for studying MA 261 (Vector Calculus) with interactive modules, quizzes, and exam simulators.

## Features

- **6 Deep Dive Modules**: Comprehensive study materials covering vectors, lines/planes, vector functions, optimization, integrals, and vector theorems
- **Practice Quizzes**: Untimed quizzes for each module with instant feedback
- **Exam Simulator**: Timed exams (Midterm 1, Midterm 2, Final) with countdown timer
- **Interactive 3D Visualizations**: Plotly.js-powered geometry lab for visualizing lines, planes, and quadric surfaces
- **Math Rendering**: KaTeX for beautiful LaTeX math equation rendering
- **Responsive Design**: Mobile-friendly interface with collapsible sidebar

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Plotly.js** - 3D visualization library
- **KaTeX** - Math rendering engine

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/          # React components
│   ├── modules/        # Individual module components
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── QuizView.tsx    # Quiz component
│   └── ExamView.tsx    # Exam component
├── data/               # Data files
│   ├── modules.ts      # Module definitions
│   ├── quizzes.ts     # Quiz questions
│   └── exams.ts       # Exam questions
└── hooks/              # Custom React hooks
    └── useMathRender.ts # Math rendering hook
```

## Build for Production

```bash
npm run build
npm start
```

