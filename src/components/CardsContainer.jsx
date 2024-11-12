import Card from "./Card";
import styled from "styled-components";

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CardsContainer = ({ characters }) => {
  //map cards to the container element

  const placeholder = "https://placedog.net/500";
  return (
    <StyledCardsContainer>
      {characters.map((character) => {
        return (
          <Card
            key={character._id}
            image={character.photoUrl || placeholder}
            name={character.name}
          />
        );
      })}
    </StyledCardsContainer>
  );
};

export default CardsContainer;
