import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 2px;
  border-color: rgb(90, 89, 89);
  border-style: solid;
  border-radius: 10%;
  box-shadow: 10px 5px 5px rgb(126, 126, 126);
  margin-top: 2vh;
  margin-left: 2vw;
  align-items: center;
  justify-content: center;
  width: 15em;
  height: 16em;
  padding-top: 1vh;
`;
const LabImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 13em;
  max-height: 12em;
`;

const LabName = styled.h4`
  padding-left: 0.5vw;
  color: ${(props) => props.color || "#153131"};
`;

// const RedLabName = styled(LabName)`
//   color: red;
// `;

const Card = ({ key, image, name }) => {
  return (
    <StyledCard key={key}>
      <LabImg src={image} alt={name} />
      <LabName color="red">{name}</LabName>
      {/* <RedLabName>{name}</RedLabName> */}
    </StyledCard>
  );
};
export default Card;
