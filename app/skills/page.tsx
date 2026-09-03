import Link from "next/link";
import { SKILLS } from "./[id]/skills";

export default function SkillsPage() {
  const skills = SKILLS;

  return (
    <div>
      <h1>Skills list</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <Link href={`/skills/${skill.id}`}>{skill.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
