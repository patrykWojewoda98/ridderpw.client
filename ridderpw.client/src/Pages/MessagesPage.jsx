import "../App.css";
import "../ComponentsStyles/MassagesPageStyle.css";
import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import io from "socket.io-client";
import { LoginContext } from "../Components/Contexts/LoginContext";
import { Col, Container, Row } from "react-bootstrap";

const socket = io("http://localhost:3001");

export function MessagesPage() {
  const { isLoggedIn, name } = useContext(LoginContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Receive new messages
    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("message", { name: name, text: input });
      setInput("");
    }
  };

  return (
    <Container fluid className="background">
      <Col>
        <Row className="custom-label">
          <div className="chat-container">
            <h1>Chat</h1>
            <div className="messages-container">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message-bubble ${
                    msg.name === name
                      ? "message-bubble-right"
                      : "message-bubble-left"
                  }`}
                >
                  <div className="message-author">{msg.name}:</div>
                  <div className="message-text">{msg.text}</div>
                </div>
              ))}
            </div>
          </div>
          <Form.Label>Twoja wiadomość</Form.Label>
          <Form.Control
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
          />
        </Row>
        <Button variant="primary" onClick={sendMessage}>
          Wyślij
        </Button>
      </Col>
    </Container>
  );
}
