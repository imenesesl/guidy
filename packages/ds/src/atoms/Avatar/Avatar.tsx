import type { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  size?: AvatarSize;
  name: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function Avatar({ size = 'md', name, src, className, ...rest }: AvatarProps): React.JSX.Element {
  const sizeClass = styles[size];

  if (src) {
    return (
      <img
        {...rest}
        src={src}
        alt={name}
        className={[styles['image'], sizeClass, className].filter(Boolean).join(' ')}
      />
    );
  }

  return (
    <div className={[styles['fallback'], sizeClass, className].filter(Boolean).join(' ')}>
      {getInitials(name)}
    </div>
  );
}
