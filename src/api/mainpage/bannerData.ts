interface IntroBannerData {
  key: string;
  title: string;
  desc: string;
  image: ImageProps;
  to?: string;
}

const mainTopBannerData: IntroBannerData[] = [
  {
    key: "kanazawa-open",
    title: "가나자와 호텔 오픈",
    desc: "호텔 가나자와는 아름다운 호수와 다카오산의 푸른 품에 자리하고 있습니다.\n호수를 따라 여유로운 산책을 즐기거나 마을 주변에서 시작되는 다카오산 등산을 경험해 보세요",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/main-kanazawa.webp",
      alt: "가나자와 호텔 오픈",
    },
  },
  {
    key: "goesan-park",
    title: "괴산자연드림파크",
    desc: "공방견학과 V&B 검사센터 실험체험을 한번에!\n자연드림파크 치유와 힐링을 위한 견학프로그램",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/park.webp",
      alt: "괴산자연드림파크",
    },
  },
  {
    key: "hotel-roum",
    title: "호텔로움",
    desc: "'한가로움, 자유로움 등 <로움>을 위해 떠나는 여행'의\n의미를 담은 괴산자연드림파크의 호텔",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/hotel.webp",
      alt: "호텔",
    },
  },
];

const ArrivalBannerData: IntroBannerData[] = [
  {
    key: "kanazawa-reservation-open",
    to: "https://www.naturaldreampark.co.kr/kanazawa/intro.html",
    title: "가나자와 호텔 예약 오픈",
    desc: "웰빙, 그리고 항암생활을 위한 자연드림 여행",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/kanazawa.webp",
      alt: "가나자와 호텔 안내",
    },
  },
  {
    key: "dinner-package-open",
    to: "https://www.naturaldreampark.co.kr/board/community_view.html?number=3822",
    title: "디너·석식 패키지 오픈",
    desc: "자연드림의 특별한 디너를 즐겨보세요",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/fish-cake-soup.jpg",
      alt: "자연드림파크 호텔 패키지",
    },
  },
  {
    key: "jeonju-house-open",
    to: "https://www.naturaldreampark.co.kr/g_facilities_6.html",
    title: "전주집 오픈",
    desc: "전이 주인인 집, 전주집이 오픈했습니다",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/hanok.jpg",
      alt: "전주집 안내",
    },
  },
];

export { mainTopBannerData, ArrivalBannerData };
