import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledListNoorder = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledItemsNoorder = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 1.5em;
  border: 3px solid #bdbdbd;
  padding: 0.6em;
  border-radius: 4px;
  background: #fefefe8c;
  color: #231f20;
  max-width: 100vw;
`;

export const StyledImage = styled.img`
  display: flex;
  margin: 0;
  padding: 0;
`;
