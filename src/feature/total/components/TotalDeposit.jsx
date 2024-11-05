import styled from "styled-components";
import Text from "../../../ui/Text";
import { UseValue } from "../../../context/ContextApi";

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
    width: 300px;
    height: 50px;
  }
`;
const TotalDeposit = () => {
  const { isLoading } = UseValue();
  

  const formatDate = new Date(1730822020 * 1000)
  const options = { month: "long", day: "numeric" };
  const myDate = new Intl.DateTimeFormat("en-US", options).format(formatDate)
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
            d="M9.55966 30.3328C6.38632 30.3328 3.78638 28.0261 3.78638 25.1861V22.4661C3.78638 21.9195 4.23971 21.4661 4.78638 21.4661C5.33304 21.4661 5.78638 21.9195 5.78638 22.4661C5.78638 24.1328 7.39966 25.3861 9.55966 25.3861C11.7197 25.3861 13.333 24.1328 13.333 22.4661C13.333 21.9195 13.7863 21.4661 14.333 21.4661C14.8797 21.4661 15.333 21.9195 15.333 22.4661V25.1861C15.333 28.0261 12.7463 30.3328 9.55966 30.3328ZM6.13298 26.4928C6.71964 27.5861 8.03966 28.3328 9.55966 28.3328C11.0797 28.3328 12.3997 27.5728 12.9863 26.4928C12.0397 27.0661 10.8663 27.3995 9.55966 27.3995C8.25299 27.3995 7.07964 27.0661 6.13298 26.4928Z"
            fill="white"
          />
          <path
            d="M9.55966 23.7325C7.37299 23.7325 5.41303 22.7325 4.4397 21.1459C4.01303 20.4525 3.78638 19.6392 3.78638 18.8125C3.78638 17.4125 4.3997 16.1059 5.5197 15.1325C7.6797 13.2392 11.3997 13.2393 13.573 15.1193C14.693 16.106 15.3197 17.4125 15.3197 18.8125C15.3197 19.6392 15.093 20.4525 14.6663 21.1459C13.7063 22.7325 11.7463 23.7325 9.55966 23.7325ZM9.55966 15.666C8.51966 15.666 7.55968 16.0125 6.83968 16.6392C6.15968 17.2259 5.78638 17.9992 5.78638 18.8125C5.78638 19.2792 5.90632 19.706 6.14632 20.106C6.75966 21.1193 8.06632 21.746 9.55966 21.746C11.053 21.746 12.3596 21.1193 12.9596 20.1193C13.1996 19.7327 13.3197 19.2927 13.3197 18.826C13.3197 18.0127 12.9464 17.2392 12.2664 16.6392C11.5597 16.0125 10.5997 15.666 9.55966 15.666Z"
            fill="white"
          />
          <path
            d="M9.55966 27.4C6.26632 27.4 3.78638 25.28 3.78638 22.48V18.8133C3.78638 15.9733 6.37299 13.6667 9.55966 13.6667C11.0663 13.6667 12.5064 14.1867 13.5863 15.12C14.7063 16.1067 15.333 17.4133 15.333 18.8133V22.48C15.333 25.28 12.853 27.4 9.55966 27.4ZM9.55966 15.6667C7.47966 15.6667 5.78638 17.08 5.78638 18.8133V22.48C5.78638 24.1467 7.39966 25.4 9.55966 25.4C11.7197 25.4 13.333 24.1467 13.333 22.48V18.8133C13.333 18 12.9597 17.2267 12.2797 16.6267C11.5597 16.0133 10.5997 15.6667 9.55966 15.6667Z"
            fill="white"
          />
          <path
            d="M25.3865 19.7336C23.3731 19.7336 21.6665 18.2403 21.5065 16.3203C21.3998 15.2136 21.7998 14.1336 22.5998 13.3469C23.2665 12.6536 24.2131 12.2669 25.2131 12.2669H27.9998C29.3198 12.3069 30.3331 13.3469 30.3331 14.6269V17.3736C30.3331 18.6536 29.3198 19.6936 28.0398 19.7336H25.3865ZM27.9598 14.2669H25.2265C24.7598 14.2669 24.3331 14.4403 24.0265 14.7603C23.6398 15.1336 23.4531 15.6403 23.5065 16.1469C23.5731 17.0269 24.4265 17.7336 25.3865 17.7336H27.9998C28.1731 17.7336 28.3331 17.5736 28.3331 17.3736V14.6269C28.3331 14.4269 28.1731 14.2803 27.9598 14.2669Z"
            fill="white"
          />
          <path
            d="M21.3335 28.3333H18.0002C17.4535 28.3333 17.0002 27.88 17.0002 27.3333C17.0002 26.7867 17.4535 26.3333 18.0002 26.3333H21.3335C24.7735 26.3333 27.0002 24.1067 27.0002 20.6667V19.7333H25.3869C23.3735 19.7333 21.6669 18.24 21.5069 16.32C21.4002 15.2133 21.8003 14.1333 22.6003 13.3467C23.267 12.6533 24.2135 12.2667 25.2135 12.2667H26.9869V11.3333C26.9869 8.21332 25.1603 6.06663 22.2003 5.71996C21.8803 5.66663 21.6002 5.66666 21.3202 5.66666H9.32023C9.00023 5.66666 8.69355 5.69331 8.38688 5.73331C5.45355 6.10664 3.65356 8.23999 3.65356 11.3333V14C3.65356 14.5467 3.20023 15 2.65356 15C2.1069 15 1.65356 14.5467 1.65356 14V11.3333C1.65356 7.22666 4.18695 4.25334 8.12028 3.76C8.48028 3.70667 8.89356 3.66666 9.32023 3.66666H21.3202C21.6402 3.66666 22.0535 3.67999 22.4802 3.74666C26.4135 4.19999 28.9869 7.18666 28.9869 11.3333V13.2667C28.9869 13.8133 28.5335 14.2667 27.9869 14.2667H25.2135C24.7469 14.2667 24.3203 14.44 24.0137 14.76C23.627 15.1333 23.4402 15.64 23.4935 16.1467C23.5602 17.0267 24.4137 17.7333 25.3737 17.7333H28.0002C28.5469 17.7333 29.0002 18.1867 29.0002 18.7333V20.6667C29.0002 25.2533 25.9202 28.3333 21.3335 28.3333Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="span">
        <Text type="iconText">Last updated</Text>
        <Text type="iconAmount">{isLoading ? "" : myDate}</Text>
      </span>
    </Container>
  );
};

export default TotalDeposit;