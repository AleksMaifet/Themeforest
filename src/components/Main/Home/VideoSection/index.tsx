import React, { useContext } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Image from '@/components/Image';
import { Context } from '@/components/Provider/contex';
import { PNG, setShowVideoAC, Video } from '@/constants';
import theme from '@/theme';

import { Container, ImageContainer, VideoContainer } from './styles';

const { VideoBg } = Video;
const { FirstImageHomeSection } = PNG;

const videoStyle = {
  opacity: theme.opacity.opacity50,
  objectFit: 'cover' as const,
  height: '585px',
  width: `${theme.spaces[14]}%`,
};

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
          <video
            style={videoStyle}
            autoPlay
            muted
            src={VideoBg}
            onEnded={setEndedVideo}
          />
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
