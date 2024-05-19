import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <p><i className="fas fa-envelope"></i> Email: yourname@example.com</p>
      <p><i className="fas fa-phone"></i> Phone: (123) 456-7890</p>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 50px 0;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;

    i {
      margin-right: 10px;
      color: #ff6b6b;
    }
  }
`;

export default Contact;