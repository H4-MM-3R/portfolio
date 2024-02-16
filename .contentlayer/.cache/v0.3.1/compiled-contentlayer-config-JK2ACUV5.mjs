// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  },
  slugAsParam: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    },
    image: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
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
          theme: "solarized-dark"
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            arialabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JK2ACUV5.mjs.map
