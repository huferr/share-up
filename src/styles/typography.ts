import styled from 'styled-components';

interface TypographyProps {
  color?: string;
  fontWeight: 'bold' | 'regular' | 'light';
  marginTop?: string;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const fontWeight: Record<TypographyProps['fontWeight'], number> = {
  bold: 700,
  regular: 400,
  light: 100,
};

export const Title = styled.h1<TypographyProps>`
  font-size: 54px;
  color: ${(props) => props.color};
  font-weight: ${(props) => fontWeight[props.fontWeight]};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export const Subtitle = styled.h2<TypographyProps>`
  font-size: 36px;
  color: ${(props) => props.color};
  font-weight: ${(props) => fontWeight[props.fontWeight]};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export const Description = styled.h3<TypographyProps>`
  font-size: 16px;
  color: ${(props) => props.color};
  font-weight: ${(props) => fontWeight[props.fontWeight]};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export const Small = styled.h4<TypographyProps>`
  font-size: 14px;
  color: ${(props) => props.color};
  font-weight: ${(props) => fontWeight[props.fontWeight]};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;
