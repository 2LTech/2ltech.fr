/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: 'https://2ltech.fr',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}

export default sitemapConfig
