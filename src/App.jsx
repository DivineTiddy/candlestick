import styled from "styled-components";
import Total from "./feature/total/Total";
import Performance from "./feature/performance/Performance";
import { ContextApi } from "./context/ContextApi";

const StyledApp = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 47px;
  padding: 42px 0px;
    background-color: var(--black-color);

  @media (min-width: 800px) {
    width: 100%;

  }
`;

const App = () => {
  return (
    <ContextApi>
      <StyledApp>
      <Total />
      <Performance />
    </StyledApp>
    </ContextApi>
  );
};

export default App;
