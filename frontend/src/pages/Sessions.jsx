import { useEffect, useState } from "react";
import { getSessions, addSession } from "../services/api";

function Sessions() {
  const [sessions, setSessions] = useState([]);
  const [form, setForm] = useState({ topic: "", date: "", student: "", teacher: "" });

  useEffect(() => {
    getSessions().then(res => setSessions(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addSession(form);
    setSessions([...sessions, res.data]);
    setForm({ topic: "", date: "", student: "", teacher: "" });
  };

  return (
    <div>
      <h2>Sessions</h2>
      {sessions.map(session => (
        <div key={session._id}>
          <h3>{session.topic}</h3>
          <p>Date: {new Date(session.date).toLocaleDateString()}</p>
          <p>Teacher: {session.teacher}</p>
          <p>Student: {session.student}</p>
        </div>
      ))}

      <h3>Book a Session</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Topic"
          value={form.topic}
          onChange={e => setForm({ ...form, topic: e.target.value })}
        />
        <input
          type="date"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
        />
        <input
          placeholder="Student"
          value={form.student}
          onChange={e => setForm({ ...form, student: e.target.value })}
        />
        <input
          placeholder="Teacher"
          value={form.teacher}
          onChange={e => setForm({ ...form, teacher: e.target.value })}
        />
        <button type="submit">Book Session</button>
      </form>
    </div>
  );
}

export default Sessions;
