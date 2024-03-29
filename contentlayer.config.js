import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath,
    },
    slugAsParam: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
};

export const Doc = defineDocumentType(() => ({
    name: "Doc",
    filePathPattern: "blog/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
        image: {
            type: "string",
            required: true,
        },
        date: {
            type: "string",
            default: true,
        },
        duration: {
            type: "number",
            default: true,
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "src/content",
    documentTypes: [Doc],
    disableImportAliasWarning: true,
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "solarized-dark",
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        arialabel: "Link to section",
                    },
                },
            ],
        ],
    },
});
