import Base from '../Base';
import Animation from '../../assets/download.json';
import { Props } from '../../types';

export default function Download({ id, ...props }: Props) {
  return <Base id={id} animationData={Animation} {...props} />;
}
