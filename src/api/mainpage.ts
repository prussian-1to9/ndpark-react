import type { NoticeProps } from "@api/mainpage/noticeData";

import {
  mainBannerData,
  introduceImages,
  movieImages,
} from "@api/mainpage/imageData";
import { noticeTypesData, noticeData } from "@api/mainpage/noticeData";

/* =============== [ swipers ] =============== */
const getMainBannerData = (): BannerProps[] => {
  return mainBannerData;
};
type IntroduceImageType = "stay" | "tour" | "reservation" | "customerCenter";

const getIntroduceImages = (
  type: IntroduceImageType,
  size: number = 1
): ImageProps[] => {
  const returnArray = introduceImages[type];
  return returnArray.slice(
    0,
    returnArray.length < size ? returnArray.length : size
  );
};
const getMovieData = (): ImageProps[] => {
  return movieImages;
};
const getNoticeData = (): NoticeProps[] => {
  return noticeData;
};
const getNoticeTypeString = (type: "gurye" | "goesan"): string => {
  return noticeTypesData[type];
};

export type { NoticeProps };
export {
  getMainBannerData,
  getIntroduceImages,
  getMovieData,
  getNoticeData,
  getNoticeTypeString,
};
