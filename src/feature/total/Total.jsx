import styled from "styled-components";
import TotalAsset from "./components/TotalAsset";
import TotalDeposit from "./components/TotalDeposit";
import TotalApply from "./components/TotalApply";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 60px;
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
