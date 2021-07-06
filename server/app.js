const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.json({ message: 'Welcome home' });
});

app.listen(5505, () => console.log('server listening on port 5505'));
