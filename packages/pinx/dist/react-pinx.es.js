var cr = Object.defineProperty;
var n = (v, b) => cr(v, "name", { value: b, configurable: !0 });
import Y, { createContext as lr, forwardRef as vr, Children as Oe, useRef as dr, cloneElement as pr } from "react";
var ee = {}, gr = {
  get exports() {
    return ee;
  },
  set exports(v) {
    ee = v;
  }
}, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function hr() {
  if (Pe)
    return W;
  Pe = 1;
  var v = Y, b = Symbol.for("react.element"), C = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, x = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(_, d, O) {
    var p, f = {}, E = null, P = null;
    O !== void 0 && (E = "" + O), d.key !== void 0 && (E = "" + d.key), d.ref !== void 0 && (P = d.ref);
    for (p in d)
      R.call(d, p) && !y.hasOwnProperty(p) && (f[p] = d[p]);
    if (_ && _.defaultProps)
      for (p in d = _.defaultProps, d)
        f[p] === void 0 && (f[p] = d[p]);
    return { $$typeof: b, type: _, key: E, ref: P, props: f, _owner: x.current };
  }
  return n(m, "q"), W.Fragment = C, W.jsx = m, W.jsxs = m, W;
}
n(hr, "requireReactJsxRuntime_production_min");
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Rr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Y, b = Symbol.for("react.element"), C = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), _ = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), V = Symbol.iterator, L = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = V && e[V] || e[L];
      return typeof r == "function" ? r : null;
    }
    n(je, "getIteratorFn");
    var k = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        ke("error", e, t);
      }
    }
    n(g, "error");
    function ke(e, r, t) {
      {
        var a = k.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    n(ke, "printWarning");
    var De = !1, Fe = !1, Ae = !1, Ie = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === y || We || e === x || e === O || e === p || Ie || e === P || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === f || e.$$typeof === m || e.$$typeof === _ || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    n($e, "isValidElementType");
    function Ye(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    n(Ye, "getWrappedName");
    function te(e) {
      return e.displayName || "Context";
    }
    n(te, "getContextName");
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case C:
          return "Portal";
        case y:
          return "Profiler";
        case x:
          return "StrictMode";
        case O:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return te(r) + ".Consumer";
          case m:
            var t = e;
            return te(t._context) + ".Provider";
          case d:
            return Ye(e, e.render, "ForwardRef");
          case f:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case E: {
            var u = e, s = u._payload, i = u._init;
            try {
              return w(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    n(w, "getComponentNameFromType");
    var j = Object.assign, A = 0, ne, ae, oe, ie, ue, se, fe;
    function ce() {
    }
    n(ce, "disabledLog"), ce.__reactDisabledLog = !0;
    function Ve() {
      {
        if (A === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, ue = console.group, se = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    n(Ve, "disableLogs");
    function Le() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ne
            }),
            info: j({}, e, {
              value: ae
            }),
            warn: j({}, e, {
              value: oe
            }),
            error: j({}, e, {
              value: ie
            }),
            group: j({}, e, {
              value: ue
            }),
            groupCollapsed: j({}, e, {
              value: se
            }),
            groupEnd: j({}, e, {
              value: fe
            })
          });
        }
        A < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    n(Le, "reenableLogs");
    var J = k.ReactCurrentDispatcher, G;
    function N(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            G = a && a[1] || "";
          }
        return `
` + G + e;
      }
    }
    n(N, "describeBuiltInComponentFrame");
    var K = !1, M;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ne();
    }
    function le(e, r) {
      if (!e || K)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      K = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = J.current, J.current = null, Ve();
      try {
        if (r) {
          var i = /* @__PURE__ */ n(function() {
            throw Error();
          }, "Fake");
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (S) {
              a = S;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (S) {
              a = S;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            a = S;
          }
          e();
        }
      } catch (S) {
        if (S && a && typeof S.stack == "string") {
          for (var o = S.stack.split(`
`), h = a.stack.split(`
`), c = o.length - 1, l = h.length - 1; c >= 1 && l >= 0 && o[c] !== h[l]; )
            l--;
          for (; c >= 1 && l >= 0; c--, l--)
            if (o[c] !== h[l]) {
              if (c !== 1 || l !== 1)
                do
                  if (c--, l--, l < 0 || o[c] !== h[l]) {
                    var T = `
` + o[c].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, T), T;
                  }
                while (c >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = s, Le(), Error.prepareStackTrace = u;
      }
      var F = e ? e.displayName || e.name : "", Ce = F ? N(F) : "";
      return typeof e == "function" && M.set(e, Ce), Ce;
    }
    n(le, "describeNativeComponentFrame");
    function Me(e, r, t) {
      return le(e, !1);
    }
    n(Me, "describeFunctionComponentFrame");
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    n(Ue, "shouldConstruct");
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ue(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case O:
          return N("Suspense");
        case p:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Me(e.render);
          case f:
            return U(e.type, r, t);
          case E: {
            var a = e, u = a._payload, s = a._init;
            try {
              return U(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    n(U, "describeUnknownElementTypeFrameInDEV");
    var B = Object.prototype.hasOwnProperty, ve = {}, de = k.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    n(q, "setCurrentlyValidatingElement");
    function Be(e, r, t, a, u) {
      {
        var s = Function.call.bind(B);
        for (var i in e)
          if (s(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var h = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              o = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              o = c;
            }
            o && !(o instanceof Error) && (q(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof o), q(null)), o instanceof Error && !(o.message in ve) && (ve[o.message] = !0, q(u), g("Failed %s type: %s", t, o.message), q(null));
          }
      }
    }
    n(Be, "checkPropTypes");
    var qe = Array.isArray;
    function z(e) {
      return qe(e);
    }
    n(z, "isArray");
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    n(Je, "typeName");
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    n(Ge, "willCoercionThrow");
    function pe(e) {
      return "" + e;
    }
    n(pe, "testStringCoercion");
    function ge(e) {
      if (Ge(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), pe(e);
    }
    n(ge, "checkKeyStringCoercion");
    var I = k.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, Re, H;
    H = {};
    function ze(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    n(ze, "hasValidRef");
    function He(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    n(He, "hasValidKey");
    function Xe(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = w(I.current.type);
        H[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(I.current.type), e.ref), H[t] = !0);
      }
    }
    n(Xe, "warnIfStringRefCannotBeAutoConverted");
    function Ze(e, r) {
      {
        var t = /* @__PURE__ */ n(function() {
          he || (he = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        }, "warnAboutAccessingKey");
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    n(Ze, "defineKeyPropWarningGetter");
    function Qe(e, r) {
      {
        var t = /* @__PURE__ */ n(function() {
          Re || (Re = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        }, "warnAboutAccessingRef");
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    n(Qe, "defineRefPropWarningGetter");
    var er = /* @__PURE__ */ n(function(e, r, t, a, u, s, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }, "ReactElement");
    function rr(e, r, t, a, u) {
      {
        var s, i = {}, o = null, h = null;
        t !== void 0 && (ge(t), o = "" + t), He(r) && (ge(r.key), o = "" + r.key), ze(r) && (h = r.ref, Xe(r, u));
        for (s in r)
          B.call(r, s) && !Ke.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            i[s] === void 0 && (i[s] = c[s]);
        }
        if (o || h) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ze(i, l), h && Qe(i, l);
        }
        return er(e, o, h, u, a, I.current, i);
      }
    }
    n(rr, "jsxDEV");
    var X = k.ReactCurrentOwner, ye = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    n(D, "setCurrentlyValidatingElement$1");
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    n(Q, "isValidElement");
    function Ee() {
      {
        if (X.current) {
          var e = w(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    n(Ee, "getDeclarationErrorAddendum");
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    n(tr, "getSourceInfoErrorAddendum");
    var be = {};
    function nr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    n(nr, "getCurrentComponentErrorInfo");
    function me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (be[t])
          return;
        be[t] = !0;
        var a = "";
        e && e._owner && e._owner !== X.current && (a = " It was passed a child from " + w(e._owner.type) + "."), D(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    n(me, "validateExplicitKey");
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Q(a) && me(a, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = je(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              Q(i.value) && me(i.value, r);
        }
      }
    }
    n(_e, "validateChildKeys");
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === f))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = w(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var u = w(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    n(ar, "validatePropTypes");
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    n(or, "validateFragmentProps");
    function Te(e, r, t, a, u, s) {
      {
        var i = $e(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = tr(u);
          h ? o += h : o += Ee();
          var c;
          e === null ? c = "null" : z(e) ? c = "array" : e !== void 0 && e.$$typeof === b ? (c = "<" + (w(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, o);
        }
        var l = rr(e, r, t, u, s);
        if (l == null)
          return l;
        if (i) {
          var T = r.children;
          if (T !== void 0)
            if (a)
              if (z(T)) {
                for (var F = 0; F < T.length; F++)
                  _e(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(T, e);
        }
        return e === R ? or(l) : ar(l), l;
      }
    }
    n(Te, "jsxWithValidation");
    function ir(e, r, t) {
      return Te(e, r, t, !0);
    }
    n(ir, "jsxWithValidationStatic");
    function ur(e, r, t) {
      return Te(e, r, t, !1);
    }
    n(ur, "jsxWithValidationDynamic");
    var sr = ur, fr = ir;
    $.Fragment = R, $.jsx = sr, $.jsxs = fr;
  }()), $;
}
n(Rr, "requireReactJsxRuntime_development");
(function(v) {
  process.env.NODE_ENV === "production" ? v.exports = hr() : v.exports = Rr();
})(gr);
const Se = ee.jsx, xe = lr({}), yr = /* @__PURE__ */ n(() => Y.useContext(xe), "usePinx"), mr = /* @__PURE__ */ n(({ children: v }) => {
  const [b, C] = Y.useState(0), [R, x] = Y.useState(
    Oe.map(v, () => "")
  ), y = dr([]), m = /* @__PURE__ */ n(() => {
    const f = b + 1;
    f < y.current.length && y.current[f].focus();
  }, "next"), p = {
    value: R,
    inputRefs: y,
    next: m,
    handleKeyDown: /* @__PURE__ */ n((f) => (E) => {
      if (E.key === "Backspace" && R[f] === "") {
        const P = f - 1;
        P >= 0 && y.current[P].focus();
      }
    }, "handleKeyDown"),
    handleChange: /* @__PURE__ */ n((f) => (E) => {
      const { value: P } = E.target;
      x((V) => {
        const L = [...V];
        return L[f] = P[0] || "", L;
      }), P.length > 0 && m();
    }, "handleChange"),
    handleFocus: /* @__PURE__ */ n((f) => () => {
      f !== b && C(f);
    }, "handleFocus")
  };
  return /* @__PURE__ */ Se(xe.Provider, { value: p, children: Oe.map(
    v,
    (f, E) => pr(f, { index: E })
  ) });
}, "Root"), _r = vr(
  ({ index: v, ...b }, C) => {
    const { value: R, inputRefs: x, handleFocus: y, handleChange: m, handleKeyDown: _ } = yr(), d = /* @__PURE__ */ n((O) => {
      x.current[v] = O, typeof C == "function" ? C(O) : C && C.current && (C.current = O);
    }, "handleRef");
    return /* @__PURE__ */ Se(
      "input",
      {
        ...b,
        type: "text",
        value: R == null ? void 0 : R[v],
        onInput: m == null ? void 0 : m(v),
        onFocus: y == null ? void 0 : y(v),
        onKeyDown: _ == null ? void 0 : _(v),
        ref: d
      }
    );
  }
);
export {
  _r as Pin,
  mr as Root
};
