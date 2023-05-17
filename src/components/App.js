import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button, Header } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import NavBar from './NavBar';
import ComicList from './ComicList';
import ComicDetails from './ComicDetails';
import Pops from './Pops';
import ActionFigures from './ActionFigures';
import MoviePosters from './MoviePosters';

import Comic1 from './../img/Comic1.jpg';
import Comic2 from './../img/Comic2.jpg';

import './App.css';

const SERVICE_ID = "service_gp97s6d";
const TEMPLATE_ID = "template_rxwn8c2";
const USER_ID = "3Xa-goe1ySzDQrvxz";

const App = () => {
  const [formData, setFormData] = useState({
    user_email: '',
    user_name: '',
    user_message: ''
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        });
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
        });
      });

    e.target.reset();
  };

  const mainComicList = [
    {
      id: 1,
      title: 'this is a comic',
      condition: 'F-',
      date: 'some date',
      price: '$10',
      image: Comic1
    },
    {
      id: 2,
      title: 'this is a comic also',
      condition: 'F',
      date: 'some other date',
      price: '$40',
      image: Comic2
    }
  ];

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ComicList comics={mainComicList} />} />
        <Route path="/comic/:id" element={<ComicDetails comics={mainComicList} />} />
        <Route path="/pops" element={<Pops />} />
        <Route path="/actionfigures" element={<ActionFigures />} />
        <Route path="/movieposters" element={<MoviePosters />} />
      </Routes>
      <div className="App">
        <Header as="h2">See something you like? Message Lord Vader and send an offer!</Header>
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
            value={formData.user_email}
            onChange={(e) =>
              setFormData({ ...formData, user_email: e.target.value })
            }
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Name…"
            required
            icon="user circle"
            iconPosition="left"
            value={formData.user_name}
            onChange={(e) =>
              setFormData({ ...formData, user_name: e.target.value })
            }
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Message…"
            required
            value={formData.user_message}
            onChange={(e) =>
              setFormData({ ...formData, user_message: e.target.value })
            }
          />
          <Button type="submit" color="green">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default App