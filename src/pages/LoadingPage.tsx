import React from "react";
import { Link } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";

import Image from "@components/Image";

import { logoImageNDPark } from "@assets/image";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center h-screen w-screen">
      <Hourglass colors={["#a01749", "#d394ab"]} height={80} width={80} />
      <div className="flex flex-col gap-2 items-center text-center">
        <p>페이지를 불러오고 있습니다.</p>
        <span>
          상태가 지속될 경우 상담센터에 문의 바랍니다.
          <Link to="tel:1577-6009">(Tel. 1577-6009)</Link>
        </span>
        <Image image={logoImageNDPark} />
      </div>
    </div>
  );
};

export default LoadingPage;
