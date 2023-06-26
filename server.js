const express = require('express');
const app = express();


app.use((req, res, next) => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const currentHour = currentDate.getHours();
  
  // Check if it's a working day (Monday to Friday) and working hours (9 to 17)
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && currentHour >= 9 && currentHour < 17) {
    next(); 
  } else {
    res.send('Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).');
  }
});


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/public/services.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});


const port = 3000; 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
