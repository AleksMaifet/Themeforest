import React, { useContext } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Image from '@/components/Image';
import { Context } from '@/components/Provider/contex';
import { PNG, setShowVideoAC, Video } from '@/constants';

import { Container, ImageContainer, VideoContainer, VideoWrapper } from './styles';

const { VideoBg } = Video;
const { FirstImageHomeSection } = PNG;

const VideoSection = (): ReturnComponentType => {
  const {
    state: { isVideoShow },
    dispatch,
  } = useContext(Context);

  const setEndedVideo = (): void => {
    dispatch(setShowVideoAC(false));
  };

  return (
    <Container>
      {isVideoShow ? (
        <VideoContainer>
          <VideoWrapper autoPlay muted src={VideoBg} onEnded={setEndedVideo} />
        </VideoContainer>
      ) : (
        <ImageContainer>
          <Image context={FirstImageHomeSection} />
        </ImageContainer>
      )}
    </Container>
  );
};

export default VideoSection;
