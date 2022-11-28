import React, { memo, SyntheticEvent, useCallback, useRef, useState } from 'react';

import SwiperClass, { Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import {
  ARROW_SWIPER_NEXT,
  DEFAULT_SWIPER_DELAY_VALUE,
  DEFAULT_SWIPER_SPACE_BETWEEN_VALUE,
  ENDING_SWIPER_VALUE,
  STARTING_SWIPER_VALUE,
  SVG_ATTRIBUTES,
} from '@/constants';
import theme from '@/theme';

import { Container, ContainerContext, ContainerTitle, ContainerWrapper } from './styles';
import SwiperController from './SwiperController';
import { IFifthSection } from './types';

const arrowStyle = {
  width: theme.spaces[9],
  color: 'black',
  backgroundColor: theme.colors.Background,
};

const SwiperComponent: React.FC<IFifthSection> = ({
  title,
  children,
  autoPlay,
  spaceBetween,
  prevController,
  nextController,
}): ReturnComponentType => {
  const swiperRef = useRef<SwiperClass>();

  const [disablePrevSlide, setDisablePrevSlide] = useState<boolean>(true);
  const [disableNextSlide, setDisableNextSlide] = useState<boolean>(false);

  const handleDisableController = (progress: number): void => {
    switch (progress) {
      case STARTING_SWIPER_VALUE:
        setDisablePrevSlide(true);
        setDisableNextSlide(false);
        break;
      case ENDING_SWIPER_VALUE:
        setDisablePrevSlide(false);
        setDisableNextSlide(prev => !prev);
        break;
      default:
        setDisablePrevSlide(false);
        setDisableNextSlide(false);
    }
  };

  const handleSwiperController = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
    if (e.currentTarget.children[SVG_ATTRIBUTES].id === ARROW_SWIPER_NEXT) {
      swiperRef.current?.slideNext();
      return;
    }

    swiperRef.current?.slidePrev();
  }, []);

  return (
    <Container>
      <ContainerWrapper>
        <ContainerTitle>
          {title}
          <SwiperController
            leftIcon={
              <PrimaryButton
                styleOptions={arrowStyle}
                icon={prevController}
                isDisabled={disablePrevSlide}
                callback={handleSwiperController}
              />
            }
            rightIcon={
              <PrimaryButton
                styleOptions={arrowStyle}
                icon={nextController}
                isDisabled={disableNextSlide}
                callback={handleSwiperController}
              />
            }
          />
        </ContainerTitle>
        <ContainerContext>
          <Swiper
            onBeforeInit={swiper => {
              swiperRef.current = swiper;
            }}
            onProgress={(_, progress) => handleDisableController(progress)}
            autoplay={
              autoPlay && {
                delay: DEFAULT_SWIPER_DELAY_VALUE,
                disableOnInteraction: false,
              }
            }
            slidesPerView={3}
            spaceBetween={spaceBetween || DEFAULT_SWIPER_SPACE_BETWEEN_VALUE}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {children}
          </Swiper>
        </ContainerContext>
      </ContainerWrapper>
    </Container>
  );
};

export default memo(SwiperComponent);
