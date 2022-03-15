import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import {
  Description, Small, Subtitle, Title,
} from './styles/typography';

export const App: React.FC = () => (
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
      <Small fontWeight="bold">
        Share Up Social Media
      </Small>
    </div>
  </>
);
