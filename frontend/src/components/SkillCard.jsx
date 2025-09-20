function SkillCard({ skill }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
      <small>Teacher: {skill.teacher}</small>
    </div>
  );
}

export default SkillCard;
