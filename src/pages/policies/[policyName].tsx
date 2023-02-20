import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import fs from "fs";

import path from "path";

import { marked } from "marked";

import matter from "gray-matter";

import { z } from "zod";

import Head from "next/head";
import { cx } from "class-variance-authority";

const policyMetadataZodSchema = z.object({ title: z.string() });

interface Props {
  htmlContent: string;
  metadata: z.infer<typeof policyMetadataZodSchema>;
}

const PolicyPage: NextPage<Props> = ({ metadata, htmlContent }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <div className="h-main-nav-page bg-neutral-900" />
      <div className="main-content-section flex max-w-[100ch] flex-col gap-4 p-8">
        <h1 className="text-h1">{metadata.title}</h1>
        <div
          className={cx(
            "rounded-md border-[0.25rem] border-solid border-neutral-900 p-8",
            "prose"
            // "prose mx-auto flex max-w-full flex-col py-4 text-inherit",
            // "prose-p:my-2",
            // "lg:prose-xl",
            // "prose-headings:text-inherit",
            // "prose-strong:text-inherit",
            // "prose-a:text-inherit",
            // "prose-h2:mt-4 prose-h2:mb-2",
            // "prose-pre:p-0"
          )}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const policiesFolderPath = path.join(
    process.cwd(),
    "src/utils/appData/policies"
  );
  const policiesFiles = fs.readdirSync(policiesFolderPath);

  const paths = policiesFiles
    .filter((fileName) => fileName.slice(fileName.length - 3) === ".md")
    .map((fileName) => {
      // Read the file contents
      return { params: { policyName: fileName.slice(0, fileName.length - 3) } };
    });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const { policyName } = z.object({ policyName: z.string() }).parse(params);

  const policiesFolderPath = path.join(
    process.cwd(),
    "src/utils/appData/policies"
  );

  const markdown = fs.readFileSync(
    path.join(policiesFolderPath, `${policyName}.md`),
    "utf-8"
  );

  // Parse the metadata and content
  const parsedFile = matter(markdown);

  const metadata = policyMetadataZodSchema.parse(parsedFile.data);
  // Convert the content from Markdown to HTML
  const htmlContent = marked(parsedFile.content);

  return {
    props: {
      metadata,
      htmlContent,
    },
  };
};

export default PolicyPage;
