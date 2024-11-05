import styled from "styled-components"
import Live from "./Live"

const Container = styled.div`
    width: 100%;
    height: 301.37px;
`
const Chart = () => {
  return (
   <Container>
  <Live/>
   </Container>
  )
}

export default Chart