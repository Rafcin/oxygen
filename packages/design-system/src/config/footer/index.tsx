export interface IFooterConfig {
  title: string
  privacy: string
  terms: string
  sitemap: string
  yourprivacy: string
  facebook: string
  instagram: string
  twitter: string
  columns: Array<IColumnConfig>
}

export interface IColumnConfig {
  column: string
  links: Array<ILinkConfig>
}

export interface ILinkConfig {
  name: string
  link: string
}
