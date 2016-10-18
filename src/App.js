const h = require('react-hyperscript')
var items = [{
    id: 1,
    title: "JavaScript Fatigue",
    link: "http://www.realultimatepower.net/index4.htm",
    score: 0
}]


const Header = require('./components/Header.js')
const List = require('./components/List.js')
const Form = require('./components/Form.js')

const props = {items: items}

module.exports = () => h('div.pa4.bg-blue.vh-100', [
    Header(),
    h('main', [
        List(props),
        Form()
    ])
])
