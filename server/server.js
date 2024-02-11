const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const filePath = path.join(__dirname, 'machineConfiguration.json');

app.use(cors());
app.use(express.json()); // !! ╰（‵□′）╯

// Отправка данных
app.get('/api/configurations', async (req, res) => {
  try {
    const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'a+' });
    const configurations = data ? JSON.parse(data) : {};

    res.json(configurations);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при чтении файла конфигураций', error: err.message });
  }
});

// Сохранение новой конфигурации
app.post('/api/save', (req, res) => {
  const newConfiguration = req.body;

  try {
    if (!newConfiguration) {
      return res.sendStatus(400);
    }

    // Перезаписываем файл новыми данными
    fs.writeFileSync(filePath, JSON.stringify(newConfiguration, null, 2), 'utf8');

    res.status(201).send('Конфигурация успешно сохранена.');
  } catch (error) {
    console.error('Ошибка при сохранении конфигурации:', error);
    res.status(500).send('Ошибка при сохранении конфигурации.');
  }
});

app.listen(PORT, () => {
  console.log(`Server start at http://localhost:${PORT}`);
});
