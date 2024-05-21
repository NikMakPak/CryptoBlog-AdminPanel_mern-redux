import React, { useState } from "react";

import { images } from "../../../constants";

const CTA = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>

      {showInfo ? (
        <section className="relative bg-dark-hard px-5 py-10 md:py-20">
          <div className="container grid grid-cols-12 mx-auto lg:place-items-center">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
                Исследуйте будущее криптовалют с помощью нашего инновационного
                блога
              </h2>
              <p className="text-dark-light text-sm leading-7 mt-6 md:text-base lg:text-left">
                Получайте информацию, новости и аналитические материалы о
                последних разработках в постоянно развивающемся мире криптовалют
                и блокчейна технология. Наш блог предлагает уникальный взгляд на
                отрасль, освещая такие темы, как инвестиционные стратегии, новые
                тенденции и практическое применение.
              </p>
              <div className="flex justify-between items-center mt-6">
                <button
                  className="px-4 py-3 rounded-lg bg-primary text-white font-bold"
                  onClick={toggleInfo}
                >
                  Скрыть
                </button>
              </div>
            </div>
            <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
              <div className="w-3/4 mx-auto relative">
                <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
                <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]" />
                <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
                  <img
                    src={images.CtaImage}
                    alt="title"
                    className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                  />
                  <div className="p-5">
                    <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                      Будущее криптовалюты
                    </h2>
                    <p className="text-dark-light mt-3 text-sm md:text-lg">
                      Будьте на шаг впереди с нашими экспертными мнениями о
                      будущем криптовалют и технологии блокчейн.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex justify-center items-center h-[100px] bg-dark-hard">
          <button
            className="px-4 py-3 rounded-lg bg-primary text-white font-bold"
            onClick={toggleInfo}
          >
            Узнать про возможности
          </button>
        </div>
      )}
    </>
  );
};

export default CTA;
