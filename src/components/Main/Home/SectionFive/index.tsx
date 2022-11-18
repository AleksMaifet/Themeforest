import React, { memo, SyntheticEvent, useCallback, useRef, useState } from 'react';

import SwiperClass, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Testimonial from '@/components/Main/Home/SectionFive/Testimonial';
import SwiperController from '@/components/SwiperController';
import {
  ARROW_SWIPER_NEXT,
  ENDING_SWIPER_VALUE,
  STARTING_SWIPER_VALUE,
  SVG,
  SVG_ATTRIBUTES,
} from '@/constants';
import { HomePageSection } from '@/mocks';
import theme from '@/theme';

import { Container, ContainerContext, ContainerTitle, ContainerWrapper } from './styles';
import { IFifthSection } from './types';

const { ArrowLeft, ArrowRight } = SVG;

const {
  HomeFifthSection: { clients },
} = HomePageSection;

const arrowStyle = {
  width: theme.spaces[9],
  color: 'black',
  backGroundColor: theme.colors.Background,
};

const FifthSection: React.FC<IFifthSection> = ({ title }): ReturnComponentType => {
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
                icon={<ArrowLeft />}
                isDisabled={disablePrevSlide}
                callback={handleSwiperController}
              />
            }
            rightIcon={
              <PrimaryButton
                styleOptions={arrowStyle}
                icon={<ArrowRight />}
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
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={100}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {clients.map(el => (
              <SwiperSlide key={el.id}>
                <Testimonial value={el} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ContainerContext>
      </ContainerWrapper>
    </Container>
  );
};

export default memo(FifthSection);
