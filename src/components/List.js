const h = require('react-hyperscript')


module.exports = function ({items}) {
  return h('section.list', [
          h('ul', items.map(item => h('li', [
              h('a', {
                  href: item.link
              }, item.title),
              h('button', 'Up'),
              h('button', 'Down'),
              h('span', item.score)
          ])))

      ])
}
