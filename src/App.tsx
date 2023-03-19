import React, { useState } from "react";
import axios from "axios";
import "./App.scss";
import {
  Container,
  Row,
  Card,
  Input,
  Button,
  Col,
  Text,
} from "@nextui-org/react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { NextUIProvider } from "@nextui-org/react";
import ReactCardFlip from "react-card-flip";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsev_Qd-iCjwhCHYu3t4WAeX0eFJWgSgU",
  authDomain: "shortening-url-6cf7a.firebaseapp.com",
  projectId: "shortening-url-6cf7a",
  storageBucket: "shortening-url-6cf7a.appspot.com",
  messagingSenderId: "650938451288",
  appId: "1:650938451288:web:0abc0c933e62eb1a89d12d",
  measurementId: "G-HT90D8GWWM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});

function App() {
  const [url, setUrl] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [urlList, setUrlList] = useState([]);
  const [shortenUrl, setShortenUrl] = useState("");
  const submitURL = async () => {
    const res = await api.post("url", { value: url });
    setShortenUrl(res?.data?.uuid);
    setIsFlipped(true);
  };
  return (
    <NextUIProvider>
      <Container>
        <Row align="center" justify="center">
          <Col span={6}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <Card css={{ height: 250 }}>
                <Card.Header>
                  <Text b>Shorten URL</Text>
                </Card.Header>
                <Card.Body>
                  <Input
                    value={url}
                    label="Enter a long URL to make a shorten URL"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </Card.Body>
                <Card.Footer>
                  <Button onPress={submitURL}>Create shorten URL</Button>
                </Card.Footer>
              </Card>

              <Card css={{ height: 250 }}>
                <Card.Header>
                  <Text b>Magic! Enjoy your new URL</Text>
                </Card.Header>

                <Card.Body>
                  <Input value={shortenUrl} labelRight={<Text>copy</Text>} />
                </Card.Body>

                <Card.Footer>
                  <Button
                    onPress={() => {
                      setIsFlipped(!isFlipped);
                    }}
                  >
                    Go back
                  </Button>
                </Card.Footer>
              </Card>
            </ReactCardFlip>
          </Col>
        </Row>
      </Container>
    </NextUIProvider>
  );
}

export default App;
