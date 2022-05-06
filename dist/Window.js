import _jsx from "@babel/runtime/helpers/jsx";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

var _FontAwesomeIcon, _FontAwesomeIcon2, _FontAwesomeIcon3;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { faUpRightAndDownLeftFromCenter, faWindowClose, faWindowMaximize, faWindowMinimize, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Button, Card } from "react-bootstrap";

var Window = /*#__PURE__*/function (_Component) {
  _inherits(Window, _Component);

  var _super = _createSuper(Window);

  function Window() {
    _classCallCheck(this, Window);

    return _super.apply(this, arguments);
  }

  _createClass(Window, [{
    key: "minimize",
    value: function minimize(event) {
      event.stopPropagation();
      this.props.fenestra.minimize();
    }
  }, {
    key: "toggleMaximized",
    value: function toggleMaximized(event) {
      event.stopPropagation();
      this.props.fenestra.toggleMaximized();
    }
  }, {
    key: "close",
    value: function close(event) {
      event.stopPropagation();
      this.props.fenestra.close();
    }
  }, {
    key: "startMove",
    value: function startMove(event) {
      if (!this.props.fenestra.maximized) {
        var _event$targetTouches$, _event$targetTouches$2;

        var posX = event.clientX || ((_event$targetTouches$ = event.targetTouches[0]) === null || _event$targetTouches$ === void 0 ? void 0 : _event$targetTouches$.pageX);
        var posY = event.clientY || ((_event$targetTouches$2 = event.targetTouches[0]) === null || _event$targetTouches$2 === void 0 ? void 0 : _event$targetTouches$2.pageY);
        this.props.fenestra.startMove(posX, posY);
      }
    }
  }, {
    key: "startResize",
    value: function startResize(event) {
      var _event$targetTouches$3, _event$targetTouches$4;

      event.stopPropagation();
      var posX = event.clientX || ((_event$targetTouches$3 = event.targetTouches[0]) === null || _event$targetTouches$3 === void 0 ? void 0 : _event$targetTouches$3.pageX);
      var posY = event.clientY || ((_event$targetTouches$4 = event.targetTouches[0]) === null || _event$targetTouches$4 === void 0 ? void 0 : _event$targetTouches$4.pageY);
      this.props.fenestra.startResize(posX, posY);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var style = {
        top: this.props.fenestra.top,
        left: this.props.fenestra.left,
        width: this.props.fenestra.width,
        height: this.props.fenestra.height
      };
      return /*#__PURE__*/_jsx("div", {
        onMouseDownCapture: function onMouseDownCapture() {
          return _this.props.fenestra.activate();
        },
        style: style,
        className: this.props.fenestra.minimized ? 'fenestra-window-minimized' : (this.props.fenestra.maximized ? 'fenestra-window-maximized' : 'fenestra-window-normal') + (this.props.fenestra.active ? ' fenestra-window-active' : '')
      }, void 0, /*#__PURE__*/_jsx(Card, {
        className: "flex-column w-100 h-100"
      }, void 0, /*#__PURE__*/_jsx(Card.Header, {
        onMouseDown: function onMouseDown(event) {
          return _this.props.fenestra.moveable && _this.startMove(event);
        },
        onTouchStart: function onTouchStart(event) {
          return _this.props.fenestra.moveable && _this.startMove(event);
        },
        onDoubleClick: function onDoubleClick() {
          return _this.props.fenestra.resizeable && _this.props.fenestra.toggleMaximized();
        },
        className: this.props.fenestra.active ? 'bg-dark text-light d-flex justify-content-between align-items-center fenestra-window-title' : 'bg-light text-secondary d-flex justify-content-between align-items-center fenestra-window-title'
      }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, this.props.fenestra.title), /*#__PURE__*/_jsx("div", {
        className: "fenestra-window-buttons",
        onMouseDown: function onMouseDown(e) {
          return e.stopPropagation();
        }
      }, void 0, /*#__PURE__*/_jsx(Button, {
        title: "Minimizar",
        size: "sm",
        variant: this.props.fenestra.active ? 'outline-light' : 'outline-secondary',
        className: "mr-2",
        onClick: function onClick(event) {
          return _this.minimize(event);
        }
      }, void 0, _FontAwesomeIcon || (_FontAwesomeIcon = /*#__PURE__*/_jsx(FontAwesomeIcon, {
        icon: faWindowMinimize
      }))), this.props.fenestra.resizeable && /*#__PURE__*/_jsx(Button, {
        title: this.props.fenestra.maximized ? 'Restaurar' : 'Maximizar',
        size: "sm",
        variant: this.props.fenestra.active ? 'outline-light' : 'outline-secondary',
        className: "mr-2 d-none d-md-inline-block",
        onClick: function onClick(event) {
          return _this.toggleMaximized(event);
        }
      }, void 0, /*#__PURE__*/_jsx(FontAwesomeIcon, {
        icon: this.props.fenestra.maximized ? faWindowRestore : faWindowMaximize
      })), /*#__PURE__*/_jsx(Button, {
        title: "Fechar",
        size: "sm",
        variant: this.props.fenestra.active ? 'danger' : 'outline-danger',
        className: "mr-0",
        onClick: function onClick(event) {
          return _this.close(event);
        }
      }, void 0, _FontAwesomeIcon2 || (_FontAwesomeIcon2 = /*#__PURE__*/_jsx(FontAwesomeIcon, {
        icon: faWindowClose
      }))))), /*#__PURE__*/_jsx(Card.Body, {
        className: "flex-grow-1 p-1 fenestra-window-body"
      }, void 0, /*#__PURE__*/_jsx(this.props.fenestra.content, {
        fenestra: this.props.fenestra
      })), /*#__PURE__*/_jsx(Card.Footer, {
        onMouseDown: function onMouseDown(event) {
          return _this.props.fenestra.moveable && _this.startMove(event);
        },
        onTouchStart: function onTouchStart(event) {
          return _this.props.fenestra.moveable && _this.startMove(event);
        },
        className: "fenestra-window-footer d-flex justify-content-between align-items-center text-small py-1 px-2"
      }, void 0, "\xA0", !this.props.fenestra.maximized && this.props.fenestra.resizeable && /*#__PURE__*/_jsx("div", {
        className: "text-right d-none d-md-block",
        onMouseDown: function onMouseDown(event) {
          return _this.startResize(event);
        },
        onTouchStart: function onTouchStart(event) {
          return _this.startResize(event);
        }
      }, void 0, _FontAwesomeIcon3 || (_FontAwesomeIcon3 = /*#__PURE__*/_jsx(FontAwesomeIcon, {
        icon: faUpRightAndDownLeftFromCenter,
        flip: "horizontal",
        size: "xs"
      }))))));
    }
  }]);

  return Window;
}(Component);

export default Window;