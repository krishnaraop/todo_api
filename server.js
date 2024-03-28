const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.json());

// Mock database for storing tasks
let tasks = [];

// Routes
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).send('Task added successfully');
});

app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  tasks[taskId] = updatedTask;
  res.send('Task updated successfully');
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks.splice(taskId, 1);
  res.send('Task deleted successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
