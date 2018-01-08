const express = require('express');

const app = express();
const publicweb = 'public';

app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);

app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

// When hosted by an Azure Webapp service, NodeJS is executed by Microsoft IIS and communicates to it using
// a named pipe. The PORT environment variable in this case is the pipe name.
const port = process.env.PORT || '8080';

app.listen(port, () => console.log(`Server running at localhost:${port}`));
