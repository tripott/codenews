const h = require('react-hyperscript')

module.exports = function () {
  return h('section.form', [
          h('h2.f4.white', 'Add News'),
          h('form', [
              h('div.pb2', [
                  h('label', 'Title'),
                  h('input')
              ]),
              h('div.pb2', [
                  h('label', 'Link'),
                  h('input')
              ]),
              h('div.tr', [
                  h('button', 'Add News')
              ])
          ])
      ])
}
