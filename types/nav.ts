import { MDXComponents } from "mdx/types";

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface MainNavProps {
    items?: NavItem[];
}

export interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
}
export interface MdxProps {
  code: string
}
export interface MDXContentProps {
  [props: string]: unknown
  components?: MDXComponents
}
export interface BlogProps {
  params: {
    slug: string;
  };
}

export interface MainNavProps {
    items?: NavItem[];
}
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string
  disabled?: boolean
}

export interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
}
