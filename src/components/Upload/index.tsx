import Base from '../Base';
import Animation from '../../assets/upload.json';
import { AnimationProps } from '../../types';

export default function Upload({ id, ...props }: AnimationProps) {
  return <Base id={id} animationData={Animation} {...props} />;
}
