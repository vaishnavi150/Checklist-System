const express = require('express');
const app = express();
const checklistRoutes = require('./routes/checklist');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/checklist', checklistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
