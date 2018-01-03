// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/api/1', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/1.jpg'))
});
app.get('/api/2', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/2.jpg'))
});
app.get('/api/3', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/3.jpg'))
});
app.get('/api/4', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/4.jpg'))
});
app.get('/api/5', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/5.jpg'))
});
app.get('/api/6', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/6.jpg'))
});
app.get('/api/7', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/7.jpg'))
});
app.get('/api/8', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/8.jpg'))
});
app.get('/api/9', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/9.jpg'))
});
app.get('/api/10', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/10.jpg'))
});
app.get('/api/11', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/11.jpg'))
});
app.get('/api/12', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/12.jpg'))
});
app.get('/api/13', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/13.jpg'))
});
app.get('/api/14', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/14.jpg'))
});
app.get('/api/15', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/15.jpg'))
});
app.get('/api/16', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/16.jpg'))
});
app.get('/api/17', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/17.jpg'))
});
app.get('/api/18', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/18.jpg'))
});
app.get('/api/19', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/19.jpg'))
});
app.get('/api/20', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/20.jpg'))
});
app.get('/api/21', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/21.jpg'))
});
app.get('/api/22', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/22.jpg'))
});
app.get('/api/23', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/23.jpg'))
});
app.get('/api/24', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/24.jpg'))
});
app.get('/api/25', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/25.jpg'))
});
app.get('/api/26', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/26.jpg'))
});
app.get('/api/27', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/27.jpg'))
});
app.get('/api/28', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/28.jpg'))
});
app.get('/api/29', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/29.jpg'))
});
app.get('/api/30', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/30.jpg'))
});
app.get('/api/31', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/31.jpg'))
});
app.get('/api/32', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/32.jpg'))
});
app.get('/api/33', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/33.jpg'))
});
app.get('/api/34', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/34.jpg'))
});
app.get('/api/35', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/35.jpg'))
});
app.get('/api/36', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/36.jpg'))
});
app.get('/api/37', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/37.jpg'))
});
app.get('/api/38', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/38.jpg'))
});
app.get('/api/39', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/39.jpg'))
});
app.get('/api/40', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/40.jpg'))
});
app.get('/api/41', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/41.jpg'))
});
app.get('/api/42', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/42.jpg'))
});
app.get('/api/43', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/43.jpg'))
});
app.get('/api/44', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/44.jpg'))
});
app.get('/api/45', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/45.jpg'))
});
app.get('/api/46', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/46.jpg'))
});
app.get('/api/47', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/47.jpg'))
});
app.get('/api/48', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/48.jpg'))
});
app.get('/api/49', (req, res) => {
  res.sendFile(path.join(__dirname, 'images/49.jpg'))
});





/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));