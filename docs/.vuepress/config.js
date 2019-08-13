module.exports = {
	base:'/',
    title: '知码学院',
    description: '君哥带你上王者',
    // dest: './docs/.vuepress/dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.png'}],
		['link', {rel: 'stylesheet', href: '/css/style.css'}],
		['link', {rel: 'stylesheet', href: '/css/gifplayer.min.css'}],
		['script', {charset: 'utf-8', src: '/js/jquery-1.12.0.min.js'}],
		['script', {charset: 'utf-8', src: '/js/main.js'}],
		['script', {charset: 'utf-8', src: '/js/gifplayer.js'}]
    ],
	serviceWorker: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
		repo: 'https://github.com/sherlonWang/sherlonWang.github.io',
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',
		docsDir: 'docs'
    }
};