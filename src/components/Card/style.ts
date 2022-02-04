import styled from "styled-components";

export const card = styled.div`
  border-radius: 30px;
  background: white;
  width: 18rem;
  height: 85vh;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-around;
  box-shadow: 5px 5px 15px 5px #000000;
  align-items: center;
  @media (max-width: 800px) {
    justify-content: space-around;
    width: 10rem;
    height: 48vh;
    padding: 0;
  }
 
`;
export const image = styled.img`
cursor:pointer;
display: flex;
justify-content:center;
align-items: center;
  width: 10rem;
  @media(max-width:1000px){
    width: 4.5rem;
  }
`;
export const content = styled.p`
  font-weight: 550;
  @media (max-width: 1000px) {
    font-size: 12px;
    font-weight: 800;
  }
`;
export const details = styled.p`
display: flex;
justify-content: center;
text-decoration: underline;
color: blue;
width: 100%;
font-size: 1rem;
align-items: center;
cursor: pointer;
font-weight: 600;
`
export const Price = styled.p`
font-weight: 600;
font-size: 1.3rem;
@media (max-width: 1000px) {
    font-size: 12px;
  }

`
export const button = styled.button`
  width: 10rem;
  height: 2rem;
	background-color: #027ad6;
  color: white;
  font-weight: 600;
  text-shadow: 0px 2px 5px rgba(0,0,0,.1);
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 1000px) {
    width: 3rem;
    font-size: 0.5rem;

  }
`;
export const disableButton = styled.button`
  width: 10rem;
  height: 2rem;
  font-size: 1rem;
  align-items: center;
  background-color: #575757;
  border-radius: 28px;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0px 1px 0px #000000;
  opacity: 0.6;
  @media (max-width: 1000px) {
    width: 3rem;
    font-size: 0.5rem;
  }
`;
