import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button, Header, Card, Grid } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import NavBar from './NavBar';
import ComicList from '../ComicList';
import ComicDetails from './ComicDetails';
import Pops from './Pops';
import ActionFigures from './ActionFigures';
import MoviePosters from './MoviePosters';
import './App.css';

import Comic1 from './../img/Comic1.jpg';
import Comic2 from './../img/Comic2.jpg';
import Comic3 from './../img/Comic3.jpg';
import Comic4 from './../img/Comic4.jpg';
import Comic5 from './../img/Comic5.jpg';
import Comic6 from './../img/Comic6.jpg';
import Comic7 from './../img/Comic7.jpg';
import Comic8 from './../img/Comic8.jpg';
import Comic9 from './../img/Comic9.jpg';
import Comic10 from './../img/Comic10.jpg';

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
      title: 'Marvel Team-Up #95 Marvel 🔑',
      description: '1st Appearance of Mockingbird',
      condition: 'VF',
      date: 'JUL 1, 1980',
      price: '$35',
      image: Comic1
    },
    {
      id: 2,
      title: 'Amazing Spider-Man #61 Marvel🔑',
      description: '1st Cover Appearance of Gwen Stacy',
      condition: 'VG+ color lift from cover',
      date: 'JUN 1, 1968',
      price: '$45',
      image: Comic2
    },
    {
      id: 3,
      title: 'Superman\'s Girl Friend, Lois Lane #122 DC🔑',
      description: 'Bondage Cover',
      condition: 'FN+',
      date: 'MAR 23, 1972',
      price: '$25',
      image: Comic3
    },
    {
      id: 4,
      title: 'Supergirl #9 DC',
      condition: 'FN+',
      date: 'DEC 1, 1973',
      price: '$8',
      image: Comic4
    },
    {
      id: 5,
      title: 'Adventure Comics #381 DC 🔑',
      description: '1st Supergirl Solo Story',
      condition: 'FN+',
      date: 'JUN 10, 1969',
      price: '$25',
      image: Comic5
    },
    {
      id: 6,
      title: 'Superman\'s Girl Friend, Lois Lane #123 DC',
      condition: 'FN+',
      date: 'JUN 1, 1972',
      price: '$8',
      image: Comic6
    },
    {
      id: 7,
      title: 'She-Hulk #1 Marvel',
      condition: 'NM+',
      date: 'JAN 19, 2022',
      price: '$10',
      image: Comic7
    },
    {
      id: 8,
      title: 'The Sensational She-Hulk #1 Marvel 🔑',
      description: 'Second Ongoing She-Hulk Solo Series',
      condition: 'VF',
      date: 'MAY 1, 1989',
      price: '$25',
      image: Comic8
    },
    {
      id: 9,
      title: 'Avengers: Curse of the Man-Thing #1 Marvel | Carmen Carnero Cover (1:10) 🔑',
      description: '1st Appearance of the Harrower',
      condition: 'NM',
      date: 'MAR 31, 2021',
      price: '$10',
      image: Comic9
    },
    {
      id: 10,
      title: 'The Savage She-Hulk #1 Marvel 🔑',
      description: '1st Appearance of She-Hulk | Newsstand',
      condition: 'FN-',
      date: 'FEB 1, 1980',
      price: '$90',
      image: Comic10
    }
  ];

  return (
    <div className="AppStyle">
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
          <Grid columns={1} style={{ background: "transparent" }}>
          <Grid.Column>
              <Form onSubmit={handleOnSubmit}>
                <Header as="h2">See something you like? Message Lord Vader now!</Header>
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
            </Grid.Column>
            <Grid.Column>
              <div className="CardStyle">
                <Card.Group>
                  <Card>
                    <Card.Content>
                      <Card.Header>Grades</Card.Header>
                      <Card.Description>
                        Please note:<br />
                        Grades are determined by the best of our ability, grading scale is listed below
                      </Card.Description>
                      <Card.Description>
                        Grading Scale:<br />
                        G = 1.0-3.5<br />
                        VG = 4.0-5.0<br />
                        F = 5.5-7.5<br />
                        VF = 8.0-9.0<br />
                        NM = 9.2+
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <Card>
                  <Card.Content>
                    <Card.Header>Shipping</Card.Header>
                    <Card.Description>Please put PayPal information in the body of the message</Card.Description>
                    <Card.Description>Up to 6 books = $9</Card.Description>
                    <Card.Description>6+ and slabs = $15</Card.Description>
                    <Card.Description>International shipping is possible under consideration</Card.Description>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </>
    </div>
  );
};  
  export default App;