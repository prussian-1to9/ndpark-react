const footerUserLinks: LinkProps[] = [
  {
    key: "park-info",
    alt: "자연드림파크 소개",
    to: "https://www.naturaldreampark.co.kr/main.html",
  },
  {
    key: "provision",
    alt: "이용약관",
    to: "https://www.naturaldreampark.co.kr/provision.html",
  },
  {
    key: "privacy",
    alt: "개인정보보호정책",
    to: "https://www.naturaldreampark.co.kr/privacy.html",
  },
  {
    key: "reject-email",
    alt: "이메일무단수집거부",
    to: "https://www.naturaldreampark.co.kr/reject_email.html",
  },
  {
    key: "direction",
    alt: "오시는길",
    to: "https://www.naturaldreampark.co.kr/new_location.html",
  },
];

const footerFamilySiteLinks: LinkProps[] = [
  {
    key: "placeholder",
    alt: "패밀리 사이트",
    to: "none",
  },
  {
    key: "icoop",
    alt: "iCOOP생협연합회",
    to: "https://icoop.coop/",
  },
  {
    key: "icoop-store",
    alt: "(주)COOP스토어",
    to: "http://www.icoopstore.co.kr",
  },
  {
    key: "icoop-RnD",
    alt: "(재)iCOOP협동조합연구소",
    to: "http://icoop.re.kr",
  },
  {
    key: "icoop-school",
    alt: "iCOOP친환경급식(주)",
    to: "http://www.icoopfood.or.kr",
  },
  {
    key: "icoop-kids",
    alt: "자연드림키즈푸드",
    to: "http://www.icoopkids.or.kr",
  },
  {
    key: "icoop-farmRnD",
    alt: "사회적협동조합 탄소치유농업연구소",
    to: "http://icoopfarmer.com/",
  },
  {
    key: "icoop-saltroad",
    alt: "자연드림 솔트로드",
    to: "https://insaltroad.com/",
  },
  {
    key: "icoop-foodcure",
    alt: "(재)자연드림유기농치유연구재단",
    to: "http://foodcure.or.kr/",
  },
  {
    key: "icoop-cancerRnD",
    alt: "항암식품연구소",
    to: "http://a-cert.co.kr/",
  },
  {
    key: "icoop-recruit",
    alt: "SAPENet 채용마당",
    to: "https://incruit.inlifecare.or.kr/",
  },
  {
    key: "icoop-seedfd",
    alt: "(재)자연드림씨앗재단",
    to: "http://www.icoopseedfd.or.kr",
  },
  {
    key: "icoop-archive",
    alt: "iCOOP아카이브",
    to: "http://www.icooparchive.org",
  },
];
interface CorporateInfo {
  key: string;
  name: string;
  ceo: string;
  registrationNumber: string;
  email: string;
  tel: string;
  address: string;
}
const footerCorporateInfos: CorporateInfo[] = [
  {
    key: "ndpark-production-coop",
    name: "자연드림 생산기업 협동조합",
    ceo: "농업회사법인(주)해피푸르츠",
    registrationNumber: "433-81-01120",
    email: "organicm_d@naver.com",
    tel: "1833-5753",
    address: "충청북도 괴산군 칠성면 240 C동 1층(지원센터)",
  },
  {
    key: "ndpark-hue-center",
    name: "자연드림 생산기업 협동조합 휴센터",
    ceo: "농업회사법인(주)해피푸르츠",
    registrationNumber: "156-85-00843",
    email: "organicm_d@naver.com",
    tel: "1833-5753",
    address: "전라남도 구례군 용방면 용산로 107-77",
  },
  {
    key: "ndpark-roem-hotel",
    name: "(주)해피투어 괴산자연드림파크로움호텔",
    ceo: "정민영",
    registrationNumber: "416-81-91156(0005)",
    email: "icoopclc@hometax.go.kr",
    tel: "1833-5753",
    address: "충청북도 괴산군 칠성면 자연드림길 252",
  },
];

export type { CorporateInfo };
export { footerUserLinks, footerFamilySiteLinks, footerCorporateInfos };
