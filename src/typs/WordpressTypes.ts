/**
 * Object type for the "post" object in the route /wp/v2/posts.
 */
export type Post = {
  /** The date the post was published, in the site's timezone. */
  date: string | null;
  /** The date the post was published, as GMT. */
  date_gmt: string | null;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the post. */
  id: number;
  /** URL to the post. */
  link: string;
  /** The date the post was last modified, in the site's timezone. */
  modified: string;
  /** The date the post was last modified, as GMT. */
  modified_gmt: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug: string;
  /** A named status for the post. */
  status:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** Type of post. */
  type: string;
  /** A password to protect access to the content and excerpt. */
  password: string;
  /** Permalink template for the post. */
  permalink_template: string;
  /** Slug automatically generated from the post title. */
  generated_slug: string;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID for the author of the post. */
  author: number;
  /** The excerpt for the post. */
  excerpt: {
    /** Excerpt for the post, as it exists in the database. */
    raw: string;
    /** HTML excerpt for the post, transformed for display. */
    rendered: string;
    /** Whether the excerpt is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media: number;
  /** Whether or not comments are open on the post. */
  comment_status: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status: "open" | "closed";
  /** The format for the post. */
  format:
    | "standard"
    | "aside"
    | "chat"
    | "gallery"
    | "link"
    | "image"
    | "quote"
    | "status"
    | "video"
    | "audio";
  /** Meta fields. */
  meta: {};
  /** Whether or not the post should be treated as sticky. */
  sticky: boolean;
  /** The theme file to use to display the post. */
  template: string;
  /** The terms assigned to the post in the category taxonomy. */
  categories: number[];
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags: number[];
};
/**
 * Endpoint request arguments for the GET /wp/v2/posts route.
 */
export type GetPostsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by post attribute. */
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "include_slugs"
    | "title";
  /** Limit result set to posts with one or more specific slugs. */
  slug?: string[];
  /** Limit result set to posts assigned one or more statuses. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "trash"
    | "auto-draft"
    | "inherit"
    | "request-pending"
    | "request-confirmed"
    | "request-failed"
    | "request-completed"
    | "acf-disabled"
    | "any"[];
  /** Limit result set based on relationship between multiple taxonomies. */
  tax_relation?: "AND" | "OR";
  /** Limit result set to items with specific terms assigned in the categories taxonomy. */
  categories?: Record<string, unknown> | unknown[];
  /** Limit result set to items except those with specific terms assigned in the categories taxonomy. */
  categories_exclude?: Record<string, unknown> | unknown[];
  /** Limit result set to items with specific terms assigned in the tags taxonomy. */
  tags?: Record<string, unknown> | unknown[];
  /** Limit result set to items except those with specific terms assigned in the tags taxonomy. */
  tags_exclude?: Record<string, unknown> | unknown[];
  /** Limit result set to items that are sticky. */
  sticky?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/posts route.
 */
export type CreatePostRequestArguments = {
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: {
    /** Excerpt for the post, as it exists in the database. */
    raw: string;
    /** HTML excerpt for the post, transformed for display. */
    rendered: string;
    /** Whether the excerpt is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed";
  /** The format for the post. */
  format?:
    | "standard"
    | "aside"
    | "chat"
    | "gallery"
    | "link"
    | "image"
    | "quote"
    | "status"
    | "video"
    | "audio";
  /** Meta fields. */
  meta?: {};
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The theme file to use to display the post. */
  template?: string;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
};
/**
 * Endpoint request arguments for the GET /wp/v2/posts/(?P<id>[\d]+) route.
 */
export type GetPostRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** The password for the post if it is password protected. */
  password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/posts/(?P<id>[\d]+) route.
 */
export type UpdatePostRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: {
    /** Excerpt for the post, as it exists in the database. */
    raw: string;
    /** HTML excerpt for the post, transformed for display. */
    rendered: string;
    /** Whether the excerpt is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed";
  /** The format for the post. */
  format?:
    | "standard"
    | "aside"
    | "chat"
    | "gallery"
    | "link"
    | "image"
    | "quote"
    | "status"
    | "video"
    | "audio";
  /** Meta fields. */
  meta?: {};
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The theme file to use to display the post. */
  template?: string;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/posts/(?P<id>[\d]+) route.
 */
export type DeletePostRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
};
/**
 * Object type for the "post-revision" object in the route /wp/v2/posts/(?P<parent>[\d]+)/revisions.
 */
export type PostRevision = {
  /** The ID for the author of the revision. */
  author: number;
  /** The date the revision was published, in the site's timezone. */
  date: string;
  /** The date the revision was published, as GMT. */
  date_gmt: string;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the revision. */
  id: number;
  /** The date the revision was last modified, in the site's timezone. */
  modified: string;
  /** The date the revision was last modified, as GMT. */
  modified_gmt: string;
  /** The ID for the parent of the revision. */
  parent: number;
  /** An alphanumeric identifier for the revision unique to its type. */
  slug: string;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The excerpt for the post. */
  excerpt: {
    /** Excerpt for the post, as it exists in the database. */
    raw: string;
    /** HTML excerpt for the post, transformed for display. */
    rendered: string;
    /** Whether the excerpt is protected with a password. */
    protected: boolean;
  };
};
/**
 * Endpoint request arguments for the GET /wp/v2/posts/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetPostRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/posts/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeletePostRevisionRequestArguments = {
  /** The ID for the parent of the revision. */
  parent: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/posts/(?P<id>[\d]+)/autosaves route.
 */
export type CreatePostRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: {
    /** Excerpt for the post, as it exists in the database. */
    raw: string;
    /** HTML excerpt for the post, transformed for display. */
    rendered: string;
    /** Whether the excerpt is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed";
  /** The format for the post. */
  format?:
    | "standard"
    | "aside"
    | "chat"
    | "gallery"
    | "link"
    | "image"
    | "quote"
    | "status"
    | "video"
    | "audio";
  /** Meta fields. */
  meta?: {};
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The theme file to use to display the post. */
  template?: string;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
};
/**
 * Object type for the "page" object in the route /wp/v2/pages.
 */
export type Page = {
  /** The date the post was published, in the site's timezone. */
  date: string | null;
  /** The date the post was published, as GMT. */
  date_gmt: string | null;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the post. */
  id: number;
  /** URL to the post. */
  link: string;
  /** The date the post was last modified, in the site's timezone. */
  modified: string;
  /** The date the post was last modified, as GMT. */
  modified_gmt: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug: string;
  /** A named status for the post. */
  status:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** Type of post. */
  type: string;
  /** A password to protect access to the content and excerpt. */
  password: string;
  /** Permalink template for the post. */
  permalink_template: string;
  /** Slug automatically generated from the post title. */
  generated_slug: string;
  /** The ID for the parent of the post. */
  parent: number;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID for the author of the post. */
  author: number;
  /** The excerpt for the post. */
  excerpt: {
    /** Excerpt for the post, as it exists in the database. */
    raw: string;
    /** HTML excerpt for the post, transformed for display. */
    rendered: string;
    /** Whether the excerpt is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media: number;
  /** Whether or not comments are open on the post. */
  comment_status: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status: "open" | "closed";
  /** The order of the post in relation to other posts. */
  menu_order: number;
  /** Meta fields. */
  meta: {};
  /** The theme file to use to display the post. */
  template: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/pages route.
 */
export type GetPagesRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit result set to posts with a specific menu_order value. */
  menu_order?: number;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by post attribute. */
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "include_slugs"
    | "title"
    | "menu_order";
  /** Limit result set to items with particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: string[];
  /** Limit result set to posts assigned one or more statuses. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "trash"
    | "auto-draft"
    | "inherit"
    | "request-pending"
    | "request-confirmed"
    | "request-failed"
    | "request-completed"
    | "acf-disabled"
    | "any"[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/pages route.
 */
export type CreatePageRequestArguments = {
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The ID for the parent of the post. */
  parent?: number;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: {
    /** Excerpt for the post, as it exists in the database. */
    raw: string;
    /** HTML excerpt for the post, transformed for display. */
    rendered: string;
    /** Whether the excerpt is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed";
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: {};
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/pages/(?P<id>[\d]+) route.
 */
export type GetPageRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** The password for the post if it is password protected. */
  password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/pages/(?P<id>[\d]+) route.
 */
export type UpdatePageRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The ID for the parent of the post. */
  parent?: number;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: {
    /** Excerpt for the post, as it exists in the database. */
    raw: string;
    /** HTML excerpt for the post, transformed for display. */
    rendered: string;
    /** Whether the excerpt is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed";
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: {};
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/pages/(?P<id>[\d]+) route.
 */
export type DeletePageRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
};
/**
 * Object type for the "page-revision" object in the route /wp/v2/pages/(?P<parent>[\d]+)/revisions.
 */
export type PageRevision = {
  /** The ID for the author of the revision. */
  author: number;
  /** The date the revision was published, in the site's timezone. */
  date: string;
  /** The date the revision was published, as GMT. */
  date_gmt: string;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the revision. */
  id: number;
  /** The date the revision was last modified, in the site's timezone. */
  modified: string;
  /** The date the revision was last modified, as GMT. */
  modified_gmt: string;
  /** The ID for the parent of the revision. */
  parent: number;
  /** An alphanumeric identifier for the revision unique to its type. */
  slug: string;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The excerpt for the post. */
  excerpt: {
    /** Excerpt for the post, as it exists in the database. */
    raw: string;
    /** HTML excerpt for the post, transformed for display. */
    rendered: string;
    /** Whether the excerpt is protected with a password. */
    protected: boolean;
  };
};
/**
 * Endpoint request arguments for the GET /wp/v2/pages/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetPageRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/pages/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeletePageRevisionRequestArguments = {
  /** The ID for the parent of the revision. */
  parent: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/pages/(?P<id>[\d]+)/autosaves route.
 */
export type CreatePageRevisionRequestArguments = {
  /** The ID for the parent of the post. */
  parent?: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: {
    /** Excerpt for the post, as it exists in the database. */
    raw: string;
    /** HTML excerpt for the post, transformed for display. */
    rendered: string;
    /** Whether the excerpt is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed";
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: {};
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Object type for the "attachment" object in the route /wp/v2/media.
 */
export type Attachment = {
  /** The date the post was published, in the site's timezone. */
  date: string | null;
  /** The date the post was published, as GMT. */
  date_gmt: string | null;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the post. */
  id: number;
  /** URL to the post. */
  link: string;
  /** The date the post was last modified, in the site's timezone. */
  modified: string;
  /** The date the post was last modified, as GMT. */
  modified_gmt: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug: string;
  /** A named status for the post. */
  status:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** Type of post. */
  type: string;
  /** Permalink template for the post. */
  permalink_template: string;
  /** Slug automatically generated from the post title. */
  generated_slug: string;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The ID for the author of the post. */
  author: number;
  /** Whether or not comments are open on the post. */
  comment_status: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status: "open" | "closed";
  /** Meta fields. */
  meta: {};
  /** The theme file to use to display the post. */
  template: string;
  /** Alternative text to display when attachment is not displayed. */
  alt_text: string;
  /** The attachment caption. */
  caption: {
    /** Caption for the attachment, as it exists in the database. */
    raw: string;
    /** HTML caption for the attachment, transformed for display. */
    rendered: string;
  };
  /** The attachment description. */
  description: {
    /** Description for the attachment, as it exists in the database. */
    raw: string;
    /** HTML description for the attachment, transformed for display. */
    rendered: string;
  };
  /** Attachment type. */
  media_type: "image" | "file";
  /** The attachment MIME type. */
  mime_type: string;
  /** Details about the media file, specific to its type. */
  media_details: Record<string, unknown>;
  /** The ID for the associated post of the attachment. */
  post: number;
  /** URL to the original attachment file. */
  source_url: string;
  /** List of the missing image sizes of the attachment. */
  missing_image_sizes: string[];
};
/**
 * Endpoint request arguments for the GET /wp/v2/media route.
 */
export type GetAttachmentsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by post attribute. */
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "include_slugs"
    | "title";
  /** Limit result set to items with particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: string[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: "inherit" | "private" | "trash"[];
  /** Limit result set to attachments of a particular media type. */
  media_type?: "image" | "video" | "text" | "application" | "audio";
  /** Limit result set to attachments of a particular MIME type. */
  mime_type?: string;
};
/**
 * Endpoint request arguments for the POST /wp/v2/media route.
 */
export type CreateAttachmentRequestArguments = {
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The ID for the author of the post. */
  author?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed";
  /** Meta fields. */
  meta?: {};
  /** The theme file to use to display the post. */
  template?: string;
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string;
  /** The attachment caption. */
  caption?: {
    /** Caption for the attachment, as it exists in the database. */
    raw: string;
    /** HTML caption for the attachment, transformed for display. */
    rendered: string;
  };
  /** The attachment description. */
  description?: {
    /** Description for the attachment, as it exists in the database. */
    raw: string;
    /** HTML description for the attachment, transformed for display. */
    rendered: string;
  };
  /** The ID for the associated post of the attachment. */
  post?: number;
};
/**
 * Endpoint request arguments for the GET /wp/v2/media/(?P<id>[\d]+) route.
 */
export type GetAttachmentRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/media/(?P<id>[\d]+) route.
 */
export type UpdateAttachmentRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The ID for the author of the post. */
  author?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed";
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed";
  /** Meta fields. */
  meta?: {};
  /** The theme file to use to display the post. */
  template?: string;
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string;
  /** The attachment caption. */
  caption?: {
    /** Caption for the attachment, as it exists in the database. */
    raw: string;
    /** HTML caption for the attachment, transformed for display. */
    rendered: string;
  };
  /** The attachment description. */
  description?: {
    /** Description for the attachment, as it exists in the database. */
    raw: string;
    /** HTML description for the attachment, transformed for display. */
    rendered: string;
  };
  /** The ID for the associated post of the attachment. */
  post?: number;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/media/(?P<id>[\d]+) route.
 */
export type DeleteAttachmentRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
};
/**
 * Object type for the "nav_menu_item" object in the route /wp/v2/menu-items.
 */
export type NavMenuItem = {
  /** The title for the object. */
  title:
    | string
    | {
        /** Title for the object, as it exists in the database. */
        raw: string;
        /** HTML title for the object, transformed for display. */
        rendered: string;
      };
  /** Unique identifier for the object. */
  id: number;
  /** The singular label used to describe this type of menu item. */
  type_label: string;
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type: "taxonomy" | "post_type" | "post_type_archive" | "custom";
  /** A named status for the object. */
  status:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The ID for the parent of the object. */
  parent: number;
  /** Text for the title attribute of the link element for this menu item. */
  attr_title: string;
  /** Class names for the link element of this menu item. */
  classes: string[];
  /** The description of this menu item. */
  description: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order: number;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id: number;
  /** The target attribute of the link element for this menu item. */
  target: "_blank" | "";
  /** The URL to which this menu item points. */
  url: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn: string[];
  /** Whether the menu item represents an object that no longer exists. */
  invalid: boolean;
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus: number;
  /** Meta fields. */
  meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/menu-items route.
 */
export type GetNavMenuItemsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by object attribute. */
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "include_slugs"
    | "title"
    | "menu_order";
  /** Limit result set to posts with one or more specific slugs. */
  slug?: string[];
  /** Limit result set to posts assigned one or more statuses. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "trash"
    | "auto-draft"
    | "inherit"
    | "request-pending"
    | "request-confirmed"
    | "request-failed"
    | "request-completed"
    | "acf-disabled"
    | "any"[];
  /** Limit result set based on relationship between multiple taxonomies. */
  tax_relation?: "AND" | "OR";
  /** Limit result set to items with specific terms assigned in the menus taxonomy. */
  menus?: Record<string, unknown> | unknown[];
  /** Limit result set to items except those with specific terms assigned in the menus taxonomy. */
  menus_exclude?: Record<string, unknown> | unknown[];
  /** Limit result set to posts with a specific menu_order value. */
  menu_order?: number;
};
/**
 * Endpoint request arguments for the POST /wp/v2/menu-items route.
 */
export type CreateNavMenuItemRequestArguments = {
  /** The title for the object. */
  title?:
    | string
    | {
        /** Title for the object, as it exists in the database. */
        raw: string;
        /** HTML title for the object, transformed for display. */
        rendered: string;
      };
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: "taxonomy" | "post_type" | "post_type_archive" | "custom";
  /** A named status for the object. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The ID for the parent of the object. */
  parent?: number;
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: string[];
  /** The description of this menu item. */
  description?: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The target attribute of the link element for this menu item. */
  target?: "_blank" | "";
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: string[];
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number;
  /** Meta fields. */
  meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/menu-items/(?P<id>[\d]+) route.
 */
export type GetNavMenuItemRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/menu-items/(?P<id>[\d]+) route.
 */
export type UpdateNavMenuItemRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** The title for the object. */
  title?:
    | string
    | {
        /** Title for the object, as it exists in the database. */
        raw: string;
        /** HTML title for the object, transformed for display. */
        rendered: string;
      };
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: "taxonomy" | "post_type" | "post_type_archive" | "custom";
  /** A named status for the object. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The ID for the parent of the object. */
  parent?: number;
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: string[];
  /** The description of this menu item. */
  description?: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The target attribute of the link element for this menu item. */
  target?: "_blank" | "";
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: string[];
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number;
  /** Meta fields. */
  meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/menu-items/(?P<id>[\d]+) route.
 */
export type DeleteNavMenuItemRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
};
/**
 * Object type for the "nav_menu_item-revision" object in the route /wp/v2/menu-items/(?P<id>[\d]+)/autosaves.
 */
export type NavMenuItemRevision = {
  /** The ID for the author of the revision. */
  author: number;
  /** The date the revision was published, in the site's timezone. */
  date: string;
  /** The date the revision was published, as GMT. */
  date_gmt: string;
  /** GUID for the revision, as it exists in the database. */
  guid: string;
  /** Unique identifier for the revision. */
  id: number;
  /** The date the revision was last modified, in the site's timezone. */
  modified: string;
  /** The date the revision was last modified, as GMT. */
  modified_gmt: string;
  /** The ID for the parent of the revision. */
  parent: number;
  /** An alphanumeric identifier for the revision unique to its type. */
  slug: string;
  /** The title for the object. */
  title:
    | string
    | {
        /** Title for the object, as it exists in the database. */
        raw: string;
        /** HTML title for the object, transformed for display. */
        rendered: string;
      };
  /** Preview link for the post. */
  preview_link: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/menu-items/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetNavMenuItemRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the POST /wp/v2/menu-items/(?P<id>[\d]+)/autosaves route.
 */
export type CreateNavMenuItemRevisionRequestArguments = {
  /** The ID for the parent of the object. */
  parent?: number;
  /** The title for the object. */
  title?:
    | string
    | {
        /** Title for the object, as it exists in the database. */
        raw: string;
        /** HTML title for the object, transformed for display. */
        rendered: string;
      };
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: "taxonomy" | "post_type" | "post_type_archive" | "custom";
  /** A named status for the object. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: string[];
  /** The description of this menu item. */
  description?: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The target attribute of the link element for this menu item. */
  target?: "_blank" | "";
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: string[];
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number;
  /** Meta fields. */
  meta?: {};
};
/**
 * Object type for the "wp_block" object in the route /wp/v2/blocks.
 */
export type WPBlock = {
  /** The date the post was published, in the site's timezone. */
  date: string | null;
  /** The date the post was published, as GMT. */
  date_gmt: string | null;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the post. */
  id: number;
  /** URL to the post. */
  link: string;
  /** The date the post was last modified, in the site's timezone. */
  modified: string;
  /** The date the post was last modified, as GMT. */
  modified_gmt: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug: string;
  /** A named status for the post. */
  status:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** Type of post. */
  type: string;
  /** A password to protect access to the content and excerpt. */
  password: string;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
  };
  /** The content for the post. */
  content: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The theme file to use to display the post. */
  template: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/blocks route.
 */
export type GetWPBlocksRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by post attribute. */
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "include_slugs"
    | "title";
  /** Limit result set to posts with one or more specific slugs. */
  slug?: string[];
  /** Limit result set to posts assigned one or more statuses. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "trash"
    | "auto-draft"
    | "inherit"
    | "request-pending"
    | "request-confirmed"
    | "request-failed"
    | "request-completed"
    | "acf-disabled"
    | "any"[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/blocks route.
 */
export type CreateWPBlockRequestArguments = {
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/blocks/(?P<id>[\d]+) route.
 */
export type GetWPBlockRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** The password for the post if it is password protected. */
  password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/blocks/(?P<id>[\d]+) route.
 */
export type UpdateWPBlockRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/blocks/(?P<id>[\d]+) route.
 */
export type DeleteWPBlockRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
};
/**
 * Object type for the "wp_block-revision" object in the route /wp/v2/blocks/(?P<parent>[\d]+)/revisions.
 */
export type WPBlockRevision = {
  /** The ID for the author of the revision. */
  author: number;
  /** The date the revision was published, in the site's timezone. */
  date: string;
  /** The date the revision was published, as GMT. */
  date_gmt: string;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the revision. */
  id: number;
  /** The date the revision was last modified, in the site's timezone. */
  modified: string;
  /** The date the revision was last modified, as GMT. */
  modified_gmt: string;
  /** The ID for the parent of the revision. */
  parent: number;
  /** An alphanumeric identifier for the revision unique to its type. */
  slug: string;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
  };
  /** The content for the post. */
  content: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
};
/**
 * Endpoint request arguments for the GET /wp/v2/blocks/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetWPBlockRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/blocks/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeleteWPBlockRevisionRequestArguments = {
  /** The ID for the parent of the revision. */
  parent: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/blocks/(?P<id>[\d]+)/autosaves route.
 */
export type CreateWPBlockRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Object type for the "wp_template" object in the route /wp/v2/templates.
 */
export type WPTemplate = {
  /** ID of template. */
  id: string;
  /** Unique slug identifying the template. */
  slug: string;
  /** Theme identifier for the template. */
  theme: string;
  /** Type of template. */
  type: string;
  /** Source of template */
  source: string;
  /** Source of a customized template */
  origin: string;
  /** Content of template. */
  content:
    | {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
      }
    | string;
  /** Title of template. */
  title:
    | {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
      }
    | string;
  /** Description of template. */
  description: string;
  /** Status of template. */
  status:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** Post ID. */
  wp_id: number;
  /** Theme file exists. */
  has_theme_file: boolean;
  /** The ID for the author of the template. */
  author: number;
  /** Whether a template is a custom template. */
  is_custom: boolean;
};
/**
 * Endpoint request arguments for the GET /wp/v2/templates route.
 */
export type GetWPTemplatesRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Limit to the specified post id. */
  wp_id?: number;
  /** Limit to the specified template part area. */
  area?: string;
  /** Post type to get the templates for. */
  post_type?: string;
};
/**
 * Endpoint request arguments for the POST /wp/v2/templates route.
 */
export type CreateWPTemplateRequestArguments = {
  /** Unique slug identifying the template. */
  slug: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Content of template. */
  content?:
    | {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
      }
    | string;
  /** Title of template. */
  title?:
    | {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
      }
    | string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The ID for the author of the template. */
  author?: number;
};
/**
 * Endpoint request arguments for the GET /wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type GetWPTemplateRequestArguments = {
  /** The id of a template */
  id: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type UpdateWPTemplateRequestArguments = {
  /** The id of a template */
  id: string;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Content of template. */
  content?:
    | {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
      }
    | string;
  /** Title of template. */
  title?:
    | {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
      }
    | string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The ID for the author of the template. */
  author?: number;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type DeleteWPTemplateRequestArguments = {
  /** The id of a template */
  id: string;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
};
/**
 * Object type for the "wp_template-revision" object in the route /wp/v2/templates/(?P<parent>[\d]+)/revisions.
 */
export type WPTemplateRevision = {
  /** The ID for the author of the revision. */
  author: number;
  /** The date the revision was published, in the site's timezone. */
  date: string;
  /** The date the revision was published, as GMT. */
  date_gmt: string;
  /** GUID for the revision, as it exists in the database. */
  guid: string;
  /** Unique identifier for the revision. */
  id: number;
  /** The date the revision was last modified, in the site's timezone. */
  modified: string;
  /** The date the revision was last modified, as GMT. */
  modified_gmt: string;
  /** The ID for the parent of the revision. */
  parent: number;
  /** An alphanumeric identifier for the revision unique to its type. */
  slug: string;
  /** Title of template. */
  title:
    | {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
      }
    | string;
  /** Content of template. */
  content:
    | {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
      }
    | string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/templates/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetWPTemplateRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/templates/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeleteWPTemplateRevisionRequestArguments = {
  /** The ID for the parent of the revision. */
  parent: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/templates/(?P<id>[\d]+)/autosaves route.
 */
export type CreateWPTemplateRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Content of template. */
  content?:
    | {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
      }
    | string;
  /** Title of template. */
  title?:
    | {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
      }
    | string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The ID for the author of the template. */
  author?: number;
};
/**
 * Object type for the "wp_template_part" object in the route /wp/v2/template-parts.
 */
export type WPTemplatePart = {
  /** ID of template. */
  id: string;
  /** Unique slug identifying the template. */
  slug: string;
  /** Theme identifier for the template. */
  theme: string;
  /** Type of template. */
  type: string;
  /** Source of template */
  source: string;
  /** Source of a customized template */
  origin: string;
  /** Content of template. */
  content:
    | {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
      }
    | string;
  /** Title of template. */
  title:
    | {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
      }
    | string;
  /** Description of template. */
  description: string;
  /** Status of template. */
  status:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** Post ID. */
  wp_id: number;
  /** Theme file exists. */
  has_theme_file: boolean;
  /** The ID for the author of the template. */
  author: number;
  /** Where the template part is intended for use (header, footer, etc.) */
  area: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/template-parts route.
 */
export type GetWPTemplatePartsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Limit to the specified post id. */
  wp_id?: number;
  /** Limit to the specified template part area. */
  area?: string;
  /** Post type to get the templates for. */
  post_type?: string;
};
/**
 * Endpoint request arguments for the POST /wp/v2/template-parts route.
 */
export type CreateWPTemplatePartRequestArguments = {
  /** Unique slug identifying the template. */
  slug: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Content of template. */
  content?:
    | {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
      }
    | string;
  /** Title of template. */
  title?:
    | {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
      }
    | string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The ID for the author of the template. */
  author?: number;
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type GetWPTemplatePartRequestArguments = {
  /** The id of a template */
  id: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type UpdateWPTemplatePartRequestArguments = {
  /** The id of a template */
  id: string;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Content of template. */
  content?:
    | {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
      }
    | string;
  /** Title of template. */
  title?:
    | {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
      }
    | string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The ID for the author of the template. */
  author?: number;
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type DeleteWPTemplatePartRequestArguments = {
  /** The id of a template */
  id: string;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
};
/**
 * Object type for the "wp_template_part-revision" object in the route /wp/v2/template-parts/(?P<parent>[\d]+)/revisions.
 */
export type WPTemplatePartRevision = {
  /** The ID for the author of the revision. */
  author: number;
  /** The date the revision was published, in the site's timezone. */
  date: string;
  /** The date the revision was published, as GMT. */
  date_gmt: string;
  /** GUID for the revision, as it exists in the database. */
  guid: string;
  /** Unique identifier for the revision. */
  id: number;
  /** The date the revision was last modified, in the site's timezone. */
  modified: string;
  /** The date the revision was last modified, as GMT. */
  modified_gmt: string;
  /** The ID for the parent of the revision. */
  parent: number;
  /** An alphanumeric identifier for the revision unique to its type. */
  slug: string;
  /** Title of template. */
  title:
    | {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
      }
    | string;
  /** Content of template. */
  content:
    | {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
      }
    | string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/template-parts/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetWPTemplatePartRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/template-parts/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeleteWPTemplatePartRevisionRequestArguments = {
  /** The ID for the parent of the revision. */
  parent: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/template-parts/(?P<id>[\d]+)/autosaves route.
 */
export type CreateWPTemplatePartRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Content of template. */
  content?:
    | {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
      }
    | string;
  /** Title of template. */
  title?:
    | {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
      }
    | string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** The ID for the author of the template. */
  author?: number;
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
};
/**
 * Object type for the "wp_navigation" object in the route /wp/v2/navigation.
 */
export type WPNavigation = {
  /** The date the post was published, in the site's timezone. */
  date: string | null;
  /** The date the post was published, as GMT. */
  date_gmt: string | null;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the post. */
  id: number;
  /** URL to the post. */
  link: string;
  /** The date the post was last modified, in the site's timezone. */
  modified: string;
  /** The date the post was last modified, as GMT. */
  modified_gmt: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug: string;
  /** A named status for the post. */
  status:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** Type of post. */
  type: string;
  /** A password to protect access to the content and excerpt. */
  password: string;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The theme file to use to display the post. */
  template: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/navigation route.
 */
export type GetWPNavigationsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by post attribute. */
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "include_slugs"
    | "title";
  /** Limit result set to posts with one or more specific slugs. */
  slug?: string[];
  /** Limit result set to posts assigned one or more statuses. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "trash"
    | "auto-draft"
    | "inherit"
    | "request-pending"
    | "request-confirmed"
    | "request-failed"
    | "request-completed"
    | "acf-disabled"
    | "any"[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/navigation route.
 */
export type CreateWPNavigationRequestArguments = {
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/navigation/(?P<id>[\d]+) route.
 */
export type GetWPNavigationRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** The password for the post if it is password protected. */
  password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/navigation/(?P<id>[\d]+) route.
 */
export type UpdateWPNavigationRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/navigation/(?P<id>[\d]+) route.
 */
export type DeleteWPNavigationRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
};
/**
 * Object type for the "wp_navigation-revision" object in the route /wp/v2/navigation/(?P<parent>[\d]+)/revisions.
 */
export type WPNavigationRevision = {
  /** The ID for the author of the revision. */
  author: number;
  /** The date the revision was published, in the site's timezone. */
  date: string;
  /** The date the revision was published, as GMT. */
  date_gmt: string;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the revision. */
  id: number;
  /** The date the revision was last modified, in the site's timezone. */
  modified: string;
  /** The date the revision was last modified, as GMT. */
  modified_gmt: string;
  /** The ID for the parent of the revision. */
  parent: number;
  /** An alphanumeric identifier for the revision unique to its type. */
  slug: string;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
};
/**
 * Endpoint request arguments for the GET /wp/v2/navigation/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetWPNavigationRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/navigation/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeleteWPNavigationRevisionRequestArguments = {
  /** The ID for the parent of the revision. */
  parent: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/navigation/(?P<id>[\d]+)/autosaves route.
 */
export type CreateWPNavigationRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Object type for the "faq" object in the route /wp/v2/faq.
 */
export type Faq = {
  /** The date the post was published, in the site's timezone. */
  date: string | null;
  /** The date the post was published, as GMT. */
  date_gmt: string | null;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the post. */
  id: number;
  /** URL to the post. */
  link: string;
  /** The date the post was last modified, in the site's timezone. */
  modified: string;
  /** The date the post was last modified, as GMT. */
  modified_gmt: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug: string;
  /** A named status for the post. */
  status:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** Type of post. */
  type: string;
  /** A password to protect access to the content and excerpt. */
  password: string;
  /** Permalink template for the post. */
  permalink_template: string;
  /** Slug automatically generated from the post title. */
  generated_slug: string;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media: number;
  /** The theme file to use to display the post. */
  template: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/faq route.
 */
export type GetFaqsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by post attribute. */
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "include_slugs"
    | "title";
  /** Limit result set to posts with one or more specific slugs. */
  slug?: string[];
  /** Limit result set to posts assigned one or more statuses. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "trash"
    | "auto-draft"
    | "inherit"
    | "request-pending"
    | "request-confirmed"
    | "request-failed"
    | "request-completed"
    | "acf-disabled"
    | "any"[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/faq route.
 */
export type CreateFaqRequestArguments = {
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/faq/(?P<id>[\d]+) route.
 */
export type GetFaqRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** The password for the post if it is password protected. */
  password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/faq/(?P<id>[\d]+) route.
 */
export type UpdateFaqRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/faq/(?P<id>[\d]+) route.
 */
export type DeleteFaqRequestArguments = {
  /** Unique identifier for the post. */
  id: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
};
/**
 * Object type for the "faq-revision" object in the route /wp/v2/faq/(?P<id>[\d]+)/autosaves.
 */
export type FaqRevision = {
  /** The ID for the author of the revision. */
  author: number;
  /** The date the revision was published, in the site's timezone. */
  date: string;
  /** The date the revision was published, as GMT. */
  date_gmt: string;
  /** The globally unique identifier for the post. */
  guid: {
    /** GUID for the post, as it exists in the database. */
    raw: string;
    /** GUID for the post, transformed for display. */
    rendered: string;
  };
  /** Unique identifier for the revision. */
  id: number;
  /** The date the revision was last modified, in the site's timezone. */
  modified: string;
  /** The date the revision was last modified, as GMT. */
  modified_gmt: string;
  /** The ID for the parent of the revision. */
  parent: number;
  /** An alphanumeric identifier for the revision unique to its type. */
  slug: string;
  /** The title for the post. */
  title: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** Preview link for the post. */
  preview_link: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/faq/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetFaqRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the POST /wp/v2/faq/(?P<id>[\d]+)/autosaves route.
 */
export type CreateFaqRevisionRequestArguments = {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The date the post was published, in the site's timezone. */
  date?: string | null;
  /** The date the post was published, as GMT. */
  date_gmt?: string | null;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | "publish"
    | "future"
    | "draft"
    | "pending"
    | "private"
    | "acf-disabled";
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw: string;
    /** HTML title for the post, transformed for display. */
    rendered: string;
  };
  /** The content for the post. */
  content?: {
    /** Content for the post, as it exists in the database. */
    raw: string;
    /** HTML content for the post, transformed for display. */
    rendered: string;
    /** Version of the content block format used by the post. */
    block_version: number;
    /** Whether the content is protected with a password. */
    protected: boolean;
  };
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** The theme file to use to display the post. */
  template?: string;
};
/**
 * Object type for the "type" object in the route /wp/v2/types.
 */
export type Type = {
  /** All capabilities used by the post type. */
  capabilities: Record<string, unknown>;
  /** A human-readable description of the post type. */
  description: string;
  /** Whether or not the post type should have children. */
  hierarchical: boolean;
  /** Whether or not the post type can be viewed. */
  viewable: boolean;
  /** Human-readable labels for the post type for various contexts. */
  labels: Record<string, unknown>;
  /** The title for the post type. */
  name: string;
  /** An alphanumeric identifier for the post type. */
  slug: string;
  /** All features, supported by the post type. */
  supports: Record<string, unknown>;
  /** If the value is a string, the value will be used as the archive slug. If the value is false the post type has no archive. */
  has_archive: string | boolean;
  /** Taxonomies associated with post type. */
  taxonomies: string[];
  /** REST base route for the post type. */
  rest_base: string;
  /** REST route's namespace for the post type. */
  rest_namespace: string;
  /** The visibility settings for the post type. */
  visibility: {
    /** Whether to generate a default UI for managing this post type. */
    show_ui: boolean;
    /** Whether to make the post type available for selection in navigation menus. */
    show_in_nav_menus: boolean;
  };
  /** The icon for the post type. */
  icon: string | null;
};
/**
 * Endpoint request arguments for the GET /wp/v2/types route.
 */
export type GetTypesRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the GET /wp/v2/types/(?P<type>[\w-]+) route.
 */
export type GetTypeRequestArguments = {
  /** An alphanumeric identifier for the post type. */
  type: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Object type for the "status" object in the route /wp/v2/statuses.
 */
export type Status = {
  /** The title for the status. */
  name: string;
  /** Whether posts with this status should be private. */
  private: boolean;
  /** Whether posts with this status should be protected. */
  protected: boolean;
  /** Whether posts of this status should be shown in the front end of the site. */
  public: boolean;
  /** Whether posts with this status should be publicly-queryable. */
  queryable: boolean;
  /** Whether to include posts in the edit listing for their post type. */
  show_in_list: boolean;
  /** An alphanumeric identifier for the status. */
  slug: string;
  /** Whether posts of this status may have floating published dates. */
  date_floating: boolean;
};
/**
 * Endpoint request arguments for the GET /wp/v2/statuses/(?P<status>[\w-]+) route.
 */
export type GetStatusRequestArguments = {
  /** An alphanumeric identifier for the status. */
  status: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Object type for the "taxonomy" object in the route /wp/v2/taxonomies.
 */
export type Taxonomy = {
  /** All capabilities used by the taxonomy. */
  capabilities: Record<string, unknown>;
  /** A human-readable description of the taxonomy. */
  description: string;
  /** Whether or not the taxonomy should have children. */
  hierarchical: boolean;
  /** Human-readable labels for the taxonomy for various contexts. */
  labels: Record<string, unknown>;
  /** The title for the taxonomy. */
  name: string;
  /** An alphanumeric identifier for the taxonomy. */
  slug: string;
  /** Whether or not the term cloud should be displayed. */
  show_cloud: boolean;
  /** Types associated with the taxonomy. */
  types: string[];
  /** REST base route for the taxonomy. */
  rest_base: string;
  /** REST namespace route for the taxonomy. */
  rest_namespace: string;
  /** The visibility settings for the taxonomy. */
  visibility: {
    /** Whether a taxonomy is intended for use publicly either via the admin interface or by front-end users. */
    public: boolean;
    /** Whether the taxonomy is publicly queryable. */
    publicly_queryable: boolean;
    /** Whether to generate a default UI for managing this taxonomy. */
    show_ui: boolean;
    /** Whether to allow automatic creation of taxonomy columns on associated post-types table. */
    show_admin_column: boolean;
    /** Whether to make the taxonomy available for selection in navigation menus. */
    show_in_nav_menus: boolean;
    /** Whether to show the taxonomy in the quick/bulk edit panel. */
    show_in_quick_edit: boolean;
  };
};
/**
 * Endpoint request arguments for the GET /wp/v2/taxonomies route.
 */
export type GetTaxonomiesRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Limit results to taxonomies associated with a specific post type. */
  type?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/taxonomies/(?P<taxonomy>[\w-]+) route.
 */
export type GetTaxonomyRequestArguments = {
  /** An alphanumeric identifier for the taxonomy. */
  taxonomy: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Object type for the "category" object in the route /wp/v2/categories.
 */
export type Category = {
  /** Unique identifier for the term. */
  id: number;
  /** Number of published posts for the term. */
  count: number;
  /** HTML description of the term. */
  description: string;
  /** URL of the term. */
  link: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug: string;
  /** Type attribution for the term. */
  taxonomy: "category";
  /** The parent term ID. */
  parent: number;
  /** Meta fields. */
  meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/categories route.
 */
export type GetCategoriesRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by term attribute. */
  orderby?:
    | "id"
    | "include"
    | "name"
    | "slug"
    | "include_slugs"
    | "term_group"
    | "description"
    | "count";
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to terms assigned to a specific parent. */
  parent?: number;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: string[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/categories route.
 */
export type CreateCategoryRequestArguments = {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** The parent term ID. */
  parent?: number;
  /** Meta fields. */
  meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/categories/(?P<id>[\d]+) route.
 */
export type GetCategoryRequestArguments = {
  /** Unique identifier for the term. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/categories/(?P<id>[\d]+) route.
 */
export type UpdateCategoryRequestArguments = {
  /** Unique identifier for the term. */
  id: number;
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** The parent term ID. */
  parent?: number;
  /** Meta fields. */
  meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/categories/(?P<id>[\d]+) route.
 */
export type DeleteCategoryRequestArguments = {
  /** Unique identifier for the term. */
  id: number;
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
};
/**
 * Object type for the "tag" object in the route /wp/v2/tags.
 */
export type Tag = {
  /** Unique identifier for the term. */
  id: number;
  /** Number of published posts for the term. */
  count: number;
  /** HTML description of the term. */
  description: string;
  /** URL of the term. */
  link: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug: string;
  /** Type attribution for the term. */
  taxonomy: "post_tag";
  /** Meta fields. */
  meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/tags route.
 */
export type GetTagsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by term attribute. */
  orderby?:
    | "id"
    | "include"
    | "name"
    | "slug"
    | "include_slugs"
    | "term_group"
    | "description"
    | "count";
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: string[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/tags route.
 */
export type CreateTagRequestArguments = {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/tags/(?P<id>[\d]+) route.
 */
export type GetTagRequestArguments = {
  /** Unique identifier for the term. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/tags/(?P<id>[\d]+) route.
 */
export type UpdateTagRequestArguments = {
  /** Unique identifier for the term. */
  id: number;
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/tags/(?P<id>[\d]+) route.
 */
export type DeleteTagRequestArguments = {
  /** Unique identifier for the term. */
  id: number;
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
};
/**
 * Object type for the "nav_menu" object in the route /wp/v2/menus.
 */
export type NavMenu = {
  /** Unique identifier for the term. */
  id: number;
  /** HTML description of the term. */
  description: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug: string;
  /** Meta fields. */
  meta: {};
  /** The locations assigned to the menu. */
  locations: string[];
  /** Whether to automatically add top level pages to this menu. */
  auto_add: boolean;
};
/**
 * Endpoint request arguments for the GET /wp/v2/menus route.
 */
export type GetNavMenusRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by term attribute. */
  orderby?:
    | "id"
    | "include"
    | "name"
    | "slug"
    | "include_slugs"
    | "term_group"
    | "description"
    | "count";
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: string[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/menus route.
 */
export type CreateNavMenuRequestArguments = {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: {};
  /** The locations assigned to the menu. */
  locations?: string[];
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean;
};
/**
 * Endpoint request arguments for the GET /wp/v2/menus/(?P<id>[\d]+) route.
 */
export type GetNavMenuRequestArguments = {
  /** Unique identifier for the term. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/menus/(?P<id>[\d]+) route.
 */
export type UpdateNavMenuRequestArguments = {
  /** Unique identifier for the term. */
  id: number;
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: {};
  /** The locations assigned to the menu. */
  locations?: string[];
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/menus/(?P<id>[\d]+) route.
 */
export type DeleteNavMenuRequestArguments = {
  /** Unique identifier for the term. */
  id: number;
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
};
/**
 * Object type for the "user" object in the route /wp/v2/users.
 */
export type User = {
  /** Unique identifier for the user. */
  id: number;
  /** Login name for the user. */
  username: string;
  /** Display name for the user. */
  name: string;
  /** First name for the user. */
  first_name: string;
  /** Last name for the user. */
  last_name: string;
  /** The email address for the user. */
  email: string;
  /** URL of the user. */
  url: string;
  /** Description of the user. */
  description: string;
  /** Author URL of the user. */
  link: string;
  /** Locale for the user. */
  locale: "" | "en_US" | "pl_PL";
  /** The nickname for the user. */
  nickname: string;
  /** An alphanumeric identifier for the user. */
  slug: string;
  /** Registration date for the user. */
  registered_date: string;
  /** Roles assigned to the user. */
  roles: string[];
  /** Password for the user (never included). */
  password: string;
  /** All capabilities assigned to the user. */
  capabilities: Record<string, unknown>;
  /** Any extra capabilities assigned to the user. */
  extra_capabilities: Record<string, unknown>;
  /** Avatar URLs for the user. */
  avatar_urls: {
    /** Avatar URL with image size of 24 pixels. */
    24: string;
    /** Avatar URL with image size of 48 pixels. */
    48: string;
    /** Avatar URL with image size of 96 pixels. */
    96: string;
  };
  /** Meta fields. */
  meta: {
    /** */
    persisted_preferences: {
      /** The date and time the preferences were updated. */
      _modified: string;
    };
  };
};
/**
 * Endpoint request arguments for the GET /wp/v2/users/me route.
 */
export type GetUsersRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the POST /wp/v2/users route.
 */
export type CreateUserRequestArguments = {
  /** Login name for the user. */
  username: string;
  /** Display name for the user. */
  name?: string;
  /** First name for the user. */
  first_name?: string;
  /** Last name for the user. */
  last_name?: string;
  /** The email address for the user. */
  email: string;
  /** URL of the user. */
  url?: string;
  /** Description of the user. */
  description?: string;
  /** Locale for the user. */
  locale?: "" | "en_US" | "pl_PL";
  /** The nickname for the user. */
  nickname?: string;
  /** An alphanumeric identifier for the user. */
  slug?: string;
  /** Roles assigned to the user. */
  roles?: string[];
  /** Password for the user (never included). */
  password: string;
  /** Meta fields. */
  meta?: {
    /** */
    persisted_preferences: {
      /** The date and time the preferences were updated. */
      _modified: string;
    };
  };
};
/**
 * Endpoint request arguments for the GET /wp/v2/users/(?P<id>[\d]+) route.
 */
export type GetUserRequestArguments = {
  /** Unique identifier for the user. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/users/me route.
 */
export type UpdateUserRequestArguments = {
  /** Login name for the user. */
  username?: string;
  /** Display name for the user. */
  name?: string;
  /** First name for the user. */
  first_name?: string;
  /** Last name for the user. */
  last_name?: string;
  /** The email address for the user. */
  email?: string;
  /** URL of the user. */
  url?: string;
  /** Description of the user. */
  description?: string;
  /** Locale for the user. */
  locale?: "" | "en_US" | "pl_PL";
  /** The nickname for the user. */
  nickname?: string;
  /** An alphanumeric identifier for the user. */
  slug?: string;
  /** Roles assigned to the user. */
  roles?: string[];
  /** Password for the user (never included). */
  password?: string;
  /** Meta fields. */
  meta?: {
    /** */
    persisted_preferences: {
      /** The date and time the preferences were updated. */
      _modified: string;
    };
  };
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/users/me route.
 */
export type DeleteUserRequestArguments = {
  /** Required to be true, as users do not support trashing. */
  force?: boolean;
  /** Reassign the deleted user's posts and links to this user ID. */
  reassign: number;
};
/**
 * Object type for the "application-password" object in the route /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords.
 */
export type ApplicationPassword = {
  /** The unique identifier for the application password. */
  uuid: string;
  /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
  app_id: string;
  /** The name of the application password. */
  name: string;
  /** The generated password. Only available after adding an application. */
  password: string;
  /** The GMT date the application password was created. */
  created: string;
  /** The GMT date the application password was last used. */
  last_used: string | null;
  /** The IP address the application password was last used by. */
  last_ip: string | null;
};
/**
 * Endpoint request arguments for the GET /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+) route.
 */
export type GetApplicationPasswordRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the POST /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords route.
 */
export type CreateApplicationPasswordRequestArguments = {
  /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
  app_id?: string;
  /** The name of the application password. */
  name: string;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+) route.
 */
export type DeleteApplicationPasswordRequestArguments = {};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+) route.
 */
export type UpdateApplicationPasswordRequestArguments = {
  /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
  app_id?: string;
  /** The name of the application password. */
  name?: string;
};
/**
 * Object type for the "comment" object in the route /wp/v2/comments.
 */
export type Comment = {
  /** Unique identifier for the comment. */
  id: number;
  /** The ID of the user object, if author was a user. */
  author: number;
  /** Email address for the comment author. */
  author_email: string;
  /** IP address for the comment author. */
  author_ip: string;
  /** Display name for the comment author. */
  author_name: string;
  /** URL for the comment author. */
  author_url: string;
  /** User agent for the comment author. */
  author_user_agent: string;
  /** The content for the comment. */
  content: {
    /** Content for the comment, as it exists in the database. */
    raw: string;
    /** HTML content for the comment, transformed for display. */
    rendered: string;
  };
  /** The date the comment was published, in the site's timezone. */
  date: string;
  /** The date the comment was published, as GMT. */
  date_gmt: string;
  /** URL to the comment. */
  link: string;
  /** The ID for the parent of the comment. */
  parent: number;
  /** The ID of the associated post object. */
  post: number;
  /** State of the comment. */
  status: string;
  /** Type of the comment. */
  type: string;
  /** Avatar URLs for the comment author. */
  author_avatar_urls: {
    /** Avatar URL with image size of 24 pixels. */
    24: string;
    /** Avatar URL with image size of 48 pixels. */
    48: string;
    /** Avatar URL with image size of 96 pixels. */
    96: string;
  };
  /** Meta fields. */
  meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/comments route.
 */
export type GetCommentsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to comments published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to comments assigned to specific user IDs. Requires authorization. */
  author?: number[];
  /** Ensure result set excludes comments assigned to specific user IDs. Requires authorization. */
  author_exclude?: number[];
  /** Limit result set to that from a specific author email. Requires authorization. */
  author_email?: string;
  /** Limit response to comments published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: "asc" | "desc";
  /** Sort collection by comment attribute. */
  orderby?: "date" | "date_gmt" | "id" | "include" | "post" | "parent" | "type";
  /** Limit result set to comments of specific parent IDs. */
  parent?: number[];
  /** Ensure result set excludes specific parent IDs. */
  parent_exclude?: number[];
  /** Limit result set to comments assigned to specific post IDs. */
  post?: number[];
  /** Limit result set to comments assigned a specific status. Requires authorization. */
  status?: string;
  /** Limit result set to comments assigned a specific type. Requires authorization. */
  type?: string;
  /** The password for the post if it is password protected. */
  password?: string;
};
/**
 * Endpoint request arguments for the POST /wp/v2/comments route.
 */
export type CreateCommentRequestArguments = {
  /** The ID of the user object, if author was a user. */
  author?: number;
  /** Email address for the comment author. */
  author_email?: string;
  /** IP address for the comment author. */
  author_ip?: string;
  /** Display name for the comment author. */
  author_name?: string;
  /** URL for the comment author. */
  author_url?: string;
  /** User agent for the comment author. */
  author_user_agent?: string;
  /** The content for the comment. */
  content?: {
    /** Content for the comment, as it exists in the database. */
    raw: string;
    /** HTML content for the comment, transformed for display. */
    rendered: string;
  };
  /** The date the comment was published, in the site's timezone. */
  date?: string;
  /** The date the comment was published, as GMT. */
  date_gmt?: string;
  /** The ID for the parent of the comment. */
  parent?: number;
  /** The ID of the associated post object. */
  post?: number;
  /** State of the comment. */
  status?: string;
  /** Meta fields. */
  meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/comments/(?P<id>[\d]+) route.
 */
export type GetCommentRequestArguments = {
  /** Unique identifier for the comment. */
  id: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** The password for the parent post of the comment (if the post is password protected). */
  password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/comments/(?P<id>[\d]+) route.
 */
export type UpdateCommentRequestArguments = {
  /** Unique identifier for the comment. */
  id: number;
  /** The ID of the user object, if author was a user. */
  author?: number;
  /** Email address for the comment author. */
  author_email?: string;
  /** IP address for the comment author. */
  author_ip?: string;
  /** Display name for the comment author. */
  author_name?: string;
  /** URL for the comment author. */
  author_url?: string;
  /** User agent for the comment author. */
  author_user_agent?: string;
  /** The content for the comment. */
  content?: {
    /** Content for the comment, as it exists in the database. */
    raw: string;
    /** HTML content for the comment, transformed for display. */
    rendered: string;
  };
  /** The date the comment was published, in the site's timezone. */
  date?: string;
  /** The date the comment was published, as GMT. */
  date_gmt?: string;
  /** The ID for the parent of the comment. */
  parent?: number;
  /** The ID of the associated post object. */
  post?: number;
  /** State of the comment. */
  status?: string;
  /** Meta fields. */
  meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/comments/(?P<id>[\d]+) route.
 */
export type DeleteCommentRequestArguments = {
  /** Unique identifier for the comment. */
  id: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** The password for the parent post of the comment (if the post is password protected). */
  password?: string;
};
/**
 * Object type for the "search-result" object in the route /wp/v2/search.
 */
export type SearchResult = {
  /** Unique identifier for the object. */
  id: number | string;
  /** The title for the object. */
  title: string;
  /** URL to the object. */
  url: string;
  /** Object type. */
  type: "post" | "term" | "post-format";
  /** Object subtype. */
  subtype: "post" | "page" | "faq" | "category" | "post_tag";
};
/**
 * Endpoint request arguments for the GET /wp/v2/search route.
 */
export type GetSearchResultsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit results to items of an object type. */
  type?: "post" | "term" | "post-format";
  /** Limit results to items of one or more object subtypes. */
  subtype?: "post" | "page" | "faq" | "category" | "post_tag" | "any"[];
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
};
/**
 * Object type for the "rendered-block" object in the route /wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+).
 */
export type RenderedBlock = {
  /** The rendered block. */
  rendered: string;
};
/**
 * Object type for the "block-type" object in the route /wp/v2/block-types.
 */
export type BlockType = {
  /** Version of block API. */
  api_version: number;
  /** Title of block type. */
  title: string;
  /** Unique name identifying the block type. */
  name: string;
  /** Description of block type. */
  description: string;
  /** Icon of block type. */
  icon: string | null;
  /** Block attributes. */
  attributes: {} | null;
  /** Context provided by blocks of this type. */
  provides_context: {};
  /** Context values inherited by blocks of this type. */
  uses_context: string[];
  /** Block supports. */
  supports: {};
  /** Block category. */
  category: string | null;
  /** Is the block dynamically rendered. */
  is_dynamic: boolean;
  /** Editor script handles. */
  editor_script_handles: string[];
  /** Public facing and editor script handles. */
  script_handles: string[];
  /** Public facing script handles. */
  view_script_handles: string[];
  /** Editor style handles. */
  editor_style_handles: string[];
  /** Public facing and editor style handles. */
  style_handles: string[];
  /** Block style variations. */
  styles: {
    /** Unique name identifying the style. */
    name: string;
    /** The human-readable label for the style. */
    label: string;
    /** Inline CSS code that registers the CSS class required for the style. */
    inline_style: string;
    /** Contains the handle that defines the block style. */
    style_handle: string;
  }[];
  /** Block variations. */
  variations: {
    /** The unique and machine-readable name. */
    name: string;
    /** A human-readable variation title. */
    title: string;
    /** A detailed variation description. */
    description: string;
    /** Block category. */
    category: string | null;
    /** Icon of block type. */
    icon: string | null;
    /** Indicates whether the current variation is the default one. */
    isDefault: boolean;
    /** The initial values for attributes. */
    attributes: Record<string, unknown>;
    /** The list of inner blocks used in the example. */
    innerBlocks: {
      /** The name of the inner block. */
      name: string;
      /** The attributes of the inner block. */
      attributes: Record<string, unknown>;
      /** A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema. */
      innerBlocks: unknown[];
    }[];
    /** Block example. */
    example: {
      /** The attributes used in the example. */
      attributes: Record<string, unknown>;
      /** The list of inner blocks used in the example. */
      innerBlocks: {
        /** The name of the inner block. */
        name: string;
        /** The attributes of the inner block. */
        attributes: Record<string, unknown>;
        /** A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema. */
        innerBlocks: unknown[];
      }[];
    } | null;
    /** The list of scopes where the variation is applicable. When not provided, it assumes all available scopes. */
    scope: "block" | "inserter" | "transform"[] | null;
    /** Block keywords. */
    keywords: string[];
  }[];
  /** Public text domain. */
  textdomain: string | null;
  /** Parent blocks. */
  parent: string[] | null;
  /** Ancestor blocks. */
  ancestor: string[] | null;
  /** Block keywords. */
  keywords: string[];
  /** Block example. */
  example: {
    /** The attributes used in the example. */
    attributes: Record<string, unknown>;
    /** The list of inner blocks used in the example. */
    innerBlocks: {
      /** The name of the inner block. */
      name: string;
      /** The attributes of the inner block. */
      attributes: Record<string, unknown>;
      /** A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema. */
      innerBlocks: unknown[];
    }[];
  } | null;
  /** Editor script handle. DEPRECATED: Use `editor_script_handles` instead. */
  editor_script: string | null;
  /** Public facing and editor script handle. DEPRECATED: Use `script_handles` instead. */
  script: string | null;
  /** Public facing script handle. DEPRECATED: Use `view_script_handles` instead. */
  view_script: string | null;
  /** Editor style handle. DEPRECATED: Use `editor_style_handles` instead. */
  editor_style: string | null;
  /** Public facing and editor style handle. DEPRECATED: Use `style_handles` instead. */
  style: string | null;
};
/**
 * Endpoint request arguments for the GET /wp/v2/block-types route.
 */
export type GetBlockTypesRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Block namespace. */
  namespace?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)/(?P<name>[a-zA-Z0-9_-]+) route.
 */
export type GetBlockTypeRequestArguments = {
  /** Block name. */
  name?: string;
  /** Block namespace. */
  namespace: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Object type for the "wp_global_styles" object in the route /wp/v2/global-styles/(?P<id>[\/\w-]+).
 */
export type WPGlobalStyles = {
  /** ID of global styles config. */
  id: string;
  /** Global styles. */
  styles: Record<string, unknown>;
  /** Global settings. */
  settings: Record<string, unknown>;
  /** Title of the global styles variation. */
  title:
    | {
        /** Title for the global styles variation, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
      }
    | string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/global-styles/(?P<id>[\/\w-]+) route.
 */
export type GetWPGlobalStylesRequestArguments = {
  /** The id of a template */
  id: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/global-styles/(?P<id>[\/\w-]+) route.
 */
export type UpdateWPGlobalStylesRequestArguments = {
  /** Global styles. */
  styles?: Record<string, unknown>;
  /** Global settings. */
  settings?: Record<string, unknown>;
  /** Title of the global styles variation. */
  title?:
    | {
        /** Title for the global styles variation, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
      }
    | string;
};
/**
 * Object type for the "settings" object in the route /wp/v2/settings.
 */
export type Settings = {
  /** Site title. */
  title: string;
  /** Site tagline. */
  description: string;
  /** Site URL. */
  url: string;
  /** This address is used for admin purposes, like new user notification. */
  email: string;
  /** A city in the same timezone as you. */
  timezone: string;
  /** A date format for all date strings. */
  date_format: string;
  /** A time format for all time strings. */
  time_format: string;
  /** A day number of the week that the week should start on. */
  start_of_week: number;
  /** WordPress locale code. */
  language: string;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  use_smilies: boolean;
  /** Default post category. */
  default_category: number;
  /** Default post format. */
  default_post_format: string;
  /** Blog pages show at most. */
  posts_per_page: number;
  /** What to show on the front page */
  show_on_front: string;
  /** The ID of the page that should be displayed on the front page */
  page_on_front: number;
  /** The ID of the page that should display the latest posts */
  page_for_posts: number;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  default_ping_status: "open" | "closed";
  /** Allow people to submit comments on new posts. */
  default_comment_status: "open" | "closed";
  /** Site logo. */
  site_logo: number;
  /** Site icon. */
  site_icon: number;
};
/**
 * Endpoint request arguments for the GET /wp/v2/settings route.
 */
export type GetSettingsRequestArguments = {};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/settings route.
 */
export type UpdateSettingsRequestArguments = {
  /** Site title. */
  title?: string;
  /** Site tagline. */
  description?: string;
  /** Site URL. */
  url?: string;
  /** This address is used for admin purposes, like new user notification. */
  email?: string;
  /** A city in the same timezone as you. */
  timezone?: string;
  /** A date format for all date strings. */
  date_format?: string;
  /** A time format for all time strings. */
  time_format?: string;
  /** A day number of the week that the week should start on. */
  start_of_week?: number;
  /** WordPress locale code. */
  language?: string;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  use_smilies?: boolean;
  /** Default post category. */
  default_category?: number;
  /** Default post format. */
  default_post_format?: string;
  /** Blog pages show at most. */
  posts_per_page?: number;
  /** What to show on the front page */
  show_on_front?: string;
  /** The ID of the page that should be displayed on the front page */
  page_on_front?: number;
  /** The ID of the page that should display the latest posts */
  page_for_posts?: number;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  default_ping_status?: "open" | "closed";
  /** Allow people to submit comments on new posts. */
  default_comment_status?: "open" | "closed";
  /** Site logo. */
  site_logo?: number;
  /** Site icon. */
  site_icon?: number;
};
/**
 * Object type for the "theme" object in the route /wp/v2/themes.
 */
export type Theme = {
  /** The theme's stylesheet. This uniquely identifies the theme. */
  stylesheet: string;
  /** The theme's template. If this is a child theme, this refers to the parent theme, otherwise this is the same as the theme's stylesheet. */
  template: string;
  /** The theme author. */
  author: {
    /** The theme author's name, as found in the theme header. */
    raw: string;
    /** HTML for the theme author, transformed for display. */
    rendered: string;
  };
  /** The website of the theme author. */
  author_uri: {
    /** The website of the theme author, as found in the theme header. */
    raw: string;
    /** The website of the theme author, transformed for display. */
    rendered: string;
  };
  /** A description of the theme. */
  description: {
    /** The theme description, as found in the theme header. */
    raw: string;
    /** The theme description, transformed for display. */
    rendered: string;
  };
  /** The name of the theme. */
  name: {
    /** The theme name, as found in the theme header. */
    raw: string;
    /** The theme name, transformed for display. */
    rendered: string;
  };
  /** The minimum PHP version required for the theme to work. */
  requires_php: string;
  /** The minimum WordPress version required for the theme to work. */
  requires_wp: string;
  /** The theme's screenshot URL. */
  screenshot: string;
  /** Tags indicating styles and features of the theme. */
  tags: {
    /** The theme tags, as found in the theme header. */
    raw: string[];
    /** The theme tags, transformed for display. */
    rendered: string;
  };
  /** The theme's text domain. */
  textdomain: string;
  /** Features supported by this theme. */
  theme_supports: {
    /** Whether theme opts in to wide alignment CSS class. */
    "align-wide": boolean;
    /** Whether posts and comments RSS feed links are added to head. */
    "automatic-feed-links": boolean;
    /** Whether a theme uses block-based templates. */
    "block-templates": boolean;
    /** Whether a theme uses block-based template parts. */
    "block-template-parts": boolean;
    /** Custom background if defined by the theme. */
    "custom-background":
      | boolean
      | {
          /** */
          "default-image": string;
          /** */
          "default-preset": "default" | "fill" | "fit" | "repeat" | "custom";
          /** */
          "default-position-x": "left" | "center" | "right";
          /** */
          "default-position-y": "left" | "center" | "right";
          /** */
          "default-size": "auto" | "contain" | "cover";
          /** */
          "default-repeat": "repeat-x" | "repeat-y" | "repeat" | "no-repeat";
          /** */
          "default-attachment": "scroll" | "fixed";
          /** */
          "default-color": string;
        };
    /** Custom header if defined by the theme. */
    "custom-header":
      | boolean
      | {
          /** */
          "default-image": string;
          /** */
          "random-default": boolean;
          /** */
          width: number;
          /** */
          height: number;
          /** */
          "flex-height": boolean;
          /** */
          "flex-width": boolean;
          /** */
          "default-text-color": string;
          /** */
          "header-text": boolean;
          /** */
          uploads: boolean;
          /** */
          video: boolean;
        };
    /** Custom logo if defined by the theme. */
    "custom-logo":
      | boolean
      | {
          /** */
          width: number;
          /** */
          height: number;
          /** */
          "flex-width": boolean;
          /** */
          "flex-height": boolean;
          /** */
          "header-text": string[];
          /** */
          "unlink-homepage-logo": boolean;
        };
    /** Whether the theme enables Selective Refresh for Widgets being managed with the Customizer. */
    "customize-selective-refresh-widgets": boolean;
    /** Whether theme opts in to the dark editor style UI. */
    "dark-editor-style": boolean;
    /** Whether the theme disables custom colors. */
    "disable-custom-colors": boolean;
    /** Whether the theme disables custom font sizes. */
    "disable-custom-font-sizes": boolean;
    /** Whether the theme disables custom gradients. */
    "disable-custom-gradients": boolean;
    /** Whether the theme disables generated layout styles. */
    "disable-layout-styles": boolean;
    /** Custom color palette if defined by the theme. */
    "editor-color-palette":
      | boolean
      | {
          /** */
          name: string;
          /** */
          slug: string;
          /** */
          color: string;
        }[];
    /** Custom font sizes if defined by the theme. */
    "editor-font-sizes":
      | boolean
      | {
          /** */
          name: string;
          /** */
          size: number;
          /** */
          slug: string;
        }[];
    /** Custom gradient presets if defined by the theme. */
    "editor-gradient-presets":
      | boolean
      | {
          /** */
          name: string;
          /** */
          gradient: string;
          /** */
          slug: string;
        }[];
    /** Whether theme opts in to the editor styles CSS wrapper. */
    "editor-styles": boolean;
    /** Allows use of HTML5 markup for search forms, comment forms, comment lists, gallery, and caption. */
    html5:
      | boolean
      | "search-form"
      | "comment-form"
      | "comment-list"
      | "gallery"
      | "caption"
      | "script"
      | "style"[];
    /** Post formats supported. */
    formats: string[];
    /** The post types that support thumbnails or true if all post types are supported. */
    "post-thumbnails": boolean | string[];
    /** Whether the theme supports responsive embedded content. */
    "responsive-embeds": boolean;
    /** Whether the theme can manage the document title tag. */
    "title-tag": boolean;
    /** Whether theme opts in to default WordPress block styles for viewing. */
    "wp-block-styles": boolean;
  };
  /** The URI of the theme's webpage. */
  theme_uri: {
    /** The URI of the theme's webpage, as found in the theme header. */
    raw: string;
    /** The URI of the theme's webpage, transformed for display. */
    rendered: string;
  };
  /** The theme's current version. */
  version: string;
  /** A named status for the theme. */
  status: "inactive" | "active";
};
/**
 * Endpoint request arguments for the GET /wp/v2/themes route.
 */
export type GetThemesRequestArguments = {
  /** Limit result set to themes assigned one or more statuses. */
  status?: "active" | "inactive"[];
};
/**
 * Endpoint request arguments for the GET /wp/v2/themes/(?P<stylesheet>[^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?) route.
 */
export type GetThemeRequestArguments = {
  /** The theme's stylesheet. This uniquely identifies the theme. */
  stylesheet: string;
};
/**
 * Object type for the "plugin" object in the route /wp/v2/plugins.
 */
export type Plugin = {
  /** The plugin file. */
  plugin: string;
  /** The plugin activation status. */
  status: "inactive" | "active";
  /** The plugin name. */
  name: string;
  /** The plugin's website address. */
  plugin_uri: string;
  /** The plugin author. */
  author: Record<string, unknown>;
  /** Plugin author's website address. */
  author_uri: string;
  /** The plugin description. */
  description: {
    /** The raw plugin description. */
    raw: string;
    /** The plugin description formatted for display. */
    rendered: string;
  };
  /** The plugin version number. */
  version: string;
  /** Whether the plugin can only be activated network-wide. */
  network_only: boolean;
  /** Minimum required version of WordPress. */
  requires_wp: string;
  /** Minimum required version of PHP. */
  requires_php: string;
  /** The plugin's text domain. */
  textdomain: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/plugins route.
 */
export type GetPluginsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Limit results to those matching a string. */
  search?: string;
  /** Limits results to plugins with the given status. */
  status?: "inactive" | "active"[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/plugins route.
 */
export type CreatePluginRequestArguments = {
  /** WordPress.org plugin directory slug. */
  slug: string;
  /** The plugin activation status. */
  status?: "inactive" | "active";
};
/**
 * Endpoint request arguments for the GET /wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?) route.
 */
export type GetPluginRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** */
  plugin: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?) route.
 */
export type UpdatePluginRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** */
  plugin: string;
  /** The plugin activation status. */
  status?: "inactive" | "active";
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?) route.
 */
export type DeletePluginRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** */
  plugin: string;
};
/**
 * Object type for the "sidebar" object in the route /wp/v2/sidebars.
 */
export type Sidebar = {
  /** ID of sidebar. */
  id: string;
  /** Unique name identifying the sidebar. */
  name: string;
  /** Description of sidebar. */
  description: string;
  /** Extra CSS class to assign to the sidebar in the Widgets interface. */
  class: string;
  /** HTML content to prepend to each widget's HTML output when assigned to this sidebar. Default is an opening list item element. */
  before_widget: string;
  /** HTML content to append to each widget's HTML output when assigned to this sidebar. Default is a closing list item element. */
  after_widget: string;
  /** HTML content to prepend to the sidebar title when displayed. Default is an opening h2 element. */
  before_title: string;
  /** HTML content to append to the sidebar title when displayed. Default is a closing h2 element. */
  after_title: string;
  /** Status of sidebar. */
  status: "active" | "inactive";
  /** Nested widgets. */
  widgets: Record<string, unknown> | string[];
};
/**
 * Endpoint request arguments for the GET /wp/v2/sidebars route.
 */
export type GetSidebarsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the GET /wp/v2/sidebars/(?P<id>[\w-]+) route.
 */
export type GetSidebarRequestArguments = {
  /** The id of a registered sidebar */
  id: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/sidebars/(?P<id>[\w-]+) route.
 */
export type UpdateSidebarRequestArguments = {
  /** Nested widgets. */
  widgets?: Record<string, unknown> | string[];
};
/**
 * Object type for the "widget-type" object in the route /wp/v2/widget-types.
 */
export type WidgetType = {
  /** Unique slug identifying the widget type. */
  id: string;
  /** Human-readable name identifying the widget type. */
  name: string;
  /** Description of the widget. */
  description: string;
  /** Whether the widget supports multiple instances */
  is_multi: boolean;
  /** Class name */
  classname: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/widget-types route.
 */
export type GetWidgetTypesRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the GET /wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+) route.
 */
export type GetWidgetTypeRequestArguments = {
  /** The widget type id. */
  id: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Object type for the "widget" object in the route /wp/v2/widgets.
 */
export type Widget = {
  /** Unique identifier for the widget. */
  id: string;
  /** The type of the widget. Corresponds to ID in widget-types endpoint. */
  id_base: string;
  /** The sidebar the widget belongs to. */
  sidebar: string;
  /** HTML representation of the widget. */
  rendered: string;
  /** HTML representation of the widget admin form. */
  rendered_form: string;
  /** Instance settings of the widget, if supported. */
  instance: {
    /** Base64 encoded representation of the instance settings. */
    encoded: string;
    /** Cryptographic hash of the instance settings. */
    hash: string;
    /** Unencoded instance settings, if supported. */
    raw: Record<string, unknown>;
  };
  /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
  form_data: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/widgets route.
 */
export type GetWidgetsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** The sidebar to return widgets for. */
  sidebar?: string;
};
/**
 * Endpoint request arguments for the POST /wp/v2/widgets route.
 */
export type CreateWidgetRequestArguments = {
  /** Unique identifier for the widget. */
  id?: string;
  /** The type of the widget. Corresponds to ID in widget-types endpoint. */
  id_base?: string;
  /** The sidebar the widget belongs to. */
  sidebar: string;
  /** Instance settings of the widget, if supported. */
  instance?: {
    /** Base64 encoded representation of the instance settings. */
    encoded: string;
    /** Cryptographic hash of the instance settings. */
    hash: string;
    /** Unencoded instance settings, if supported. */
    raw: Record<string, unknown>;
  };
  /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
  form_data?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/widgets/(?P<id>[\w\-]+) route.
 */
export type GetWidgetRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/widgets/(?P<id>[\w\-]+) route.
 */
export type UpdateWidgetRequestArguments = {
  /** Unique identifier for the widget. */
  id: string;
  /** The type of the widget. Corresponds to ID in widget-types endpoint. */
  id_base?: string;
  /** The sidebar the widget belongs to. */
  sidebar?: string;
  /** Instance settings of the widget, if supported. */
  instance?: {
    /** Base64 encoded representation of the instance settings. */
    encoded: string;
    /** Cryptographic hash of the instance settings. */
    hash: string;
    /** Unencoded instance settings, if supported. */
    raw: Record<string, unknown>;
  };
  /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
  form_data?: string;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/widgets/(?P<id>[\w\-]+) route.
 */
export type DeleteWidgetRequestArguments = {
  /** Whether to force removal of the widget, or move it to the inactive sidebar. */
  force?: boolean;
};
/**
 * Object type for the "block-directory-item" object in the route /wp/v2/block-directory/search.
 */
export type BlockDirectoryItem = {
  /** The block name, in namespace/block-name format. */
  name: string;
  /** The block title, in human readable format. */
  title: string;
  /** A short description of the block, in human readable format. */
  description: string;
  /** The block slug. */
  id: string;
  /** The star rating of the block. */
  rating: number;
  /** The number of ratings. */
  rating_count: number;
  /** The number sites that have activated this block. */
  active_installs: number;
  /** The average rating of blocks published by the same author. */
  author_block_rating: number;
  /** The number of blocks published by the same author. */
  author_block_count: number;
  /** The WordPress.org username of the block author. */
  author: string;
  /** The block icon. */
  icon: string;
  /** The date when the block was last updated. */
  last_updated: string;
  /** The date when the block was last updated, in fuzzy human readable format. */
  humanized_updated: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/block-directory/search route.
 */
export type GetBlockDirectoryItemsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view";
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to blocks matching the search term. */
  term: string;
};
/**
 * Object type for the "pattern-directory-item" object in the route /wp/v2/pattern-directory/patterns.
 */
export type PatternDirectoryItem = {
  /** The pattern ID. */
  id: number;
  /** The pattern title, in human readable format. */
  title: string;
  /** The pattern content. */
  content: string;
  /** The pattern's category slugs. */
  categories: string[];
  /** The pattern's keywords. */
  keywords: string[];
  /** A description of the pattern. */
  description: string;
  /** The preferred width of the viewport when previewing a pattern, in pixels. */
  viewport_width: number;
};
/**
 * Endpoint request arguments for the GET /wp/v2/pattern-directory/patterns route.
 */
export type GetPatternDirectoryItemsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit results to those matching a category ID. */
  category?: number;
  /** Limit results to those matching a keyword ID. */
  keyword?: number;
  /** Limit results to those matching a pattern (slug). */
  slug?: unknown[];
};
/**
 * Object type for the "block-pattern" object in the route /wp/v2/block-patterns/patterns.
 */
export type BlockPattern = {
  /** The pattern name. */
  name: string;
  /** The pattern title, in human readable format. */
  title: string;
  /** The pattern detailed description. */
  description: string;
  /** The pattern viewport width for inserter preview. */
  viewport_width: number;
  /** Block types that the pattern is intended to be used with. */
  block_types: unknown[];
  /** An array of post types that the pattern is restricted to be used with. */
  post_types: unknown[];
  /** The pattern category slugs. */
  categories: unknown[];
  /** The pattern keywords. */
  keywords: unknown[];
  /** The pattern content. */
  content: string;
  /** Determines whether the pattern is visible in inserter. */
  inserter: boolean;
};
/**
 * Endpoint request arguments for the GET /wp/v2/block-patterns/patterns route.
 */
export type GetBlockPatternsRequestArguments = {};
/**
 * Object type for the "block-pattern-category" object in the route /wp/v2/block-patterns/categories.
 */
export type BlockPatternCategory = {
  /** The category name. */
  name: string;
  /** The category label, in human readable format. */
  label: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/block-patterns/categories route.
 */
export type GetBlockPatternCategoriesRequestArguments = {};
/**
 * Object type for the "wp-site-health-test" object in the route /wp-site-health/v1/tests/background-updates.
 */
export type WPSiteHealthTest = {
  /** The name of the test being run. */
  test: string;
  /** A label describing the test. */
  label: string;
  /** The status of the test. */
  status: "good" | "recommended" | "critical";
  /** The category this test is grouped in. */
  badge: {
    /** */
    label: string;
    /** */
    color: "blue" | "orange" | "red" | "green" | "purple" | "gray";
  };
  /** A more descriptive explanation of what the test looks for, and why it is important for the user. */
  description: string;
  /** HTML containing an action to direct the user to where they can resolve the issue. */
  actions: string;
};
/**
 * Endpoint request arguments for the GET /wp-site-health/v1/tests/authorization-header route.
 */
export type GetWPSiteHealthTestsRequestArguments = {};
/**
 * Object type for the "menu-location" object in the route /wp/v2/menu-locations.
 */
export type MenuLocation = {
  /** The name of the menu location. */
  name: string;
  /** The description of the menu location. */
  description: string;
  /** The ID of the assigned menu. */
  menu: number;
};
/**
 * Endpoint request arguments for the GET /wp/v2/menu-locations route.
 */
export type GetMenuLocationsRequestArguments = {
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
/**
 * Endpoint request arguments for the GET /wp/v2/menu-locations/(?P<location>[\w-]+) route.
 */
export type GetMenuLocationRequestArguments = {
  /** An alphanumeric identifier for the menu location. */
  location: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: "view" | "embed" | "edit";
};
