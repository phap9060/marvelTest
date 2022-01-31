import styled from "styled-components";

export const card = styled.div`
  border-radius: 30px;
  background: white;
  width: 18rem;
  height: 80vh;
  gap: 10px;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-around;
  box-shadow: 5px 5px 15px 5px #000000;
  transition: 0.3s all ease-in-out;
  align-items: center;
  cursor: pointer;
  &:hover {
    margin-top: -10px;
  }
  @media (max-width: 1000px) {
    justify-content: space-around;
    width: 9.9rem;
    height: 39vh;
    padding: 0;
  }
`;
export const image = styled.img`
display: flex;
justify-content: flex-start;
  width: 10rem;
  @media(max-width:1000px){
    width: 5rem;
    margin-top: 10px;
  }
`;
export const content = styled.p`
  font-weight: 550;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;
export const Price = styled.p`
font-weight: 600;
font-size: 1.3rem;
@media (max-width: 1000px) {
    font-size: 15px;
  }

`
export const button = styled.button`
  width: 10rem;
  height: 2rem;
  font-size: 1rem;
  align-items: center;
  background-color: #575757;
  border-radius: 28px;
  border: 1px solid #ffffff;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0px 1px 0px #000000;

  &:hover {
    opacity: 0.5;
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
