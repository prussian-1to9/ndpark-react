import React from "react";

import { getNoticeTypeString, getNoticeData } from "@api/mainpage";

import AdditionalContext from "@components/MainPage/AdditionalContext";

const notices = getNoticeData();

const NoticeContent: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {notices.map((notice) => (
        <AdditionalContext
          key={`notice-${notice.uid}`}
          heading={getNoticeTypeString(notice.type)}
          headingType={notice.type}
          title={notice.title}
          to={`https://www.naturaldreampark.co.kr/board/community_view.html?number=${notice.uid}`}
          date={notice.date}
        />
      ))}
    </div>
  );
};

export default NoticeContent;
