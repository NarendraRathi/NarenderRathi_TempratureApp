
// import fetch from "cross-fetch";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
//new api key 

const API_KEY = "9c208b9a86ba299e063efb75ba9ba2fe";//"|08a3b90e6888abe49c49b671e358abc1";

class WeatherAPI{

  constructor(){
    this.apiURL = new URL(API_BASE_URL);
  }

  invoke(userData){

    this.buildURL(userData);

    return this.invoke2(userData);
  }

  async invoke2(){

    let response = await fetch(this.apiURL)

    if (response.status == 200){

      let responseJSON = await response.json();
      return responseJSON;
    }else{
      return "ERROR";
    }
  }

  buildURL(userData){

    this.apiURL.searchParams.append("q", userData);
    this.apiURL.searchParams.append("appid", API_KEY);
    this.apiURL.searchParams.append("units", "metric");


    console.log(`URL is ${this.apiURL}`);
  }
}

export {WeatherAPI}