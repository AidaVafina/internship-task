const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.get('/analytics', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'analytics.html'));
});

app.post('/api/update-status', (req, res) => {
    const { status } = req.body;
    console.log(`Статус обновлен на: ${status}`);
    res.json({ status: `Статус успешно обновлен на: ${status}` });
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Данные успешно получены' });
});

app.use((req, res) => {
    console.log(`Маршрут не найден: ${req.originalUrl}`);
    res.status(404).sendFile(path.join(__dirname, 'public', 'error.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});
