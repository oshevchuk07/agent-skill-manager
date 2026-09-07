
import { SKILLS } from "./skills";

// type SkillPageProps = {
//   params: {
//     id: string;
//   };
// };

// export default async function SkillItemPage({ params }: SkillPageProps) {
export default async function SkillItemPage(props: PageProps<'/skills/[id]'>) {
  const { id } = await props.params;
  const skill = SKILLS.find((skill) => skill.id === id);

  if (!skill) {
    return <div>Skill not found</div>;
  }

  return (
    <article>
      <h1>{skill?.name}</h1>
      <p>{skill?.description}</p>
      <p>{skill?.category}</p>
      <p>{skill?.createdAt}</p>
      <p>{skill?.updatedAt}</p>
    </article>
  );
}
