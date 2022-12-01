import httpService from './httpService';

const getEarthquakesResnom = async (starttime:string,endtime:string) => {
  try {
    console.log(starttime+endtime);
    const response = await httpService.get(
      `https://resnom.cicese.mx/reportes/geojson2/search?starttime=${starttime}&endtime=${endtime}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log('There was an error while getting the earthquakes', error);
    return false;
  }
};
export {getEarthquakesResnom };
