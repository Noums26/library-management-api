import client from '../config/db/connection';

const getAll = async (req, res) => {
  client.connect();
  const allBooks = await client.query('select * from books');
  res.json(allBooks);
};

const getById = async (req, res) => {
  const id = req.path.id;
  client.connect();
  const book = await client.query(`select * from books where id = ${id}`);
  res.json(book);
};

const deleteById = async(req,res) => {
  const {id} = req.params;
  client.connect();
  const toDelete = await client.query(`delete from books where id = ${id}`);
  res.send("Book successfully deleted !");
};

const books = {
  getAll,
  getById,
  deleteById
};

export default books;
