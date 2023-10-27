"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _component = _interopRequireDefault(require("@loadable/component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const X = (0, _component.default)({
  resolved: {},
  chunkName(props) {
    return `letters-${props.letter}`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, "-");
  },
  isReady(props) {
    const key = this.resolve(props);
    if (this.resolved[key] !== true) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: props => (specifier => new Promise(r => r(specifier)).then(s => _interopRequireWildcard(require(s))))( /* webpackChunkName: "letters-[request]" */`./letters/${props.letter}`),
  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync(props) {
    const id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve(props) {
    if (require.resolveWeak) {
      return require.resolveWeak(`./letters/${props.letter}`);
    }
    return eval('require.resolve')(`./letters/${props.letter}`);
  }
});
const ClientSideOnly = (0, _component.default)({
  resolved: {},
  chunkName(props) {
    return `letters-${props.letter}`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, "-");
  },
  isReady(props) {
    const key = this.resolve(props);
    if (this.resolved[key] !== true) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: props => (specifier => new Promise(r => r(specifier)).then(s => _interopRequireWildcard(require(s))))( /* webpackChunkName: "letters-[request]" */`./letters/${props.letter}`),
  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync(props) {
    const id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve(props) {
    if (require.resolveWeak) {
      return require.resolveWeak(`./letters/${props.letter}`);
    }
    return eval('require.resolve')(`./letters/${props.letter}`);
  }
}, {
  ssr: false
});
const Moment = _component.default.lib({
  resolved: {},
  chunkName() {
    return "moment";
  },
  isReady(props) {
    const key = this.resolve(props);
    if (this.resolved[key] !== true) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: () => Promise.resolve().then(() => _interopRequireWildcard(require( /* webpackChunkName: "moment" */'moment'))),
  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync(props) {
    const id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("moment");
    }
    return eval('require.resolve')("moment");
  }
}, {
  resolveComponent: moment => moment.default || moment
});
const App = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Lazy load letter A:", /*#__PURE__*/_react.default.createElement(X, {
  letter: "A"
})), /*#__PURE__*/_react.default.createElement("p", null, "Lazy load letter B:", /*#__PURE__*/_react.default.createElement(X, {
  letter: "B"
})), /*#__PURE__*/_react.default.createElement("p", null, "Lazy load letter ", /*#__PURE__*/_react.default.createElement("strong", null, "only on Client"), " C and D:", /*#__PURE__*/_react.default.createElement(ClientSideOnly, {
  letter: "C"
}), " +", /*#__PURE__*/_react.default.createElement(ClientSideOnly, {
  letter: "D"
})), /*#__PURE__*/_react.default.createElement("p", null, "lazy load momentjs and format date:", /*#__PURE__*/_react.default.createElement(Moment, null, moment => `now is : ${moment().format('HH:mm')}`)));
var _default = exports.default = App;