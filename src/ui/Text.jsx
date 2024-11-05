import styled, { css } from "styled-components";

const Text = styled.p`
  ${(props) =>
    props.type === "iconText" &&
    css`
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
    `}
  ${(props) =>
    props.type === "iconAmount" &&
    css`
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
    `}
    ${(props) =>
    props.type === "port" &&
    css`
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
    `}
    ${(props) =>
    props.type === "date" &&
    css`
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      &:hover {
      color: var(--lightblack-color) !important;
    }
    `}
  padding:0px;
  margin: 0px;
  color: var(--white-color);
`;

export default Text;
