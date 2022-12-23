export interface IFooterConfig {
  title: string
  privacy: string
  terms: string
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

export const FooterConfig = {
  title: '© 2021 example.com',
  privacy: '/help/privacy-policy',
  terms: '/help/terms',
  facebook: '/',
  twitter: '/',
  instagram: '/',
  columns: [
    {
      column: 'lorem ipsum',
      links: [
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
      ],
    },
    {
      column: 'lorem ipsum',
      links: [
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
      ],
    },
    {
      column: 'lorem ipsum',
      links: [
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
      ],
    },
    {
      column: 'lorem ipsum',
      links: [
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
        {
          name: 'lorem ipsum',
          link: '/',
        },
      ],
    },
  ],
}
