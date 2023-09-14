import { AccountCard } from "./AccountCard";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { SliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { cn } from "../../../../../app/utils/cn";

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    toggleValuesVisibility,
    areValuesVisible
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong
            className={cn(
              "text-2xl tracking-[-1px] text-white",
              !areValuesVisible && 'blur-[10px]'
            )}
          >
            {formatCurrency(1000)}
          </strong>

          <button
            className="w-8 h-8 flex items-center justify-center"
            onClick={toggleValuesVisibility}
          >
            <EyeIcon open={!areValuesVisible}/>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 500 ? 2.13 : 1.2}
            onSlideChange={swiper => {
              setSliderState({
                isBegining: swiper.isBeginning,
                isEnd: swiper.isEnd,
              })
            }}
          >
            <div slot="container-start" className="flex items-center justify-between mb-4">
              <strong className="tracking-[-1px] text-white text-lg font-bold">
                Minhas contas
              </strong>

              <SliderNavigation
                isBeginning={sliderState.isBegining}
                isEnd={sliderState.isEnd}
              />
            </div>

            <SwiperSlide>
              <AccountCard
                color="#7950f2"
                name="Nubank"
                balance={1000.69}
                type="CASH"
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                color="#333"
                name="XP"
                balance={22009}
                type="INVESTMENT"
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                color="#0f0"
                name="Carteira"
                balance={1000}
                type="CASH"
              />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
  )
}
