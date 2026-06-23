import { useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';

export default function App() {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [isTaskListOpen, setIsTaskListOpen] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const openTaskForm = () => {
    setIsTaskListOpen(false);
    setIsTaskFormOpen(true);
  };

  const closeTaskForm = () => {
    setTaskText('');
    setIsTaskFormOpen(false);
  };

  const toggleTaskList = () => {
    setIsTaskFormOpen(false);
    setIsTaskListOpen((current) => !current);
  };

  const submitTask = () => {
    const trimmedText = taskText.trim();
    if (!trimmedText) return;
    setTasks((current) => [...current, trimmedText]);
    setTaskText('');
    setIsTaskFormOpen(false);
    setIsTaskListOpen(true);
  };

  const deleteTask = (taskIndex) => {
    setTasks((current) => current.filter((_, index) => index !== taskIndex));
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', margin: 0, minHeight: '100vh', backgroundColor: '#eef2ff', color: '#111827' }}>
      <header style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', color: '#fff', padding: '2rem 1rem', textAlign: 'center', boxShadow: '0 20px 60px rgba(99,102,241,0.18)' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '0.05em' }}>Todoist</h1>
        <p style={{ margin: '0.75rem auto 0', maxWidth: '560px', fontSize: '1rem', opacity: 0.85 }}>
          Organiza tus tareas con estilo y encuentra rápidamente lo que necesitas.
        </p>
      </header>

      <main style={{ padding: '3rem 1rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '760px', background: '#ffffff', borderRadius: '32px', padding: '2rem', boxShadow: '0 20px 50px rgba(15,23,42,0.08)' }}>
          <section style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Comienza con tu lista</h2>
            <p style={{ margin: '0.75rem auto 0', maxWidth: '580px', color: '#4b5563', lineHeight: 1.75 }}>
              Usa los botones para agregar tareas nuevas, revisar lo ya creado y ajustar tus preferencias.
            </p>
          </section>

          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
            <button onClick={openTaskForm} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1rem 1.25rem', borderRadius: '18px', border: 'none', backgroundColor: '#4f46e5', color: '#ffffff', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.18s ease, box-shadow 0.18s ease' }}>
              <span style={{ display: 'inline-flex', width: '2rem', height: '2rem', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.18)' }}>
                +
              </span>
              Agregar tarea
            </button>

            <button onClick={toggleTaskList} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1rem 1.25rem', borderRadius: '18px', border: '1px solid #e5e7eb', backgroundColor: '#f8fafc', color: '#111827', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.18s ease, box-shadow 0.18s ease' }}>
              <span style={{ display: 'inline-flex', width: '2rem', height: '2rem', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', backgroundColor: '#eef2ff', color: '#3730a3' }}>
                👀
              </span>
              Ver tarea
            </button>

            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1rem 1.25rem', borderRadius: '18px', border: '1px solid transparent', backgroundColor: '#e0e7ff', color: '#3730a3', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.18s ease, box-shadow 0.18s ease' }}>
              <span style={{ display: 'inline-flex', width: '2rem', height: '2rem', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', backgroundColor: '#c7d2fe', color: '#1e3a8a' }}>
                ⚙️
              </span>
              Opciones
            </button>
          </div>

          {isTaskFormOpen && (
            <TaskForm
              taskText={taskText}
              onTaskTextChange={setTaskText}
              onSubmitTask={submitTask}
              onCancel={closeTaskForm}
            />
          )}

          {isTaskListOpen && <TaskList tasks={tasks} onDeleteTask={deleteTask} />}
        </div>
      </main>
    </div>
  );
}
