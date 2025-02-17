const headerFamilySiteLinks: LinkProps[] = [
  {
    key: "icoop-mall",
    to: "https://www.icoop.or.kr/coopmall/shopMain.phtm",
    alt: "자연드림",
  },
  {
    key: "icoop-benefit",
    to: "https://www.icoop.or.kr/coopmall/jehyu_brand_new.phtm",
    alt: "조합원 혜택",
  },
];

const signedInHeaderUserLinks: LinkProps[] = [
  {
    key: "signout",
    to: "/signout",
    alt: "로그아웃",
  },
  {
    key: "mypage",
    to: "/mypage",
    alt: "마이페이지",
  },
  {
    key: "community",
    to: "https://www.naturaldreampark.co.kr/board/community.html",
    alt: "고객센터",
  },
  {
    key: "wishlist",
    to: "https://www.naturaldreampark.co.kr/wishlist.php?type=B",
    alt: "장바구니",
  },
];

const signedOutHeaderUserLinks: LinkProps[] = [
  {
    key: "signin",
    to: "/signin",
    alt: "로그인",
  },
  {
    key: "mypage",
    to: "/mypage",
    alt: "마이페이지",
  },
  {
    key: "community",
    to: "https://www.naturaldreampark.co.kr/board/community.html",
    alt: "고객센터",
  },
];

const headerMenuLinks: LinkProps[] = [
  {
    key: "real-time-reservation",
    to: "https://www.naturaldreampark.co.kr",
    alt: "실시간 예약",
  },
  {
    key: "goesan-ndpark",
    to: "https://www.naturaldreampark.co.kr/goesan_information.html",
    alt: "괴산자연드림파크",
  },
  {
    key: "gurye-ndpark",
    to: "https://www.naturaldreampark.co.kr/information.html",
    alt: "구례자연드림파크",
  },
  {
    key: "housing-complex",
    to: "https://www.naturaldreampark.co.kr/home_information.html",
    alt: "주택단지",
  },
  {
    key: "events",
    to: "https://www.naturaldreampark.co.kr/festival3_history.html",
    alt: "이벤트",
  },
];

const headerDetailMenuLinks: { [key: string]: LinkProps[] } = {
  "real-time-reservation": [
    {
      key: "reservation-goesan-roum1",
      to: "https://www.naturaldreampark.co.kr/order_no_rest_new.php?group_gubun=A&type=B",
      alt: "괴산 로움1관",
    },
    {
      key: "reservation-goesan-roum2",
      to: "https://www.naturaldreampark.co.kr/order_no_rest_new.php?group_gubun=J&type=B",
      alt: "괴산 로움2관",
    },
    {
      key: "reservation-gurye-hue-center",
      to: "https://www.naturaldreampark.co.kr/order_no_rest_new.php?group_gubun=A",
      alt: "구례 휴센터",
    },
    {
      key: "reservation-gurye-hue-pension",
      to: "https://www.naturaldreampark.co.kr/order_no_rest_new.php?group_gubun=C",
      alt: "구례 휴펜션",
    },
    {
      key: "reservation-goesan-heal-program",
      to: "https://www.naturaldreampark.co.kr/order_no_heal.php?type=B",
      alt: "괴산 치유프로그램",
    },
    {
      key: "reservation-itb",
      to: "https://www.naturaldreampark.co.kr/reservation_public/order_no_public.php?type=B",
      alt: "인투더뷰티",
    },
    {
      key: "reservation-lymph",
      to: "https://www.naturaldreampark.co.kr/reservation_public/order_no_public.php?type=B",
      alt: "림프세신",
    },
    {
      key: "reservation-gym",
      to: "https://www.naturaldreampark.co.kr/reservation_public/order_no_public.php?type=B&select_type=B",
      alt: "운동시설",
    },
  ],
  "goesan-ndpark": [
    {
      key: "goesan-ndpark-info",
      to: "https://www.naturaldreampark.co.kr/goesan_information.html",
      alt: "소개",
    },
    {
      key: "goesan-workshop-info",
      to: "https://www.naturaldreampark.co.kr/g_gongbang_information.html?gubun=A",
      alt: "공방안내(Map)",
    },
    {
      key: "goesan-workshop-tour",
      to: "https://www.naturaldreampark.co.kr/g_gongbang_book.html",
      alt: "공방견학안내",
    },
    {
      key: "goesan-experience-info",
      to: "https://www.naturaldreampark.co.kr/g_exper_information.html",
      alt: "체험안내",
    },
    {
      key: "goesan-roum-info",
      to: "https://www.naturaldreampark.co.kr/g_facilities_information.html",
      alt: "로움(호텔)",
    },
    {
      key: "goesan-facilities-info",
      to: "https://www.naturaldreampark.co.kr/g_facilities_1.html",
      alt: "부대시설안내",
    },
    {
      key: "goesan-public-facilities",
      to: "https://www.naturaldreampark.co.kr/g_public_book.html",
      alt: "공동이용시설",
    },
    {
      key: "goesan-tourist-attractions",
      to: "https://www.naturaldreampark.co.kr/tour_info.html",
      alt: "인근관광명소",
    },
    {
      key: "goesan-directions",
      to: "https://www.naturaldreampark.co.kr/new_location2.html",
      alt: "찾아오시는 길",
    },
    {
      key: "goesan-heal-program",
      to: "https://www.naturaldreampark.co.kr/g_heal_book.html?type=B",
      alt: "치유프로그램",
    },
  ],
  "gurye-ndpark": [
    {
      key: "gurye-ndpark-info",
      to: "https://www.naturaldreampark.co.kr/information.html",
      alt: "소개",
    },
    {
      key: "gurye-workshop-info",
      to: "https://www.naturaldreampark.co.kr/reservation_new3.html",
      alt: "공방안내(Map)",
    },
    {
      key: "gurye-workshop-tour",
      to: "https://www.naturaldreampark.co.kr/reservation_new.html",
      alt: "공방견학안내",
    },
    {
      key: "gurye-marketing-tour",
      to: "https://www.naturaldreampark.co.kr/reservation_new4.html",
      alt: "마케팅센터체험",
    },
    {
      key: "gurye-experience-info",
      to: "https://www.naturaldreampark.co.kr/reservation_new2.html",
      alt: "체험안내",
    },
    {
      key: "gurye-hue-pension",
      to: "https://www.naturaldreampark.co.kr/reservation_hue_pension.html",
      alt: "휴펜션",
    },
    {
      key: "gurye-hue-center",
      to: "https://www.naturaldreampark.co.kr/reservation_hue_new.html",
      alt: "휴센터",
    },
    {
      key: "gurye-facilities-info",
      to: "https://www.naturaldreampark.co.kr/reservation_food.html",
      alt: "부대시설안내",
    },
    {
      key: "gurye-direction",
      to: "https://www.naturaldreampark.co.kr/new_location.html",
      alt: "찾아오시는 길",
    },
  ],
  "housing-complex": [
    {
      key: "housing-complex-goesan",
      to: "https://www.naturaldreampark.co.kr/home_information.html",
      alt: "괴산주택단지",
    },
    {
      key: "housing-community-center",
      to: "https://www.naturaldreampark.co.kr/community_center.html",
      alt: "커뮤니티센터",
    },
    {
      key: "housing-complex-gurye",
      to: "https://www.naturaldreampark.co.kr/home_information_goesan.html",
      alt: "구례주택단지",
    },
  ],
  events: [
    {
      key: "event-rockfest-gurye",
      to: "https://www.naturaldreampark.co.kr/festival3_history.html",
      alt: "구례자연드림 뮤직페스티벌",
    },
    {
      key: "event-rockfest-history",
      to: "https://www.naturaldreampark.co.kr/festival_2023_hisrock.html",
      alt: "지난 락페스티벌 보기",
    },
    {
      key: "event-history",
      to: "https://www.naturaldreampark.co.kr/festival2.html",
      alt: "지난 행사",
    },
  ],
};

export {
  headerFamilySiteLinks,
  signedInHeaderUserLinks,
  signedOutHeaderUserLinks,
  headerMenuLinks,
  headerDetailMenuLinks,
};
