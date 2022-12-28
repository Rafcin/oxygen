const getExcludes = (excludes) => {
  const _excludes = []
  excludes.map((e) => {
    _excludes.push(`/${e}/*`)
    _excludes.push(`/${e}`)
    _excludes.push(`/en/${e}/*`)
    _excludes.push(`/en/${e}`)
  })
  return _excludes
}

/** @type {import('next-sitemap').IConfig} */
const config = {
  changefreq: 'weekly',
  exclude: getExcludes(excludes),
  generateRobotsTxt: true,
  priority: 0.7,
  sitemapSize: 5000,
  siteUrl
}

// export default config
module.exports = config
