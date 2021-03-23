const express = require('express');
const app = express();


app.use('/servicio/api_notes_app/users', require('./user'));

app.use('/servicio/api_notes_app/notes', require('./note'));

app.use('/notes-app-check', (req, res) => {
    res.json({
        ok: 'true',
        message: 'Deploy is working',
    });
});

module.exports = app;

// servicio/api_notes_app/users(para la sección de Usuarios)
// servicio/api_notes_app/notes (para la sección de Notas)