import styled from "styled-components";
import Live from "./Live";

const Container = styled.div`
  width: 100%;
  height: 601.37px;
  overflow-x: scroll;
  /* Customize the scrollbar */
  &::-webkit-scrollbar {
    width: 0px; /* width of the entire scrollbar */
    height: 1px;
  }

  &::-webkit-scrollbar-track {
    background: black; /* background of the scrollbar track */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black; /* color of the scrollbar thumb */
    border-radius: 4px;
    border: 2px solid black; /* space around the thumb */
  }
`;

const Chart = () => {
  return (
    <Container>
      <Live />
    </Container>
  );
};

export default Chart;
