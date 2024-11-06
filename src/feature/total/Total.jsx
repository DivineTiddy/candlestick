import styled from "styled-components";
import TotalAsset from "./components/TotalAsset";
import TotalDeposit from "./components/TotalDeposit";
import TotalApply from "./components/TotalApply";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 80px;
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
const Total = () => {
  return (
    <Container>
      <TotalAsset />
      <TotalDeposit />
      <TotalApply/>
    </Container>
  );
};

export default Total;
