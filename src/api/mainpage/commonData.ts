interface HotelProps {
  key: string;
  name: string;
  to: string;
  image: ImageProps;
  roomTypes?: string[];
}

const moviePrices = [
  {
    type: "2D",
    weekday: 9000,
    weekend: 10000,
  },
  {
    type: "3D",
    weekday: 11000,
    weekend: 12000,
  },
];
const hotelInfos: HotelProps[] = [
  {
    key: "roum1",
    name: "로움호텔 1관",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/roum1.jpg",
      alt: "로움호텔 1관",
    },
    roomTypes: ["스탠다드 트윈", "디럭스", "패밀리"],
    to: "https://www.naturaldreampark.co.kr/g_facilities_information.html",
  },
  {
    key: "roum2",
    name: "로움호텔 2관",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/roum2.jpg",
      alt: "로움호텔 2관",
    },
    roomTypes: ["스탠다드 트윈", "스탠다드 더블", "디럭스"],
    to: "https://www.naturaldreampark.co.kr/g_facilities_information.html",
  },
  {
    key: "roum-gurye",
    name: "로움호텔구례",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/roum-gurye.jpg",
      alt: "로움호텔구례",
    },
    roomTypes: ["스탠다드", "패밀리", "디럭스"],
    to: "https://www.naturaldreampark.co.kr/reservation_hue_new.html",
  },
  {
    key: "hue-pension",
    name: "휴펜션",
    image: {
      src: "https://www.naturaldreampark.co.kr/images/Xfile/huepension.jpg",
      alt: "휴펜션",
    },
    to: "https://www.naturaldreampark.co.kr/reservation_hue_pension.html",
  },
];

export { moviePrices, hotelInfos };
