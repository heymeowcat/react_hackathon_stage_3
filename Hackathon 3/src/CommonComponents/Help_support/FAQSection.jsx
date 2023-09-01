import React, { useState } from 'react';
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Box,
  Button,
  Paper,
} from '@mui/material';
import ContactForm from './ContactForm';
import ChatSystem from './ChatSystem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatIcon from '@mui/icons-material/Chat';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How do I activate my new SIM card?',
      answer: 'You can activate your SIM card by calling our customer service or visiting one of our stores.',
    },
    {
      question: 'What are the available data plans?',
      answer: 'We offer a variety of data plans to suit your needs. You can find detailed information on our website.',
    },
    {
      question: 'How can I check my remaining balance?',
      answer: 'To check your remaining balance, dial *123# on your phone and follow the instructions.',
    },
    {
      question: 'How do I troubleshoot network connectivity issues?',
      answer: 'If you are experiencing network issues, try restarting your phone or toggling Airplane mode on and off. If the problem persists, contact our support.',
    },
    {
      question: 'Can I keep my current phone number when switching to your service?',
      answer: 'Yes, you can typically keep your current phone number when switching to our service. Contact our support to initiate the number porting process.',
    },
    {
      question: 'How can I pay my bill online?',
      answer: 'You can pay your bill online through our website by logging into your account and accessing the payment options.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleQuestionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h5" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <Accordion
                expanded={activeIndex === index}
                onChange={() => handleQuestionClick(index)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </li>
          ))}
        </ul>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column" 
      >
        <ContactForm
          name={name}
          email={email}
          message={message}
          setName={setName}
          setEmail={setEmail}
          setMessage={setMessage}
          handleSubmit={handleSubmit}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={toggleChat}
          startIcon={<ChatIcon />}
          sx={{
            backgroundColor: '#0C356A', 
            marginTop: '20px',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
        >
          Chat
        </Button>
        {isChatOpen && (
          <Paper
            elevation={3}
            sx={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              width: '400px',
              maxHeight: '450px',
              overflowY: 'auto',
              zIndex: 999,
            }}
          >
            <ChatSystem />
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default FAQSection;
