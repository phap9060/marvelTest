import styled from "styled-components";
export const Container = styled.article`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const Section = styled.section`
display: flex;
gap: 5rem;
width: 80%;
max-height: 86vh;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
@media(max-width:900px){
    width: 90%;
    justify-content: space-around;
    gap: 20px;
}
` 