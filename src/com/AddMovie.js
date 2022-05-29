import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Filter1 from "./Filter1";
import { Cardd } from "./list";
const AddMovie = () => {
const [show, setShow] = useState(false);
const [movie,Setmovie]=useState(Cardd);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("")

    const toggle = () => {
        setShow(!show);
    };

  
        const newMovie = {
            title,
            description,
            rate,
            posterUrl
       

    }
    console.log(movie);
    
   console.log(newMovie);
console.log(Cardd)

    return (
        <><div className="add">
            <Button style={{ padding: "40px" }} onClick={toggle}> Add movie </Button>

            <Modal show={show} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicDescription"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicRate"
                        >
                            <Form.Label>Rate</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter rate"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)} />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPosterUrl"
                        >
                            <Form.Label>PosterUrl</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image"
                                value={posterUrl}
                                onChange={(e) => setPosterUrl(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={toggle}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { Setmovie([...movie, newMovie]); } }>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div><Filter1 movie={movie} /></>
    );

};

export default AddMovie;