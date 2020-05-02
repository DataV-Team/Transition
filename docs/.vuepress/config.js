module.exports = {
  title: 'Transition',
  description: '自定义动效插件',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  host: 'localhost',
  port: 5001,
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '绘制',
        link: '/draw/',
      },
      {
        text: '曲线表',
        link: '/curveTable/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/DataV-Team/Transition',
      },
    ],
    sidebar: {
      '/guide/': [''],
      '/draw/': [''],
      '/curveTable/': [''],
    },
  },
}
