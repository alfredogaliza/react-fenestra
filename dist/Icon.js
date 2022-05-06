import _jsx from "@babel/runtime/helpers/jsx";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { Component } from 'react';
import { Button } from 'react-bootstrap';

var Icon = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/_jsx(Button, {
        variant: this.props.variant,
        onClick: function onClick() {
          return _this.props.onClick();
        },
        style: {
          minHeight: "72px",
          width: "120px"
        },
        className: "m-3 p-2 d-flex flex-column align-items-center justify-content-between fenestra-icon"
      }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, this.props.icon), /*#__PURE__*/_jsx("div", {}, void 0, this.props.title));
    }
  }]);

  return Icon;
}(Component);

_defineProperty(Icon, "defaultProps", {
  onClick: function onClick() {
    return undefined;
  },
  title: null,
  icon: null,
  variant: 'link'
});

export default Icon;