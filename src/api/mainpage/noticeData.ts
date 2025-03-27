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
    uid: 3857,
    type: "gurye",
    title: "구례자연드림파크 숙박 오픈일정 변경 안내",
    date: new Date("2025-03-18 15:47:55"),
  },
  {
    uid: 3839,
    type: "goesan",
    title: "자연드림파크 회원가입 및 로그인 방식이 변경되어 안내드립니다.",
    date: new Date("2025-02-21 17:32:27"),
  },
];

export type { NoticeProps };
export { noticeTypesData, noticeData };
