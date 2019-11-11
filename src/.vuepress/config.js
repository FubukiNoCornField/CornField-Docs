module.exports = {
  title: '狐狸的玉米地/网站开发文档',
  description: '狐狸的玉米地——网站开发文档。',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress'
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '狐狸的玉米地/网站开发文档',
      description: '狐狸的玉米地——网站开发文档。'
    }
  },
  themeConfig: {
    smoothScroll: true,
    repo: 'FubukiNoCornField/fubukinocornfield.github.io',
    docsDir: 'src',
    sidebarDepth: 2,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用。',
            buttonText: '刷新'
          }
        },
        lastUpdated: '上次更新',
        algolia: {},
        repoLabel: '查看项目',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        nav: [
          { text: '开发规范', link: '/specification/' },
          { text: '网站设计概念', link: '/definitions/' },
          { text: '前端路由文档', link: '/frontend/' },
          { text: '后端路由文档', link: '/backend/' },
          { text: '运维', link: '/devops/' }
        ],
        sidebar: {
          '/specification/': ['', 'commit.md', 'transactions.md'],
          '/definitions/': [
            '',
            'database.md',
            'universal.md',
            'cv.md',
            'ga.md',
            'au.md',
            'fl.md',
            'ul.md',
            'pagination.md'
          ],
          '/frontend/': ['', 'dashboard.md', 'space.md'],
          '/backend/': ['', 'user.md', 'errcode.md'],
          '/devops/': ['']
        }
      }
    }
  }
}
