const React = require("react")

const Layout = require("./src/components/layout").default
const PopupProvider = require("./src/PopupProvider").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
  return <PopupProvider>{element}</PopupProvider>
}
