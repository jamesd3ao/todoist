export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '24px', backgroundColor: '#f8fafc', border: '1px solid #e5e7eb' }}>
      <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#111827' }}>Tareas agregadas</h3>
      {tasks.length === 0 ? (
        <p style={{ marginTop: '0.85rem', color: '#6b7280' }}>No hay tareas agregadas aún.</p>
      ) : (
        <ul style={{ marginTop: '1rem', padding: 0, listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
          {tasks.map((task, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#ffffff', padding: '1rem 1.25rem', borderRadius: '18px', border: '1px solid #e5e7eb', color: '#111827', boxShadow: '0 8px 20px rgba(15,23,42,0.05)' }}>
              <span>{task}</span>
              <button onClick={() => onDeleteTask(index)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '999px', border: 'none', backgroundColor: '#fee2e2', color: '#dc2626', cursor: 'pointer', fontSize: '1rem' }} aria-label="Eliminar tarea">
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
