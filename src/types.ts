export type AnimationCallbacks = {
  start: () => void;
  end: () => void;
};

export interface Props {
  id: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface BaseProps extends Props {
  animationData: any;
}
