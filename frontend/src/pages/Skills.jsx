import { useEffect, useState } from "react";
import { getSkills, addSkill } from "../services/api";
import SkillCard from "../components/SkillCard";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", teacher: "" });

  useEffect(() => {
    getSkills().then(res => setSkills(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addSkill(form);
    setSkills([...skills, res.data]);
    setForm({ name: "", description: "", teacher: "" });
  };

  return (
    <div>
      <h2>Available Skills</h2>
      {skills.map(skill => <SkillCard key={skill._id} skill={skill} />)}

      <h3>Add a New Skill</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <input
          placeholder="Teacher"
          value={form.teacher}
          onChange={e => setForm({ ...form, teacher: e.target.value })}
        />
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}

export default Skills;
