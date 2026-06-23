export default function TaskForm({ taskText, onTaskTextChange, onSubmitTask, onCancel }) {
  return (
    <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '24px', backgroundColor: '#eef2ff', border: '1px solid #dbeafe' }}>
      <label htmlFor="task-input" style={{ display: 'block', marginBottom: '0.75rem', color: '#1f2937', fontWeight: 700 }}>
        Nueva tarea
      </label>
      <input
        id="task-input"
        value={taskText}
        onChange={(event) => onTaskTextChange(event.target.value)}
        placeholder="Describe tu tarea..."
        style={{ width: '100%', padding: '0.95rem 1rem', borderRadius: '16px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', boxShadow: 'inset 0 1px 3px rgba(15,23,42,0.08)' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.25rem', justifyContent: 'flex-end' }}>
        <button onClick={onSubmitTask} style={{ flex: '1 1 120px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.95rem 1.25rem', borderRadius: '16px', border: 'none', backgroundColor: '#4f46e5', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>
          <span>✔️</span>
          Agregar
        </button>
        <button onClick={onCancel} style={{ flex: '1 1 120px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.95rem 1.25rem', borderRadius: '16px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', color: '#374151', fontWeight: 700, cursor: 'pointer' }}>
          <span>✖️</span>
          Cancelar
        </button>
      </div>
    </div>
  );
}
