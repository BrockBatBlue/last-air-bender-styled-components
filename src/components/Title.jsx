import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: aquamarine;
  background-color: rgb(178, 136, 185);
`;

const Title = () => {
  return (
    <StyledTitle>
      <h1>Last Air Bender Characters</h1>
    </StyledTitle>
  );
};

export default Title;
