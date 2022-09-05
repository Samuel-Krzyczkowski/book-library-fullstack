import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Book from "./Book";

function AddBook(props) {
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [cover, setCover] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        + Add a Book
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setTitle('');
              setAuthor('');
              setYear('');
              setCover('');

              props.newBook(title, author, year, cover);
            }}
            id="editbook"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="flex justify-center text-gray-700 text-sm font-bold mb-2"
                for="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="eg. Harry Potter"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                
              />
            </div>
            <div className="mb-4">
              <label
                className="flex justify-center text-gray-700 text-sm font-bold mb-2"
                for="author"
              >
                Author
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                type="text"
                placeholder="eg. J.K Rowling"
                value={author}
                onChange={(e) => {setAuthor(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                className="flex justify-center text-gray-700 text-sm font-bold mb-2"
                for="year"
              >
                Year
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="year"
                type="number"
                placeholder="eg. 2022"
                value={year}
                onChange={(e) => {setYear(e.target.value)}}
              />
            </div>

            <div>
              <label className="flex justify-center text-sm font-medium text-gray-700">
                Cover
              </label>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cover"
                  type="text"
                  placeholder="eg. https://www.image.jpg"
                  value={cover}
                  onChange={(e) => {
                    setCover(e.target.value);
                  }}
                />
                <label className="flex justify-center my-2 text-sm font-medium text-gray-700">
                  Preview:
                </label>
                <div className="mt-1 flex justify-center">
                  <span className="inline-block overflow-hidden rounded-xl bg-gray-100">
                    <img
                      className="object-cover block mx-auto max-h-64 rounded sm:mx-0 sm:shrink-0"
                      src={cover}
                      onError={(event) => event.target.src = ''}
                      onChange={(e) => {
                        setCover(e.target.value);
                      }}
                    />
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </span>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
          <button
            form="editbook"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddBook;
