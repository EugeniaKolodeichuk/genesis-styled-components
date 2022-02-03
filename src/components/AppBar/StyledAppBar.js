import styled from "styled-components";

export const StyledAppBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.color}; ;
`;
