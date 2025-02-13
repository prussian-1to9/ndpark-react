import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Image from "@components/Image";
import { useViewPort } from "@utils/Viewport";

const MainBannerSection: React.FC<{ banners: BannerProps[] }> = ({
  banners,
}) => {
  const { isMobile } = useViewPort();

  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        centeredSlides={true}
        grid={{ rows: 1 }}
        flipEffect={{ slideShadows: false }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.key}>
            <Link to={banner.to ?? ""}>
              <Image
                image={
                  isMobile ? banner.mobileImage ?? banner.image : banner.image
                }
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainBannerSection;
