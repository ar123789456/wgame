import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = '8080'

app.get('/', (req, res) => {
  // Send index.html file
  res.sendFile(__dirname + '/pages/index.html');
});

// serve static files
app.use(express.static('pages'));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});