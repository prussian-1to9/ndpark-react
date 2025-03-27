import type { BannerProps } from "@api/mainpage/bannerData";
import { moviePrices, hotelInfos } from "@api/mainpage/commonData";
import {
  mainTopBannerData,
  arrivalBannerData,
  movieBannerData,
  tourBannerData,
} from "@api/mainpage/bannerData";

const getTopBanners = () => {
  return mainTopBannerData;
};
const getArrivalBanners = () => {
  return arrivalBannerData;
};

const getHotelInfo = () => {
  return hotelInfos;
};

const getTourBanners = () => {
  return tourBannerData;
};

const getMovieInfo = () => {
  return moviePrices;
};
const getMovieBanners = () => {
  return movieBannerData;
};

export { getTopBanners, getArrivalBanners, getMovieBanners, getTourBanners };
export { getHotelInfo, getMovieInfo };
export type { BannerProps };
