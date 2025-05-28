import Image, { ImageProps } from 'next/image';
import { getBasePath } from '@/utils/path';

type AppImageProps = Omit<ImageProps, 'src'> & {
  src: string | null | undefined;
};

export default function AppImage({ src, ...props }: AppImageProps) {
  // Handle undefined or null src
  if (!src) {
    // Provide a fallback image or return null
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${props.className || ''}`}
        style={{ 
          width: props.width || '100%', 
          height: props.height || '100%',
          position: props.fill ? 'absolute' : 'relative',
          inset: props.fill ? 0 : 'auto'
        }}
      >
        <span className="text-gray-400">No Image</span>
      </div>
    );
  }
  
  const fullSrc = src.startsWith('/') 
    ? `${getBasePath()}${src}` 
    : src;
  
  // Remove width and height if fill is true
  if (props.fill) {
    const { width, height, ...restProps } = props;
    return <Image {...restProps} src={fullSrc} />;
  }
  
  return <Image {...props} src={fullSrc} />;
}