import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import { z } from 'zod';

const policyMetadataZodSchema = z.object({ title: z.string() });

interface Props {
	htmlContent: string;
	metadata: z.infer<typeof policyMetadataZodSchema>;
}

const Policy: NextPage<Props> = ({ metadata, htmlContent }) => {
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: htmlContent }} />
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const policiesFolderPath = path.join(
		process.cwd(),
		'src/utils/appData/policies'
	);
	const policiesFiles = await fs.readdirSync(policiesFolderPath);

	const paths = policiesFiles.map((fileName) => {
		// Read the file contents
		return { params: { policyName: fileName.slice(0, fileName.length - 3) } };
	});

	console.log('paths', paths);

	// const files = await fs.readdirSync(policiesFolderPath);

	return {
		paths,
		fallback: false
	};
};
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	const { policyName } = z.object({ policyName: z.string() }).parse(params);

	const policiesFolderPath = path.join(
		process.cwd(),
		'src/utils/appData/policies'
	);

	const markdown = fs.readFileSync(
		path.join(policiesFolderPath, `${policyName}.md`),
		'utf-8'
	);

	// Parse the metadata and content
	const parsedFile = matter(markdown);

	const metadata = policyMetadataZodSchema.parse(parsedFile.data);
	// Convert the content from Markdown to HTML
	const htmlContent = marked(parsedFile.content);

	return {
		props: {
			metadata,
			htmlContent
		}
	};
};

export default Policy;
