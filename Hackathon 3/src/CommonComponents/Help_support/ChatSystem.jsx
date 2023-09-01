import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, Box } from '@mui/material';

const ChatSystem = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { text: newMessage, user: 'user' }]);
    setNewMessage('');

    setTimeout(handleSupportReply, 500); // Simulate support response after a delay
  };

  const handleSupportReply = () => {
    const userMessage = newMessage.toLowerCase();
    let supportResponse = "I'm sorry, I couldn't understand your query.";

    if (userMessage.includes('activate')) {
      supportResponse = 'To activate your service, please visit our website or call our helpline.';
    } else if (userMessage.includes('balance')) {
      supportResponse = 'You can check your balance by dialing *123# on your phone.';
    } else if (userMessage.includes('plans') || userMessage.includes('data')) {
      supportResponse = 'We offer various data plans to suit your needs. You can find details on our website.';
    } else if (userMessage.includes('hi') || userMessage.includes('hello')) {
      supportResponse = 'Hello! How can I assist you today?';
    } else if (userMessage.includes('sim') || userMessage.includes('working')) {
        supportResponse = 'If your sim is not working, try removing and reinserting it.';
    } else if (userMessage.includes('network') || userMessage.includes('not working')) {
      supportResponse = 'You can try restarting your phone or contacting customer care.';
    }

    setMessages([...messages, { text: newMessage, user: 'user' }, { text: supportResponse, user: 'support' }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Help/Support
      </Typography>
      <Paper elevation={3} sx={{ padding: '1rem', minHeight: '400px', overflowY: 'auto' }}>
        <Box className="chat-messages">
          {messages.map((message, index) => (
            <Box
              key={index}
              className={`message ${message.user}`}
              sx={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                backgroundColor: message.user === 'user' ? '#E2F2FF' : '#D4EDFF',
                marginBottom: '0.5rem',
                display: 'inline-block',
              }}
            >
              {message.text}
            </Box>
          ))}
        </Box>
        <Box className="input-area" sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <TextField
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            fullWidth
            sx={{ flexGrow: 1 }}
          />
          <Button onClick={handleSendMessage} variant="contained" sx={{ backgroundColor: '#0C356A', color: '#FFFFFF' }}>
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ChatSystem;
