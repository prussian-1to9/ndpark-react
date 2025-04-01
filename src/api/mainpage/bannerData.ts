interface BannerProps {
  key: string;
  title: string;
  desc: string;
  image: ImageProps;
  to?: string;
}

const mainTopBannerData: BannerProps[] = [
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

const arrivalBannerData: BannerProps[] = [
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

const movieBannerData: BannerProps[] = [
  {
    key: "movie-1st-planned",
    title: "목소리들",
    desc: "12세관람가 / 89분",
    image: {
      src: "https://cdn.jejusori.net/news/photo/202503/434504_460178_4653.jpg",
      alt: "목소리들 포스터",
    },
    to: "https://gurye.petitecine.com/",
  },
  {
    key: "movie-2nd-planned",
    title: "로비",
    desc: "15세관람가 / 106분",
    image: {
      src: "https://img.megabox.co.kr/SharedImg/2025/03/14/vKfqRUMxlGgE8asTfFJ2W6yqLrwF4nrx_420.jpg",
      alt: "로비 포스터",
    },
    to: "https://gurye.petitecine.com/",
  },
  {
    key: "movie-1st",
    title: "초혼",
    desc: "15세관람가 / 119분",
    image: {
      src: "https://img.megabox.co.kr/SharedImg/2025/03/25/73HQiIh2Xkf460PS610R2BM4IoaYflH7_420.jpg",
      alt: "초혼 포스터",
    },
    to: "https://petitecine.com/PETC/movieDetail?cinema_id=72&movie_id=2202",
  },
  {
    key: "movie-2nd",
    title: "승부",
    desc: "12세관람가 / 115분",
    image: {
      src: "https://img.megabox.co.kr/SharedImg/2025/02/27/wySnHjTunHLDXcv8KuzoCf28TnUoKejn_420.jpg",
      alt: "승부 포스터",
    },
    to: " https://petitecine.com/PETC/movieDetail?cinema_id=72&movie_id=2220",
  },
  {
    key: "movie-3rd",
    title: "스트리밍",
    desc: "청소년관람불가 / 91분",
    image: {
      src: "https://img.megabox.co.kr/SharedImg/2025/03/11/GQxDolcUt4Cg6Wx4yWS4TSEPrEsU0vA9_420.jpg",
      alt: "스트리밍 포스터",
    },
    to: "https://petitecine.com/PETC/movieDetail?cinema_id=72&movie_id=2243",
  },
];

const tourBannerData: BannerProps[] = [
  {
    key: "tour-jomullak",
    title: "조물락",
    desc: "조물조물 건강한 음식을 만드는 즐거움",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/jomullak.webp",
      alt: "조물락",
    },
    to: "https://www.naturaldreampark.co.kr/g_exper_information.html",
  },
  {
    key: "tour-ggomjirak",
    title: "꼼지락",
    desc: "어린이들이 수공예 즐거움을 경험할 수 있는 친환경 소품 만들기",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/ggomjirak.webp",
      alt: "꼼지락",
    },
    to: "https://www.naturaldreampark.co.kr/g_exper_2.html",
  },
  {
    key: "tour-workshop",
    title: "항암식품연구소와 공방 견학",
    desc: "괴산자연드림파크는 언제든지 열려있습니다.",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/lab.webp",
      alt: "항암식품연구소와 공방 견학",
    },
    to: "https://www.naturaldreampark.co.kr/g_gongbang_information.html?gubun=A",
  },
  {
    key: "tour-climbing",
    title: "클라이밍",
    desc: "조합원분들의 암 예방 운동을 돕기 위한 운동시설",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/climbing.webp",
      alt: "클라이밍",
    },
    to: "https://www.naturaldreampark.co.kr/g_public_ex.html",
  },
];

export type { BannerProps };
export {
  mainTopBannerData,
  arrivalBannerData,
  movieBannerData,
  tourBannerData,
};
