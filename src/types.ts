export type AnimationCallbacks = {
  start: () => void;
  end: () => void;
};

export interface AnimationProps {
  id: string;
  className?: string;
  style?: React.CSSProperties;
}
