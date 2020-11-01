import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./AddMovie.css";
import "reactjs-popup/dist/index.css";
function Filter({ searchMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRate, setSearchRate] = useState(1);

  const handleSearchTitle = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setSearchRate(newRating);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchMovie({ searchTitle, searchRate });
    setSearchTitle("");
    setSearchRate(1);
  };
  return (
    <>
      <Button className="search-button" variant="primary" onClick={handleShow}>
        Search a Film
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Search a Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSearchSubmit} className="add-film">
            <Form.Group id="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter title "
                value={searchTitle}
                onChange={(e) => handleSearchTitle(e)}
              />
            </Form.Group>
            <Form.Group id="rate">
              <Form.Label>Rating</Form.Label>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Modal.Body>
        {/* <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && (
          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        )} */}
      </Modal>
    </>
  );
}

export default Filter;
