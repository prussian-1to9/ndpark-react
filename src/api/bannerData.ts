interface BannerInfo {
  key: string;
  to?: string;
  pcImage: ImageProps;
  mobileImage: ImageProps;
}

const mainBannerInfos: BannerInfo[] = [
  {
    key: "swiper-geosan-tour",
    to: "https://www.naturaldreampark.co.kr/g_gongbang_book.html",
    pcImage: {
      src: "https://www.naturaldreampark.co.kr/images/main_banner09.jpg",
      alt: "괴산 공방견학",
    },
    mobileImage: {
      src: "https://www.naturaldreampark.co.kr/mobile/images/main_banner04m.jpg?ver=3",
      alt: "괴산 공방견학",
    },
  },
  {
    key: "swiper-goesan-roum",
    to: "https://www.naturaldreampark.co.kr/g_facilities_information.html",
    pcImage: {
      src: "https://www.naturaldreampark.co.kr/images/main_banner10.jpg",
      alt: "괴산 로움호텔",
    },
    mobileImage: {
      src: "https://www.naturaldreampark.co.kr/mobile/images/main_banner05m.jpg?ver=3",
      alt: "괴산 로움호텔",
    },
  },
  {
    key: "swiper-gurye-sprout-tour",
    to: "https://www.naturaldreampark.co.kr/reservation_new4.html",
    pcImage: {
      src: "https://www.naturaldreampark.co.kr/images/main_banner11.jpg",
      alt: "구례 새싹농사 체험",
    },
    mobileImage: {
      src: "https://www.naturaldreampark.co.kr/mobile/images/main_banner06m.jpg?ver=3",
      alt: "구례 새싹농사 체험",
    },
  },
  {
    key: "swiper-gurye-hue-pension",
    to: "https://www.naturaldreampark.co.kr/reservation_hue_pension.html",
    pcImage: {
      src: "https://www.naturaldreampark.co.kr/images/main_banner12.jpg",
      alt: "구례 휴펜션",
    },
    mobileImage: {
      src: "https://www.naturaldreampark.co.kr/mobile/images/main_banner07m.jpg?ver=3",
      alt: "구례 휴펜션",
    },
  },
];

export type { BannerInfo };
export { mainBannerInfos };
