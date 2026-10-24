
const fs = require('fs');

// read the file 
// fs.readFile('notes.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log('Error:', err.message);
//     return;
//   }

//   console.log(data);
// });

// write in file

// fs.writeFile('notes.txt', 'Hello from Node.js!', (err) => {
//   if (err) {
//     console.log('Error:', err.message);
//     return;
//   }

//   console.log('File created successfully!');
// });

// Append the file without deleting existing value

// fs.appendFile('notes.txt', '\nLearning Express next!', (err) => {
//   if (err) {
//     console.log('Error:', err.message);
//     return;
//   }

//   console.log('Content added successfully!');
// });


// Use fs.unlink()

fs.unlink('notes.txt', (err) => {
  if (err) {
    console.log('Error:', err.message);
    return;
  }

  console.log('File deleted successfully!');
});

