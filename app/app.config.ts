export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'H2OFlows Docs'
  },
  header: {
    title: 'H2OFlows',
    to: '/',
    logo: {
      alt: 'H2OFlows',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/h2oflows-app',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `H2OFlows • Open source whitewater platform`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/h2oflows-app',
      'target': '_blank',
      'aria-label': 'H2OFlows on GitHub'
    }]
  },
  toc: {
    title: 'On this page',
    bottom: {
      title: 'Contribute',
      edit: 'https://github.com/h2oflows-app/docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/h2oflows-app/web',
        target: '_blank'
      }, {
        icon: 'i-lucide-map-pin',
        label: 'h2oflows.app',
        to: 'https://h2oflows.app',
        target: '_blank'
      }]
    }
  }
})
