import Image, { ImageProps } from 'next/image';
import { getBasePath } from '@/utils/path';

type AppImageProps = Omit<ImageProps, 'src'> & {
  src: string;
};

export default function AppImage({ src, ...props }: AppImageProps) {
  const fullSrc = src.startsWith('/') 
    ? `${getBasePath()}${src}` 
    : src;
  
  return <Image {...props} src={fullSrc} />;
}