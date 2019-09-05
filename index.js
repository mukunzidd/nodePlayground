// const express = require('express');

// const app = express();
// const PORT = 4000;

const excuses = [
  {
    id: 1,
    title: "I can't do it",
    type: 'typical'
  },
  {
    id: 2,
    title: "it's difficult",
    type: 'lazy'
  },
  {
    id: 3,
    title: "I'm not a genius",
    type: 'generic'
  }
];

console.log(excuses);

// Routes
// app.get('/status', function(req, res) {
//   res.send({
//     message: 'All systems are ago!'
//   });
// });

// app.get('/api/v1/excuses', function(req, res) {
//   res.send({
//     status: 200,
//     excuses: excuses
//   });
// });

// app.listen(PORT, function() {
//   console.log(`Server is running on PORT ${PORT}`);
// });
