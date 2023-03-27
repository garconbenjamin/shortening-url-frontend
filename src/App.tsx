import React, { useState } from "react";
import axios from "axios";
import "./App.scss";
import {
  Container,
  NextUIProvider,
  Row,
  Card,
  Input,
  Button,
  Col,
  Text,
  Loading,
} from "@nextui-org/react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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
const baseUrl = "http://localhost:3000/p/";
function App() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shortenUrl, setShortenUrl] = useState("");
  const submitURL = async () => {
    if (url) {
      setIsLoading(true);
      try {
        const res = await api.post("url", { value: url });
        const { uuid } = res?.data;
        if (uuid) {
          setShortenUrl(baseUrl + uuid);
          setIsFlipped(true);
        }
      } catch (err: any) {
        setMessage(err.message);
      }

      setIsLoading(false);
    }
  };
  return (
    <NextUIProvider>
      <Container xs css={{ maxWidth: 500, marginTop: 50 }}>
        <Row align="center" justify="center">
          <Col>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <Card css={{ mw: 600 }}>
                <Card.Header>
                  <Text h1>Shorten URL</Text>
                </Card.Header>
                <Card.Body>
                  <Input
                    value={url}
                    label="Enter a long URL to make a shorten URL"
                    onChange={(e) => setUrl(e.target.value)}
                    helperText={message}
                  />
                  {isLoading && (
                    <Loading size="sm" type="points" color="secondary" />
                  )}
                </Card.Body>
                <Card.Footer css={{ justifyContent: "center" }}>
                  <Button color="gradient" onPress={submitURL}>
                    Create shorten URL
                  </Button>
                </Card.Footer>
              </Card>

              <Card css={{ height: 250 }}>
                <Card.Header>
                  <Text b>Magic! Enjoy your new URL</Text>
                </Card.Header>

                <Card.Body>
                  <Input
                    aria-label="copy-url"
                    value={shortenUrl}
                    readOnly
                    contentRightStyling={false}
                    contentRight={
                      <Button
                        auto
                        onClick={() => {
                          navigator.clipboard.writeText(shortenUrl);
                        }}
                      >
                        Copy
                      </Button>
                    }
                  />
                </Card.Body>

                <Card.Footer css={{ justifyContent: "center" }}>
                  <Button
                    onPress={() => {
                      setIsFlipped(!isFlipped);
                    }}
                    color="success"
                  >
                    Create another one
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
