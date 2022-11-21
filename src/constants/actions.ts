export const setShowVideoAC = (isVideoShow: boolean) =>
  ({
    type: 'APP/SET-SHOW-VIDEO',
    payload: {
      isVideoShow,
    },
  } as const);

export type AppHandlerType = ReturnType<typeof setShowVideoAC>;
