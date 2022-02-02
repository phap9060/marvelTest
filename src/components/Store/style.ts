import styled from "styled-components";
export const span = styled.span`
  display: flex;
  justify-content: center;
`;
export const img = styled.img`
  display: flex;
  justify-content: center;
  width: 40%;
  height: 86;
`;
export const ul = styled.ul`
  display: flex;
  gap: 10px;
  @media (max-width: 1000px) {
    gap: 1px;
    display: flex;
    width: 80%;
  }
  @media (max-width:650px) {
    width: 90%;
    gap: 2px;
    margin-left: -12%;
    
  }
`;
export const li = styled.li`
  list-style: none;
  @media (max-width: 1000px) {
    gap: 4px;
    display: flex;
    width: 80%;
    justify-content: space-around;
  }
  @media (max-width:650px) {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap:2px;
    
  }
`;
export const button = styled.button`
  font-weight: 600;
  color: #e8e4d8;
  background: #041d2d;
  border: 0px outset #4a3a00;
  text-shadow: 0px -1px 8px #0d0d0d;
  box-shadow: 1px 0px 12px #2e2300;
  -moz-box-shadow: 1px 0px 12px #2e2300;
  -webkit-box-shadow: 1px 0px 12px #2e2300;
  border-radius: 15px 15px 15px 15px;
  -moz-border-radius: 15px 15px 15px 15px;
  -webkit-border-radius: 15px 15px 15px 15px;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  margin: 0 auto;
  &:active {
    cursor: pointer;
    position: relative;
    top: 2px;
  }
  @media (max-width: 1000px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const Container = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Section = styled.section`
  display: flex;
  gap: 5rem;
  width: 80%;
  max-height: 86vh;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1000px) {
    width: 90%;
    justify-content: space-around;
    gap: 20px;
  }
`;
