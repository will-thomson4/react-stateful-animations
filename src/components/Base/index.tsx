import React, { useEffect } from 'react';
import Lottie, { ILottie } from '@lottielab/lottie-player/react';
import { AnimationProps } from '../../types';
import { registerAnimation, unregisterAnimation } from '../animations';

interface BaseProps extends AnimationProps {
  animationData: any;
}

const LottieAnimation = ({ id, animationData, ...props }: BaseProps) => {
  const ref = React.useRef<ILottie | null>(null);

  const switchState = (stateName: string) => {
    ref.current?.interactivity?.trigger(stateName);
  };

  useEffect(() => {
    const callbacks = {
      start: () => {
        switchState('start');
      },
      end: () => {
        switchState('end');
      },
    };

    registerAnimation(id, callbacks);
    return () => unregisterAnimation(id);
  }, [id]);

  return <Lottie ref={ref} lottie={animationData} {...props} />;
};

export default LottieAnimation;
