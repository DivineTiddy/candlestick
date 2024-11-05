import styled from "styled-components";
import Text from "../../../ui/Text";

const Container = styled.div`
  width: 169px;
  height: inherit;
  display: flex;
  gap: 9px;
  display: flex;
  align-items: center;
  .icon {
    display: flex;
    align-items: center;
    background-color: rgba(176, 176, 176, 0.1);
    opacity: 100%;
    width: 60px;
    height: 60px;
    border-radius: 13.75px;
    display: flex;
    justify-content: center;
  }
  .span {
    width: 100px;
    height: 50px;
  }
`;
const TotalApply = () => {
  return (
    <Container>
      <div className="icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4803 24.1996H8.427C7.88034 24.1996 7.427 23.7463 7.427 23.1996V16.3729C7.427 14.9863 8.56032 13.8528 9.94699 13.8528H13.4803C14.027 13.8528 14.4803 14.3061 14.4803 14.8528V23.1862C14.4803 23.7462 14.027 24.1996 13.4803 24.1996ZM9.427 22.1996H12.4803V15.8663H9.94699C9.66699 15.8663 9.427 16.0928 9.427 16.3861V22.1996Z"
            fill="white"
          />
          <path
            d="M18.5194 24.1996H13.4661C12.9194 24.1996 12.4661 23.7463 12.4661 23.1996V10.3195C12.4661 8.93282 13.5994 7.79947 14.9861 7.79947H17.0127C18.3994 7.79947 19.5327 8.93282 19.5327 10.3195V23.1996C19.5194 23.7463 19.0794 24.1996 18.5194 24.1996ZM14.4794 22.1996H17.5327V10.3195C17.5327 10.0395 17.3061 9.79947 17.0127 9.79947H14.9861C14.7061 9.79947 14.4661 10.0261 14.4661 10.3195V22.1996H14.4794Z"
            fill="white"
          />
          <path
            d="M23.5741 24.1996H18.5208C17.9741 24.1996 17.5208 23.7463 17.5208 23.1996V17.1328C17.5208 16.5861 17.9741 16.1328 18.5208 16.1328H22.0541C23.4408 16.1328 24.5741 17.2661 24.5741 18.6528V23.1996C24.5741 23.7463 24.1341 24.1996 23.5741 24.1996ZM19.5208 22.1996H22.5741V18.6528C22.5741 18.3728 22.3474 18.1328 22.0541 18.1328H19.5208V22.1996Z"
            fill="white"
          />
          <path
            d="M20.0001 30.3333H12.0001C4.76008 30.3333 1.66675 27.24 1.66675 20V12C1.66675 4.75999 4.76008 1.66666 12.0001 1.66666H20.0001C27.2401 1.66666 30.3334 4.75999 30.3334 12V20C30.3334 27.24 27.2401 30.3333 20.0001 30.3333ZM12.0001 3.66666C5.85341 3.66666 3.66675 5.85332 3.66675 12V20C3.66675 26.1467 5.85341 28.3333 12.0001 28.3333H20.0001C26.1467 28.3333 28.3334 26.1467 28.3334 20V12C28.3334 5.85332 26.1467 3.66666 20.0001 3.66666H12.0001Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="span">
        <Text type="iconText">APY</Text>
        <Text type="iconAmount">+ 12.3%</Text>
      </span>
    </Container>
  );
};

export default TotalApply;