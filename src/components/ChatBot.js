import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.phone) return;

    setIsSubmitting(true);
    try {
      const result = await emailjs.sendForm(
        'service_uut1juo',
        'template_wpniyaq',
        formRef.current,
        'Y7YAxnmwF0DgacwCm'
      );
      
      console.log('Email sent successfully:', result.text);
      setSubmitted(true);
      // Reset form
      setUserDetails({
        name: '',
        phone: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send your details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp redirect function
  const handleWhatsAppRedirect = () => {
    const whatsappNumber = '+917249545778'; // Replace with your WhatsApp number
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  if (!isOpen) {
    return (
      <div className="chat-buttons">
        <button 
          className="whatsapp-toggle"
          onClick={handleWhatsAppRedirect}
          aria-label="Open WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
          </svg>
        </button>
        <button 
          className="chatbot-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="header-content">
          <svg 
            viewBox="0 0 24 24" 
            width="20" 
            height="20" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="chat-icon"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <h3>Chat Support</h3>
        </div>
        <button 
          onClick={() => {
            setIsOpen(false);
            // Reset states when closing
            if (submitted) {
              setSubmitted(false);
            }
          }}
          aria-label="Close chat"
        >
          &times;
        </button>
      </div>
      
      <div className="chatbot-body">
        {submitted ? (
          <div className="success-message">
            <svg 
              viewBox="0 0 24 24" 
              width="32" 
              height="32" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="success-icon"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <p>Thank you! Our team will contact you shortly.</p>
          </div>
        ) : (
          <>
            <div className="welcome-message">
              <p>Thank you for visiting !</p>
              <p>Please enter your name and number, and our team will get back to you.</p>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  pattern="[0-9]*"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={isSubmitting ? 'submitting' : ''}
              >
                <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                {!isSubmitting && (
                  <svg 
                    viewBox="0 0 24 24" 
                    width="16" 
                    height="16" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;