module.exports = function (api, dll_file_name) {
  api.addHTMLHeadScript({
    src: `/${dll_file_name}.min.js`
  })
}
