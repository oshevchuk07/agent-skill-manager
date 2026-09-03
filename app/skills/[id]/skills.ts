type Skill = {
  id: string;
  name: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string; 
}

export const SKILLS: Skill[] = [
  {
    id: "1",
    name: "Code Review",
    description: "Analyze code for correctness, maintainability, and potential improvements.",
    category: "Development",
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    name: "Technical Writing",
    description: "Create clear, concise documentation, guides, and API references.",
    category: "Communication",
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "3",
    name: "Data Analysis",
    description: "Interpret datasets, identify trends, and summarize actionable insights.",
    category: "Analytics",
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
  },
]