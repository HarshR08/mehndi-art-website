import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeSection>
      <Content>
        <h1>Welcome to Deetya's Mehndi Art</h1>
        <p>We are the best Mehndi Art service since 1990.
Welcome to the innovative world of Deetya's Mehndi Artist & design, combining fusion designs from Arabic, Indian to Moghul. Mehndi Creations offers a highly personalised and bespoke service to suit your individual needs and budgets. Mehndi Creations are a new generation of artists, using unique techniques together with natural ingredients for the mehndi, to add depth to its colour for your special occasions to last for days to come. We at Mehndi Creations, are available for all occasions such as weddings, mehndi parties, hen parties, fashion shows & corporate events to name a few.</p>
      </Content>
    </HomeSection>
  );
};

const HomeSection = styled.section`
  background: url(${process.env.PUBLIC_URL}/mehndi-background.png) no-repeat center center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

export default Home;