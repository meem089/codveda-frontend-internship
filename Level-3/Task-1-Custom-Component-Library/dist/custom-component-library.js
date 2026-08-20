import je, { useRef as Ce, useEffect as Ae } from "react";
function ke(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ne = { exports: {} }, ee = {};
var ve;
function $e() {
  if (ve) return ee;
  ve = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.fragment");
  function b(f, d, c) {
    var p = null;
    if (c !== void 0 && (p = "" + c), d.key !== void 0 && (p = "" + d.key), "key" in d) {
      c = {};
      for (var l in d)
        l !== "key" && (c[l] = d[l]);
    } else c = d;
    return d = c.ref, {
      $$typeof: t,
      type: f,
      key: p,
      ref: d !== void 0 ? d : null,
      props: c
    };
  }
  return ee.Fragment = h, ee.jsx = b, ee.jsxs = b, ee;
}
var re = {};
var ye;
function Ie() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === G ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case A:
          return "Fragment";
        case z:
          return "Profiler";
        case N:
          return "StrictMode";
        case W:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case w:
            return "Portal";
          case k:
            return e.displayName || "Context";
          case $:
            return (e._context.displayName || "Context") + ".Consumer";
          case a:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return n = e.displayName || null, n !== null ? n : t(e.type) || "Memo";
          case U:
            n = e._payload, e = e._init;
            try {
              return t(e(n));
            } catch {
            }
        }
      return null;
    }
    function h(e) {
      return "" + e;
    }
    function b(e) {
      try {
        h(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var s = n.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), h(e);
      }
    }
    function f(e) {
      if (e === A) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === U)
        return "<...>";
      try {
        var n = t(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var e = V.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (X.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, n) {
      function s() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function x() {
      var e = t(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function g(e, n, s, i, E, v) {
      var u = s.ref;
      return e = {
        $$typeof: M,
        type: e,
        key: n,
        props: s,
        _owner: i
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function m(e, n, s, i, E, v) {
      var u = n.children;
      if (u !== void 0)
        if (i)
          if (F(u)) {
            for (i = 0; i < u.length; i++)
              _(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(u);
      if (X.call(n, "key")) {
        u = t(e);
        var y = Object.keys(n).filter(function(T) {
          return T !== "key";
        });
        i = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", r[u + i] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          y,
          u
        ), r[u + i] = !0);
      }
      if (u = null, s !== void 0 && (b(s), u = "" + s), p(n) && (b(n.key), u = "" + n.key), "key" in n) {
        s = {};
        for (var R in n)
          R !== "key" && (s[R] = n[R]);
      } else s = n;
      return u && l(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), g(
        e,
        u,
        s,
        d(),
        E,
        v
      );
    }
    function _(e) {
      C(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === U && (e._payload.status === "fulfilled" ? C(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function C(e) {
      return typeof e == "object" && e !== null && e.$$typeof === M;
    }
    var j = je, M = /* @__PURE__ */ Symbol.for("react.transitional.element"), w = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.fragment"), N = /* @__PURE__ */ Symbol.for("react.strict_mode"), z = /* @__PURE__ */ Symbol.for("react.profiler"), $ = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), G = /* @__PURE__ */ Symbol.for("react.client.reference"), V = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, F = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var q, D = {}, J = j.react_stack_bottom_frame.bind(
      j,
      c
    )(), H = B(f(c)), r = {};
    re.Fragment = A, re.jsx = function(e, n, s) {
      var i = 1e4 > V.recentlyCreatedOwnerStacks++;
      return m(
        e,
        n,
        s,
        !1,
        i ? Error("react-stack-top-frame") : J,
        i ? B(f(e)) : H
      );
    }, re.jsxs = function(e, n, s) {
      var i = 1e4 > V.recentlyCreatedOwnerStacks++;
      return m(
        e,
        n,
        s,
        !0,
        i ? Error("react-stack-top-frame") : J,
        i ? B(f(e)) : H
      );
    };
  })()), re;
}
var be;
function Me() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ne.exports = $e() : ne.exports = Ie()), ne.exports;
}
var I = Me(), oe = { exports: {} }, ae = { exports: {} }, O = {};
var me;
function Ne() {
  if (me) return O;
  me = 1;
  var t = typeof Symbol == "function" && Symbol.for, h = t ? /* @__PURE__ */ Symbol.for("react.element") : 60103, b = t ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, f = t ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, d = t ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = t ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, p = t ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, l = t ? /* @__PURE__ */ Symbol.for("react.context") : 60110, x = t ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, g = t ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, m = t ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, _ = t ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, C = t ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, j = t ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, M = t ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, w = t ? /* @__PURE__ */ Symbol.for("react.block") : 60121, A = t ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, N = t ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, z = t ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function $(a) {
    if (typeof a == "object" && a !== null) {
      var W = a.$$typeof;
      switch (W) {
        case h:
          switch (a = a.type, a) {
            case x:
            case g:
            case f:
            case c:
            case d:
            case _:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case l:
                case m:
                case M:
                case j:
                case p:
                  return a;
                default:
                  return W;
              }
          }
        case b:
          return W;
      }
    }
  }
  function k(a) {
    return $(a) === g;
  }
  return O.AsyncMode = x, O.ConcurrentMode = g, O.ContextConsumer = l, O.ContextProvider = p, O.Element = h, O.ForwardRef = m, O.Fragment = f, O.Lazy = M, O.Memo = j, O.Portal = b, O.Profiler = c, O.StrictMode = d, O.Suspense = _, O.isAsyncMode = function(a) {
    return k(a) || $(a) === x;
  }, O.isConcurrentMode = k, O.isContextConsumer = function(a) {
    return $(a) === l;
  }, O.isContextProvider = function(a) {
    return $(a) === p;
  }, O.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === h;
  }, O.isForwardRef = function(a) {
    return $(a) === m;
  }, O.isFragment = function(a) {
    return $(a) === f;
  }, O.isLazy = function(a) {
    return $(a) === M;
  }, O.isMemo = function(a) {
    return $(a) === j;
  }, O.isPortal = function(a) {
    return $(a) === b;
  }, O.isProfiler = function(a) {
    return $(a) === c;
  }, O.isStrictMode = function(a) {
    return $(a) === d;
  }, O.isSuspense = function(a) {
    return $(a) === _;
  }, O.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === f || a === g || a === c || a === d || a === _ || a === C || typeof a == "object" && a !== null && (a.$$typeof === M || a.$$typeof === j || a.$$typeof === p || a.$$typeof === l || a.$$typeof === m || a.$$typeof === A || a.$$typeof === N || a.$$typeof === z || a.$$typeof === w);
  }, O.typeOf = $, O;
}
var S = {};
var Ee;
function Ye() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = typeof Symbol == "function" && Symbol.for, h = t ? /* @__PURE__ */ Symbol.for("react.element") : 60103, b = t ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, f = t ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, d = t ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = t ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, p = t ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, l = t ? /* @__PURE__ */ Symbol.for("react.context") : 60110, x = t ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, g = t ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, m = t ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, _ = t ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, C = t ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, j = t ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, M = t ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, w = t ? /* @__PURE__ */ Symbol.for("react.block") : 60121, A = t ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, N = t ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, z = t ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function $(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === f || o === g || o === c || o === d || o === _ || o === C || typeof o == "object" && o !== null && (o.$$typeof === M || o.$$typeof === j || o.$$typeof === p || o.$$typeof === l || o.$$typeof === m || o.$$typeof === A || o.$$typeof === N || o.$$typeof === z || o.$$typeof === w);
    }
    function k(o) {
      if (typeof o == "object" && o !== null) {
        var L = o.$$typeof;
        switch (L) {
          case h:
            var te = o.type;
            switch (te) {
              case x:
              case g:
              case f:
              case c:
              case d:
              case _:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case l:
                  case m:
                  case M:
                  case j:
                  case p:
                    return pe;
                  default:
                    return L;
                }
            }
          case b:
            return L;
        }
      }
    }
    var a = x, W = g, Z = l, Q = p, U = h, K = m, G = f, V = M, X = j, F = b, B = c, q = d, D = _, J = !1;
    function H(o) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(o) || k(o) === x;
    }
    function r(o) {
      return k(o) === g;
    }
    function e(o) {
      return k(o) === l;
    }
    function n(o) {
      return k(o) === p;
    }
    function s(o) {
      return typeof o == "object" && o !== null && o.$$typeof === h;
    }
    function i(o) {
      return k(o) === m;
    }
    function E(o) {
      return k(o) === f;
    }
    function v(o) {
      return k(o) === M;
    }
    function u(o) {
      return k(o) === j;
    }
    function y(o) {
      return k(o) === b;
    }
    function R(o) {
      return k(o) === c;
    }
    function T(o) {
      return k(o) === d;
    }
    function Y(o) {
      return k(o) === _;
    }
    S.AsyncMode = a, S.ConcurrentMode = W, S.ContextConsumer = Z, S.ContextProvider = Q, S.Element = U, S.ForwardRef = K, S.Fragment = G, S.Lazy = V, S.Memo = X, S.Portal = F, S.Profiler = B, S.StrictMode = q, S.Suspense = D, S.isAsyncMode = H, S.isConcurrentMode = r, S.isContextConsumer = e, S.isContextProvider = n, S.isElement = s, S.isForwardRef = i, S.isFragment = E, S.isLazy = v, S.isMemo = u, S.isPortal = y, S.isProfiler = R, S.isStrictMode = T, S.isSuspense = Y, S.isValidElementType = $, S.typeOf = k;
  })()), S;
}
var he;
function Pe() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? ae.exports = Ne() : ae.exports = Ye()), ae.exports;
}
var ie, ge;
function qe() {
  if (ge) return ie;
  ge = 1;
  var t = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
  function f(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function d() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var p = {}, l = 0; l < 10; l++)
        p["_" + String.fromCharCode(l)] = l;
      var x = Object.getOwnPropertyNames(p).map(function(m) {
        return p[m];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        g[m] = m;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = d() ? Object.assign : function(c, p) {
    for (var l, x = f(c), g, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var _ in l)
        h.call(l, _) && (x[_] = l[_]);
      if (t) {
        g = t(l);
        for (var C = 0; C < g.length; C++)
          b.call(l, g[C]) && (x[g[C]] = l[g[C]]);
      }
    }
    return x;
  }, ie;
}
var se, Te;
function de() {
  if (Te) return se;
  Te = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = t, se;
}
var ue, _e;
function we() {
  return _e || (_e = 1, ue = Function.call.bind(Object.prototype.hasOwnProperty)), ue;
}
var ce, Re;
function De() {
  if (Re) return ce;
  Re = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var h = /* @__PURE__ */ de(), b = {}, f = /* @__PURE__ */ we();
    t = function(c) {
      var p = "Warning: " + c;
      typeof console < "u" && console.error(p);
      try {
        throw new Error(p);
      } catch {
      }
    };
  }
  function d(c, p, l, x, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in c)
        if (f(c, m)) {
          var _;
          try {
            if (typeof c[m] != "function") {
              var C = Error(
                (x || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            _ = c[m](p, m, x, l, null, h);
          } catch (M) {
            _ = M;
          }
          if (_ && !(_ instanceof Error) && t(
            (x || "React class") + ": type specification of " + l + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in b)) {
            b[_.message] = !0;
            var j = g ? g() : "";
            t(
              "Failed " + l + " type: " + _.message + (j ?? "")
            );
          }
        }
    }
  }
  return d.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (b = {});
  }, ce = d, ce;
}
var le, xe;
function Le() {
  if (xe) return le;
  xe = 1;
  var t = Pe(), h = qe(), b = /* @__PURE__ */ de(), f = /* @__PURE__ */ we(), d = /* @__PURE__ */ De(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(l) {
    var x = "Warning: " + l;
    typeof console < "u" && console.error(x);
    try {
      throw new Error(x);
    } catch {
    }
  });
  function p() {
    return null;
  }
  return le = function(l, x) {
    var g = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function _(r) {
      var e = r && (g && r[g] || r[m]);
      if (typeof e == "function")
        return e;
    }
    var C = "<<anonymous>>", j = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: z(),
      arrayOf: $,
      element: k(),
      elementType: a(),
      instanceOf: W,
      node: K(),
      objectOf: Q,
      oneOf: Z,
      oneOfType: U,
      shape: V,
      exact: X
    };
    function M(r, e) {
      return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
    }
    function w(r, e) {
      this.message = r, this.data = e && typeof e == "object" ? e : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function A(r) {
      if (process.env.NODE_ENV !== "production")
        var e = {}, n = 0;
      function s(E, v, u, y, R, T, Y) {
        if (y = y || C, T = T || u, Y !== b) {
          if (x) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var L = y + ":" + u;
            !e[L] && // Avoid spamming the console because they are often not actionable except for lib authors
            n < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), e[L] = !0, n++);
          }
        }
        return v[u] == null ? E ? v[u] === null ? new w("The " + R + " `" + T + "` is marked as required " + ("in `" + y + "`, but its value is `null`.")) : new w("The " + R + " `" + T + "` is marked as required in " + ("`" + y + "`, but its value is `undefined`.")) : null : r(v, u, y, R, T);
      }
      var i = s.bind(null, !1);
      return i.isRequired = s.bind(null, !0), i;
    }
    function N(r) {
      function e(n, s, i, E, v, u) {
        var y = n[s], R = q(y);
        if (R !== r) {
          var T = D(y);
          return new w(
            "Invalid " + E + " `" + v + "` of type " + ("`" + T + "` supplied to `" + i + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return A(e);
    }
    function z() {
      return A(p);
    }
    function $(r) {
      function e(n, s, i, E, v) {
        if (typeof r != "function")
          return new w("Property `" + v + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
        var u = n[s];
        if (!Array.isArray(u)) {
          var y = q(u);
          return new w("Invalid " + E + " `" + v + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected an array."));
        }
        for (var R = 0; R < u.length; R++) {
          var T = r(u, R, i, E, v + "[" + R + "]", b);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return A(e);
    }
    function k() {
      function r(e, n, s, i, E) {
        var v = e[n];
        if (!l(v)) {
          var u = q(v);
          return new w("Invalid " + i + " `" + E + "` of type " + ("`" + u + "` supplied to `" + s + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(r);
    }
    function a() {
      function r(e, n, s, i, E) {
        var v = e[n];
        if (!t.isValidElementType(v)) {
          var u = q(v);
          return new w("Invalid " + i + " `" + E + "` of type " + ("`" + u + "` supplied to `" + s + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(r);
    }
    function W(r) {
      function e(n, s, i, E, v) {
        if (!(n[s] instanceof r)) {
          var u = r.name || C, y = H(n[s]);
          return new w("Invalid " + E + " `" + v + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected ") + ("instance of `" + u + "`."));
        }
        return null;
      }
      return A(e);
    }
    function Z(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), p;
      function e(n, s, i, E, v) {
        for (var u = n[s], y = 0; y < r.length; y++)
          if (M(u, r[y]))
            return null;
        var R = JSON.stringify(r, function(Y, o) {
          var L = D(o);
          return L === "symbol" ? String(o) : o;
        });
        return new w("Invalid " + E + " `" + v + "` of value `" + String(u) + "` " + ("supplied to `" + i + "`, expected one of " + R + "."));
      }
      return A(e);
    }
    function Q(r) {
      function e(n, s, i, E, v) {
        if (typeof r != "function")
          return new w("Property `" + v + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
        var u = n[s], y = q(u);
        if (y !== "object")
          return new w("Invalid " + E + " `" + v + "` of type " + ("`" + y + "` supplied to `" + i + "`, expected an object."));
        for (var R in u)
          if (f(u, R)) {
            var T = r(u, R, i, E, v + "." + R, b);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return A(e);
    }
    function U(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), p;
      for (var e = 0; e < r.length; e++) {
        var n = r[e];
        if (typeof n != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J(n) + " at index " + e + "."
          ), p;
      }
      function s(i, E, v, u, y) {
        for (var R = [], T = 0; T < r.length; T++) {
          var Y = r[T], o = Y(i, E, v, u, y, b);
          if (o == null)
            return null;
          o.data && f(o.data, "expectedType") && R.push(o.data.expectedType);
        }
        var L = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new w("Invalid " + u + " `" + y + "` supplied to " + ("`" + v + "`" + L + "."));
      }
      return A(s);
    }
    function K() {
      function r(e, n, s, i, E) {
        return F(e[n]) ? null : new w("Invalid " + i + " `" + E + "` supplied to " + ("`" + s + "`, expected a ReactNode."));
      }
      return A(r);
    }
    function G(r, e, n, s, i) {
      return new w(
        (r || "React class") + ": " + e + " type `" + n + "." + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`."
      );
    }
    function V(r) {
      function e(n, s, i, E, v) {
        var u = n[s], y = q(u);
        if (y !== "object")
          return new w("Invalid " + E + " `" + v + "` of type `" + y + "` " + ("supplied to `" + i + "`, expected `object`."));
        for (var R in r) {
          var T = r[R];
          if (typeof T != "function")
            return G(i, E, v, R, D(T));
          var Y = T(u, R, i, E, v + "." + R, b);
          if (Y)
            return Y;
        }
        return null;
      }
      return A(e);
    }
    function X(r) {
      function e(n, s, i, E, v) {
        var u = n[s], y = q(u);
        if (y !== "object")
          return new w("Invalid " + E + " `" + v + "` of type `" + y + "` " + ("supplied to `" + i + "`, expected `object`."));
        var R = h({}, n[s], r);
        for (var T in R) {
          var Y = r[T];
          if (f(r, T) && typeof Y != "function")
            return G(i, E, v, T, D(Y));
          if (!Y)
            return new w(
              "Invalid " + E + " `" + v + "` key `" + T + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(n[s], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var o = Y(u, T, i, E, v + "." + T, b);
          if (o)
            return o;
        }
        return null;
      }
      return A(e);
    }
    function F(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(F);
          if (r === null || l(r))
            return !0;
          var e = _(r);
          if (e) {
            var n = e.call(r), s;
            if (e !== r.entries) {
              for (; !(s = n.next()).done; )
                if (!F(s.value))
                  return !1;
            } else
              for (; !(s = n.next()).done; ) {
                var i = s.value;
                if (i && !F(i[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(r, e) {
      return r === "symbol" ? !0 : e ? e["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && e instanceof Symbol : !1;
    }
    function q(r) {
      var e = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : B(e, r) ? "symbol" : e;
    }
    function D(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var e = q(r);
      if (e === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return e;
    }
    function J(r) {
      var e = D(r);
      switch (e) {
        case "array":
        case "object":
          return "an " + e;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + e;
        default:
          return e;
      }
    }
    function H(r) {
      return !r.constructor || !r.constructor.name ? C : r.constructor.name;
    }
    return j.checkPropTypes = d, j.resetWarningCache = d.resetWarningCache, j.PropTypes = j, j;
  }, le;
}
var fe, Oe;
function We() {
  if (Oe) return fe;
  Oe = 1;
  var t = /* @__PURE__ */ de();
  function h() {
  }
  function b() {
  }
  return b.resetWarningCache = h, fe = function() {
    function f(p, l, x, g, m, _) {
      if (_ !== t) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    f.isRequired = f;
    function d() {
      return f;
    }
    var c = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: d,
      element: f,
      elementType: f,
      instanceOf: d,
      node: f,
      objectOf: d,
      oneOf: d,
      oneOfType: d,
      shape: d,
      exact: d,
      checkPropTypes: b,
      resetWarningCache: h
    };
    return c.PropTypes = c, c;
  }, fe;
}
var Se;
function Fe() {
  if (Se) return oe.exports;
  if (Se = 1, process.env.NODE_ENV !== "production") {
    var t = Pe(), h = !0;
    oe.exports = /* @__PURE__ */ Le()(t.isElement, h);
  } else
    oe.exports = /* @__PURE__ */ We()();
  return oe.exports;
}
var ze = /* @__PURE__ */ Fe();
const P = /* @__PURE__ */ ke(ze);
function Ue({
  children: t,
  variant: h = "primary",
  size: b = "medium",
  disabled: f = !1,
  onClick: d,
  type: c = "button",
  ariaLabel: p
}) {
  const l = "inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", x = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300 focus-visible:ring-slate-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus-visible:ring-indigo-500"
  }, g = {
    small: "px-3 py-2 text-sm",
    medium: "px-5 py-2.5 text-base",
    large: "px-7 py-3 text-lg"
  };
  return /* @__PURE__ */ I.jsx(
    "button",
    {
      type: c,
      disabled: f,
      onClick: d,
      className: `${l} ${x[h]} ${g[b]}`,
      "aria-label": p,
      "aria-disabled": f,
      children: t
    }
  );
}
Ue.propTypes = {
  children: P.node.isRequired,
  variant: P.oneOf([
    "primary",
    "secondary",
    "danger",
    "outline"
  ]),
  size: P.oneOf(["small", "medium", "large"]),
  disabled: P.bool,
  onClick: P.func,
  type: P.oneOf(["button", "submit", "reset"]),
  ariaLabel: P.string
};
function Ve({
  label: t,
  name: h,
  type: b = "text",
  placeholder: f = "",
  value: d = "",
  onChange: c,
  error: p = "",
  required: l = !1,
  disabled: x = !1,
  ariaLabel: g
}) {
  const m = `input-${h}`, _ = `${m}-error`;
  return /* @__PURE__ */ I.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ I.jsxs(
      "label",
      {
        htmlFor: m,
        className: "mb-2 block text-sm font-semibold text-slate-700",
        children: [
          t,
          l && /* @__PURE__ */ I.jsx(
            "span",
            {
              className: "ml-1 text-red-600",
              "aria-hidden": "true",
              children: "*"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ I.jsx(
      "input",
      {
        id: m,
        name: h,
        type: b,
        value: d,
        onChange: c,
        placeholder: f,
        disabled: x,
        required: l,
        "aria-label": g,
        "aria-invalid": !!p,
        "aria-describedby": p ? _ : void 0,
        className: `w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-100 ${p ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-200"}`
      }
    ),
    p && /* @__PURE__ */ I.jsx(
      "p",
      {
        id: _,
        role: "alert",
        "aria-live": "polite",
        className: "mt-2 text-sm text-red-600",
        children: p
      }
    )
  ] });
}
Ve.propTypes = {
  label: P.string.isRequired,
  name: P.string.isRequired,
  type: P.string,
  placeholder: P.string,
  value: P.string,
  onChange: P.func.isRequired,
  error: P.string,
  required: P.bool,
  disabled: P.bool,
  ariaLabel: P.string
};
function Be({ title: t, description: h, children: b, footer: f }) {
  const d = `card-title-${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return /* @__PURE__ */ I.jsxs(
    "article",
    {
      "aria-labelledby": d,
      className: "w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg",
      children: [
        /* @__PURE__ */ I.jsxs("header", { children: [
          /* @__PURE__ */ I.jsx(
            "h2",
            {
              id: d,
              className: "text-xl font-bold text-slate-900",
              children: t
            }
          ),
          h && /* @__PURE__ */ I.jsx("p", { className: "mt-2 text-sm leading-6 text-slate-600", children: h })
        ] }),
        /* @__PURE__ */ I.jsx("div", { className: "mt-5", children: b }),
        f && /* @__PURE__ */ I.jsx("footer", { className: "mt-6 border-t border-slate-100 pt-4", children: f })
      ]
    }
  );
}
Be.propTypes = {
  title: P.string.isRequired,
  description: P.string,
  children: P.node,
  footer: P.node
};
function Je({
  isOpen: t,
  onClose: h,
  title: b,
  children: f,
  closeLabel: d = "Close modal"
}) {
  const c = Ce(null);
  if (Ae(() => {
    if (!t) return;
    const l = (g) => {
      g.key === "Escape" && h();
    };
    document.addEventListener("keydown", l);
    const x = document.activeElement;
    return c.current?.focus(), () => {
      document.removeEventListener("keydown", l), x instanceof HTMLElement && x.focus();
    };
  }, [t, h]), !t)
    return null;
  const p = (l) => {
    l.target === l.currentTarget && h();
  };
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4",
      role: "presentation",
      onMouseDown: p,
      children: /* @__PURE__ */ I.jsxs(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "modal-title",
          className: "w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl",
          children: [
            /* @__PURE__ */ I.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ I.jsx(
                "h2",
                {
                  id: "modal-title",
                  className: "text-xl font-bold text-slate-900",
                  children: b
                }
              ),
              /* @__PURE__ */ I.jsx(
                "button",
                {
                  ref: c,
                  type: "button",
                  onClick: h,
                  "aria-label": d,
                  className: "rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  children: /* @__PURE__ */ I.jsx("span", { "aria-hidden": "true", children: "✕" })
                }
              )
            ] }),
            /* @__PURE__ */ I.jsx("div", { className: "mt-5 text-slate-600", children: f })
          ]
        }
      )
    }
  );
}
Je.propTypes = {
  isOpen: P.bool.isRequired,
  onClose: P.func.isRequired,
  title: P.string.isRequired,
  children: P.node.isRequired,
  closeLabel: P.string
};
export {
  Ue as Button,
  Be as Card,
  Ve as Input,
  Je as Modal
};
