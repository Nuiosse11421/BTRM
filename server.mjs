import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8000;

// Serve static files from the React app
app.use(express.static(join(__dirname, 'client/build')));

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Endpoint to provide data to the React app
app.get('/api', (req, res) => {
  res.json({ "users": ["user1", "user2", "user3"] });
});

// Serve the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(join(__dirname+'/client/build/index.html'));
});
app.listen(8000,()=>{
    console.log("listening on http://localhost:8000")
})