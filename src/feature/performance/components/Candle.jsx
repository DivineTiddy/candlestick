import { createChart, LineStyle } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import { UseValue } from "../../../context/ContextApi";

const Candle = () => {
  const { date, cyrptoName } = UseValue();
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const lineSeriesRef = useRef(null);

  useEffect(
    function () {
      async function fectData() {
        try {
          const response = await fetch(
            `https://min-api.cryptocompare.com/data/v2/histo${date}?fsym=${cyrptoName}&tsym=USD&limit=30&api_key=2b0f02cf2f5de76a1b0c8515fa21b9e77cac8884050776fb3b9a6070d32f15a0`
          );
          const result = await response.json();
          const data = result.Data.Data;

          const formattedData = Array.isArray(data)
            ? data.map((item) => ({
                time: item.time,
                low: item.low,
                high: item.high,
                open: item.open,
                close: item.close,
              }))
            : [];
          newSeries.setData(formattedData);
          chart.timeScale().fitContent()
    

          // setData(formattedData); // Update state with fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false); // Set loading to false after data is loaded
        }
      }

      fectData();

      //  DISPLAY CHART STYLED
      const chart = createChart(lineSeriesRef.current, {
        layout: {
          background: { color: "black" },
          textColor: "#DDD",
        },
        grid: {
          vertLines: { color: "#444" },
          horzLines: { color: "#444" },
        },
        width: lineSeriesRef.current.clientWidth,
        height: 400,
      });
      // Setting the border color for the vertical axis
      chart.priceScale("right").applyOptions({
        borderColor: "#444",
        visible: false,
      });
      // Setting the border color for the vertical axis
      chart.priceScale("left").applyOptions({
        borderColor: "#444",
        visible: true,
        invertScale: true,
      });
      // Setting the border color for the horizontal axis
      chart.timeScale().applyOptions({
        borderColor: "#444",
        barSpacing:10,
        fixLeftEdge:true,

        timeVisible: true,
        tickMarkFormatter: (time) => {
          const formatDate = new Date(time * 1000);
          if (date === "minute") {
            const options = {
              minute: "numeric",
            };
            const myDate =
              new Intl.DateTimeFormat("en-US", options).format(formatDate) +
              " " +
              "minute";
            return myDate;
          }
          if (date === "hour") {
            const options = {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            };
            const myDate = new Intl.DateTimeFormat("en-US", options).format(
              formatDate
            );
            return myDate;
          }
          if (date === "day") {
            const options = { month: "long", day: "numeric" };
            const myDate = new Intl.DateTimeFormat("en-US", options).format(
              formatDate
            );
            return myDate;
          }
        },
      });

      const currentLocale = window.navigator.languages[0];
      // Create a number format using Intl.NumberFormat
      const myPriceFormatter = Intl.NumberFormat(currentLocale, {
        style: "currency",
        currency: "EUR", // Currency for data points
        maximumSignificantDigits: 3,
      }).format;

      chart.applyOptions({
        localization: {
          priceFormatter: myPriceFormatter,
        },
        crosshair: {
          // Vertical crosshair line (showing Date in Label)
          vertLine: {
            width: 0,
            color: "#5CFF9C",
            style: LineStyle.Solid,
            labelBackgroundColor: "#5CFF9C",
          },

          // Horizontal crosshair line (showing Price in Label)
          horzLine: {
            color: "#F00090",
            labelBackgroundColor: "#F00090",
          },
        },
      });
      const newSeries = chart.addCandlestickSeries({
        upColor: "#5CFF9C",
        downColor: "#F00090",
        borderVisible: false,
        wickUpColor: "#5CFF9C",
        wickDownColor: "#F00090",
        
      });
      const handleResize = () => {
        chart.applyOptions({
          width: lineSeriesRef.current.clientWidth,
        });
      };
      window.addEventListener("resize", handleResize);

      return () => {
        chart.remove();
        window.removeEventListener("resize", handleResize);
      };
    },
    [date, cyrptoName]
  );
  return <div>{isLoading ? "" : <div ref={lineSeriesRef} />}</div>;
};

export default Candle;
