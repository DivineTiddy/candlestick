import { createContext, useContext, useEffect, useReducer } from "react";
import propTypes from "prop-types";
const ContextProvider = createContext();
const currentState = {
  dateResult: [],
  date: "hour",
  cyrptoName: "BTC",
  isLoading: true,
  priceData:{},
  coinsPrice:{},
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "dateResult":
      return { ...state, dateResult: action.payLoad };
    case "name":
      return { ...state, cyrptoName: action.payLoad };
    case "date":
      return { ...state, date: action.payLoad };
    case "loading":
      return { ...state, isLoading: false };
    case "priceData":
      return { ...state, priceData: action.payLoad };
      case "coinsPrice":
      return { ...state, coinsPrice: action.payLoad , isLoading:true};
    default:
      return state;
  }
};

const ContextApi = ({ children }) => {
  const [{ dateResult, date, cyrptoName, priceData , coinsPrice , isLoading}, dispacth] = useReducer(
    Reducer,
    currentState
  );
  useEffect(function () {
    async function getFullData() {
      dispacth({type:"loading"})
      try {
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/generateAvg?fsym=${cyrptoName}&tsym=USD&e=Kraken&api_key=2b0f02cf2f5de76a1b0c8515fa21b9e77cac8884050776fb3b9a6070d32f15a0`
        );
        const result = await response.json();

        const data = result.DISPLAY;
        const coins = result.RAW.LASTUPDATE;


        dispacth({ type: "coinsPrice", payLoad: coins });


        dispacth({ type: "priceData", payLoad: data });
      } catch (error) {
        console.log(error);
      }finally{
        dispacth({type:"loading" , payLoad:false})
      }
    }
    getFullData();
  }, [cyrptoName]);

  return (
    <ContextProvider.Provider
      value={{
        dateResult,
        dispacth,
        cyrptoName,
        date,
        priceData,
        coinsPrice,
        isLoading
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
function UseValue() {
  const context = useContext(ContextProvider);
  return context;
}

ContextApi.propTypes = {
  children: propTypes.object,
};

export { ContextApi, UseValue };
