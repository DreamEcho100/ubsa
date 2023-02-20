import dynamic from 'next/dynamic';

const DynamicModal = dynamic(import('./index'), {
	ssr: false,
});

export default DynamicModal;
