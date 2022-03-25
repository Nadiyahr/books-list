import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook, requestBooks } from '../api/api';

type Props = {
  reload: () => Promise<void>;
};

export const AddForm: React.FC<Props> = ({ reload }) => {
  const [newId, setNewId] = useState(0);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCathegory] = useState('');
  const [newISBN, setNewISBN] = useState(0);
  const [newYear, setNewYear] = useState(0);
  const [errors, setErrors] = useState({
    title: '',
    author: '',
    category: '',
    ISBN: '',
    year: '',
  });
  const history = useNavigate();

  const getNewId = async () => {
    const booksList = await requestBooks();
    const arr = booksList.map((b: Book) => b.id);
    const id = +Math.max(...arr) + 1;

    setNewId(id);
  };

  const validate = (name: string, value: string) => {
    switch (name) {
      case 'title':
      case 'author':
      case 'category':
        if (value.length === 0) {
          setErrors((prev) => ({
            ...prev,
            [name]: 'This field is required',
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            [name]: '',
          }));
        }

        break;

      case 'ISBN':
        if (value.length !== 13) {
          setErrors((prev) => ({
            ...prev,
            [name]: 'ISBN must contain 13 numbers',
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            [name]: '',
          }));
        }

        break;

      case 'year':
        if (value && value.length !== 4 && +value > +(new Date().getFullYear())) {
          setErrors((prev) => ({
            ...prev,
            [name]: 'Enter valid year',
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            [name]: '',
          }));
        }

        break;

      default:
        break;
    }
  };

  const hanndleChange = (e: React.FormEvent<EventTarget>) => {
    const { name, value } = e.target as HTMLInputElement;

    switch (name) {
      case 'title':
        setNewTitle(value);
        validate(name, value);
        break;

      case 'author':
        setNewAuthor(value);
        validate(name, value);
        break;

      case 'category':
        setNewCathegory(value);
        validate(name, value);
        break;

      case 'ISBN':
        setNewISBN(+value);
        validate(name, value);
        break;

      case 'year':
        setNewYear(+value);
        validate(name, value);
        break;

      default:
        break;
    }
  };

  const hanndleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (Object.values(errors).every(v => v === '')) {
      const newData: Book = {
        id: newId,
        title: newTitle,
        author: newAuthor,
        category: newCategory,
        ISBN: newISBN,
        year: newYear,
      };

      addBook(newData);
      reload();
      history('/');
    }
  };

  useEffect(() => {
    getNewId();
  }, []);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={(e: React.SyntheticEvent) => hanndleSubmit(e)}
    >
      <h1>Add a Book</h1>
      <div>
        <TextField
          required
          id="title"
          label="Title"
          name="title"
          value={newTitle}
          onChange={hanndleChange}
          error={errors.title !== ''}
          helperText={errors.title}
        />
        <TextField
          required
          id="author"
          label="Author"
          name="author"
          value={newAuthor}
          onChange={hanndleChange}
          error={errors.author !== ''}
          helperText={errors.author}
        />
        <TextField
          required
          id="category"
          label="Category"
          name="category"
          value={newCategory}
          onChange={hanndleChange}
          error={errors.category !== ''}
          helperText={errors.category}
        />
        <TextField
          required
          id="ISBN"
          label="ISBN"
          type="number"
          name="ISBN"
          onChange={hanndleChange}
          error={errors.ISBN !== ''}
          InputLabelProps={{
            shrink: true,
          }}
          helperText={errors.ISBN}
        />
        <TextField
          id="year"
          label="Year"
          name="year"
          onChange={hanndleChange}
          error={errors.year !== ''}
          helperText={errors.year}
        />
      </div>
      <button type="submit">Submite</button>
    </Box>
  );
};
