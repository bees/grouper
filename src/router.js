import home from './views/home'
import search from './views/search'

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: home
    },
    'search': {
      name: 'search',
      component: search
    },
  })
}

