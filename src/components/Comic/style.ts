import styled from "styled-components";

export const section = styled.section`
margin-top: 10px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const article = styled.article`
width: 60%;
display: flex;
gap: 4rem;
font-size: 1.3rem;
font-weight: 600;
@media(max-width:1000px){
    font-size: 0.8rem;
    width: 100%;
} 
`
export const Image = styled.img`
width: 10rem;
@media(max-width:1000px){
width: 5rem;
} 
`
export const Title = styled.p`
font-weight: 600;
@media(max-width:1000px){
font-size: 0.5rem;
} 

`
export const div = styled.div`
`
export const divPai = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`
export const button = styled.button`
  width: 10rem;
  height: 2rem;
	background-color: #027ad6;
  color: white;
  font-weight: 600;
  text-shadow: 0px 2px 5px rgba(0,0,0,.1);
  cursor: pointer;
  margin-left: 0.3rem;

  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 1000px) {
    width: 3rem;
    font-size: 0.5rem;

  }
`;