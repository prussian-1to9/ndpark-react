interface NoticeProps {
  uid: number;
  type: "goesan" | "gurye";
  title: string;
  date: Date;
}

type NoticeType = NoticeProps["type"];
const noticeTypesData: Record<NoticeType, string> = {
  goesan: "괴산",
  gurye: "구례",
};

const noticeData: NoticeProps[] = [
  {
    uid: 3822,
    type: "goesan",
    title: "괴산자연드림파크 호텔+디너 패키지 출시안내 (2,3,4월 운영계획표)",
    date: new Date("2025-02-10"),
  },
  {
    uid: 3810,
    type: "goesan",
    title: "전산 시스템 점검으로 인한 웹사이트 이용안내",
    date: new Date("2025-01-21"),
  },
  {
    uid: 3809,
    type: "gurye",
    title: "전산 시스템 점검으로 인한 웹사이트 이용안내",
    date: new Date("2025-01-21"),
  },
  {
    uid: 3806,
    type: "goesan",
    title: "전산 시스템 점검으로 인한 웹사이트 이용안내",
    date: new Date("2025-01-14"),
  },
  {
    uid: 3805,
    type: "gurye",
    title: "전산 시스템 점검으로 인한 웹사이트 이용안내",
    date: new Date("2025-01-14"),
  },
  {
    uid: 3802,
    type: "goesan",
    title: "전산 시스템 점검으로 인한 웹사이트 이용안내",
    date: new Date("2025-01-09"),
  },
  {
    uid: 3801,
    type: "gurye",
    title: "전산 시스템 점검으로 인한 웹사이트 이용안내",
    date: new Date("2025-01-09"),
  },
];

export type { NoticeProps };
export { noticeTypesData, noticeData };
