import styled from "styled-components";

export const Span = styled.span`
  width: 100%;
`;
export const div = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 1000px){
      width: 100%;
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 30rem;
  height: 150px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
`;

export const Img = styled.img`
  width: 5rem;
`;
export const button = styled.button`
`
export const Qt = styled.p`
display: flex;
gap:30px;
font-size: 1.5rem;
font-weight: 300;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Price = styled.p`
  font-size: 2rem;
  font-weight: 300;
`;
