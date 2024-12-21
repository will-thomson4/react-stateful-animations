import Base from '../Base';
import Animation from '../../assets/upload.json';
import { Props } from '../../types';

export default function Upload({ id, ...props }: Props) {
  return <Base id={id} animationData={Animation} {...props} />;
}
