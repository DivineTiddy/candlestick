export const getFullData = async () => {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key=2b0f02cf2f5de76a1b0c8515fa21b9e77cac8884050776fb3b9a6070d32f15a0`
    );
    const data = await response.json();
        console.log(data);

  //   const newDate = new Date( 
  
  // 1730232000 * 1000);
  //   const result = newDate.toLocaleString();
  //   console.log(result);
  
}
getFullData()