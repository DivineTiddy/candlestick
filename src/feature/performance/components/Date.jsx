import styled from "styled-components";
import propTypes from "prop-types";
import { UseValue } from "../../../context/ContextApi";
import { useState } from "react";

const Container = styled.div`
  width: 196px;
  height: 22px;
  display: flex;
  gap: 8px;
  .date {
    width: 26px;
    height: 22px;
    border-radius: 6px;
    background-color: var(--gray-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: var(--white-color);
      color: var(--lightblack-color) !important;
    }
  }
  .clickColor {
    background-color: var(--white-color);
    color: var(--lightblack-color) !important;
  }
`;
const Date = () => {
  const { dispacth } = UseValue();
  const [selectedButton, setSelectedButton] = useState("hour");
  function HandleChange(e) {
    const dateValue = e.target.value;
    dispacth({ type: "date", payLoad: dateValue });
    setSelectedButton(dateValue);
  }

  return (
    <Container>
      <button
        value="minute"
        onClick={HandleChange}
        className={selectedButton === "minute" ? "date clickColor" : "date"}
      >
        1M
      </button>
      <button
        value="hour"
        onClick={HandleChange}
        className={selectedButton === "hour" ? "date clickColor" : "date"}
      >
        1H
      </button>
      <button
        value="day"
        onClick={HandleChange}
        className={selectedButton === "day" ? "date clickColor" : "date"}
      >
        1D
      </button>
    </Container>
  );
};
Date.propTypes = {
  HandleChange: propTypes.func,
};

export default Date;
