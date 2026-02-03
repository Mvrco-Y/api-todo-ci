// GET /stats - Statistiques
app.get('/stats', (req, res) => {
const completed = todos.filter(t => t.completed).length;
const active = todos.filter(t => !t.completed).length;
res.json({
total: todos.length,
completed: completed,
active: active,
completion_rate: todos.length > 0
? Math.round((completed / todos.length) * 100)
: 0
});
});