import styled from "styled-components";

export const Span = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  width: 40%;
  height: 150px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  @media (max-width:1000px) {
    width: 100%;
    
  }
`;

export const Img = styled.img`
  width: 5rem;
`;
export const imgX = styled.img`
cursor: pointer;
width: 3rem;
`
export const Price = styled.p`
  font-size: 2rem;
  font-weight: 300;
`;

export const EmptyCart = styled.img`
width: 20rem;
`
