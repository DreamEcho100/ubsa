import Image from 'next/image';
import { ImageProps } from 'next/dist/client/image'; // next/dist/client/image.d

interface ICustomNextImageProps extends ImageProps {
	placeholder?: 'blur' | 'empty';
	role?: string;
}

const CustomNextImage = ({
	unoptimized = true,
	src,
	alt = '',
	placeholder = 'empty',
	blurDataURL,
	...props
}: ICustomNextImageProps) => {
	const handleImageProps = () => {
		const imageProps: Omit<ICustomNextImageProps, 'alt'> = {
			unoptimized,
			// layout,
			src,
			placeholder,
			...props
		};

		if (placeholder !== 'empty') {
			if (blurDataURL) imageProps.blurDataURL = blurDataURL;
			else if (src && typeof src === 'string') imageProps.blurDataURL = src;
		}

		return imageProps;
	};

	return <Image alt={alt} {...handleImageProps()} />;
};

export default CustomNextImage;
