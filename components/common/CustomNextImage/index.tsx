import Image from 'next/future/image';
import { ImageProps } from 'next/dist/client/future/image'; // next/dist/client/image.d

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
		const imageProps: ICustomNextImageProps = {
			unoptimized,
			// layout,
			src,
			placeholder,
			...props,
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
