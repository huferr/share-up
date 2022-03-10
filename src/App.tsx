import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { Description, Subtitle, Title } from './styles/typography';

export const App: React.FC = () => {
  return (
    <>
    <GlobalStyles />
    <div>
        <Title fontWeight="bold">
          Share Up Social Media
        </Title>
        <Subtitle fontWeight="light">
          Share Up Social Media
        </Subtitle>
        <Description fontWeight="regular">
          Share Up Social Media
        </Description>
    </div>
    </>
  );
}