const express = require('express');
const actions = require('./actions');
const bodyParser = require('body-parser');

const app = express();
const publicweb = 'public';

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);

app.post('/sendquote', actions.sendquote);

app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

// When hosted by an Azure Webapp service, NodeJS is executed by Microsoft IIS and communicates to it using
// a named pipe. The PORT environment variable in this case is the pipe name.
const port = process.env.PORT || '3000';

app.listen(port, () => console.log(`Server running at localhost:${port}`));
