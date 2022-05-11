import _jsx from "@babel/runtime/helpers/jsx";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

var _FontAwesomeIcon, _FontAwesomeIcon2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
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
    value: function startResize(event, dir) {
      var _event$targetTouches$3, _event$targetTouches$4;

      event.stopPropagation();
      var posX = event.clientX || ((_event$targetTouches$3 = event.targetTouches[0]) === null || _event$targetTouches$3 === void 0 ? void 0 : _event$targetTouches$3.pageX);
      var posY = event.clientY || ((_event$targetTouches$4 = event.targetTouches[0]) === null || _event$targetTouches$4 === void 0 ? void 0 : _event$targetTouches$4.pageY);
      this.props.fenestra.startResize(posX, posY, dir);
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
      return /*#__PURE__*/_jsx(Card, {
        onMouseDown: function onMouseDown() {
          return _this.props.fenestra.activate();
        },
        style: style,
        className: 'fenestra-window d-flex flex-column' + (this.props.fenestra.active ? ' fenestra-window-active' : '') + (this.props.fenestra.minimized ? ' fenestra-window-minimized' : '') + (this.props.fenestra.resizeable ? ' fenestra-window-resizeable' : '') + (this.props.fenestra.maximized ? ' fenestra-window-maximized' : '')
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
        className: 'd-flex justify-content-between align-items-center fenestra-window-title' + (this.props.fenestra.active ? ' bg-dark text-light' : ' bg-light text-secondary')
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
      })), /*#__PURE__*/_jsx("div", {
        onMouseDown: function onMouseDown(event) {
          return _this.startResize(event, "n");
        },
        onTouchStart: function onTouchStart(event) {
          return _this.startResize(event, "n");
        },
        className: "fenestra-window-resize fenestra-window-resize-n"
      }), /*#__PURE__*/_jsx("div", {
        onMouseDown: function onMouseDown(event) {
          return _this.startResize(event, "s");
        },
        onTouchStart: function onTouchStart(event) {
          return _this.startResize(event, "s");
        },
        className: "fenestra-window-resize fenestra-window-resize-s"
      }), /*#__PURE__*/_jsx("div", {
        onMouseDown: function onMouseDown(event) {
          return _this.startResize(event, "e");
        },
        onTouchStart: function onTouchStart(event) {
          return _this.startResize(event, "e");
        },
        className: "fenestra-window-resize fenestra-window-resize-e"
      }), /*#__PURE__*/_jsx("div", {
        onMouseDown: function onMouseDown(event) {
          return _this.startResize(event, "w");
        },
        onTouchStart: function onTouchStart(event) {
          return _this.startResize(event, "w");
        },
        className: "fenestra-window-resize fenestra-window-resize-w"
      }), /*#__PURE__*/_jsx("div", {
        onMouseDown: function onMouseDown(event) {
          return _this.startResize(event, "nw");
        },
        onTouchStart: function onTouchStart(event) {
          return _this.startResize(event, "nw");
        },
        className: "fenestra-window-resize fenestra-window-resize-nw"
      }), /*#__PURE__*/_jsx("div", {
        onMouseDown: function onMouseDown(event) {
          return _this.startResize(event, "ne");
        },
        onTouchStart: function onTouchStart(event) {
          return _this.startResize(event, "ne");
        },
        className: "fenestra-window-resize fenestra-window-resize-ne"
      }), /*#__PURE__*/_jsx("div", {
        onMouseDown: function onMouseDown(event) {
          return _this.startResize(event, "se");
        },
        onTouchStart: function onTouchStart(event) {
          return _this.startResize(event, "se");
        },
        className: "fenestra-window-resize fenestra-window-resize-se"
      }), /*#__PURE__*/_jsx("div", {
        onMouseDown: function onMouseDown(event) {
          return _this.startResize(event, "sw");
        },
        onTouchStart: function onTouchStart(event) {
          return _this.startResize(event, "sw");
        },
        className: "fenestra-window-resize fenestra-window-resize-sw"
      }));
    }
  }]);

  return Window;
}(Component);

export default Window;