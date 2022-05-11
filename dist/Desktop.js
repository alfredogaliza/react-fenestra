import _jsx from "@babel/runtime/helpers/jsx";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { Component } from "react";
import Taskbar from "./Taskbar";
import Window from "./Window";
import { jsxs as _jsxs } from "react/jsx-runtime";
var defaults = {
  title: "",
  content: function content() {
    return null;
  },
  maximized: false,
  minimized: false,
  active: true,
  width: 600,
  height: 400,
  moving: false,
  resizing: false,
  resizeable: true,
  moveable: true
};

var Desktop = /*#__PURE__*/function (_Component) {
  _inherits(Desktop, _Component);

  var _super = _createSuper(Desktop);

  function Desktop() {
    var _this;

    _classCallCheck(this, Desktop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "index", 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      windows: [],
      isMoving: false,
      isResizing: false,
      posX: 0,
      posY: 0,
      orgX: 0,
      orgY: 0,
      orgT: 0,
      orgL: 0,
      index: 1
    });

    return _this;
  }

  _createClass(Desktop, [{
    key: "api",
    value: function api(window) {
      var _this2 = this;

      return _objectSpread(_objectSpread({}, window), {}, {
        windows: this.state.windows,
        open: function open(w) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
            return undefined;
          };
          return _this2.open(w, callback);
        },
        close: function close() {
          var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
            return undefined;
          };
          return _this2.close(w, callback);
        },
        minimize: function minimize() {
          var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
          return _this2.minimize(w);
        },
        toggleMaximized: function toggleMaximized() {
          var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
          return _this2.toggleMaximized(w);
        },
        activate: function activate() {
          var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
          return _this2.activate(w);
        },
        setTitle: function setTitle(title) {
          var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
          return _this2.setTitle(title, w);
        },
        setContent: function setContent(content) {
          var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
          return _this2.setContent(content, w);
        },
        setPosition: function setPosition(top, left) {
          var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
          return _this2.setPosition(top, left, w);
        },
        setSize: function setSize(width, height) {
          var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
          return _this2.setSize(width, height, w);
        },
        startMove: function startMove(posX, posY) {
          var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
          return _this2.startMove(posX, posY, w);
        },
        startResize: function startResize(posX, posY) {
          var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "nwse";
          var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;
          return _this2.startResize(posX, posY, dir, w);
        }
      });
    }
  }, {
    key: "startMove",
    value: function startMove(posX, posY, window) {
      var _this$state$windows$f, _this$state$windows$f2;

      var orgX = (_this$state$windows$f = this.state.windows.find(function (w) {
        return w.index === window.index;
      })) === null || _this$state$windows$f === void 0 ? void 0 : _this$state$windows$f.left;
      var orgY = (_this$state$windows$f2 = this.state.windows.find(function (w) {
        return w.index === window.index;
      })) === null || _this$state$windows$f2 === void 0 ? void 0 : _this$state$windows$f2.top;
      this.setState(function (state) {
        return {
          windows: state.windows.map(function (w) {
            return w.index === window.index ? _objectSpread(_objectSpread({}, w), {}, {
              moving: true
            }) : w;
          }),
          isMoving: true,
          posX: posX,
          posY: posY,
          orgX: orgX,
          orgY: orgY
        };
      });
    }
  }, {
    key: "startResize",
    value: function startResize(posX, posY, dir, window) {
      var _this$state$windows$f3, _this$state$windows$f4, _this$state$windows$f5, _this$state$windows$f6;

      var orgX = (_this$state$windows$f3 = this.state.windows.find(function (w) {
        return w.index === window.index;
      })) === null || _this$state$windows$f3 === void 0 ? void 0 : _this$state$windows$f3.width;
      var orgY = (_this$state$windows$f4 = this.state.windows.find(function (w) {
        return w.index === window.index;
      })) === null || _this$state$windows$f4 === void 0 ? void 0 : _this$state$windows$f4.height;
      var orgT = (_this$state$windows$f5 = this.state.windows.find(function (w) {
        return w.index === window.index;
      })) === null || _this$state$windows$f5 === void 0 ? void 0 : _this$state$windows$f5.top;
      var orgL = (_this$state$windows$f6 = this.state.windows.find(function (w) {
        return w.index === window.index;
      })) === null || _this$state$windows$f6 === void 0 ? void 0 : _this$state$windows$f6.left;
      this.setState(function (state) {
        return {
          windows: state.windows.map(function (w) {
            return w.index === window.index ? _objectSpread(_objectSpread({}, w), {}, {
              resizing: true
            }) : w;
          }),
          isResizing: true,
          posX: posX,
          posY: posY,
          orgX: orgX,
          orgY: orgY,
          dir: dir,
          orgT: orgT,
          orgL: orgL
        };
      });
    }
  }, {
    key: "stopMove",
    value: function stopMove() {
      if (this.state.isMoving || this.state.isResizing) {
        this.setState(function (state) {
          return {
            windows: state.windows.map(function (w) {
              return _objectSpread(_objectSpread({}, w), {}, {
                moving: false,
                resizing: false
              });
            }),
            isMoving: false,
            isResizing: false,
            dir: "none"
          };
        });
      }
    }
  }, {
    key: "move",
    value: function move(event) {
      if (this.state.isMoving || this.state.isResizing) {
        var _event$targetTouches$, _event$targetTouches$2;

        var posX = event.clientX || ((_event$targetTouches$ = event.targetTouches[0]) === null || _event$targetTouches$ === void 0 ? void 0 : _event$targetTouches$.pageX);
        var posY = event.clientY || ((_event$targetTouches$2 = event.targetTouches[0]) === null || _event$targetTouches$2 === void 0 ? void 0 : _event$targetTouches$2.pageY);
        var rect = event.currentTarget.getBoundingClientRect();
        this.setState(function (state) {
          return {
            windows: state.windows.map(function (w) {
              return w.moving ? _objectSpread(_objectSpread({}, w), {}, {
                top: Math.min(Math.max(0, state.orgY + (posY - state.posY)), rect.height - w.height),
                left: Math.min(Math.max(0, state.orgX + (posX - state.posX)), rect.width - w.width)
              }) : w.resizing ? _objectSpread(_objectSpread({}, w), {}, {
                top: state.dir.includes("n") ? Math.min(Math.max(0, state.orgT + (posY - state.posY)), rect.height - w.height) : w.top,
                left: state.dir.includes("w") ? Math.min(Math.max(0, state.orgL + (posX - state.posX)), rect.width - w.width) : w.left,
                width: state.dir.includes("w") ? Math.min(Math.max(0, state.orgX - (posX - state.posX)), rect.width - w.left) : state.dir.includes("e") ? Math.min(Math.max(0, state.orgX + (posX - state.posX)), rect.width - w.left) : w.width,
                height: state.dir.includes("n") ? Math.min(Math.max(0, state.orgY - (posY - state.posY)), rect.height - w.top) : state.dir.includes("s") ? Math.min(Math.max(0, state.orgY + (posY - state.posY)), rect.height - w.top) : w.height
              }) : w;
            })
          };
        });
      }
    }
  }, {
    key: "setTitle",
    value: function setTitle(title, window) {
      this.setState(function (state) {
        return {
          windows: state.windows.map(function (w) {
            return w.index === window.index ? _objectSpread(_objectSpread({}, w), {}, {
              title: title
            }) : w;
          })
        };
      });
    }
  }, {
    key: "setContent",
    value: function setContent(content, window) {
      this.setState(function (state) {
        return {
          windows: state.windows.map(function (w) {
            return w.index === window.index ? _objectSpread(_objectSpread({}, w), {}, {
              content: content
            }) : w;
          })
        };
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(top, left, window) {
      this.setState(function (state) {
        return {
          windows: state.windows.map(function (w) {
            return w.index === window.index ? _objectSpread(_objectSpread({}, w), {}, {
              top: top,
              left: left
            }) : w;
          })
        };
      });
    }
  }, {
    key: "setSize",
    value: function setSize(width, height, window) {
      this.setState(function (state) {
        return {
          windows: state.windows.map(function (w) {
            return w.index === window.index ? _objectSpread(_objectSpread({}, window), {}, {
              width: width,
              height: height
            }) : w;
          })
        };
      });
    }
  }, {
    key: "minimize",
    value: function minimize(window) {
      this.setState(function (state) {
        return {
          windows: state.windows.map(function (w) {
            return w.index === window.index ? _objectSpread(_objectSpread({}, w), {}, {
              minimized: true,
              active: false
            }) : w;
          })
        };
      });
    }
  }, {
    key: "toggleMaximized",
    value: function toggleMaximized(window) {
      var _this3 = this;

      this.setState(function (state) {
        return {
          windows: state.windows.map(function (w) {
            return w.index === window.index ? _objectSpread(_objectSpread({}, w), {}, {
              maximized: !w.maximized
            }) : w;
          })
        };
      }, function () {
        return _this3.activate(window);
      });
    }
  }, {
    key: "activate",
    value: function activate(window) {
      this.setState(function (state) {
        return {
          windows: state.windows.map(function (w) {
            return _objectSpread(_objectSpread({}, w), {}, {
              active: w.index === window.index,
              minimized: w.index !== window.index && w.minimized
            });
          })
        };
      });
    }
  }, {
    key: "open",
    value: function open() {
      var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return undefined;
      };
      var newWindow = this.api(_objectSpread(_objectSpread(_objectSpread({}, defaults), {}, {
        active: true,
        top: 54 + 54 * (this.index % 6),
        left: 20 + this.index * 50
      }, window), {}, {
        index: this.index++
      }));
      this.setState(function (state) {
        return {
          windows: [].concat(_toConsumableArray(state.windows.map(function (w) {
            return _objectSpread(_objectSpread({}, w), {}, {
              active: false
            });
          })), [newWindow])
        };
      }, function () {
        return callback(newWindow);
      });
    }
  }, {
    key: "close",
    value: function close(window) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return undefined;
      };
      this.setState(function (state) {
        return {
          windows: state.windows.filter(function (w) {
            return w.index !== window.index;
          })
        };
      }, function () {
        return callback(window);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/_jsxs("div", {
        ref: this.ref,
        className: "d-flex flex-column fenestra-desktop ".concat(this.state.isMoving ? 'fenestra-desktop-moving ' : '', " ").concat(this.state.isResizing ? "fenestra-desktop-resizing-".concat(this.state.dir) : '', " "),
        children: [/*#__PURE__*/_jsx("div", {
          onMouseMove: function onMouseMove(event) {
            return _this4.move(event);
          },
          onTouchMove: function onTouchMove(event) {
            return _this4.move(event);
          },
          onMouseUp: function onMouseUp() {
            return _this4.stopMove();
          },
          onTouchEnd: function onTouchEnd() {
            return _this4.stopMove();
          },
          onMouseLeave: function onMouseLeave() {
            return _this4.stopMove();
          },
          className: "w-100 flex-grow-1 d-flex flex-column flex-wrap align-content-start bg-light fenestra-desktop-icons"
        }, void 0, this.props.icons.map(function (Icon, key) {
          return /*#__PURE__*/_jsx(Icon, {
            fenestra: _this4.api()
          }, key);
        }), this.state.windows.map(function (fenestra) {
          return /*#__PURE__*/_jsx(Window, {
            fenestra: fenestra
          }, fenestra.index);
        })), /*#__PURE__*/_jsx(Taskbar, {
          fenestra: this.api(),
          windows: this.state.windows
        })]
      });
    }
  }]);

  return Desktop;
}(Component);

_defineProperty(Desktop, "defaultProps", {
  icons: []
});

export default Desktop;