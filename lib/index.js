"use strict";

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function _react() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (api, dll_file_name) {
  api.addHTMLHeadScript({
    src: `/${dll_file_name}.min.js`
  });
};