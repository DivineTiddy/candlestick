import styled from "styled-components";
import Text from "../../ui/Text";
import Option from "./components/Option";
import Chart from "./components/Chart";

const Container = styled.form`
  width: 90%;
  height: 395.37px;
  display: flex;
  flex-direction: column;
  gap: 19px;
`;
const Performance = () => {
  function HandleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Container onSubmit={HandleSubmit}>
      <Text type="port">Portfolios performance</Text>
      <Option />
      <Chart/>
    </Container>
  );
};

export default Performance;
