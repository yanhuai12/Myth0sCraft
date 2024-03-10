const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to CloudSecure! Our robust cloud storage security solution encrypts and protects sensitive data across multiple cloud services. With advanced threat detection and real-time alerts, CloudSecure ensures that your data remains safe and private.');
});

// Define route for the encryption page
app.get('/encryption', (req, res) => {
  res.send('Our encryption service uses state-of-the-art algorithms to protect your data from unauthorized access, ensuring that it remains secure even if your cloud storage provider is compromised.');
});

// Define route for the threat detection page
app.get('/threat-detection', (req, res) => {
  res.send('Our threat detection service uses advanced machine learning algorithms to detect and respond to potential security threats in real-time, providing you with the peace of mind that your data is always protected.');
});

// Define route for the real-time alerts page
app.get('/real-time-alerts', (req, res) => {
  res.send('Our real-time alerts service provides you with instant notifications in the event of a security breach, allowing you to take immediate action to protect your data.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});