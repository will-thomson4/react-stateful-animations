import Base from '../Base';
import Animation from '../../assets/download.json';
import { AnimationProps } from '../../types';

export default function Download({ id, ...props }: AnimationProps) {
  return <Base id={id} animationData={Animation} {...props} />;
}
