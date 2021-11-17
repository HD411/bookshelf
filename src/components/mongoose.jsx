const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect('mongodb://localhost:27017/bookShelfDB')
    .then(() => {
      console.log('connection open');
    })
    .catch((err) => {
      console.log('shit, an error!');
      console.log(err);
    });
}

const bookSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, min: 0, max: 10 },
});

const Book = mongoose.model('Book', bookSchema);

const firstbook = new Book({
  Author: 'Joe Abercrombe',
  Title: 'The Blade Itself',
  Image: 'https://m.media-amazon.com/images/I/51aSZ+0kJRL._SL500_.jpg',
  Rating: 8,
});
