import _jsx from "@babel/runtime/helpers/jsx";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { Component } from "react";
import { Button, Navbar } from "react-bootstrap";

var Taskbar = /*#__PURE__*/function (_Component) {
  _inherits(Taskbar, _Component);

  var _super = _createSuper(Taskbar);

  function Taskbar() {
    _classCallCheck(this, Taskbar);

    return _super.apply(this, arguments);
  }

  _createClass(Taskbar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_jsx(Navbar, {
        fixed: "bottom",
        className: "bg-dark fenestra-taskbar"
      }, void 0, this.props.windows.map(function (window, key) {
        return /*#__PURE__*/_jsx(Button, {
          className: "fenestra-taskbar-button mx-1",
          title: window.title,
          variant: "outline-primary",
          active: window.active,
          onClick: function onClick() {
            return window.activate();
          }
        }, key, window.title);
      }), "\xA0");
    }
  }]);

  return Taskbar;
}(Component);

_defineProperty(Taskbar, "defaultProps", {
  fenestra: {}
});

export default Taskbar;