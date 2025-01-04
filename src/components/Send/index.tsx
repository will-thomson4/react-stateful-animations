import Base from '../Base';
import Animation from '../../assets/send.json';
import { AnimationProps } from '../../types';

export default function Send({ id, ...props }: AnimationProps) {
  return <Base id={id} animationData={Animation} {...props} />;
}
