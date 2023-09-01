import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
          />
        </div>
        <Button type="submit" variant="contained" sx={{ backgroundColor: '#0C356A', color: '#FFFFFF' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
