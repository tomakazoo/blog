module.exports = {
  siteTitle: 'The power of Curiosity',
  siteDescription: 'A hunger for knowledge is much the same as hunger for food',
  authorName: 'Maxence Poutord',
  twitterUsername: '_maxpou',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a senior front-end engineer at VSware. He is also an occasional tech speaker and a mentor.
  As a digital nomad, he is living where the WiFi and sun are 😎 <br>
  Do you want to know more? <a href="https://www.maxpou.fr/about" rel="noopener" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-baymax1.jpeg', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'The power of Curiosity',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew',
    },
    // {
    //   label: 'Installation',
    //   url: '/how-to-install',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        },
        // {
        //   label: 'Installation',
        //   url: '/how-to-install',
        // },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/tomakazoo',
          rel: 'external',
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/tomislav-babic-1569183/',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/Toma9869',
          rel: 'external',
        },
      ],
    },
  ],
}
