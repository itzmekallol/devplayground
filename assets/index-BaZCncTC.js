var Ap = (n) => {
  throw TypeError(n);
};
var Ip = (n, r, o) => r.has(n) || Ap("Cannot " + o);
var at = (n, r, o) => (
    Ip(n, r, "read from private field"),
    o ? o.call(n) : r.get(n)
  ),
  Lp = (n, r, o) =>
    r.has(n)
      ? Ap("Cannot add the same private member more than once")
      : r instanceof WeakSet
        ? r.add(n)
        : r.set(n, o),
  Su = (n, r, o, s) => (
    Ip(n, r, "write to private field"),
    s ? s.call(n, o) : r.set(n, o),
    o
  );
function Gw(n, r) {
  for (var o = 0; o < r.length; o++) {
    const s = r[o];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const a in s)
        if (a !== "default" && !(a in n)) {
          const c = Object.getOwnPropertyDescriptor(s, a);
          c &&
            Object.defineProperty(
              n,
              a,
              c.get ? c : { enumerable: !0, get: () => s[a] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const c of a)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(a) {
    const c = {};
    return (
      a.integrity && (c.integrity = a.integrity),
      a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const c = o(a);
    fetch(a.href, c);
  }
})();
function Yw(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Cu = { exports: {} },
  ui = {},
  Eu = { exports: {} },
  we = {};
var Fp;
function Xw() {
  if (Fp) return we;
  Fp = 1;
  var n = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function S(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (w && T[w]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    P = Object.assign,
    C = {};
  function E(T, H, de) {
    ((this.props = T),
      (this.context = H),
      (this.refs = C),
      (this.updater = de || R));
  }
  ((E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (T, H) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, T, H, "setState");
    }),
    (E.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    }));
  function k() {}
  k.prototype = E.prototype;
  function N(T, H, de) {
    ((this.props = T),
      (this.context = H),
      (this.refs = C),
      (this.updater = de || R));
  }
  var D = (N.prototype = new k());
  ((D.constructor = N), P(D, E.prototype), (D.isPureReactComponent = !0));
  var _ = Array.isArray,
    I = Object.prototype.hasOwnProperty,
    F = { current: null },
    $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(T, H, de) {
    var he,
      ve = {},
      ge = null,
      ke = null;
    if (H != null)
      for (he in (H.ref !== void 0 && (ke = H.ref),
      H.key !== void 0 && (ge = "" + H.key),
      H))
        I.call(H, he) && !$.hasOwnProperty(he) && (ve[he] = H[he]);
    var xe = arguments.length - 2;
    if (xe === 1) ve.children = de;
    else if (1 < xe) {
      for (var Se = Array(xe), be = 0; be < xe; be++)
        Se[be] = arguments[be + 2];
      ve.children = Se;
    }
    if (T && T.defaultProps)
      for (he in ((xe = T.defaultProps), xe))
        ve[he] === void 0 && (ve[he] = xe[he]);
    return {
      $$typeof: n,
      type: T,
      key: ge,
      ref: ke,
      props: ve,
      _owner: F.current,
    };
  }
  function G(T, H) {
    return {
      $$typeof: n,
      type: T.type,
      key: H,
      ref: T.ref,
      props: T.props,
      _owner: T._owner,
    };
  }
  function W(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function ce(T) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (de) {
        return H[de];
      })
    );
  }
  var Y = /\/+/g;
  function ne(T, H) {
    return typeof T == "object" && T !== null && T.key != null
      ? ce("" + T.key)
      : H.toString(36);
  }
  function te(T, H, de, he, ve) {
    var ge = typeof T;
    (ge === "undefined" || ge === "boolean") && (T = null);
    var ke = !1;
    if (T === null) ke = !0;
    else
      switch (ge) {
        case "string":
        case "number":
          ke = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case r:
              ke = !0;
          }
      }
    if (ke)
      return (
        (ke = T),
        (ve = ve(ke)),
        (T = he === "" ? "." + ne(ke, 0) : he),
        _(ve)
          ? ((de = ""),
            T != null && (de = T.replace(Y, "$&/") + "/"),
            te(ve, H, de, "", function (be) {
              return be;
            }))
          : ve != null &&
            (W(ve) &&
              (ve = G(
                ve,
                de +
                  (!ve.key || (ke && ke.key === ve.key)
                    ? ""
                    : ("" + ve.key).replace(Y, "$&/") + "/") +
                  T,
              )),
            H.push(ve)),
        1
      );
    if (((ke = 0), (he = he === "" ? "." : he + ":"), _(T)))
      for (var xe = 0; xe < T.length; xe++) {
        ge = T[xe];
        var Se = he + ne(ge, xe);
        ke += te(ge, H, de, Se, ve);
      }
    else if (((Se = S(T)), typeof Se == "function"))
      for (T = Se.call(T), xe = 0; !(ge = T.next()).done; )
        ((ge = ge.value),
          (Se = he + ne(ge, xe++)),
          (ke += te(ge, H, de, Se, ve)));
    else if (ge === "object")
      throw (
        (H = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ke;
  }
  function le(T, H, de) {
    if (T == null) return T;
    var he = [],
      ve = 0;
    return (
      te(T, he, "", "", function (ge) {
        return H.call(de, ge, ve++);
      }),
      he
    );
  }
  function Q(T) {
    if (T._status === -1) {
      var H = T._result;
      ((H = H()),
        H.then(
          function (de) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = de));
          },
          function (de) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = de));
          },
        ),
        T._status === -1 && ((T._status = 0), (T._result = H)));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var oe = { current: null },
    z = { transition: null },
    J = {
      ReactCurrentDispatcher: oe,
      ReactCurrentBatchConfig: z,
      ReactCurrentOwner: F,
    };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (we.Children = {
      map: le,
      forEach: function (T, H, de) {
        le(
          T,
          function () {
            H.apply(this, arguments);
          },
          de,
        );
      },
      count: function (T) {
        var H = 0;
        return (
          le(T, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (T) {
        return (
          le(T, function (H) {
            return H;
          }) || []
        );
      },
      only: function (T) {
        if (!W(T))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return T;
      },
    }),
    (we.Component = E),
    (we.Fragment = o),
    (we.Profiler = a),
    (we.PureComponent = N),
    (we.StrictMode = s),
    (we.Suspense = m),
    (we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
    (we.act = X),
    (we.cloneElement = function (T, H, de) {
      if (T == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            T +
            ".",
        );
      var he = P({}, T.props),
        ve = T.key,
        ge = T.ref,
        ke = T._owner;
      if (H != null) {
        if (
          (H.ref !== void 0 && ((ge = H.ref), (ke = F.current)),
          H.key !== void 0 && (ve = "" + H.key),
          T.type && T.type.defaultProps)
        )
          var xe = T.type.defaultProps;
        for (Se in H)
          I.call(H, Se) &&
            !$.hasOwnProperty(Se) &&
            (he[Se] = H[Se] === void 0 && xe !== void 0 ? xe[Se] : H[Se]);
      }
      var Se = arguments.length - 2;
      if (Se === 1) he.children = de;
      else if (1 < Se) {
        xe = Array(Se);
        for (var be = 0; be < Se; be++) xe[be] = arguments[be + 2];
        he.children = xe;
      }
      return {
        $$typeof: n,
        type: T.type,
        key: ve,
        ref: ge,
        props: he,
        _owner: ke,
      };
    }),
    (we.createContext = function (T) {
      return (
        (T = {
          $$typeof: f,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (T.Provider = { $$typeof: c, _context: T }),
        (T.Consumer = T)
      );
    }),
    (we.createElement = U),
    (we.createFactory = function (T) {
      var H = U.bind(null, T);
      return ((H.type = T), H);
    }),
    (we.createRef = function () {
      return { current: null };
    }),
    (we.forwardRef = function (T) {
      return { $$typeof: p, render: T };
    }),
    (we.isValidElement = W),
    (we.lazy = function (T) {
      return { $$typeof: y, _payload: { _status: -1, _result: T }, _init: Q };
    }),
    (we.memo = function (T, H) {
      return { $$typeof: x, type: T, compare: H === void 0 ? null : H };
    }),
    (we.startTransition = function (T) {
      var H = z.transition;
      z.transition = {};
      try {
        T();
      } finally {
        z.transition = H;
      }
    }),
    (we.unstable_act = X),
    (we.useCallback = function (T, H) {
      return oe.current.useCallback(T, H);
    }),
    (we.useContext = function (T) {
      return oe.current.useContext(T);
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (T) {
      return oe.current.useDeferredValue(T);
    }),
    (we.useEffect = function (T, H) {
      return oe.current.useEffect(T, H);
    }),
    (we.useId = function () {
      return oe.current.useId();
    }),
    (we.useImperativeHandle = function (T, H, de) {
      return oe.current.useImperativeHandle(T, H, de);
    }),
    (we.useInsertionEffect = function (T, H) {
      return oe.current.useInsertionEffect(T, H);
    }),
    (we.useLayoutEffect = function (T, H) {
      return oe.current.useLayoutEffect(T, H);
    }),
    (we.useMemo = function (T, H) {
      return oe.current.useMemo(T, H);
    }),
    (we.useReducer = function (T, H, de) {
      return oe.current.useReducer(T, H, de);
    }),
    (we.useRef = function (T) {
      return oe.current.useRef(T);
    }),
    (we.useState = function (T) {
      return oe.current.useState(T);
    }),
    (we.useSyncExternalStore = function (T, H, de) {
      return oe.current.useSyncExternalStore(T, H, de);
    }),
    (we.useTransition = function () {
      return oe.current.useTransition();
    }),
    (we.version = "18.3.1"),
    we
  );
}
var zp;
function gl() {
  return (zp || ((zp = 1), (Eu.exports = Xw())), Eu.exports);
}
var $p;
function Zw() {
  if ($p) return ui;
  $p = 1;
  var n = gl(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, x) {
    var y,
      w = {},
      S = null,
      R = null;
    (x !== void 0 && (S = "" + x),
      m.key !== void 0 && (S = "" + m.key),
      m.ref !== void 0 && (R = m.ref));
    for (y in m) s.call(m, y) && !c.hasOwnProperty(y) && (w[y] = m[y]);
    if (p && p.defaultProps)
      for (y in ((m = p.defaultProps), m)) w[y] === void 0 && (w[y] = m[y]);
    return {
      $$typeof: r,
      type: p,
      key: S,
      ref: R,
      props: w,
      _owner: a.current,
    };
  }
  return ((ui.Fragment = o), (ui.jsx = f), (ui.jsxs = f), ui);
}
var Up;
function Jw() {
  return (Up || ((Up = 1), (Cu.exports = Zw())), Cu.exports);
}
var g = Jw(),
  Hs = {},
  bu = { exports: {} },
  yt = {},
  ku = { exports: {} },
  Pu = {};
var Vp;
function e0() {
  return (
    Vp ||
      ((Vp = 1),
      (function (n) {
        function r(z, J) {
          var X = z.length;
          z.push(J);
          e: for (; 0 < X; ) {
            var T = (X - 1) >>> 1,
              H = z[T];
            if (0 < a(H, J)) ((z[T] = J), (z[X] = H), (X = T));
            else break e;
          }
        }
        function o(z) {
          return z.length === 0 ? null : z[0];
        }
        function s(z) {
          if (z.length === 0) return null;
          var J = z[0],
            X = z.pop();
          if (X !== J) {
            z[0] = X;
            e: for (var T = 0, H = z.length, de = H >>> 1; T < de; ) {
              var he = 2 * (T + 1) - 1,
                ve = z[he],
                ge = he + 1,
                ke = z[ge];
              if (0 > a(ve, X))
                ge < H && 0 > a(ke, ve)
                  ? ((z[T] = ke), (z[ge] = X), (T = ge))
                  : ((z[T] = ve), (z[he] = X), (T = he));
              else if (ge < H && 0 > a(ke, X))
                ((z[T] = ke), (z[ge] = X), (T = ge));
              else break e;
            }
          }
          return J;
        }
        function a(z, J) {
          var X = z.sortIndex - J.sortIndex;
          return X !== 0 ? X : z.id - J.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          x = [],
          y = 1,
          w = null,
          S = 3,
          R = !1,
          P = !1,
          C = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          k = typeof clearTimeout == "function" ? clearTimeout : null,
          N = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function D(z) {
          for (var J = o(x); J !== null; ) {
            if (J.callback === null) s(x);
            else if (J.startTime <= z)
              (s(x), (J.sortIndex = J.expirationTime), r(m, J));
            else break;
            J = o(x);
          }
        }
        function _(z) {
          if (((C = !1), D(z), !P))
            if (o(m) !== null) ((P = !0), Q(I));
            else {
              var J = o(x);
              J !== null && oe(_, J.startTime - z);
            }
        }
        function I(z, J) {
          ((P = !1), C && ((C = !1), k(U), (U = -1)), (R = !0));
          var X = S;
          try {
            for (
              D(J), w = o(m);
              w !== null && (!(w.expirationTime > J) || (z && !ce()));
            ) {
              var T = w.callback;
              if (typeof T == "function") {
                ((w.callback = null), (S = w.priorityLevel));
                var H = T(w.expirationTime <= J);
                ((J = n.unstable_now()),
                  typeof H == "function"
                    ? (w.callback = H)
                    : w === o(m) && s(m),
                  D(J));
              } else s(m);
              w = o(m);
            }
            if (w !== null) var de = !0;
            else {
              var he = o(x);
              (he !== null && oe(_, he.startTime - J), (de = !1));
            }
            return de;
          } finally {
            ((w = null), (S = X), (R = !1));
          }
        }
        var F = !1,
          $ = null,
          U = -1,
          G = 5,
          W = -1;
        function ce() {
          return !(n.unstable_now() - W < G);
        }
        function Y() {
          if ($ !== null) {
            var z = n.unstable_now();
            W = z;
            var J = !0;
            try {
              J = $(!0, z);
            } finally {
              J ? ne() : ((F = !1), ($ = null));
            }
          } else F = !1;
        }
        var ne;
        if (typeof N == "function")
          ne = function () {
            N(Y);
          };
        else if (typeof MessageChannel < "u") {
          var te = new MessageChannel(),
            le = te.port2;
          ((te.port1.onmessage = Y),
            (ne = function () {
              le.postMessage(null);
            }));
        } else
          ne = function () {
            E(Y, 0);
          };
        function Q(z) {
          (($ = z), F || ((F = !0), ne()));
        }
        function oe(z, J) {
          U = E(function () {
            z(n.unstable_now());
          }, J);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            P || R || ((P = !0), Q(I));
          }),
          (n.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (G = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(m);
          }),
          (n.unstable_next = function (z) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = S;
            }
            var X = S;
            S = J;
            try {
              return z();
            } finally {
              S = X;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (z, J) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var X = S;
            S = z;
            try {
              return J();
            } finally {
              S = X;
            }
          }),
          (n.unstable_scheduleCallback = function (z, J, X) {
            var T = n.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? T + X : T))
                : (X = T),
              z)
            ) {
              case 1:
                var H = -1;
                break;
              case 2:
                H = 250;
                break;
              case 5:
                H = 1073741823;
                break;
              case 4:
                H = 1e4;
                break;
              default:
                H = 5e3;
            }
            return (
              (H = X + H),
              (z = {
                id: y++,
                callback: J,
                priorityLevel: z,
                startTime: X,
                expirationTime: H,
                sortIndex: -1,
              }),
              X > T
                ? ((z.sortIndex = X),
                  r(x, z),
                  o(m) === null &&
                    z === o(x) &&
                    (C ? (k(U), (U = -1)) : (C = !0), oe(_, X - T)))
                : ((z.sortIndex = H), r(m, z), P || R || ((P = !0), Q(I))),
              z
            );
          }),
          (n.unstable_shouldYield = ce),
          (n.unstable_wrapCallback = function (z) {
            var J = S;
            return function () {
              var X = S;
              S = J;
              try {
                return z.apply(this, arguments);
              } finally {
                S = X;
              }
            };
          }));
      })(Pu)),
    Pu
  );
}
var Hp;
function t0() {
  return (Hp || ((Hp = 1), (ku.exports = e0())), ku.exports);
}
var Wp;
function n0() {
  if (Wp) return yt;
  Wp = 1;
  var n = gl(),
    r = t0();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        i = 1;
      i < arguments.length;
      i++
    )
      t += "&args[]=" + encodeURIComponent(arguments[i]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    a = {};
  function c(e, t) {
    (f(e, t), f(e + "Capture", t));
  }
  function f(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    x =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    w = {};
  function S(e) {
    return m.call(w, e)
      ? !0
      : m.call(y, e)
        ? !1
        : x.test(e)
          ? (w[e] = !0)
          : ((y[e] = !0), !1);
  }
  function R(e, t, i, l) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function P(e, t, i, l) {
    if (t === null || typeof t > "u" || R(e, t, i, l)) return !0;
    if (l) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function C(e, t, i, l, u, d, v) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = l),
      (this.attributeNamespace = u),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = d),
      (this.removeEmptyString = v));
  }
  var E = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      E[e] = new C(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      E[t] = new C(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        E[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      E[e] = new C(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        E[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      E[e] = new C(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      E[e] = new C(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      E[e] = new C(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      E[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var k = /[\-:]([a-z])/g;
  function N(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(k, N);
      E[t] = new C(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(k, N);
        E[t] = new C(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(k, N);
      E[t] = new C(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      E[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (E.xlinkHref = new C(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      E[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function D(e, t, i, l) {
    var u = E.hasOwnProperty(t) ? E[t] : null;
    (u !== null
      ? u.type !== 0
      : l ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (P(t, i, u, l) && (i = null),
      l || u === null
        ? S(t) &&
          (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i))
        : u.mustUseProperty
          ? (e[u.propertyName] = i === null ? (u.type === 3 ? !1 : "") : i)
          : ((t = u.attributeName),
            (l = u.attributeNamespace),
            i === null
              ? e.removeAttribute(t)
              : ((u = u.type),
                (i = u === 3 || (u === 4 && i === !0) ? "" : "" + i),
                l ? e.setAttributeNS(l, t, i) : e.setAttribute(t, i))));
  }
  var _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    I = Symbol.for("react.element"),
    F = Symbol.for("react.portal"),
    $ = Symbol.for("react.fragment"),
    U = Symbol.for("react.strict_mode"),
    G = Symbol.for("react.profiler"),
    W = Symbol.for("react.provider"),
    ce = Symbol.for("react.context"),
    Y = Symbol.for("react.forward_ref"),
    ne = Symbol.for("react.suspense"),
    te = Symbol.for("react.suspense_list"),
    le = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    oe = Symbol.for("react.offscreen"),
    z = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (z && e[z]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var X = Object.assign,
    T;
  function H(e) {
    if (T === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        T = (t && t[1]) || "";
      }
    return (
      `
` +
      T +
      e
    );
  }
  var de = !1;
  function he(e, t) {
    if (!e || de) return "";
    de = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (L) {
            var l = L;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (L) {
            l = L;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (L) {
          l = L;
        }
        e();
      }
    } catch (L) {
      if (L && l && typeof L.stack == "string") {
        for (
          var u = L.stack.split(`
`),
            d = l.stack.split(`
`),
            v = u.length - 1,
            b = d.length - 1;
          1 <= v && 0 <= b && u[v] !== d[b];
        )
          b--;
        for (; 1 <= v && 0 <= b; v--, b--)
          if (u[v] !== d[b]) {
            if (v !== 1 || b !== 1)
              do
                if ((v--, b--, 0 > b || u[v] !== d[b])) {
                  var O =
                    `
` + u[v].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      O.includes("<anonymous>") &&
                      (O = O.replace("<anonymous>", e.displayName)),
                    O
                  );
                }
              while (1 <= v && 0 <= b);
            break;
          }
      }
    } finally {
      ((de = !1), (Error.prepareStackTrace = i));
    }
    return (e = e ? e.displayName || e.name : "") ? H(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return H(e.type);
      case 16:
        return H("Lazy");
      case 13:
        return H("Suspense");
      case 19:
        return H("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = he(e.type, !1)), e);
      case 11:
        return ((e = he(e.type.render, !1)), e);
      case 1:
        return ((e = he(e.type, !0)), e);
      default:
        return "";
    }
  }
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case F:
        return "Portal";
      case G:
        return "Profiler";
      case U:
        return "StrictMode";
      case ne:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ce:
          return (e.displayName || "Context") + ".Consumer";
        case W:
          return (e._context.displayName || "Context") + ".Provider";
        case Y:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case le:
          return (
            (t = e.displayName || null),
            t !== null ? t : ge(e.type) || "Memo"
          );
        case Q:
          ((t = e._payload), (e = e._init));
          try {
            return ge(e(t));
          } catch {}
      }
    return null;
  }
  function ke(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ge(t);
      case 8:
        return t === U ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function xe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Se(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function be(e) {
    var t = Se(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var u = i.get,
        d = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (v) {
            ((l = "" + v), d.call(this, v));
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (v) {
            l = "" + v;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Gt(e) {
    e._valueTracker || (e._valueTracker = be(e));
  }
  function Ft(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      l = "";
    return (
      e && (l = Se(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function cn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function jn(e, t) {
    var i = t.checked;
    return X({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function Yt(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue,
      l = t.checked != null ? t.checked : t.defaultChecked;
    ((i = xe(t.value != null ? t.value : i)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: i,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function ji(e, t) {
    ((t = t.checked), t != null && D(e, "checked", t, !1));
  }
  function So(e, t) {
    ji(e, t);
    var i = xe(t.value),
      l = t.type;
    if (i != null)
      l === "number"
        ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
        : e.value !== "" + i && (e.value = "" + i);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Nr(e, t.type, i)
      : t.hasOwnProperty("defaultValue") && Nr(e, t.type, xe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function _i(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        i || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((i = e.name),
      i !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== "" && (e.name = i));
  }
  function Nr(e, t, i) {
    (t !== "number" || cn(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var Tt = Array.isArray;
  function _n(e, t, i, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < i.length; u++) t["$" + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        ((u = t.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== u && (e[i].selected = u),
          u && l && (e[i].defaultSelected = !0));
    } else {
      for (i = "" + xe(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          ((e[u].selected = !0), l && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return X({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Co(e, t) {
    var i = t.value;
    if (i == null) {
      if (((i = t.children), (t = t.defaultValue), i != null)) {
        if (t != null) throw Error(o(92));
        if (Tt(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        t = i;
      }
      (t == null && (t = ""), (i = t));
    }
    e._wrapperState = { initialValue: xe(i) };
  }
  function Xt(e, t) {
    var i = xe(t.value),
      l = xe(t.defaultValue);
    (i != null &&
      ((i = "" + i),
      i !== e.value && (e.value = i),
      t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      l != null && (e.defaultValue = "" + l));
  }
  function Di(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Zt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Eo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Zt(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Dn,
    Mi = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, i, l, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, i, l, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Dn = Dn || document.createElement("div"),
            Dn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Dn.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function V(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ee = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    We = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function (e) {
    We.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ee[t] = ee[e]));
    });
  });
  function Ye(e, t, i) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : i || typeof t != "number" || t === 0 || (ee.hasOwnProperty(e) && ee[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Jt(e, t) {
    e = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var l = i.indexOf("--") === 0,
          u = Ye(i, t[i], l);
        (i === "float" && (i = "cssFloat"),
          l ? e.setProperty(i, u) : (e[i] = u));
      }
  }
  var Ll = X(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function bo(e, t) {
    if (t) {
      if (Ll[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function ko(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Po = null;
  function jr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var _r = null,
    dn = null,
    fn = null;
  function Ai(e) {
    if ((e = qo(e))) {
      if (typeof _r != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = os(t)), _r(e.stateNode, e.type, t));
    }
  }
  function Zc(e) {
    dn ? (fn ? fn.push(e) : (fn = [e])) : (dn = e);
  }
  function Jc() {
    if (dn) {
      var e = dn,
        t = fn;
      if (((fn = dn = null), Ai(e), t)) for (e = 0; e < t.length; e++) Ai(t[e]);
    }
  }
  function ed(e, t) {
    return e(t);
  }
  function td() {}
  var Fl = !1;
  function nd(e, t, i) {
    if (Fl) return e(t, i);
    Fl = !0;
    try {
      return ed(e, t, i);
    } finally {
      ((Fl = !1), (dn !== null || fn !== null) && (td(), Jc()));
    }
  }
  function Ro(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var l = os(i);
    if (l === null) return null;
    i = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(o(231, t, typeof i));
    return i;
  }
  var zl = !1;
  if (p)
    try {
      var Oo = {};
      (Object.defineProperty(Oo, "passive", {
        get: function () {
          zl = !0;
        },
      }),
        window.addEventListener("test", Oo, Oo),
        window.removeEventListener("test", Oo, Oo));
    } catch {
      zl = !1;
    }
  function ty(e, t, i, l, u, d, v, b, O) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, L);
    } catch (K) {
      this.onError(K);
    }
  }
  var To = !1,
    Ii = null,
    Li = !1,
    $l = null,
    ny = {
      onError: function (e) {
        ((To = !0), (Ii = e));
      },
    };
  function ry(e, t, i, l, u, d, v, b, O) {
    ((To = !1), (Ii = null), ty.apply(ny, arguments));
  }
  function oy(e, t, i, l, u, d, v, b, O) {
    if ((ry.apply(this, arguments), To)) {
      if (To) {
        var L = Ii;
        ((To = !1), (Ii = null));
      } else throw Error(o(198));
      Li || ((Li = !0), ($l = L));
    }
  }
  function ur(e) {
    var t = e,
      i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (i = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function rd(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function od(e) {
    if (ur(e) !== e) throw Error(o(188));
  }
  function iy(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ur(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var i = e, l = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (((l = u.return), l !== null)) {
          i = l;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === i) return (od(u), e);
          if (d === l) return (od(u), t);
          d = d.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== l.return) ((i = u), (l = d));
      else {
        for (var v = !1, b = u.child; b; ) {
          if (b === i) {
            ((v = !0), (i = u), (l = d));
            break;
          }
          if (b === l) {
            ((v = !0), (l = u), (i = d));
            break;
          }
          b = b.sibling;
        }
        if (!v) {
          for (b = d.child; b; ) {
            if (b === i) {
              ((v = !0), (i = d), (l = u));
              break;
            }
            if (b === l) {
              ((v = !0), (l = d), (i = u));
              break;
            }
            b = b.sibling;
          }
          if (!v) throw Error(o(189));
        }
      }
      if (i.alternate !== l) throw Error(o(190));
    }
    if (i.tag !== 3) throw Error(o(188));
    return i.stateNode.current === i ? e : t;
  }
  function id(e) {
    return ((e = iy(e)), e !== null ? sd(e) : null);
  }
  function sd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = sd(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ld = r.unstable_scheduleCallback,
    ad = r.unstable_cancelCallback,
    sy = r.unstable_shouldYield,
    ly = r.unstable_requestPaint,
    ze = r.unstable_now,
    ay = r.unstable_getCurrentPriorityLevel,
    Ul = r.unstable_ImmediatePriority,
    ud = r.unstable_UserBlockingPriority,
    Fi = r.unstable_NormalPriority,
    uy = r.unstable_LowPriority,
    cd = r.unstable_IdlePriority,
    zi = null,
    en = null;
  function cy(e) {
    if (en && typeof en.onCommitFiberRoot == "function")
      try {
        en.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var zt = Math.clz32 ? Math.clz32 : py,
    dy = Math.log,
    fy = Math.LN2;
  function py(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((dy(e) / fy) | 0)) | 0);
  }
  var $i = 64,
    Ui = 4194304;
  function No(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Vi(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      d = e.pingedLanes,
      v = i & 268435455;
    if (v !== 0) {
      var b = v & ~u;
      b !== 0 ? (l = No(b)) : ((d &= v), d !== 0 && (l = No(d)));
    } else ((v = i & ~u), v !== 0 ? (l = No(v)) : d !== 0 && (l = No(d)));
    if (l === 0) return 0;
    if (
      t !== 0 &&
      t !== l &&
      (t & u) === 0 &&
      ((u = l & -l), (d = t & -t), u >= d || (u === 16 && (d & 4194240) !== 0))
    )
      return t;
    if (((l & 4) !== 0 && (l |= i & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= l; 0 < t; )
        ((i = 31 - zt(t)), (u = 1 << i), (l |= e[i]), (t &= ~u));
    return l;
  }
  function hy(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function my(e, t) {
    for (
      var i = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        d = e.pendingLanes;
      0 < d;
    ) {
      var v = 31 - zt(d),
        b = 1 << v,
        O = u[v];
      (O === -1
        ? ((b & i) === 0 || (b & l) !== 0) && (u[v] = hy(b, t))
        : O <= t && (e.expiredLanes |= b),
        (d &= ~b));
    }
  }
  function Vl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function dd() {
    var e = $i;
    return (($i <<= 1), ($i & 4194240) === 0 && ($i = 64), e);
  }
  function Hl(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function jo(e, t, i) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - zt(t)),
      (e[t] = i));
  }
  function vy(e, t) {
    var i = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var u = 31 - zt(i),
        d = 1 << u;
      ((t[u] = 0), (l[u] = -1), (e[u] = -1), (i &= ~d));
    }
  }
  function Wl(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var l = 31 - zt(i),
        u = 1 << l;
      ((u & t) | (e[l] & t) && (e[l] |= t), (i &= ~u));
    }
  }
  var Pe = 0;
  function fd(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var pd,
    Bl,
    hd,
    md,
    vd,
    Ql = !1,
    Hi = [],
    Mn = null,
    An = null,
    In = null,
    _o = new Map(),
    Do = new Map(),
    Ln = [],
    gy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function gd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Mn = null;
        break;
      case "dragenter":
      case "dragleave":
        An = null;
        break;
      case "mouseover":
      case "mouseout":
        In = null;
        break;
      case "pointerover":
      case "pointerout":
        _o.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Do.delete(t.pointerId);
    }
  }
  function Mo(e, t, i, l, u, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: l,
          nativeEvent: d,
          targetContainers: [u],
        }),
        t !== null && ((t = qo(t)), t !== null && Bl(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function yy(e, t, i, l, u) {
    switch (t) {
      case "focusin":
        return ((Mn = Mo(Mn, e, t, i, l, u)), !0);
      case "dragenter":
        return ((An = Mo(An, e, t, i, l, u)), !0);
      case "mouseover":
        return ((In = Mo(In, e, t, i, l, u)), !0);
      case "pointerover":
        var d = u.pointerId;
        return (_o.set(d, Mo(_o.get(d) || null, e, t, i, l, u)), !0);
      case "gotpointercapture":
        return (
          (d = u.pointerId),
          Do.set(d, Mo(Do.get(d) || null, e, t, i, l, u)),
          !0
        );
    }
    return !1;
  }
  function yd(e) {
    var t = cr(e.target);
    if (t !== null) {
      var i = ur(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = rd(i)), t !== null)) {
            ((e.blockedOn = t),
              vd(e.priority, function () {
                hd(i);
              }));
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Wi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var l = new i.constructor(i.type, i);
        ((Po = l), i.target.dispatchEvent(l), (Po = null));
      } else return ((t = qo(i)), t !== null && Bl(t), (e.blockedOn = i), !1);
      t.shift();
    }
    return !0;
  }
  function wd(e, t, i) {
    Wi(e) && i.delete(t);
  }
  function wy() {
    ((Ql = !1),
      Mn !== null && Wi(Mn) && (Mn = null),
      An !== null && Wi(An) && (An = null),
      In !== null && Wi(In) && (In = null),
      _o.forEach(wd),
      Do.forEach(wd));
  }
  function Ao(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ql ||
        ((Ql = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, wy)));
  }
  function Io(e) {
    function t(u) {
      return Ao(u, e);
    }
    if (0 < Hi.length) {
      Ao(Hi[0], e);
      for (var i = 1; i < Hi.length; i++) {
        var l = Hi[i];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      Mn !== null && Ao(Mn, e),
        An !== null && Ao(An, e),
        In !== null && Ao(In, e),
        _o.forEach(t),
        Do.forEach(t),
        i = 0;
      i < Ln.length;
      i++
    )
      ((l = Ln[i]), l.blockedOn === e && (l.blockedOn = null));
    for (; 0 < Ln.length && ((i = Ln[0]), i.blockedOn === null); )
      (yd(i), i.blockedOn === null && Ln.shift());
  }
  var Dr = _.ReactCurrentBatchConfig,
    Bi = !0;
  function xy(e, t, i, l) {
    var u = Pe,
      d = Dr.transition;
    Dr.transition = null;
    try {
      ((Pe = 1), Kl(e, t, i, l));
    } finally {
      ((Pe = u), (Dr.transition = d));
    }
  }
  function Sy(e, t, i, l) {
    var u = Pe,
      d = Dr.transition;
    Dr.transition = null;
    try {
      ((Pe = 4), Kl(e, t, i, l));
    } finally {
      ((Pe = u), (Dr.transition = d));
    }
  }
  function Kl(e, t, i, l) {
    if (Bi) {
      var u = ql(e, t, i, l);
      if (u === null) (da(e, t, l, Qi, i), gd(e, l));
      else if (yy(u, e, t, i, l)) l.stopPropagation();
      else if ((gd(e, l), t & 4 && -1 < gy.indexOf(e))) {
        for (; u !== null; ) {
          var d = qo(u);
          if (
            (d !== null && pd(d),
            (d = ql(e, t, i, l)),
            d === null && da(e, t, l, Qi, i),
            d === u)
          )
            break;
          u = d;
        }
        u !== null && l.stopPropagation();
      } else da(e, t, l, null, i);
    }
  }
  var Qi = null;
  function ql(e, t, i, l) {
    if (((Qi = null), (e = jr(l)), (e = cr(e)), e !== null))
      if (((t = ur(e)), t === null)) e = null;
      else if (((i = t.tag), i === 13)) {
        if (((e = rd(t)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Qi = e), null);
  }
  function xd(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ay()) {
          case Ul:
            return 1;
          case ud:
            return 4;
          case Fi:
          case uy:
            return 16;
          case cd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Fn = null,
    Gl = null,
    Ki = null;
  function Sd() {
    if (Ki) return Ki;
    var e,
      t = Gl,
      i = t.length,
      l,
      u = "value" in Fn ? Fn.value : Fn.textContent,
      d = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++);
    var v = i - e;
    for (l = 1; l <= v && t[i - l] === u[d - l]; l++);
    return (Ki = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function qi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Gi() {
    return !0;
  }
  function Cd() {
    return !1;
  }
  function St(e) {
    function t(i, l, u, d, v) {
      ((this._reactName = i),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = d),
        (this.target = v),
        (this.currentTarget = null));
      for (var b in e)
        e.hasOwnProperty(b) && ((i = e[b]), (this[b] = i ? i(d) : d[b]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Gi
          : Cd),
        (this.isPropagationStopped = Cd),
        this
      );
    }
    return (
      X(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Gi));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Gi));
        },
        persist: function () {},
        isPersistent: Gi,
      }),
      t
    );
  }
  var Mr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yl = St(Mr),
    Lo = X({}, Mr, { view: 0, detail: 0 }),
    Cy = St(Lo),
    Xl,
    Zl,
    Fo,
    Yi = X({}, Lo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ea,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Fo &&
              (Fo && e.type === "mousemove"
                ? ((Xl = e.screenX - Fo.screenX), (Zl = e.screenY - Fo.screenY))
                : (Zl = Xl = 0),
              (Fo = e)),
            Xl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Zl;
      },
    }),
    Ed = St(Yi),
    Ey = X({}, Yi, { dataTransfer: 0 }),
    by = St(Ey),
    ky = X({}, Lo, { relatedTarget: 0 }),
    Jl = St(ky),
    Py = X({}, Mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ry = St(Py),
    Oy = X({}, Mr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ty = St(Oy),
    Ny = X({}, Mr, { data: 0 }),
    bd = St(Ny),
    jy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    _y = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Dy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function My(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Dy[e])
        ? !!t[e]
        : !1;
  }
  function ea() {
    return My;
  }
  var Ay = X({}, Lo, {
      key: function (e) {
        if (e.key) {
          var t = jy[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? _y[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ea,
      charCode: function (e) {
        return e.type === "keypress" ? qi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Iy = St(Ay),
    Ly = X({}, Yi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    kd = St(Ly),
    Fy = X({}, Lo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ea,
    }),
    zy = St(Fy),
    $y = X({}, Mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uy = St($y),
    Vy = X({}, Yi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Hy = St(Vy),
    Wy = [9, 13, 27, 32],
    ta = p && "CompositionEvent" in window,
    zo = null;
  p && "documentMode" in document && (zo = document.documentMode);
  var By = p && "TextEvent" in window && !zo,
    Pd = p && (!ta || (zo && 8 < zo && 11 >= zo)),
    Rd = " ",
    Od = !1;
  function Td(e, t) {
    switch (e) {
      case "keyup":
        return Wy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Nd(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Ar = !1;
  function Qy(e, t) {
    switch (e) {
      case "compositionend":
        return Nd(t);
      case "keypress":
        return t.which !== 32 ? null : ((Od = !0), Rd);
      case "textInput":
        return ((e = t.data), e === Rd && Od ? null : e);
      default:
        return null;
    }
  }
  function Ky(e, t) {
    if (Ar)
      return e === "compositionend" || (!ta && Td(e, t))
        ? ((e = Sd()), (Ki = Gl = Fn = null), (Ar = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Pd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var qy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function jd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!qy[e.type] : t === "textarea";
  }
  function _d(e, t, i, l) {
    (Zc(l),
      (t = ts(t, "onChange")),
      0 < t.length &&
        ((i = new Yl("onChange", "change", null, i, l)),
        e.push({ event: i, listeners: t })));
  }
  var $o = null,
    Uo = null;
  function Gy(e) {
    Yd(e, 0);
  }
  function Xi(e) {
    var t = $r(e);
    if (Ft(t)) return e;
  }
  function Yy(e, t) {
    if (e === "change") return t;
  }
  var Dd = !1;
  if (p) {
    var na;
    if (p) {
      var ra = "oninput" in document;
      if (!ra) {
        var Md = document.createElement("div");
        (Md.setAttribute("oninput", "return;"),
          (ra = typeof Md.oninput == "function"));
      }
      na = ra;
    } else na = !1;
    Dd = na && (!document.documentMode || 9 < document.documentMode);
  }
  function Ad() {
    $o && ($o.detachEvent("onpropertychange", Id), (Uo = $o = null));
  }
  function Id(e) {
    if (e.propertyName === "value" && Xi(Uo)) {
      var t = [];
      (_d(t, Uo, e, jr(e)), nd(Gy, t));
    }
  }
  function Xy(e, t, i) {
    e === "focusin"
      ? (Ad(), ($o = t), (Uo = i), $o.attachEvent("onpropertychange", Id))
      : e === "focusout" && Ad();
  }
  function Zy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xi(Uo);
  }
  function Jy(e, t) {
    if (e === "click") return Xi(t);
  }
  function ew(e, t) {
    if (e === "input" || e === "change") return Xi(t);
  }
  function tw(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var $t = typeof Object.is == "function" ? Object.is : tw;
  function Vo(e, t) {
    if ($t(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var i = Object.keys(e),
      l = Object.keys(t);
    if (i.length !== l.length) return !1;
    for (l = 0; l < i.length; l++) {
      var u = i[l];
      if (!m.call(t, u) || !$t(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Ld(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fd(e, t) {
    var i = Ld(e);
    e = 0;
    for (var l; i; ) {
      if (i.nodeType === 3) {
        if (((l = e + i.textContent.length), e <= t && l >= t))
          return { node: i, offset: t - e };
        e = l;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Ld(i);
    }
  }
  function zd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? zd(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function $d() {
    for (var e = window, t = cn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = cn(e.document);
    }
    return t;
  }
  function oa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function nw(e) {
    var t = $d(),
      i = e.focusedElem,
      l = e.selectionRange;
    if (
      t !== i &&
      i &&
      i.ownerDocument &&
      zd(i.ownerDocument.documentElement, i)
    ) {
      if (l !== null && oa(i)) {
        if (
          ((t = l.start),
          (e = l.end),
          e === void 0 && (e = t),
          "selectionStart" in i)
        )
          ((i.selectionStart = t),
            (i.selectionEnd = Math.min(e, i.value.length)));
        else if (
          ((e = ((t = i.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = i.textContent.length,
            d = Math.min(l.start, u);
          ((l = l.end === void 0 ? d : Math.min(l.end, u)),
            !e.extend && d > l && ((u = l), (l = d), (d = u)),
            (u = Fd(i, d)));
          var v = Fd(i, l);
          u &&
            v &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== v.node ||
              e.focusOffset !== v.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            d > l
              ? (e.addRange(t), e.extend(v.node, v.offset))
              : (t.setEnd(v.node, v.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)
        ((e = t[i]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var rw = p && "documentMode" in document && 11 >= document.documentMode,
    Ir = null,
    ia = null,
    Ho = null,
    sa = !1;
  function Ud(e, t, i) {
    var l =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    sa ||
      Ir == null ||
      Ir !== cn(l) ||
      ((l = Ir),
      "selectionStart" in l && oa(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ho && Vo(Ho, l)) ||
        ((Ho = l),
        (l = ts(ia, "onSelect")),
        0 < l.length &&
          ((t = new Yl("onSelect", "select", null, t, i)),
          e.push({ event: t, listeners: l }),
          (t.target = Ir))));
  }
  function Zi(e, t) {
    var i = {};
    return (
      (i[e.toLowerCase()] = t.toLowerCase()),
      (i["Webkit" + e] = "webkit" + t),
      (i["Moz" + e] = "moz" + t),
      i
    );
  }
  var Lr = {
      animationend: Zi("Animation", "AnimationEnd"),
      animationiteration: Zi("Animation", "AnimationIteration"),
      animationstart: Zi("Animation", "AnimationStart"),
      transitionend: Zi("Transition", "TransitionEnd"),
    },
    la = {},
    Vd = {};
  p &&
    ((Vd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Lr.animationend.animation,
      delete Lr.animationiteration.animation,
      delete Lr.animationstart.animation),
    "TransitionEvent" in window || delete Lr.transitionend.transition);
  function Ji(e) {
    if (la[e]) return la[e];
    if (!Lr[e]) return e;
    var t = Lr[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in Vd) return (la[e] = t[i]);
    return e;
  }
  var Hd = Ji("animationend"),
    Wd = Ji("animationiteration"),
    Bd = Ji("animationstart"),
    Qd = Ji("transitionend"),
    Kd = new Map(),
    qd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function zn(e, t) {
    (Kd.set(e, t), c(t, [e]));
  }
  for (var aa = 0; aa < qd.length; aa++) {
    var ua = qd[aa],
      ow = ua.toLowerCase(),
      iw = ua[0].toUpperCase() + ua.slice(1);
    zn(ow, "on" + iw);
  }
  (zn(Hd, "onAnimationEnd"),
    zn(Wd, "onAnimationIteration"),
    zn(Bd, "onAnimationStart"),
    zn("dblclick", "onDoubleClick"),
    zn("focusin", "onFocus"),
    zn("focusout", "onBlur"),
    zn(Qd, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    c(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Wo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    sw = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Wo),
    );
  function Gd(e, t, i) {
    var l = e.type || "unknown-event";
    ((e.currentTarget = i), oy(l, t, void 0, e), (e.currentTarget = null));
  }
  function Yd(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var l = e[i],
        u = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var v = l.length - 1; 0 <= v; v--) {
            var b = l[v],
              O = b.instance,
              L = b.currentTarget;
            if (((b = b.listener), O !== d && u.isPropagationStopped()))
              break e;
            (Gd(u, b, L), (d = O));
          }
        else
          for (v = 0; v < l.length; v++) {
            if (
              ((b = l[v]),
              (O = b.instance),
              (L = b.currentTarget),
              (b = b.listener),
              O !== d && u.isPropagationStopped())
            )
              break e;
            (Gd(u, b, L), (d = O));
          }
      }
    }
    if (Li) throw ((e = $l), (Li = !1), ($l = null), e);
  }
  function je(e, t) {
    var i = t[ga];
    i === void 0 && (i = t[ga] = new Set());
    var l = e + "__bubble";
    i.has(l) || (Xd(t, e, 2, !1), i.add(l));
  }
  function ca(e, t, i) {
    var l = 0;
    (t && (l |= 4), Xd(i, e, l, t));
  }
  var es = "_reactListening" + Math.random().toString(36).slice(2);
  function Bo(e) {
    if (!e[es]) {
      ((e[es] = !0),
        s.forEach(function (i) {
          i !== "selectionchange" && (sw.has(i) || ca(i, !1, e), ca(i, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[es] || ((t[es] = !0), ca("selectionchange", !1, t));
    }
  }
  function Xd(e, t, i, l) {
    switch (xd(t)) {
      case 1:
        var u = xy;
        break;
      case 4:
        u = Sy;
        break;
      default:
        u = Kl;
    }
    ((i = u.bind(null, t, i, e)),
      (u = void 0),
      !zl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: u })
          : e.addEventListener(t, i, !0)
        : u !== void 0
          ? e.addEventListener(t, i, { passive: u })
          : e.addEventListener(t, i, !1));
  }
  function da(e, t, i, l, u) {
    var d = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var b = l.stateNode.containerInfo;
          if (b === u || (b.nodeType === 8 && b.parentNode === u)) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var O = v.tag;
              if (
                (O === 3 || O === 4) &&
                ((O = v.stateNode.containerInfo),
                O === u || (O.nodeType === 8 && O.parentNode === u))
              )
                return;
              v = v.return;
            }
          for (; b !== null; ) {
            if (((v = cr(b)), v === null)) return;
            if (((O = v.tag), O === 5 || O === 6)) {
              l = d = v;
              continue e;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    nd(function () {
      var L = d,
        K = jr(i),
        q = [];
      e: {
        var B = Kd.get(e);
        if (B !== void 0) {
          var re = Yl,
            se = e;
          switch (e) {
            case "keypress":
              if (qi(i) === 0) break e;
            case "keydown":
            case "keyup":
              re = Iy;
              break;
            case "focusin":
              ((se = "focus"), (re = Jl));
              break;
            case "focusout":
              ((se = "blur"), (re = Jl));
              break;
            case "beforeblur":
            case "afterblur":
              re = Jl;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              re = Ed;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              re = by;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              re = zy;
              break;
            case Hd:
            case Wd:
            case Bd:
              re = Ry;
              break;
            case Qd:
              re = Uy;
              break;
            case "scroll":
              re = Cy;
              break;
            case "wheel":
              re = Hy;
              break;
            case "copy":
            case "cut":
            case "paste":
              re = Ty;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              re = kd;
          }
          var ae = (t & 4) !== 0,
            $e = !ae && e === "scroll",
            M = ae ? (B !== null ? B + "Capture" : null) : B;
          ae = [];
          for (var j = L, A; j !== null; ) {
            A = j;
            var Z = A.stateNode;
            if (
              (A.tag === 5 &&
                Z !== null &&
                ((A = Z),
                M !== null &&
                  ((Z = Ro(j, M)), Z != null && ae.push(Qo(j, Z, A)))),
              $e)
            )
              break;
            j = j.return;
          }
          0 < ae.length &&
            ((B = new re(B, se, null, i, K)),
            q.push({ event: B, listeners: ae }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((B = e === "mouseover" || e === "pointerover"),
            (re = e === "mouseout" || e === "pointerout"),
            B &&
              i !== Po &&
              (se = i.relatedTarget || i.fromElement) &&
              (cr(se) || se[pn]))
          )
            break e;
          if (
            (re || B) &&
            ((B =
              K.window === K
                ? K
                : (B = K.ownerDocument)
                  ? B.defaultView || B.parentWindow
                  : window),
            re
              ? ((se = i.relatedTarget || i.toElement),
                (re = L),
                (se = se ? cr(se) : null),
                se !== null &&
                  (($e = ur(se)),
                  se !== $e || (se.tag !== 5 && se.tag !== 6)) &&
                  (se = null))
              : ((re = null), (se = L)),
            re !== se)
          ) {
            if (
              ((ae = Ed),
              (Z = "onMouseLeave"),
              (M = "onMouseEnter"),
              (j = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ae = kd),
                (Z = "onPointerLeave"),
                (M = "onPointerEnter"),
                (j = "pointer")),
              ($e = re == null ? B : $r(re)),
              (A = se == null ? B : $r(se)),
              (B = new ae(Z, j + "leave", re, i, K)),
              (B.target = $e),
              (B.relatedTarget = A),
              (Z = null),
              cr(K) === L &&
                ((ae = new ae(M, j + "enter", se, i, K)),
                (ae.target = A),
                (ae.relatedTarget = $e),
                (Z = ae)),
              ($e = Z),
              re && se)
            )
              t: {
                for (ae = re, M = se, j = 0, A = ae; A; A = Fr(A)) j++;
                for (A = 0, Z = M; Z; Z = Fr(Z)) A++;
                for (; 0 < j - A; ) ((ae = Fr(ae)), j--);
                for (; 0 < A - j; ) ((M = Fr(M)), A--);
                for (; j--; ) {
                  if (ae === M || (M !== null && ae === M.alternate)) break t;
                  ((ae = Fr(ae)), (M = Fr(M)));
                }
                ae = null;
              }
            else ae = null;
            (re !== null && Zd(q, B, re, ae, !1),
              se !== null && $e !== null && Zd(q, $e, se, ae, !0));
          }
        }
        e: {
          if (
            ((B = L ? $r(L) : window),
            (re = B.nodeName && B.nodeName.toLowerCase()),
            re === "select" || (re === "input" && B.type === "file"))
          )
            var ue = Yy;
          else if (jd(B))
            if (Dd) ue = ew;
            else {
              ue = Zy;
              var fe = Xy;
            }
          else
            (re = B.nodeName) &&
              re.toLowerCase() === "input" &&
              (B.type === "checkbox" || B.type === "radio") &&
              (ue = Jy);
          if (ue && (ue = ue(e, L))) {
            _d(q, ue, i, K);
            break e;
          }
          (fe && fe(e, B, L),
            e === "focusout" &&
              (fe = B._wrapperState) &&
              fe.controlled &&
              B.type === "number" &&
              Nr(B, "number", B.value));
        }
        switch (((fe = L ? $r(L) : window), e)) {
          case "focusin":
            (jd(fe) || fe.contentEditable === "true") &&
              ((Ir = fe), (ia = L), (Ho = null));
            break;
          case "focusout":
            Ho = ia = Ir = null;
            break;
          case "mousedown":
            sa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((sa = !1), Ud(q, i, K));
            break;
          case "selectionchange":
            if (rw) break;
          case "keydown":
          case "keyup":
            Ud(q, i, K);
        }
        var pe;
        if (ta)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          Ar
            ? Td(e, i) && (me = "onCompositionEnd")
            : e === "keydown" &&
              i.keyCode === 229 &&
              (me = "onCompositionStart");
        (me &&
          (Pd &&
            i.locale !== "ko" &&
            (Ar || me !== "onCompositionStart"
              ? me === "onCompositionEnd" && Ar && (pe = Sd())
              : ((Fn = K),
                (Gl = "value" in Fn ? Fn.value : Fn.textContent),
                (Ar = !0))),
          (fe = ts(L, me)),
          0 < fe.length &&
            ((me = new bd(me, e, null, i, K)),
            q.push({ event: me, listeners: fe }),
            pe
              ? (me.data = pe)
              : ((pe = Nd(i)), pe !== null && (me.data = pe)))),
          (pe = By ? Qy(e, i) : Ky(e, i)) &&
            ((L = ts(L, "onBeforeInput")),
            0 < L.length &&
              ((K = new bd("onBeforeInput", "beforeinput", null, i, K)),
              q.push({ event: K, listeners: L }),
              (K.data = pe))));
      }
      Yd(q, t);
    });
  }
  function Qo(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function ts(e, t) {
    for (var i = t + "Capture", l = []; e !== null; ) {
      var u = e,
        d = u.stateNode;
      (u.tag === 5 &&
        d !== null &&
        ((u = d),
        (d = Ro(e, i)),
        d != null && l.unshift(Qo(e, d, u)),
        (d = Ro(e, t)),
        d != null && l.push(Qo(e, d, u))),
        (e = e.return));
    }
    return l;
  }
  function Fr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Zd(e, t, i, l, u) {
    for (var d = t._reactName, v = []; i !== null && i !== l; ) {
      var b = i,
        O = b.alternate,
        L = b.stateNode;
      if (O !== null && O === l) break;
      (b.tag === 5 &&
        L !== null &&
        ((b = L),
        u
          ? ((O = Ro(i, d)), O != null && v.unshift(Qo(i, O, b)))
          : u || ((O = Ro(i, d)), O != null && v.push(Qo(i, O, b)))),
        (i = i.return));
    }
    v.length !== 0 && e.push({ event: t, listeners: v });
  }
  var lw = /\r\n?/g,
    aw = /\u0000|\uFFFD/g;
  function Jd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        lw,
        `
`,
      )
      .replace(aw, "");
  }
  function ns(e, t, i) {
    if (((t = Jd(t)), Jd(e) !== t && i)) throw Error(o(425));
  }
  function rs() {}
  var fa = null,
    pa = null;
  function ha(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ma = typeof setTimeout == "function" ? setTimeout : void 0,
    uw = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ef = typeof Promise == "function" ? Promise : void 0,
    cw =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ef < "u"
          ? function (e) {
              return ef.resolve(null).then(e).catch(dw);
            }
          : ma;
  function dw(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function va(e, t) {
    var i = t,
      l = 0;
    do {
      var u = i.nextSibling;
      if ((e.removeChild(i), u && u.nodeType === 8))
        if (((i = u.data), i === "/$")) {
          if (l === 0) {
            (e.removeChild(u), Io(t));
            return;
          }
          l--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || l++;
      i = u;
    } while (i);
    Io(t);
  }
  function $n(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function tf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return e;
          t--;
        } else i === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var zr = Math.random().toString(36).slice(2),
    tn = "__reactFiber$" + zr,
    Ko = "__reactProps$" + zr,
    pn = "__reactContainer$" + zr,
    ga = "__reactEvents$" + zr,
    fw = "__reactListeners$" + zr,
    pw = "__reactHandles$" + zr;
  function cr(e) {
    var t = e[tn];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[pn] || i[tn])) {
        if (
          ((i = t.alternate),
          t.child !== null || (i !== null && i.child !== null))
        )
          for (e = tf(e); e !== null; ) {
            if ((i = e[tn])) return i;
            e = tf(e);
          }
        return t;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function qo(e) {
    return (
      (e = e[tn] || e[pn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function $r(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function os(e) {
    return e[Ko] || null;
  }
  var ya = [],
    Ur = -1;
  function Un(e) {
    return { current: e };
  }
  function _e(e) {
    0 > Ur || ((e.current = ya[Ur]), (ya[Ur] = null), Ur--);
  }
  function Te(e, t) {
    (Ur++, (ya[Ur] = e.current), (e.current = t));
  }
  var Vn = {},
    ot = Un(Vn),
    pt = Un(!1),
    dr = Vn;
  function Vr(e, t) {
    var i = e.type.contextTypes;
    if (!i) return Vn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      d;
    for (d in i) u[d] = t[d];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function ht(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function is() {
    (_e(pt), _e(ot));
  }
  function nf(e, t, i) {
    if (ot.current !== Vn) throw Error(o(168));
    (Te(ot, t), Te(pt, i));
  }
  function rf(e, t, i) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != "function"))
      return i;
    l = l.getChildContext();
    for (var u in l) if (!(u in t)) throw Error(o(108, ke(e) || "Unknown", u));
    return X({}, i, l);
  }
  function ss(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Vn),
      (dr = ot.current),
      Te(ot, e),
      Te(pt, pt.current),
      !0
    );
  }
  function of(e, t, i) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    (i
      ? ((e = rf(e, t, dr)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        _e(pt),
        _e(ot),
        Te(ot, e))
      : _e(pt),
      Te(pt, i));
  }
  var hn = null,
    ls = !1,
    wa = !1;
  function sf(e) {
    hn === null ? (hn = [e]) : hn.push(e);
  }
  function hw(e) {
    ((ls = !0), sf(e));
  }
  function Hn() {
    if (!wa && hn !== null) {
      wa = !0;
      var e = 0,
        t = Pe;
      try {
        var i = hn;
        for (Pe = 1; e < i.length; e++) {
          var l = i[e];
          do l = l(!0);
          while (l !== null);
        }
        ((hn = null), (ls = !1));
      } catch (u) {
        throw (hn !== null && (hn = hn.slice(e + 1)), ld(Ul, Hn), u);
      } finally {
        ((Pe = t), (wa = !1));
      }
    }
    return null;
  }
  var Hr = [],
    Wr = 0,
    as = null,
    us = 0,
    jt = [],
    _t = 0,
    fr = null,
    mn = 1,
    vn = "";
  function pr(e, t) {
    ((Hr[Wr++] = us), (Hr[Wr++] = as), (as = e), (us = t));
  }
  function lf(e, t, i) {
    ((jt[_t++] = mn), (jt[_t++] = vn), (jt[_t++] = fr), (fr = e));
    var l = mn;
    e = vn;
    var u = 32 - zt(l) - 1;
    ((l &= ~(1 << u)), (i += 1));
    var d = 32 - zt(t) + u;
    if (30 < d) {
      var v = u - (u % 5);
      ((d = (l & ((1 << v) - 1)).toString(32)),
        (l >>= v),
        (u -= v),
        (mn = (1 << (32 - zt(t) + u)) | (i << u) | l),
        (vn = d + e));
    } else ((mn = (1 << d) | (i << u) | l), (vn = e));
  }
  function xa(e) {
    e.return !== null && (pr(e, 1), lf(e, 1, 0));
  }
  function Sa(e) {
    for (; e === as; )
      ((as = Hr[--Wr]), (Hr[Wr] = null), (us = Hr[--Wr]), (Hr[Wr] = null));
    for (; e === fr; )
      ((fr = jt[--_t]),
        (jt[_t] = null),
        (vn = jt[--_t]),
        (jt[_t] = null),
        (mn = jt[--_t]),
        (jt[_t] = null));
  }
  var Ct = null,
    Et = null,
    Me = !1,
    Ut = null;
  function af(e, t) {
    var i = It(5, null, null, 0);
    ((i.elementType = "DELETED"),
      (i.stateNode = t),
      (i.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i));
  }
  function uf(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (t =
            t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ct = e), (Et = $n(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ct = e), (Et = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((i = fr !== null ? { id: mn, overflow: vn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: i,
                retryLane: 1073741824,
              }),
              (i = It(18, null, null, 0)),
              (i.stateNode = t),
              (i.return = e),
              (e.child = i),
              (Ct = e),
              (Et = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ca(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ea(e) {
    if (Me) {
      var t = Et;
      if (t) {
        var i = t;
        if (!uf(e, t)) {
          if (Ca(e)) throw Error(o(418));
          t = $n(i.nextSibling);
          var l = Ct;
          t && uf(e, t)
            ? af(l, i)
            : ((e.flags = (e.flags & -4097) | 2), (Me = !1), (Ct = e));
        }
      } else {
        if (Ca(e)) throw Error(o(418));
        ((e.flags = (e.flags & -4097) | 2), (Me = !1), (Ct = e));
      }
    }
  }
  function cf(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    Ct = e;
  }
  function cs(e) {
    if (e !== Ct) return !1;
    if (!Me) return (cf(e), (Me = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ha(e.type, e.memoizedProps))),
      t && (t = Et))
    ) {
      if (Ca(e)) throw (df(), Error(o(418)));
      for (; t; ) (af(e, t), (t = $n(t.nextSibling)));
    }
    if ((cf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                Et = $n(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Et = null;
      }
    } else Et = Ct ? $n(e.stateNode.nextSibling) : null;
    return !0;
  }
  function df() {
    for (var e = Et; e; ) e = $n(e.nextSibling);
  }
  function Br() {
    ((Et = Ct = null), (Me = !1));
  }
  function ba(e) {
    Ut === null ? (Ut = [e]) : Ut.push(e);
  }
  var mw = _.ReactCurrentBatchConfig;
  function Go(e, t, i) {
    if (
      ((e = i.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(o(309));
          var l = i.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var u = l,
          d = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === d
          ? t.ref
          : ((t = function (v) {
              var b = u.refs;
              v === null ? delete b[d] : (b[d] = v);
            }),
            (t._stringRef = d),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!i._owner) throw Error(o(290, e));
    }
    return e;
  }
  function ds(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function ff(e) {
    var t = e._init;
    return t(e._payload);
  }
  function pf(e) {
    function t(M, j) {
      if (e) {
        var A = M.deletions;
        A === null ? ((M.deletions = [j]), (M.flags |= 16)) : A.push(j);
      }
    }
    function i(M, j) {
      if (!e) return null;
      for (; j !== null; ) (t(M, j), (j = j.sibling));
      return null;
    }
    function l(M, j) {
      for (M = new Map(); j !== null; )
        (j.key !== null ? M.set(j.key, j) : M.set(j.index, j), (j = j.sibling));
      return M;
    }
    function u(M, j) {
      return ((M = Xn(M, j)), (M.index = 0), (M.sibling = null), M);
    }
    function d(M, j, A) {
      return (
        (M.index = A),
        e
          ? ((A = M.alternate),
            A !== null
              ? ((A = A.index), A < j ? ((M.flags |= 2), j) : A)
              : ((M.flags |= 2), j))
          : ((M.flags |= 1048576), j)
      );
    }
    function v(M) {
      return (e && M.alternate === null && (M.flags |= 2), M);
    }
    function b(M, j, A, Z) {
      return j === null || j.tag !== 6
        ? ((j = mu(A, M.mode, Z)), (j.return = M), j)
        : ((j = u(j, A)), (j.return = M), j);
    }
    function O(M, j, A, Z) {
      var ue = A.type;
      return ue === $
        ? K(M, j, A.props.children, Z, A.key)
        : j !== null &&
            (j.elementType === ue ||
              (typeof ue == "object" &&
                ue !== null &&
                ue.$$typeof === Q &&
                ff(ue) === j.type))
          ? ((Z = u(j, A.props)), (Z.ref = Go(M, j, A)), (Z.return = M), Z)
          : ((Z = As(A.type, A.key, A.props, null, M.mode, Z)),
            (Z.ref = Go(M, j, A)),
            (Z.return = M),
            Z);
    }
    function L(M, j, A, Z) {
      return j === null ||
        j.tag !== 4 ||
        j.stateNode.containerInfo !== A.containerInfo ||
        j.stateNode.implementation !== A.implementation
        ? ((j = vu(A, M.mode, Z)), (j.return = M), j)
        : ((j = u(j, A.children || [])), (j.return = M), j);
    }
    function K(M, j, A, Z, ue) {
      return j === null || j.tag !== 7
        ? ((j = Sr(A, M.mode, Z, ue)), (j.return = M), j)
        : ((j = u(j, A)), (j.return = M), j);
    }
    function q(M, j, A) {
      if ((typeof j == "string" && j !== "") || typeof j == "number")
        return ((j = mu("" + j, M.mode, A)), (j.return = M), j);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case I:
            return (
              (A = As(j.type, j.key, j.props, null, M.mode, A)),
              (A.ref = Go(M, null, j)),
              (A.return = M),
              A
            );
          case F:
            return ((j = vu(j, M.mode, A)), (j.return = M), j);
          case Q:
            var Z = j._init;
            return q(M, Z(j._payload), A);
        }
        if (Tt(j) || J(j))
          return ((j = Sr(j, M.mode, A, null)), (j.return = M), j);
        ds(M, j);
      }
      return null;
    }
    function B(M, j, A, Z) {
      var ue = j !== null ? j.key : null;
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return ue !== null ? null : b(M, j, "" + A, Z);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case I:
            return A.key === ue ? O(M, j, A, Z) : null;
          case F:
            return A.key === ue ? L(M, j, A, Z) : null;
          case Q:
            return ((ue = A._init), B(M, j, ue(A._payload), Z));
        }
        if (Tt(A) || J(A)) return ue !== null ? null : K(M, j, A, Z, null);
        ds(M, A);
      }
      return null;
    }
    function re(M, j, A, Z, ue) {
      if ((typeof Z == "string" && Z !== "") || typeof Z == "number")
        return ((M = M.get(A) || null), b(j, M, "" + Z, ue));
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case I:
            return (
              (M = M.get(Z.key === null ? A : Z.key) || null),
              O(j, M, Z, ue)
            );
          case F:
            return (
              (M = M.get(Z.key === null ? A : Z.key) || null),
              L(j, M, Z, ue)
            );
          case Q:
            var fe = Z._init;
            return re(M, j, A, fe(Z._payload), ue);
        }
        if (Tt(Z) || J(Z))
          return ((M = M.get(A) || null), K(j, M, Z, ue, null));
        ds(j, Z);
      }
      return null;
    }
    function se(M, j, A, Z) {
      for (
        var ue = null, fe = null, pe = j, me = (j = 0), Je = null;
        pe !== null && me < A.length;
        me++
      ) {
        pe.index > me ? ((Je = pe), (pe = null)) : (Je = pe.sibling);
        var Ee = B(M, pe, A[me], Z);
        if (Ee === null) {
          pe === null && (pe = Je);
          break;
        }
        (e && pe && Ee.alternate === null && t(M, pe),
          (j = d(Ee, j, me)),
          fe === null ? (ue = Ee) : (fe.sibling = Ee),
          (fe = Ee),
          (pe = Je));
      }
      if (me === A.length) return (i(M, pe), Me && pr(M, me), ue);
      if (pe === null) {
        for (; me < A.length; me++)
          ((pe = q(M, A[me], Z)),
            pe !== null &&
              ((j = d(pe, j, me)),
              fe === null ? (ue = pe) : (fe.sibling = pe),
              (fe = pe)));
        return (Me && pr(M, me), ue);
      }
      for (pe = l(M, pe); me < A.length; me++)
        ((Je = re(pe, M, me, A[me], Z)),
          Je !== null &&
            (e &&
              Je.alternate !== null &&
              pe.delete(Je.key === null ? me : Je.key),
            (j = d(Je, j, me)),
            fe === null ? (ue = Je) : (fe.sibling = Je),
            (fe = Je)));
      return (
        e &&
          pe.forEach(function (Zn) {
            return t(M, Zn);
          }),
        Me && pr(M, me),
        ue
      );
    }
    function ae(M, j, A, Z) {
      var ue = J(A);
      if (typeof ue != "function") throw Error(o(150));
      if (((A = ue.call(A)), A == null)) throw Error(o(151));
      for (
        var fe = (ue = null), pe = j, me = (j = 0), Je = null, Ee = A.next();
        pe !== null && !Ee.done;
        me++, Ee = A.next()
      ) {
        pe.index > me ? ((Je = pe), (pe = null)) : (Je = pe.sibling);
        var Zn = B(M, pe, Ee.value, Z);
        if (Zn === null) {
          pe === null && (pe = Je);
          break;
        }
        (e && pe && Zn.alternate === null && t(M, pe),
          (j = d(Zn, j, me)),
          fe === null ? (ue = Zn) : (fe.sibling = Zn),
          (fe = Zn),
          (pe = Je));
      }
      if (Ee.done) return (i(M, pe), Me && pr(M, me), ue);
      if (pe === null) {
        for (; !Ee.done; me++, Ee = A.next())
          ((Ee = q(M, Ee.value, Z)),
            Ee !== null &&
              ((j = d(Ee, j, me)),
              fe === null ? (ue = Ee) : (fe.sibling = Ee),
              (fe = Ee)));
        return (Me && pr(M, me), ue);
      }
      for (pe = l(M, pe); !Ee.done; me++, Ee = A.next())
        ((Ee = re(pe, M, me, Ee.value, Z)),
          Ee !== null &&
            (e &&
              Ee.alternate !== null &&
              pe.delete(Ee.key === null ? me : Ee.key),
            (j = d(Ee, j, me)),
            fe === null ? (ue = Ee) : (fe.sibling = Ee),
            (fe = Ee)));
      return (
        e &&
          pe.forEach(function (qw) {
            return t(M, qw);
          }),
        Me && pr(M, me),
        ue
      );
    }
    function $e(M, j, A, Z) {
      if (
        (typeof A == "object" &&
          A !== null &&
          A.type === $ &&
          A.key === null &&
          (A = A.props.children),
        typeof A == "object" && A !== null)
      ) {
        switch (A.$$typeof) {
          case I:
            e: {
              for (var ue = A.key, fe = j; fe !== null; ) {
                if (fe.key === ue) {
                  if (((ue = A.type), ue === $)) {
                    if (fe.tag === 7) {
                      (i(M, fe.sibling),
                        (j = u(fe, A.props.children)),
                        (j.return = M),
                        (M = j));
                      break e;
                    }
                  } else if (
                    fe.elementType === ue ||
                    (typeof ue == "object" &&
                      ue !== null &&
                      ue.$$typeof === Q &&
                      ff(ue) === fe.type)
                  ) {
                    (i(M, fe.sibling),
                      (j = u(fe, A.props)),
                      (j.ref = Go(M, fe, A)),
                      (j.return = M),
                      (M = j));
                    break e;
                  }
                  i(M, fe);
                  break;
                } else t(M, fe);
                fe = fe.sibling;
              }
              A.type === $
                ? ((j = Sr(A.props.children, M.mode, Z, A.key)),
                  (j.return = M),
                  (M = j))
                : ((Z = As(A.type, A.key, A.props, null, M.mode, Z)),
                  (Z.ref = Go(M, j, A)),
                  (Z.return = M),
                  (M = Z));
            }
            return v(M);
          case F:
            e: {
              for (fe = A.key; j !== null; ) {
                if (j.key === fe)
                  if (
                    j.tag === 4 &&
                    j.stateNode.containerInfo === A.containerInfo &&
                    j.stateNode.implementation === A.implementation
                  ) {
                    (i(M, j.sibling),
                      (j = u(j, A.children || [])),
                      (j.return = M),
                      (M = j));
                    break e;
                  } else {
                    i(M, j);
                    break;
                  }
                else t(M, j);
                j = j.sibling;
              }
              ((j = vu(A, M.mode, Z)), (j.return = M), (M = j));
            }
            return v(M);
          case Q:
            return ((fe = A._init), $e(M, j, fe(A._payload), Z));
        }
        if (Tt(A)) return se(M, j, A, Z);
        if (J(A)) return ae(M, j, A, Z);
        ds(M, A);
      }
      return (typeof A == "string" && A !== "") || typeof A == "number"
        ? ((A = "" + A),
          j !== null && j.tag === 6
            ? (i(M, j.sibling), (j = u(j, A)), (j.return = M), (M = j))
            : (i(M, j), (j = mu(A, M.mode, Z)), (j.return = M), (M = j)),
          v(M))
        : i(M, j);
    }
    return $e;
  }
  var Qr = pf(!0),
    hf = pf(!1),
    fs = Un(null),
    ps = null,
    Kr = null,
    ka = null;
  function Pa() {
    ka = Kr = ps = null;
  }
  function Ra(e) {
    var t = fs.current;
    (_e(fs), (e._currentValue = t));
  }
  function Oa(e, t, i) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function qr(e, t) {
    ((ps = e),
      (ka = Kr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (mt = !0), (e.firstContext = null)));
  }
  function Dt(e) {
    var t = e._currentValue;
    if (ka !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
        if (ps === null) throw Error(o(308));
        ((Kr = e), (ps.dependencies = { lanes: 0, firstContext: e }));
      } else Kr = Kr.next = e;
    return t;
  }
  var hr = null;
  function Ta(e) {
    hr === null ? (hr = [e]) : hr.push(e);
  }
  function mf(e, t, i, l) {
    var u = t.interleaved;
    return (
      u === null ? ((i.next = i), Ta(t)) : ((i.next = u.next), (u.next = i)),
      (t.interleaved = i),
      gn(e, l)
    );
  }
  function gn(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (i = e.alternate),
        i !== null && (i.childLanes |= t),
        (i = e),
        (e = e.return));
    return i.tag === 3 ? i.stateNode : null;
  }
  var Wn = !1;
  function Na(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function vf(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function yn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Bn(e, t, i) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ce & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        gn(e, i)
      );
    }
    return (
      (u = l.interleaved),
      u === null ? ((t.next = t), Ta(l)) : ((t.next = u.next), (u.next = t)),
      (l.interleaved = t),
      gn(e, i)
    );
  }
  function hs(e, t, i) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (i |= l), (t.lanes = i), Wl(e, i));
    }
  }
  function gf(e, t) {
    var i = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), i === l)) {
      var u = null,
        d = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var v = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          (d === null ? (u = d = v) : (d = d.next = v), (i = i.next));
        } while (i !== null);
        d === null ? (u = d = t) : (d = d.next = t);
      } else u = d = t;
      ((i = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = t) : (e.next = t),
      (i.lastBaseUpdate = t));
  }
  function ms(e, t, i, l) {
    var u = e.updateQueue;
    Wn = !1;
    var d = u.firstBaseUpdate,
      v = u.lastBaseUpdate,
      b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var O = b,
        L = O.next;
      ((O.next = null), v === null ? (d = L) : (v.next = L), (v = O));
      var K = e.alternate;
      K !== null &&
        ((K = K.updateQueue),
        (b = K.lastBaseUpdate),
        b !== v &&
          (b === null ? (K.firstBaseUpdate = L) : (b.next = L),
          (K.lastBaseUpdate = O)));
    }
    if (d !== null) {
      var q = u.baseState;
      ((v = 0), (K = L = O = null), (b = d));
      do {
        var B = b.lane,
          re = b.eventTime;
        if ((l & B) === B) {
          K !== null &&
            (K = K.next =
              {
                eventTime: re,
                lane: 0,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null,
              });
          e: {
            var se = e,
              ae = b;
            switch (((B = t), (re = i), ae.tag)) {
              case 1:
                if (((se = ae.payload), typeof se == "function")) {
                  q = se.call(re, q, B);
                  break e;
                }
                q = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = ae.payload),
                  (B = typeof se == "function" ? se.call(re, q, B) : se),
                  B == null)
                )
                  break e;
                q = X({}, q, B);
                break e;
              case 2:
                Wn = !0;
            }
          }
          b.callback !== null &&
            b.lane !== 0 &&
            ((e.flags |= 64),
            (B = u.effects),
            B === null ? (u.effects = [b]) : B.push(b));
        } else
          ((re = {
            eventTime: re,
            lane: B,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            K === null ? ((L = K = re), (O = q)) : (K = K.next = re),
            (v |= B));
        if (((b = b.next), b === null)) {
          if (((b = u.shared.pending), b === null)) break;
          ((B = b),
            (b = B.next),
            (B.next = null),
            (u.lastBaseUpdate = B),
            (u.shared.pending = null));
        }
      } while (!0);
      if (
        (K === null && (O = q),
        (u.baseState = O),
        (u.firstBaseUpdate = L),
        (u.lastBaseUpdate = K),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do ((v |= u.lane), (u = u.next));
        while (u !== t);
      } else d === null && (u.shared.lanes = 0);
      ((gr |= v), (e.lanes = v), (e.memoizedState = q));
    }
  }
  function yf(e, t, i) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var l = e[t],
          u = l.callback;
        if (u !== null) {
          if (((l.callback = null), (l = i), typeof u != "function"))
            throw Error(o(191, u));
          u.call(l);
        }
      }
  }
  var Yo = {},
    nn = Un(Yo),
    Xo = Un(Yo),
    Zo = Un(Yo);
  function mr(e) {
    if (e === Yo) throw Error(o(174));
    return e;
  }
  function ja(e, t) {
    switch ((Te(Zo, t), Te(Xo, e), Te(nn, Yo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Eo(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Eo(t, e)));
    }
    (_e(nn), Te(nn, t));
  }
  function Gr() {
    (_e(nn), _e(Xo), _e(Zo));
  }
  function wf(e) {
    mr(Zo.current);
    var t = mr(nn.current),
      i = Eo(t, e.type);
    t !== i && (Te(Xo, e), Te(nn, i));
  }
  function _a(e) {
    Xo.current === e && (_e(nn), _e(Xo));
  }
  var Ae = Un(0);
  function vs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Da = [];
  function Ma() {
    for (var e = 0; e < Da.length; e++)
      Da[e]._workInProgressVersionPrimary = null;
    Da.length = 0;
  }
  var gs = _.ReactCurrentDispatcher,
    Aa = _.ReactCurrentBatchConfig,
    vr = 0,
    Ie = null,
    Be = null,
    Xe = null,
    ys = !1,
    Jo = !1,
    ei = 0,
    vw = 0;
  function it() {
    throw Error(o(321));
  }
  function Ia(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!$t(e[i], t[i])) return !1;
    return !0;
  }
  function La(e, t, i, l, u, d) {
    if (
      ((vr = d),
      (Ie = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (gs.current = e === null || e.memoizedState === null ? xw : Sw),
      (e = i(l, u)),
      Jo)
    ) {
      d = 0;
      do {
        if (((Jo = !1), (ei = 0), 25 <= d)) throw Error(o(301));
        ((d += 1),
          (Xe = Be = null),
          (t.updateQueue = null),
          (gs.current = Cw),
          (e = i(l, u)));
      } while (Jo);
    }
    if (
      ((gs.current = Ss),
      (t = Be !== null && Be.next !== null),
      (vr = 0),
      (Xe = Be = Ie = null),
      (ys = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function Fa() {
    var e = ei !== 0;
    return ((ei = 0), e);
  }
  function rn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Xe === null ? (Ie.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe);
  }
  function Mt() {
    if (Be === null) {
      var e = Ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = Xe === null ? Ie.memoizedState : Xe.next;
    if (t !== null) ((Xe = t), (Be = e));
    else {
      if (e === null) throw Error(o(310));
      ((Be = e),
        (e = {
          memoizedState: Be.memoizedState,
          baseState: Be.baseState,
          baseQueue: Be.baseQueue,
          queue: Be.queue,
          next: null,
        }),
        Xe === null ? (Ie.memoizedState = Xe = e) : (Xe = Xe.next = e));
    }
    return Xe;
  }
  function ti(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function za(e) {
    var t = Mt(),
      i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var l = Be,
      u = l.baseQueue,
      d = i.pending;
    if (d !== null) {
      if (u !== null) {
        var v = u.next;
        ((u.next = d.next), (d.next = v));
      }
      ((l.baseQueue = u = d), (i.pending = null));
    }
    if (u !== null) {
      ((d = u.next), (l = l.baseState));
      var b = (v = null),
        O = null,
        L = d;
      do {
        var K = L.lane;
        if ((vr & K) === K)
          (O !== null &&
            (O = O.next =
              {
                lane: 0,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null,
              }),
            (l = L.hasEagerState ? L.eagerState : e(l, L.action)));
        else {
          var q = {
            lane: K,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          };
          (O === null ? ((b = O = q), (v = l)) : (O = O.next = q),
            (Ie.lanes |= K),
            (gr |= K));
        }
        L = L.next;
      } while (L !== null && L !== d);
      (O === null ? (v = l) : (O.next = b),
        $t(l, t.memoizedState) || (mt = !0),
        (t.memoizedState = l),
        (t.baseState = v),
        (t.baseQueue = O),
        (i.lastRenderedState = l));
    }
    if (((e = i.interleaved), e !== null)) {
      u = e;
      do ((d = u.lane), (Ie.lanes |= d), (gr |= d), (u = u.next));
      while (u !== e);
    } else u === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function $a(e) {
    var t = Mt(),
      i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var l = i.dispatch,
      u = i.pending,
      d = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var v = (u = u.next);
      do ((d = e(d, v.action)), (v = v.next));
      while (v !== u);
      ($t(d, t.memoizedState) || (mt = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (i.lastRenderedState = d));
    }
    return [d, l];
  }
  function xf() {}
  function Sf(e, t) {
    var i = Ie,
      l = Mt(),
      u = t(),
      d = !$t(l.memoizedState, u);
    if (
      (d && ((l.memoizedState = u), (mt = !0)),
      (l = l.queue),
      Ua(bf.bind(null, i, l, e), [e]),
      l.getSnapshot !== t || d || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        ni(9, Ef.bind(null, i, l, u, t), void 0, null),
        Ze === null)
      )
        throw Error(o(349));
      (vr & 30) !== 0 || Cf(i, t, u);
    }
    return u;
  }
  function Cf(e, t, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = Ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ie.updateQueue = t),
          (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e)));
  }
  function Ef(e, t, i, l) {
    ((t.value = i), (t.getSnapshot = l), kf(t) && Pf(e));
  }
  function bf(e, t, i) {
    return i(function () {
      kf(t) && Pf(e);
    });
  }
  function kf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !$t(e, i);
    } catch {
      return !0;
    }
  }
  function Pf(e) {
    var t = gn(e, 1);
    t !== null && Bt(t, e, 1, -1);
  }
  function Rf(e) {
    var t = rn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ti,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = ww.bind(null, Ie, e)),
      [t.memoizedState, e]
    );
  }
  function ni(e, t, i, l) {
    return (
      (e = { tag: e, create: t, destroy: i, deps: l, next: null }),
      (t = Ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ie.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((i = t.lastEffect),
          i === null
            ? (t.lastEffect = e.next = e)
            : ((l = i.next), (i.next = e), (e.next = l), (t.lastEffect = e))),
      e
    );
  }
  function Of() {
    return Mt().memoizedState;
  }
  function ws(e, t, i, l) {
    var u = rn();
    ((Ie.flags |= e),
      (u.memoizedState = ni(1 | t, i, void 0, l === void 0 ? null : l)));
  }
  function xs(e, t, i, l) {
    var u = Mt();
    l = l === void 0 ? null : l;
    var d = void 0;
    if (Be !== null) {
      var v = Be.memoizedState;
      if (((d = v.destroy), l !== null && Ia(l, v.deps))) {
        u.memoizedState = ni(t, i, d, l);
        return;
      }
    }
    ((Ie.flags |= e), (u.memoizedState = ni(1 | t, i, d, l)));
  }
  function Tf(e, t) {
    return ws(8390656, 8, e, t);
  }
  function Ua(e, t) {
    return xs(2048, 8, e, t);
  }
  function Nf(e, t) {
    return xs(4, 2, e, t);
  }
  function jf(e, t) {
    return xs(4, 4, e, t);
  }
  function _f(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Df(e, t, i) {
    return (
      (i = i != null ? i.concat([e]) : null),
      xs(4, 4, _f.bind(null, t, e), i)
    );
  }
  function Va() {}
  function Mf(e, t) {
    var i = Mt();
    t = t === void 0 ? null : t;
    var l = i.memoizedState;
    return l !== null && t !== null && Ia(t, l[1])
      ? l[0]
      : ((i.memoizedState = [e, t]), e);
  }
  function Af(e, t) {
    var i = Mt();
    t = t === void 0 ? null : t;
    var l = i.memoizedState;
    return l !== null && t !== null && Ia(t, l[1])
      ? l[0]
      : ((e = e()), (i.memoizedState = [e, t]), e);
  }
  function If(e, t, i) {
    return (vr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (mt = !0)), (e.memoizedState = i))
      : ($t(i, t) ||
          ((i = dd()), (Ie.lanes |= i), (gr |= i), (e.baseState = !0)),
        t);
  }
  function gw(e, t) {
    var i = Pe;
    ((Pe = i !== 0 && 4 > i ? i : 4), e(!0));
    var l = Aa.transition;
    Aa.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Pe = i), (Aa.transition = l));
    }
  }
  function Lf() {
    return Mt().memoizedState;
  }
  function yw(e, t, i) {
    var l = Gn(e);
    if (
      ((i = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ff(e))
    )
      zf(t, i);
    else if (((i = mf(e, t, i, l)), i !== null)) {
      var u = ct();
      (Bt(i, e, l, u), $f(i, t, l));
    }
  }
  function ww(e, t, i) {
    var l = Gn(e),
      u = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ff(e)) zf(t, u);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var v = t.lastRenderedState,
            b = d(v, i);
          if (((u.hasEagerState = !0), (u.eagerState = b), $t(b, v))) {
            var O = t.interleaved;
            (O === null
              ? ((u.next = u), Ta(t))
              : ((u.next = O.next), (O.next = u)),
              (t.interleaved = u));
            return;
          }
        } catch {}
      ((i = mf(e, t, u, l)),
        i !== null && ((u = ct()), Bt(i, e, l, u), $f(i, t, l)));
    }
  }
  function Ff(e) {
    var t = e.alternate;
    return e === Ie || (t !== null && t === Ie);
  }
  function zf(e, t) {
    Jo = ys = !0;
    var i = e.pending;
    (i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (e.pending = t));
  }
  function $f(e, t, i) {
    if ((i & 4194240) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (i |= l), (t.lanes = i), Wl(e, i));
    }
  }
  var Ss = {
      readContext: Dt,
      useCallback: it,
      useContext: it,
      useEffect: it,
      useImperativeHandle: it,
      useInsertionEffect: it,
      useLayoutEffect: it,
      useMemo: it,
      useReducer: it,
      useRef: it,
      useState: it,
      useDebugValue: it,
      useDeferredValue: it,
      useTransition: it,
      useMutableSource: it,
      useSyncExternalStore: it,
      useId: it,
      unstable_isNewReconciler: !1,
    },
    xw = {
      readContext: Dt,
      useCallback: function (e, t) {
        return ((rn().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Dt,
      useEffect: Tf,
      useImperativeHandle: function (e, t, i) {
        return (
          (i = i != null ? i.concat([e]) : null),
          ws(4194308, 4, _f.bind(null, t, e), i)
        );
      },
      useLayoutEffect: function (e, t) {
        return ws(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ws(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = rn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (i.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, i) {
        var l = rn();
        return (
          (t = i !== void 0 ? i(t) : t),
          (l.memoizedState = l.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (l.queue = e),
          (e = e.dispatch = yw.bind(null, Ie, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = rn();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Rf,
      useDebugValue: Va,
      useDeferredValue: function (e) {
        return (rn().memoizedState = e);
      },
      useTransition: function () {
        var e = Rf(!1),
          t = e[0];
        return ((e = gw.bind(null, e[1])), (rn().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, i) {
        var l = Ie,
          u = rn();
        if (Me) {
          if (i === void 0) throw Error(o(407));
          i = i();
        } else {
          if (((i = t()), Ze === null)) throw Error(o(349));
          (vr & 30) !== 0 || Cf(l, t, i);
        }
        u.memoizedState = i;
        var d = { value: i, getSnapshot: t };
        return (
          (u.queue = d),
          Tf(bf.bind(null, l, d, e), [e]),
          (l.flags |= 2048),
          ni(9, Ef.bind(null, l, d, i, t), void 0, null),
          i
        );
      },
      useId: function () {
        var e = rn(),
          t = Ze.identifierPrefix;
        if (Me) {
          var i = vn,
            l = mn;
          ((i = (l & ~(1 << (32 - zt(l) - 1))).toString(32) + i),
            (t = ":" + t + "R" + i),
            (i = ei++),
            0 < i && (t += "H" + i.toString(32)),
            (t += ":"));
        } else ((i = vw++), (t = ":" + t + "r" + i.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Sw = {
      readContext: Dt,
      useCallback: Mf,
      useContext: Dt,
      useEffect: Ua,
      useImperativeHandle: Df,
      useInsertionEffect: Nf,
      useLayoutEffect: jf,
      useMemo: Af,
      useReducer: za,
      useRef: Of,
      useState: function () {
        return za(ti);
      },
      useDebugValue: Va,
      useDeferredValue: function (e) {
        var t = Mt();
        return If(t, Be.memoizedState, e);
      },
      useTransition: function () {
        var e = za(ti)[0],
          t = Mt().memoizedState;
        return [e, t];
      },
      useMutableSource: xf,
      useSyncExternalStore: Sf,
      useId: Lf,
      unstable_isNewReconciler: !1,
    },
    Cw = {
      readContext: Dt,
      useCallback: Mf,
      useContext: Dt,
      useEffect: Ua,
      useImperativeHandle: Df,
      useInsertionEffect: Nf,
      useLayoutEffect: jf,
      useMemo: Af,
      useReducer: $a,
      useRef: Of,
      useState: function () {
        return $a(ti);
      },
      useDebugValue: Va,
      useDeferredValue: function (e) {
        var t = Mt();
        return Be === null ? (t.memoizedState = e) : If(t, Be.memoizedState, e);
      },
      useTransition: function () {
        var e = $a(ti)[0],
          t = Mt().memoizedState;
        return [e, t];
      },
      useMutableSource: xf,
      useSyncExternalStore: Sf,
      useId: Lf,
      unstable_isNewReconciler: !1,
    };
  function Vt(e, t) {
    if (e && e.defaultProps) {
      ((t = X({}, t)), (e = e.defaultProps));
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function Ha(e, t, i, l) {
    ((t = e.memoizedState),
      (i = i(l, t)),
      (i = i == null ? t : X({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var Cs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ur(e) === e : !1;
    },
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var l = ct(),
        u = Gn(e),
        d = yn(l, u);
      ((d.payload = t),
        i != null && (d.callback = i),
        (t = Bn(e, d, u)),
        t !== null && (Bt(t, e, u, l), hs(t, e, u)));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var l = ct(),
        u = Gn(e),
        d = yn(l, u);
      ((d.tag = 1),
        (d.payload = t),
        i != null && (d.callback = i),
        (t = Bn(e, d, u)),
        t !== null && (Bt(t, e, u, l), hs(t, e, u)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = ct(),
        l = Gn(e),
        u = yn(i, l);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = Bn(e, u, l)),
        t !== null && (Bt(t, e, l, i), hs(t, e, l)));
    },
  };
  function Uf(e, t, i, l, u, d, v) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, d, v)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Vo(i, l) || !Vo(u, d)
          : !0
    );
  }
  function Vf(e, t, i) {
    var l = !1,
      u = Vn,
      d = t.contextType;
    return (
      typeof d == "object" && d !== null
        ? (d = Dt(d))
        : ((u = ht(t) ? dr : ot.current),
          (l = t.contextTypes),
          (d = (l = l != null) ? Vr(e, u) : Vn)),
      (t = new t(i, d)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Cs),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      t
    );
  }
  function Hf(e, t, i, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(i, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(i, l),
      t.state !== e && Cs.enqueueReplaceState(t, t.state, null));
  }
  function Wa(e, t, i, l) {
    var u = e.stateNode;
    ((u.props = i), (u.state = e.memoizedState), (u.refs = {}), Na(e));
    var d = t.contextType;
    (typeof d == "object" && d !== null
      ? (u.context = Dt(d))
      : ((d = ht(t) ? dr : ot.current), (u.context = Vr(e, d))),
      (u.state = e.memoizedState),
      (d = t.getDerivedStateFromProps),
      typeof d == "function" && (Ha(e, t, d, i), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && Cs.enqueueReplaceState(u, u.state, null),
        ms(e, i, u, l),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Yr(e, t) {
    try {
      var i = "",
        l = t;
      do ((i += ve(l)), (l = l.return));
      while (l);
      var u = i;
    } catch (d) {
      u =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function Ba(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function Qa(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var Ew = typeof WeakMap == "function" ? WeakMap : Map;
  function Wf(e, t, i) {
    ((i = yn(-1, i)), (i.tag = 3), (i.payload = { element: null }));
    var l = t.value;
    return (
      (i.callback = function () {
        (Ts || ((Ts = !0), (lu = l)), Qa(e, t));
      }),
      i
    );
  }
  function Bf(e, t, i) {
    ((i = yn(-1, i)), (i.tag = 3));
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = t.value;
      ((i.payload = function () {
        return l(u);
      }),
        (i.callback = function () {
          Qa(e, t);
        }));
    }
    var d = e.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (i.callback = function () {
          (Qa(e, t),
            typeof l != "function" &&
              (Kn === null ? (Kn = new Set([this])) : Kn.add(this)));
          var v = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: v !== null ? v : "",
          });
        }),
      i
    );
  }
  function Qf(e, t, i) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Ew();
      var u = new Set();
      l.set(t, u);
    } else ((u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u)));
    u.has(i) || (u.add(i), (e = Lw.bind(null, e, t, i)), t.then(e, e));
  }
  function Kf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function qf(e, t, i, l, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((t = yn(-1, 1)), (t.tag = 2), Bn(i, t, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var bw = _.ReactCurrentOwner,
    mt = !1;
  function ut(e, t, i, l) {
    t.child = e === null ? hf(t, null, i, l) : Qr(t, e.child, i, l);
  }
  function Gf(e, t, i, l, u) {
    i = i.render;
    var d = t.ref;
    return (
      qr(t, u),
      (l = La(e, t, i, l, d, u)),
      (i = Fa()),
      e !== null && !mt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          wn(e, t, u))
        : (Me && i && xa(t), (t.flags |= 1), ut(e, t, l, u), t.child)
    );
  }
  function Yf(e, t, i, l, u) {
    if (e === null) {
      var d = i.type;
      return typeof d == "function" &&
        !hu(d) &&
        d.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((t.tag = 15), (t.type = d), Xf(e, t, d, l, u))
        : ((e = As(i.type, null, l, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), (e.lanes & u) === 0)) {
      var v = d.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : Vo), i(v, l) && e.ref === t.ref)
      )
        return wn(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Xn(d, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Xf(e, t, i, l, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Vo(d, l) && e.ref === t.ref)
        if (((mt = !1), (t.pendingProps = l = d), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (mt = !0);
        else return ((t.lanes = e.lanes), wn(e, t, u));
    }
    return Ka(e, t, i, l, u);
  }
  function Zf(e, t, i) {
    var l = t.pendingProps,
      u = l.children,
      d = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Te(Zr, bt),
          (bt |= i));
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = d !== null ? d.baseLanes | i : i),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Te(Zr, bt),
            (bt |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = d !== null ? d.baseLanes : i),
          Te(Zr, bt),
          (bt |= l));
      }
    else
      (d !== null ? ((l = d.baseLanes | i), (t.memoizedState = null)) : (l = i),
        Te(Zr, bt),
        (bt |= l));
    return (ut(e, t, u, i), t.child);
  }
  function Jf(e, t) {
    var i = t.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ka(e, t, i, l, u) {
    var d = ht(i) ? dr : ot.current;
    return (
      (d = Vr(t, d)),
      qr(t, u),
      (i = La(e, t, i, l, d, u)),
      (l = Fa()),
      e !== null && !mt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          wn(e, t, u))
        : (Me && l && xa(t), (t.flags |= 1), ut(e, t, i, u), t.child)
    );
  }
  function ep(e, t, i, l, u) {
    if (ht(i)) {
      var d = !0;
      ss(t);
    } else d = !1;
    if ((qr(t, u), t.stateNode === null))
      (bs(e, t), Vf(t, i, l), Wa(t, i, l, u), (l = !0));
    else if (e === null) {
      var v = t.stateNode,
        b = t.memoizedProps;
      v.props = b;
      var O = v.context,
        L = i.contextType;
      typeof L == "object" && L !== null
        ? (L = Dt(L))
        : ((L = ht(i) ? dr : ot.current), (L = Vr(t, L)));
      var K = i.getDerivedStateFromProps,
        q =
          typeof K == "function" ||
          typeof v.getSnapshotBeforeUpdate == "function";
      (q ||
        (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
          typeof v.componentWillReceiveProps != "function") ||
        ((b !== l || O !== L) && Hf(t, v, l, L)),
        (Wn = !1));
      var B = t.memoizedState;
      ((v.state = B),
        ms(t, l, v, u),
        (O = t.memoizedState),
        b !== l || B !== O || pt.current || Wn
          ? (typeof K == "function" && (Ha(t, i, K, l), (O = t.memoizedState)),
            (b = Wn || Uf(t, i, b, l, B, O, L))
              ? (q ||
                  (typeof v.UNSAFE_componentWillMount != "function" &&
                    typeof v.componentWillMount != "function") ||
                  (typeof v.componentWillMount == "function" &&
                    v.componentWillMount(),
                  typeof v.UNSAFE_componentWillMount == "function" &&
                    v.UNSAFE_componentWillMount()),
                typeof v.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof v.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = O)),
            (v.props = l),
            (v.state = O),
            (v.context = L),
            (l = b))
          : (typeof v.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((v = t.stateNode),
        vf(e, t),
        (b = t.memoizedProps),
        (L = t.type === t.elementType ? b : Vt(t.type, b)),
        (v.props = L),
        (q = t.pendingProps),
        (B = v.context),
        (O = i.contextType),
        typeof O == "object" && O !== null
          ? (O = Dt(O))
          : ((O = ht(i) ? dr : ot.current), (O = Vr(t, O))));
      var re = i.getDerivedStateFromProps;
      ((K =
        typeof re == "function" ||
        typeof v.getSnapshotBeforeUpdate == "function") ||
        (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
          typeof v.componentWillReceiveProps != "function") ||
        ((b !== q || B !== O) && Hf(t, v, l, O)),
        (Wn = !1),
        (B = t.memoizedState),
        (v.state = B),
        ms(t, l, v, u));
      var se = t.memoizedState;
      b !== q || B !== se || pt.current || Wn
        ? (typeof re == "function" && (Ha(t, i, re, l), (se = t.memoizedState)),
          (L = Wn || Uf(t, i, L, l, B, se, O) || !1)
            ? (K ||
                (typeof v.UNSAFE_componentWillUpdate != "function" &&
                  typeof v.componentWillUpdate != "function") ||
                (typeof v.componentWillUpdate == "function" &&
                  v.componentWillUpdate(l, se, O),
                typeof v.UNSAFE_componentWillUpdate == "function" &&
                  v.UNSAFE_componentWillUpdate(l, se, O)),
              typeof v.componentDidUpdate == "function" && (t.flags |= 4),
              typeof v.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof v.componentDidUpdate != "function" ||
                (b === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 4),
              typeof v.getSnapshotBeforeUpdate != "function" ||
                (b === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = se)),
          (v.props = l),
          (v.state = se),
          (v.context = O),
          (l = L))
        : (typeof v.componentDidUpdate != "function" ||
            (b === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof v.getSnapshotBeforeUpdate != "function" ||
            (b === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return qa(e, t, i, l, d, u);
  }
  function qa(e, t, i, l, u, d) {
    Jf(e, t);
    var v = (t.flags & 128) !== 0;
    if (!l && !v) return (u && of(t, i, !1), wn(e, t, d));
    ((l = t.stateNode), (bw.current = t));
    var b =
      v && typeof i.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && v
        ? ((t.child = Qr(t, e.child, null, d)), (t.child = Qr(t, null, b, d)))
        : ut(e, t, b, d),
      (t.memoizedState = l.state),
      u && of(t, i, !0),
      t.child
    );
  }
  function tp(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? nf(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && nf(e, t.context, !1),
      ja(e, t.containerInfo));
  }
  function np(e, t, i, l, u) {
    return (Br(), ba(u), (t.flags |= 256), ut(e, t, i, l), t.child);
  }
  var Ga = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ya(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function rp(e, t, i) {
    var l = t.pendingProps,
      u = Ae.current,
      d = !1,
      v = (t.flags & 128) !== 0,
      b;
    if (
      ((b = v) ||
        (b = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      b
        ? ((d = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Te(Ae, u & 1),
      e === null)
    )
      return (
        Ea(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((v = l.children),
            (e = l.fallback),
            d
              ? ((l = t.mode),
                (d = t.child),
                (v = { mode: "hidden", children: v }),
                (l & 1) === 0 && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = v))
                  : (d = Is(v, l, 0, null)),
                (e = Sr(e, l, i, null)),
                (d.return = t),
                (e.return = t),
                (d.sibling = e),
                (t.child = d),
                (t.child.memoizedState = Ya(i)),
                (t.memoizedState = Ga),
                e)
              : Xa(t, v))
      );
    if (((u = e.memoizedState), u !== null && ((b = u.dehydrated), b !== null)))
      return kw(e, t, v, l, b, u, i);
    if (d) {
      ((d = l.fallback), (v = t.mode), (u = e.child), (b = u.sibling));
      var O = { mode: "hidden", children: l.children };
      return (
        (v & 1) === 0 && t.child !== u
          ? ((l = t.child),
            (l.childLanes = 0),
            (l.pendingProps = O),
            (t.deletions = null))
          : ((l = Xn(u, O)), (l.subtreeFlags = u.subtreeFlags & 14680064)),
        b !== null ? (d = Xn(b, d)) : ((d = Sr(d, v, i, null)), (d.flags |= 2)),
        (d.return = t),
        (l.return = t),
        (l.sibling = d),
        (t.child = l),
        (l = d),
        (d = t.child),
        (v = e.child.memoizedState),
        (v =
          v === null
            ? Ya(i)
            : {
                baseLanes: v.baseLanes | i,
                cachePool: null,
                transitions: v.transitions,
              }),
        (d.memoizedState = v),
        (d.childLanes = e.childLanes & ~i),
        (t.memoizedState = Ga),
        l
      );
    }
    return (
      (d = e.child),
      (e = d.sibling),
      (l = Xn(d, { mode: "visible", children: l.children })),
      (t.mode & 1) === 0 && (l.lanes = i),
      (l.return = t),
      (l.sibling = null),
      e !== null &&
        ((i = t.deletions),
        i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function Xa(e, t) {
    return (
      (t = Is({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Es(e, t, i, l) {
    return (
      l !== null && ba(l),
      Qr(t, e.child, null, i),
      (e = Xa(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function kw(e, t, i, l, u, d, v) {
    if (i)
      return t.flags & 256
        ? ((t.flags &= -257), (l = Ba(Error(o(422)))), Es(e, t, v, l))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((d = l.fallback),
            (u = t.mode),
            (l = Is({ mode: "visible", children: l.children }, u, 0, null)),
            (d = Sr(d, u, v, null)),
            (d.flags |= 2),
            (l.return = t),
            (d.return = t),
            (l.sibling = d),
            (t.child = l),
            (t.mode & 1) !== 0 && Qr(t, e.child, null, v),
            (t.child.memoizedState = Ya(v)),
            (t.memoizedState = Ga),
            d);
    if ((t.mode & 1) === 0) return Es(e, t, v, null);
    if (u.data === "$!") {
      if (((l = u.nextSibling && u.nextSibling.dataset), l)) var b = l.dgst;
      return (
        (l = b),
        (d = Error(o(419))),
        (l = Ba(d, l, void 0)),
        Es(e, t, v, l)
      );
    }
    if (((b = (v & e.childLanes) !== 0), mt || b)) {
      if (((l = Ze), l !== null)) {
        switch (v & -v) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        ((u = (u & (l.suspendedLanes | v)) !== 0 ? 0 : u),
          u !== 0 &&
            u !== d.retryLane &&
            ((d.retryLane = u), gn(e, u), Bt(l, e, u, -1)));
      }
      return (pu(), (l = Ba(Error(o(421)))), Es(e, t, v, l));
    }
    return u.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Fw.bind(null, e)),
        (u._reactRetry = t),
        null)
      : ((e = d.treeContext),
        (Et = $n(u.nextSibling)),
        (Ct = t),
        (Me = !0),
        (Ut = null),
        e !== null &&
          ((jt[_t++] = mn),
          (jt[_t++] = vn),
          (jt[_t++] = fr),
          (mn = e.id),
          (vn = e.overflow),
          (fr = t)),
        (t = Xa(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function op(e, t, i) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Oa(e.return, t, i));
  }
  function Za(e, t, i, l, u) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: i,
          tailMode: u,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = i),
        (d.tailMode = u));
  }
  function ip(e, t, i) {
    var l = t.pendingProps,
      u = l.revealOrder,
      d = l.tail;
    if ((ut(e, t, l.children, i), (l = Ae.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && op(e, i, t);
          else if (e.tag === 19) op(e, i, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      l &= 1;
    }
    if ((Te(Ae, l), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (i = t.child, u = null; i !== null; )
            ((e = i.alternate),
              e !== null && vs(e) === null && (u = i),
              (i = i.sibling));
          ((i = u),
            i === null
              ? ((u = t.child), (t.child = null))
              : ((u = i.sibling), (i.sibling = null)),
            Za(t, !1, u, i, d));
          break;
        case "backwards":
          for (i = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && vs(e) === null)) {
              t.child = u;
              break;
            }
            ((e = u.sibling), (u.sibling = i), (i = u), (u = e));
          }
          Za(t, !0, i, null, d);
          break;
        case "together":
          Za(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function bs(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function wn(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (gr |= t.lanes),
      (i & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, i = Xn(e, e.pendingProps), t.child = i, i.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (i = i.sibling = Xn(e, e.pendingProps)),
          (i.return = t));
      i.sibling = null;
    }
    return t.child;
  }
  function Pw(e, t, i) {
    switch (t.tag) {
      case 3:
        (tp(t), Br());
        break;
      case 5:
        wf(t);
        break;
      case 1:
        ht(t.type) && ss(t);
        break;
      case 4:
        ja(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          u = t.memoizedProps.value;
        (Te(fs, l._currentValue), (l._currentValue = u));
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Te(Ae, Ae.current & 1), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
              ? rp(e, t, i)
              : (Te(Ae, Ae.current & 1),
                (e = wn(e, t, i)),
                e !== null ? e.sibling : null);
        Te(Ae, Ae.current & 1);
        break;
      case 19:
        if (((l = (i & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return ip(e, t, i);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Te(Ae, Ae.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Zf(e, t, i));
    }
    return wn(e, t, i);
  }
  var sp, Ja, lp, ap;
  ((sp = function (e, t) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
  }),
    (Ja = function () {}),
    (lp = function (e, t, i, l) {
      var u = e.memoizedProps;
      if (u !== l) {
        ((e = t.stateNode), mr(nn.current));
        var d = null;
        switch (i) {
          case "input":
            ((u = jn(e, u)), (l = jn(e, l)), (d = []));
            break;
          case "select":
            ((u = X({}, u, { value: void 0 })),
              (l = X({}, l, { value: void 0 })),
              (d = []));
            break;
          case "textarea":
            ((u = Nt(e, u)), (l = Nt(e, l)), (d = []));
            break;
          default:
            typeof u.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = rs);
        }
        bo(i, l);
        var v;
        i = null;
        for (L in u)
          if (!l.hasOwnProperty(L) && u.hasOwnProperty(L) && u[L] != null)
            if (L === "style") {
              var b = u[L];
              for (v in b) b.hasOwnProperty(v) && (i || (i = {}), (i[v] = ""));
            } else
              L !== "dangerouslySetInnerHTML" &&
                L !== "children" &&
                L !== "suppressContentEditableWarning" &&
                L !== "suppressHydrationWarning" &&
                L !== "autoFocus" &&
                (a.hasOwnProperty(L)
                  ? d || (d = [])
                  : (d = d || []).push(L, null));
        for (L in l) {
          var O = l[L];
          if (
            ((b = u?.[L]),
            l.hasOwnProperty(L) && O !== b && (O != null || b != null))
          )
            if (L === "style")
              if (b) {
                for (v in b)
                  !b.hasOwnProperty(v) ||
                    (O && O.hasOwnProperty(v)) ||
                    (i || (i = {}), (i[v] = ""));
                for (v in O)
                  O.hasOwnProperty(v) &&
                    b[v] !== O[v] &&
                    (i || (i = {}), (i[v] = O[v]));
              } else (i || (d || (d = []), d.push(L, i)), (i = O));
            else
              L === "dangerouslySetInnerHTML"
                ? ((O = O ? O.__html : void 0),
                  (b = b ? b.__html : void 0),
                  O != null && b !== O && (d = d || []).push(L, O))
                : L === "children"
                  ? (typeof O != "string" && typeof O != "number") ||
                    (d = d || []).push(L, "" + O)
                  : L !== "suppressContentEditableWarning" &&
                    L !== "suppressHydrationWarning" &&
                    (a.hasOwnProperty(L)
                      ? (O != null && L === "onScroll" && je("scroll", e),
                        d || b === O || (d = []))
                      : (d = d || []).push(L, O));
        }
        i && (d = d || []).push("style", i);
        var L = d;
        (t.updateQueue = L) && (t.flags |= 4);
      }
    }),
    (ap = function (e, t, i, l) {
      i !== l && (t.flags |= 4);
    }));
  function ri(e, t) {
    if (!Me)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null; )
            (t.alternate !== null && (i = t), (t = t.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var l = null; i !== null; )
            (i.alternate !== null && (l = i), (i = i.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function st(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        ((i |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 14680064),
          (l |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((i |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = i), t);
  }
  function Rw(e, t, i) {
    var l = t.pendingProps;
    switch ((Sa(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (st(t), null);
      case 1:
        return (ht(t.type) && is(), st(t), null);
      case 3:
        return (
          (l = t.stateNode),
          Gr(),
          _e(pt),
          _e(ot),
          Ma(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (cs(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ut !== null && (cu(Ut), (Ut = null)))),
          Ja(e, t),
          st(t),
          null
        );
      case 5:
        _a(t);
        var u = mr(Zo.current);
        if (((i = t.type), e !== null && t.stateNode != null))
          (lp(e, t, i, l, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (st(t), null);
          }
          if (((e = mr(nn.current)), cs(t))) {
            ((l = t.stateNode), (i = t.type));
            var d = t.memoizedProps;
            switch (((l[tn] = t), (l[Ko] = d), (e = (t.mode & 1) !== 0), i)) {
              case "dialog":
                (je("cancel", l), je("close", l));
                break;
              case "iframe":
              case "object":
              case "embed":
                je("load", l);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Wo.length; u++) je(Wo[u], l);
                break;
              case "source":
                je("error", l);
                break;
              case "img":
              case "image":
              case "link":
                (je("error", l), je("load", l));
                break;
              case "details":
                je("toggle", l);
                break;
              case "input":
                (Yt(l, d), je("invalid", l));
                break;
              case "select":
                ((l._wrapperState = { wasMultiple: !!d.multiple }),
                  je("invalid", l));
                break;
              case "textarea":
                (Co(l, d), je("invalid", l));
            }
            (bo(i, d), (u = null));
            for (var v in d)
              if (d.hasOwnProperty(v)) {
                var b = d[v];
                v === "children"
                  ? typeof b == "string"
                    ? l.textContent !== b &&
                      (d.suppressHydrationWarning !== !0 &&
                        ns(l.textContent, b, e),
                      (u = ["children", b]))
                    : typeof b == "number" &&
                      l.textContent !== "" + b &&
                      (d.suppressHydrationWarning !== !0 &&
                        ns(l.textContent, b, e),
                      (u = ["children", "" + b]))
                  : a.hasOwnProperty(v) &&
                    b != null &&
                    v === "onScroll" &&
                    je("scroll", l);
              }
            switch (i) {
              case "input":
                (Gt(l), _i(l, d, !0));
                break;
              case "textarea":
                (Gt(l), Di(l));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (l.onclick = rs);
            }
            ((l = u), (t.updateQueue = l), l !== null && (t.flags |= 4));
          } else {
            ((v = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Zt(i)),
              e === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((e = v.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                    ? (e = v.createElement(i, { is: l.is }))
                    : ((e = v.createElement(i)),
                      i === "select" &&
                        ((v = e),
                        l.multiple
                          ? (v.multiple = !0)
                          : l.size && (v.size = l.size)))
                : (e = v.createElementNS(e, i)),
              (e[tn] = t),
              (e[Ko] = l),
              sp(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((v = ko(i, l)), i)) {
                case "dialog":
                  (je("cancel", e), je("close", e), (u = l));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (je("load", e), (u = l));
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Wo.length; u++) je(Wo[u], e);
                  u = l;
                  break;
                case "source":
                  (je("error", e), (u = l));
                  break;
                case "img":
                case "image":
                case "link":
                  (je("error", e), je("load", e), (u = l));
                  break;
                case "details":
                  (je("toggle", e), (u = l));
                  break;
                case "input":
                  (Yt(e, l), (u = jn(e, l)), je("invalid", e));
                  break;
                case "option":
                  u = l;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!l.multiple }),
                    (u = X({}, l, { value: void 0 })),
                    je("invalid", e));
                  break;
                case "textarea":
                  (Co(e, l), (u = Nt(e, l)), je("invalid", e));
                  break;
                default:
                  u = l;
              }
              (bo(i, u), (b = u));
              for (d in b)
                if (b.hasOwnProperty(d)) {
                  var O = b[d];
                  d === "style"
                    ? Jt(e, O)
                    : d === "dangerouslySetInnerHTML"
                      ? ((O = O ? O.__html : void 0), O != null && Mi(e, O))
                      : d === "children"
                        ? typeof O == "string"
                          ? (i !== "textarea" || O !== "") && V(e, O)
                          : typeof O == "number" && V(e, "" + O)
                        : d !== "suppressContentEditableWarning" &&
                          d !== "suppressHydrationWarning" &&
                          d !== "autoFocus" &&
                          (a.hasOwnProperty(d)
                            ? O != null && d === "onScroll" && je("scroll", e)
                            : O != null && D(e, d, O, v));
                }
              switch (i) {
                case "input":
                  (Gt(e), _i(e, l, !1));
                  break;
                case "textarea":
                  (Gt(e), Di(e));
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + xe(l.value));
                  break;
                case "select":
                  ((e.multiple = !!l.multiple),
                    (d = l.value),
                    d != null
                      ? _n(e, !!l.multiple, d, !1)
                      : l.defaultValue != null &&
                        _n(e, !!l.multiple, l.defaultValue, !0));
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = rs);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (st(t), null);
      case 6:
        if (e && t.stateNode != null) ap(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
          if (((i = mr(Zo.current)), mr(nn.current), cs(t))) {
            if (
              ((l = t.stateNode),
              (i = t.memoizedProps),
              (l[tn] = t),
              (d = l.nodeValue !== i) && ((e = Ct), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ns(l.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ns(l.nodeValue, i, (e.mode & 1) !== 0);
              }
            d && (t.flags |= 4);
          } else
            ((l = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(l)),
              (l[tn] = t),
              (t.stateNode = l));
        }
        return (st(t), null);
      case 13:
        if (
          (_e(Ae),
          (l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Me && Et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (df(), Br(), (t.flags |= 98560), (d = !1));
          else if (((d = cs(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!d) throw Error(o(318));
              if (
                ((d = t.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(o(317));
              d[tn] = t;
            } else
              (Br(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (st(t), (d = !1));
          } else (Ut !== null && (cu(Ut), (Ut = null)), (d = !0));
          if (!d) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = i), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ae.current & 1) !== 0
                  ? Qe === 0 && (Qe = 3)
                  : pu())),
            t.updateQueue !== null && (t.flags |= 4),
            st(t),
            null);
      case 4:
        return (
          Gr(),
          Ja(e, t),
          e === null && Bo(t.stateNode.containerInfo),
          st(t),
          null
        );
      case 10:
        return (Ra(t.type._context), st(t), null);
      case 17:
        return (ht(t.type) && is(), st(t), null);
      case 19:
        if ((_e(Ae), (d = t.memoizedState), d === null)) return (st(t), null);
        if (((l = (t.flags & 128) !== 0), (v = d.rendering), v === null))
          if (l) ri(d, !1);
          else {
            if (Qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((v = vs(e)), v !== null)) {
                  for (
                    t.flags |= 128,
                      ri(d, !1),
                      l = v.updateQueue,
                      l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = i,
                      i = t.child;
                    i !== null;
                  )
                    ((d = i),
                      (e = l),
                      (d.flags &= 14680066),
                      (v = d.alternate),
                      v === null
                        ? ((d.childLanes = 0),
                          (d.lanes = e),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = v.childLanes),
                          (d.lanes = v.lanes),
                          (d.child = v.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = v.memoizedProps),
                          (d.memoizedState = v.memoizedState),
                          (d.updateQueue = v.updateQueue),
                          (d.type = v.type),
                          (e = v.dependencies),
                          (d.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (i = i.sibling));
                  return (Te(Ae, (Ae.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            d.tail !== null &&
              ze() > Jr &&
              ((t.flags |= 128), (l = !0), ri(d, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = vs(v)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (i = e.updateQueue),
                i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                ri(d, !0),
                d.tail === null &&
                  d.tailMode === "hidden" &&
                  !v.alternate &&
                  !Me)
              )
                return (st(t), null);
            } else
              2 * ze() - d.renderingStartTime > Jr &&
                i !== 1073741824 &&
                ((t.flags |= 128), (l = !0), ri(d, !1), (t.lanes = 4194304));
          d.isBackwards
            ? ((v.sibling = t.child), (t.child = v))
            : ((i = d.last),
              i !== null ? (i.sibling = v) : (t.child = v),
              (d.last = v));
        }
        return d.tail !== null
          ? ((t = d.tail),
            (d.rendering = t),
            (d.tail = t.sibling),
            (d.renderingStartTime = ze()),
            (t.sibling = null),
            (i = Ae.current),
            Te(Ae, l ? (i & 1) | 2 : i & 1),
            t)
          : (st(t), null);
      case 22:
      case 23:
        return (
          fu(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && (t.mode & 1) !== 0
            ? (bt & 1073741824) !== 0 &&
              (st(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : st(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Ow(e, t) {
    switch ((Sa(t), t.tag)) {
      case 1:
        return (
          ht(t.type) && is(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Gr(),
          _e(pt),
          _e(ot),
          Ma(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (_a(t), null);
      case 13:
        if (
          (_e(Ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Br();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (_e(Ae), null);
      case 4:
        return (Gr(), null);
      case 10:
        return (Ra(t.type._context), null);
      case 22:
      case 23:
        return (fu(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ks = !1,
    lt = !1,
    Tw = typeof WeakSet == "function" ? WeakSet : Set,
    ie = null;
  function Xr(e, t) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (l) {
          Fe(e, t, l);
        }
      else i.current = null;
  }
  function eu(e, t, i) {
    try {
      i();
    } catch (l) {
      Fe(e, t, l);
    }
  }
  var up = !1;
  function Nw(e, t) {
    if (((fa = Bi), (e = $d()), oa(e))) {
      if ("selectionStart" in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var l = i.getSelection && i.getSelection();
          if (l && l.rangeCount !== 0) {
            i = l.anchorNode;
            var u = l.anchorOffset,
              d = l.focusNode;
            l = l.focusOffset;
            try {
              (i.nodeType, d.nodeType);
            } catch {
              i = null;
              break e;
            }
            var v = 0,
              b = -1,
              O = -1,
              L = 0,
              K = 0,
              q = e,
              B = null;
            t: for (;;) {
              for (
                var re;
                q !== i || (u !== 0 && q.nodeType !== 3) || (b = v + u),
                  q !== d || (l !== 0 && q.nodeType !== 3) || (O = v + l),
                  q.nodeType === 3 && (v += q.nodeValue.length),
                  (re = q.firstChild) !== null;
              )
                ((B = q), (q = re));
              for (;;) {
                if (q === e) break t;
                if (
                  (B === i && ++L === u && (b = v),
                  B === d && ++K === l && (O = v),
                  (re = q.nextSibling) !== null)
                )
                  break;
                ((q = B), (B = q.parentNode));
              }
              q = re;
            }
            i = b === -1 || O === -1 ? null : { start: b, end: O };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      pa = { focusedElem: e, selectionRange: i }, Bi = !1, ie = t;
      ie !== null;
    )
      if (
        ((t = ie), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (ie = e));
      else
        for (; ie !== null; ) {
          t = ie;
          try {
            var se = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (se !== null) {
                    var ae = se.memoizedProps,
                      $e = se.memoizedState,
                      M = t.stateNode,
                      j = M.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ae : Vt(t.type, ae),
                        $e,
                      );
                    M.__reactInternalSnapshotBeforeUpdate = j;
                  }
                  break;
                case 3:
                  var A = t.stateNode.containerInfo;
                  A.nodeType === 1
                    ? (A.textContent = "")
                    : A.nodeType === 9 &&
                      A.documentElement &&
                      A.removeChild(A.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (Z) {
            Fe(t, t.return, Z);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (ie = e));
            break;
          }
          ie = t.return;
        }
    return ((se = up), (up = !1), se);
  }
  function oi(e, t, i) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var u = (l = l.next);
      do {
        if ((u.tag & e) === e) {
          var d = u.destroy;
          ((u.destroy = void 0), d !== void 0 && eu(t, i, d));
        }
        u = u.next;
      } while (u !== l);
    }
  }
  function Ps(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var i = (t = t.next);
      do {
        if ((i.tag & e) === e) {
          var l = i.create;
          i.destroy = l();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function tu(e) {
    var t = e.ref;
    if (t !== null) {
      var i = e.stateNode;
      (e.tag, (e = i), typeof t == "function" ? t(e) : (t.current = e));
    }
  }
  function cp(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), cp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[tn],
          delete t[Ko],
          delete t[ga],
          delete t[fw],
          delete t[pw])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function dp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function fp(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || dp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function nu(e, t, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, t)
            : i.insertBefore(e, t)
          : (i.nodeType === 8
              ? ((t = i.parentNode), t.insertBefore(e, i))
              : ((t = i), t.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = rs)));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (nu(e, t, i), e = e.sibling; e !== null; )
        (nu(e, t, i), (e = e.sibling));
  }
  function ru(e, t, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (ru(e, t, i), e = e.sibling; e !== null; )
        (ru(e, t, i), (e = e.sibling));
  }
  var tt = null,
    Ht = !1;
  function Qn(e, t, i) {
    for (i = i.child; i !== null; ) (pp(e, t, i), (i = i.sibling));
  }
  function pp(e, t, i) {
    if (en && typeof en.onCommitFiberUnmount == "function")
      try {
        en.onCommitFiberUnmount(zi, i);
      } catch {}
    switch (i.tag) {
      case 5:
        lt || Xr(i, t);
      case 6:
        var l = tt,
          u = Ht;
        ((tt = null),
          Qn(e, t, i),
          (tt = l),
          (Ht = u),
          tt !== null &&
            (Ht
              ? ((e = tt),
                (i = i.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(i)
                  : e.removeChild(i))
              : tt.removeChild(i.stateNode)));
        break;
      case 18:
        tt !== null &&
          (Ht
            ? ((e = tt),
              (i = i.stateNode),
              e.nodeType === 8
                ? va(e.parentNode, i)
                : e.nodeType === 1 && va(e, i),
              Io(e))
            : va(tt, i.stateNode));
        break;
      case 4:
        ((l = tt),
          (u = Ht),
          (tt = i.stateNode.containerInfo),
          (Ht = !0),
          Qn(e, t, i),
          (tt = l),
          (Ht = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !lt &&
          ((l = i.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          u = l = l.next;
          do {
            var d = u,
              v = d.destroy;
            ((d = d.tag),
              v !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && eu(i, t, v),
              (u = u.next));
          } while (u !== l);
        }
        Qn(e, t, i);
        break;
      case 1:
        if (
          !lt &&
          (Xr(i, t),
          (l = i.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            ((l.props = i.memoizedProps),
              (l.state = i.memoizedState),
              l.componentWillUnmount());
          } catch (b) {
            Fe(i, t, b);
          }
        Qn(e, t, i);
        break;
      case 21:
        Qn(e, t, i);
        break;
      case 22:
        i.mode & 1
          ? ((lt = (l = lt) || i.memoizedState !== null), Qn(e, t, i), (lt = l))
          : Qn(e, t, i);
        break;
      default:
        Qn(e, t, i);
    }
  }
  function hp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      (i === null && (i = e.stateNode = new Tw()),
        t.forEach(function (l) {
          var u = zw.bind(null, e, l);
          i.has(l) || (i.add(l), l.then(u, u));
        }));
    }
  }
  function Wt(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var u = i[l];
        try {
          var d = e,
            v = t,
            b = v;
          e: for (; b !== null; ) {
            switch (b.tag) {
              case 5:
                ((tt = b.stateNode), (Ht = !1));
                break e;
              case 3:
                ((tt = b.stateNode.containerInfo), (Ht = !0));
                break e;
              case 4:
                ((tt = b.stateNode.containerInfo), (Ht = !0));
                break e;
            }
            b = b.return;
          }
          if (tt === null) throw Error(o(160));
          (pp(d, v, u), (tt = null), (Ht = !1));
          var O = u.alternate;
          (O !== null && (O.return = null), (u.return = null));
        } catch (L) {
          Fe(u, t, L);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (mp(t, e), (t = t.sibling));
  }
  function mp(e, t) {
    var i = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Wt(t, e), on(e), l & 4)) {
          try {
            (oi(3, e, e.return), Ps(3, e));
          } catch (ae) {
            Fe(e, e.return, ae);
          }
          try {
            oi(5, e, e.return);
          } catch (ae) {
            Fe(e, e.return, ae);
          }
        }
        break;
      case 1:
        (Wt(t, e), on(e), l & 512 && i !== null && Xr(i, i.return));
        break;
      case 5:
        if (
          (Wt(t, e),
          on(e),
          l & 512 && i !== null && Xr(i, i.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            V(u, "");
          } catch (ae) {
            Fe(e, e.return, ae);
          }
        }
        if (l & 4 && ((u = e.stateNode), u != null)) {
          var d = e.memoizedProps,
            v = i !== null ? i.memoizedProps : d,
            b = e.type,
            O = e.updateQueue;
          if (((e.updateQueue = null), O !== null))
            try {
              (b === "input" &&
                d.type === "radio" &&
                d.name != null &&
                ji(u, d),
                ko(b, v));
              var L = ko(b, d);
              for (v = 0; v < O.length; v += 2) {
                var K = O[v],
                  q = O[v + 1];
                K === "style"
                  ? Jt(u, q)
                  : K === "dangerouslySetInnerHTML"
                    ? Mi(u, q)
                    : K === "children"
                      ? V(u, q)
                      : D(u, K, q, L);
              }
              switch (b) {
                case "input":
                  So(u, d);
                  break;
                case "textarea":
                  Xt(u, d);
                  break;
                case "select":
                  var B = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!d.multiple;
                  var re = d.value;
                  re != null
                    ? _n(u, !!d.multiple, re, !1)
                    : B !== !!d.multiple &&
                      (d.defaultValue != null
                        ? _n(u, !!d.multiple, d.defaultValue, !0)
                        : _n(u, !!d.multiple, d.multiple ? [] : "", !1));
              }
              u[Ko] = d;
            } catch (ae) {
              Fe(e, e.return, ae);
            }
        }
        break;
      case 6:
        if ((Wt(t, e), on(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((u = e.stateNode), (d = e.memoizedProps));
          try {
            u.nodeValue = d;
          } catch (ae) {
            Fe(e, e.return, ae);
          }
        }
        break;
      case 3:
        if (
          (Wt(t, e), on(e), l & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Io(t.containerInfo);
          } catch (ae) {
            Fe(e, e.return, ae);
          }
        break;
      case 4:
        (Wt(t, e), on(e));
        break;
      case 13:
        (Wt(t, e),
          on(e),
          (u = e.child),
          u.flags & 8192 &&
            ((d = u.memoizedState !== null),
            (u.stateNode.isHidden = d),
            !d ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (su = ze())),
          l & 4 && hp(e));
        break;
      case 22:
        if (
          ((K = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((lt = (L = lt) || K), Wt(t, e), (lt = L)) : Wt(t, e),
          on(e),
          l & 8192)
        ) {
          if (
            ((L = e.memoizedState !== null),
            (e.stateNode.isHidden = L) && !K && (e.mode & 1) !== 0)
          )
            for (ie = e, K = e.child; K !== null; ) {
              for (q = ie = K; ie !== null; ) {
                switch (((B = ie), (re = B.child), B.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    oi(4, B, B.return);
                    break;
                  case 1:
                    Xr(B, B.return);
                    var se = B.stateNode;
                    if (typeof se.componentWillUnmount == "function") {
                      ((l = B), (i = B.return));
                      try {
                        ((t = l),
                          (se.props = t.memoizedProps),
                          (se.state = t.memoizedState),
                          se.componentWillUnmount());
                      } catch (ae) {
                        Fe(l, i, ae);
                      }
                    }
                    break;
                  case 5:
                    Xr(B, B.return);
                    break;
                  case 22:
                    if (B.memoizedState !== null) {
                      yp(q);
                      continue;
                    }
                }
                re !== null ? ((re.return = B), (ie = re)) : yp(q);
              }
              K = K.sibling;
            }
          e: for (K = null, q = e; ; ) {
            if (q.tag === 5) {
              if (K === null) {
                K = q;
                try {
                  ((u = q.stateNode),
                    L
                      ? ((d = u.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none"))
                      : ((b = q.stateNode),
                        (O = q.memoizedProps.style),
                        (v =
                          O != null && O.hasOwnProperty("display")
                            ? O.display
                            : null),
                        (b.style.display = Ye("display", v))));
                } catch (ae) {
                  Fe(e, e.return, ae);
                }
              }
            } else if (q.tag === 6) {
              if (K === null)
                try {
                  q.stateNode.nodeValue = L ? "" : q.memoizedProps;
                } catch (ae) {
                  Fe(e, e.return, ae);
                }
            } else if (
              ((q.tag !== 22 && q.tag !== 23) ||
                q.memoizedState === null ||
                q === e) &&
              q.child !== null
            ) {
              ((q.child.return = q), (q = q.child));
              continue;
            }
            if (q === e) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === e) break e;
              (K === q && (K = null), (q = q.return));
            }
            (K === q && (K = null),
              (q.sibling.return = q.return),
              (q = q.sibling));
          }
        }
        break;
      case 19:
        (Wt(t, e), on(e), l & 4 && hp(e));
        break;
      case 21:
        break;
      default:
        (Wt(t, e), on(e));
    }
  }
  function on(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (dp(i)) {
              var l = i;
              break e;
            }
            i = i.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (V(u, ""), (l.flags &= -33));
            var d = fp(e);
            ru(e, d, u);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo,
              b = fp(e);
            nu(e, b, v);
            break;
          default:
            throw Error(o(161));
        }
      } catch (O) {
        Fe(e, e.return, O);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function jw(e, t, i) {
    ((ie = e), vp(e));
  }
  function vp(e, t, i) {
    for (var l = (e.mode & 1) !== 0; ie !== null; ) {
      var u = ie,
        d = u.child;
      if (u.tag === 22 && l) {
        var v = u.memoizedState !== null || ks;
        if (!v) {
          var b = u.alternate,
            O = (b !== null && b.memoizedState !== null) || lt;
          b = ks;
          var L = lt;
          if (((ks = v), (lt = O) && !L))
            for (ie = u; ie !== null; )
              ((v = ie),
                (O = v.child),
                v.tag === 22 && v.memoizedState !== null
                  ? wp(u)
                  : O !== null
                    ? ((O.return = v), (ie = O))
                    : wp(u));
          for (; d !== null; ) ((ie = d), vp(d), (d = d.sibling));
          ((ie = u), (ks = b), (lt = L));
        }
        gp(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && d !== null
          ? ((d.return = u), (ie = d))
          : gp(e);
    }
  }
  function gp(e) {
    for (; ie !== null; ) {
      var t = ie;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                lt || Ps(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !lt)
                  if (i === null) l.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type
                        ? i.memoizedProps
                        : Vt(t.type, i.memoizedProps);
                    l.componentDidUpdate(
                      u,
                      i.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var d = t.updateQueue;
                d !== null && yf(t, d, l);
                break;
              case 3:
                var v = t.updateQueue;
                if (v !== null) {
                  if (((i = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        i = t.child.stateNode;
                        break;
                      case 1:
                        i = t.child.stateNode;
                    }
                  yf(t, v, i);
                }
                break;
              case 5:
                var b = t.stateNode;
                if (i === null && t.flags & 4) {
                  i = b;
                  var O = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      O.autoFocus && i.focus();
                      break;
                    case "img":
                      O.src && (i.src = O.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var L = t.alternate;
                  if (L !== null) {
                    var K = L.memoizedState;
                    if (K !== null) {
                      var q = K.dehydrated;
                      q !== null && Io(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          lt || (t.flags & 512 && tu(t));
        } catch (B) {
          Fe(t, t.return, B);
        }
      }
      if (t === e) {
        ie = null;
        break;
      }
      if (((i = t.sibling), i !== null)) {
        ((i.return = t.return), (ie = i));
        break;
      }
      ie = t.return;
    }
  }
  function yp(e) {
    for (; ie !== null; ) {
      var t = ie;
      if (t === e) {
        ie = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        ((i.return = t.return), (ie = i));
        break;
      }
      ie = t.return;
    }
  }
  function wp(e) {
    for (; ie !== null; ) {
      var t = ie;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Ps(4, t);
            } catch (O) {
              Fe(t, i, O);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var u = t.return;
              try {
                l.componentDidMount();
              } catch (O) {
                Fe(t, u, O);
              }
            }
            var d = t.return;
            try {
              tu(t);
            } catch (O) {
              Fe(t, d, O);
            }
            break;
          case 5:
            var v = t.return;
            try {
              tu(t);
            } catch (O) {
              Fe(t, v, O);
            }
        }
      } catch (O) {
        Fe(t, t.return, O);
      }
      if (t === e) {
        ie = null;
        break;
      }
      var b = t.sibling;
      if (b !== null) {
        ((b.return = t.return), (ie = b));
        break;
      }
      ie = t.return;
    }
  }
  var _w = Math.ceil,
    Rs = _.ReactCurrentDispatcher,
    ou = _.ReactCurrentOwner,
    At = _.ReactCurrentBatchConfig,
    Ce = 0,
    Ze = null,
    Ve = null,
    nt = 0,
    bt = 0,
    Zr = Un(0),
    Qe = 0,
    ii = null,
    gr = 0,
    Os = 0,
    iu = 0,
    si = null,
    vt = null,
    su = 0,
    Jr = 1 / 0,
    xn = null,
    Ts = !1,
    lu = null,
    Kn = null,
    Ns = !1,
    qn = null,
    js = 0,
    li = 0,
    au = null,
    _s = -1,
    Ds = 0;
  function ct() {
    return (Ce & 6) !== 0 ? ze() : _s !== -1 ? _s : (_s = ze());
  }
  function Gn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ce & 2) !== 0 && nt !== 0
        ? nt & -nt
        : mw.transition !== null
          ? (Ds === 0 && (Ds = dd()), Ds)
          : ((e = Pe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : xd(e.type))),
            e);
  }
  function Bt(e, t, i, l) {
    if (50 < li) throw ((li = 0), (au = null), Error(o(185)));
    (jo(e, i, l),
      ((Ce & 2) === 0 || e !== Ze) &&
        (e === Ze && ((Ce & 2) === 0 && (Os |= i), Qe === 4 && Yn(e, nt)),
        gt(e, l),
        i === 1 &&
          Ce === 0 &&
          (t.mode & 1) === 0 &&
          ((Jr = ze() + 500), ls && Hn())));
  }
  function gt(e, t) {
    var i = e.callbackNode;
    my(e, t);
    var l = Vi(e, e === Ze ? nt : 0);
    if (l === 0)
      (i !== null && ad(i), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((i != null && ad(i), t === 1))
        (e.tag === 0 ? hw(Sp.bind(null, e)) : sf(Sp.bind(null, e)),
          cw(function () {
            (Ce & 6) === 0 && Hn();
          }),
          (i = null));
      else {
        switch (fd(l)) {
          case 1:
            i = Ul;
            break;
          case 4:
            i = ud;
            break;
          case 16:
            i = Fi;
            break;
          case 536870912:
            i = cd;
            break;
          default:
            i = Fi;
        }
        i = Tp(i, xp.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = i));
    }
  }
  function xp(e, t) {
    if (((_s = -1), (Ds = 0), (Ce & 6) !== 0)) throw Error(o(327));
    var i = e.callbackNode;
    if (eo() && e.callbackNode !== i) return null;
    var l = Vi(e, e === Ze ? nt : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = Ms(e, l);
    else {
      t = l;
      var u = Ce;
      Ce |= 2;
      var d = Ep();
      (Ze !== e || nt !== t) && ((xn = null), (Jr = ze() + 500), wr(e, t));
      do
        try {
          Aw();
          break;
        } catch (b) {
          Cp(e, b);
        }
      while (!0);
      (Pa(),
        (Rs.current = d),
        (Ce = u),
        Ve !== null ? (t = 0) : ((Ze = null), (nt = 0), (t = Qe)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = Vl(e)), u !== 0 && ((l = u), (t = uu(e, u)))),
        t === 1)
      )
        throw ((i = ii), wr(e, 0), Yn(e, l), gt(e, ze()), i);
      if (t === 6) Yn(e, l);
      else {
        if (
          ((u = e.current.alternate),
          (l & 30) === 0 &&
            !Dw(u) &&
            ((t = Ms(e, l)),
            t === 2 && ((d = Vl(e)), d !== 0 && ((l = d), (t = uu(e, d)))),
            t === 1))
        )
          throw ((i = ii), wr(e, 0), Yn(e, l), gt(e, ze()), i);
        switch (((e.finishedWork = u), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            xr(e, vt, xn);
            break;
          case 3:
            if (
              (Yn(e, l),
              (l & 130023424) === l && ((t = su + 500 - ze()), 10 < t))
            ) {
              if (Vi(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & l) !== l)) {
                (ct(), (e.pingedLanes |= e.suspendedLanes & u));
                break;
              }
              e.timeoutHandle = ma(xr.bind(null, e, vt, xn), t);
              break;
            }
            xr(e, vt, xn);
            break;
          case 4:
            if ((Yn(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, u = -1; 0 < l; ) {
              var v = 31 - zt(l);
              ((d = 1 << v), (v = t[v]), v > u && (u = v), (l &= ~d));
            }
            if (
              ((l = u),
              (l = ze() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                    ? 480
                    : 1080 > l
                      ? 1080
                      : 1920 > l
                        ? 1920
                        : 3e3 > l
                          ? 3e3
                          : 4320 > l
                            ? 4320
                            : 1960 * _w(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = ma(xr.bind(null, e, vt, xn), l);
              break;
            }
            xr(e, vt, xn);
            break;
          case 5:
            xr(e, vt, xn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return (gt(e, ze()), e.callbackNode === i ? xp.bind(null, e) : null);
  }
  function uu(e, t) {
    var i = si;
    return (
      e.current.memoizedState.isDehydrated && (wr(e, t).flags |= 256),
      (e = Ms(e, t)),
      e !== 2 && ((t = vt), (vt = i), t !== null && cu(t)),
      e
    );
  }
  function cu(e) {
    vt === null ? (vt = e) : vt.push.apply(vt, e);
  }
  function Dw(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var l = 0; l < i.length; l++) {
            var u = i[l],
              d = u.getSnapshot;
            u = u.value;
            try {
              if (!$t(d(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
        ((i.return = t), (t = i));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Yn(e, t) {
    for (
      t &= ~iu,
        t &= ~Os,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var i = 31 - zt(t),
        l = 1 << i;
      ((e[i] = -1), (t &= ~l));
    }
  }
  function Sp(e) {
    if ((Ce & 6) !== 0) throw Error(o(327));
    eo();
    var t = Vi(e, 0);
    if ((t & 1) === 0) return (gt(e, ze()), null);
    var i = Ms(e, t);
    if (e.tag !== 0 && i === 2) {
      var l = Vl(e);
      l !== 0 && ((t = l), (i = uu(e, l)));
    }
    if (i === 1) throw ((i = ii), wr(e, 0), Yn(e, t), gt(e, ze()), i);
    if (i === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      xr(e, vt, xn),
      gt(e, ze()),
      null
    );
  }
  function du(e, t) {
    var i = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      ((Ce = i), Ce === 0 && ((Jr = ze() + 500), ls && Hn()));
    }
  }
  function yr(e) {
    qn !== null && qn.tag === 0 && (Ce & 6) === 0 && eo();
    var t = Ce;
    Ce |= 1;
    var i = At.transition,
      l = Pe;
    try {
      if (((At.transition = null), (Pe = 1), e)) return e();
    } finally {
      ((Pe = l), (At.transition = i), (Ce = t), (Ce & 6) === 0 && Hn());
    }
  }
  function fu() {
    ((bt = Zr.current), _e(Zr));
  }
  function wr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), uw(i)), Ve !== null))
      for (i = Ve.return; i !== null; ) {
        var l = i;
        switch ((Sa(l), l.tag)) {
          case 1:
            ((l = l.type.childContextTypes), l != null && is());
            break;
          case 3:
            (Gr(), _e(pt), _e(ot), Ma());
            break;
          case 5:
            _a(l);
            break;
          case 4:
            Gr();
            break;
          case 13:
            _e(Ae);
            break;
          case 19:
            _e(Ae);
            break;
          case 10:
            Ra(l.type._context);
            break;
          case 22:
          case 23:
            fu();
        }
        i = i.return;
      }
    if (
      ((Ze = e),
      (Ve = e = Xn(e.current, null)),
      (nt = bt = t),
      (Qe = 0),
      (ii = null),
      (iu = Os = gr = 0),
      (vt = si = null),
      hr !== null)
    ) {
      for (t = 0; t < hr.length; t++)
        if (((i = hr[t]), (l = i.interleaved), l !== null)) {
          i.interleaved = null;
          var u = l.next,
            d = i.pending;
          if (d !== null) {
            var v = d.next;
            ((d.next = u), (l.next = v));
          }
          i.pending = l;
        }
      hr = null;
    }
    return e;
  }
  function Cp(e, t) {
    do {
      var i = Ve;
      try {
        if ((Pa(), (gs.current = Ss), ys)) {
          for (var l = Ie.memoizedState; l !== null; ) {
            var u = l.queue;
            (u !== null && (u.pending = null), (l = l.next));
          }
          ys = !1;
        }
        if (
          ((vr = 0),
          (Xe = Be = Ie = null),
          (Jo = !1),
          (ei = 0),
          (ou.current = null),
          i === null || i.return === null)
        ) {
          ((Qe = 1), (ii = t), (Ve = null));
          break;
        }
        e: {
          var d = e,
            v = i.return,
            b = i,
            O = t;
          if (
            ((t = nt),
            (b.flags |= 32768),
            O !== null && typeof O == "object" && typeof O.then == "function")
          ) {
            var L = O,
              K = b,
              q = K.tag;
            if ((K.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var B = K.alternate;
              B
                ? ((K.updateQueue = B.updateQueue),
                  (K.memoizedState = B.memoizedState),
                  (K.lanes = B.lanes))
                : ((K.updateQueue = null), (K.memoizedState = null));
            }
            var re = Kf(v);
            if (re !== null) {
              ((re.flags &= -257),
                qf(re, v, b, d, t),
                re.mode & 1 && Qf(d, L, t),
                (t = re),
                (O = L));
              var se = t.updateQueue;
              if (se === null) {
                var ae = new Set();
                (ae.add(O), (t.updateQueue = ae));
              } else se.add(O);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Qf(d, L, t), pu());
                break e;
              }
              O = Error(o(426));
            }
          } else if (Me && b.mode & 1) {
            var $e = Kf(v);
            if ($e !== null) {
              (($e.flags & 65536) === 0 && ($e.flags |= 256),
                qf($e, v, b, d, t),
                ba(Yr(O, b)));
              break e;
            }
          }
          ((d = O = Yr(O, b)),
            Qe !== 4 && (Qe = 2),
            si === null ? (si = [d]) : si.push(d),
            (d = v));
          do {
            switch (d.tag) {
              case 3:
                ((d.flags |= 65536), (t &= -t), (d.lanes |= t));
                var M = Wf(d, O, t);
                gf(d, M);
                break e;
              case 1:
                b = O;
                var j = d.type,
                  A = d.stateNode;
                if (
                  (d.flags & 128) === 0 &&
                  (typeof j.getDerivedStateFromError == "function" ||
                    (A !== null &&
                      typeof A.componentDidCatch == "function" &&
                      (Kn === null || !Kn.has(A))))
                ) {
                  ((d.flags |= 65536), (t &= -t), (d.lanes |= t));
                  var Z = Bf(d, b, t);
                  gf(d, Z);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        kp(i);
      } catch (ue) {
        ((t = ue), Ve === i && i !== null && (Ve = i = i.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ep() {
    var e = Rs.current;
    return ((Rs.current = Ss), e === null ? Ss : e);
  }
  function pu() {
    ((Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
      Ze === null ||
        ((gr & 268435455) === 0 && (Os & 268435455) === 0) ||
        Yn(Ze, nt));
  }
  function Ms(e, t) {
    var i = Ce;
    Ce |= 2;
    var l = Ep();
    (Ze !== e || nt !== t) && ((xn = null), wr(e, t));
    do
      try {
        Mw();
        break;
      } catch (u) {
        Cp(e, u);
      }
    while (!0);
    if ((Pa(), (Ce = i), (Rs.current = l), Ve !== null)) throw Error(o(261));
    return ((Ze = null), (nt = 0), Qe);
  }
  function Mw() {
    for (; Ve !== null; ) bp(Ve);
  }
  function Aw() {
    for (; Ve !== null && !sy(); ) bp(Ve);
  }
  function bp(e) {
    var t = Op(e.alternate, e, bt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? kp(e) : (Ve = t),
      (ou.current = null));
  }
  function kp(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((i = Rw(i, t, bt)), i !== null)) {
          Ve = i;
          return;
        }
      } else {
        if (((i = Ow(i, t)), i !== null)) {
          ((i.flags &= 32767), (Ve = i));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Qe = 6), (Ve = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ve = t;
        return;
      }
      Ve = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function xr(e, t, i) {
    var l = Pe,
      u = At.transition;
    try {
      ((At.transition = null), (Pe = 1), Iw(e, t, i, l));
    } finally {
      ((At.transition = u), (Pe = l));
    }
    return null;
  }
  function Iw(e, t, i, l) {
    do eo();
    while (qn !== null);
    if ((Ce & 6) !== 0) throw Error(o(327));
    i = e.finishedWork;
    var u = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
      throw Error(o(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var d = i.lanes | i.childLanes;
    if (
      (vy(e, d),
      e === Ze && ((Ve = Ze = null), (nt = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Ns ||
        ((Ns = !0),
        Tp(Fi, function () {
          return (eo(), null);
        })),
      (d = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || d)
    ) {
      ((d = At.transition), (At.transition = null));
      var v = Pe;
      Pe = 1;
      var b = Ce;
      ((Ce |= 4),
        (ou.current = null),
        Nw(e, i),
        mp(i, e),
        nw(pa),
        (Bi = !!fa),
        (pa = fa = null),
        (e.current = i),
        jw(i),
        ly(),
        (Ce = b),
        (Pe = v),
        (At.transition = d));
    } else e.current = i;
    if (
      (Ns && ((Ns = !1), (qn = e), (js = u)),
      (d = e.pendingLanes),
      d === 0 && (Kn = null),
      cy(i.stateNode),
      gt(e, ze()),
      t !== null)
    )
      for (l = e.onRecoverableError, i = 0; i < t.length; i++)
        ((u = t[i]), l(u.value, { componentStack: u.stack, digest: u.digest }));
    if (Ts) throw ((Ts = !1), (e = lu), (lu = null), e);
    return (
      (js & 1) !== 0 && e.tag !== 0 && eo(),
      (d = e.pendingLanes),
      (d & 1) !== 0 ? (e === au ? li++ : ((li = 0), (au = e))) : (li = 0),
      Hn(),
      null
    );
  }
  function eo() {
    if (qn !== null) {
      var e = fd(js),
        t = At.transition,
        i = Pe;
      try {
        if (((At.transition = null), (Pe = 16 > e ? 16 : e), qn === null))
          var l = !1;
        else {
          if (((e = qn), (qn = null), (js = 0), (Ce & 6) !== 0))
            throw Error(o(331));
          var u = Ce;
          for (Ce |= 4, ie = e.current; ie !== null; ) {
            var d = ie,
              v = d.child;
            if ((ie.flags & 16) !== 0) {
              var b = d.deletions;
              if (b !== null) {
                for (var O = 0; O < b.length; O++) {
                  var L = b[O];
                  for (ie = L; ie !== null; ) {
                    var K = ie;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        oi(8, K, d);
                    }
                    var q = K.child;
                    if (q !== null) ((q.return = K), (ie = q));
                    else
                      for (; ie !== null; ) {
                        K = ie;
                        var B = K.sibling,
                          re = K.return;
                        if ((cp(K), K === L)) {
                          ie = null;
                          break;
                        }
                        if (B !== null) {
                          ((B.return = re), (ie = B));
                          break;
                        }
                        ie = re;
                      }
                  }
                }
                var se = d.alternate;
                if (se !== null) {
                  var ae = se.child;
                  if (ae !== null) {
                    se.child = null;
                    do {
                      var $e = ae.sibling;
                      ((ae.sibling = null), (ae = $e));
                    } while (ae !== null);
                  }
                }
                ie = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && v !== null)
              ((v.return = d), (ie = v));
            else
              e: for (; ie !== null; ) {
                if (((d = ie), (d.flags & 2048) !== 0))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oi(9, d, d.return);
                  }
                var M = d.sibling;
                if (M !== null) {
                  ((M.return = d.return), (ie = M));
                  break e;
                }
                ie = d.return;
              }
          }
          var j = e.current;
          for (ie = j; ie !== null; ) {
            v = ie;
            var A = v.child;
            if ((v.subtreeFlags & 2064) !== 0 && A !== null)
              ((A.return = v), (ie = A));
            else
              e: for (v = j; ie !== null; ) {
                if (((b = ie), (b.flags & 2048) !== 0))
                  try {
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ps(9, b);
                    }
                  } catch (ue) {
                    Fe(b, b.return, ue);
                  }
                if (b === v) {
                  ie = null;
                  break e;
                }
                var Z = b.sibling;
                if (Z !== null) {
                  ((Z.return = b.return), (ie = Z));
                  break e;
                }
                ie = b.return;
              }
          }
          if (
            ((Ce = u),
            Hn(),
            en && typeof en.onPostCommitFiberRoot == "function")
          )
            try {
              en.onPostCommitFiberRoot(zi, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        ((Pe = i), (At.transition = t));
      }
    }
    return !1;
  }
  function Pp(e, t, i) {
    ((t = Yr(i, t)),
      (t = Wf(e, t, 1)),
      (e = Bn(e, t, 1)),
      (t = ct()),
      e !== null && (jo(e, 1, t), gt(e, t)));
  }
  function Fe(e, t, i) {
    if (e.tag === 3) Pp(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Pp(t, e, i);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Kn === null || !Kn.has(l)))
          ) {
            ((e = Yr(i, e)),
              (e = Bf(t, e, 1)),
              (t = Bn(t, e, 1)),
              (e = ct()),
              t !== null && (jo(t, 1, e), gt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Lw(e, t, i) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (t = ct()),
      (e.pingedLanes |= e.suspendedLanes & i),
      Ze === e &&
        (nt & i) === i &&
        (Qe === 4 || (Qe === 3 && (nt & 130023424) === nt && 500 > ze() - su)
          ? wr(e, 0)
          : (iu |= i)),
      gt(e, t));
  }
  function Rp(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ui), (Ui <<= 1), (Ui & 130023424) === 0 && (Ui = 4194304)));
    var i = ct();
    ((e = gn(e, t)), e !== null && (jo(e, t, i), gt(e, i)));
  }
  function Fw(e) {
    var t = e.memoizedState,
      i = 0;
    (t !== null && (i = t.retryLane), Rp(e, i));
  }
  function zw(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    (l !== null && l.delete(t), Rp(e, i));
  }
  var Op;
  Op = function (e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || pt.current) mt = !0;
      else {
        if ((e.lanes & i) === 0 && (t.flags & 128) === 0)
          return ((mt = !1), Pw(e, t, i));
        mt = (e.flags & 131072) !== 0;
      }
    else ((mt = !1), Me && (t.flags & 1048576) !== 0 && lf(t, us, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        (bs(e, t), (e = t.pendingProps));
        var u = Vr(t, ot.current);
        (qr(t, i), (u = La(null, t, l, e, u, i)));
        var d = Fa();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ht(l) ? ((d = !0), ss(t)) : (d = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              Na(t),
              (u.updater = Cs),
              (t.stateNode = u),
              (u._reactInternals = t),
              Wa(t, l, e, i),
              (t = qa(null, t, l, !0, d, i)))
            : ((t.tag = 0), Me && d && xa(t), ut(null, t, u, i), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (bs(e, t),
            (e = t.pendingProps),
            (u = l._init),
            (l = u(l._payload)),
            (t.type = l),
            (u = t.tag = Uw(l)),
            (e = Vt(l, e)),
            u)
          ) {
            case 0:
              t = Ka(null, t, l, e, i);
              break e;
            case 1:
              t = ep(null, t, l, e, i);
              break e;
            case 11:
              t = Gf(null, t, l, e, i);
              break e;
            case 14:
              t = Yf(null, t, l, Vt(l.type, e), i);
              break e;
          }
          throw Error(o(306, l, ""));
        }
        return t;
      case 0:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Vt(l, u)),
          Ka(e, t, l, u, i)
        );
      case 1:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Vt(l, u)),
          ep(e, t, l, u, i)
        );
      case 3:
        e: {
          if ((tp(t), e === null)) throw Error(o(387));
          ((l = t.pendingProps),
            (d = t.memoizedState),
            (u = d.element),
            vf(e, t),
            ms(t, l, null, i));
          var v = t.memoizedState;
          if (((l = v.element), d.isDehydrated))
            if (
              ((d = {
                element: l,
                isDehydrated: !1,
                cache: v.cache,
                pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                transitions: v.transitions,
              }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              ((u = Yr(Error(o(423)), t)), (t = np(e, t, l, i, u)));
              break e;
            } else if (l !== u) {
              ((u = Yr(Error(o(424)), t)), (t = np(e, t, l, i, u)));
              break e;
            } else
              for (
                Et = $n(t.stateNode.containerInfo.firstChild),
                  Ct = t,
                  Me = !0,
                  Ut = null,
                  i = hf(t, null, l, i),
                  t.child = i;
                i;
              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((Br(), l === u)) {
              t = wn(e, t, i);
              break e;
            }
            ut(e, t, l, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          wf(t),
          e === null && Ea(t),
          (l = t.type),
          (u = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (v = u.children),
          ha(l, u) ? (v = null) : d !== null && ha(l, d) && (t.flags |= 32),
          Jf(e, t),
          ut(e, t, v, i),
          t.child
        );
      case 6:
        return (e === null && Ea(t), null);
      case 13:
        return rp(e, t, i);
      case 4:
        return (
          ja(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Qr(t, null, l, i)) : ut(e, t, l, i),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Vt(l, u)),
          Gf(e, t, l, u, i)
        );
      case 7:
        return (ut(e, t, t.pendingProps, i), t.child);
      case 8:
        return (ut(e, t, t.pendingProps.children, i), t.child);
      case 12:
        return (ut(e, t, t.pendingProps.children, i), t.child);
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (u = t.pendingProps),
            (d = t.memoizedProps),
            (v = u.value),
            Te(fs, l._currentValue),
            (l._currentValue = v),
            d !== null)
          )
            if ($t(d.value, v)) {
              if (d.children === u.children && !pt.current) {
                t = wn(e, t, i);
                break e;
              }
            } else
              for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                var b = d.dependencies;
                if (b !== null) {
                  v = d.child;
                  for (var O = b.firstContext; O !== null; ) {
                    if (O.context === l) {
                      if (d.tag === 1) {
                        ((O = yn(-1, i & -i)), (O.tag = 2));
                        var L = d.updateQueue;
                        if (L !== null) {
                          L = L.shared;
                          var K = L.pending;
                          (K === null
                            ? (O.next = O)
                            : ((O.next = K.next), (K.next = O)),
                            (L.pending = O));
                        }
                      }
                      ((d.lanes |= i),
                        (O = d.alternate),
                        O !== null && (O.lanes |= i),
                        Oa(d.return, i, t),
                        (b.lanes |= i));
                      break;
                    }
                    O = O.next;
                  }
                } else if (d.tag === 10) v = d.type === t.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((v = d.return), v === null)) throw Error(o(341));
                  ((v.lanes |= i),
                    (b = v.alternate),
                    b !== null && (b.lanes |= i),
                    Oa(v, i, t),
                    (v = d.sibling));
                } else v = d.child;
                if (v !== null) v.return = d;
                else
                  for (v = d; v !== null; ) {
                    if (v === t) {
                      v = null;
                      break;
                    }
                    if (((d = v.sibling), d !== null)) {
                      ((d.return = v.return), (v = d));
                      break;
                    }
                    v = v.return;
                  }
                d = v;
              }
          (ut(e, t, u.children, i), (t = t.child));
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (l = t.pendingProps.children),
          qr(t, i),
          (u = Dt(u)),
          (l = l(u)),
          (t.flags |= 1),
          ut(e, t, l, i),
          t.child
        );
      case 14:
        return (
          (l = t.type),
          (u = Vt(l, t.pendingProps)),
          (u = Vt(l.type, u)),
          Yf(e, t, l, u, i)
        );
      case 15:
        return Xf(e, t, t.type, t.pendingProps, i);
      case 17:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : Vt(l, u)),
          bs(e, t),
          (t.tag = 1),
          ht(l) ? ((e = !0), ss(t)) : (e = !1),
          qr(t, i),
          Vf(t, l, u),
          Wa(t, l, u, i),
          qa(null, t, l, !0, e, i)
        );
      case 19:
        return ip(e, t, i);
      case 22:
        return Zf(e, t, i);
    }
    throw Error(o(156, t.tag));
  };
  function Tp(e, t) {
    return ld(e, t);
  }
  function $w(e, t, i, l) {
    ((this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function It(e, t, i, l) {
    return new $w(e, t, i, l);
  }
  function hu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Uw(e) {
    if (typeof e == "function") return hu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Y)) return 11;
      if (e === le) return 14;
    }
    return 2;
  }
  function Xn(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = It(e.tag, t, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = t),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (i.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function As(e, t, i, l, u, d) {
    var v = 2;
    if (((l = e), typeof e == "function")) hu(e) && (v = 1);
    else if (typeof e == "string") v = 5;
    else
      e: switch (e) {
        case $:
          return Sr(i.children, u, d, t);
        case U:
          ((v = 8), (u |= 8));
          break;
        case G:
          return (
            (e = It(12, i, t, u | 2)),
            (e.elementType = G),
            (e.lanes = d),
            e
          );
        case ne:
          return (
            (e = It(13, i, t, u)),
            (e.elementType = ne),
            (e.lanes = d),
            e
          );
        case te:
          return (
            (e = It(19, i, t, u)),
            (e.elementType = te),
            (e.lanes = d),
            e
          );
        case oe:
          return Is(i, u, d, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case W:
                v = 10;
                break e;
              case ce:
                v = 9;
                break e;
              case Y:
                v = 11;
                break e;
              case le:
                v = 14;
                break e;
              case Q:
                ((v = 16), (l = null));
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = It(v, i, t, u)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = d),
      t
    );
  }
  function Sr(e, t, i, l) {
    return ((e = It(7, e, l, t)), (e.lanes = i), e);
  }
  function Is(e, t, i, l) {
    return (
      (e = It(22, e, l, t)),
      (e.elementType = oe),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function mu(e, t, i) {
    return ((e = It(6, e, null, t)), (e.lanes = i), e);
  }
  function vu(e, t, i) {
    return (
      (t = It(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Vw(e, t, i, l, u) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Hl(0)),
      (this.expirationTimes = Hl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Hl(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null));
  }
  function gu(e, t, i, l, u, d, v, b, O) {
    return (
      (e = new Vw(e, t, i, b, O)),
      t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
      (d = It(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (d.memoizedState = {
        element: l,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Na(d),
      e
    );
  }
  function Hw(e, t, i) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: F,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: i,
    };
  }
  function Np(e) {
    if (!e) return Vn;
    e = e._reactInternals;
    e: {
      if (ur(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ht(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (ht(i)) return rf(e, i, t);
    }
    return t;
  }
  function jp(e, t, i, l, u, d, v, b, O) {
    return (
      (e = gu(i, l, !0, e, u, d, v, b, O)),
      (e.context = Np(null)),
      (i = e.current),
      (l = ct()),
      (u = Gn(i)),
      (d = yn(l, u)),
      (d.callback = t ?? null),
      Bn(i, d, u),
      (e.current.lanes = u),
      jo(e, u, l),
      gt(e, l),
      e
    );
  }
  function Ls(e, t, i, l) {
    var u = t.current,
      d = ct(),
      v = Gn(u);
    return (
      (i = Np(i)),
      t.context === null ? (t.context = i) : (t.pendingContext = i),
      (t = yn(d, v)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = Bn(u, t, v)),
      e !== null && (Bt(e, u, v, d), hs(e, u, v)),
      v
    );
  }
  function Fs(e) {
    return (
      (e = e.current),
      e.child ? (e.child.tag === 5, e.child.stateNode) : null
    );
  }
  function _p(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function yu(e, t) {
    (_p(e, t), (e = e.alternate) && _p(e, t));
  }
  function Ww() {
    return null;
  }
  var Dp =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function wu(e) {
    this._internalRoot = e;
  }
  ((zs.prototype.render = wu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Ls(e, t, null, null);
    }),
    (zs.prototype.unmount = wu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (yr(function () {
            Ls(null, e, null, null);
          }),
            (t[pn] = null));
        }
      }));
  function zs(e) {
    this._internalRoot = e;
  }
  zs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = md();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < Ln.length && t !== 0 && t < Ln[i].priority; i++);
      (Ln.splice(i, 0, e), i === 0 && yd(e));
    }
  };
  function xu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function $s(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Mp() {}
  function Bw(e, t, i, l, u) {
    if (u) {
      if (typeof l == "function") {
        var d = l;
        l = function () {
          var L = Fs(v);
          d.call(L);
        };
      }
      var v = jp(t, l, e, 0, null, !1, !1, "", Mp);
      return (
        (e._reactRootContainer = v),
        (e[pn] = v.current),
        Bo(e.nodeType === 8 ? e.parentNode : e),
        yr(),
        v
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof l == "function") {
      var b = l;
      l = function () {
        var L = Fs(O);
        b.call(L);
      };
    }
    var O = gu(e, 0, !1, null, null, !1, !1, "", Mp);
    return (
      (e._reactRootContainer = O),
      (e[pn] = O.current),
      Bo(e.nodeType === 8 ? e.parentNode : e),
      yr(function () {
        Ls(t, O, i, l);
      }),
      O
    );
  }
  function Us(e, t, i, l, u) {
    var d = i._reactRootContainer;
    if (d) {
      var v = d;
      if (typeof u == "function") {
        var b = u;
        u = function () {
          var O = Fs(v);
          b.call(O);
        };
      }
      Ls(t, v, e, u);
    } else v = Bw(i, t, e, u, l);
    return Fs(v);
  }
  ((pd = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = No(t.pendingLanes);
          i !== 0 &&
            (Wl(t, i | 1),
            gt(t, ze()),
            (Ce & 6) === 0 && ((Jr = ze() + 500), Hn()));
        }
        break;
      case 13:
        (yr(function () {
          var l = gn(e, 1);
          if (l !== null) {
            var u = ct();
            Bt(l, e, 1, u);
          }
        }),
          yu(e, 1));
    }
  }),
    (Bl = function (e) {
      if (e.tag === 13) {
        var t = gn(e, 134217728);
        if (t !== null) {
          var i = ct();
          Bt(t, e, 134217728, i);
        }
        yu(e, 134217728);
      }
    }),
    (hd = function (e) {
      if (e.tag === 13) {
        var t = Gn(e),
          i = gn(e, t);
        if (i !== null) {
          var l = ct();
          Bt(i, e, t, l);
        }
        yu(e, t);
      }
    }),
    (md = function () {
      return Pe;
    }),
    (vd = function (e, t) {
      var i = Pe;
      try {
        return ((Pe = e), t());
      } finally {
        Pe = i;
      }
    }),
    (_r = function (e, t, i) {
      switch (t) {
        case "input":
          if ((So(e, i), (t = i.name), i.type === "radio" && t != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < i.length;
              t++
            ) {
              var l = i[t];
              if (l !== e && l.form === e.form) {
                var u = os(l);
                if (!u) throw Error(o(90));
                (Ft(l), So(l, u));
              }
            }
          }
          break;
        case "textarea":
          Xt(e, i);
          break;
        case "select":
          ((t = i.value), t != null && _n(e, !!i.multiple, t, !1));
      }
    }),
    (ed = du),
    (td = yr));
  var Qw = { usingClientEntryPoint: !1, Events: [qo, $r, os, Zc, Jc, du] },
    ai = {
      findFiberByHostInstance: cr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Kw = {
      bundleType: ai.bundleType,
      version: ai.version,
      rendererPackageName: ai.rendererPackageName,
      rendererConfig: ai.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: _.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = id(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: ai.findFiberByHostInstance || Ww,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vs.isDisabled && Vs.supportsFiber)
      try {
        ((zi = Vs.inject(Kw)), (en = Vs));
      } catch {}
  }
  return (
    (yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qw),
    (yt.createPortal = function (e, t) {
      var i =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!xu(t)) throw Error(o(200));
      return Hw(e, t, null, i);
    }),
    (yt.createRoot = function (e, t) {
      if (!xu(e)) throw Error(o(299));
      var i = !1,
        l = "",
        u = Dp;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = gu(e, 1, !1, null, null, i, !1, l, u)),
        (e[pn] = t.current),
        Bo(e.nodeType === 8 ? e.parentNode : e),
        new wu(t)
      );
    }),
    (yt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return ((e = id(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (yt.flushSync = function (e) {
      return yr(e);
    }),
    (yt.hydrate = function (e, t, i) {
      if (!$s(t)) throw Error(o(200));
      return Us(null, e, t, !0, i);
    }),
    (yt.hydrateRoot = function (e, t, i) {
      if (!xu(e)) throw Error(o(405));
      var l = (i != null && i.hydratedSources) || null,
        u = !1,
        d = "",
        v = Dp;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (u = !0),
          i.identifierPrefix !== void 0 && (d = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (v = i.onRecoverableError)),
        (t = jp(t, null, e, 1, i ?? null, u, !1, d, v)),
        (e[pn] = t.current),
        Bo(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          ((i = l[e]),
            (u = i._getVersion),
            (u = u(i._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [i, u])
              : t.mutableSourceEagerHydrationData.push(i, u));
      return new zs(t);
    }),
    (yt.render = function (e, t, i) {
      if (!$s(t)) throw Error(o(200));
      return Us(null, e, t, !1, i);
    }),
    (yt.unmountComponentAtNode = function (e) {
      if (!$s(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (yr(function () {
            Us(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[pn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (yt.unstable_batchedUpdates = du),
    (yt.unstable_renderSubtreeIntoContainer = function (e, t, i, l) {
      if (!$s(i)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Us(e, t, i, !1, l);
    }),
    (yt.version = "18.3.1-next-f1338f8080-20240426"),
    yt
  );
}
var Bp;
function rm() {
  if (Bp) return bu.exports;
  Bp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (bu.exports = n0()), bu.exports);
}
var Qp;
function r0() {
  if (Qp) return Hs;
  Qp = 1;
  var n = rm();
  return ((Hs.createRoot = n.createRoot), (Hs.hydrateRoot = n.hydrateRoot), Hs);
}
var o0 = r0();
function i0(n, r) {
  if (n instanceof RegExp) return { keys: !1, pattern: n };
  var o,
    s,
    a,
    c,
    f = [],
    p = "",
    m = n.split("/");
  for (m[0] || m.shift(); (a = m.shift()); )
    ((o = a[0]),
      o === "*"
        ? (f.push(o), (p += a[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : o === ":"
          ? ((s = a.indexOf("?", 1)),
            (c = a.indexOf(".", 1)),
            f.push(a.substring(1, ~s ? s : ~c ? c : a.length)),
            (p += ~s && !~c ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~c && (p += (~s ? "?" : "") + "\\" + a.substring(c)))
          : (p += "/" + a));
  return {
    keys: f,
    pattern: new RegExp("^" + p + (r ? "(?=$|/)" : "/?$"), "i"),
  };
}
var h = gl();
const Pr = Yw(h),
  mo = Gw({ __proto__: null, default: Pr }, [h]);
var Ru = { exports: {} },
  Ou = {};
var Kp;
function s0() {
  if (Kp) return Ou;
  Kp = 1;
  var n = gl();
  function r(w, S) {
    return (w === S && (w !== 0 || 1 / w === 1 / S)) || (w !== w && S !== S);
  }
  var o = typeof Object.is == "function" ? Object.is : r,
    s = n.useState,
    a = n.useEffect,
    c = n.useLayoutEffect,
    f = n.useDebugValue;
  function p(w, S) {
    var R = S(),
      P = s({ inst: { value: R, getSnapshot: S } }),
      C = P[0].inst,
      E = P[1];
    return (
      c(
        function () {
          ((C.value = R), (C.getSnapshot = S), m(C) && E({ inst: C }));
        },
        [w, R, S],
      ),
      a(
        function () {
          return (
            m(C) && E({ inst: C }),
            w(function () {
              m(C) && E({ inst: C });
            })
          );
        },
        [w],
      ),
      f(R),
      R
    );
  }
  function m(w) {
    var S = w.getSnapshot;
    w = w.value;
    try {
      var R = S();
      return !o(w, R);
    } catch {
      return !0;
    }
  }
  function x(w, S) {
    return S();
  }
  var y =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? x
      : p;
  return (
    (Ou.useSyncExternalStore =
      n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : y),
    Ou
  );
}
var qp;
function l0() {
  return (qp || ((qp = 1), (Ru.exports = s0())), Ru.exports);
}
var om = l0();
const a0 = mo.useInsertionEffect,
  u0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  c0 = u0 ? h.useLayoutEffect : h.useEffect,
  d0 = a0 || c0,
  im = (n) => {
    const r = h.useRef([n, (...o) => r[0](...o)]).current;
    return (
      d0(() => {
        r[0] = n;
      }),
      r[1]
    );
  },
  f0 = "popstate",
  yc = "pushState",
  wc = "replaceState",
  p0 = "hashchange",
  Gp = [f0, yc, wc, p0],
  h0 = (n) => {
    for (const r of Gp) addEventListener(r, n);
    return () => {
      for (const r of Gp) removeEventListener(r, n);
    };
  },
  sm = (n, r) => om.useSyncExternalStore(h0, n, r),
  Yp = () => location.search,
  m0 = ({ ssrSearch: n } = {}) => sm(Yp, n != null ? () => n : Yp),
  Xp = () => location.pathname,
  v0 = ({ ssrPath: n } = {}) => sm(Xp, n != null ? () => n : Xp),
  g0 = (n, { replace: r = !1, state: o = null } = {}) =>
    history[r ? wc : yc](o, "", n),
  y0 = (n = {}) => [v0(n), g0],
  Zp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Zp] > "u") {
  for (const n of [yc, wc]) {
    const r = history[n];
    history[n] = function () {
      const o = r.apply(this, arguments),
        s = new Event(n);
      return ((s.arguments = arguments), dispatchEvent(s), o);
    };
  }
  Object.defineProperty(window, Zp, { value: !0 });
}
const w0 = (n, r) =>
    r.toLowerCase().indexOf(n.toLowerCase())
      ? "~" + r
      : r.slice(n.length) || "/",
  lm = (n = "") => (n === "/" ? "" : n),
  x0 = (n, r) => (n[0] === "~" ? n.slice(1) : lm(r) + n),
  S0 = (n = "", r) => w0(Jp(lm(n)), Jp(r)),
  Jp = (n) => {
    try {
      return decodeURI(n);
    } catch {
      return n;
    }
  },
  am = {
    hook: y0,
    searchHook: m0,
    parser: i0,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (n) => n,
    aroundNav: (n, r, o) => n(r, o),
  },
  um = h.createContext(am),
  yl = () => h.useContext(um),
  cm = {},
  dm = h.createContext(cm),
  C0 = () => h.useContext(dm),
  xc = (n) => {
    const [r, o] = n.hook(n);
    return [S0(n.base, r), im((s, a) => n.aroundNav(o, x0(s, n.base), a))];
  },
  fm = (n, r, o, s) => {
    const { pattern: a, keys: c } =
        r instanceof RegExp ? { keys: !1, pattern: r } : n(r || "*", s),
      f = a.exec(o) || [],
      [p, ...m] = f;
    return p !== void 0
      ? [
          !0,
          (() => {
            const x =
              c !== !1
                ? Object.fromEntries(c.map((w, S) => [w, m[S]]))
                : f.groups;
            let y = { ...m };
            return (x && Object.assign(y, x), y);
          })(),
          ...(s ? [p] : []),
        ]
      : [!1, null];
  },
  pm = ({ children: n, ...r }) => {
    const o = yl(),
      s = r.hook ? am : o;
    let a = s;
    const [c, f = r.ssrSearch ?? ""] = r.ssrPath?.split("?") ?? [];
    (c && ((r.ssrSearch = f), (r.ssrPath = c)),
      (r.hrefs = r.hrefs ?? r.hook?.hrefs),
      (r.searchHook = r.searchHook ?? r.hook?.searchHook));
    let p = h.useRef({}),
      m = p.current,
      x = m;
    for (let y in s) {
      const w = y === "base" ? s[y] + (r[y] ?? "") : (r[y] ?? s[y]);
      (m === x && w !== x[y] && (p.current = x = { ...x }),
        (x[y] = w),
        (w !== s[y] || w !== a[y]) && (a = x));
    }
    return h.createElement(um.Provider, { value: a, children: n });
  },
  eh = ({ children: n, component: r }, o) =>
    r ? h.createElement(r, { params: o }) : typeof n == "function" ? n(o) : n,
  E0 = (n) => {
    let r = h.useRef(cm);
    const o = r.current;
    return (r.current =
      Object.keys(n).length !== Object.keys(o).length ||
      Object.entries(n).some(([s, a]) => a !== o[s])
        ? n
        : o);
  },
  th = ({ path: n, nest: r, match: o, ...s }) => {
    const a = yl(),
      [c] = xc(a),
      [f, p, m] = o ?? fm(a.parser, n, c, r),
      x = E0({ ...C0(), ...p });
    if (!f) return null;
    const y = m ? h.createElement(pm, { base: m }, eh(s, x)) : eh(s, x);
    return h.createElement(dm.Provider, { value: x, children: y });
  };
h.forwardRef((n, r) => {
  const o = yl(),
    [s, a] = xc(o),
    {
      to: c = "",
      href: f = c,
      onClick: p,
      asChild: m,
      children: x,
      className: y,
      replace: w,
      state: S,
      transition: R,
      ...P
    } = n,
    C = im((k) => {
      k.ctrlKey ||
        k.metaKey ||
        k.altKey ||
        k.shiftKey ||
        k.button !== 0 ||
        (p?.(k), k.defaultPrevented || (k.preventDefault(), a(f, n)));
    }),
    E = o.hrefs(f[0] === "~" ? f.slice(1) : o.base + f, o);
  return m && h.isValidElement(x)
    ? h.cloneElement(x, { onClick: C, href: E })
    : h.createElement("a", {
        ...P,
        onClick: C,
        href: E,
        className: y?.call ? y(s === f) : y,
        children: x,
        ref: r,
      });
});
const hm = (n) =>
    Array.isArray(n)
      ? n.flatMap((r) => hm(r && r.type === h.Fragment ? r.props.children : r))
      : [n],
  b0 = ({ children: n, location: r }) => {
    const o = yl(),
      [s] = xc(o);
    for (const a of hm(n)) {
      let c = 0;
      if (
        h.isValidElement(a) &&
        (c = fm(o.parser, a.props.path, r || s, a.props.nest))[0]
      )
        return h.cloneElement(a, { match: c });
    }
    return null;
  },
  mi = { v: [] },
  nh = () => mi.v.forEach((n) => n()),
  k0 = (n) => (
    mi.v.push(n) === 1 && addEventListener("hashchange", nh),
    () => {
      ((mi.v = mi.v.filter((r) => r !== n)),
        mi.v.length || removeEventListener("hashchange", nh));
    }
  ),
  P0 = () => "/" + location.hash.replace(/^#?\/?/, ""),
  R0 = (n, { state: r = null, replace: o = !1 } = {}) => {
    const s = location.href,
      [a, c] = n.replace(/^#?\/?/, "").split("?"),
      f = new URL(location.href);
    ((f.hash = `/${a}`), c && (f.search = c));
    const p = f.href;
    o ? history.replaceState(r, "", p) : history.pushState(r, "", p);
    const m =
      typeof HashChangeEvent < "u"
        ? new HashChangeEvent("hashchange", { oldURL: s, newURL: p })
        : new Event("hashchange", { detail: { oldURL: s, newURL: p } });
    dispatchEvent(m);
  },
  mm = ({ ssrPath: n = "/" } = {}) => [
    om.useSyncExternalStore(k0, P0, () => n),
    R0,
  ];
mm.hrefs = (n) => "#" + n;
var vo = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(n), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  O0 = class extends vo {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (n) => {
          if (typeof window < "u" && window.addEventListener) {
            const r = () => n();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      ((this.#n = n),
        this.#t?.(),
        (this.#t = n((r) => {
          typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
        })));
    }
    setFocused(n) {
      this.#e !== n && ((this.#e = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((r) => {
        r(n);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Sc = new O0(),
  T0 = {
    setTimeout: (n, r) => setTimeout(n, r),
    clearTimeout: (n) => clearTimeout(n),
    setInterval: (n, r) => setInterval(n, r),
    clearInterval: (n) => clearInterval(n),
  },
  N0 = class {
    #e = T0;
    #t = !1;
    setTimeoutProvider(n) {
      this.#e = n;
    }
    setTimeout(n, r) {
      return this.#e.setTimeout(n, r);
    }
    clearTimeout(n) {
      this.#e.clearTimeout(n);
    }
    setInterval(n, r) {
      return this.#e.setInterval(n, r);
    }
    clearInterval(n) {
      this.#e.clearInterval(n);
    }
  },
  kr = new N0();
function j0(n) {
  setTimeout(n, 0);
}
var _0 = typeof window > "u" || "Deno" in globalThis;
function dt() {}
function D0(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function Qu(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function vm(n, r) {
  return Math.max(n + (r || 0) - Date.now(), 0);
}
function tr(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function Pt(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function rh(n, r) {
  const {
    type: o = "all",
    exact: s,
    fetchStatus: a,
    predicate: c,
    queryKey: f,
    stale: p,
  } = n;
  if (f) {
    if (s) {
      if (r.queryHash !== Cc(f, r.options)) return !1;
    } else if (!ho(r.queryKey, f)) return !1;
  }
  if (o !== "all") {
    const m = r.isActive();
    if ((o === "active" && !m) || (o === "inactive" && m)) return !1;
  }
  return !(
    (typeof p == "boolean" && r.isStale() !== p) ||
    (a && a !== r.state.fetchStatus) ||
    (c && !c(r))
  );
}
function oh(n, r) {
  const { exact: o, status: s, predicate: a, mutationKey: c } = n;
  if (c) {
    if (!r.options.mutationKey) return !1;
    if (o) {
      if (Rr(r.options.mutationKey) !== Rr(c)) return !1;
    } else if (!ho(r.options.mutationKey, c)) return !1;
  }
  return !((s && r.state.status !== s) || (a && !a(r)));
}
function Cc(n, r) {
  return (r?.queryKeyHashFn || Rr)(n);
}
function Rr(n) {
  return JSON.stringify(n, (r, o) =>
    Ku(o)
      ? Object.keys(o)
          .sort()
          .reduce((s, a) => ((s[a] = o[a]), s), {})
      : o,
  );
}
function ho(n, r) {
  if (n === r) return !0;
  if (typeof n != typeof r) return !1;
  if (n && r && typeof n == "object" && typeof r == "object") {
    if (Array.isArray(n) && Array.isArray(r)) {
      for (let s = 0; s < r.length; s++) if (!ho(n[s], r[s])) return !1;
      return !0;
    }
    const o = Object.keys(r);
    for (const s of o) if (!ho(n[s], r[s])) return !1;
    return !0;
  }
  return !1;
}
var M0 = Object.prototype.hasOwnProperty;
function gm(n, r, o = 0) {
  if (n === r) return n;
  if (o > 500) return r;
  const s = ih(n) && ih(r);
  if (!s && !(Ku(n) && Ku(r))) return r;
  const c = (s ? n : Object.keys(n)).length,
    f = s ? r : Object.keys(r),
    p = f.length,
    m = s ? new Array(p) : {};
  let x = 0;
  for (let y = 0; y < p; y++) {
    const w = s ? y : f[y],
      S = n[w],
      R = r[w];
    if (S === R) {
      ((m[w] = S), (s ? y < c : M0.call(n, w)) && x++);
      continue;
    }
    if (
      S === null ||
      R === null ||
      typeof S != "object" ||
      typeof R != "object"
    ) {
      m[w] = R;
      continue;
    }
    const P = gm(S, R, o + 1);
    ((m[w] = P), P === S && x++);
  }
  return c === p && x === c ? n : m;
}
function ul(n, r) {
  if (!r || Object.keys(n).length !== Object.keys(r).length) return !1;
  for (const o in n) if (n[o] !== r[o]) return !1;
  return !0;
}
function ih(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Ku(n) {
  if (!sh(n)) return !1;
  const r = n.constructor;
  if (r === void 0) return !0;
  const o = r.prototype;
  return !(
    !sh(o) ||
    !o.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function sh(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function A0(n) {
  return new Promise((r) => {
    kr.setTimeout(r, n);
  });
}
function qu(n, r, o) {
  return typeof o.structuralSharing == "function"
    ? o.structuralSharing(n, r)
    : o.structuralSharing !== !1
      ? gm(n, r)
      : r;
}
function I0(n, r, o = 0) {
  const s = [...n, r];
  return o && s.length > o ? s.slice(1) : s;
}
function L0(n, r, o = 0) {
  const s = [r, ...n];
  return o && s.length > o ? s.slice(0, -1) : s;
}
var Ec = Symbol();
function ym(n, r) {
  return !n.queryFn && r?.initialPromise
    ? () => r.initialPromise
    : !n.queryFn || n.queryFn === Ec
      ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
      : n.queryFn;
}
function bc(n, r) {
  return typeof n == "function" ? n(...r) : !!n;
}
function F0(n, r, o) {
  let s = !1,
    a;
  return (
    Object.defineProperty(n, "signal", {
      enumerable: !0,
      get: () => (
        (a ??= r()),
        s ||
          ((s = !0),
          a.aborted ? o() : a.addEventListener("abort", o, { once: !0 })),
        a
      ),
    }),
    n
  );
}
var Si = (() => {
  let n = () => _0;
  return {
    isServer() {
      return n();
    },
    setIsServer(r) {
      n = r;
    },
  };
})();
function Gu() {
  let n, r;
  const o = new Promise((a, c) => {
    ((n = a), (r = c));
  });
  ((o.status = "pending"), o.catch(() => {}));
  function s(a) {
    (Object.assign(o, a), delete o.resolve, delete o.reject);
  }
  return (
    (o.resolve = (a) => {
      (s({ status: "fulfilled", value: a }), n(a));
    }),
    (o.reject = (a) => {
      (s({ status: "rejected", reason: a }), r(a));
    }),
    o
  );
}
var z0 = j0;
function $0() {
  let n = [],
    r = 0,
    o = (p) => {
      p();
    },
    s = (p) => {
      p();
    },
    a = z0;
  const c = (p) => {
      r
        ? n.push(p)
        : a(() => {
            o(p);
          });
    },
    f = () => {
      const p = n;
      ((n = []),
        p.length &&
          a(() => {
            s(() => {
              p.forEach((m) => {
                o(m);
              });
            });
          }));
    };
  return {
    batch: (p) => {
      let m;
      r++;
      try {
        m = p();
      } finally {
        (r--, r || f());
      }
      return m;
    },
    batchCalls:
      (p) =>
      (...m) => {
        c(() => {
          p(...m);
        });
      },
    schedule: c,
    setNotifyFunction: (p) => {
      o = p;
    },
    setBatchNotifyFunction: (p) => {
      s = p;
    },
    setScheduler: (p) => {
      a = p;
    },
  };
}
var qe = $0(),
  U0 = class extends vo {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (n) => {
          if (typeof window < "u" && window.addEventListener) {
            const r = () => n(!0),
              o = () => n(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", o, !1),
              () => {
                (window.removeEventListener("online", r),
                  window.removeEventListener("offline", o));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      ((this.#n = n), this.#t?.(), (this.#t = n(this.setOnline.bind(this))));
    }
    setOnline(n) {
      this.#e !== n &&
        ((this.#e = n),
        this.listeners.forEach((o) => {
          o(n);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  cl = new U0();
function V0(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function wm(n) {
  return (n ?? "online") === "online" ? cl.isOnline() : !0;
}
var Yu = class extends Error {
  constructor(n) {
    (super("CancelledError"),
      (this.revert = n?.revert),
      (this.silent = n?.silent));
  }
};
function xm(n) {
  let r = !1,
    o = 0,
    s;
  const a = Gu(),
    c = () => a.status !== "pending",
    f = (C) => {
      if (!c()) {
        const E = new Yu(C);
        (S(E), n.onCancel?.(E));
      }
    },
    p = () => {
      r = !0;
    },
    m = () => {
      r = !1;
    },
    x = () =>
      Sc.isFocused() &&
      (n.networkMode === "always" || cl.isOnline()) &&
      n.canRun(),
    y = () => wm(n.networkMode) && n.canRun(),
    w = (C) => {
      c() || (s?.(), a.resolve(C));
    },
    S = (C) => {
      c() || (s?.(), a.reject(C));
    },
    R = () =>
      new Promise((C) => {
        ((s = (E) => {
          (c() || x()) && C(E);
        }),
          n.onPause?.());
      }).then(() => {
        ((s = void 0), c() || n.onContinue?.());
      }),
    P = () => {
      if (c()) return;
      let C;
      const E = o === 0 ? n.initialPromise : void 0;
      try {
        C = E ?? n.fn();
      } catch (k) {
        C = Promise.reject(k);
      }
      Promise.resolve(C)
        .then(w)
        .catch((k) => {
          if (c()) return;
          const N = n.retry ?? (Si.isServer() ? 0 : 3),
            D = n.retryDelay ?? V0,
            _ = typeof D == "function" ? D(o, k) : D,
            I =
              N === !0 ||
              (typeof N == "number" && o < N) ||
              (typeof N == "function" && N(o, k));
          if (r || !I) {
            S(k);
            return;
          }
          (o++,
            n.onFail?.(o, k),
            A0(_)
              .then(() => (x() ? void 0 : R()))
              .then(() => {
                r ? S(k) : P();
              }));
        });
    };
  return {
    promise: a,
    status: () => a.status,
    cancel: f,
    continue: () => (s?.(), a),
    cancelRetry: p,
    continueRetry: m,
    canStart: y,
    start: () => (y() ? P() : R().then(P), a),
  };
}
var Sm = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      Qu(this.gcTime) &&
        (this.#e = kr.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(n) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      n ?? (Si.isServer() ? 1 / 0 : 300 * 1e3),
    );
  }
  clearGcTimeout() {
    this.#e !== void 0 && (kr.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function H0(n) {
  return {
    onFetch: (r, o) => {
      const s = r.options,
        a = r.fetchOptions?.meta?.fetchMore?.direction,
        c = r.state.data?.pages || [],
        f = r.state.data?.pageParams || [];
      let p = { pages: [], pageParams: [] },
        m = 0;
      const x = async () => {
        let y = !1;
        const w = (P) => {
            F0(
              P,
              () => r.signal,
              () => (y = !0),
            );
          },
          S = ym(r.options, r.fetchOptions),
          R = async (P, C, E) => {
            if (y) return Promise.reject(r.signal.reason);
            if (C == null && P.pages.length) return Promise.resolve(P);
            const N = (() => {
                const F = {
                  client: r.client,
                  queryKey: r.queryKey,
                  pageParam: C,
                  direction: E ? "backward" : "forward",
                  meta: r.options.meta,
                };
                return (w(F), F);
              })(),
              D = await S(N),
              { maxPages: _ } = r.options,
              I = E ? L0 : I0;
            return {
              pages: I(P.pages, D, _),
              pageParams: I(P.pageParams, C, _),
            };
          };
        if (a && c.length) {
          const P = a === "backward",
            C = P ? W0 : lh,
            E = { pages: c, pageParams: f },
            k = C(s, E);
          p = await R(E, k, P);
        } else {
          const P = n ?? c.length;
          do {
            const C = m === 0 ? (f[0] ?? s.initialPageParam) : lh(s, p);
            if (m > 0 && C == null) break;
            ((p = await R(p, C)), m++);
          } while (m < P);
        }
        return p;
      };
      r.options.persister
        ? (r.fetchFn = () =>
            r.options.persister?.(
              x,
              {
                client: r.client,
                queryKey: r.queryKey,
                meta: r.options.meta,
                signal: r.signal,
              },
              o,
            ))
        : (r.fetchFn = x);
    },
  };
}
function lh(n, { pages: r, pageParams: o }) {
  const s = r.length - 1;
  return r.length > 0 ? n.getNextPageParam(r[s], r, o[s], o) : void 0;
}
function W0(n, { pages: r, pageParams: o }) {
  return r.length > 0 ? n.getPreviousPageParam?.(r[0], r, o[0], o) : void 0;
}
var B0 = class extends Sm {
  #e;
  #t;
  #n;
  #r;
  #i;
  #o;
  #l;
  #s;
  constructor(n) {
    (super(),
      (this.#s = !1),
      (this.#l = n.defaultOptions),
      this.setOptions(n.options),
      (this.observers = []),
      (this.#i = n.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = n.queryKey),
      (this.queryHash = n.queryHash),
      (this.#t = uh(this.options)),
      (this.state = n.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#o?.promise;
  }
  setOptions(n) {
    if (
      ((this.options = { ...this.#l, ...n }),
      n?._type && (this.#e = n._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      const r = uh(this.options);
      r.data !== void 0 &&
        (this.setState(ah(r.data, r.dataUpdatedAt)), (this.#t = r));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.#r.remove(this);
  }
  setData(n, r) {
    const o = qu(this.state.data, n, this.options);
    return (
      this.#a({
        data: o,
        type: "success",
        dataUpdatedAt: r?.updatedAt,
        manual: r?.manual,
      }),
      o
    );
  }
  setState(n) {
    this.#a({ type: "setState", state: n });
  }
  cancel(n) {
    const r = this.#o?.promise;
    return (this.#o?.cancel(n), r ? r.then(dt).catch(dt) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((n) => Pt(n.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Ec || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0
      ? this.observers.some((n) => tr(n.options.staleTime, this) === "static")
      : !1;
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((n) => n.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(n = 0) {
    return this.state.data === void 0
      ? !0
      : n === "static"
        ? !1
        : this.state.isInvalidated
          ? !0
          : !vm(this.state.dataUpdatedAt, n);
  }
  onFocus() {
    (this.observers
      .find((r) => r.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#o?.continue());
  }
  onOnline() {
    (this.observers
      .find((r) => r.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#o?.continue());
  }
  addObserver(n) {
    this.observers.includes(n) ||
      (this.observers.push(n),
      this.clearGcTimeout(),
      this.#r.notify({ type: "observerAdded", query: this, observer: n }));
  }
  removeObserver(n) {
    this.observers.includes(n) &&
      ((this.observers = this.observers.filter((r) => r !== n)),
      this.observers.length ||
        (this.#o &&
          (this.#s || this.#c()
            ? this.#o.cancel({ revert: !0 })
            : this.#o.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: "observerRemoved", query: this, observer: n }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return (
      this.state.fetchStatus === "paused" && this.state.status === "pending"
    );
  }
  invalidate() {
    this.state.isInvalidated || this.#a({ type: "invalidate" });
  }
  async fetch(n, r) {
    if (this.state.fetchStatus !== "idle" && this.#o?.status() !== "rejected") {
      if (this.state.data !== void 0 && r?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#o) return (this.#o.continueRetry(), this.#o.promise);
    }
    if ((n && this.setOptions(n), !this.options.queryFn)) {
      const m = this.observers.find((x) => x.options.queryFn);
      m && this.setOptions(m.options);
    }
    const o = new AbortController(),
      s = (m) => {
        Object.defineProperty(m, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), o.signal),
        });
      },
      a = () => {
        const m = ym(this.options, r),
          y = (() => {
            const w = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (s(w), w);
          })();
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(m, y, this) : m(y)
        );
      },
      f = (() => {
        const m = {
          fetchOptions: r,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: a,
        };
        return (s(m), m);
      })();
    ((this.#e === "infinite"
      ? H0(this.options.pages)
      : this.options.behavior
    )?.onFetch(f, this),
      (this.#n = this.state),
      (this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !== f.fetchOptions?.meta) &&
        this.#a({ type: "fetch", meta: f.fetchOptions?.meta }),
      (this.#o = xm({
        initialPromise: r?.initialPromise,
        fn: f.fetchFn,
        onCancel: (m) => {
          (m instanceof Yu &&
            m.revert &&
            this.setState({ ...this.#n, fetchStatus: "idle" }),
            o.abort());
        },
        onFail: (m, x) => {
          this.#a({ type: "failed", failureCount: m, error: x });
        },
        onPause: () => {
          this.#a({ type: "pause" });
        },
        onContinue: () => {
          this.#a({ type: "continue" });
        },
        retry: f.options.retry,
        retryDelay: f.options.retryDelay,
        networkMode: f.options.networkMode,
        canRun: () => !0,
      })));
    try {
      const m = await this.#o.start();
      if (m === void 0) throw new Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(m),
        this.#r.config.onSuccess?.(m, this),
        this.#r.config.onSettled?.(m, this.state.error, this),
        m
      );
    } catch (m) {
      if (m instanceof Yu) {
        if (m.silent) return this.#o.promise;
        if (m.revert) {
          if (this.state.data === void 0) throw m;
          return this.state.data;
        }
      }
      throw (
        this.#a({ type: "error", error: m }),
        this.#r.config.onError?.(m, this),
        this.#r.config.onSettled?.(this.state.data, m, this),
        m
      );
    } finally {
      this.scheduleGc();
    }
  }
  #a(n) {
    const r = (o) => {
      switch (n.type) {
        case "failed":
          return {
            ...o,
            fetchFailureCount: n.failureCount,
            fetchFailureReason: n.error,
          };
        case "pause":
          return { ...o, fetchStatus: "paused" };
        case "continue":
          return { ...o, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...o,
            ...Cm(o.data, this.options),
            fetchMeta: n.meta ?? null,
          };
        case "success":
          const s = {
            ...o,
            ...ah(n.data, n.dataUpdatedAt),
            dataUpdateCount: o.dataUpdateCount + 1,
            ...(!n.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = n.manual ? s : void 0), s);
        case "error":
          const a = n.error;
          return {
            ...o,
            error: a,
            errorUpdateCount: o.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: o.fetchFailureCount + 1,
            fetchFailureReason: a,
            fetchStatus: "idle",
            status: "error",
            isInvalidated: !0,
          };
        case "invalidate":
          return { ...o, isInvalidated: !0 };
        case "setState":
          return { ...o, ...n.state };
      }
    };
    ((this.state = r(this.state)),
      qe.batch(() => {
        (this.observers.forEach((o) => {
          o.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: "updated", action: n }));
      }));
  }
};
function Cm(n, r) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: wm(r.networkMode) ? "fetching" : "paused",
    ...(n === void 0 && { error: null, status: "pending" }),
  };
}
function ah(n, r) {
  return {
    data: n,
    dataUpdatedAt: r ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function uh(n) {
  const r =
      typeof n.initialData == "function" ? n.initialData() : n.initialData,
    o = r !== void 0,
    s = o
      ? typeof n.initialDataUpdatedAt == "function"
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: r,
    dataUpdateCount: 0,
    dataUpdatedAt: o ? (s ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: o ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Q0 = class extends vo {
  constructor(n, r) {
    (super(),
      (this.options = r),
      (this.#e = n),
      (this.#s = null),
      (this.#l = Gu()),
      this.bindMethods(),
      this.setOptions(r));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #o;
  #l;
  #s;
  #c;
  #a;
  #h;
  #d;
  #f;
  #u;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      ch(this.#t, this.options) ? this.#p() : this.updateResult(),
      this.#w());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Xu(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Xu(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#x(),
      this.#S(),
      this.#t.removeObserver(this));
  }
  setOptions(n) {
    const r = this.options,
      o = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(n)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof Pt(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean",
      );
    (this.#C(),
      this.#t.setOptions(this.options),
      r._defaulted &&
        !ul(this.options, r) &&
        this.#e
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this,
          }));
    const s = this.hasListeners();
    (s && dh(this.#t, o, this.options, r) && this.#p(),
      this.updateResult(),
      s &&
        (this.#t !== o ||
          Pt(this.options.enabled, this.#t) !== Pt(r.enabled, this.#t) ||
          tr(this.options.staleTime, this.#t) !== tr(r.staleTime, this.#t)) &&
        this.#v());
    const a = this.#g();
    s &&
      (this.#t !== o ||
        Pt(this.options.enabled, this.#t) !== Pt(r.enabled, this.#t) ||
        a !== this.#u) &&
      this.#y(a);
  }
  getOptimisticResult(n) {
    const r = this.#e.getQueryCache().build(this.#e, n),
      o = this.createResult(r, n);
    return (
      q0(this, o) &&
        ((this.#r = o), (this.#o = this.options), (this.#i = this.#t.state)),
      o
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(n, r) {
    return new Proxy(n, {
      get: (o, s) => (
        this.trackProp(s),
        r?.(s),
        s === "promise" &&
          (this.trackProp("data"),
          !this.options.experimental_prefetchInRender &&
            this.#l.status === "pending" &&
            this.#l.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            )),
        Reflect.get(o, s)
      ),
    });
  }
  trackProp(n) {
    this.#m.add(n);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...n } = {}) {
    return this.fetch({ ...n });
  }
  fetchOptimistic(n) {
    const r = this.#e.defaultQueryOptions(n),
      o = this.#e.getQueryCache().build(this.#e, r);
    return o.fetch().then(() => this.createResult(o, r));
  }
  fetch(n) {
    return this.#p({ ...n, cancelRefetch: n.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #p(n) {
    this.#C();
    let r = this.#t.fetch(this.options, n);
    return (n?.throwOnError || (r = r.catch(dt)), r);
  }
  #v() {
    this.#x();
    const n = tr(this.options.staleTime, this.#t);
    if (Si.isServer() || this.#r.isStale || !Qu(n)) return;
    const o = vm(this.#r.dataUpdatedAt, n) + 1;
    this.#d = kr.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, o);
  }
  #g() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #y(n) {
    (this.#S(),
      (this.#u = n),
      !(
        Si.isServer() ||
        Pt(this.options.enabled, this.#t) === !1 ||
        !Qu(this.#u) ||
        this.#u === 0
      ) &&
        (this.#f = kr.setInterval(() => {
          (this.options.refetchIntervalInBackground || Sc.isFocused()) &&
            this.#p();
        }, this.#u)));
  }
  #w() {
    (this.#v(), this.#y(this.#g()));
  }
  #x() {
    this.#d !== void 0 && (kr.clearTimeout(this.#d), (this.#d = void 0));
  }
  #S() {
    this.#f !== void 0 && (kr.clearInterval(this.#f), (this.#f = void 0));
  }
  createResult(n, r) {
    const o = this.#t,
      s = this.options,
      a = this.#r,
      c = this.#i,
      f = this.#o,
      m = n !== o ? n.state : this.#n,
      { state: x } = n;
    let y = { ...x },
      w = !1,
      S;
    if (r._optimisticResults) {
      const U = this.hasListeners(),
        G = !U && ch(n, r),
        W = U && dh(n, o, r, s);
      ((G || W) && (y = { ...y, ...Cm(x.data, n.options) }),
        r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle"));
    }
    let { error: R, errorUpdatedAt: P, status: C } = y;
    S = y.data;
    let E = !1;
    if (r.placeholderData !== void 0 && S === void 0 && C === "pending") {
      let U;
      (a?.isPlaceholderData && r.placeholderData === f?.placeholderData
        ? ((U = a.data), (E = !0))
        : (U =
            typeof r.placeholderData == "function"
              ? r.placeholderData(this.#h?.state.data, this.#h)
              : r.placeholderData),
        U !== void 0 && ((C = "success"), (S = qu(a?.data, U, r)), (w = !0)));
    }
    if (r.select && S !== void 0 && !E)
      if (a && S === c?.data && r.select === this.#c) S = this.#a;
      else
        try {
          ((this.#c = r.select),
            (S = r.select(S)),
            (S = qu(a?.data, S, r)),
            (this.#a = S),
            (this.#s = null));
        } catch (U) {
          this.#s = U;
        }
    this.#s && ((R = this.#s), (S = this.#a), (P = Date.now()), (C = "error"));
    const k = y.fetchStatus === "fetching",
      N = C === "pending",
      D = C === "error",
      _ = N && k,
      I = S !== void 0,
      $ = {
        status: C,
        fetchStatus: y.fetchStatus,
        isPending: N,
        isSuccess: C === "success",
        isError: D,
        isInitialLoading: _,
        isLoading: _,
        data: S,
        dataUpdatedAt: y.dataUpdatedAt,
        error: R,
        errorUpdatedAt: P,
        failureCount: y.fetchFailureCount,
        failureReason: y.fetchFailureReason,
        errorUpdateCount: y.errorUpdateCount,
        isFetched: n.isFetched(),
        isFetchedAfterMount:
          y.dataUpdateCount > m.dataUpdateCount ||
          y.errorUpdateCount > m.errorUpdateCount,
        isFetching: k,
        isRefetching: k && !N,
        isLoadingError: D && !I,
        isPaused: y.fetchStatus === "paused",
        isPlaceholderData: w,
        isRefetchError: D && I,
        isStale: kc(n, r),
        refetch: this.refetch,
        promise: this.#l,
        isEnabled: Pt(r.enabled, n) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const U = $.data !== void 0,
        G = $.status === "error" && !U,
        W = (ne) => {
          G ? ne.reject($.error) : U && ne.resolve($.data);
        },
        ce = () => {
          const ne = (this.#l = $.promise = Gu());
          W(ne);
        },
        Y = this.#l;
      switch (Y.status) {
        case "pending":
          n.queryHash === o.queryHash && W(Y);
          break;
        case "fulfilled":
          (G || $.data !== Y.value) && ce();
          break;
        case "rejected":
          (!G || $.error !== Y.reason) && ce();
          break;
      }
    }
    return $;
  }
  updateResult() {
    const n = this.#r,
      r = this.createResult(this.#t, this.options);
    if (
      ((this.#i = this.#t.state),
      (this.#o = this.options),
      this.#i.data !== void 0 && (this.#h = this.#t),
      ul(r, n))
    )
      return;
    this.#r = r;
    const o = () => {
      if (!n) return !0;
      const { notifyOnChangeProps: s } = this.options,
        a = typeof s == "function" ? s() : s;
      if (a === "all" || (!a && !this.#m.size)) return !0;
      const c = new Set(a ?? this.#m);
      return (
        this.options.throwOnError && c.add("error"),
        Object.keys(this.#r).some((f) => {
          const p = f;
          return this.#r[p] !== n[p] && c.has(p);
        })
      );
    };
    this.#E({ listeners: o() });
  }
  #C() {
    const n = this.#e.getQueryCache().build(this.#e, this.options);
    if (n === this.#t) return;
    const r = this.#t;
    ((this.#t = n),
      (this.#n = n.state),
      this.hasListeners() && (r?.removeObserver(this), n.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#w());
  }
  #E(n) {
    qe.batch(() => {
      (n.listeners &&
        this.listeners.forEach((r) => {
          r(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: "observerResultsUpdated" }));
    });
  }
};
function K0(n, r) {
  return (
    Pt(r.enabled, n) !== !1 &&
    n.state.data === void 0 &&
    !(n.state.status === "error" && Pt(r.retryOnMount, n) === !1)
  );
}
function ch(n, r) {
  return K0(n, r) || (n.state.data !== void 0 && Xu(n, r, r.refetchOnMount));
}
function Xu(n, r, o) {
  if (Pt(r.enabled, n) !== !1 && tr(r.staleTime, n) !== "static") {
    const s = typeof o == "function" ? o(n) : o;
    return s === "always" || (s !== !1 && kc(n, r));
  }
  return !1;
}
function dh(n, r, o, s) {
  return (
    (n !== r || Pt(s.enabled, n) === !1) &&
    (!o.suspense || n.state.status !== "error") &&
    kc(n, o)
  );
}
function kc(n, r) {
  return Pt(r.enabled, n) !== !1 && n.isStaleByTime(tr(r.staleTime, n));
}
function q0(n, r) {
  return !ul(n.getCurrentResult(), r);
}
var G0 = class extends Sm {
  #e;
  #t;
  #n;
  #r;
  constructor(n) {
    (super(),
      (this.#e = n.client),
      (this.mutationId = n.mutationId),
      (this.#n = n.mutationCache),
      (this.#t = []),
      (this.state = n.state || Em()),
      this.setOptions(n.options),
      this.scheduleGc());
  }
  setOptions(n) {
    ((this.options = n), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(n) {
    this.#t.includes(n) ||
      (this.#t.push(n),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: n }));
  }
  removeObserver(n) {
    ((this.#t = this.#t.filter((r) => r !== n)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: n }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(n) {
    const r = () => {
        this.#i({ type: "continue" });
      },
      o = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = xm({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(n, o)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (c, f) => {
        this.#i({ type: "failed", failureCount: c, error: f });
      },
      onPause: () => {
        this.#i({ type: "pause" });
      },
      onContinue: r,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const s = this.state.status === "pending",
      a = !this.#r.canStart();
    try {
      if (s) r();
      else {
        (this.#i({ type: "pending", variables: n, isPaused: a }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(n, this, o)));
        const f = await this.options.onMutate?.(n, o);
        f !== this.state.context &&
          this.#i({ type: "pending", context: f, variables: n, isPaused: a });
      }
      const c = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(c, n, this.state.context, this, o),
        await this.options.onSuccess?.(c, n, this.state.context, o),
        await this.#n.config.onSettled?.(
          c,
          null,
          this.state.variables,
          this.state.context,
          this,
          o,
        ),
        await this.options.onSettled?.(c, null, n, this.state.context, o),
        this.#i({ type: "success", data: c }),
        c
      );
    } catch (c) {
      try {
        await this.#n.config.onError?.(c, n, this.state.context, this, o);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onError?.(c, n, this.state.context, o);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          c,
          this.state.variables,
          this.state.context,
          this,
          o,
        );
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onSettled?.(void 0, c, n, this.state.context, o);
      } catch (f) {
        Promise.reject(f);
      }
      throw (this.#i({ type: "error", error: c }), c);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(n) {
    const r = (o) => {
      switch (n.type) {
        case "failed":
          return { ...o, failureCount: n.failureCount, failureReason: n.error };
        case "pause":
          return { ...o, isPaused: !0 };
        case "continue":
          return { ...o, isPaused: !1 };
        case "pending":
          return {
            ...o,
            context: n.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: n.isPaused,
            status: "pending",
            variables: n.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...o,
            data: n.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...o,
            data: void 0,
            error: n.error,
            failureCount: o.failureCount + 1,
            failureReason: n.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = r(this.state)),
      qe.batch(() => {
        (this.#t.forEach((o) => {
          o.onMutationUpdate(n);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: n }));
      }));
  }
};
function Em() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Y0 = class extends vo {
  constructor(n = {}) {
    (super(),
      (this.config = n),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(n, r, o) {
    const s = new G0({
      client: n,
      mutationCache: this,
      mutationId: ++this.#n,
      options: n.defaultMutationOptions(r),
      state: o,
    });
    return (this.add(s), s);
  }
  add(n) {
    this.#e.add(n);
    const r = Ws(n);
    if (typeof r == "string") {
      const o = this.#t.get(r);
      o ? o.push(n) : this.#t.set(r, [n]);
    }
    this.notify({ type: "added", mutation: n });
  }
  remove(n) {
    if (this.#e.delete(n)) {
      const r = Ws(n);
      if (typeof r == "string") {
        const o = this.#t.get(r);
        if (o)
          if (o.length > 1) {
            const s = o.indexOf(n);
            s !== -1 && o.splice(s, 1);
          } else o[0] === n && this.#t.delete(r);
      }
    }
    this.notify({ type: "removed", mutation: n });
  }
  canRun(n) {
    const r = Ws(n);
    if (typeof r == "string") {
      const s = this.#t.get(r)?.find((a) => a.state.status === "pending");
      return !s || s === n;
    } else return !0;
  }
  runNext(n) {
    const r = Ws(n);
    return typeof r == "string"
      ? (this.#t
          .get(r)
          ?.find((s) => s !== n && s.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    qe.batch(() => {
      (this.#e.forEach((n) => {
        this.notify({ type: "removed", mutation: n });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(n) {
    const r = { exact: !0, ...n };
    return this.getAll().find((o) => oh(r, o));
  }
  findAll(n = {}) {
    return this.getAll().filter((r) => oh(n, r));
  }
  notify(n) {
    qe.batch(() => {
      this.listeners.forEach((r) => {
        r(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((r) => r.state.isPaused);
    return qe.batch(() => Promise.all(n.map((r) => r.continue().catch(dt))));
  }
};
function Ws(n) {
  return n.options.scope?.id;
}
var X0 = class extends vo {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(r, o) {
      (super(),
        (this.#e = r),
        this.setOptions(o),
        this.bindMethods(),
        this.#i());
    }
    bindMethods() {
      ((this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this)));
    }
    setOptions(r) {
      const o = this.options;
      ((this.options = this.#e.defaultMutationOptions(r)),
        ul(this.options, o) ||
          this.#e
            .getMutationCache()
            .notify({
              type: "observerOptionsUpdated",
              mutation: this.#n,
              observer: this,
            }),
        o?.mutationKey &&
        this.options.mutationKey &&
        Rr(o.mutationKey) !== Rr(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === "pending" &&
            this.#n.setOptions(this.options));
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(r) {
      (this.#i(), this.#o(r));
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      (this.#n?.removeObserver(this), (this.#n = void 0), this.#i(), this.#o());
    }
    mutate(r, o) {
      return (
        (this.#r = o),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(r)
      );
    }
    #i() {
      const r = this.#n?.state ?? Em();
      this.#t = {
        ...r,
        isPending: r.status === "pending",
        isSuccess: r.status === "success",
        isError: r.status === "error",
        isIdle: r.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #o(r) {
      qe.batch(() => {
        if (this.#r && this.hasListeners()) {
          const o = this.#t.variables,
            s = this.#t.context,
            a = {
              client: this.#e,
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          if (r?.type === "success") {
            try {
              this.#r.onSuccess?.(r.data, o, s, a);
            } catch (c) {
              Promise.reject(c);
            }
            try {
              this.#r.onSettled?.(r.data, null, o, s, a);
            } catch (c) {
              Promise.reject(c);
            }
          } else if (r?.type === "error") {
            try {
              this.#r.onError?.(r.error, o, s, a);
            } catch (c) {
              Promise.reject(c);
            }
            try {
              this.#r.onSettled?.(void 0, r.error, o, s, a);
            } catch (c) {
              Promise.reject(c);
            }
          }
        }
        this.listeners.forEach((o) => {
          o(this.#t);
        });
      });
    }
  },
  Z0 = class extends vo {
    constructor(n = {}) {
      (super(), (this.config = n), (this.#e = new Map()));
    }
    #e;
    build(n, r, o) {
      const s = r.queryKey,
        a = r.queryHash ?? Cc(s, r);
      let c = this.get(a);
      return (
        c ||
          ((c = new B0({
            client: n,
            queryKey: s,
            queryHash: a,
            options: n.defaultQueryOptions(r),
            state: o,
            defaultOptions: n.getQueryDefaults(s),
          })),
          this.add(c)),
        c
      );
    }
    add(n) {
      this.#e.has(n.queryHash) ||
        (this.#e.set(n.queryHash, n), this.notify({ type: "added", query: n }));
    }
    remove(n) {
      const r = this.#e.get(n.queryHash);
      r &&
        (n.destroy(),
        r === n && this.#e.delete(n.queryHash),
        this.notify({ type: "removed", query: n }));
    }
    clear() {
      qe.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#e.get(n);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(n) {
      const r = { exact: !0, ...n };
      return this.getAll().find((o) => rh(r, o));
    }
    findAll(n = {}) {
      const r = this.getAll();
      return Object.keys(n).length > 0 ? r.filter((o) => rh(n, o)) : r;
    }
    notify(n) {
      qe.batch(() => {
        this.listeners.forEach((r) => {
          r(n);
        });
      });
    }
    onFocus() {
      qe.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      qe.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  J0 = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #o;
    #l;
    #s;
    constructor(n = {}) {
      ((this.#e = n.queryCache || new Z0()),
        (this.#t = n.mutationCache || new Y0()),
        (this.#n = n.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#o = 0));
    }
    mount() {
      (this.#o++,
        this.#o === 1 &&
          ((this.#l = Sc.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = cl.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#o--,
        this.#o === 0 &&
          (this.#l?.(), (this.#l = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(n) {
      return this.#e.findAll({ ...n, fetchStatus: "fetching" }).length;
    }
    isMutating(n) {
      return this.#t.findAll({ ...n, status: "pending" }).length;
    }
    getQueryData(n) {
      const r = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(r.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const r = this.defaultQueryOptions(n),
        o = this.#e.build(this, r),
        s = o.state.data;
      return s === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale &&
            o.isStaleByTime(tr(r.staleTime, o)) &&
            this.prefetchQuery(r),
          Promise.resolve(s));
    }
    getQueriesData(n) {
      return this.#e.findAll(n).map(({ queryKey: r, state: o }) => {
        const s = o.data;
        return [r, s];
      });
    }
    setQueryData(n, r, o) {
      const s = this.defaultQueryOptions({ queryKey: n }),
        c = this.#e.get(s.queryHash)?.state.data,
        f = D0(r, c);
      if (f !== void 0)
        return this.#e.build(this, s).setData(f, { ...o, manual: !0 });
    }
    setQueriesData(n, r, o) {
      return qe.batch(() =>
        this.#e
          .findAll(n)
          .map(({ queryKey: s }) => [s, this.setQueryData(s, r, o)]),
      );
    }
    getQueryState(n) {
      const r = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(r.queryHash)?.state;
    }
    removeQueries(n) {
      const r = this.#e;
      qe.batch(() => {
        r.findAll(n).forEach((o) => {
          r.remove(o);
        });
      });
    }
    resetQueries(n, r) {
      const o = this.#e;
      return qe.batch(
        () => (
          o.findAll(n).forEach((s) => {
            s.reset();
          }),
          this.refetchQueries({ type: "active", ...n }, r)
        ),
      );
    }
    cancelQueries(n, r = {}) {
      const o = { revert: !0, ...r },
        s = qe.batch(() => this.#e.findAll(n).map((a) => a.cancel(o)));
      return Promise.all(s).then(dt).catch(dt);
    }
    invalidateQueries(n, r = {}) {
      return qe.batch(
        () => (
          this.#e.findAll(n).forEach((o) => {
            o.invalidate();
          }),
          n?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...n, type: n?.refetchType ?? n?.type ?? "active" },
                r,
              )
        ),
      );
    }
    refetchQueries(n, r = {}) {
      const o = { ...r, cancelRefetch: r.cancelRefetch ?? !0 },
        s = qe.batch(() =>
          this.#e
            .findAll(n)
            .filter((a) => !a.isDisabled() && !a.isStatic())
            .map((a) => {
              let c = a.fetch(void 0, o);
              return (
                o.throwOnError || (c = c.catch(dt)),
                a.state.fetchStatus === "paused" ? Promise.resolve() : c
              );
            }),
        );
      return Promise.all(s).then(dt);
    }
    fetchQuery(n) {
      const r = this.defaultQueryOptions(n);
      r.retry === void 0 && (r.retry = !1);
      const o = this.#e.build(this, r);
      return o.isStaleByTime(tr(r.staleTime, o))
        ? o.fetch(r)
        : Promise.resolve(o.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(dt).catch(dt);
    }
    fetchInfiniteQuery(n) {
      return ((n._type = "infinite"), this.fetchQuery(n));
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(dt).catch(dt);
    }
    ensureInfiniteQueryData(n) {
      return ((n._type = "infinite"), this.ensureQueryData(n));
    }
    resumePausedMutations() {
      return cl.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(n) {
      this.#n = n;
    }
    setQueryDefaults(n, r) {
      this.#r.set(Rr(n), { queryKey: n, defaultOptions: r });
    }
    getQueryDefaults(n) {
      const r = [...this.#r.values()],
        o = {};
      return (
        r.forEach((s) => {
          ho(n, s.queryKey) && Object.assign(o, s.defaultOptions);
        }),
        o
      );
    }
    setMutationDefaults(n, r) {
      this.#i.set(Rr(n), { mutationKey: n, defaultOptions: r });
    }
    getMutationDefaults(n) {
      const r = [...this.#i.values()],
        o = {};
      return (
        r.forEach((s) => {
          ho(n, s.mutationKey) && Object.assign(o, s.defaultOptions);
        }),
        o
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const r = {
        ...this.#n.queries,
        ...this.getQueryDefaults(n.queryKey),
        ...n,
        _defaulted: !0,
      };
      return (
        r.queryHash || (r.queryHash = Cc(r.queryKey, r)),
        r.refetchOnReconnect === void 0 &&
          (r.refetchOnReconnect = r.networkMode !== "always"),
        r.throwOnError === void 0 && (r.throwOnError = !!r.suspense),
        !r.networkMode && r.persister && (r.networkMode = "offlineFirst"),
        r.queryFn === Ec && (r.enabled = !1),
        r
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#n.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  bm = h.createContext(void 0),
  km = (n) => {
    const r = h.useContext(bm);
    if (!r)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return r;
  },
  ex = ({ client: n, children: r }) => (
    h.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n],
    ),
    g.jsx(bm.Provider, { value: n, children: r })
  ),
  Pm = h.createContext(!1),
  tx = () => h.useContext(Pm);
Pm.Provider;
function nx() {
  let n = !1;
  return {
    clearReset: () => {
      n = !1;
    },
    reset: () => {
      n = !0;
    },
    isReset: () => n,
  };
}
var rx = h.createContext(nx()),
  ox = () => h.useContext(rx),
  ix = (n, r, o) => {
    const s =
      o?.state.error && typeof n.throwOnError == "function"
        ? bc(n.throwOnError, [o.state.error, o])
        : n.throwOnError;
    (n.suspense || n.experimental_prefetchInRender || s) &&
      (r.isReset() || (n.retryOnMount = !1));
  },
  sx = (n) => {
    h.useEffect(() => {
      n.clearReset();
    }, [n]);
  },
  lx = ({
    result: n,
    errorResetBoundary: r,
    throwOnError: o,
    query: s,
    suspense: a,
  }) =>
    n.isError &&
    !r.isReset() &&
    !n.isFetching &&
    s &&
    ((a && n.data === void 0) || bc(o, [n.error, s])),
  ax = (n) => {
    if (n.suspense) {
      const o = (a) => (a === "static" ? a : Math.max(a ?? 1e3, 1e3)),
        s = n.staleTime;
      ((n.staleTime = typeof s == "function" ? (...a) => o(s(...a)) : o(s)),
        typeof n.gcTime == "number" && (n.gcTime = Math.max(n.gcTime, 1e3)));
    }
  },
  ux = (n, r) => n.isLoading && n.isFetching && !r,
  cx = (n, r) => n?.suspense && r.isPending,
  fh = (n, r, o) =>
    r.fetchOptimistic(n).catch(() => {
      o.clearReset();
    });
function dx(n, r, o) {
  const s = tx(),
    a = ox(),
    c = km(),
    f = c.defaultQueryOptions(n);
  c.getDefaultOptions().queries?._experimental_beforeQuery?.(f);
  const p = c.getQueryCache().get(f.queryHash),
    m = n.subscribed !== !1;
  ((f._optimisticResults = s ? "isRestoring" : m ? "optimistic" : void 0),
    ax(f),
    ix(f, a, p),
    sx(a));
  const x = !c.getQueryCache().get(f.queryHash),
    [y] = h.useState(() => new r(c, f)),
    w = y.getOptimisticResult(f),
    S = !s && m;
  if (
    (h.useSyncExternalStore(
      h.useCallback(
        (R) => {
          const P = S ? y.subscribe(qe.batchCalls(R)) : dt;
          return (y.updateResult(), P);
        },
        [y, S],
      ),
      () => y.getCurrentResult(),
      () => y.getCurrentResult(),
    ),
    h.useEffect(() => {
      y.setOptions(f);
    }, [f, y]),
    cx(f, w))
  )
    throw fh(f, y, a);
  if (
    lx({
      result: w,
      errorResetBoundary: a,
      throwOnError: f.throwOnError,
      query: p,
      suspense: f.suspense,
    })
  )
    throw w.error;
  return (
    c.getDefaultOptions().queries?._experimental_afterQuery?.(f, w),
    f.experimental_prefetchInRender &&
      !Si.isServer() &&
      ux(w, s) &&
      (x ? fh(f, y, a) : p?.promise)?.catch(dt).finally(() => {
        y.updateResult();
      }),
    f.notifyOnChangeProps ? w : y.trackResult(w)
  );
}
function fx(n, r) {
  return dx(n, Q0);
}
function ci(n, r) {
  const o = km(),
    [s] = h.useState(() => new X0(o, n));
  h.useEffect(() => {
    s.setOptions(n);
  }, [s, n]);
  const a = h.useSyncExternalStore(
      h.useCallback((f) => s.subscribe(qe.batchCalls(f)), [s]),
      () => s.getCurrentResult(),
      () => s.getCurrentResult(),
    ),
    c = h.useCallback(
      (f, p) => {
        s.mutate(f, p).catch(dt);
      },
      [s],
    );
  if (a.error && bc(s.options.throwOnError, [a.error])) throw a.error;
  return { ...a, mutate: c, mutateAsync: a.mutate };
}
const wl = "port/5000".startsWith("__") ? "" : "port/5000";
async function Rm(n) {
  if (!n.ok) {
    const r = (await n.text()) || n.statusText;
    throw new Error(`${n.status}: ${r}`);
  }
}
async function di(n, r, o) {
  const s = await fetch(`${wl}${r}`, {
    method: n,
    headers: o ? { "Content-Type": "application/json" } : {},
    body: o ? JSON.stringify(o) : void 0,
  });
  return (await Rm(s), s);
}
const px =
    ({ on401: n }) =>
    async ({ queryKey: r }) => {
      const o = await fetch(`${wl}${r.join("/")}`);
      return (await Rm(o), await o.json());
    },
  so = new J0({
    defaultOptions: {
      queries: {
        queryFn: px({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  }),
  hx = 1,
  mx = 1e6;
let Tu = 0;
function vx() {
  return ((Tu = (Tu + 1) % Number.MAX_SAFE_INTEGER), Tu.toString());
}
const Nu = new Map(),
  ph = (n) => {
    if (Nu.has(n)) return;
    const r = setTimeout(() => {
      (Nu.delete(n), yi({ type: "REMOVE_TOAST", toastId: n }));
    }, mx);
    Nu.set(n, r);
  },
  gx = (n, r) => {
    switch (r.type) {
      case "ADD_TOAST":
        return { ...n, toasts: [r.toast, ...n.toasts].slice(0, hx) };
      case "UPDATE_TOAST":
        return {
          ...n,
          toasts: n.toasts.map((o) =>
            o.id === r.toast.id ? { ...o, ...r.toast } : o,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: o } = r;
        return (
          o
            ? ph(o)
            : n.toasts.forEach((s) => {
                ph(s.id);
              }),
          {
            ...n,
            toasts: n.toasts.map((s) =>
              s.id === o || o === void 0 ? { ...s, open: !1 } : s,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return r.toastId === void 0
          ? { ...n, toasts: [] }
          : { ...n, toasts: n.toasts.filter((o) => o.id !== r.toastId) };
    }
  },
  nl = [];
let rl = { toasts: [] };
function yi(n) {
  ((rl = gx(rl, n)),
    nl.forEach((r) => {
      r(rl);
    }));
}
function yx({ ...n }) {
  const r = vx(),
    o = (a) => yi({ type: "UPDATE_TOAST", toast: { ...a, id: r } }),
    s = () => yi({ type: "DISMISS_TOAST", toastId: r });
  return (
    yi({
      type: "ADD_TOAST",
      toast: {
        ...n,
        id: r,
        open: !0,
        onOpenChange: (a) => {
          a || s();
        },
      },
    }),
    { id: r, dismiss: s, update: o }
  );
}
function Om() {
  const [n, r] = h.useState(rl);
  return (
    h.useEffect(
      () => (
        nl.push(r),
        () => {
          const o = nl.indexOf(r);
          o > -1 && nl.splice(o, 1);
        }
      ),
      [n],
    ),
    {
      ...n,
      toast: yx,
      dismiss: (o) => yi({ type: "DISMISS_TOAST", toastId: o }),
    }
  );
}
var xl = rm(),
  wx = Object.defineProperty,
  go = (n, r) => wx(n, "name", { value: r, configurable: !0 }),
  Tm = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
function Ne(n, r, { checkForDefaultPrevented: o = !0 } = {}) {
  return go(function (a) {
    if ((n?.(a), o === !1 || !a || !a.defaultPrevented)) return r?.(a);
  }, "handleEvent");
}
go(Ne, "composeEventHandlers");
function xx(n) {
  if (!Tm) throw new Error("Cannot access window outside of the DOM");
  return n?.ownerDocument?.defaultView ?? window;
}
go(xx, "getOwnerWindow");
function Zu(n) {
  if (!Tm) throw new Error("Cannot access document outside of the DOM");
  return n?.ownerDocument ?? document;
}
go(Zu, "getOwnerDocument");
function Nm(n, r = !1) {
  const { activeElement: o } = Zu(n);
  if (!o?.nodeName) return null;
  if (jm(o) && o.contentDocument) return Nm(o.contentDocument.body, r);
  if (r) {
    const s = o.getAttribute("aria-activedescendant");
    if (s) {
      const a = Zu(o).getElementById(s);
      if (a) return a;
    }
  }
  return o;
}
go(Nm, "getActiveElement");
function jm(n) {
  return n.tagName === "IFRAME";
}
go(jm, "isFrame");
var Sx = Object.defineProperty,
  Pc = (n, r) => Sx(n, "name", { value: r, configurable: !0 });
function Ju(n, r) {
  if (typeof n == "function") return n(r);
  n != null && (n.current = r);
}
Pc(Ju, "setRef");
function _m(...n) {
  return (r) => {
    let o = !1;
    const s = n.map((a) => {
      const c = Ju(a, r);
      return (!o && typeof c == "function" && (o = !0), c);
    });
    if (o)
      return () => {
        for (let a = 0; a < s.length; a++) {
          const c = s[a];
          typeof c == "function" ? c() : Ju(n[a], null);
        }
      };
  };
}
Pc(_m, "composeRefs");
function Ue(...n) {
  return h.useCallback(_m(...n), n);
}
Pc(Ue, "useComposedRefs");
var Cx = Object.defineProperty,
  Lt = (n, r) => Cx(n, "name", { value: r, configurable: !0 });
function Ex(n, r) {
  const o = h.createContext(r);
  o.displayName = n + "Context";
  const s = Lt((c) => {
    const { children: f, ...p } = c,
      m = h.useMemo(() => p, Object.values(p));
    return g.jsx(o.Provider, { value: m, children: f });
  }, "Provider");
  s.displayName = n + "Provider";
  function a(c, f = {}) {
    const { optional: p = !1 } = f,
      m = h.useContext(o);
    if (m) return m;
    if (r !== void 0) return r;
    if (!p) throw new Error(`\`${c}\` must be used within \`${n}\``);
  }
  return (Lt(a, "useContext"), [s, a]);
}
Lt(Ex, "createContext");
function lr(n, r = []) {
  let o = [];
  function s(c, f) {
    const p = h.createContext(f);
    p.displayName = c + "Context";
    const m = o.length;
    o = [...o, f];
    const x = Lt((w) => {
      const { scope: S, children: R, ...P } = w,
        C = S?.[n]?.[m] || p,
        E = h.useMemo(() => P, Object.values(P));
      return g.jsx(C.Provider, { value: E, children: R });
    }, "Provider");
    x.displayName = c + "Provider";
    function y(w, S, R = {}) {
      const { optional: P = !1 } = R,
        C = S?.[n]?.[m] || p,
        E = h.useContext(C);
      if (E) return E;
      if (f !== void 0) return f;
      if (!P) throw new Error(`\`${w}\` must be used within \`${c}\``);
    }
    return (Lt(y, "useContext"), [x, y]);
  }
  Lt(s, "createContext");
  const a = Lt(() => {
    const c = o.map((f) => h.createContext(f));
    return Lt(function (p) {
      const m = p?.[n] || c;
      return h.useMemo(() => ({ [`__scope${n}`]: { ...p, [n]: m } }), [p, m]);
    }, "useScope");
  }, "createScope");
  return ((a.scopeName = n), [s, Dm(a, ...r)]);
}
Lt(lr, "createContextScope");
function Dm(...n) {
  const r = n[0];
  if (n.length === 1) return r;
  const o = Lt(() => {
    const s = n.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return Lt(function (c) {
      const f = s.reduce((p, { useScope: m, scopeName: x }) => {
        const w = m(c)[`__scope${x}`];
        return { ...p, ...w };
      }, {});
      return h.useMemo(() => ({ [`__scope${r.scopeName}`]: f }), [f]);
    }, "useComposedScopes");
  }, "createScope");
  return ((o.scopeName = r.scopeName), o);
}
Lt(Dm, "composeContextScopes");
var bx = Object.defineProperty,
  Kt = (n, r) => bx(n, "name", { value: r, configurable: !0 });
function or(n) {
  const r = h.forwardRef((o, s) => {
    let { children: a, ...c } = o,
      f = null,
      p = !1;
    const m = [];
    (ec(a) && typeof Bs == "function" && (a = Bs(a._payload)),
      h.Children.forEach(a, (S) => {
        if (Fm(S)) {
          p = !0;
          const R = S;
          let P = "child" in R.props ? R.props.child : R.props.children;
          (ec(P) && typeof Bs == "function" && (P = Bs(P._payload)),
            (f = Px(R, P)),
            m.push(f?.props?.children));
        } else m.push(S);
      }),
      f
        ? (f = h.cloneElement(f, void 0, m))
        : !p && h.Children.count(a) === 1 && h.isValidElement(a) && (f = a));
    const x = f ? Lm(f) : void 0,
      y = Ue(s, x);
    if (!f) {
      if (a || a === 0) throw new Error(p ? Tx(n) : Ox(n));
      return a;
    }
    const w = Im(c, f.props ?? {});
    return (f.type !== h.Fragment && (w.ref = s ? y : x), h.cloneElement(f, w));
  });
  return ((r.displayName = `${n}.Slot`), r);
}
Kt(or, "createSlot");
var kx = or("Slot"),
  Mm = Symbol.for("radix.slottable");
function Am(n) {
  const r = Kt(
    (o) => ("child" in o ? o.children(o.child) : o.children),
    "Slottable",
  );
  return ((r.displayName = `${n}.Slottable`), (r.__radixId = Mm), r);
}
Kt(Am, "createSlottable");
var Px = Kt((n, r) => {
  if ("child" in n.props) {
    const o = n.props.child;
    return h.isValidElement(o)
      ? h.cloneElement(o, void 0, n.props.children(o.props.children))
      : null;
  }
  return h.isValidElement(r) ? r : null;
}, "getSlottableElementFromSlottable");
function Im(n, r) {
  const o = { ...r };
  for (const s in r) {
    const a = n[s],
      c = r[s];
    /^on[A-Z]/.test(s)
      ? a && c
        ? (o[s] = (...p) => {
            const m = c(...p);
            return (a(...p), m);
          })
        : a && (o[s] = a)
      : s === "style"
        ? (o[s] = { ...a, ...c })
        : s === "className" && (o[s] = [a, c].filter(Boolean).join(" "));
  }
  return { ...n, ...o };
}
Kt(Im, "mergeProps");
function Lm(n) {
  let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? n.ref
    : ((r = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? n.props.ref : n.props.ref || n.ref);
}
Kt(Lm, "getElementRef");
function Fm(n) {
  return (
    h.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === Mm
  );
}
Kt(Fm, "isSlottable");
var Rx = Symbol.for("react.lazy");
function ec(n) {
  return (
    n != null &&
    typeof n == "object" &&
    "$$typeof" in n &&
    n.$$typeof === Rx &&
    "_payload" in n &&
    zm(n._payload)
  );
}
Kt(ec, "isLazyComponent");
function zm(n) {
  return typeof n == "object" && n !== null && "then" in n;
}
Kt(zm, "isPromiseLike");
var Ox = Kt(
    (n) =>
      `${n} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    "createSlotError",
  ),
  Tx = Kt(
    (n) =>
      `${n} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    "createSlottableError",
  ),
  Bs = mo[" use ".trim().toString()],
  Nx = Object.defineProperty,
  et = (n, r) => Nx(n, "name", { value: r, configurable: !0 });
function $m(n) {
  const r = n + "CollectionProvider",
    [o, s] = lr(r),
    [a, c] = o(r, { collectionRef: { current: null }, itemMap: new Map() }),
    f = et((C) => {
      const { scope: E, children: k } = C,
        N = h.useRef(null),
        D = h.useRef(new Map()).current;
      return g.jsx(a, { scope: E, itemMap: D, collectionRef: N, children: k });
    }, "CollectionProvider");
  f.displayName = r;
  const p = n + "CollectionSlot",
    m = or(p),
    x = h.forwardRef((C, E) => {
      const { scope: k, children: N } = C,
        D = c(p, k),
        _ = Ue(E, D.collectionRef);
      return g.jsx(m, { ref: _, children: N });
    });
  x.displayName = p;
  const y = n + "CollectionItemSlot",
    w = "data-radix-collection-item",
    S = or(y),
    R = h.forwardRef((C, E) => {
      const { scope: k, children: N, ...D } = C,
        _ = h.useRef(null),
        I = Ue(E, _),
        F = c(y, k);
      return (
        h.useEffect(
          () => (
            F.itemMap.set(_, { ref: _, ...D }),
            () => {
              F.itemMap.delete(_);
            }
          ),
        ),
        g.jsx(S, { [w]: "", ref: I, children: N })
      );
    });
  R.displayName = y;
  function P(C) {
    const E = c(n + "CollectionConsumer", C);
    return h.useCallback(() => {
      const N = E.collectionRef.current;
      if (!N) return [];
      const D = Array.from(N.querySelectorAll(`[${w}]`));
      return Array.from(E.itemMap.values()).sort(
        (F, $) => D.indexOf(F.ref.current) - D.indexOf($.ref.current),
      );
    }, [E.collectionRef, E.itemMap]);
  }
  return (
    et(P, "useCollection"),
    [{ Provider: f, Slot: x, ItemSlot: R }, P, s]
  );
}
et($m, "createCollection");
var hh = new WeakMap(),
  He,
  kt,
  ju =
    ((kt = class extends Map {
      constructor(o) {
        super(o);
        Lp(this, He);
        (Su(this, He, [...super.keys()]), hh.set(this, !0));
      }
      set(o, s) {
        return (
          hh.get(this) &&
            (this.has(o)
              ? (at(this, He)[at(this, He).indexOf(o)] = o)
              : at(this, He).push(o)),
          super.set(o, s),
          this
        );
      }
      insert(o, s, a) {
        const c = this.has(s),
          f = at(this, He).length,
          p = Rc(o);
        let m = p >= 0 ? p : f + p;
        const x = m < 0 || m >= f ? -1 : m;
        if (x === this.size || (c && x === this.size - 1) || x === -1)
          return (this.set(s, a), this);
        const y = this.size + (c ? 0 : 1);
        p < 0 && m++;
        const w = [...at(this, He)];
        let S,
          R = !1;
        for (let P = m; P < y; P++)
          if (m === P) {
            let C = w[P];
            (w[P] === s && (C = w[P + 1]),
              c && this.delete(s),
              (S = this.get(C)),
              this.set(s, a));
          } else {
            !R && w[P - 1] === s && (R = !0);
            const C = w[R ? P : P - 1],
              E = S;
            ((S = this.get(C)), this.delete(C), this.set(C, E));
          }
        return this;
      }
      with(o, s, a) {
        const c = new kt(this);
        return (c.insert(o, s, a), c);
      }
      before(o) {
        const s = at(this, He).indexOf(o) - 1;
        if (!(s < 0)) return this.entryAt(s);
      }
      setBefore(o, s, a) {
        const c = at(this, He).indexOf(o);
        return c === -1 ? this : this.insert(c, s, a);
      }
      after(o) {
        let s = at(this, He).indexOf(o);
        if (((s = s === -1 || s === this.size - 1 ? -1 : s + 1), s !== -1))
          return this.entryAt(s);
      }
      setAfter(o, s, a) {
        const c = at(this, He).indexOf(o);
        return c === -1 ? this : this.insert(c + 1, s, a);
      }
      first() {
        return this.entryAt(0);
      }
      last() {
        return this.entryAt(-1);
      }
      clear() {
        return (Su(this, He, []), super.clear());
      }
      delete(o) {
        const s = super.delete(o);
        return (s && at(this, He).splice(at(this, He).indexOf(o), 1), s);
      }
      deleteAt(o) {
        const s = this.keyAt(o);
        return s !== void 0 ? this.delete(s) : !1;
      }
      at(o) {
        const s = ol(at(this, He), o);
        if (s !== void 0) return this.get(s);
      }
      entryAt(o) {
        const s = ol(at(this, He), o);
        if (s !== void 0) return [s, this.get(s)];
      }
      indexOf(o) {
        return at(this, He).indexOf(o);
      }
      keyAt(o) {
        return ol(at(this, He), o);
      }
      from(o, s) {
        const a = this.indexOf(o);
        if (a === -1) return;
        let c = a + s;
        return (
          c < 0 && (c = 0),
          c >= this.size && (c = this.size - 1),
          this.at(c)
        );
      }
      keyFrom(o, s) {
        const a = this.indexOf(o);
        if (a === -1) return;
        let c = a + s;
        return (
          c < 0 && (c = 0),
          c >= this.size && (c = this.size - 1),
          this.keyAt(c)
        );
      }
      find(o, s) {
        let a = 0;
        for (const c of this) {
          if (Reflect.apply(o, s, [c, a, this])) return c;
          a++;
        }
      }
      findIndex(o, s) {
        let a = 0;
        for (const c of this) {
          if (Reflect.apply(o, s, [c, a, this])) return a;
          a++;
        }
        return -1;
      }
      filter(o, s) {
        const a = [];
        let c = 0;
        for (const f of this)
          (Reflect.apply(o, s, [f, c, this]) && a.push(f), c++);
        return new kt(a);
      }
      map(o, s) {
        const a = [];
        let c = 0;
        for (const f of this)
          (a.push([f[0], Reflect.apply(o, s, [f, c, this])]), c++);
        return new kt(a);
      }
      reduce(...o) {
        const [s, a] = o;
        let c = 0,
          f = a ?? this.at(0);
        for (const p of this)
          (c === 0 && o.length === 1
            ? (f = p)
            : (f = Reflect.apply(s, this, [f, p, c, this])),
            c++);
        return f;
      }
      reduceRight(...o) {
        const [s, a] = o;
        let c = a ?? this.at(-1);
        for (let f = this.size - 1; f >= 0; f--) {
          const p = this.at(f);
          f === this.size - 1 && o.length === 1
            ? (c = p)
            : (c = Reflect.apply(s, this, [c, p, f, this]));
        }
        return c;
      }
      toSorted(o) {
        const s = [...this.entries()].sort(o);
        return new kt(s);
      }
      toReversed() {
        const o = new kt();
        for (let s = this.size - 1; s >= 0; s--) {
          const a = this.keyAt(s),
            c = this.get(a);
          o.set(a, c);
        }
        return o;
      }
      toSpliced(...o) {
        const s = [...this.entries()];
        return (s.splice(...o), new kt(s));
      }
      slice(o, s) {
        const a = new kt();
        let c = this.size - 1;
        if (o === void 0) return a;
        (o < 0 && (o = o + this.size), s !== void 0 && s > 0 && (c = s - 1));
        for (let f = o; f <= c; f++) {
          const p = this.keyAt(f),
            m = this.get(p);
          a.set(p, m);
        }
        return a;
      }
      every(o, s) {
        let a = 0;
        for (const c of this) {
          if (!Reflect.apply(o, s, [c, a, this])) return !1;
          a++;
        }
        return !0;
      }
      some(o, s) {
        let a = 0;
        for (const c of this) {
          if (Reflect.apply(o, s, [c, a, this])) return !0;
          a++;
        }
        return !1;
      }
    }),
    (He = new WeakMap()),
    et(kt, "OrderedDict"),
    kt);
function ol(n, r) {
  if ("at" in Array.prototype) return Array.prototype.at.call(n, r);
  const o = Um(n, r);
  return o === -1 ? void 0 : n[o];
}
et(ol, "at");
function Um(n, r) {
  const o = n.length,
    s = Rc(r),
    a = s >= 0 ? s : o + s;
  return a < 0 || a >= o ? -1 : a;
}
et(Um, "toSafeIndex");
function Rc(n) {
  return n !== n || n === 0 ? 0 : Math.trunc(n);
}
et(Rc, "toSafeInteger");
function jx(n) {
  const r = n + "CollectionProvider",
    [o, s] = lr(r),
    [a, c] = o(r, {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new ju(),
      setItemMap: et(() => {}, "setItemMap"),
    }),
    f = et(
      ({ state: D, ..._ }) =>
        D ? g.jsx(m, { ..._, state: D }) : g.jsx(p, { ..._ }),
      "CollectionProvider",
    );
  f.displayName = r;
  const p = et((D) => {
    const _ = E();
    return g.jsx(m, { ...D, state: _ });
  }, "CollectionInit");
  p.displayName = r + "Init";
  const m = et((D) => {
    const { scope: _, children: I, state: F } = D,
      $ = h.useRef(null),
      [U, G] = h.useState(null),
      W = Ue($, G),
      [ce, Y] = F;
    return (
      h.useEffect(() => {
        if (!U) return;
        const ne = Wm(() => {});
        return (
          ne.observe(U, { childList: !0, subtree: !0 }),
          () => {
            ne.disconnect();
          }
        );
      }, [U]),
      g.jsx(a, {
        scope: _,
        itemMap: ce,
        setItemMap: Y,
        collectionRef: W,
        collectionRefObject: $,
        collectionElement: U,
        children: I,
      })
    );
  }, "CollectionProviderImpl");
  m.displayName = r + "Impl";
  const x = n + "CollectionSlot",
    y = or(x),
    w = h.forwardRef((D, _) => {
      const { scope: I, children: F } = D,
        $ = c(x, I),
        U = Ue(_, $.collectionRef);
      return g.jsx(y, { ref: U, children: F });
    });
  w.displayName = x;
  const S = n + "CollectionItemSlot",
    R = "data-radix-collection-item",
    P = or(S),
    C = h.forwardRef((D, _) => {
      const { scope: I, children: F, ...$ } = D,
        U = h.useRef(null),
        [G, W] = h.useState(null),
        ce = Ue(_, U, W),
        Y = c(S, I),
        { setItemMap: ne } = Y,
        te = h.useRef($);
      Vm(te.current, $) || (te.current = $);
      const le = te.current;
      return (
        h.useEffect(() => {
          const Q = le;
          return (
            ne((oe) =>
              G
                ? oe.has(G)
                  ? oe.set(G, { ...Q, element: G }).toSorted(tc)
                  : (oe.set(G, { ...Q, element: G }), oe.toSorted(tc))
                : oe,
            ),
            () => {
              ne((oe) => (!G || !oe.has(G) ? oe : (oe.delete(G), new ju(oe))));
            }
          );
        }, [G, le, ne]),
        g.jsx(P, { [R]: "", ref: ce, children: F })
      );
    });
  C.displayName = S;
  function E() {
    return h.useState(new ju());
  }
  et(E, "useInitCollection");
  function k(D) {
    const { itemMap: _ } = c(n + "CollectionConsumer", D);
    return _;
  }
  return (
    et(k, "useCollection"),
    [
      { Provider: f, Slot: w, ItemSlot: C },
      { createCollectionScope: s, useCollection: k, useInitCollection: E },
    ]
  );
}
et(jx, "createCollection");
function Vm(n, r) {
  if (n === r) return !0;
  if (typeof n != "object" || typeof r != "object" || n == null || r == null)
    return !1;
  const o = Object.keys(n),
    s = Object.keys(r);
  if (o.length !== s.length) return !1;
  for (const a of o)
    if (!Object.prototype.hasOwnProperty.call(r, a) || n[a] !== r[a]) return !1;
  return !0;
}
et(Vm, "shallowEqual");
function Hm(n, r) {
  return !!(r.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING);
}
et(Hm, "isElementPreceding");
function tc(n, r) {
  return !n[1].element || !r[1].element
    ? 0
    : Hm(n[1].element, r[1].element)
      ? -1
      : 1;
}
et(tc, "sortByDocumentPosition");
function Wm(n) {
  return new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList") {
        n();
        return;
      }
  });
}
et(Wm, "getChildListObserver");
var _x = Object.defineProperty,
  Dx = (n, r) => _x(n, "name", { value: r, configurable: !0 }),
  Mx = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ge = Mx.reduce((n, r) => {
    const o = or(`Primitive.${r}`),
      s = h.forwardRef((a, c) => {
        const { asChild: f, ...p } = a,
          m = f ? o : r;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          g.jsx(m, { ...p, ref: c })
        );
      });
    return ((s.displayName = `Primitive.${r}`), { ...n, [r]: s });
  }, {});
function Oc(n, r) {
  n && xl.flushSync(() => n.dispatchEvent(r));
}
Dx(Oc, "dispatchDiscreteCustomEvent");
var Ax = Object.defineProperty,
  Ix = (n, r) => Ax(n, "name", { value: r, configurable: !0 });
function Qt(n) {
  const r = h.useRef(n);
  return (
    h.useEffect(() => {
      r.current = n;
    }),
    h.useMemo(
      () =>
        (...o) =>
          r.current?.(...o),
      [],
    )
  );
}
Ix(Qt, "useCallbackRef");
var Lx = Object.defineProperty,
  Ke = (n, r) => Lx(n, "name", { value: r, configurable: !0 }),
  nc = "dismissableLayer.update",
  Fx = "dismissableLayer.pointerDownOutside",
  zx = "dismissableLayer.focusOutside",
  mh,
  Tc = h.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  Nc = h.forwardRef(
    Ke(function (r, o) {
      const {
          disableOutsidePointerEvents: s = !1,
          deferPointerDownOutside: a = !1,
          onEscapeKeyDown: c,
          onPointerDownOutside: f,
          onFocusOutside: p,
          onInteractOutside: m,
          onDismiss: x,
          ...y
        } = r,
        w = h.useContext(Tc),
        [S, R] = h.useState(null),
        P = S?.ownerDocument ?? globalThis?.document,
        [, C] = h.useState({}),
        E = Ue(o, R),
        k = Array.from(w.layers),
        [N] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
        D = N ? k.indexOf(N) : -1,
        _ = S ? k.indexOf(S) : -1,
        I = w.layersWithOutsidePointerEventsDisabled.size > 0,
        F = _ >= D,
        $ = h.useRef(!1),
        U = Qm(
          (Y) => {
            (f?.(Y), m?.(Y), Y.defaultPrevented || x?.());
          },
          {
            ownerDocument: P,
            deferPointerDownOutside: a,
            isDeferredPointerDownOutsideRef: $,
            dismissableSurfaces: w.dismissableSurfaces,
            shouldHandlePointerDownOutside: h.useCallback(
              (Y) => {
                if (!(Y instanceof Node)) return !1;
                const ne = [...w.branches].some((te) => te.contains(Y));
                return F && !ne;
              },
              [w.branches, F],
            ),
          },
        ),
        G = Km((Y) => {
          if (a && $.current) return;
          const ne = Y.target;
          [...w.branches].some((le) => le.contains(ne)) ||
            (p?.(Y), m?.(Y), Y.defaultPrevented || x?.());
        }, P),
        W = S ? _ === k.length - 1 : !1,
        ce = Qt((Y) => {
          Y.key === "Escape" &&
            (c?.(Y), !Y.defaultPrevented && x && (Y.preventDefault(), x()));
        });
      return (
        h.useEffect(() => {
          if (W)
            return (
              P.addEventListener("keydown", ce, { capture: !0 }),
              () => P.removeEventListener("keydown", ce, { capture: !0 })
            );
        }, [P, W, ce]),
        h.useEffect(() => {
          if (S)
            return (
              s &&
                (w.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((mh = P.body.style.pointerEvents),
                  (P.body.style.pointerEvents = "none")),
                w.layersWithOutsidePointerEventsDisabled.add(S)),
              w.layers.add(S),
              rc(),
              () => {
                s &&
                  (w.layersWithOutsidePointerEventsDisabled.delete(S),
                  w.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (P.body.style.pointerEvents = mh));
              }
            );
        }, [S, P, s, w]),
        h.useEffect(
          () => () => {
            S &&
              (w.layers.delete(S),
              w.layersWithOutsidePointerEventsDisabled.delete(S),
              rc());
          },
          [S, w],
        ),
        h.useEffect(() => {
          const Y = Ke(() => C({}), "handleUpdate");
          return (
            document.addEventListener(nc, Y),
            () => document.removeEventListener(nc, Y)
          );
        }, []),
        g.jsx(Ge.div, {
          ...y,
          ref: E,
          style: {
            pointerEvents: I ? (F ? "auto" : "none") : void 0,
            ...r.style,
          },
          onFocusCapture: Ne(r.onFocusCapture, G.onFocusCapture),
          onBlurCapture: Ne(r.onBlurCapture, G.onBlurCapture),
          onPointerDownCapture: Ne(
            r.onPointerDownCapture,
            U.onPointerDownCapture,
          ),
        })
      );
    }, "DismissableLayer"),
  ),
  $x = h.forwardRef(
    Ke(function (r, o) {
      const s = h.useContext(Tc),
        a = h.useRef(null),
        c = Ue(o, a);
      return (
        h.useEffect(() => {
          const f = a.current;
          if (f)
            return (
              s.branches.add(f),
              () => {
                s.branches.delete(f);
              }
            );
        }, [s.branches]),
        g.jsx(Ge.div, { ...r, ref: c })
      );
    }, "DismissableLayerBranch"),
  );
function Bm() {
  const n = h.useContext(Tc),
    [r, o] = h.useState(null);
  return (
    h.useEffect(() => {
      if (r)
        return (
          n.dismissableSurfaces.add(r),
          () => {
            n.dismissableSurfaces.delete(r);
          }
        );
    }, [r, n.dismissableSurfaces]),
    o
  );
}
Ke(Bm, "useDismissableLayerSurface");
var Ux = Ke(() => !0, "IS_TRUE");
function Qm(n, r) {
  const {
      ownerDocument: o = globalThis?.document,
      deferPointerDownOutside: s = !1,
      isDeferredPointerDownOutsideRef: a,
      dismissableSurfaces: c,
      shouldHandlePointerDownOutside: f = Ux,
    } = r,
    p = Qt(n),
    m = h.useRef(!1),
    x = h.useRef(!1),
    y = h.useRef(new Map()),
    w = h.useRef(() => {});
  return (
    h.useEffect(() => {
      function S() {
        ((x.current = !1), (a.current = !1), y.current.clear());
      }
      Ke(S, "resetOutsideInteraction");
      function R() {
        return Array.from(y.current.values()).some(Boolean);
      }
      Ke(R, "isOutsideInteractionIntercepted");
      function P(D) {
        if (!x.current) return;
        const _ = D.target;
        ((_ instanceof Node && [...c].some((F) => F.contains(_))) ||
          y.current.set(D.type, !0),
          D.type === "click" &&
            window.setTimeout(() => {
              x.current && w.current();
            }, 0));
      }
      Ke(P, "handleInteractionCapture");
      function C(D) {
        x.current && y.current.set(D.type, !1);
      }
      Ke(C, "handleInteractionBubble");
      const E = Ke((D) => {
          if (D.target && !m.current) {
            let _ = function () {
              o.removeEventListener("click", w.current);
              const F = R();
              (S(), F || jc(Fx, p, I, { discrete: !0 }));
            };
            if (
              (Ke(_, "handleAndDispatchPointerDownOutsideEvent"), !f(D.target))
            ) {
              (o.removeEventListener("click", w.current),
                S(),
                (m.current = !1));
              return;
            }
            const I = { originalEvent: D };
            ((x.current = !0),
              (a.current = s && D.button === 0),
              y.current.clear(),
              !s || D.button !== 0
                ? _()
                : (o.removeEventListener("click", w.current),
                  (w.current = _),
                  o.addEventListener("click", w.current, { once: !0 })));
          } else (o.removeEventListener("click", w.current), S());
          m.current = !1;
        }, "handlePointerDown"),
        k = [
          "pointerup",
          "mousedown",
          "mouseup",
          "touchstart",
          "touchend",
          "click",
        ];
      for (const D of k)
        (o.addEventListener(D, P, !0), o.addEventListener(D, C));
      const N = window.setTimeout(() => {
        o.addEventListener("pointerdown", E);
      }, 0);
      return () => {
        (window.clearTimeout(N),
          o.removeEventListener("pointerdown", E),
          o.removeEventListener("click", w.current));
        for (const D of k)
          (o.removeEventListener(D, P, !0), o.removeEventListener(D, C));
      };
    }, [o, p, s, a, c, f]),
    { onPointerDownCapture: Ke(() => (m.current = !0), "onPointerDownCapture") }
  );
}
Ke(Qm, "usePointerDownOutside");
function Km(n, r = globalThis?.document) {
  const o = Qt(n),
    s = h.useRef(!1);
  return (
    h.useEffect(() => {
      const a = Ke((c) => {
        c.target &&
          !s.current &&
          jc(zx, o, { originalEvent: c }, { discrete: !1 });
      }, "handleFocus");
      return (
        r.addEventListener("focusin", a),
        () => r.removeEventListener("focusin", a)
      );
    }, [r, o]),
    {
      onFocusCapture: Ke(() => (s.current = !0), "onFocusCapture"),
      onBlurCapture: Ke(() => (s.current = !1), "onBlurCapture"),
    }
  );
}
Ke(Km, "useFocusOutside");
function rc() {
  const n = new CustomEvent(nc);
  document.dispatchEvent(n);
}
Ke(rc, "dispatchUpdate");
function jc(n, r, o, { discrete: s }) {
  const a = o.originalEvent.target,
    c = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: o });
  (r && a.addEventListener(n, r, { once: !0 }),
    s ? Oc(a, c) : a.dispatchEvent(c));
}
Ke(jc, "handleAndDispatchCustomEvent");
var Vx = Nc,
  Hx = $x,
  wt = globalThis?.document ? h.useLayoutEffect : () => {},
  Wx = Object.defineProperty,
  Bx = (n, r) => Wx(n, "name", { value: r, configurable: !0 }),
  qm = h.forwardRef(
    Bx(function (r, o) {
      const { container: s, ...a } = r,
        [c, f] = h.useState(!1);
      wt(() => f(!0), []);
      const p = s || (c && globalThis?.document?.body);
      return p ? xl.createPortal(g.jsx(Ge.div, { ...a, ref: o }), p) : null;
    }, "Portal"),
  ),
  Qx = Object.defineProperty,
  Pn = (n, r) => Qx(n, "name", { value: r, configurable: !0 });
function Gm(n, r) {
  return h.useReducer((o, s) => r[o][s] ?? o, n);
}
Pn(Gm, "useStateMachine");
var Ri = Pn((n) => {
  const { present: r, children: o } = n,
    s = Ym(r),
    a =
      typeof o == "function" ? o({ present: s.isPresent }) : h.Children.only(o),
    c = Xm(s.ref, Zm(a));
  return typeof o == "function" || s.isPresent
    ? h.cloneElement(a, { ref: c })
    : null;
}, "Presence");
function Ym(n) {
  const [r, o] = h.useState(),
    s = h.useRef(null),
    a = h.useRef(n),
    c = h.useRef("none"),
    f = h.useRef(void 0),
    p = n ? "mounted" : "unmounted",
    [m, x] = Gm(p, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    h.useEffect(() => {
      m === "mounted"
        ? ((c.current = f.current ?? lo(s.current)), (f.current = void 0))
        : (c.current = "none");
    }, [m]),
    wt(() => {
      const y = s.current,
        w = a.current;
      if (w !== n) {
        const R = c.current,
          P = lo(y);
        (n
          ? ((f.current = P), x("MOUNT"))
          : P === "none" || y?.display === "none"
            ? x("UNMOUNT")
            : x(w && R !== P ? "ANIMATION_OUT" : "UNMOUNT"),
          (a.current = n));
      }
    }, [n, x]),
    wt(() => {
      if (r) {
        let y;
        const w = r.ownerDocument.defaultView ?? window,
          S = Pn((P) => {
            const E = lo(s.current).includes(CSS.escape(P.animationName));
            if (P.target === r && E && (x("ANIMATION_END"), !a.current)) {
              const k = r.style.animationFillMode;
              ((r.style.animationFillMode = "forwards"),
                (y = w.setTimeout(() => {
                  r.style.animationFillMode === "forwards" &&
                    (r.style.animationFillMode = k);
                })));
            }
          }, "handleAnimationEnd"),
          R = Pn((P) => {
            P.target === r && (c.current = lo(s.current));
          }, "handleAnimationStart");
        return (
          r.addEventListener("animationstart", R),
          r.addEventListener("animationcancel", S),
          r.addEventListener("animationend", S),
          () => {
            (w.clearTimeout(y),
              r.removeEventListener("animationstart", R),
              r.removeEventListener("animationcancel", S),
              r.removeEventListener("animationend", S));
          }
        );
      } else x("ANIMATION_END");
    }, [r, x]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(m),
      ref: h.useCallback((y) => {
        if (y) {
          const w = getComputedStyle(y);
          ((s.current = w), (f.current = lo(w)));
        } else s.current = null;
        o(y);
      }, []),
    }
  );
}
Pn(Ym, "usePresence");
function oc(n, r) {
  if (typeof n == "function") return n(r);
  n != null && (n.current = r);
}
Pn(oc, "setRef");
function Xm(...n) {
  const r = h.useRef(n);
  return (
    (r.current = n),
    h.useCallback((o) => {
      const s = r.current;
      let a = !1;
      const c = s.map((f) => {
        const p = oc(f, o);
        return (!a && typeof p == "function" && (a = !0), p);
      });
      if (a)
        return () => {
          for (let f = 0; f < c.length; f++) {
            const p = c[f];
            typeof p == "function" ? p() : oc(s[f], null);
          }
        };
    }, [])
  );
}
Pn(Xm, "useStableComposedRefs");
function lo(n) {
  return n?.animationName || "none";
}
Pn(lo, "getAnimationName");
function Zm(n) {
  let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? n.ref
    : ((r = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? n.props.ref : n.props.ref || n.ref);
}
Pn(Zm, "getElementRef");
var Kx = Object.defineProperty,
  qx = (n, r) => Kx(n, "name", { value: r, configurable: !0 }),
  vh = mo[" useEffectEvent ".trim().toString()],
  gh = mo[" useInsertionEffect ".trim().toString()];
function Jm(n) {
  if (typeof vh == "function") return vh(n);
  const r = h.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return (
    typeof gh == "function"
      ? gh(() => {
          r.current = n;
        })
      : wt(() => {
          r.current = n;
        }),
    h.useMemo(
      () =>
        (...o) =>
          r.current?.(...o),
      [],
    )
  );
}
qx(Jm, "useEffectEvent");
var Gx = Object.defineProperty,
  Oi = (n, r) => Gx(n, "name", { value: r, configurable: !0 }),
  Yx = mo[" useInsertionEffect ".trim().toString()] || wt;
function Sl({
  prop: n,
  defaultProp: r,
  onChange: o = Oi(() => {}, "onChange"),
  caller: s,
}) {
  const [a, c, f] = ev({ defaultProp: r, onChange: o }),
    p = n !== void 0,
    m = p ? n : a,
    x = h.useCallback(
      (y) => {
        if (p) {
          const w = tv(y) ? y(n) : y;
          w !== n && f.current?.(w);
        } else c(y);
      },
      [p, n, c, f],
    );
  return [m, x];
}
Oi(Sl, "useControllableState");
function ev({ defaultProp: n, onChange: r }) {
  const [o, s] = h.useState(n),
    a = h.useRef(o),
    c = h.useRef(r);
  return (
    Yx(() => {
      c.current = r;
    }, [r]),
    h.useEffect(() => {
      a.current !== o && (c.current?.(o), (a.current = o));
    }, [o, a]),
    [o, s, c]
  );
}
Oi(ev, "useUncontrolledState");
function tv(n) {
  return typeof n == "function";
}
Oi(tv, "isFunction");
var yh = Symbol("RADIX:SYNC_STATE");
function Xx(n, r, o, s) {
  const { prop: a, defaultProp: c, onChange: f, caller: p } = r,
    m = a !== void 0,
    x = Jm(f),
    y = [{ ...o, state: c }];
  s && y.push(s);
  const [w, S] = h.useReducer(
      (E, k) => {
        if (k.type === yh) return { ...E, state: k.state };
        const N = n(E, k);
        return (m && !Object.is(N.state, E.state) && x(N.state), N);
      },
      ...y,
    ),
    R = w.state,
    P = h.useRef(R);
  h.useEffect(() => {
    P.current !== R && ((P.current = R), m || x(R));
  }, [R, P, m]);
  const C = h.useMemo(() => (a !== void 0 ? { ...w, state: a } : w), [w, a]);
  return (
    h.useEffect(() => {
      m && !Object.is(a, w.state) && S({ type: yh, state: a });
    }, [a, w.state, m]),
    [C, S]
  );
}
Oi(Xx, "useControllableStateReducer");
var Zx = Object.defineProperty,
  Jx = (n, r) => Zx(n, "name", { value: r, configurable: !0 }),
  e1 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  _c = h.forwardRef(
    Jx(function (r, o) {
      return g.jsx(Ge.span, { ...r, ref: o, style: { ...e1, ...r.style } });
    }, "VisuallyHidden"),
  ),
  t1 = _c,
  n1 = Object.defineProperty,
  Oe = (n, r) => n1(n, "name", { value: r, configurable: !0 }),
  nv = "ToastProvider",
  [Dc, rv, r1] = $m("Toast"),
  [ov, TP] = lr("Toast", [r1]),
  [o1, Cl] = ov(nv),
  i1 = Oe((n) => {
    const {
        __scopeToast: r,
        label: o = "Notification",
        duration: s = 5e3,
        swipeDirection: a = "right",
        swipeThreshold: c = 50,
        announcerContainer: f,
        children: p,
      } = n,
      [m, x] = h.useState(null),
      [y, w] = h.useState(0),
      S = h.useRef(!1);
    return (
      o.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${nv}\`. Expected non-empty \`string\`.`,
        ),
      g.jsx(Dc.Provider, {
        scope: r,
        children: g.jsx(o1, {
          scope: r,
          label: o,
          duration: s,
          swipeDirection: a,
          swipeThreshold: c,
          toastCount: y,
          viewport: m,
          onViewportChange: x,
          onToastAdd: h.useCallback(() => w((R) => R + 1), []),
          onToastRemove: h.useCallback(() => w((R) => R - 1), []),
          isClosePausedRef: S,
          announcerContainer: f,
          children: p,
        }),
      })
    );
  }, "ToastProvider"),
  s1 = "ToastViewport",
  l1 = ["F8"],
  ic = "toast.viewportPause",
  sc = "toast.viewportResume",
  a1 = h.forwardRef(
    Oe(function (r, o) {
      const {
          __scopeToast: s,
          hotkey: a = l1,
          label: c = "Notifications ({hotkey})",
          ...f
        } = r,
        p = Cl(s1, s),
        m = rv(s),
        x = h.useRef(null),
        y = h.useRef(null),
        w = h.useRef(null),
        S = h.useRef(null),
        R = Ue(o, S, p.onViewportChange),
        P = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        C = p.toastCount > 0;
      (h.useEffect(() => {
        const k = Oe((N) => {
          a.length !== 0 &&
            a.every((_) => N[_] || N.code === _) &&
            S.current?.focus();
        }, "handleKeyDown");
        return (
          document.addEventListener("keydown", k),
          () => document.removeEventListener("keydown", k)
        );
      }, [a]),
        h.useEffect(() => {
          const k = x.current,
            N = S.current;
          if (C && k && N) {
            const D = Oe(() => {
                if (!p.isClosePausedRef.current) {
                  const $ = new CustomEvent(ic);
                  (N.dispatchEvent($), (p.isClosePausedRef.current = !0));
                }
              }, "handlePause"),
              _ = Oe(() => {
                if (p.isClosePausedRef.current) {
                  const $ = new CustomEvent(sc);
                  (N.dispatchEvent($), (p.isClosePausedRef.current = !1));
                }
              }, "handleResume"),
              I = Oe(($) => {
                !k.contains($.relatedTarget) && _();
              }, "handleFocusOutResume"),
              F = Oe(() => {
                k.contains(document.activeElement) || _();
              }, "handlePointerLeaveResume");
            return (
              k.addEventListener("focusin", D),
              k.addEventListener("focusout", I),
              k.addEventListener("pointermove", D),
              k.addEventListener("pointerleave", F),
              window.addEventListener("blur", D),
              window.addEventListener("focus", _),
              () => {
                (k.removeEventListener("focusin", D),
                  k.removeEventListener("focusout", I),
                  k.removeEventListener("pointermove", D),
                  k.removeEventListener("pointerleave", F),
                  window.removeEventListener("blur", D),
                  window.removeEventListener("focus", _));
              }
            );
          }
        }, [C, p.isClosePausedRef]));
      const E = h.useCallback(
        ({ tabbingDirection: k }) => {
          const D = m().map((_) => {
            const I = _.ref.current,
              F = [I, ...uv(I)];
            return k === "forwards" ? F : F.reverse();
          });
          return (k === "forwards" ? D.reverse() : D).flat();
        },
        [m],
      );
      return (
        h.useEffect(() => {
          const k = S.current;
          if (k) {
            const N = Oe((D) => {
              const _ = D.altKey || D.ctrlKey || D.metaKey;
              if (D.key === "Tab" && !_) {
                const F = document.activeElement,
                  $ = D.shiftKey;
                if (D.target === k && $) {
                  y.current?.focus();
                  return;
                }
                const W = E({ tabbingDirection: $ ? "backwards" : "forwards" }),
                  ce = W.findIndex((Y) => Y === F);
                il(W.slice(ce + 1))
                  ? D.preventDefault()
                  : $
                    ? y.current?.focus()
                    : w.current?.focus();
              }
            }, "handleKeyDown");
            return (
              k.addEventListener("keydown", N),
              () => k.removeEventListener("keydown", N)
            );
          }
        }, [m, E]),
        g.jsxs(Hx, {
          ref: x,
          role: "region",
          "aria-label": c.replace("{hotkey}", P),
          tabIndex: -1,
          style: { pointerEvents: C ? void 0 : "none" },
          children: [
            C &&
              g.jsx(wh, {
                ref: y,
                onFocusFromOutsideViewport: () => {
                  const k = E({ tabbingDirection: "forwards" });
                  il(k);
                },
              }),
            g.jsx(Dc.Slot, {
              scope: s,
              children: g.jsx(Ge.ol, { tabIndex: -1, ...f, ref: R }),
            }),
            C &&
              g.jsx(wh, {
                ref: w,
                onFocusFromOutsideViewport: () => {
                  const k = E({ tabbingDirection: "backwards" });
                  il(k);
                },
              }),
          ],
        })
      );
    }, "ToastViewport"),
  ),
  u1 = "ToastFocusProxy",
  wh = h.forwardRef(
    Oe(function (r, o) {
      const { __scopeToast: s, onFocusFromOutsideViewport: a, ...c } = r,
        f = Cl(u1, s);
      return g.jsx(_c, {
        tabIndex: 0,
        ...c,
        ref: o,
        style: { position: "fixed" },
        onFocus: (p) => {
          const m = p.relatedTarget;
          !f.viewport?.contains(m) && a();
        },
      });
    }, "ToastFocusProxy"),
  ),
  El = "Toast",
  c1 = "toast.swipeStart",
  d1 = "toast.swipeMove",
  f1 = "toast.swipeCancel",
  p1 = "toast.swipeEnd",
  h1 = h.forwardRef(
    Oe(function (r, o) {
      const {
          forceMount: s,
          open: a,
          defaultOpen: c,
          onOpenChange: f,
          ...p
        } = r,
        [m, x] = Sl({ prop: a, defaultProp: c ?? !0, onChange: f, caller: El });
      return g.jsx(Ri, {
        present: s || m,
        children: g.jsx(g1, {
          open: m,
          ...p,
          ref: o,
          onClose: () => x(!1),
          onPause: Qt(r.onPause),
          onResume: Qt(r.onResume),
          onSwipeStart: Ne(r.onSwipeStart, (y) => {
            y.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: Ne(r.onSwipeMove, (y) => {
            const { x: w, y: S } = y.detail.delta;
            (y.currentTarget.setAttribute("data-swipe", "move"),
              y.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-x",
                `${w}px`,
              ),
              y.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-y",
                `${S}px`,
              ));
          }),
          onSwipeCancel: Ne(r.onSwipeCancel, (y) => {
            (y.currentTarget.setAttribute("data-swipe", "cancel"),
              y.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x",
              ),
              y.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y",
              ),
              y.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              y.currentTarget.style.removeProperty(
                "--radix-toast-swipe-end-y",
              ));
          }),
          onSwipeEnd: Ne(r.onSwipeEnd, (y) => {
            const { x: w, y: S } = y.detail.delta;
            (y.currentTarget.setAttribute("data-swipe", "end"),
              y.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x",
              ),
              y.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y",
              ),
              y.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-x",
                `${w}px`,
              ),
              y.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-y",
                `${S}px`,
              ),
              x(!1));
          }),
        }),
      });
    }, "Toast"),
  ),
  [m1, v1] = ov(El, { onClose() {} }),
  g1 = h.forwardRef(
    Oe(function (r, o) {
      const {
          __scopeToast: s,
          type: a = "foreground",
          duration: c,
          open: f,
          onClose: p,
          onEscapeKeyDown: m,
          onPause: x,
          onResume: y,
          onSwipeStart: w,
          onSwipeMove: S,
          onSwipeCancel: R,
          onSwipeEnd: P,
          ...C
        } = r,
        E = Cl(El, s),
        k = rv(s),
        [N, D] = h.useState(null),
        _ = Ue(o, D),
        I = h.useRef(null),
        F = h.useRef(null),
        $ = c || E.duration,
        U = h.useRef(0),
        G = h.useRef($),
        W = h.useRef(0),
        { onToastAdd: ce, onToastRemove: Y } = E,
        ne = Qt(() => {
          (N?.contains(document.activeElement) && E.viewport?.focus(), p());
        }),
        te = h.useCallback(
          (Q) => {
            !Q ||
              Q === 1 / 0 ||
              (window.clearTimeout(W.current),
              (U.current = new Date().getTime()),
              (W.current = window.setTimeout(ne, Q)));
          },
          [ne],
        );
      (h.useEffect(() => {
        const Q = E.viewport;
        if (Q) {
          const oe = Oe(() => {
              (te(G.current), y?.());
            }, "handleResume"),
            z = Oe(() => {
              const J = new Date().getTime() - U.current;
              ((G.current = G.current - J),
                window.clearTimeout(W.current),
                x?.());
            }, "handlePause");
          return (
            Q.addEventListener(ic, z),
            Q.addEventListener(sc, oe),
            () => {
              (Q.removeEventListener(ic, z), Q.removeEventListener(sc, oe));
            }
          );
        }
      }, [E.viewport, $, x, y, te]),
        h.useEffect(() => {
          f && !E.isClosePausedRef.current && te($);
        }, [f, $, E.isClosePausedRef, te]),
        h.useEffect(
          () => () => {
            window.clearTimeout(W.current);
          },
          [],
        ),
        h.useEffect(() => (ce(), () => Y()), [ce, Y]));
      const le = h.useMemo(() => (N ? Mc(N) : null), [N]);
      return E.viewport
        ? g.jsxs(g.Fragment, {
            children: [
              le &&
                g.jsx(y1, {
                  __scopeToast: s,
                  role: "status",
                  "aria-live": a === "foreground" ? "assertive" : "polite",
                  children: le,
                }),
              g.jsx(m1, {
                scope: s,
                onClose: ne,
                children: xl.createPortal(
                  g.jsx(Dc.ItemSlot, {
                    scope: s,
                    children: g.jsx(Vx, {
                      asChild: !0,
                      onEscapeKeyDown: Ne(m, (Q) => {
                        k().some((z) => z.ref.current?.contains(Q.target)) ||
                          ne();
                      }),
                      children: g.jsx(Ge.li, {
                        tabIndex: 0,
                        "data-state": f ? "open" : "closed",
                        "data-swipe-direction": E.swipeDirection,
                        ...C,
                        ref: _,
                        style: {
                          userSelect: "none",
                          touchAction: "none",
                          ...r.style,
                        },
                        onKeyDown: Ne(r.onKeyDown, (Q) => {
                          Q.key === "Escape" &&
                            (m?.(Q.nativeEvent),
                            Q.nativeEvent.defaultPrevented || ne());
                        }),
                        onPointerDown: Ne(r.onPointerDown, (Q) => {
                          Q.button === 0 &&
                            (I.current = { x: Q.clientX, y: Q.clientY });
                        }),
                        onPointerMove: Ne(r.onPointerMove, (Q) => {
                          if (!I.current) return;
                          const oe = Q.clientX - I.current.x,
                            z = Q.clientY - I.current.y,
                            J = !!F.current,
                            X = ["left", "right"].includes(E.swipeDirection),
                            T = ["left", "up"].includes(E.swipeDirection)
                              ? Math.min
                              : Math.max,
                            H = X ? T(0, oe) : 0,
                            de = X ? 0 : T(0, z),
                            he = Q.pointerType === "touch" ? 10 : 2,
                            ve = { x: H, y: de },
                            ge = { originalEvent: Q, delta: ve };
                          J
                            ? ((F.current = ve),
                              vi(d1, S, ge, { discrete: !1 }))
                            : xh(ve, E.swipeDirection, he)
                              ? ((F.current = ve),
                                vi(c1, w, ge, { discrete: !1 }),
                                Q.target.setPointerCapture(Q.pointerId))
                              : (Math.abs(oe) > he || Math.abs(z) > he) &&
                                (I.current = null);
                        }),
                        onPointerUp: Ne(r.onPointerUp, (Q) => {
                          const oe = F.current,
                            z = Q.target;
                          if (
                            (z.hasPointerCapture(Q.pointerId) &&
                              z.releasePointerCapture(Q.pointerId),
                            (F.current = null),
                            (I.current = null),
                            oe)
                          ) {
                            const J = Q.currentTarget,
                              X = { originalEvent: Q, delta: oe };
                            (xh(oe, E.swipeDirection, E.swipeThreshold)
                              ? vi(p1, P, X, { discrete: !0 })
                              : vi(f1, R, X, { discrete: !0 }),
                              J.addEventListener(
                                "click",
                                (T) => T.preventDefault(),
                                { once: !0 },
                              ));
                          }
                        }),
                      }),
                    }),
                  }),
                  E.viewport,
                ),
              }),
            ],
          })
        : null;
    }, "ToastImpl"),
  ),
  y1 = Oe((n) => {
    const { __scopeToast: r, children: o, ...s } = n,
      a = Cl(El, r),
      [c, f] = h.useState(!1),
      [p, m] = h.useState(!1);
    return (
      lv(() => f(!0)),
      h.useEffect(() => {
        const x = window.setTimeout(() => m(!0), 1e3);
        return () => window.clearTimeout(x);
      }, []),
      p
        ? null
        : g.jsx(qm, {
            asChild: !0,
            container: a.announcerContainer || void 0,
            children: g.jsx(_c, {
              ...s,
              children:
                c && g.jsxs(g.Fragment, { children: [a.label, " ", o] }),
            }),
          })
    );
  }, "ToastAnnounce"),
  w1 = h.forwardRef(
    Oe(function (r, o) {
      const { __scopeToast: s, ...a } = r;
      return g.jsx(Ge.div, { ...a, ref: o });
    }, "ToastTitle"),
  ),
  x1 = h.forwardRef(
    Oe(function (r, o) {
      const { __scopeToast: s, ...a } = r;
      return g.jsx(Ge.div, { ...a, ref: o });
    }, "ToastDescription"),
  ),
  S1 = "ToastAction",
  C1 = h.forwardRef(
    Oe(function (r, o) {
      const { altText: s, ...a } = r;
      return s.trim()
        ? g.jsx(sv, {
            altText: s,
            asChild: !0,
            children: g.jsx(iv, { ...a, ref: o }),
          })
        : (console.error(
            `Invalid prop \`altText\` supplied to \`${S1}\`. Expected non-empty \`string\`.`,
          ),
          null);
    }, "ToastAction"),
  ),
  E1 = "ToastClose",
  iv = h.forwardRef(
    Oe(function (r, o) {
      const { __scopeToast: s, ...a } = r,
        c = v1(E1, s);
      return g.jsx(sv, {
        asChild: !0,
        children: g.jsx(Ge.button, {
          type: "button",
          ...a,
          ref: o,
          onClick: Ne(r.onClick, c.onClose),
        }),
      });
    }, "ToastClose"),
  ),
  sv = h.forwardRef(
    Oe(function (r, o) {
      const { __scopeToast: s, altText: a, ...c } = r;
      return g.jsx(Ge.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": a || void 0,
        ...c,
        ref: o,
      });
    }, "ToastAnnounceExclude"),
  );
function Mc(n) {
  const r = [];
  return (
    Array.from(n.childNodes).forEach((s) => {
      if (
        (s.nodeType === s.TEXT_NODE && s.textContent && r.push(s.textContent),
        av(s))
      ) {
        const a = s.ariaHidden || s.hidden || s.style.display === "none",
          c = s.dataset.radixToastAnnounceExclude === "";
        if (!a)
          if (c) {
            const f = s.dataset.radixToastAnnounceAlt;
            f && r.push(f);
          } else r.push(...Mc(s));
      }
    }),
    r
  );
}
Oe(Mc, "getAnnounceTextContent");
function vi(n, r, o, { discrete: s }) {
  const a = o.originalEvent.currentTarget,
    c = new CustomEvent(n, { bubbles: !0, cancelable: !0, detail: o });
  (r && a.addEventListener(n, r, { once: !0 }),
    s ? Oc(a, c) : a.dispatchEvent(c));
}
Oe(vi, "handleAndDispatchCustomEvent");
var xh = Oe((n, r, o = 0) => {
  const s = Math.abs(n.x),
    a = Math.abs(n.y),
    c = s > a;
  return r === "left" || r === "right" ? c && s > o : !c && a > o;
}, "isDeltaInDirection");
function lv(n = () => {}) {
  const r = Qt(n);
  wt(() => {
    let o = 0,
      s = 0;
    return (
      (o = window.requestAnimationFrame(
        () => (s = window.requestAnimationFrame(r)),
      )),
      () => {
        (window.cancelAnimationFrame(o), window.cancelAnimationFrame(s));
      }
    );
  }, [r]);
}
Oe(lv, "useNextFrame");
function av(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
Oe(av, "isHTMLElement");
function uv(n) {
  const r = [],
    o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: Oe((s) => {
        const a = s.tagName === "INPUT" && s.type === "hidden";
        return s.disabled || s.hidden || a
          ? NodeFilter.FILTER_SKIP
          : s.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }, "acceptNode"),
    });
  for (; o.nextNode(); ) r.push(o.currentNode);
  return r;
}
Oe(uv, "getTabbableCandidates");
function il(n) {
  const r = document.activeElement;
  return n.some((o) =>
    o === r ? !0 : (o.focus(), document.activeElement !== r),
  );
}
Oe(il, "focusFirst");
var b1 = i1,
  cv = a1,
  dv = h1,
  fv = w1,
  pv = x1,
  hv = C1,
  mv = iv;
function vv(n) {
  var r,
    o,
    s = "";
  if (typeof n == "string" || typeof n == "number") s += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var a = n.length;
      for (r = 0; r < a; r++)
        n[r] && (o = vv(n[r])) && (s && (s += " "), (s += o));
    } else for (o in n) n[o] && (s && (s += " "), (s += o));
  return s;
}
function gv() {
  for (var n, r, o = 0, s = "", a = arguments.length; o < a; o++)
    (n = arguments[o]) && (r = vv(n)) && (s && (s += " "), (s += r));
  return s;
}
const Sh = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  Ch = gv,
  yv = (n, r) => (o) => {
    var s;
    if (r?.variants == null) return Ch(n, o?.class, o?.className);
    const { variants: a, defaultVariants: c } = r,
      f = Object.keys(a).map((x) => {
        const y = o?.[x],
          w = c?.[x];
        if (y === null) return null;
        const S = Sh(y) || Sh(w);
        return a[x][S];
      }),
      p =
        o &&
        Object.entries(o).reduce((x, y) => {
          let [w, S] = y;
          return (S === void 0 || (x[w] = S), x);
        }, {}),
      m =
        r == null || (s = r.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((x, y) => {
              let { class: w, className: S, ...R } = y;
              return Object.entries(R).every((P) => {
                let [C, E] = P;
                return Array.isArray(E)
                  ? E.includes({ ...c, ...p }[C])
                  : { ...c, ...p }[C] === E;
              })
                ? [...x, w, S]
                : x;
            }, []);
    return Ch(n, f, m, o?.class, o?.className);
  };
const k1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  wv = (...n) => n.filter((r, o, s) => !!r && s.indexOf(r) === o).join(" ");
var P1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const R1 = h.forwardRef(
  (
    {
      color: n = "currentColor",
      size: r = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: s,
      className: a = "",
      children: c,
      iconNode: f,
      ...p
    },
    m,
  ) =>
    h.createElement(
      "svg",
      {
        ref: m,
        ...P1,
        width: r,
        height: r,
        stroke: n,
        strokeWidth: s ? (Number(o) * 24) / Number(r) : o,
        className: wv("lucide", a),
        ...p,
      },
      [
        ...f.map(([x, y]) => h.createElement(x, y)),
        ...(Array.isArray(c) ? c : [c]),
      ],
    ),
);
const Re = (n, r) => {
  const o = h.forwardRef(({ className: s, ...a }, c) =>
    h.createElement(R1, {
      ref: c,
      iconNode: r,
      className: wv(`lucide-${k1(n)}`, s),
      ...a,
    }),
  );
  return ((o.displayName = `${n}`), o);
};
const xv = Re("Ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }],
]);
const O1 = Re("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
const Ac = Re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
const Sv = Re("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
const T1 = Re("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
const Ti = Re("FileCode2", [
  [
    "path",
    { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m5 12-3 3 3 3", key: "oke12k" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }],
]);
const Eh = Re("FilePlus2", [
  [
    "path",
    { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M3 15h6", key: "4e2qda" }],
  ["path", { d: "M6 12v6", key: "1u72j0" }],
]);
const N1 = Re("Files", [
  ["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2", key: "x099mo" }],
  [
    "path",
    {
      d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",
      key: "18t6ie",
    },
  ],
  ["path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8", key: "1nja0z" }],
]);
const j1 = Re("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0",
    },
  ],
]);
const _1 = Re("FolderPlus", [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360",
    },
  ],
]);
const Cv = Re("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360",
    },
  ],
]);
const D1 = Re("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
]);
const M1 = Re("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
const A1 = Re("HardDrive", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }],
]);
const I1 = Re("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
const bh = Re("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
const L1 = Re("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
const F1 = Re("PanelLeft", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
]);
const z1 = Re("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu",
    },
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
]);
const $1 = Re("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
const U1 = Re("RotateCw", [
  [
    "path",
    { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
]);
const V1 = Re("SearchX", [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
const H1 = Re("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
const Ev = Re("SquareTerminal", [
  ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
  ["path", { d: "M11 13h4", key: "1p7l4v" }],
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
]);
const W1 = Re("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
const B1 = Re("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
const Q1 = Re("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
const bl = Re("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Ic = "-",
  K1 = (n) => {
    const r = G1(n),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: s } = n;
    return {
      getClassGroupId: (f) => {
        const p = f.split(Ic);
        return (p[0] === "" && p.length !== 1 && p.shift(), bv(p, r) || q1(f));
      },
      getConflictingClassGroupIds: (f, p) => {
        const m = o[f] || [];
        return p && s[f] ? [...m, ...s[f]] : m;
      },
    };
  },
  bv = (n, r) => {
    if (n.length === 0) return r.classGroupId;
    const o = n[0],
      s = r.nextPart.get(o),
      a = s ? bv(n.slice(1), s) : void 0;
    if (a) return a;
    if (r.validators.length === 0) return;
    const c = n.join(Ic);
    return r.validators.find(({ validator: f }) => f(c))?.classGroupId;
  },
  kh = /^\[(.+)\]$/,
  q1 = (n) => {
    if (kh.test(n)) {
      const r = kh.exec(n)[1],
        o = r?.substring(0, r.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  },
  G1 = (n) => {
    const { theme: r, prefix: o } = n,
      s = { nextPart: new Map(), validators: [] };
    return (
      X1(Object.entries(n.classGroups), o).forEach(([c, f]) => {
        lc(f, s, c, r);
      }),
      s
    );
  },
  lc = (n, r, o, s) => {
    n.forEach((a) => {
      if (typeof a == "string") {
        const c = a === "" ? r : Ph(r, a);
        c.classGroupId = o;
        return;
      }
      if (typeof a == "function") {
        if (Y1(a)) {
          lc(a(s), r, o, s);
          return;
        }
        r.validators.push({ validator: a, classGroupId: o });
        return;
      }
      Object.entries(a).forEach(([c, f]) => {
        lc(f, Ph(r, c), o, s);
      });
    });
  },
  Ph = (n, r) => {
    let o = n;
    return (
      r.split(Ic).forEach((s) => {
        (o.nextPart.has(s) ||
          o.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (o = o.nextPart.get(s)));
      }),
      o
    );
  },
  Y1 = (n) => n.isThemeGetter,
  X1 = (n, r) =>
    r
      ? n.map(([o, s]) => {
          const a = s.map((c) =>
            typeof c == "string"
              ? r + c
              : typeof c == "object"
                ? Object.fromEntries(
                    Object.entries(c).map(([f, p]) => [r + f, p]),
                  )
                : c,
          );
          return [o, a];
        })
      : n,
  Z1 = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      o = new Map(),
      s = new Map();
    const a = (c, f) => {
      (o.set(c, f), r++, r > n && ((r = 0), (s = o), (o = new Map())));
    };
    return {
      get(c) {
        let f = o.get(c);
        if (f !== void 0) return f;
        if ((f = s.get(c)) !== void 0) return (a(c, f), f);
      },
      set(c, f) {
        o.has(c) ? o.set(c, f) : a(c, f);
      },
    };
  },
  kv = "!",
  J1 = (n) => {
    const { separator: r, experimentalParseClassName: o } = n,
      s = r.length === 1,
      a = r[0],
      c = r.length,
      f = (p) => {
        const m = [];
        let x = 0,
          y = 0,
          w;
        for (let E = 0; E < p.length; E++) {
          let k = p[E];
          if (x === 0) {
            if (k === a && (s || p.slice(E, E + c) === r)) {
              (m.push(p.slice(y, E)), (y = E + c));
              continue;
            }
            if (k === "/") {
              w = E;
              continue;
            }
          }
          k === "[" ? x++ : k === "]" && x--;
        }
        const S = m.length === 0 ? p : p.substring(y),
          R = S.startsWith(kv),
          P = R ? S.substring(1) : S,
          C = w && w > y ? w - y : void 0;
        return {
          modifiers: m,
          hasImportantModifier: R,
          baseClassName: P,
          maybePostfixModifierPosition: C,
        };
      };
    return o ? (p) => o({ className: p, parseClassName: f }) : f;
  },
  eS = (n) => {
    if (n.length <= 1) return n;
    const r = [];
    let o = [];
    return (
      n.forEach((s) => {
        s[0] === "[" ? (r.push(...o.sort(), s), (o = [])) : o.push(s);
      }),
      r.push(...o.sort()),
      r
    );
  },
  tS = (n) => ({ cache: Z1(n.cacheSize), parseClassName: J1(n), ...K1(n) }),
  nS = /\s+/,
  rS = (n, r) => {
    const {
        parseClassName: o,
        getClassGroupId: s,
        getConflictingClassGroupIds: a,
      } = r,
      c = [],
      f = n.trim().split(nS);
    let p = "";
    for (let m = f.length - 1; m >= 0; m -= 1) {
      const x = f[m],
        {
          modifiers: y,
          hasImportantModifier: w,
          baseClassName: S,
          maybePostfixModifierPosition: R,
        } = o(x);
      let P = !!R,
        C = s(P ? S.substring(0, R) : S);
      if (!C) {
        if (!P) {
          p = x + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((C = s(S)), !C)) {
          p = x + (p.length > 0 ? " " + p : p);
          continue;
        }
        P = !1;
      }
      const E = eS(y).join(":"),
        k = w ? E + kv : E,
        N = k + C;
      if (c.includes(N)) continue;
      c.push(N);
      const D = a(C, P);
      for (let _ = 0; _ < D.length; ++_) {
        const I = D[_];
        c.push(k + I);
      }
      p = x + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function oS() {
  let n = 0,
    r,
    o,
    s = "";
  for (; n < arguments.length; )
    (r = arguments[n++]) && (o = Pv(r)) && (s && (s += " "), (s += o));
  return s;
}
const Pv = (n) => {
  if (typeof n == "string") return n;
  let r,
    o = "";
  for (let s = 0; s < n.length; s++)
    n[s] && (r = Pv(n[s])) && (o && (o += " "), (o += r));
  return o;
};
function iS(n, ...r) {
  let o,
    s,
    a,
    c = f;
  function f(m) {
    const x = r.reduce((y, w) => w(y), n());
    return ((o = tS(x)), (s = o.cache.get), (a = o.cache.set), (c = p), p(m));
  }
  function p(m) {
    const x = s(m);
    if (x) return x;
    const y = rS(m, o);
    return (a(m, y), y);
  }
  return function () {
    return c(oS.apply(null, arguments));
  };
}
const De = (n) => {
    const r = (o) => o[n] || [];
    return ((r.isThemeGetter = !0), r);
  },
  Rv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  sS = /^\d+\/\d+$/,
  lS = new Set(["px", "full", "screen"]),
  aS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  uS =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  cS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  dS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  fS =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Sn = (n) => co(n) || lS.has(n) || sS.test(n),
  Jn = (n) => yo(n, "length", xS),
  co = (n) => !!n && !Number.isNaN(Number(n)),
  _u = (n) => yo(n, "number", co),
  fi = (n) => !!n && Number.isInteger(Number(n)),
  pS = (n) => n.endsWith("%") && co(n.slice(0, -1)),
  ye = (n) => Rv.test(n),
  er = (n) => aS.test(n),
  hS = new Set(["length", "size", "percentage"]),
  mS = (n) => yo(n, hS, Ov),
  vS = (n) => yo(n, "position", Ov),
  gS = new Set(["image", "url"]),
  yS = (n) => yo(n, gS, CS),
  wS = (n) => yo(n, "", SS),
  pi = () => !0,
  yo = (n, r, o) => {
    const s = Rv.exec(n);
    return s
      ? s[1]
        ? typeof r == "string"
          ? s[1] === r
          : r.has(s[1])
        : o(s[2])
      : !1;
  },
  xS = (n) => uS.test(n) && !cS.test(n),
  Ov = () => !1,
  SS = (n) => dS.test(n),
  CS = (n) => fS.test(n),
  ES = () => {
    const n = De("colors"),
      r = De("spacing"),
      o = De("blur"),
      s = De("brightness"),
      a = De("borderColor"),
      c = De("borderRadius"),
      f = De("borderSpacing"),
      p = De("borderWidth"),
      m = De("contrast"),
      x = De("grayscale"),
      y = De("hueRotate"),
      w = De("invert"),
      S = De("gap"),
      R = De("gradientColorStops"),
      P = De("gradientColorStopPositions"),
      C = De("inset"),
      E = De("margin"),
      k = De("opacity"),
      N = De("padding"),
      D = De("saturate"),
      _ = De("scale"),
      I = De("sepia"),
      F = De("skew"),
      $ = De("space"),
      U = De("translate"),
      G = () => ["auto", "contain", "none"],
      W = () => ["auto", "hidden", "clip", "visible", "scroll"],
      ce = () => ["auto", ye, r],
      Y = () => [ye, r],
      ne = () => ["", Sn, Jn],
      te = () => ["auto", co, ye],
      le = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      Q = () => ["solid", "dashed", "dotted", "double", "none"],
      oe = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      z = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      J = () => ["", "0", ye],
      X = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      T = () => [co, ye];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [pi],
        spacing: [Sn, Jn],
        blur: ["none", "", er, ye],
        brightness: T(),
        borderColor: [n],
        borderRadius: ["none", "", "full", er, ye],
        borderSpacing: Y(),
        borderWidth: ne(),
        contrast: T(),
        grayscale: J(),
        hueRotate: T(),
        invert: J(),
        gap: Y(),
        gradientColorStops: [n],
        gradientColorStopPositions: [pS, Jn],
        inset: ce(),
        margin: ce(),
        opacity: T(),
        padding: Y(),
        saturate: T(),
        scale: T(),
        sepia: J(),
        skew: T(),
        space: Y(),
        translate: Y(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ye] }],
        container: ["container"],
        columns: [{ columns: [er] }],
        "break-after": [{ "break-after": X() }],
        "break-before": [{ "break-before": X() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...le(), ye] }],
        overflow: [{ overflow: W() }],
        "overflow-x": [{ "overflow-x": W() }],
        "overflow-y": [{ "overflow-y": W() }],
        overscroll: [{ overscroll: G() }],
        "overscroll-x": [{ "overscroll-x": G() }],
        "overscroll-y": [{ "overscroll-y": G() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [C] }],
        "inset-x": [{ "inset-x": [C] }],
        "inset-y": [{ "inset-y": [C] }],
        start: [{ start: [C] }],
        end: [{ end: [C] }],
        top: [{ top: [C] }],
        right: [{ right: [C] }],
        bottom: [{ bottom: [C] }],
        left: [{ left: [C] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", fi, ye] }],
        basis: [{ basis: ce() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ye] }],
        grow: [{ grow: J() }],
        shrink: [{ shrink: J() }],
        order: [{ order: ["first", "last", "none", fi, ye] }],
        "grid-cols": [{ "grid-cols": [pi] }],
        "col-start-end": [{ col: ["auto", { span: ["full", fi, ye] }, ye] }],
        "col-start": [{ "col-start": te() }],
        "col-end": [{ "col-end": te() }],
        "grid-rows": [{ "grid-rows": [pi] }],
        "row-start-end": [{ row: ["auto", { span: [fi, ye] }, ye] }],
        "row-start": [{ "row-start": te() }],
        "row-end": [{ "row-end": te() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ye] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ye] }],
        gap: [{ gap: [S] }],
        "gap-x": [{ "gap-x": [S] }],
        "gap-y": [{ "gap-y": [S] }],
        "justify-content": [{ justify: ["normal", ...z()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...z(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...z(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [N] }],
        px: [{ px: [N] }],
        py: [{ py: [N] }],
        ps: [{ ps: [N] }],
        pe: [{ pe: [N] }],
        pt: [{ pt: [N] }],
        pr: [{ pr: [N] }],
        pb: [{ pb: [N] }],
        pl: [{ pl: [N] }],
        m: [{ m: [E] }],
        mx: [{ mx: [E] }],
        my: [{ my: [E] }],
        ms: [{ ms: [E] }],
        me: [{ me: [E] }],
        mt: [{ mt: [E] }],
        mr: [{ mr: [E] }],
        mb: [{ mb: [E] }],
        ml: [{ ml: [E] }],
        "space-x": [{ "space-x": [$] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [$] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ye, r] }],
        "min-w": [{ "min-w": [ye, r, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ye,
              r,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [er] },
              er,
            ],
          },
        ],
        h: [{ h: [ye, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ye, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ye, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ye, r, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", er, Jn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              _u,
            ],
          },
        ],
        "font-family": [{ font: [pi] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              ye,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", co, _u] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Sn,
              ye,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ye] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ye] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [n] }],
        "placeholder-opacity": [{ "placeholder-opacity": [k] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [n] }],
        "text-opacity": [{ "text-opacity": [k] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Q(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Sn, Jn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Sn, ye] }],
        "text-decoration-color": [{ decoration: [n] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Y() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ye,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ye] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [k] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...le(), vS] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", mS] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              yS,
            ],
          },
        ],
        "bg-color": [{ bg: [n] }],
        "gradient-from-pos": [{ from: [P] }],
        "gradient-via-pos": [{ via: [P] }],
        "gradient-to-pos": [{ to: [P] }],
        "gradient-from": [{ from: [R] }],
        "gradient-via": [{ via: [R] }],
        "gradient-to": [{ to: [R] }],
        rounded: [{ rounded: [c] }],
        "rounded-s": [{ "rounded-s": [c] }],
        "rounded-e": [{ "rounded-e": [c] }],
        "rounded-t": [{ "rounded-t": [c] }],
        "rounded-r": [{ "rounded-r": [c] }],
        "rounded-b": [{ "rounded-b": [c] }],
        "rounded-l": [{ "rounded-l": [c] }],
        "rounded-ss": [{ "rounded-ss": [c] }],
        "rounded-se": [{ "rounded-se": [c] }],
        "rounded-ee": [{ "rounded-ee": [c] }],
        "rounded-es": [{ "rounded-es": [c] }],
        "rounded-tl": [{ "rounded-tl": [c] }],
        "rounded-tr": [{ "rounded-tr": [c] }],
        "rounded-br": [{ "rounded-br": [c] }],
        "rounded-bl": [{ "rounded-bl": [c] }],
        "border-w": [{ border: [p] }],
        "border-w-x": [{ "border-x": [p] }],
        "border-w-y": [{ "border-y": [p] }],
        "border-w-s": [{ "border-s": [p] }],
        "border-w-e": [{ "border-e": [p] }],
        "border-w-t": [{ "border-t": [p] }],
        "border-w-r": [{ "border-r": [p] }],
        "border-w-b": [{ "border-b": [p] }],
        "border-w-l": [{ "border-l": [p] }],
        "border-opacity": [{ "border-opacity": [k] }],
        "border-style": [{ border: [...Q(), "hidden"] }],
        "divide-x": [{ "divide-x": [p] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [p] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [k] }],
        "divide-style": [{ divide: Q() }],
        "border-color": [{ border: [a] }],
        "border-color-x": [{ "border-x": [a] }],
        "border-color-y": [{ "border-y": [a] }],
        "border-color-s": [{ "border-s": [a] }],
        "border-color-e": [{ "border-e": [a] }],
        "border-color-t": [{ "border-t": [a] }],
        "border-color-r": [{ "border-r": [a] }],
        "border-color-b": [{ "border-b": [a] }],
        "border-color-l": [{ "border-l": [a] }],
        "divide-color": [{ divide: [a] }],
        "outline-style": [{ outline: ["", ...Q()] }],
        "outline-offset": [{ "outline-offset": [Sn, ye] }],
        "outline-w": [{ outline: [Sn, Jn] }],
        "outline-color": [{ outline: [n] }],
        "ring-w": [{ ring: ne() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [n] }],
        "ring-opacity": [{ "ring-opacity": [k] }],
        "ring-offset-w": [{ "ring-offset": [Sn, Jn] }],
        "ring-offset-color": [{ "ring-offset": [n] }],
        shadow: [{ shadow: ["", "inner", "none", er, wS] }],
        "shadow-color": [{ shadow: [pi] }],
        opacity: [{ opacity: [k] }],
        "mix-blend": [
          { "mix-blend": [...oe(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": oe() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [o] }],
        brightness: [{ brightness: [s] }],
        contrast: [{ contrast: [m] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", er, ye] }],
        grayscale: [{ grayscale: [x] }],
        "hue-rotate": [{ "hue-rotate": [y] }],
        invert: [{ invert: [w] }],
        saturate: [{ saturate: [D] }],
        sepia: [{ sepia: [I] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [o] }],
        "backdrop-brightness": [{ "backdrop-brightness": [s] }],
        "backdrop-contrast": [{ "backdrop-contrast": [m] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [x] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [y] }],
        "backdrop-invert": [{ "backdrop-invert": [w] }],
        "backdrop-opacity": [{ "backdrop-opacity": [k] }],
        "backdrop-saturate": [{ "backdrop-saturate": [D] }],
        "backdrop-sepia": [{ "backdrop-sepia": [I] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [f] }],
        "border-spacing-x": [{ "border-spacing-x": [f] }],
        "border-spacing-y": [{ "border-spacing-y": [f] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              ye,
            ],
          },
        ],
        duration: [{ duration: T() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ye] }],
        delay: [{ delay: T() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ye] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [_] }],
        "scale-x": [{ "scale-x": [_] }],
        "scale-y": [{ "scale-y": [_] }],
        rotate: [{ rotate: [fi, ye] }],
        "translate-x": [{ "translate-x": [U] }],
        "translate-y": [{ "translate-y": [U] }],
        "skew-x": [{ "skew-x": [F] }],
        "skew-y": [{ "skew-y": [F] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ye,
            ],
          },
        ],
        accent: [{ accent: ["auto", n] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ye,
            ],
          },
        ],
        "caret-color": [{ caret: [n] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": Y() }],
        "scroll-mx": [{ "scroll-mx": Y() }],
        "scroll-my": [{ "scroll-my": Y() }],
        "scroll-ms": [{ "scroll-ms": Y() }],
        "scroll-me": [{ "scroll-me": Y() }],
        "scroll-mt": [{ "scroll-mt": Y() }],
        "scroll-mr": [{ "scroll-mr": Y() }],
        "scroll-mb": [{ "scroll-mb": Y() }],
        "scroll-ml": [{ "scroll-ml": Y() }],
        "scroll-p": [{ "scroll-p": Y() }],
        "scroll-px": [{ "scroll-px": Y() }],
        "scroll-py": [{ "scroll-py": Y() }],
        "scroll-ps": [{ "scroll-ps": Y() }],
        "scroll-pe": [{ "scroll-pe": Y() }],
        "scroll-pt": [{ "scroll-pt": Y() }],
        "scroll-pr": [{ "scroll-pr": Y() }],
        "scroll-pb": [{ "scroll-pb": Y() }],
        "scroll-pl": [{ "scroll-pl": Y() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ye] },
        ],
        fill: [{ fill: [n, "none"] }],
        "stroke-w": [{ stroke: [Sn, Jn, _u] }],
        stroke: [{ stroke: [n, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  bS = iS(ES);
function Le(...n) {
  return bS(gv(n));
}
const kS = b1,
  Tv = h.forwardRef(({ className: n, ...r }, o) =>
    g.jsx(cv, {
      ref: o,
      className: Le(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        n,
      ),
      ...r,
    }),
  );
Tv.displayName = cv.displayName;
const PS = yv(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Nv = h.forwardRef(({ className: n, variant: r, ...o }, s) =>
    g.jsx(dv, { ref: s, className: Le(PS({ variant: r }), n), ...o }),
  );
Nv.displayName = dv.displayName;
const RS = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx(hv, {
    ref: o,
    className: Le(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      n,
    ),
    ...r,
  }),
);
RS.displayName = hv.displayName;
const jv = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx(mv, {
    ref: o,
    className: Le(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      n,
    ),
    "toast-close": "",
    ...r,
    children: g.jsx(bl, { className: "h-4 w-4" }),
  }),
);
jv.displayName = mv.displayName;
const _v = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx(fv, { ref: o, className: Le("text-sm font-semibold", n), ...r }),
);
_v.displayName = fv.displayName;
const Dv = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx(pv, { ref: o, className: Le("text-sm opacity-90", n), ...r }),
);
Dv.displayName = pv.displayName;
function OS() {
  const { toasts: n } = Om();
  return g.jsxs(kS, {
    children: [
      n.map(function ({ id: r, title: o, description: s, action: a, ...c }) {
        return g.jsxs(
          Nv,
          {
            ...c,
            children: [
              g.jsxs("div", {
                className: "grid gap-1",
                children: [
                  o && g.jsx(_v, { children: o }),
                  s && g.jsx(Dv, { children: s }),
                ],
              }),
              a,
              g.jsx(jv, {}),
            ],
          },
          r,
        );
      }),
      g.jsx(Tv, {}),
    ],
  });
}
var TS = Object.defineProperty,
  NS = (n, r) => TS(n, "name", { value: r, configurable: !0 }),
  jS = mo[" useId ".trim().toString()] || (() => {}),
  _S = 0;
function wi(n) {
  const [r, o] = h.useState(jS());
  return (
    wt(() => {
      n || o((s) => s ?? String(_S++));
    }, [n]),
    n || (r ? `radix-${r}` : "")
  );
}
NS(wi, "useId");
const DS = ["top", "right", "bottom", "left"],
  ir = Math.min,
  bn = Math.max,
  dl = Math.round,
  Qs = Math.floor,
  kn = (n) => ({ x: n, y: n }),
  MS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Mv(n, r, o) {
  return bn(n, ir(r, o));
}
function Rn(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function sr(n) {
  return n.split("-")[0];
}
function wo(n) {
  return n.split("-")[1];
}
function Lc(n) {
  return n === "x" ? "y" : "x";
}
function Fc(n) {
  return n === "y" ? "height" : "width";
}
function ln(n) {
  const r = n[0];
  return r === "t" || r === "b" ? "y" : "x";
}
function zc(n) {
  return Lc(ln(n));
}
function AS(n, r, o) {
  o === void 0 && (o = !1);
  const s = wo(n),
    a = zc(n),
    c = Fc(a);
  let f =
    a === "x"
      ? s === (o ? "end" : "start")
        ? "right"
        : "left"
      : s === "start"
        ? "bottom"
        : "top";
  return (r.reference[c] > r.floating[c] && (f = fl(f)), [f, fl(f)]);
}
function IS(n) {
  const r = fl(n);
  return [ac(n), r, ac(r)];
}
function ac(n) {
  return n.includes("start")
    ? n.replace("start", "end")
    : n.replace("end", "start");
}
const Rh = ["left", "right"],
  Oh = ["right", "left"],
  LS = ["top", "bottom"],
  FS = ["bottom", "top"];
function zS(n, r, o) {
  switch (n) {
    case "top":
    case "bottom":
      return o ? (r ? Oh : Rh) : r ? Rh : Oh;
    case "left":
    case "right":
      return r ? LS : FS;
    default:
      return [];
  }
}
function $S(n, r, o, s) {
  const a = wo(n);
  let c = zS(sr(n), o === "start", s);
  return (
    a && ((c = c.map((f) => f + "-" + a)), r && (c = c.concat(c.map(ac)))),
    c
  );
}
function fl(n) {
  const r = sr(n);
  return MS[r] + n.slice(r.length);
}
function US(n) {
  var r, o, s, a;
  return {
    top: (r = n.top) != null ? r : 0,
    right: (o = n.right) != null ? o : 0,
    bottom: (s = n.bottom) != null ? s : 0,
    left: (a = n.left) != null ? a : 0,
  };
}
function Av(n) {
  return typeof n != "number"
    ? US(n)
    : { top: n, right: n, bottom: n, left: n };
}
function pl(n) {
  const { x: r, y: o, width: s, height: a } = n;
  return {
    width: s,
    height: a,
    top: o,
    left: r,
    right: r + s,
    bottom: o + a,
    x: r,
    y: o,
  };
}
function Th(n, r, o) {
  let { reference: s, floating: a } = n;
  const c = ln(r),
    f = zc(r),
    p = Fc(f),
    m = sr(r),
    x = c === "y",
    y = s.x + s.width / 2 - a.width / 2,
    w = s.y + s.height / 2 - a.height / 2,
    S = s[p] / 2 - a[p] / 2;
  let R;
  switch (m) {
    case "top":
      R = { x: y, y: s.y - a.height };
      break;
    case "bottom":
      R = { x: y, y: s.y + s.height };
      break;
    case "right":
      R = { x: s.x + s.width, y: w };
      break;
    case "left":
      R = { x: s.x - a.width, y: w };
      break;
    default:
      R = { x: s.x, y: s.y };
  }
  const P = wo(r);
  return (P && (R[f] += S * (P === "end" ? 1 : -1) * (o && x ? -1 : 1)), R);
}
async function VS(n, r) {
  var o;
  r === void 0 && (r = {});
  const { x: s, y: a, platform: c, rects: f, elements: p, strategy: m } = n,
    {
      boundary: x = "clippingAncestors",
      rootBoundary: y = "viewport",
      elementContext: w = "floating",
      altBoundary: S = !1,
      padding: R = 0,
    } = Rn(r, n),
    P = Av(R),
    E = p[S ? (w === "floating" ? "reference" : "floating") : w],
    k = pl(
      await c.getClippingRect({
        element:
          (o = await (c.isElement == null ? void 0 : c.isElement(E))) == null ||
          o
            ? E
            : E.contextElement ||
              (await (c.getDocumentElement == null
                ? void 0
                : c.getDocumentElement(p.floating))),
        boundary: x,
        rootBoundary: y,
        strategy: m,
      }),
    ),
    N =
      w === "floating"
        ? { x: s, y: a, width: f.floating.width, height: f.floating.height }
        : f.reference,
    D = await (c.getOffsetParent == null
      ? void 0
      : c.getOffsetParent(p.floating)),
    _ = ((await (c.isElement == null ? void 0 : c.isElement(D))) &&
      (await (c.getScale == null ? void 0 : c.getScale(D)))) || { x: 1, y: 1 },
    I = pl(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: p,
            rect: N,
            offsetParent: D,
            strategy: m,
          })
        : N,
    );
  return {
    top: (k.top - I.top + P.top) / _.y,
    bottom: (I.bottom - k.bottom + P.bottom) / _.y,
    left: (k.left - I.left + P.left) / _.x,
    right: (I.right - k.right + P.right) / _.x,
  };
}
const HS = 50,
  WS = async (n, r, o) => {
    const {
        placement: s = "bottom",
        strategy: a = "absolute",
        middleware: c = [],
        platform: f,
      } = o,
      p = f.detectOverflow ? f : { ...f, detectOverflow: VS },
      m = await (f.isRTL == null ? void 0 : f.isRTL(r));
    let x = await f.getElementRects({ reference: n, floating: r, strategy: a }),
      { x: y, y: w } = Th(x, s, m),
      S = s,
      R = 0;
    const P = {};
    for (let C = 0; C < c.length; C++) {
      const E = c[C];
      if (!E) continue;
      const { name: k, fn: N } = E,
        {
          x: D,
          y: _,
          data: I,
          reset: F,
        } = await N({
          x: y,
          y: w,
          initialPlacement: s,
          placement: S,
          strategy: a,
          middlewareData: P,
          rects: x,
          platform: p,
          elements: { reference: n, floating: r },
        });
      ((y = D ?? y),
        (w = _ ?? w),
        (P[k] = { ...P[k], ...I }),
        F &&
          R < HS &&
          (R++,
          typeof F == "object" &&
            (F.placement && (S = F.placement),
            F.rects &&
              (x =
                F.rects === !0
                  ? await f.getElementRects({
                      reference: n,
                      floating: r,
                      strategy: a,
                    })
                  : F.rects),
            ({ x: y, y: w } = Th(x, S, m))),
          (C = -1)));
    }
    return { x: y, y: w, placement: S, strategy: a, middlewareData: P };
  },
  BS = (n) => ({
    name: "arrow",
    options: n,
    async fn(r) {
      const {
          x: o,
          y: s,
          placement: a,
          rects: c,
          platform: f,
          elements: p,
          middlewareData: m,
        } = r,
        { element: x, padding: y = 0 } = Rn(n, r) || {};
      if (x == null) return {};
      const w = Av(y),
        S = { x: o, y: s },
        R = zc(a),
        P = Fc(R),
        C = await f.getDimensions(x),
        E = R === "y",
        k = E ? "top" : "left",
        N = E ? "bottom" : "right",
        D = E ? "clientHeight" : "clientWidth",
        _ = c.reference[P] + c.reference[R] - S[R] - c.floating[P],
        I = S[R] - c.reference[R],
        F = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(x));
      let $ = F ? F[D] : 0;
      (!$ || !(await (f.isElement == null ? void 0 : f.isElement(F)))) &&
        ($ = p.floating[D] || c.floating[P]);
      const U = _ / 2 - I / 2,
        G = $ / 2 - C[P] / 2 - 1,
        W = ir(w[k], G),
        ce = ir(w[N], G),
        Y = $ - C[P] - ce,
        ne = $ / 2 - C[P] / 2 + U,
        te = Mv(W, ne, Y),
        le =
          !m.arrow &&
          wo(a) != null &&
          ne !== te &&
          c.reference[P] / 2 - (ne < W ? W : ce) - C[P] / 2 < 0,
        Q = le ? (ne < W ? ne - W : ne - Y) : 0;
      return {
        [R]: S[R] + Q,
        data: {
          [R]: te,
          centerOffset: ne - te - Q,
          ...(le && { alignmentOffset: Q }),
        },
        reset: le,
      };
    },
  }),
  QS = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "flip",
        options: n,
        async fn(r) {
          var o, s;
          const {
              placement: a,
              middlewareData: c,
              rects: f,
              initialPlacement: p,
              platform: m,
              elements: x,
            } = r,
            {
              mainAxis: y = !0,
              crossAxis: w = !0,
              fallbackPlacements: S,
              fallbackStrategy: R = "bestFit",
              fallbackAxisSideDirection: P = "none",
              flipAlignment: C = !0,
              ...E
            } = Rn(n, r);
          if ((o = c.arrow) != null && o.alignmentOffset) return {};
          const k = sr(a),
            N = ln(p),
            D = sr(p) === p,
            _ = await (m.isRTL == null ? void 0 : m.isRTL(x.floating)),
            I = S || (D || !C ? [fl(p)] : IS(p)),
            F = P !== "none";
          !S && F && I.push(...$S(p, C, P, _));
          const $ = [p, ...I],
            U = await m.detectOverflow(r, E),
            G = [];
          let W = ((s = c.flip) == null ? void 0 : s.overflows) || [];
          if ((y && G.push(U[k]), w)) {
            const te = AS(a, f, _);
            G.push(U[te[0]], U[te[1]]);
          }
          if (
            ((W = [...W, { placement: a, overflows: G }]),
            !G.every((te) => te <= 0))
          ) {
            var ce, Y;
            const te = (((ce = c.flip) == null ? void 0 : ce.index) || 0) + 1,
              le = $[te];
            if (
              le &&
              (!(w === "alignment" ? N !== ln(le) : !1) ||
                W.every((z) =>
                  ln(z.placement) === N ? z.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: te, overflows: W },
                reset: { placement: le },
              };
            let Q =
              (Y = W.filter((oe) => oe.overflows[0] <= 0).sort(
                (oe, z) => oe.overflows[1] - z.overflows[1],
              )[0]) == null
                ? void 0
                : Y.placement;
            if (!Q)
              switch (R) {
                case "bestFit": {
                  var ne;
                  const oe =
                    (ne = W.filter((z) => {
                      if (F) {
                        const J = ln(z.placement);
                        return J === N || J === "y";
                      }
                      return !0;
                    })
                      .map((z) => [
                        z.placement,
                        z.overflows
                          .filter((J) => J > 0)
                          .reduce((J, X) => J + X, 0),
                      ])
                      .sort((z, J) => z[1] - J[1])[0]) == null
                      ? void 0
                      : ne[0];
                  oe && (Q = oe);
                  break;
                }
                case "initialPlacement":
                  Q = p;
                  break;
              }
            if (a !== Q) return { reset: { placement: Q } };
          }
          return {};
        },
      }
    );
  };
function Nh(n, r) {
  return {
    top: n.top - r.height,
    right: n.right - r.width,
    bottom: n.bottom - r.height,
    left: n.left - r.width,
  };
}
function jh(n) {
  return DS.some((r) => n[r] >= 0);
}
const KS = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "hide",
        options: n,
        async fn(r) {
          const { rects: o, platform: s } = r,
            { strategy: a = "referenceHidden", ...c } = Rn(n, r);
          switch (a) {
            case "referenceHidden": {
              const f = await s.detectOverflow(r, {
                  ...c,
                  elementContext: "reference",
                }),
                p = Nh(f, o.reference);
              return {
                data: { referenceHiddenOffsets: p, referenceHidden: jh(p) },
              };
            }
            case "escaped": {
              const f = await s.detectOverflow(r, { ...c, altBoundary: !0 }),
                p = Nh(f, o.floating);
              return { data: { escapedOffsets: p, escaped: jh(p) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Iv = new Set(["left", "top"]);
async function qS(n, r) {
  const { placement: o, platform: s, elements: a } = n,
    c = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)),
    f = sr(o),
    p = wo(o),
    m = ln(o) === "y",
    x = Iv.has(f) ? -1 : 1,
    y = c && m ? -1 : 1,
    w = Rn(r, n);
  let {
    mainAxis: S,
    crossAxis: R,
    alignmentAxis: P,
  } = typeof w == "number"
    ? { mainAxis: w, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: w.mainAxis || 0,
        crossAxis: w.crossAxis || 0,
        alignmentAxis: w.alignmentAxis,
      };
  return (
    p && typeof P == "number" && (R = p === "end" ? P * -1 : P),
    m ? { x: R * y, y: S * x } : { x: S * x, y: R * y }
  );
}
const GS = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: "offset",
        options: n,
        async fn(r) {
          var o, s;
          const { x: a, y: c, placement: f, middlewareData: p } = r,
            m = await qS(r, n);
          return f === ((o = p.offset) == null ? void 0 : o.placement) &&
            (s = p.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: a + m.x, y: c + m.y, data: { ...m, placement: f } };
        },
      }
    );
  },
  YS = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "shift",
        options: n,
        async fn(r) {
          const { x: o, y: s, placement: a, platform: c } = r,
            {
              mainAxis: f = !0,
              crossAxis: p = !1,
              limiter: m = {
                fn: (N) => {
                  let { x: D, y: _ } = N;
                  return { x: D, y: _ };
                },
              },
              ...x
            } = Rn(n, r),
            y = { x: o, y: s },
            w = await c.detectOverflow(r, x),
            S = ln(a),
            R = Lc(S);
          let P = y[R],
            C = y[S];
          const E = (N, D) =>
            Mv(
              D + w[N === "y" ? "top" : "left"],
              D,
              D - w[N === "y" ? "bottom" : "right"],
            );
          (f && (P = E(R, P)), p && (C = E(S, C)));
          const k = m.fn({ ...r, [R]: P, [S]: C });
          return {
            ...k,
            data: { x: k.x - o, y: k.y - s, enabled: { [R]: f, [S]: p } },
          };
        },
      }
    );
  },
  XS = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(r) {
          var o, s;
          const { x: a, y: c, placement: f, rects: p, middlewareData: m } = r,
            { offset: x = 0, mainAxis: y = !0, crossAxis: w = !0 } = Rn(n, r),
            S = { x: a, y: c },
            R = ln(f),
            P = Lc(R);
          let C = S[P],
            E = S[R];
          const k = Rn(x, r),
            N =
              typeof k == "number"
                ? { mainAxis: k, crossAxis: 0 }
                : {
                    mainAxis: (o = k.mainAxis) != null ? o : 0,
                    crossAxis: (s = k.crossAxis) != null ? s : 0,
                  };
          if (y) {
            const I = P === "y" ? "height" : "width",
              F = p.reference[P] - p.floating[I] + N.mainAxis,
              $ = p.reference[P] + p.reference[I] - N.mainAxis;
            C < F ? (C = F) : C > $ && (C = $);
          }
          if (w) {
            var D, _;
            const I = P === "y" ? "width" : "height",
              F = Iv.has(sr(f)),
              $ =
                p.reference[R] -
                p.floating[I] +
                ((F && ((D = m.offset) == null ? void 0 : D[R])) || 0) +
                (F ? 0 : N.crossAxis),
              U =
                p.reference[R] +
                p.reference[I] +
                (F ? 0 : ((_ = m.offset) == null ? void 0 : _[R]) || 0) -
                (F ? N.crossAxis : 0);
            E < $ ? (E = $) : E > U && (E = U);
          }
          return { [P]: C, [R]: E };
        },
      }
    );
  },
  ZS = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "size",
        options: n,
        async fn(r) {
          const { placement: o, rects: s, platform: a, elements: c } = r,
            { apply: f = () => {}, ...p } = Rn(n, r),
            m = await a.detectOverflow(r, p),
            x = sr(o),
            y = wo(o),
            w = ln(o) === "y",
            { width: S, height: R } = s.floating;
          let P, C;
          x === "top" || x === "bottom"
            ? ((P = x),
              (C =
                y ===
                ((await (a.isRTL == null ? void 0 : a.isRTL(c.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((C = x), (P = y === "end" ? "top" : "bottom"));
          const E = R - m.top - m.bottom,
            k = S - m.left - m.right,
            N = ir(R - m[P], E),
            D = ir(S - m[C], k),
            _ = r.middlewareData.shift,
            I = !_;
          let F = N,
            $ = D;
          (_ != null && _.enabled.x && ($ = k),
            _ != null && _.enabled.y && (F = E),
            I &&
              !y &&
              (w
                ? ($ = S - 2 * bn(m.left, m.right))
                : (F = R - 2 * bn(m.top, m.bottom))),
            await f({ ...r, availableWidth: $, availableHeight: F }));
          const U = await a.getDimensions(c.floating);
          return S !== U.width || R !== U.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function kl() {
  return typeof window < "u";
}
function xo(n) {
  return Lv(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function xt(n) {
  var r;
  return (
    (n == null || (r = n.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function On(n) {
  var r;
  return (r = (Lv(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function Lv(n) {
  return kl() ? n instanceof Node || n instanceof xt(n).Node : !1;
}
function an(n) {
  return kl() ? n instanceof Element || n instanceof xt(n).Element : !1;
}
function ar(n) {
  return kl() ? n instanceof HTMLElement || n instanceof xt(n).HTMLElement : !1;
}
function _h(n) {
  return !kl() || typeof ShadowRoot > "u"
    ? !1
    : n instanceof ShadowRoot || n instanceof xt(n).ShadowRoot;
}
function Pl(n) {
  const { overflow: r, overflowX: o, overflowY: s, display: a } = un(n);
  return (
    /auto|scroll|overlay|hidden|clip/.test(r + s + o) &&
    a !== "inline" &&
    a !== "contents"
  );
}
function JS(n) {
  return /^(table|td|th)$/.test(xo(n));
}
function Rl(n) {
  try {
    if (n.matches(":popover-open")) return !0;
  } catch {}
  try {
    return n.matches(":modal");
  } catch {
    return !1;
  }
}
const eC = /transform|translate|scale|rotate|perspective|filter/,
  tC = /paint|layout|strict|content/,
  Cr = (n) => !!n && n !== "none";
let Du;
function $c(n) {
  const r = an(n) ? un(n) : n;
  return (
    Cr(r.transform) ||
    Cr(r.translate) ||
    Cr(r.scale) ||
    Cr(r.rotate) ||
    Cr(r.perspective) ||
    (!Uc() && (Cr(r.backdropFilter) || Cr(r.filter))) ||
    eC.test(r.willChange || "") ||
    tC.test(r.contain || "")
  );
}
function nC(n) {
  let r = Or(n);
  for (; ar(r) && !Ci(r); ) {
    if ($c(r)) return r;
    if (Rl(r)) return null;
    r = Or(r);
  }
  return null;
}
function Uc() {
  return (
    Du == null &&
      (Du =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    Du
  );
}
function Ci(n) {
  return /^(html|body|#document)$/.test(xo(n));
}
function un(n) {
  return xt(n).getComputedStyle(n);
}
function Ol(n) {
  return an(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function Or(n) {
  if (xo(n) === "html") return n;
  const r = n.assignedSlot || n.parentNode || (_h(n) && n.host) || On(n);
  return _h(r) ? r.host : r;
}
function Fv(n) {
  const r = Or(n);
  return Ci(r) ? (n.ownerDocument || n).body : ar(r) && Pl(r) ? r : Fv(r);
}
function Ei(n, r, o) {
  var s;
  (r === void 0 && (r = []), o === void 0 && (o = !0));
  const a = Fv(n),
    c = a === ((s = n.ownerDocument) == null ? void 0 : s.body),
    f = xt(a);
  if (c) {
    const p = uc(f);
    return r.concat(
      f,
      f.visualViewport || [],
      Pl(a) ? a : [],
      p && o ? Ei(p) : [],
    );
  } else return r.concat(a, Ei(a, [], o));
}
function uc(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function zv(n) {
  const r = un(n);
  let o = parseFloat(r.width) || 0,
    s = parseFloat(r.height) || 0;
  const a = ar(n),
    c = a ? n.offsetWidth : o,
    f = a ? n.offsetHeight : s,
    p = dl(o) !== c || dl(s) !== f;
  return (p && ((o = c), (s = f)), { width: o, height: s, $: p });
}
function Vc(n) {
  return an(n) ? n : n.contextElement;
}
function fo(n) {
  const r = Vc(n);
  if (!ar(r)) return kn(1);
  const o = r.getBoundingClientRect(),
    { width: s, height: a, $: c } = zv(r);
  let f = (c ? dl(o.width) : o.width) / s,
    p = (c ? dl(o.height) : o.height) / a;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!p || !Number.isFinite(p)) && (p = 1),
    { x: f, y: p }
  );
}
const rC = kn(0);
function $v(n) {
  const r = xt(n);
  return !Uc() || !r.visualViewport
    ? rC
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function oC(n, r, o) {
  return (r === void 0 && (r = !1), !!o && r && o === xt(n));
}
function Tr(n, r, o, s) {
  (r === void 0 && (r = !1), o === void 0 && (o = !1));
  const a = n.getBoundingClientRect(),
    c = Vc(n);
  let f = kn(1);
  r && (s ? an(s) && (f = fo(s)) : (f = fo(n)));
  const p = oC(c, o, s) ? $v(c) : kn(0);
  let m = (a.left + p.x) / f.x,
    x = (a.top + p.y) / f.y,
    y = a.width / f.x,
    w = a.height / f.y;
  if (c && s) {
    const S = xt(c),
      R = an(s) ? xt(s) : s;
    let P = S,
      C = uc(P);
    for (; C && R !== P; ) {
      const E = fo(C),
        k = C.getBoundingClientRect(),
        N = un(C),
        D = k.left + (C.clientLeft + parseFloat(N.paddingLeft)) * E.x,
        _ = k.top + (C.clientTop + parseFloat(N.paddingTop)) * E.y;
      ((m *= E.x),
        (x *= E.y),
        (y *= E.x),
        (w *= E.y),
        (m += D),
        (x += _),
        (P = xt(C)),
        (C = uc(P)));
    }
  }
  return pl({ width: y, height: w, x: m, y: x });
}
function Tl(n, r) {
  const o = Ol(n).scrollLeft;
  return r ? r.left + o : Tr(On(n)).left + o;
}
function Uv(n, r) {
  const o = n.getBoundingClientRect(),
    s = o.left + r.scrollLeft - Tl(n, o),
    a = o.top + r.scrollTop;
  return { x: s, y: a };
}
function iC(n) {
  let { elements: r, rect: o, offsetParent: s, strategy: a } = n;
  const c = a === "fixed",
    f = On(s),
    p = r ? Rl(r.floating) : !1;
  if (s === f || (p && c)) return o;
  let m = { scrollLeft: 0, scrollTop: 0 },
    x = kn(1);
  const y = kn(0),
    w = ar(s);
  if ((w || !c) && ((xo(s) !== "body" || Pl(f)) && (m = Ol(s)), w)) {
    const R = Tr(s);
    ((x = fo(s)), (y.x = R.x + s.clientLeft), (y.y = R.y + s.clientTop));
  }
  const S = f && !w && !c ? Uv(f, m) : kn(0);
  return {
    width: o.width * x.x,
    height: o.height * x.y,
    x: o.x * x.x - m.scrollLeft * x.x + y.x + S.x,
    y: o.y * x.y - m.scrollTop * x.y + y.y + S.y,
  };
}
function sC(n) {
  return n.getClientRects ? Array.from(n.getClientRects()) : [];
}
function lC(n) {
  const r = Ol(n),
    o = n.ownerDocument.body,
    s = bn(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth),
    a = bn(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let c = -r.scrollLeft + Tl(n);
  const f = -r.scrollTop;
  return (
    un(o).direction === "rtl" && (c += bn(n.clientWidth, o.clientWidth) - s),
    { width: s, height: a, x: c, y: f }
  );
}
const aC = 25;
function uC(n, r, o) {
  o === void 0 && (o = "viewport");
  const s = o === "layoutViewport",
    a = xt(n),
    c = On(n),
    f = a.visualViewport;
  let p = c.clientWidth,
    m = c.clientHeight,
    x = 0,
    y = 0;
  if (f) {
    const S = !Uc() || r === "fixed";
    s
      ? S || ((x = -f.offsetLeft), (y = -f.offsetTop))
      : ((p = f.width),
        (m = f.height),
        S && ((x = f.offsetLeft), (y = f.offsetTop)));
  }
  if (Tl(c) <= 0) {
    const S = c.ownerDocument,
      R = S.body,
      P = getComputedStyle(R),
      C =
        (S.compatMode === "CSS1Compat" &&
          parseFloat(P.marginLeft) + parseFloat(P.marginRight)) ||
        0,
      E = Math.abs(c.clientWidth - R.clientWidth - C),
      k =
        getComputedStyle(c).scrollbarGutter === "stable both-edges" ? E / 2 : E;
    k <= aC && (p -= k);
  }
  return { width: p, height: m, x, y };
}
function cC(n, r) {
  const o = Tr(n, !0, r === "fixed"),
    s = o.top + n.clientTop,
    a = o.left + n.clientLeft,
    c = fo(n),
    f = n.clientWidth * c.x,
    p = n.clientHeight * c.y,
    m = a * c.x,
    x = s * c.y;
  return { width: f, height: p, x: m, y: x };
}
function Dh(n, r, o) {
  let s;
  if (r === "viewport" || r === "layoutViewport") s = uC(n, o, r);
  else if (r === "document") s = lC(On(n));
  else if (an(r)) s = cC(r, o);
  else {
    const a = $v(n);
    s = { x: r.x - a.x, y: r.y - a.y, width: r.width, height: r.height };
  }
  return pl(s);
}
function dC(n, r) {
  const o = r.get(n);
  if (o) return o;
  let s = Ei(n, [], !1).filter((p) => an(p) && xo(p) !== "body"),
    a = null;
  const c = un(n).position === "fixed";
  let f = c ? Or(n) : n;
  for (; an(f) && !Ci(f); ) {
    const p = un(f),
      m = $c(f),
      x = a ? a.position : c ? "fixed" : "";
    (!m && (x === "fixed" || (x === "absolute" && p.position === "static"))
      ? (s = s.filter((w) => w !== f))
      : (a = p),
      (f = Or(f)));
  }
  return (r.set(n, s), s);
}
function fC(n) {
  let { element: r, boundary: o, rootBoundary: s, strategy: a } = n;
  const f = [
      ...(o === "clippingAncestors"
        ? Rl(r)
          ? []
          : dC(r, this._c)
        : [].concat(o)),
      s,
    ],
    p = Dh(r, f[0], a);
  let m = p.top,
    x = p.right,
    y = p.bottom,
    w = p.left;
  for (let S = 1; S < f.length; S++) {
    const R = Dh(r, f[S], a);
    ((m = bn(R.top, m)),
      (x = ir(R.right, x)),
      (y = ir(R.bottom, y)),
      (w = bn(R.left, w)));
  }
  return { width: x - w, height: y - m, x: w, y: m };
}
function pC(n) {
  const { width: r, height: o } = zv(n);
  return { width: r, height: o };
}
function hC(n, r, o) {
  const s = ar(r),
    a = On(r),
    c = o === "fixed",
    f = Tr(n, !0, c, r);
  let p = { scrollLeft: 0, scrollTop: 0 };
  const m = kn(0);
  if ((s || !c) && ((xo(r) !== "body" || Pl(a)) && (p = Ol(r)), s)) {
    const S = Tr(r, !0, c, r);
    ((m.x = S.x + r.clientLeft), (m.y = S.y + r.clientTop));
  }
  !s && a && (m.x = Tl(a));
  const x = a && !s && !c ? Uv(a, p) : kn(0),
    y = f.left + p.scrollLeft - m.x - x.x,
    w = f.top + p.scrollTop - m.y - x.y;
  return { x: y, y: w, width: f.width, height: f.height };
}
function Mu(n) {
  return un(n).position === "static";
}
function Mh(n, r) {
  if (!ar(n) || un(n).position === "fixed") return null;
  if (r) return r(n);
  let o = n.offsetParent;
  return (On(n) === o && (o = o.ownerDocument.body), o);
}
function Vv(n, r) {
  const o = xt(n);
  if (Rl(n)) return o;
  if (!ar(n)) {
    let a = Or(n);
    for (; a && !Ci(a); ) {
      if (an(a) && !Mu(a)) return a;
      a = Or(a);
    }
    return o;
  }
  let s = Mh(n, r);
  for (; s && JS(s) && Mu(s); ) s = Mh(s, r);
  return s && Ci(s) && Mu(s) && !$c(s) ? o : s || nC(n) || o;
}
const mC = async function (n) {
  const r = this.getOffsetParent || Vv,
    o = this.getDimensions,
    s = await o(n.floating);
  return {
    reference: hC(n.reference, await r(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: s.width, height: s.height },
  };
};
function vC(n) {
  return un(n).direction === "rtl";
}
const gC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: iC,
  getDocumentElement: On,
  getClippingRect: fC,
  getOffsetParent: Vv,
  getElementRects: mC,
  getClientRects: sC,
  getDimensions: pC,
  getScale: fo,
  isElement: an,
  isRTL: vC,
};
function Hv(n, r) {
  return (
    n.x === r.x && n.y === r.y && n.width === r.width && n.height === r.height
  );
}
function yC(n, r, o) {
  let s = null,
    a;
  const c = On(n);
  function f() {
    var y;
    (clearTimeout(a), (y = s) == null || y.disconnect(), (s = null));
  }
  function p(y, w) {
    (y === void 0 && (y = !1), w === void 0 && (w = 1), f());
    const S = n.getBoundingClientRect(),
      { left: R, top: P, width: C, height: E } = S;
    if ((y || r(), !C || !E)) return;
    const k = Qs(P),
      N = Qs(c.clientWidth - (R + C)),
      D = Qs(c.clientHeight - (P + E)),
      _ = Qs(R),
      F = {
        rootMargin: -k + "px " + -N + "px " + -D + "px " + -_ + "px",
        threshold: bn(0, ir(1, w)) || 1,
      };
    let $ = !0;
    function U(G) {
      const W = G[0].intersectionRatio;
      if (!Hv(S, n.getBoundingClientRect())) return p();
      if (W !== w) {
        if (!$) return p();
        W
          ? p(!1, W)
          : (a = setTimeout(() => {
              p(!1, 1e-7);
            }, 1e3));
      }
      $ = !1;
    }
    try {
      s = new IntersectionObserver(U, { ...F, root: c.ownerDocument });
    } catch {
      s = new IntersectionObserver(U, F);
    }
    s.observe(n);
  }
  const m = xt(n),
    x = () => p(o);
  return (
    m.addEventListener("resize", x),
    p(!0),
    () => {
      (m.removeEventListener("resize", x), f());
    }
  );
}
function wC(n, r, o, s) {
  s === void 0 && (s = {});
  const {
      ancestorScroll: a = !0,
      ancestorResize: c = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: p = typeof IntersectionObserver == "function",
      animationFrame: m = !1,
    } = s,
    x = Vc(n),
    y = a || c ? [...(x ? Ei(x) : []), ...(r ? Ei(r) : [])] : [];
  y.forEach((k) => {
    (a && k.addEventListener("scroll", o),
      c && k.addEventListener("resize", o));
  });
  const w = x && p ? yC(x, o, c) : null;
  let S = -1,
    R = null;
  f &&
    ((R = new ResizeObserver((k) => {
      let [N] = k;
      (N &&
        N.target === x &&
        R &&
        r &&
        (R.unobserve(r),
        cancelAnimationFrame(S),
        (S = requestAnimationFrame(() => {
          var D;
          (D = R) == null || D.observe(r);
        }))),
        o());
    })),
    x && !m && R.observe(x),
    r && R.observe(r));
  let P,
    C = m ? Tr(n) : null;
  m && E();
  function E() {
    const k = Tr(n);
    (C && !Hv(C, k) && o(), (C = k), (P = requestAnimationFrame(E)));
  }
  return (
    o(),
    () => {
      var k;
      (y.forEach((N) => {
        (a && N.removeEventListener("scroll", o),
          c && N.removeEventListener("resize", o));
      }),
        w?.(),
        (k = R) == null || k.disconnect(),
        (R = null),
        m && cancelAnimationFrame(P));
    }
  );
}
const xC = GS,
  SC = YS,
  CC = QS,
  EC = ZS,
  bC = KS,
  Ah = BS,
  kC = XS,
  PC = (n, r, o) => {
    const s = new Map(),
      a = o ?? {},
      c = { ...gC, ...a.platform, _c: s };
    return WS(n, r, { ...a, platform: c });
  };
var RC = typeof document < "u",
  OC = function () {},
  sl = RC ? h.useLayoutEffect : OC;
function hl(n, r) {
  if (n === r) return !0;
  if (typeof n != typeof r) return !1;
  if (typeof n == "function" && n.toString() === r.toString()) return !0;
  let o, s, a;
  if (n && r && typeof n == "object") {
    if (Array.isArray(n)) {
      if (((o = n.length), o !== r.length)) return !1;
      for (s = o; s-- !== 0; ) if (!hl(n[s], r[s])) return !1;
      return !0;
    }
    if (((a = Object.keys(n)), (o = a.length), o !== Object.keys(r).length))
      return !1;
    for (s = o; s-- !== 0; ) if (!{}.hasOwnProperty.call(r, a[s])) return !1;
    for (s = o; s-- !== 0; ) {
      const c = a[s];
      if (!(c === "_owner" && n.$$typeof) && !hl(n[c], r[c])) return !1;
    }
    return !0;
  }
  return n !== n && r !== r;
}
function Wv(n) {
  return typeof window > "u"
    ? 1
    : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ih(n, r) {
  const o = Wv(n);
  return Math.round(r * o) / o;
}
function Au(n) {
  const r = h.useRef(n);
  return (
    sl(() => {
      r.current = n;
    }),
    r
  );
}
function TC(n) {
  n === void 0 && (n = {});
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: a,
      elements: { reference: c, floating: f } = {},
      transform: p = !0,
      whileElementsMounted: m,
      open: x,
    } = n,
    [y, w] = h.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [S, R] = h.useState(s);
  hl(S, s) || R(s);
  const [P, C] = h.useState(null),
    [E, k] = h.useState(null),
    N = h.useCallback((z) => {
      z !== F.current && ((F.current = z), C(z));
    }, []),
    D = h.useCallback((z) => {
      z !== $.current && (($.current = z), k(z));
    }, []),
    _ = c || P,
    I = f || E,
    F = h.useRef(null),
    $ = h.useRef(null),
    U = h.useRef(y),
    G = m != null,
    W = Au(m),
    ce = Au(a),
    Y = Au(x),
    ne = h.useCallback(() => {
      if (!F.current || !$.current) return;
      const z = { placement: r, strategy: o, middleware: S };
      (ce.current && (z.platform = ce.current),
        PC(F.current, $.current, z).then((J) => {
          const X = { ...J, isPositioned: Y.current !== !1 };
          te.current &&
            !hl(U.current, X) &&
            ((U.current = X),
            xl.flushSync(() => {
              w(X);
            }));
        }));
    }, [S, r, o, ce, Y]);
  sl(() => {
    x === !1 &&
      U.current.isPositioned &&
      ((U.current.isPositioned = !1), w((z) => ({ ...z, isPositioned: !1 })));
  }, [x]);
  const te = h.useRef(!1);
  (sl(
    () => (
      (te.current = !0),
      () => {
        te.current = !1;
      }
    ),
    [],
  ),
    sl(() => {
      if ((_ && (F.current = _), I && ($.current = I), _ && I)) {
        if (W.current) return W.current(_, I, ne);
        ne();
      }
    }, [_, I, ne, W, G]));
  const le = h.useMemo(
      () => ({ reference: F, floating: $, setReference: N, setFloating: D }),
      [N, D],
    ),
    Q = h.useMemo(() => ({ reference: _, floating: I }), [_, I]),
    oe = h.useMemo(() => {
      const z = { position: o, left: 0, top: 0 };
      if (!Q.floating) return z;
      const J = Ih(Q.floating, y.x),
        X = Ih(Q.floating, y.y);
      return p
        ? {
            ...z,
            transform: "translate(" + J + "px, " + X + "px)",
            ...(Wv(Q.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: J, top: X };
    }, [o, p, Q.floating, y.x, y.y]);
  return h.useMemo(
    () => ({ ...y, update: ne, refs: le, elements: Q, floatingStyles: oe }),
    [y, ne, le, Q, oe],
  );
}
const NC = (n) => {
    function r(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: n,
      fn(o) {
        const { element: s, padding: a } = typeof n == "function" ? n(o) : n;
        return s && r(s)
          ? s.current != null
            ? Ah({ element: s.current, padding: a }).fn(o)
            : {}
          : s
            ? Ah({ element: s, padding: a }).fn(o)
            : {};
      },
    };
  },
  jC = (n, r) => {
    const o = xC(n);
    return { name: o.name, fn: o.fn, options: [n, r] };
  },
  _C = (n, r) => {
    const o = SC(n);
    return { name: o.name, fn: o.fn, options: [n, r] };
  },
  DC = (n, r) => ({ fn: kC(n).fn, options: [n, r] }),
  MC = (n, r) => {
    const o = CC(n);
    return { name: o.name, fn: o.fn, options: [n, r] };
  },
  AC = (n, r) => {
    const o = EC(n);
    return { name: o.name, fn: o.fn, options: [n, r] };
  },
  IC = (n, r) => {
    const o = bC(n);
    return { name: o.name, fn: o.fn, options: [n, r] };
  },
  LC = (n, r) => {
    const o = NC(n);
    return { name: o.name, fn: o.fn, options: [n, r] };
  };
var FC = Object.defineProperty,
  zC = (n, r) => FC(n, "name", { value: r, configurable: !0 });
function Bv(n) {
  const [r, o] = h.useState(void 0);
  return (
    wt(() => {
      if (n) {
        o({ width: n.offsetWidth, height: n.offsetHeight });
        const s = new ResizeObserver((a) => {
          if (!Array.isArray(a) || !a.length) return;
          const c = a[0];
          let f, p;
          if ("borderBoxSize" in c) {
            const m = c.borderBoxSize,
              x = Array.isArray(m) ? m[0] : m;
            ((f = x.inlineSize), (p = x.blockSize));
          } else ((f = n.offsetWidth), (p = n.offsetHeight));
          o({ width: f, height: p });
        });
        return (s.observe(n, { box: "border-box" }), () => s.unobserve(n));
      } else o(void 0);
    }, [n]),
    r
  );
}
zC(Bv, "useSize");
var $C = Object.defineProperty,
  nr = (n, r) => $C(n, "name", { value: r, configurable: !0 }),
  Qv = "Popper",
  [Kv, qv] = lr(Qv),
  [UC, Gv] = Kv(Qv),
  VC = nr((n) => {
    const { __scopePopper: r, children: o } = n,
      [s, a] = h.useState(null),
      [c, f] = h.useState(void 0);
    return g.jsx(UC, {
      scope: r,
      anchor: s,
      onAnchorChange: a,
      placementState: c,
      setPlacementState: f,
      children: o,
    });
  }, "Popper"),
  HC = "PopperAnchor",
  WC = h.forwardRef(
    nr(function (r, o) {
      const { __scopePopper: s, virtualRef: a, ...c } = r,
        f = Gv(HC, s),
        p = h.useRef(null),
        m = f.onAnchorChange,
        x = h.useCallback(
          (C) => {
            ((p.current = C), C && m(C));
          },
          [m],
        ),
        y = Ue(o, x),
        w = h.useRef(null);
      h.useEffect(() => {
        if (!a) return;
        const C = w.current;
        ((w.current = a.current), C !== w.current && m(w.current));
      });
      const S = f.placementState && Nl(f.placementState),
        R = S?.[0],
        P = S?.[1];
      return a
        ? null
        : g.jsx(Ge.div, {
            "data-radix-popper-side": R,
            "data-radix-popper-align": P,
            ...c,
            ref: y,
          });
    }, "PopperAnchor"),
  ),
  Yv = "PopperContent",
  [BC, NP] = Kv(Yv),
  QC = h.forwardRef(
    nr(function (r, o) {
      const {
          __scopePopper: s,
          side: a = "bottom",
          sideOffset: c = 0,
          align: f = "center",
          alignOffset: p = 0,
          arrowPadding: m = 0,
          avoidCollisions: x = !0,
          collisionBoundary: y = [],
          collisionPadding: w = 0,
          sticky: S = "partial",
          hideWhenDetached: R = !1,
          updatePositionStrategy: P = "optimized",
          onPlaced: C,
          ...E
        } = r,
        k = Gv(Yv, s),
        [N, D] = h.useState(null),
        _ = Ue(o, D),
        [I, F] = h.useState(null),
        $ = Bv(I),
        U = $?.width ?? 0,
        G = $?.height ?? 0,
        W = a + (f !== "center" ? "-" + f : ""),
        ce =
          typeof w == "number"
            ? w
            : { top: 0, right: 0, bottom: 0, left: 0, ...w },
        Y = Array.isArray(y) ? y : [y],
        ne = Y.length > 0,
        te = { padding: ce, boundary: Y.filter(Xv), altBoundary: ne },
        {
          refs: le,
          floatingStyles: Q,
          placement: oe,
          isPositioned: z,
          middlewareData: J,
        } = TC({
          strategy: "fixed",
          placement: W,
          whileElementsMounted: nr(
            (...Se) => wC(...Se, { animationFrame: P === "always" }),
            "whileElementsMounted",
          ),
          elements: { reference: k.anchor },
          middleware: [
            jC({ mainAxis: c + G, alignmentAxis: p }),
            x &&
              _C({
                mainAxis: !0,
                crossAxis: !1,
                limiter: S === "partial" ? DC() : void 0,
                ...te,
              }),
            x && MC({ ...te }),
            AC({
              ...te,
              apply: nr(
                ({
                  elements: Se,
                  rects: be,
                  availableWidth: Gt,
                  availableHeight: Ft,
                }) => {
                  const { width: cn, height: jn } = be.reference,
                    Yt = Se.floating.style;
                  (Yt.setProperty("--radix-popper-available-width", `${Gt}px`),
                    Yt.setProperty(
                      "--radix-popper-available-height",
                      `${Ft}px`,
                    ),
                    Yt.setProperty("--radix-popper-anchor-width", `${cn}px`),
                    Yt.setProperty("--radix-popper-anchor-height", `${jn}px`));
                },
                "apply",
              ),
            }),
            I && LC({ element: I, padding: m }),
            KC({ arrowWidth: U, arrowHeight: G }),
            R &&
              IC({
                strategy: "referenceHidden",
                ...te,
                boundary: ne ? te.boundary : void 0,
              }),
          ],
        }),
        X = k.setPlacementState;
      wt(
        () => (
          X(oe),
          () => {
            X(void 0);
          }
        ),
        [oe, X],
      );
      const [T, H] = Nl(oe),
        de = Qt(C);
      wt(() => {
        z && de?.();
      }, [z, de]);
      const he = J.arrow?.x,
        ve = J.arrow?.y,
        ge = J.arrow?.centerOffset !== 0,
        [ke, xe] = h.useState();
      return (
        wt(() => {
          N && xe(window.getComputedStyle(N).zIndex);
        }, [N]),
        g.jsx("div", {
          ref: le.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...Q,
            transform: z ? Q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ke,
            "--radix-popper-transform-origin": [
              J.transformOrigin?.x,
              J.transformOrigin?.y,
            ].join(" "),
            ...(J.hide?.referenceHidden && {
              visibility: "hidden",
              pointerEvents: "none",
            }),
          },
          dir: r.dir,
          children: g.jsx(BC, {
            scope: s,
            placedSide: T,
            placedAlign: H,
            onArrowChange: F,
            arrowX: he,
            arrowY: ve,
            shouldHideArrow: ge,
            children: g.jsx(Ge.div, {
              "data-side": T,
              "data-align": H,
              ...E,
              ref: _,
              style: { ...E.style, animation: z ? E.style?.animation : "none" },
            }),
          }),
        })
      );
    }, "PopperContent"),
  );
function Xv(n) {
  return n !== null;
}
nr(Xv, "isNotNull");
var KC = nr(
  (n) => ({
    name: "transformOrigin",
    options: n,
    fn(r) {
      const { placement: o, rects: s, middlewareData: a } = r,
        f = a.arrow?.centerOffset !== 0,
        p = f ? 0 : n.arrowWidth,
        m = f ? 0 : n.arrowHeight,
        [x, y] = Nl(o),
        w = { start: "0%", center: "50%", end: "100%" }[y],
        S = (a.arrow?.x ?? 0) + p / 2,
        R = (a.arrow?.y ?? 0) + m / 2;
      let P = "",
        C = "";
      return (
        x === "bottom"
          ? ((P = f ? w : `${S}px`), (C = `${-m}px`))
          : x === "top"
            ? ((P = f ? w : `${S}px`), (C = `${s.floating.height + m}px`))
            : x === "right"
              ? ((P = `${-m}px`), (C = f ? w : `${R}px`))
              : x === "left" &&
                ((P = `${s.floating.width + m}px`), (C = f ? w : `${R}px`)),
        { data: { x: P, y: C } }
      );
    },
  }),
  "transformOrigin",
);
function Nl(n) {
  const [r, o = "center"] = n.split("-");
  return [r, o];
}
nr(Nl, "getSideAndAlignFromPlacement");
var qC = VC,
  GC = WC,
  YC = QC,
  XC = Object.defineProperty,
  rt = (n, r) => XC(n, "name", { value: r, configurable: !0 }),
  [Hc, jP] = lr("Tooltip", [qv]),
  Wc = qv(),
  ZC = "TooltipProvider",
  JC = 700,
  cc = "tooltip.open",
  [eE, Bc] = Hc(ZC),
  tE = rt((n) => {
    const {
        __scopeTooltip: r,
        delayDuration: o = JC,
        skipDelayDuration: s = 300,
        disableHoverableContent: a = !1,
        children: c,
      } = n,
      f = h.useRef(!0),
      p = h.useRef(!1),
      m = h.useRef(0);
    return (
      h.useEffect(() => {
        const x = m.current;
        return () => window.clearTimeout(x);
      }, []),
      g.jsx(eE, {
        scope: r,
        isOpenDelayedRef: f,
        delayDuration: o,
        onOpen: h.useCallback(() => {
          s <= 0 || (window.clearTimeout(m.current), (f.current = !1));
        }, [s]),
        onClose: h.useCallback(() => {
          s <= 0 ||
            (window.clearTimeout(m.current),
            (m.current = window.setTimeout(() => (f.current = !0), s)));
        }, [s]),
        isPointerInTransitRef: p,
        onPointerInTransitChange: h.useCallback((x) => {
          p.current = x;
        }, []),
        disableHoverableContent: a,
        children: c,
      })
    );
  }, "TooltipProvider"),
  dc = "Tooltip",
  [nE, jl] = Hc(dc),
  rE = rt((n) => {
    const {
        __scopeTooltip: r,
        children: o,
        open: s,
        defaultOpen: a,
        onOpenChange: c,
        disableHoverableContent: f,
        delayDuration: p,
      } = n,
      m = Bc(dc, n.__scopeTooltip),
      x = Wc(r),
      [y, w] = h.useState(null),
      [S, R] = h.useState(void 0),
      P = wi(),
      C = h.useRef(0),
      E = f ?? m.disableHoverableContent,
      k = p ?? m.delayDuration,
      N = h.useRef(!1),
      [D, _] = Sl({
        prop: s,
        defaultProp: a ?? !1,
        onChange: rt((W) => {
          (W
            ? (m.onOpen(), document.dispatchEvent(new CustomEvent(cc)))
            : m.onClose(),
            c?.(W));
        }, "onChange"),
        caller: dc,
      }),
      I = h.useMemo(
        () => (D ? (N.current ? "delayed-open" : "instant-open") : "closed"),
        [D],
      ),
      F = h.useCallback(() => {
        (window.clearTimeout(C.current),
          (C.current = 0),
          (N.current = !1),
          _(!0));
      }, [_]),
      $ = h.useCallback(() => {
        (window.clearTimeout(C.current), (C.current = 0), _(!1));
      }, [_]),
      U = h.useCallback(() => {
        (window.clearTimeout(C.current),
          (C.current = window.setTimeout(() => {
            ((N.current = !0), _(!0), (C.current = 0));
          }, k)));
      }, [k, _]);
    h.useEffect(
      () => () => {
        C.current && (window.clearTimeout(C.current), (C.current = 0));
      },
      [],
    );
    const G = S ?? P;
    return g.jsx(qC, {
      ...x,
      children: g.jsx(nE, {
        scope: r,
        contentId: G,
        setContentId: R,
        open: D,
        stateAttribute: I,
        trigger: y,
        onTriggerChange: w,
        onTriggerEnter: h.useCallback(() => {
          m.isOpenDelayedRef.current ? U() : F();
        }, [m.isOpenDelayedRef, U, F]),
        onTriggerLeave: h.useCallback(() => {
          E ? $() : (window.clearTimeout(C.current), (C.current = 0));
        }, [$, E]),
        onOpen: F,
        onClose: $,
        disableHoverableContent: E,
        children: o,
      }),
    });
  }, "Tooltip"),
  Lh = "TooltipTrigger",
  oE = h.forwardRef(
    rt(function (r, o) {
      const { __scopeTooltip: s, ...a } = r,
        c = jl(Lh, s),
        f = Bc(Lh, s),
        p = Wc(s),
        m = h.useRef(null),
        x = Ue(o, m, c.onTriggerChange),
        y = h.useRef(!1),
        w = h.useRef(!1),
        S = h.useCallback(() => (y.current = !1), []);
      return (
        h.useEffect(
          () => () => document.removeEventListener("pointerup", S),
          [S],
        ),
        g.jsx(GC, {
          asChild: !0,
          ...p,
          children: g.jsx(Ge.button, {
            "aria-describedby": c.open ? c.contentId : void 0,
            "data-state": c.stateAttribute,
            ...a,
            ref: x,
            onPointerMove: Ne(r.onPointerMove, (R) => {
              R.pointerType !== "touch" &&
                !w.current &&
                !f.isPointerInTransitRef.current &&
                (c.onTriggerEnter(), (w.current = !0));
            }),
            onPointerLeave: Ne(r.onPointerLeave, () => {
              (c.onTriggerLeave(), (w.current = !1));
            }),
            onPointerDown: Ne(r.onPointerDown, () => {
              (c.open && c.onClose(),
                (y.current = !0),
                document.addEventListener("pointerup", S, { once: !0 }));
            }),
            onFocus: Ne(r.onFocus, () => {
              y.current || c.onOpen();
            }),
            onBlur: Ne(r.onBlur, c.onClose),
            onClick: Ne(r.onClick, c.onClose),
          }),
        })
      );
    }, "TooltipTrigger"),
  ),
  iE = "TooltipPortal",
  [_P, sE] = Hc(iE, { forceMount: void 0 }),
  bi = "TooltipContent",
  lE = h.forwardRef(
    rt(function (r, o) {
      const s = sE(bi, r.__scopeTooltip),
        { forceMount: a = s.forceMount, side: c = "top", ...f } = r,
        p = jl(bi, r.__scopeTooltip);
      return g.jsx(Ri, {
        present: a || p.open,
        children: p.disableHoverableContent
          ? g.jsx(Zv, { side: c, ...f, ref: o })
          : g.jsx(aE, { side: c, ...f, ref: o }),
      });
    }, "TooltipContent"),
  ),
  aE = h.forwardRef(
    rt(function (r, o) {
      const s = jl(bi, r.__scopeTooltip),
        a = Bc(bi, r.__scopeTooltip),
        c = h.useRef(null),
        f = Ue(o, c),
        [p, m] = h.useState(null),
        { trigger: x, onClose: y } = s,
        w = c.current,
        { onPointerInTransitChange: S } = a,
        R = h.useCallback(() => {
          (m(null), S(!1));
        }, [S]),
        P = h.useCallback(
          (C, E) => {
            const k = C.currentTarget,
              N = { x: C.clientX, y: C.clientY },
              D = Jv(N, k.getBoundingClientRect()),
              _ = eg(N, D),
              I = tg(E.getBoundingClientRect()),
              F = rg([..._, ...I]);
            (m(F), S(!0));
          },
          [S],
        );
      return (
        h.useEffect(() => () => R(), [R]),
        h.useEffect(() => {
          if (x && w) {
            const C = rt((k) => P(k, w), "handleTriggerLeave"),
              E = rt((k) => P(k, x), "handleContentLeave");
            return (
              x.addEventListener("pointerleave", C),
              w.addEventListener("pointerleave", E),
              () => {
                (x.removeEventListener("pointerleave", C),
                  w.removeEventListener("pointerleave", E));
              }
            );
          }
        }, [x, w, P, R]),
        h.useEffect(() => {
          if (p) {
            const C = rt((E) => {
              const k = E.target,
                N = { x: E.clientX, y: E.clientY },
                D = x?.contains(k) || w?.contains(k),
                _ = !ng(N, p);
              D ? R() : _ && (R(), y());
            }, "handleTrackPointerGrace");
            return (
              document.addEventListener("pointermove", C),
              () => document.removeEventListener("pointermove", C)
            );
          }
        }, [x, w, p, y, R]),
        g.jsx(Zv, { ...r, ref: f })
      );
    }, "TooltipContentHoverable"),
  ),
  uE = Am("TooltipContent"),
  Zv = h.forwardRef(
    rt(function (r, o) {
      const {
          __scopeTooltip: s,
          children: a,
          "aria-label": c,
          id: f,
          onEscapeKeyDown: p,
          onPointerDownOutside: m,
          ...x
        } = r,
        y = jl(bi, s),
        w = Wc(s),
        { onClose: S } = y;
      (h.useEffect(
        () => (
          document.addEventListener(cc, S),
          () => document.removeEventListener(cc, S)
        ),
        [S],
      ),
        h.useEffect(() => {
          if (y.trigger) {
            const P = rt((C) => {
              C.target instanceof Node && C.target.contains(y.trigger) && S();
            }, "handleScroll");
            return (
              window.addEventListener("scroll", P, { capture: !0 }),
              () => window.removeEventListener("scroll", P, { capture: !0 })
            );
          }
        }, [y.trigger, S]));
      const { setContentId: R } = y;
      return (
        wt(
          () => (
            R(f),
            () => {
              R(void 0);
            }
          ),
          [f, R],
        ),
        g.jsx(Nc, {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onEscapeKeyDown: p,
          onPointerDownOutside: m,
          onFocusOutside: (P) => P.preventDefault(),
          onDismiss: S,
          children: g.jsxs(YC, {
            "data-state": y.stateAttribute,
            role: c ? void 0 : "tooltip",
            id: c ? void 0 : y.contentId,
            ...w,
            ...x,
            ref: o,
            style: {
              ...x.style,
              "--radix-tooltip-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
            children: [
              g.jsx(uE, { children: a }),
              c
                ? g.jsx(t1, { id: y.contentId, role: "tooltip", children: c })
                : null,
            ],
          }),
        })
      );
    }, "TooltipContentImpl"),
  );
function Jv(n, r) {
  const o = Math.abs(r.top - n.y),
    s = Math.abs(r.bottom - n.y),
    a = Math.abs(r.right - n.x),
    c = Math.abs(r.left - n.x);
  switch (Math.min(o, s, a, c)) {
    case c:
      return "left";
    case a:
      return "right";
    case o:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
rt(Jv, "getExitSideFromRect");
function eg(n, r, o = 5) {
  const s = [];
  switch (r) {
    case "top":
      s.push({ x: n.x - o, y: n.y + o }, { x: n.x + o, y: n.y + o });
      break;
    case "bottom":
      s.push({ x: n.x - o, y: n.y - o }, { x: n.x + o, y: n.y - o });
      break;
    case "left":
      s.push({ x: n.x + o, y: n.y - o }, { x: n.x + o, y: n.y + o });
      break;
    case "right":
      s.push({ x: n.x - o, y: n.y - o }, { x: n.x - o, y: n.y + o });
      break;
  }
  return s;
}
rt(eg, "getPaddedExitPoints");
function tg(n) {
  const { top: r, right: o, bottom: s, left: a } = n;
  return [
    { x: a, y: r },
    { x: o, y: r },
    { x: o, y: s },
    { x: a, y: s },
  ];
}
rt(tg, "getPointsFromRect");
function ng(n, r) {
  const { x: o, y: s } = n;
  let a = !1;
  for (let c = 0, f = r.length - 1; c < r.length; f = c++) {
    const p = r[c],
      m = r[f],
      x = p.x,
      y = p.y,
      w = m.x,
      S = m.y;
    y > s != S > s && o < ((w - x) * (s - y)) / (S - y) + x && (a = !a);
  }
  return a;
}
rt(ng, "isPointInPolygon");
function rg(n) {
  const r = n.slice();
  return (
    r.sort((o, s) =>
      o.x < s.x ? -1 : o.x > s.x ? 1 : o.y < s.y ? -1 : o.y > s.y ? 1 : 0,
    ),
    og(r)
  );
}
rt(rg, "getHull");
function og(n) {
  if (n.length <= 1) return n.slice();
  const r = [];
  for (let s = 0; s < n.length; s++) {
    const a = n[s];
    for (; r.length >= 2; ) {
      const c = r[r.length - 1],
        f = r[r.length - 2];
      if ((c.x - f.x) * (a.y - f.y) >= (c.y - f.y) * (a.x - f.x)) r.pop();
      else break;
    }
    r.push(a);
  }
  r.pop();
  const o = [];
  for (let s = n.length - 1; s >= 0; s--) {
    const a = n[s];
    for (; o.length >= 2; ) {
      const c = o[o.length - 1],
        f = o[o.length - 2];
      if ((c.x - f.x) * (a.y - f.y) >= (c.y - f.y) * (a.x - f.x)) o.pop();
      else break;
    }
    o.push(a);
  }
  return (
    o.pop(),
    r.length === 1 && o.length === 1 && r[0].x === o[0].x && r[0].y === o[0].y
      ? r
      : r.concat(o)
  );
}
rt(og, "getHullPresorted");
var cE = tE,
  dE = rE,
  fE = oE,
  ig = lE;
const pE = cE,
  hE = dE,
  mE = fE,
  sg = h.forwardRef(({ className: n, sideOffset: r = 4, ...o }, s) =>
    g.jsx(ig, {
      ref: s,
      sideOffset: r,
      className: Le(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        n,
      ),
      ...o,
    }),
  );
sg.displayName = ig.displayName;
const lg = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx("div", {
    ref: o,
    className: Le(
      "shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm",
      n,
    ),
    ...r,
  }),
);
lg.displayName = "Card";
const vE = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx("div", {
    ref: o,
    className: Le("flex flex-col space-y-1.5 p-6", n),
    ...r,
  }),
);
vE.displayName = "CardHeader";
const gE = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx("div", {
    ref: o,
    className: Le("text-2xl font-semibold leading-none tracking-tight", n),
    ...r,
  }),
);
gE.displayName = "CardTitle";
const yE = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx("div", {
    ref: o,
    className: Le("text-sm text-muted-foreground", n),
    ...r,
  }),
);
yE.displayName = "CardDescription";
const ag = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx("div", { ref: o, className: Le("p-6 pt-0", n), ...r }),
);
ag.displayName = "CardContent";
const wE = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx("div", {
    ref: o,
    className: Le("flex items-center p-6 pt-0", n),
    ...r,
  }),
);
wE.displayName = "CardFooter";
function xE() {
  return g.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: g.jsx(lg, {
      className: "w-full max-w-md mx-4",
      children: g.jsxs(ag, {
        className: "pt-6",
        children: [
          g.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              g.jsx(Sv, { className: "h-8 w-8 text-red-500" }),
              g.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          g.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
const SE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Orbit — Demo App</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <main class="hero">
    <h1>Orbit</h1>
    <p>A tiny demo app running inside CodeForge.</p>
    <button id="spawn">Spawn particles</button>
    <canvas id="space"></canvas>
  </main>
  <script src="js/app.js"><\/script>
</body>
</html>
`,
  CE = `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: system-ui, sans-serif;
  background: radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%);
  color: #e6edf3;
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.hero { text-align: center; padding: 2rem; }

h1 {
  font-size: 3rem;
  letter-spacing: 0.05em;
  background: linear-gradient(90deg, #58a6ff, #bc8cff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

p { color: #8b949e; margin: 0.5rem 0 1.5rem; }

button {
  font: inherit;
  padding: 0.6rem 1.4rem;
  border: 1px solid #30363d;
  border-radius: 8px;
  background: #21262d;
  color: #e6edf3;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover { background: #30363d; }

canvas { display: block; margin: 2rem auto 0; }
`,
  EE = `// Orbit — tiny particle demo
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 280;

const particles = [];

class Particle {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = 20 + Math.random() * 110;
    this.speed = 0.005 + Math.random() * 0.02;
    this.size = 1 + Math.random() * 2.5;
    this.hue = 200 + Math.random() * 80;
  }
  update() {
    this.angle += this.speed;
    this.px = this.x + Math.cos(this.angle) * this.radius * 1.6;
    this.py = this.y + Math.sin(this.angle) * this.radius * 0.6;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.px, this.py, this.size, 0, Math.PI * 2);
    ctx.fillStyle = \`hsl(\${this.hue} 90% 65%)\`;
    ctx.fill();
  }
}

function spawn(count = 40) {
  for (let i = 0; i < count; i++) particles.push(new Particle());
  console.log(\`Spawned \${count} particles — total: \${particles.length}\`);
}

function tick() {
  ctx.fillStyle = "rgba(9, 10, 15, 0.25)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (const p of particles) {
    p.update();
    p.draw();
  }
  requestAnimationFrame(tick);
}

document.getElementById("spawn").addEventListener("click", () => spawn(40));

console.log("Orbit demo booted ✨");
spawn(60);
tick();
`,
  bE = `# Orbit — demo workspace

Welcome to **CodeForge**, a browser IDE.

## Try it

1. Open \`index.html\`, \`css/styles.css\` or \`js/app.js\` from the Explorer.
2. Edit anything — changes autosave.
3. Hit **Run** (or Ctrl/Cmd + Enter) to see the live preview.
4. Open the Console panel (Ctrl + \`) to see \`console.log\` output from your app.

## Shortcuts

| Keys | Action |
| --- | --- |
| Ctrl/Cmd + S | Save file |
| Ctrl/Cmd + P | Quick open file |
| Ctrl/Cmd + Shift + P | Command palette |
| Ctrl/Cmd + B | Toggle sidebar |
| Ctrl/Cmd + Enter | Run project |
| Ctrl + \` | Toggle console |
`,
  kE = [
    { path: "css", kind: "folder", content: null },
    { path: "js", kind: "folder", content: null },
    { path: "index.html", kind: "file", content: SE },
    { path: "css/styles.css", kind: "file", content: CE },
    { path: "js/app.js", kind: "file", content: EE },
    { path: "README.md", kind: "file", content: bE },
  ],
  ug = "codeforge-workspace-v1";
let br = null,
  En = null,
  fc = 1;
function cg() {
  return kE.map((n, r) => ({
    id: r + 1,
    path: n.path,
    kind: n.kind,
    content: n.content ?? null,
  }));
}
function ao() {
  if (En) return En;
  let n = null;
  try {
    const r = window.localStorage.getItem(ug);
    if (r) {
      const o = JSON.parse(r);
      Array.isArray(o) && o.length > 0 && (n = o);
    }
  } catch {}
  return (
    (En = n ?? cg()),
    (fc = En.reduce((r, o) => Math.max(r, o.id), 0) + 1),
    En
  );
}
function hi() {
  try {
    window.localStorage.setItem(ug, JSON.stringify(En));
  } catch {}
}
function PE(n) {
  return [...n].sort((r, o) => r.path.localeCompare(o.path));
}
async function to() {
  if (br) return br;
  try {
    const n = new AbortController(),
      r = setTimeout(() => n.abort(), 4e3),
      o = await fetch(`${wl}/api/files`, { signal: n.signal });
    clearTimeout(r);
    const s = o.headers.get("content-type") ?? "";
    if (o.ok && s.includes("application/json")) return ((br = "api"), br);
  } catch {}
  return ((br = "local"), ao(), br);
}
const Er = {
    mode() {
      return br;
    },
    async list() {
      if ((await to()) === "api") {
        const n = await fetch(`${wl}/api/files`);
        if (!n.ok) throw new Error(`${n.status}`);
        return n.json();
      }
      return PE(ao());
    },
    async create(n) {
      if ((await to()) === "api")
        return (await di("POST", "/api/files", n)).json();
      const r = ao();
      if (r.some((s) => s.path === n.path)) throw new Error("path exists");
      const o = {
        id: fc++,
        path: n.path,
        kind: n.kind,
        content: n.kind === "file" ? (n.content ?? "") : null,
      };
      return (r.push(o), hi(), o);
    },
    async saveContent(n, r) {
      if ((await to()) === "api") {
        await di("PATCH", `/api/files/${n}`, { content: r });
        return;
      }
      const s = ao().find((a) => a.id === n);
      s && ((s.content = r), hi());
    },
    async rename(n, r) {
      if ((await to()) === "api") {
        await di("PATCH", `/api/files/${n}`, { path: r });
        return;
      }
      const o = ao(),
        s = o.find((c) => c.id === n);
      if (!s) return;
      if (o.some((c) => c.id !== n && c.path === r))
        throw new Error("path exists");
      const a = s.path;
      if (((s.path = r), s.kind === "folder")) {
        const c = `${a}/`;
        for (const f of o)
          f.id !== n &&
            f.path.startsWith(c) &&
            (f.path = `${r}/${f.path.slice(c.length)}`);
      }
      hi();
    },
    async remove(n) {
      if ((await to()) === "api") {
        await di("DELETE", `/api/files/${n}`);
        return;
      }
      const r = ao(),
        o = r.find((a) => a.id === n);
      if (!o) return;
      const s = `${o.path}/`;
      ((En = r.filter(
        (a) => a.id !== n && !(o.kind === "folder" && a.path.startsWith(s)),
      )),
        hi());
    },
    async reset() {
      if ((await to()) === "api") {
        await di("POST", "/api/reset");
        return;
      }
      ((En = cg()), (fc = En.length + 1), hi());
    },
  },
  Iu = 768;
function RE() {
  const [n, r] = h.useState(void 0);
  return (
    h.useEffect(() => {
      const o = window.matchMedia(`(max-width: ${Iu - 1}px)`),
        s = () => {
          r(window.innerWidth < Iu);
        };
      return (
        o.addEventListener("change", s),
        r(window.innerWidth < Iu),
        () => o.removeEventListener("change", s)
      );
    }, []),
    !!n
  );
}
function ml(n) {
  const r = n.split("/").pop() ?? "",
    o = r.lastIndexOf(".");
  return o === -1 ? "" : r.slice(o + 1).toLowerCase();
}
function dg(n) {
  switch (ml(n)) {
    case "html":
    case "htm":
      return "html";
    case "css":
      return "css";
    case "js":
    case "mjs":
    case "cjs":
      return "javascript";
    case "jsx":
      return "javascript";
    case "ts":
      return "typescript";
    case "tsx":
      return "typescript";
    case "json":
      return "json";
    case "md":
      return "markdown";
    case "py":
      return "python";
    case "svg":
    case "xml":
      return "xml";
    case "yml":
    case "yaml":
      return "yaml";
    case "sql":
      return "sql";
    case "sh":
      return "shell";
    default:
      return "plaintext";
  }
}
function _l(n) {
  switch (ml(n)) {
    case "html":
    case "htm":
      return "text-orange-400";
    case "css":
      return "text-blue-400";
    case "js":
    case "mjs":
    case "cjs":
    case "jsx":
      return "text-yellow-400";
    case "ts":
    case "tsx":
      return "text-sky-400";
    case "json":
      return "text-lime-400";
    case "md":
      return "text-slate-400";
    case "svg":
    case "xml":
      return "text-purple-400";
    case "py":
      return "text-emerald-400";
    default:
      return "text-muted-foreground";
  }
}
function OE(n) {
  const r = new Map();
  for (const c of n)
    r.set(c.path, {
      file: c,
      name: c.path.split("/").pop() ?? c.path,
      children: [],
    });
  const o = [];
  for (const c of Array.from(r.values())) {
    const f = c.file.path.includes("/")
      ? c.file.path.slice(0, c.file.path.lastIndexOf("/"))
      : null;
    f && r.has(f) ? r.get(f).children.push(c) : o.push(c);
  }
  const s = (c, f) =>
      c.file.kind !== f.file.kind
        ? c.file.kind === "folder"
          ? -1
          : 1
        : c.name.localeCompare(f.name),
    a = (c) => {
      (c.sort(s), c.forEach((f) => a(f.children)));
    };
  return (a(o), o);
}
const Ks = `<script>
(function () {
  function send(level, args) {
    try {
      parent.postMessage({ __codeforge: true, level: level, text: args.map(function (a) {
        if (typeof a === "object") { try { return JSON.stringify(a, null, 1); } catch (e) { return String(a); } }
        return String(a);
      }).join(" ") }, "*");
    } catch (e) {}
  }
  ["log", "info", "warn", "error"].forEach(function (level) {
    var orig = console[level];
    console[level] = function () {
      send(level, Array.prototype.slice.call(arguments));
      orig.apply(console, arguments);
    };
  });
  window.addEventListener("error", function (e) {
    send("error", [e.message + " (" + (e.filename || "inline") + ":" + e.lineno + ")"]);
  });
  window.addEventListener("unhandledrejection", function (e) {
    send("error", ["Unhandled promise rejection: " + String(e.reason)]);
  });
})();
<\/script>`;
function Fh(n) {
  return n.replace(/^\.\//, "").replace(/^\//, "");
}
function zh(n) {
  return n.replace(/<\/script>/gi, "<\\/script>");
}
function TE(n, r) {
  const o = new Map();
  for (const c of n) c.kind === "file" && o.set(c.path, c.content ?? "");
  const s = r ? ml(r) : "";
  if (r && s === "md") {
    const c = o.get(r) ?? "";
    return {
      srcdoc: `<!DOCTYPE html><html><head><meta charset="utf-8">${Ks}
<style>
  body { font-family: system-ui, sans-serif; max-width: 720px; margin: 2rem auto; padding: 0 1.5rem; line-height: 1.65; color: #24292f; }
  pre { background: #f6f8fa; padding: 12px; border-radius: 8px; overflow-x: auto; }
  code { background: #f6f8fa; padding: 2px 5px; border-radius: 4px; font-size: 0.9em; }
  pre code { padding: 0; }
  table { border-collapse: collapse; }
  th, td { border: 1px solid #d0d7de; padding: 6px 12px; }
  h1, h2 { border-bottom: 1px solid #d8dee4; padding-bottom: 0.3em; }
  a { color: #0969da; }
</style></head><body>
<div id="content"></div>
<script src="https://cdn.jsdelivr.net/npm/marked@12/marked.min.js"><\/script>
<script>document.getElementById("content").innerHTML = marked.parse(${JSON.stringify(c)});<\/script>
</body></html>`,
      entry: r,
    };
  }
  let a = null;
  if (r && (s === "html" || s === "htm")) a = r;
  else if (o.has("index.html")) a = "index.html";
  else {
    const c = Array.from(o.keys()).find((f) => ml(f) === "html");
    c && (a = c);
  }
  if (a) {
    let c = o.get(a) ?? "";
    return (
      (c = c.replace(/<link\b[^>]*href=["']([^"']+)["'][^>]*\/?>/gi, (f, p) => {
        const m = Fh(p);
        return o.has(m) && /rel=["']stylesheet["']/i.test(f)
          ? `<style>
${o.get(m)}
</style>`
          : f;
      })),
      (c = c.replace(
        /<script\b[^>]*src=["']([^"']+)["'][^>]*>\s*<\/script>/gi,
        (f, p) => {
          const m = Fh(p);
          return o.has(m)
            ? `<script>
${zh(o.get(m) ?? "")}
<\/script>`
            : f;
        },
      )),
      /<head[^>]*>/i.test(c)
        ? (c = c.replace(
            /<head[^>]*>/i,
            (f) => `${f}
${Ks}`,
          ))
        : (c = Ks + c),
      { srcdoc: c, entry: a }
    );
  }
  if (r && ["js", "mjs", "cjs"].includes(s)) {
    const c = o.get(r) ?? "";
    return {
      srcdoc: `<!DOCTYPE html><html><head><meta charset="utf-8">${Ks}
<style>body{font-family:ui-monospace,monospace;color:#8b949e;background:#0d1117;display:grid;place-items:center;min-height:96vh}</style>
</head><body><p>Running ${r} — output in Console</p>
<script>
${zh(c)}
<\/script></body></html>`,
      entry: r,
    };
  }
  return null;
}
function NE(n) {
  return n.toLocaleTimeString([], {
    hour12: !1,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
const Dl = h.forwardRef(({ className: n, type: r, ...o }, s) =>
  g.jsx("input", {
    type: r,
    className: Le(
      "flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      n,
    ),
    ref: s,
    ...o,
  }),
);
Dl.displayName = "Input";
var jE = Object.defineProperty,
  ft = (n, r) => jE(n, "name", { value: r, configurable: !0 }),
  Lu = "focusScope.autoFocusOnMount",
  Fu = "focusScope.autoFocusOnUnmount",
  $h = { bubbles: !1, cancelable: !0 },
  _E = h.forwardRef(
    ft(function (r, o) {
      const {
          loop: s = !1,
          trapped: a = !1,
          onMountAutoFocus: c,
          onUnmountAutoFocus: f,
          ...p
        } = r,
        [m, x] = h.useState(null),
        y = Qt(c),
        w = Qt(f),
        S = h.useRef(null),
        R = Ue(o, x),
        P = h.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      (h.useEffect(() => {
        if (a) {
          let E = function (_) {
              if (P.paused || !m) return;
              const I = _.target;
              m.contains(I) ? (S.current = I) : Cn(S.current, { select: !0 });
            },
            k = function (_) {
              if (P.paused || !m) return;
              const I = _.relatedTarget;
              I !== null && (m.contains(I) || Cn(S.current, { select: !0 }));
            },
            N = function (_) {
              if (document.activeElement === document.body)
                for (const F of _) F.removedNodes.length > 0 && Cn(m);
            };
          (ft(E, "handleFocusIn"),
            ft(k, "handleFocusOut"),
            ft(N, "handleMutations"),
            document.addEventListener("focusin", E),
            document.addEventListener("focusout", k));
          const D = new MutationObserver(N);
          return (
            m && D.observe(m, { childList: !0, subtree: !0 }),
            () => {
              (document.removeEventListener("focusin", E),
                document.removeEventListener("focusout", k),
                D.disconnect());
            }
          );
        }
      }, [a, m, P.paused]),
        h.useEffect(() => {
          if (m) {
            Uh.add(P);
            const E = document.activeElement;
            if (!m.contains(E)) {
              const N = new CustomEvent(Lu, $h);
              (m.addEventListener(Lu, y),
                m.dispatchEvent(N),
                N.defaultPrevented ||
                  (fg(gg(Qc(m)), { select: !0 }),
                  document.activeElement === E && Cn(m)));
            }
            return () => {
              (m.removeEventListener(Lu, y),
                setTimeout(() => {
                  const N = new CustomEvent(Fu, $h);
                  (m.addEventListener(Fu, w),
                    m.dispatchEvent(N),
                    N.defaultPrevented ||
                      Cn(E ?? document.body, { select: !0 }),
                    m.removeEventListener(Fu, w),
                    Uh.remove(P));
                }, 0));
            };
          }
        }, [m, y, w, P]));
      const C = h.useCallback(
        (E) => {
          if ((!s && !a) || P.paused) return;
          const k = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey,
            N = document.activeElement;
          if (k && N) {
            const D = E.currentTarget,
              [_, I] = pg(D);
            _ && I
              ? !E.shiftKey && N === I
                ? (E.preventDefault(), s && Cn(_, { select: !0 }))
                : E.shiftKey &&
                  N === _ &&
                  (E.preventDefault(), s && Cn(I, { select: !0 }))
              : N === D && E.preventDefault();
          }
        },
        [s, a, P.paused],
      );
      return g.jsx(Ge.div, { tabIndex: -1, ...p, ref: R, onKeyDown: C });
    }, "FocusScope"),
  );
function fg(n, { select: r = !1 } = {}) {
  const o = document.activeElement;
  for (const s of n)
    if ((Cn(s, { select: r }), document.activeElement !== o)) return;
}
ft(fg, "focusFirst");
function pg(n) {
  const r = Qc(n),
    o = pc(r, n),
    s = pc(r.reverse(), n);
  return [o, s];
}
ft(pg, "getTabbableEdges");
function Qc(n) {
  const r = [],
    o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: ft((s) => {
        const a = s.tagName === "INPUT" && s.type === "hidden";
        return s.disabled || s.hidden || a
          ? NodeFilter.FILTER_SKIP
          : s.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }, "acceptNode"),
    });
  for (; o.nextNode(); ) r.push(o.currentNode);
  return r;
}
ft(Qc, "getTabbableCandidates");
function pc(n, r) {
  const o =
    typeof r.checkVisibility == "function" &&
    r.checkVisibility({ checkVisibilityCSS: !0 });
  for (const s of n)
    if (
      !(o ? !s.checkVisibility({ checkVisibilityCSS: !0 }) : hg(s, { upTo: r }))
    )
      return s;
}
ft(pc, "findVisible");
function hg(n, { upTo: r }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (r !== void 0 && n === r) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
ft(hg, "isHidden");
function mg(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
ft(mg, "isSelectableInput");
function Cn(n, { select: r = !1 } = {}) {
  if (n && n.focus) {
    const o = document.activeElement;
    (n.focus({ preventScroll: !0 }), n !== o && mg(n) && r && n.select());
  }
}
ft(Cn, "focus");
var Uh = vg();
function vg() {
  let n = [];
  return {
    add(r) {
      const o = n[0];
      (r !== o && o?.pause(), (n = hc(n, r)), n.unshift(r));
    },
    remove(r) {
      ((n = hc(n, r)), n[0]?.resume());
    },
  };
}
ft(vg, "createFocusScopesStack");
function hc(n, r) {
  const o = [...n],
    s = o.indexOf(r);
  return (s !== -1 && o.splice(s, 1), o);
}
ft(hc, "arrayRemove");
function gg(n) {
  return n.filter((r) => r.tagName !== "A");
}
ft(gg, "removeLinks");
var DE = Object.defineProperty,
  Kc = (n, r) => DE(n, "name", { value: r, configurable: !0 }),
  qs = 0,
  no = null;
function ME(n) {
  return (qc(), n.children);
}
Kc(ME, "FocusGuards");
function qc() {
  h.useEffect(() => {
    no || (no = { start: mc(), end: mc() });
    const { start: n, end: r } = no;
    return (
      document.body.firstElementChild !== n &&
        document.body.insertAdjacentElement("afterbegin", n),
      document.body.lastElementChild !== r &&
        document.body.insertAdjacentElement("beforeend", r),
      qs++,
      () => {
        (qs === 1 && (no?.start.remove(), no?.end.remove(), (no = null)),
          (qs = Math.max(0, qs - 1)));
      }
    );
  }, []);
}
Kc(qc, "useFocusGuards");
function mc() {
  const n = document.createElement("span");
  return (
    n.setAttribute("data-radix-focus-guard", ""),
    (n.tabIndex = 0),
    (n.style.outline = "none"),
    (n.style.opacity = "0"),
    (n.style.position = "fixed"),
    (n.style.pointerEvents = "none"),
    n
  );
}
Kc(mc, "createFocusGuard");
var sn = function () {
  return (
    (sn =
      Object.assign ||
      function (r) {
        for (var o, s = 1, a = arguments.length; s < a; s++) {
          o = arguments[s];
          for (var c in o)
            Object.prototype.hasOwnProperty.call(o, c) && (r[c] = o[c]);
        }
        return r;
      }),
    sn.apply(this, arguments)
  );
};
function yg(n, r) {
  var o = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) &&
      r.indexOf(s) < 0 &&
      (o[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, s = Object.getOwnPropertySymbols(n); a < s.length; a++)
      r.indexOf(s[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, s[a]) &&
        (o[s[a]] = n[s[a]]);
  return o;
}
function AE(n, r, o) {
  if (o || arguments.length === 2)
    for (var s = 0, a = r.length, c; s < a; s++)
      (c || !(s in r)) &&
        (c || (c = Array.prototype.slice.call(r, 0, s)), (c[s] = r[s]));
  return n.concat(c || Array.prototype.slice.call(r));
}
var ll = "right-scroll-bar-position",
  al = "width-before-scroll-bar",
  IE = "with-scroll-bars-hidden",
  LE = "--removed-body-scroll-bar-size";
function zu(n, r) {
  return (typeof n == "function" ? n(r) : n && (n.current = r), n);
}
function FE(n, r) {
  var o = h.useState(function () {
    return {
      value: n,
      callback: r,
      facade: {
        get current() {
          return o.value;
        },
        set current(s) {
          var a = o.value;
          a !== s && ((o.value = s), o.callback(s, a));
        },
      },
    };
  })[0];
  return ((o.callback = r), o.facade);
}
var zE = typeof window < "u" ? h.useLayoutEffect : h.useEffect,
  Vh = new WeakMap();
function $E(n, r) {
  var o = FE(null, function (s) {
    return n.forEach(function (a) {
      return zu(a, s);
    });
  });
  return (
    zE(
      function () {
        var s = Vh.get(o);
        if (s) {
          var a = new Set(s),
            c = new Set(n),
            f = o.current;
          (a.forEach(function (p) {
            c.has(p) || zu(p, null);
          }),
            c.forEach(function (p) {
              a.has(p) || zu(p, f);
            }));
        }
        Vh.set(o, n);
      },
      [n],
    ),
    o
  );
}
function UE(n) {
  return n;
}
function VE(n, r) {
  r === void 0 && (r = UE);
  var o = [],
    s = !1,
    a = {
      read: function () {
        if (s)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return o.length ? o[o.length - 1] : n;
      },
      useMedium: function (c) {
        var f = r(c, s);
        return (
          o.push(f),
          function () {
            o = o.filter(function (p) {
              return p !== f;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (s = !0; o.length; ) {
          var f = o;
          ((o = []), f.forEach(c));
        }
        o = {
          push: function (p) {
            return c(p);
          },
          filter: function () {
            return o;
          },
        };
      },
      assignMedium: function (c) {
        s = !0;
        var f = [];
        if (o.length) {
          var p = o;
          ((o = []), p.forEach(c), (f = o));
        }
        var m = function () {
            var y = f;
            ((f = []), y.forEach(c));
          },
          x = function () {
            return Promise.resolve().then(m);
          };
        (x(),
          (o = {
            push: function (y) {
              (f.push(y), x());
            },
            filter: function (y) {
              return ((f = f.filter(y)), o);
            },
          }));
      },
    };
  return a;
}
function HE(n) {
  n === void 0 && (n = {});
  var r = VE(null);
  return ((r.options = sn({ async: !0, ssr: !1 }, n)), r);
}
var wg = function (n) {
  var r = n.sideCar,
    o = yg(n, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var s = r.read();
  if (!s) throw new Error("Sidecar medium not found");
  return h.createElement(s, sn({}, o));
};
wg.isSideCarExport = !0;
function WE(n, r) {
  return (n.useMedium(r), wg);
}
var xg = HE(),
  $u = function () {},
  Ml = h.forwardRef(function (n, r) {
    var o = h.useRef(null),
      s = h.useState({
        onScrollCapture: $u,
        onWheelCapture: $u,
        onTouchMoveCapture: $u,
      }),
      a = s[0],
      c = s[1],
      f = n.forwardProps,
      p = n.children,
      m = n.className,
      x = n.removeScrollBar,
      y = n.enabled,
      w = n.shards,
      S = n.sideCar,
      R = n.noRelative,
      P = n.noIsolation,
      C = n.inert,
      E = n.allowPinchZoom,
      k = n.as,
      N = k === void 0 ? "div" : k,
      D = n.gapMode,
      _ = yg(n, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      I = S,
      F = $E([o, r]),
      $ = sn(sn({}, _), a);
    return h.createElement(
      h.Fragment,
      null,
      y &&
        h.createElement(I, {
          sideCar: xg,
          removeScrollBar: x,
          shards: w,
          noRelative: R,
          noIsolation: P,
          inert: C,
          setCallbacks: c,
          allowPinchZoom: !!E,
          lockRef: o,
          gapMode: D,
        }),
      f
        ? h.cloneElement(h.Children.only(p), sn(sn({}, $), { ref: F }))
        : h.createElement(N, sn({}, $, { className: m, ref: F }), p),
    );
  });
Ml.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ml.classNames = { fullWidth: al, zeroRight: ll };
var BE = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function QE() {
  if (!document) return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var r = BE();
  return (r && n.setAttribute("nonce", r), n);
}
function KE(n, r) {
  n.styleSheet
    ? (n.styleSheet.cssText = r)
    : n.appendChild(document.createTextNode(r));
}
function qE(n) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(n);
}
var GE = function () {
    var n = 0,
      r = null;
    return {
      add: function (o) {
        (n == 0 && (r = QE()) && (KE(r, o), qE(r)), n++);
      },
      remove: function () {
        (n--,
          !n && r && (r.parentNode && r.parentNode.removeChild(r), (r = null)));
      },
    };
  },
  YE = function () {
    var n = GE();
    return function (r, o) {
      h.useEffect(
        function () {
          return (
            n.add(r),
            function () {
              n.remove();
            }
          );
        },
        [r && o],
      );
    };
  },
  Sg = function () {
    var n = YE(),
      r = function (o) {
        var s = o.styles,
          a = o.dynamic;
        return (n(s, a), null);
      };
    return r;
  },
  XE = { left: 0, top: 0, right: 0, gap: 0 },
  Uu = function (n) {
    return parseInt(n || "", 10) || 0;
  },
  ZE = function (n) {
    var r = window.getComputedStyle(document.body),
      o = r[n === "padding" ? "paddingLeft" : "marginLeft"],
      s = r[n === "padding" ? "paddingTop" : "marginTop"],
      a = r[n === "padding" ? "paddingRight" : "marginRight"];
    return [Uu(o), Uu(s), Uu(a)];
  },
  JE = function (n) {
    if ((n === void 0 && (n = "margin"), typeof window > "u")) return XE;
    var r = ZE(n),
      o = document.documentElement.clientWidth,
      s = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, s - o + r[2] - r[0]),
    };
  },
  eb = Sg(),
  po = "data-scroll-locked",
  tb = function (n, r, o, s) {
    var a = n.left,
      c = n.top,
      f = n.right,
      p = n.gap;
    return (
      o === void 0 && (o = "margin"),
      `
  .`
        .concat(
          IE,
          ` {
   overflow: hidden `,
        )
        .concat(
          s,
          `;
   padding-right: `,
        )
        .concat(p, "px ")
        .concat(
          s,
          `;
  }
  body[`,
        )
        .concat(
          po,
          `] {
    overflow: hidden `,
        )
        .concat(
          s,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            r && "position: relative ".concat(s, ";"),
            o === "margin" &&
              `
    padding-left: `
                .concat(
                  a,
                  `px;
    padding-top: `,
                )
                .concat(
                  c,
                  `px;
    padding-right: `,
                )
                .concat(
                  f,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(p, "px ")
                .concat(
                  s,
                  `;
    `,
                ),
            o === "padding" &&
              "padding-right: ".concat(p, "px ").concat(s, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          ll,
          ` {
    right: `,
        )
        .concat(p, "px ")
        .concat(
          s,
          `;
  }
  
  .`,
        )
        .concat(
          al,
          ` {
    margin-right: `,
        )
        .concat(p, "px ")
        .concat(
          s,
          `;
  }
  
  .`,
        )
        .concat(ll, " .")
        .concat(
          ll,
          ` {
    right: 0 `,
        )
        .concat(
          s,
          `;
  }
  
  .`,
        )
        .concat(al, " .")
        .concat(
          al,
          ` {
    margin-right: 0 `,
        )
        .concat(
          s,
          `;
  }
  
  body[`,
        )
        .concat(
          po,
          `] {
    `,
        )
        .concat(LE, ": ")
        .concat(
          p,
          `px;
  }
`,
        )
    );
  },
  Hh = function () {
    var n = parseInt(document.body.getAttribute(po) || "0", 10);
    return isFinite(n) ? n : 0;
  },
  nb = function () {
    h.useEffect(function () {
      return (
        document.body.setAttribute(po, (Hh() + 1).toString()),
        function () {
          var n = Hh() - 1;
          n <= 0
            ? document.body.removeAttribute(po)
            : document.body.setAttribute(po, n.toString());
        }
      );
    }, []);
  },
  rb = function (n) {
    var r = n.noRelative,
      o = n.noImportant,
      s = n.gapMode,
      a = s === void 0 ? "margin" : s;
    nb();
    var c = h.useMemo(
      function () {
        return JE(a);
      },
      [a],
    );
    return h.createElement(eb, { styles: tb(c, !r, a, o ? "" : "!important") });
  },
  vc = !1;
if (typeof window < "u")
  try {
    var Gs = Object.defineProperty({}, "passive", {
      get: function () {
        return ((vc = !0), !0);
      },
    });
    (window.addEventListener("test", Gs, Gs),
      window.removeEventListener("test", Gs, Gs));
  } catch {
    vc = !1;
  }
var ro = vc ? { passive: !1 } : !1,
  ob = function (n) {
    return n.tagName === "TEXTAREA";
  },
  Cg = function (n, r) {
    if (!(n instanceof Element)) return !1;
    var o = window.getComputedStyle(n);
    return (
      o[r] !== "hidden" &&
      !(o.overflowY === o.overflowX && !ob(n) && o[r] === "visible")
    );
  },
  ib = function (n) {
    return Cg(n, "overflowY");
  },
  sb = function (n) {
    return Cg(n, "overflowX");
  },
  Wh = function (n, r) {
    var o = r.ownerDocument,
      s = r;
    do {
      typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
      var a = Eg(n, s);
      if (a) {
        var c = bg(n, s),
          f = c[1],
          p = c[2];
        if (f > p) return !0;
      }
      s = s.parentNode;
    } while (s && s !== o.body);
    return !1;
  },
  lb = function (n) {
    var r = n.scrollTop,
      o = n.scrollHeight,
      s = n.clientHeight;
    return [r, o, s];
  },
  ab = function (n) {
    var r = n.scrollLeft,
      o = n.scrollWidth,
      s = n.clientWidth;
    return [r, o, s];
  },
  Eg = function (n, r) {
    return n === "v" ? ib(r) : sb(r);
  },
  bg = function (n, r) {
    return n === "v" ? lb(r) : ab(r);
  },
  ub = function (n, r) {
    return n === "h" && r === "rtl" ? -1 : 1;
  },
  cb = function (n, r, o, s, a) {
    var c = ub(n, window.getComputedStyle(r).direction),
      f = c * s,
      p = o.target,
      m = r.contains(p),
      x = !1,
      y = f > 0,
      w = 0,
      S = 0;
    do {
      if (!p) break;
      var R = bg(n, p),
        P = R[0],
        C = R[1],
        E = R[2],
        k = C - E - c * P;
      (P || k) && Eg(n, p) && ((w += k), (S += P));
      var N = p.parentNode;
      p = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
    } while ((!m && p !== document.body) || (m && (r.contains(p) || r === p)));
    return (((y && Math.abs(w) < 1) || (!y && Math.abs(S) < 1)) && (x = !0), x);
  },
  Ys = function (n) {
    return "changedTouches" in n
      ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
      : [0, 0];
  },
  Bh = function (n) {
    return [n.deltaX, n.deltaY];
  },
  Qh = function (n) {
    return n && "current" in n ? n.current : n;
  },
  db = function (n, r) {
    return n[0] === r[0] && n[1] === r[1];
  },
  fb = function (n) {
    return `
  .block-interactivity-`
      .concat(
        n,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        n,
        ` {pointer-events: all;}
`,
      );
  },
  pb = 0,
  oo = [];
function hb(n) {
  var r = h.useRef([]),
    o = h.useRef([0, 0]),
    s = h.useRef(),
    a = h.useState(pb++)[0],
    c = h.useState(Sg)[0],
    f = h.useRef(n);
  (h.useEffect(
    function () {
      f.current = n;
    },
    [n],
  ),
    h.useEffect(
      function () {
        if (n.inert) {
          document.body.classList.add("block-interactivity-".concat(a));
          var C = AE([n.lockRef.current], (n.shards || []).map(Qh), !0).filter(
            Boolean,
          );
          return (
            C.forEach(function (E) {
              return E.classList.add("allow-interactivity-".concat(a));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(a)),
                C.forEach(function (E) {
                  return E.classList.remove("allow-interactivity-".concat(a));
                }));
            }
          );
        }
      },
      [n.inert, n.lockRef.current, n.shards],
    ));
  var p = h.useCallback(function (C, E) {
      if (
        ("touches" in C && C.touches.length === 2) ||
        (C.type === "wheel" && C.ctrlKey)
      )
        return !f.current.allowPinchZoom;
      var k = Ys(C),
        N = o.current,
        D = "deltaX" in C ? C.deltaX : N[0] - k[0],
        _ = "deltaY" in C ? C.deltaY : N[1] - k[1],
        I,
        F = C.target,
        $ = Math.abs(D) > Math.abs(_) ? "h" : "v";
      if ("touches" in C && $ === "h" && F.type === "range") return !1;
      var U = window.getSelection(),
        G = U && U.anchorNode,
        W = G ? G === F || G.contains(F) : !1;
      if (W) return !1;
      var ce = Wh($, F);
      if (!ce) return !0;
      if ((ce ? (I = $) : ((I = $ === "v" ? "h" : "v"), (ce = Wh($, F))), !ce))
        return !1;
      if (
        (!s.current && "changedTouches" in C && (D || _) && (s.current = I), !I)
      )
        return !0;
      var Y = s.current || I;
      return cb(Y, E, C, Y === "h" ? D : _);
    }, []),
    m = h.useCallback(function (C) {
      var E = C;
      if (!(!oo.length || oo[oo.length - 1] !== c)) {
        var k = "deltaY" in E ? Bh(E) : Ys(E),
          N = r.current.filter(function (I) {
            return (
              I.name === E.type &&
              (I.target === E.target || E.target === I.shadowParent) &&
              db(I.delta, k)
            );
          })[0];
        if (N && N.should) {
          E.cancelable && E.preventDefault();
          return;
        }
        if (!N) {
          var D = (f.current.shards || [])
              .map(Qh)
              .filter(Boolean)
              .filter(function (I) {
                return I.contains(E.target);
              }),
            _ = D.length > 0 ? p(E, D[0]) : !f.current.noIsolation;
          _ && E.cancelable && E.preventDefault();
        }
      }
    }, []),
    x = h.useCallback(function (C, E, k, N) {
      var D = { name: C, delta: E, target: k, should: N, shadowParent: mb(k) };
      (r.current.push(D),
        setTimeout(function () {
          r.current = r.current.filter(function (_) {
            return _ !== D;
          });
        }, 1));
    }, []),
    y = h.useCallback(function (C) {
      ((o.current = Ys(C)), (s.current = void 0));
    }, []),
    w = h.useCallback(function (C) {
      x(C.type, Bh(C), C.target, p(C, n.lockRef.current));
    }, []),
    S = h.useCallback(function (C) {
      x(C.type, Ys(C), C.target, p(C, n.lockRef.current));
    }, []);
  h.useEffect(function () {
    return (
      oo.push(c),
      n.setCallbacks({
        onScrollCapture: w,
        onWheelCapture: w,
        onTouchMoveCapture: S,
      }),
      document.addEventListener("wheel", m, ro),
      document.addEventListener("touchmove", m, ro),
      document.addEventListener("touchstart", y, ro),
      function () {
        ((oo = oo.filter(function (C) {
          return C !== c;
        })),
          document.removeEventListener("wheel", m, ro),
          document.removeEventListener("touchmove", m, ro),
          document.removeEventListener("touchstart", y, ro));
      }
    );
  }, []);
  var R = n.removeScrollBar,
    P = n.inert;
  return h.createElement(
    h.Fragment,
    null,
    P ? h.createElement(c, { styles: fb(a) }) : null,
    R
      ? h.createElement(rb, { noRelative: n.noRelative, gapMode: n.gapMode })
      : null,
  );
}
function mb(n) {
  for (var r = null; n !== null; )
    (n instanceof ShadowRoot && ((r = n.host), (n = n.host)),
      (n = n.parentNode));
  return r;
}
const vb = WE(xg, hb);
var kg = h.forwardRef(function (n, r) {
  return h.createElement(Ml, sn({}, n, { ref: r, sideCar: vb }));
});
kg.classNames = Ml.classNames;
var gb = function (n) {
    if (typeof document > "u") return null;
    var r = Array.isArray(n) ? n[0] : n;
    return r.ownerDocument.body;
  },
  io = new WeakMap(),
  Xs = new WeakMap(),
  Zs = {},
  Vu = 0,
  Pg = function (n) {
    return n && (n.host || Pg(n.parentNode));
  },
  yb = function (n, r) {
    return r
      .map(function (o) {
        if (n.contains(o)) return o;
        var s = Pg(o);
        return s && n.contains(s)
          ? s
          : (console.error(
              "aria-hidden",
              o,
              "in not contained inside",
              n,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (o) {
        return !!o;
      });
  },
  wb = function (n, r, o, s) {
    var a = yb(r, Array.isArray(n) ? n : [n]);
    Zs[o] || (Zs[o] = new WeakMap());
    var c = Zs[o],
      f = [],
      p = new Set(),
      m = new Set(a),
      x = function (w) {
        !w || p.has(w) || (p.add(w), x(w.parentNode));
      };
    a.forEach(x);
    var y = function (w) {
      !w ||
        m.has(w) ||
        Array.prototype.forEach.call(w.children, function (S) {
          if (p.has(S)) y(S);
          else
            try {
              var R = S.getAttribute(s),
                P = R !== null && R !== "false",
                C = (io.get(S) || 0) + 1,
                E = (c.get(S) || 0) + 1;
              (io.set(S, C),
                c.set(S, E),
                f.push(S),
                C === 1 && P && Xs.set(S, !0),
                E === 1 && S.setAttribute(o, "true"),
                P || S.setAttribute(s, "true"));
            } catch (k) {
              console.error("aria-hidden: cannot operate on ", S, k);
            }
        });
    };
    return (
      y(r),
      p.clear(),
      Vu++,
      function () {
        (f.forEach(function (w) {
          var S = io.get(w) - 1,
            R = c.get(w) - 1;
          (io.set(w, S),
            c.set(w, R),
            S || (Xs.has(w) || w.removeAttribute(s), Xs.delete(w)),
            R || w.removeAttribute(o));
        }),
          Vu--,
          Vu ||
            ((io = new WeakMap()),
            (io = new WeakMap()),
            (Xs = new WeakMap()),
            (Zs = {})));
      }
    );
  },
  xb = function (n, r, o) {
    o === void 0 && (o = "data-aria-hidden");
    var s = Array.from(Array.isArray(n) ? n : [n]),
      a = gb(n);
    return a
      ? (s.push.apply(s, Array.from(a.querySelectorAll("[aria-live], script"))),
        wb(s, a, o, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Sb = Object.defineProperty,
  Ot = (n, r) => Sb(n, "name", { value: r, configurable: !0 }),
  Gc = "Dialog",
  [Rg, Og] = lr(Gc),
  [Cb, qt] = Rg(Gc),
  Eb = Ot((n) => {
    const {
        __scopeDialog: r,
        children: o,
        open: s,
        defaultOpen: a,
        onOpenChange: c,
        modal: f = !0,
      } = n,
      p = h.useRef(null),
      m = h.useRef(null),
      [x, y] = Sl({ prop: s, defaultProp: a ?? !1, onChange: c, caller: Gc }),
      [w, S] = h.useState(0),
      [R, P] = h.useState(0);
    return g.jsx(Cb, {
      scope: r,
      triggerRef: p,
      contentRef: m,
      contentId: wi(),
      titleId: wi(),
      descriptionId: wi(),
      titlePresent: w > 0,
      descriptionPresent: R > 0,
      setTitleCount: S,
      setDescriptionCount: P,
      open: x,
      onOpenChange: y,
      onOpenToggle: h.useCallback(() => y((C) => !C), [y]),
      modal: f,
      children: o,
    });
  }, "Dialog"),
  bb = "DialogTrigger",
  kb = h.forwardRef(
    Ot(function (r, o) {
      const { __scopeDialog: s, ...a } = r,
        c = qt(bb, s),
        f = Ue(o, c.triggerRef);
      return g.jsx(Ge.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": c.open,
        "aria-controls": c.open ? c.contentId : void 0,
        "data-state": Al(c.open),
        ...a,
        ref: f,
        onClick: Ne(r.onClick, c.onOpenToggle),
      });
    }, "DialogTrigger"),
  ),
  Tg = "DialogPortal",
  [Pb, Ng] = Rg(Tg, { forceMount: void 0 }),
  Rb = Ot((n) => {
    const { __scopeDialog: r, forceMount: o, children: s, container: a } = n,
      c = qt(Tg, r);
    return g.jsx(Pb, {
      scope: r,
      forceMount: o,
      children: h.Children.map(s, (f) =>
        g.jsx(Ri, {
          present: o || c.open,
          children: g.jsx(qm, { asChild: !0, container: a, children: f }),
        }),
      ),
    });
  }, "DialogPortal"),
  gc = "DialogOverlay",
  Ob = h.forwardRef(
    Ot(function (r, o) {
      const s = Ng(gc, r.__scopeDialog),
        { forceMount: a = s.forceMount, ...c } = r,
        f = qt(gc, r.__scopeDialog);
      return f.modal
        ? g.jsx(Ri, {
            present: a || f.open,
            children: g.jsx(Nb, { ...c, ref: o }),
          })
        : null;
    }, "DialogOverlay"),
  ),
  Tb = or("DialogOverlay.RemoveScroll"),
  Nb = h.forwardRef(
    Ot(function (r, o) {
      const { __scopeDialog: s, ...a } = r,
        c = qt(gc, s),
        f = Bm(),
        p = Ue(o, f);
      return g.jsx(kg, {
        as: Tb,
        allowPinchZoom: !0,
        shards: [c.contentRef],
        children: g.jsx(Ge.div, {
          "data-state": Al(c.open),
          ...a,
          ref: p,
          style: { pointerEvents: "auto", ...a.style },
        }),
      });
    }, "DialogOverlayImpl"),
  ),
  ki = "DialogContent",
  jb = h.forwardRef(
    Ot(function (r, o) {
      const s = Ng(ki, r.__scopeDialog),
        { forceMount: a = s.forceMount, ...c } = r,
        f = qt(ki, r.__scopeDialog);
      return g.jsx(Ri, {
        present: a || f.open,
        children: f.modal
          ? g.jsx(_b, { ...c, ref: o })
          : g.jsx(Db, { ...c, ref: o }),
      });
    }, "DialogContent"),
  ),
  _b = h.forwardRef(
    Ot(function (r, o) {
      const s = qt(ki, r.__scopeDialog),
        a = h.useRef(null),
        c = Ue(o, s.contentRef, a);
      return (
        h.useEffect(() => {
          const f = a.current;
          if (f) return xb(f);
        }, []),
        g.jsx(jg, {
          ...r,
          ref: c,
          trapFocus: s.open,
          disableOutsidePointerEvents: s.open,
          onCloseAutoFocus: Ne(r.onCloseAutoFocus, (f) => {
            (f.preventDefault(), s.triggerRef.current?.focus());
          }),
          onPointerDownOutside: Ne(r.onPointerDownOutside, (f) => {
            const p = f.detail.originalEvent,
              m = p.button === 0 && p.ctrlKey === !0;
            (p.button === 2 || m) && f.preventDefault();
          }),
          onFocusOutside: Ne(r.onFocusOutside, (f) => f.preventDefault()),
        })
      );
    }, "DialogContentModal"),
  ),
  Db = h.forwardRef(
    Ot(function (r, o) {
      const s = qt(ki, r.__scopeDialog),
        a = h.useRef(!1),
        c = h.useRef(!1);
      return g.jsx(jg, {
        ...r,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (f) => {
          (r.onCloseAutoFocus?.(f),
            f.defaultPrevented ||
              (a.current || s.triggerRef.current?.focus(), f.preventDefault()),
            (a.current = !1),
            (c.current = !1));
        },
        onInteractOutside: (f) => {
          (r.onInteractOutside?.(f),
            f.defaultPrevented ||
              ((a.current = !0),
              f.detail.originalEvent.type === "pointerdown" &&
                (c.current = !0)));
          const p = f.target;
          (s.triggerRef.current?.contains(p) && f.preventDefault(),
            f.detail.originalEvent.type === "focusin" &&
              c.current &&
              f.preventDefault());
        },
      });
    }, "DialogContentNonModal"),
  ),
  jg = h.forwardRef(
    Ot(function (r, o) {
      const {
          __scopeDialog: s,
          trapFocus: a,
          onOpenAutoFocus: c,
          onCloseAutoFocus: f,
          ...p
        } = r,
        m = qt(ki, s);
      return (
        qc(),
        g.jsx(g.Fragment, {
          children: g.jsx(_E, {
            asChild: !0,
            loop: !0,
            trapped: a,
            onMountAutoFocus: c,
            onUnmountAutoFocus: f,
            children: g.jsx(Nc, {
              role: "dialog",
              id: m.contentId,
              "aria-describedby": m.descriptionPresent
                ? m.descriptionId
                : void 0,
              "aria-labelledby": m.titlePresent ? m.titleId : void 0,
              "data-state": Al(m.open),
              ...p,
              ref: o,
              deferPointerDownOutside: !0,
              onDismiss: () => m.onOpenChange(!1),
            }),
          }),
        })
      );
    }, "DialogContentImpl"),
  ),
  Mb = "DialogTitle",
  Ab = h.forwardRef(
    Ot(function (r, o) {
      const { __scopeDialog: s, ...a } = r,
        c = qt(Mb, s),
        { setTitleCount: f } = c;
      return (
        wt(() => (f((p) => p + 1), () => f((p) => p - 1)), [f]),
        g.jsx(Ge.h2, { id: c.titleId, ...a, ref: o })
      );
    }, "DialogTitle"),
  ),
  Ib = "DialogDescription",
  Lb = h.forwardRef(
    Ot(function (r, o) {
      const { __scopeDialog: s, ...a } = r,
        c = qt(Ib, s),
        { setDescriptionCount: f } = c;
      return (
        wt(() => (f((p) => p + 1), () => f((p) => p - 1)), [f]),
        g.jsx(Ge.p, { id: c.descriptionId, ...a, ref: o })
      );
    }, "DialogDescription"),
  ),
  Fb = "DialogClose",
  _g = h.forwardRef(
    Ot(function (r, o) {
      const { __scopeDialog: s, ...a } = r,
        c = qt(Fb, s);
      return g.jsx(Ge.button, {
        type: "button",
        ...a,
        ref: o,
        onClick: Ne(r.onClick, () => c.onOpenChange(!1)),
      });
    }, "DialogClose"),
  );
function Al(n) {
  return n ? "open" : "closed";
}
Ot(Al, "getState");
var zb = Object.defineProperty,
  Tn = (n, r) => zb(n, "name", { value: r, configurable: !0 }),
  $b = "AlertDialog",
  [Ub, DP] = lr($b, [Og]),
  Nn = Og(),
  Vb = Tn((n) => {
    const { __scopeAlertDialog: r, ...o } = n,
      s = Nn(r);
    return g.jsx(Eb, { ...s, ...o, modal: !0 });
  }, "AlertDialog");
h.forwardRef(
  Tn(function (r, o) {
    const { __scopeAlertDialog: s, ...a } = r,
      c = Nn(s);
    return g.jsx(kb, { ...c, ...a, ref: o });
  }, "AlertDialogTrigger"),
);
var Hb = Tn((n) => {
    const { __scopeAlertDialog: r, ...o } = n,
      s = Nn(r);
    return g.jsx(Rb, { ...s, ...o });
  }, "AlertDialogPortal"),
  Wb = h.forwardRef(
    Tn(function (r, o) {
      const { __scopeAlertDialog: s, ...a } = r,
        c = Nn(s);
      return g.jsx(Ob, { ...c, ...a, ref: o });
    }, "AlertDialogOverlay"),
  ),
  Bb = "AlertDialogContent",
  [Qb, Kb] = Ub(Bb),
  qb = h.forwardRef(
    Tn(function (r, o) {
      const { __scopeAlertDialog: s, children: a, ...c } = r,
        f = Nn(s),
        p = h.useRef(null),
        m = Ue(o, p),
        x = h.useRef(null);
      return g.jsx(Qb, {
        scope: s,
        cancelRef: x,
        children: g.jsx(jb, {
          role: "alertdialog",
          ...f,
          ...c,
          ref: m,
          onOpenAutoFocus: Ne(c.onOpenAutoFocus, (y) => {
            (y.preventDefault(), x.current?.focus({ preventScroll: !0 }));
          }),
          onPointerDownOutside: (y) => y.preventDefault(),
          onInteractOutside: (y) => y.preventDefault(),
          children: a,
        }),
      });
    }, "AlertDialogContent"),
  ),
  Gb = h.forwardRef(
    Tn(function (r, o) {
      const { __scopeAlertDialog: s, ...a } = r,
        c = Nn(s);
      return g.jsx(Ab, { ...c, ...a, ref: o });
    }, "AlertDialogTitle"),
  ),
  Yb = h.forwardRef(
    Tn(function (r, o) {
      const { __scopeAlertDialog: s, ...a } = r,
        c = Nn(s);
      return g.jsx(Lb, { ...c, ...a, ref: o });
    }, "AlertDialogDescription"),
  ),
  Xb = h.forwardRef(
    Tn(function (r, o) {
      const { __scopeAlertDialog: s, ...a } = r,
        c = Nn(s);
      return g.jsx(_g, { ...c, ...a, ref: o });
    }, "AlertDialogAction"),
  ),
  Zb = "AlertDialogCancel",
  Jb = h.forwardRef(
    Tn(function (r, o) {
      const { __scopeAlertDialog: s, ...a } = r,
        { cancelRef: c } = Kb(Zb, s),
        f = Nn(s),
        p = Ue(o, c);
      return g.jsx(_g, { ...f, ...a, ref: p });
    }, "AlertDialogCancel"),
  ),
  ek = Vb,
  tk = Hb,
  Dg = Wb,
  Mg = qb,
  Ag = Xb,
  Ig = Jb,
  Lg = Gb,
  Fg = Yb;
const Yc = yv(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground border border-primary-border",
          destructive:
            "bg-destructive text-destructive-foreground border border-destructive-border",
          outline:
            " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
          secondary:
            "border bg-secondary text-secondary-foreground border border-secondary-border ",
          ghost: "border border-transparent",
        },
        size: {
          default: "min-h-9 px-4 py-2",
          sm: "min-h-8 rounded-md px-3 text-xs",
          lg: "min-h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  nk = h.forwardRef(
    ({ className: n, variant: r, size: o, asChild: s = !1, ...a }, c) => {
      const f = s ? kx : "button";
      return g.jsx(f, {
        className: Le(Yc({ variant: r, size: o, className: n })),
        ref: c,
        ...a,
      });
    },
  );
nk.displayName = "Button";
const rk = ek,
  ok = tk,
  zg = h.forwardRef(({ className: n, ...r }, o) =>
    g.jsx(Dg, {
      className: Le(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        n,
      ),
      ...r,
      ref: o,
    }),
  );
zg.displayName = Dg.displayName;
const $g = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsxs(ok, {
    children: [
      g.jsx(zg, {}),
      g.jsx(Mg, {
        ref: o,
        className: Le(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          n,
        ),
        ...r,
      }),
    ],
  }),
);
$g.displayName = Mg.displayName;
const Ug = ({ className: n, ...r }) =>
  g.jsx("div", {
    className: Le("flex flex-col space-y-2 text-center sm:text-left", n),
    ...r,
  });
Ug.displayName = "AlertDialogHeader";
const Vg = ({ className: n, ...r }) =>
  g.jsx("div", {
    className: Le(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      n,
    ),
    ...r,
  });
Vg.displayName = "AlertDialogFooter";
const Hg = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx(Lg, { ref: o, className: Le("text-lg font-semibold", n), ...r }),
);
Hg.displayName = Lg.displayName;
const Wg = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx(Fg, {
    ref: o,
    className: Le("text-sm text-muted-foreground", n),
    ...r,
  }),
);
Wg.displayName = Fg.displayName;
const Bg = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx(Ag, { ref: o, className: Le(Yc(), n), ...r }),
);
Bg.displayName = Ag.displayName;
const Qg = h.forwardRef(({ className: n, ...r }, o) =>
  g.jsx(Ig, {
    ref: o,
    className: Le(Yc({ variant: "outline" }), "mt-2 sm:mt-0", n),
    ...r,
  }),
);
Qg.displayName = Ig.displayName;
function ik({
  files: n,
  activePath: r,
  onOpen: o,
  onCreate: s,
  onRename: a,
  onDelete: c,
}) {
  const f = h.useMemo(() => OE(n), [n]),
    [p, m] = h.useState(new Set()),
    [x, y] = h.useState(null),
    [w, S] = h.useState(""),
    [R, P] = h.useState(null),
    [C, E] = h.useState(""),
    [k, N] = h.useState(null),
    D = (U) => {
      m((G) => {
        const W = new Set(G);
        return (W.has(U) ? W.delete(U) : W.add(U), W);
      });
    },
    _ = () => {
      const U = w.trim();
      if (U && x) {
        const G = x.parent ? `${x.parent}/${U}` : U;
        s(G, x.kind);
      }
      (y(null), S(""));
    },
    I = (U) => {
      const G = C.trim();
      if (G && G !== U.path.split("/").pop()) {
        const W = U.path.includes("/")
          ? U.path.slice(0, U.path.lastIndexOf("/") + 1)
          : "";
        a(U, W + G);
      }
      P(null);
    },
    F = (U) => {
      (y({ parent: "", kind: U }), S(""));
    },
    $ = (U, G) => {
      const W = U.file.kind === "folder",
        ce = p.has(U.file.path),
        Y = U.file.path === r,
        ne = R === U.file.id;
      return g.jsxs(
        "div",
        {
          children: [
            g.jsxs("div", {
              className: `group flex h-7 cursor-pointer items-center gap-1 pr-1 text-sm hover-elevate ${Y ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/90"}`,
              style: { paddingLeft: `${G * 12 + 8}px` },
              onClick: () => (W ? D(U.file.path) : o(U.file)),
              "data-testid": `tree-item-${U.file.id}`,
              children: [
                W
                  ? g.jsxs(g.Fragment, {
                      children: [
                        ce
                          ? g.jsx(Ac, {
                              className:
                                "h-3.5 w-3.5 shrink-0 text-muted-foreground",
                            })
                          : g.jsx(O1, {
                              className:
                                "h-3.5 w-3.5 shrink-0 text-muted-foreground",
                            }),
                        ce
                          ? g.jsx(Cv, {
                              className: "h-4 w-4 shrink-0 text-sky-300/80",
                            })
                          : g.jsx(j1, {
                              className: "h-4 w-4 shrink-0 text-sky-300/80",
                            }),
                      ],
                    })
                  : g.jsx(Ti, {
                      className: `ml-[18px] h-4 w-4 shrink-0 ${_l(U.file.path)}`,
                    }),
                ne
                  ? g.jsx(Dl, {
                      autoFocus: !0,
                      value: C,
                      onChange: (te) => E(te.target.value),
                      onBlur: () => I(U.file),
                      onKeyDown: (te) => {
                        (te.key === "Enter" && I(U.file),
                          te.key === "Escape" && P(null));
                      },
                      onClick: (te) => te.stopPropagation(),
                      className: "h-5 flex-1 rounded-sm px-1 py-0 text-sm",
                      "data-testid": `input-rename-${U.file.id}`,
                    })
                  : g.jsx("span", { className: "truncate", children: U.name }),
                !ne &&
                  g.jsxs("span", {
                    className:
                      "ml-auto hidden shrink-0 items-center gap-0.5 group-hover:flex",
                    children: [
                      g.jsx("button", {
                        className:
                          "rounded p-0.5 text-muted-foreground hover:text-foreground",
                        title: "Rename",
                        onClick: (te) => {
                          (te.stopPropagation(), P(U.file.id), E(U.name));
                        },
                        "data-testid": `button-rename-${U.file.id}`,
                        children: g.jsx(z1, { className: "h-3 w-3" }),
                      }),
                      g.jsx("button", {
                        className:
                          "rounded p-0.5 text-muted-foreground hover:text-destructive",
                        title: "Delete",
                        onClick: (te) => {
                          (te.stopPropagation(), N(U.file));
                        },
                        "data-testid": `button-delete-${U.file.id}`,
                        children: g.jsx(B1, { className: "h-3 w-3" }),
                      }),
                      W &&
                        g.jsx("button", {
                          className:
                            "rounded p-0.5 text-muted-foreground hover:text-foreground",
                          title: "New file inside",
                          onClick: (te) => {
                            (te.stopPropagation(),
                              m((le) => {
                                const Q = new Set(le);
                                return (Q.delete(U.file.path), Q);
                              }),
                              y({ parent: U.file.path, kind: "file" }),
                              S(""));
                          },
                          "data-testid": `button-newfile-in-${U.file.id}`,
                          children: g.jsx(Eh, { className: "h-3 w-3" }),
                        }),
                    ],
                  }),
              ],
            }),
            W &&
              !ce &&
              g.jsxs("div", {
                children: [
                  x &&
                    x.parent === U.file.path &&
                    g.jsx(Kh, {
                      depth: G + 1,
                      kind: x.kind,
                      value: w,
                      onChange: S,
                      onCommit: _,
                      onCancel: () => y(null),
                    }),
                  U.children.map((te) => $(te, G + 1)),
                ],
              }),
          ],
        },
        U.file.id,
      );
    };
  return g.jsxs("div", {
    className: "flex h-full flex-col",
    children: [
      g.jsxs("div", {
        className: "flex h-9 items-center justify-between px-3",
        children: [
          g.jsx("span", {
            className:
              "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
            children: "Explorer",
          }),
          g.jsxs("div", {
            className: "flex items-center gap-0.5",
            children: [
              g.jsx("button", {
                className:
                  "rounded p-1 text-muted-foreground hover:text-foreground",
                title: "New file",
                onClick: () => F("file"),
                "data-testid": "button-new-file",
                children: g.jsx(Eh, { className: "h-3.5 w-3.5" }),
              }),
              g.jsx("button", {
                className:
                  "rounded p-1 text-muted-foreground hover:text-foreground",
                title: "New folder",
                onClick: () => F("folder"),
                "data-testid": "button-new-folder",
                children: g.jsx(_1, { className: "h-3.5 w-3.5" }),
              }),
            ],
          }),
        ],
      }),
      g.jsxs("div", {
        className: "min-h-0 flex-1 overflow-y-auto pb-4",
        children: [
          x &&
            x.parent === "" &&
            g.jsx(Kh, {
              depth: 0,
              kind: x.kind,
              value: w,
              onChange: S,
              onCommit: _,
              onCancel: () => y(null),
            }),
          f.map((U) => $(U, 0)),
        ],
      }),
      g.jsx(rk, {
        open: !!k,
        onOpenChange: (U) => !U && N(null),
        children: g.jsxs($g, {
          children: [
            g.jsxs(Ug, {
              children: [
                g.jsxs(Hg, { children: ["Delete ", k?.kind, "?"] }),
                g.jsx(Wg, {
                  children:
                    k?.kind === "folder"
                      ? `"${k?.path}" and everything inside it will be permanently deleted.`
                      : `"${k?.path}" will be permanently deleted.`,
                }),
              ],
            }),
            g.jsxs(Vg, {
              children: [
                g.jsx(Qg, {
                  "data-testid": "button-cancel-delete",
                  children: "Cancel",
                }),
                g.jsx(Bg, {
                  onClick: () => {
                    (k && c(k), N(null));
                  },
                  "data-testid": "button-confirm-delete",
                  children: "Delete",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Kh({
  depth: n,
  kind: r,
  value: o,
  onChange: s,
  onCommit: a,
  onCancel: c,
}) {
  return g.jsxs("div", {
    className: "flex h-7 items-center gap-1 pr-2",
    style: { paddingLeft: `${n * 12 + 26}px` },
    children: [
      r === "folder"
        ? g.jsx(Cv, { className: "h-4 w-4 shrink-0 text-sky-300/80" })
        : g.jsx(Ti, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
      g.jsx(Dl, {
        autoFocus: !0,
        value: o,
        placeholder: r === "folder" ? "folder name" : "filename.ext",
        onChange: (f) => s(f.target.value),
        onBlur: a,
        onKeyDown: (f) => {
          (f.key === "Enter" && a(), f.key === "Escape" && c());
        },
        className: "h-5 flex-1 rounded-sm px-1 py-0 text-sm",
        "data-testid": "input-new-name",
      }),
    ],
  });
}
function sk({ files: n, onJump: r }) {
  const [o, s] = h.useState(""),
    a = h.useMemo(() => {
      const f = o.trim().toLowerCase();
      if (f.length < 2) return [];
      const p = [];
      for (const m of n) {
        if (m.kind !== "file" || !m.content) continue;
        const x = m.content.split(`
`);
        for (let y = 0; y < x.length; y++) {
          const w = x[y].toLowerCase().indexOf(f);
          if (
            w !== -1 &&
            (p.push({ file: m, line: y + 1, col: w + 1, text: x[y].trim() }),
            p.length >= 200)
          )
            return p;
        }
      }
      return p;
    }, [n, o]),
    c = h.useMemo(() => {
      const f = new Map();
      for (const p of a) {
        const m = f.get(p.file.path) ?? [];
        (m.push(p), f.set(p.file.path, m));
      }
      return Array.from(f.entries());
    }, [a]);
  return g.jsxs("div", {
    className: "flex h-full flex-col",
    children: [
      g.jsx("div", {
        className: "flex h-9 items-center px-3",
        children: g.jsx("span", {
          className:
            "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
          children: "Search",
        }),
      }),
      g.jsx("div", {
        className: "px-3 pb-2",
        children: g.jsx(Dl, {
          value: o,
          onChange: (f) => s(f.target.value),
          placeholder: "Search across files",
          className: "h-7 text-sm",
          "data-testid": "input-search",
        }),
      }),
      g.jsxs("div", {
        className: "min-h-0 flex-1 overflow-y-auto pb-4",
        children: [
          o.trim().length >= 2 &&
            a.length === 0 &&
            g.jsxs("div", {
              className:
                "flex flex-col items-center gap-2 px-4 py-10 text-center text-muted-foreground",
              children: [
                g.jsx(V1, { className: "h-6 w-6" }),
                g.jsxs("p", {
                  className: "text-sm",
                  children: ["No results for “", o.trim(), "”"],
                }),
              ],
            }),
          c.map(([f, p]) =>
            g.jsxs(
              "div",
              {
                className: "mb-1",
                children: [
                  g.jsxs("div", {
                    className: "flex items-center gap-1.5 px-3 py-1",
                    children: [
                      g.jsx(Ti, { className: `h-3.5 w-3.5 shrink-0 ${_l(f)}` }),
                      g.jsx("span", {
                        className: "truncate text-xs font-medium",
                        children: f,
                      }),
                      g.jsx("span", {
                        className:
                          "ml-auto rounded-full bg-muted px-1.5 text-[10px] text-muted-foreground",
                        children: p.length,
                      }),
                    ],
                  }),
                  p.map((m, x) =>
                    g.jsxs(
                      "button",
                      {
                        className:
                          "block w-full truncate px-3 py-0.5 pl-8 text-left font-mono text-xs text-muted-foreground hover-elevate",
                        onClick: () => r(m),
                        "data-testid": `search-hit-${m.file.id}-${m.line}`,
                        children: [
                          g.jsx("span", {
                            className: "mr-2 text-muted-foreground/60",
                            children: m.line,
                          }),
                          m.text.slice(0, 80),
                        ],
                      },
                      x,
                    ),
                  ),
                ],
              },
              f,
            ),
          ),
        ],
      }),
    ],
  });
}
function qh(n, r) {
  (r == null || r > n.length) && (r = n.length);
  for (var o = 0, s = Array(r); o < r; o++) s[o] = n[o];
  return s;
}
function lk(n) {
  if (Array.isArray(n)) return n;
}
function ak(n, r, o) {
  return (
    (r = mk(r)) in n
      ? Object.defineProperty(n, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[r] = o),
    n
  );
}
function uk(n, r) {
  var o =
    n == null
      ? null
      : (typeof Symbol < "u" && n[Symbol.iterator]) || n["@@iterator"];
  if (o != null) {
    var s,
      a,
      c,
      f,
      p = [],
      m = !0,
      x = !1;
    try {
      if (((c = (o = o.call(n)).next), r !== 0))
        for (
          ;
          !(m = (s = c.call(o)).done) && (p.push(s.value), p.length !== r);
          m = !0
        );
    } catch (y) {
      ((x = !0), (a = y));
    } finally {
      try {
        if (!m && o.return != null && ((f = o.return()), Object(f) !== f))
          return;
      } finally {
        if (x) throw a;
      }
    }
    return p;
  }
}
function ck() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gh(n, r) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    (r &&
      (s = s.filter(function (a) {
        return Object.getOwnPropertyDescriptor(n, a).enumerable;
      })),
      o.push.apply(o, s));
  }
  return o;
}
function Yh(n) {
  for (var r = 1; r < arguments.length; r++) {
    var o = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Gh(Object(o), !0).forEach(function (s) {
          ak(n, s, o[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
        : Gh(Object(o)).forEach(function (s) {
            Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(o, s));
          });
  }
  return n;
}
function dk(n, r) {
  if (n == null) return {};
  var o,
    s,
    a = fk(n, r);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (s = 0; s < c.length; s++)
      ((o = c[s]),
        r.indexOf(o) === -1 &&
          {}.propertyIsEnumerable.call(n, o) &&
          (a[o] = n[o]));
  }
  return a;
}
function fk(n, r) {
  if (n == null) return {};
  var o = {};
  for (var s in n)
    if ({}.hasOwnProperty.call(n, s)) {
      if (r.indexOf(s) !== -1) continue;
      o[s] = n[s];
    }
  return o;
}
function pk(n, r) {
  return lk(n) || uk(n, r) || vk(n, r) || ck();
}
function hk(n, r) {
  if (typeof n != "object" || !n) return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var s = o.call(n, r);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(n);
}
function mk(n) {
  var r = hk(n, "string");
  return typeof r == "symbol" ? r : r + "";
}
function vk(n, r) {
  if (n) {
    if (typeof n == "string") return qh(n, r);
    var o = {}.toString.call(n).slice(8, -1);
    return (
      o === "Object" && n.constructor && (o = n.constructor.name),
      o === "Map" || o === "Set"
        ? Array.from(n)
        : o === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          ? qh(n, r)
          : void 0
    );
  }
}
function gk(n, r, o) {
  return (
    r in n
      ? Object.defineProperty(n, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[r] = o),
    n
  );
}
function Xh(n, r) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    (r &&
      (s = s.filter(function (a) {
        return Object.getOwnPropertyDescriptor(n, a).enumerable;
      })),
      o.push.apply(o, s));
  }
  return o;
}
function Zh(n) {
  for (var r = 1; r < arguments.length; r++) {
    var o = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Xh(Object(o), !0).forEach(function (s) {
          gk(n, s, o[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
        : Xh(Object(o)).forEach(function (s) {
            Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(o, s));
          });
  }
  return n;
}
function yk() {
  for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
    r[o] = arguments[o];
  return function (s) {
    return r.reduceRight(function (a, c) {
      return c(a);
    }, s);
  };
}
function gi(n) {
  return function r() {
    for (
      var o = this, s = arguments.length, a = new Array(s), c = 0;
      c < s;
      c++
    )
      a[c] = arguments[c];
    return a.length >= n.length
      ? n.apply(this, a)
      : function () {
          for (var f = arguments.length, p = new Array(f), m = 0; m < f; m++)
            p[m] = arguments[m];
          return r.apply(o, [].concat(a, p));
        };
  };
}
function vl(n) {
  return {}.toString.call(n).includes("Object");
}
function wk(n) {
  return !Object.keys(n).length;
}
function Pi(n) {
  return typeof n == "function";
}
function xk(n, r) {
  return Object.prototype.hasOwnProperty.call(n, r);
}
function Sk(n, r) {
  return (
    vl(r) || rr("changeType"),
    Object.keys(r).some(function (o) {
      return !xk(n, o);
    }) && rr("changeField"),
    r
  );
}
function Ck(n) {
  Pi(n) || rr("selectorType");
}
function Ek(n) {
  (Pi(n) || vl(n) || rr("handlerType"),
    vl(n) &&
      Object.values(n).some(function (r) {
        return !Pi(r);
      }) &&
      rr("handlersType"));
}
function bk(n) {
  (n || rr("initialIsRequired"),
    vl(n) || rr("initialType"),
    wk(n) && rr("initialContent"));
}
function kk(n, r) {
  throw new Error(n[r] || n.default);
}
var Pk = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField:
      'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: "an unknown error accured in `state-local` package",
  },
  rr = gi(kk)(Pk),
  Js = { changes: Sk, selector: Ck, handler: Ek, initial: bk };
function Rk(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  (Js.initial(n), Js.handler(r));
  var o = { current: n },
    s = gi(Nk)(o, r),
    a = gi(Tk)(o),
    c = gi(Js.changes)(n),
    f = gi(Ok)(o);
  function p() {
    var x =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (y) {
            return y;
          };
    return (Js.selector(x), x(o.current));
  }
  function m(x) {
    yk(s, a, c, f)(x);
  }
  return [p, m];
}
function Ok(n, r) {
  return Pi(r) ? r(n.current) : r;
}
function Tk(n, r) {
  return ((n.current = Zh(Zh({}, n.current), r)), r);
}
function Nk(n, r, o) {
  return (
    Pi(r)
      ? r(n.current)
      : Object.keys(o).forEach(function (s) {
          var a;
          return (a = r[s]) === null || a === void 0
            ? void 0
            : a.call(r, n.current[s]);
        }),
    o
  );
}
var jk = { create: Rk },
  _k = {
    paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs" },
  };
function Dk(n) {
  return function r() {
    for (
      var o = this, s = arguments.length, a = new Array(s), c = 0;
      c < s;
      c++
    )
      a[c] = arguments[c];
    return a.length >= n.length
      ? n.apply(this, a)
      : function () {
          for (var f = arguments.length, p = new Array(f), m = 0; m < f; m++)
            p[m] = arguments[m];
          return r.apply(o, [].concat(a, p));
        };
  };
}
function Mk(n) {
  return {}.toString.call(n).includes("Object");
}
function Ak(n) {
  return (
    n || Jh("configIsRequired"),
    Mk(n) || Jh("configType"),
    n.urls ? (Ik(), { paths: { vs: n.urls.monacoBase } }) : n
  );
}
function Ik() {
  console.warn(Kg.deprecation);
}
function Lk(n, r) {
  throw new Error(n[r] || n.default);
}
var Kg = {
    configIsRequired: "the configuration object is required",
    configType: "the configuration object should be an object",
    default: "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `,
  },
  Jh = Dk(Lk)(Kg),
  Fk = { config: Ak },
  zk = function () {
    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    return function (a) {
      return o.reduceRight(function (c, f) {
        return f(c);
      }, a);
    };
  };
function qg(n, r) {
  return (
    Object.keys(r).forEach(function (o) {
      r[o] instanceof Object && n[o] && Object.assign(r[o], qg(n[o], r[o]));
    }),
    Yh(Yh({}, n), r)
  );
}
var $k = { type: "cancelation", msg: "operation is manually canceled" };
function Hu(n) {
  var r = !1,
    o = new Promise(function (s, a) {
      (n.then(function (c) {
        return r ? a($k) : s(c);
      }),
        n.catch(a));
    });
  return (
    (o.cancel = function () {
      return (r = !0);
    }),
    o
  );
}
var Uk = ["monaco"],
  Vk = jk.create({
    config: _k,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null,
  }),
  Gg = pk(Vk, 2),
  Ni = Gg[0],
  Il = Gg[1];
function Hk(n) {
  var r = Fk.config(n),
    o = r.monaco,
    s = dk(r, Uk);
  Il(function (a) {
    return { config: qg(a.config, s), monaco: o };
  });
}
function Wk() {
  var n = Ni(function (r) {
    var o = r.monaco,
      s = r.isInitialized,
      a = r.resolve;
    return { monaco: o, isInitialized: s, resolve: a };
  });
  if (!n.isInitialized) {
    if ((Il({ isInitialized: !0 }), n.monaco))
      return (n.resolve(n.monaco), Hu(Wu));
    if (window.monaco && window.monaco.editor)
      return (Yg(window.monaco), n.resolve(window.monaco), Hu(Wu));
    zk(Bk, Kk)(qk);
  }
  return Hu(Wu);
}
function Bk(n) {
  return document.body.appendChild(n);
}
function Qk(n) {
  var r = document.createElement("script");
  return (n && (r.src = n), r);
}
function Kk(n) {
  var r = Ni(function (s) {
      var a = s.config,
        c = s.reject;
      return { config: a, reject: c };
    }),
    o = Qk("".concat(r.config.paths.vs, "/loader.js"));
  return (
    (o.onload = function () {
      return n();
    }),
    (o.onerror = r.reject),
    o
  );
}
function qk() {
  var n = Ni(function (o) {
      var s = o.config,
        a = o.resolve,
        c = o.reject;
      return { config: s, resolve: a, reject: c };
    }),
    r = window.require;
  (r.config(n.config),
    r(
      ["vs/editor/editor.main"],
      function (o) {
        var s = o.m || o;
        (Yg(s), n.resolve(s));
      },
      function (o) {
        n.reject(o);
      },
    ));
}
function Yg(n) {
  Ni().monaco || Il({ monaco: n });
}
function Gk() {
  return Ni(function (n) {
    var r = n.monaco;
    return r;
  });
}
var Wu = new Promise(function (n, r) {
    return Il({ resolve: n, reject: r });
  }),
  Xc = { config: Hk, init: Wk, __getMonacoInstance: Gk },
  Yk = {
    wrapper: { display: "flex", position: "relative", textAlign: "initial" },
    fullWidth: { width: "100%" },
    hide: { display: "none" },
  },
  Bu = Yk,
  Xk = {
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  Zk = Xk;
function Jk({ children: n }) {
  return Pr.createElement("div", { style: Zk.container }, n);
}
var eP = Jk,
  tP = eP;
function nP({
  width: n,
  height: r,
  isEditorReady: o,
  loading: s,
  _ref: a,
  className: c,
  wrapperProps: f,
}) {
  return Pr.createElement(
    "section",
    { style: { ...Bu.wrapper, width: n, height: r }, ...f },
    !o && Pr.createElement(tP, null, s),
    Pr.createElement("div", {
      ref: a,
      style: { ...Bu.fullWidth, ...(!o && Bu.hide) },
      className: c,
    }),
  );
}
var rP = nP,
  Xg = h.memo(rP);
function oP(n) {
  h.useEffect(n, []);
}
var Zg = oP;
function iP(n, r, o = !0) {
  let s = h.useRef(!0);
  h.useEffect(
    s.current || !o
      ? () => {
          s.current = !1;
        }
      : n,
    r,
  );
}
var Rt = iP;
function xi() {}
function uo(n, r, o, s) {
  return sP(n, s) || lP(n, r, o, s);
}
function sP(n, r) {
  return n.editor.getModel(Jg(n, r));
}
function lP(n, r, o, s) {
  return n.editor.createModel(r, o, s ? Jg(n, s) : void 0);
}
function Jg(n, r) {
  return n.Uri.parse(r);
}
function aP({
  original: n,
  modified: r,
  language: o,
  originalLanguage: s,
  modifiedLanguage: a,
  originalModelPath: c,
  modifiedModelPath: f,
  keepCurrentOriginalModel: p = !1,
  keepCurrentModifiedModel: m = !1,
  theme: x = "light",
  loading: y = "Loading...",
  options: w = {},
  height: S = "100%",
  width: R = "100%",
  className: P,
  wrapperProps: C = {},
  beforeMount: E = xi,
  onMount: k = xi,
}) {
  let [N, D] = h.useState(!1),
    [_, I] = h.useState(!0),
    F = h.useRef(null),
    $ = h.useRef(null),
    U = h.useRef(null),
    G = h.useRef(k),
    W = h.useRef(E),
    ce = h.useRef(!1);
  (Zg(() => {
    let le = Xc.init();
    return (
      le
        .then((Q) => ($.current = Q) && I(!1))
        .catch(
          (Q) =>
            Q?.type !== "cancelation" &&
            console.error("Monaco initialization: error:", Q),
        ),
      () => (F.current ? te() : le.cancel())
    );
  }),
    Rt(
      () => {
        if (F.current && $.current) {
          let le = F.current.getOriginalEditor(),
            Q = uo($.current, n || "", s || o || "text", c || "");
          Q !== le.getModel() && le.setModel(Q);
        }
      },
      [c],
      N,
    ),
    Rt(
      () => {
        if (F.current && $.current) {
          let le = F.current.getModifiedEditor(),
            Q = uo($.current, r || "", a || o || "text", f || "");
          Q !== le.getModel() && le.setModel(Q);
        }
      },
      [f],
      N,
    ),
    Rt(
      () => {
        let le = F.current.getModifiedEditor();
        le.getOption($.current.editor.EditorOption.readOnly)
          ? le.setValue(r || "")
          : r !== le.getValue() &&
            (le.executeEdits("", [
              {
                range: le.getModel().getFullModelRange(),
                text: r || "",
                forceMoveMarkers: !0,
              },
            ]),
            le.pushUndoStop());
      },
      [r],
      N,
    ),
    Rt(
      () => {
        F.current?.getModel()?.original.setValue(n || "");
      },
      [n],
      N,
    ),
    Rt(
      () => {
        let { original: le, modified: Q } = F.current.getModel();
        ($.current.editor.setModelLanguage(le, s || o || "text"),
          $.current.editor.setModelLanguage(Q, a || o || "text"));
      },
      [o, s, a],
      N,
    ),
    Rt(
      () => {
        $.current?.editor.setTheme(x);
      },
      [x],
      N,
    ),
    Rt(
      () => {
        F.current?.updateOptions(w);
      },
      [w],
      N,
    ));
  let Y = h.useCallback(() => {
      if (!$.current) return;
      W.current($.current);
      let le = uo($.current, n || "", s || o || "text", c || ""),
        Q = uo($.current, r || "", a || o || "text", f || "");
      F.current?.setModel({ original: le, modified: Q });
    }, [o, r, a, n, s, c, f]),
    ne = h.useCallback(() => {
      !ce.current &&
        U.current &&
        ((F.current = $.current.editor.createDiffEditor(U.current, {
          automaticLayout: !0,
          ...w,
        })),
        Y(),
        $.current?.editor.setTheme(x),
        D(!0),
        (ce.current = !0));
    }, [w, x, Y]);
  (h.useEffect(() => {
    N && G.current(F.current, $.current);
  }, [N]),
    h.useEffect(() => {
      !_ && !N && ne();
    }, [_, N, ne]));
  function te() {
    let le = F.current?.getModel();
    (p || le?.original?.dispose(),
      m || le?.modified?.dispose(),
      F.current?.dispose());
  }
  return Pr.createElement(Xg, {
    width: R,
    height: S,
    isEditorReady: N,
    loading: y,
    _ref: U,
    className: P,
    wrapperProps: C,
  });
}
var uP = aP;
h.memo(uP);
function cP(n) {
  let r = h.useRef();
  return (
    h.useEffect(() => {
      r.current = n;
    }, [n]),
    r.current
  );
}
var dP = cP,
  el = new Map();
function fP({
  defaultValue: n,
  defaultLanguage: r,
  defaultPath: o,
  value: s,
  language: a,
  path: c,
  theme: f = "light",
  line: p,
  loading: m = "Loading...",
  options: x = {},
  overrideServices: y = {},
  saveViewState: w = !0,
  keepCurrentModel: S = !1,
  width: R = "100%",
  height: P = "100%",
  className: C,
  wrapperProps: E = {},
  beforeMount: k = xi,
  onMount: N = xi,
  onChange: D,
  onValidate: _ = xi,
}) {
  let [I, F] = h.useState(!1),
    [$, U] = h.useState(!0),
    G = h.useRef(null),
    W = h.useRef(null),
    ce = h.useRef(null),
    Y = h.useRef(N),
    ne = h.useRef(k),
    te = h.useRef(),
    le = h.useRef(s),
    Q = dP(c),
    oe = h.useRef(!1),
    z = h.useRef(!1);
  (Zg(() => {
    let T = Xc.init();
    return (
      T.then((H) => (G.current = H) && U(!1)).catch(
        (H) =>
          H?.type !== "cancelation" &&
          console.error("Monaco initialization: error:", H),
      ),
      () => (W.current ? X() : T.cancel())
    );
  }),
    Rt(
      () => {
        let T = uo(G.current, n || s || "", r || a || "", c || o || "");
        T !== W.current?.getModel() &&
          (w && el.set(Q, W.current?.saveViewState()),
          W.current?.setModel(T),
          w && W.current?.restoreViewState(el.get(c)));
      },
      [c],
      I,
    ),
    Rt(
      () => {
        W.current?.updateOptions(x);
      },
      [x],
      I,
    ),
    Rt(
      () => {
        !W.current ||
          s === void 0 ||
          (W.current.getOption(G.current.editor.EditorOption.readOnly)
            ? W.current.setValue(s)
            : s !== W.current.getValue() &&
              ((z.current = !0),
              W.current.executeEdits("", [
                {
                  range: W.current.getModel().getFullModelRange(),
                  text: s,
                  forceMoveMarkers: !0,
                },
              ]),
              W.current.pushUndoStop(),
              (z.current = !1)));
      },
      [s],
      I,
    ),
    Rt(
      () => {
        let T = W.current?.getModel();
        T && a && G.current?.editor.setModelLanguage(T, a);
      },
      [a],
      I,
    ),
    Rt(
      () => {
        p !== void 0 && W.current?.revealLine(p);
      },
      [p],
      I,
    ),
    Rt(
      () => {
        G.current?.editor.setTheme(f);
      },
      [f],
      I,
    ));
  let J = h.useCallback(() => {
    if (!(!ce.current || !G.current) && !oe.current) {
      ne.current(G.current);
      let T = c || o,
        H = uo(G.current, s || n || "", r || a || "", T || "");
      ((W.current = G.current?.editor.create(
        ce.current,
        { model: H, automaticLayout: !0, ...x },
        y,
      )),
        w && W.current.restoreViewState(el.get(T)),
        G.current.editor.setTheme(f),
        p !== void 0 && W.current.revealLine(p),
        F(!0),
        (oe.current = !0));
    }
  }, [n, r, o, s, a, c, x, y, w, f, p]);
  (h.useEffect(() => {
    I && Y.current(W.current, G.current);
  }, [I]),
    h.useEffect(() => {
      !$ && !I && J();
    }, [$, I, J]),
    (le.current = s),
    h.useEffect(() => {
      I &&
        D &&
        (te.current?.dispose(),
        (te.current = W.current?.onDidChangeModelContent((T) => {
          z.current || D(W.current.getValue(), T);
        })));
    }, [I, D]),
    h.useEffect(() => {
      if (I) {
        let T = G.current.editor.onDidChangeMarkers((H) => {
          let de = W.current.getModel()?.uri;
          if (de && H.find((he) => he.path === de.path)) {
            let he = G.current.editor.getModelMarkers({ resource: de });
            _?.(he);
          }
        });
        return () => {
          T?.dispose();
        };
      }
      return () => {};
    }, [I, _]));
  function X() {
    (te.current?.dispose(),
      S
        ? w && el.set(c, W.current.saveViewState())
        : W.current.getModel()?.dispose(),
      W.current.dispose());
  }
  return Pr.createElement(Xg, {
    width: R,
    height: P,
    isEditorReady: I,
    loading: m,
    _ref: ce,
    className: C,
    wrapperProps: E,
  });
}
var pP = fP,
  hP = h.memo(pP),
  mP = hP;
function ey({ size: n = 20 }) {
  return g.jsxs("svg", {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-label": "CodeForge",
    role: "img",
    children: [
      g.jsx("rect", {
        x: "1.5",
        y: "1.5",
        width: "21",
        height: "21",
        rx: "5",
        stroke: "currentColor",
        strokeWidth: "1.8",
      }),
      g.jsx("path", {
        d: "M9.2 8.4 5.8 12l3.4 3.6M14.8 8.4l3.4 3.6-3.4 3.6",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
let em = !1;
function vP() {
  Xc.init().then((n) => {
    em ||
      ((em = !0),
      n.editor.defineTheme("cf-dark", {
        base: "vs-dark",
        inherit: !0,
        rules: [
          { token: "comment", foreground: "6b7684", fontStyle: "italic" },
          { token: "keyword", foreground: "c792ea" },
          { token: "string", foreground: "9ece6a" },
          { token: "number", foreground: "ff9e64" },
          { token: "type", foreground: "7dcfff" },
          { token: "tag", foreground: "f7768e" },
          { token: "attribute.name", foreground: "e0af68" },
          { token: "attribute.value", foreground: "9ece6a" },
        ],
        colors: {
          "editor.background": "#111318",
          "editor.foreground": "#c9d2e3",
          "editor.lineHighlightBackground": "#1a1e26",
          "editorLineNumber.foreground": "#3d4452",
          "editorLineNumber.activeForeground": "#8a93a5",
          "editorIndentGuide.background1": "#20242e",
          "editorGutter.background": "#111318",
          "editorWidget.background": "#171a21",
          "editorSuggestWidget.background": "#171a21",
          "editorCursor.foreground": "#4da3ff",
          "editor.selectionBackground": "#26405e",
          "scrollbarSlider.background": "#2a2f3a80",
          "scrollbarSlider.hoverBackground": "#3a404eaa",
        },
      }),
      n.editor.defineTheme("cf-light", {
        base: "vs",
        inherit: !0,
        rules: [],
        colors: {
          "editor.background": "#fbfbfc",
          "editor.lineHighlightBackground": "#f0f2f5",
        },
      }));
  });
}
function gP({ tabs: n, activeId: r, onSelect: o, onClose: s }) {
  return g.jsx("div", {
    className: "flex h-9 items-stretch overflow-x-auto bg-card",
    role: "tablist",
    children: n.map(({ file: a, dirty: c }) => {
      const f = a.id === r,
        p = a.path.split("/").pop();
      return g.jsxs(
        "div",
        {
          role: "tab",
          "aria-selected": f,
          className: `group flex min-w-0 max-w-[200px] cursor-pointer items-center gap-1.5 border-r border-border px-3 text-sm ${f ? "border-t-2 border-t-primary bg-background text-foreground" : "border-t-2 border-t-transparent text-muted-foreground hover:text-foreground"}`,
          onClick: () => o(a.id),
          "data-testid": `tab-${a.id}`,
          children: [
            g.jsx(Ti, { className: `h-3.5 w-3.5 shrink-0 ${_l(a.path)}` }),
            g.jsx("span", { className: "truncate", children: p }),
            g.jsxs("button", {
              className: `ml-1 shrink-0 rounded-sm p-0.5 hover:bg-muted ${c ? "" : "opacity-0 group-hover:opacity-100"}`,
              onClick: (m) => {
                (m.stopPropagation(), s(a.id));
              },
              title: c ? "Unsaved changes — close" : "Close",
              "data-testid": `button-close-tab-${a.id}`,
              children: [
                c
                  ? g.jsx("span", {
                      className:
                        "block h-2 w-2 rounded-full bg-primary group-hover:hidden",
                    })
                  : null,
                g.jsx(bl, {
                  className: `h-3 w-3 ${c ? "hidden group-hover:block" : ""}`,
                }),
              ],
            }),
          ],
        },
        a.id,
      );
    }),
  });
}
function yP({
  file: n,
  value: r,
  dark: o,
  onChange: s,
  onCursor: a,
  onMount: c,
  minimap: f = !0,
}) {
  const p = h.useRef(null);
  return g.jsx(mP, {
    path: n.path,
    language: dg(n.path),
    value: r,
    theme: o ? "cf-dark" : "cf-light",
    onChange: (m) => s(m ?? ""),
    onMount: (m, x) => {
      (p.current?.dispose(),
        (p.current = m.onDidChangeCursorPosition((y) => {
          a(y.position.lineNumber, y.position.column);
        })),
        c?.(m, x));
    },
    options: {
      fontSize: 13.5,
      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      fontLigatures: !0,
      minimap: { enabled: f, scale: 1 },
      smoothScrolling: !0,
      cursorBlinking: "smooth",
      scrollBeyondLastLine: !1,
      renderLineHighlight: "all",
      padding: { top: 10 },
      automaticLayout: !0,
      tabSize: 2,
      wordWrap: "off",
      bracketPairColorization: { enabled: !0 },
    },
    loading: g.jsx("div", {
      className:
        "flex h-full w-full items-center justify-center text-sm text-muted-foreground",
      children: "Loading editor…",
    }),
  });
}
const wP = [
  ["Quick open file", "Ctrl P"],
  ["Command palette", "Ctrl Shift P"],
  ["Save file", "Ctrl S"],
  ["Run project", "Ctrl Enter"],
  ["Toggle sidebar", "Ctrl B"],
  ["Toggle console", "Ctrl `"],
];
function tm({ onQuickOpen: n }) {
  return g.jsxs("div", {
    className:
      "flex h-full flex-col items-center justify-center gap-6 bg-background p-8",
    children: [
      g.jsxs("div", {
        className: "flex items-center gap-3 text-muted-foreground",
        children: [
          g.jsx(ey, { size: 40 }),
          g.jsxs("div", {
            children: [
              g.jsx("p", {
                className: "text-lg font-semibold text-foreground",
                children: "CodeForge",
              }),
              g.jsx("p", {
                className: "text-sm",
                children: "A code editor that lives in your browser",
              }),
            ],
          }),
        ],
      }),
      g.jsx("div", {
        className:
          "grid grid-cols-[auto_auto] items-center gap-x-4 gap-y-2 sm:gap-x-8",
        children: wP.map(([r, o]) =>
          g.jsxs(
            "div",
            {
              className: "contents",
              children: [
                g.jsx("span", {
                  className: "text-right text-sm text-muted-foreground",
                  children: r,
                }),
                g.jsx("span", {
                  className: "flex gap-1",
                  children: o
                    .split(" ")
                    .map((s) =>
                      g.jsx(
                        "kbd",
                        {
                          className:
                            "rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground",
                          children: s,
                        },
                        s,
                      ),
                    ),
                }),
              ],
            },
            r,
          ),
        ),
      }),
      g.jsx("button", {
        className:
          "rounded-md border border-border px-4 py-1.5 text-sm text-muted-foreground hover-elevate",
        onClick: n,
        "data-testid": "button-welcome-quickopen",
        children: "Open a file to get started",
      }),
    ],
  });
}
function nm({ srcdoc: n, entry: r, runId: o, onRefresh: s, onClose: a }) {
  return g.jsxs("div", {
    className: "flex h-full min-w-0 flex-col border-l border-border bg-card",
    children: [
      g.jsxs("div", {
        className:
          "flex h-9 shrink-0 items-center gap-2 border-b border-border px-3",
        children: [
          g.jsx(M1, { className: "h-3.5 w-3.5 text-muted-foreground" }),
          g.jsx("span", {
            className: "truncate font-mono text-xs text-muted-foreground",
            children: r ? `preview — ${r}` : "preview",
          }),
          g.jsxs("div", {
            className: "ml-auto flex items-center gap-1",
            children: [
              g.jsx("button", {
                className:
                  "rounded p-1 text-muted-foreground hover:text-foreground",
                title: "Re-run",
                onClick: s,
                "data-testid": "button-refresh-preview",
                children: g.jsx(U1, { className: "h-3.5 w-3.5" }),
              }),
              g.jsx("button", {
                className:
                  "rounded p-1 text-muted-foreground hover:text-foreground",
                title: "Close preview",
                onClick: a,
                "data-testid": "button-close-preview",
                children: g.jsx(bl, { className: "h-3.5 w-3.5" }),
              }),
            ],
          }),
        ],
      }),
      n
        ? g.jsx(
            "iframe",
            {
              title: "preview",
              sandbox: "allow-scripts allow-modals allow-forms allow-popups",
              srcDoc: n,
              className: "h-full w-full flex-1 border-0 bg-white",
              "data-testid": "iframe-preview",
            },
            o,
          )
        : g.jsxs("div", {
            className:
              "flex flex-1 flex-col items-center justify-center gap-2 p-6 text-center text-muted-foreground",
            children: [
              g.jsx(xv, { className: "h-6 w-6" }),
              g.jsx("p", {
                className: "text-sm",
                children: "Nothing to preview",
              }),
              g.jsxs("p", {
                className: "max-w-[240px] text-xs",
                children: [
                  "Add an ",
                  g.jsx("span", {
                    className: "font-mono",
                    children: "index.html",
                  }),
                  " file, or open a JS or Markdown file and hit Run.",
                ],
              }),
            ],
          }),
    ],
  });
}
const xP = {
  log: { cls: "text-foreground/80", icon: Ac },
  info: { cls: "text-blue-400", icon: I1 },
  warn: { cls: "text-yellow-500", icon: Q1 },
  error: { cls: "text-red-400", icon: Sv },
};
function SP({ logs: n, onClear: r, onClose: o }) {
  const s = h.useRef(null);
  return (
    h.useEffect(() => {
      const a = s.current;
      a && (a.scrollTop = a.scrollHeight);
    }, [n]),
    g.jsxs("div", {
      className: "flex h-full flex-col border-t border-border bg-card",
      children: [
        g.jsxs("div", {
          className: "flex h-8 shrink-0 items-center gap-2 px-3",
          children: [
            g.jsx(Ev, { className: "h-3.5 w-3.5 text-muted-foreground" }),
            g.jsx("span", {
              className:
                "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
              children: "Console",
            }),
            n.length > 0 &&
              g.jsx("span", {
                className:
                  "rounded-full bg-muted px-1.5 text-[10px] text-muted-foreground",
                children: n.length,
              }),
            g.jsxs("div", {
              className: "ml-auto flex items-center gap-1",
              children: [
                g.jsx("button", {
                  className:
                    "rounded p-1 text-muted-foreground hover:text-foreground",
                  title: "Clear console",
                  onClick: r,
                  "data-testid": "button-clear-console",
                  children: g.jsx(xv, { className: "h-3.5 w-3.5" }),
                }),
                g.jsx("button", {
                  className:
                    "rounded p-1 text-muted-foreground hover:text-foreground",
                  title: "Close console",
                  onClick: o,
                  "data-testid": "button-close-console",
                  children: g.jsx(bl, { className: "h-3.5 w-3.5" }),
                }),
              ],
            }),
          ],
        }),
        g.jsx("div", {
          ref: s,
          className:
            "min-h-0 flex-1 overflow-y-auto px-3 pb-2 font-mono text-xs",
          children:
            n.length === 0
              ? g.jsx("p", {
                  className: "py-2 text-muted-foreground",
                  children:
                    "Console output from the preview appears here. Run the project with Ctrl/Cmd + Enter.",
                })
              : n.map((a) => {
                  const { cls: c, icon: f } = xP[a.level];
                  return g.jsxs(
                    "div",
                    {
                      className:
                        "flex items-start gap-2 border-b border-border/40 py-1",
                      "data-testid": `log-${a.id}`,
                      children: [
                        g.jsx(f, { className: `mt-0.5 h-3 w-3 shrink-0 ${c}` }),
                        g.jsx("span", {
                          className: `whitespace-pre-wrap break-all ${c}`,
                          children: a.text,
                        }),
                        g.jsx("span", {
                          className:
                            "ml-auto shrink-0 text-[10px] text-muted-foreground/60",
                          children: a.time,
                        }),
                      ],
                    },
                    a.id,
                  );
                }),
        }),
      ],
    })
  );
}
function CP({
  open: n,
  initialQuery: r,
  files: o,
  commands: s,
  onOpenFile: a,
  onDismiss: c,
}) {
  const [f, p] = h.useState(r),
    [m, x] = h.useState(0),
    y = h.useRef(null);
  h.useEffect(() => {
    if (!n) return;
    (p(r), x(0));
    let k = 0;
    const N = () => {
        const _ = y.current;
        _ &&
          (_.focus(),
          _.setSelectionRange(_.value.length, _.value.length),
          document.activeElement !== _ && k++ < 10 && setTimeout(N, 30));
      },
      D = setTimeout(N, 10);
    return () => clearTimeout(D);
  }, [n, r]);
  const w = f.startsWith(">"),
    S = (w ? f.slice(1) : f).trim().toLowerCase(),
    R = h.useMemo(() => {
      if (w) return [];
      const k = o.filter((N) => N.kind === "file");
      return S
        ? k.filter((N) => N.path.toLowerCase().includes(S)).slice(0, 12)
        : k.slice(0, 12);
    }, [o, S, w]),
    P = h.useMemo(
      () =>
        w ? (S ? s.filter((k) => k.label.toLowerCase().includes(S)) : s) : [],
      [s, S, w],
    ),
    C = w ? P.length : R.length,
    E = (k) => {
      if (w) {
        const N = P[k];
        N && (c(), N.run());
      } else {
        const N = R[k];
        N && (c(), a(N));
      }
    };
  return n
    ? g.jsx("div", {
        className: "absolute inset-0 z-50 flex justify-center bg-black/30",
        onMouseDown: c,
        "data-testid": "overlay-palette",
        children: g.jsxs("div", {
          className:
            "mt-16 h-fit w-[520px] max-w-[90vw] overflow-hidden rounded-lg border border-border bg-popover shadow-2xl",
          onMouseDown: (k) => k.stopPropagation(),
          children: [
            g.jsx("input", {
              ref: y,
              autoFocus: !0,
              value: f,
              onChange: (k) => {
                (p(k.target.value), x(0));
              },
              onKeyDown: (k) => {
                (k.key === "Escape" && c(),
                  k.key === "ArrowDown" &&
                    (k.preventDefault(), x((N) => Math.min(N + 1, C - 1))),
                  k.key === "ArrowUp" &&
                    (k.preventDefault(), x((N) => Math.max(N - 1, 0))),
                  k.key === "Enter" && (k.preventDefault(), E(m)));
              },
              placeholder: "Search files by name  ·  type > for commands",
              className:
                "w-full border-b border-border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground",
              "data-testid": "input-palette",
            }),
            g.jsxs("div", {
              className: "max-h-[320px] overflow-y-auto py-1",
              children: [
                C === 0 &&
                  g.jsx("p", {
                    className: "px-4 py-3 text-sm text-muted-foreground",
                    children: "No matches",
                  }),
                !w &&
                  R.map((k, N) =>
                    g.jsxs(
                      "button",
                      {
                        className: `flex w-full items-center gap-2 px-4 py-1.5 text-left text-sm ${N === m ? "bg-accent text-accent-foreground" : ""}`,
                        onMouseEnter: () => x(N),
                        onClick: () => E(N),
                        "data-testid": `palette-file-${k.id}`,
                        children: [
                          g.jsx(Ti, {
                            className: `h-4 w-4 shrink-0 ${_l(k.path)}`,
                          }),
                          g.jsx("span", {
                            className: "truncate",
                            children: k.path.split("/").pop(),
                          }),
                          g.jsx("span", {
                            className:
                              "ml-auto truncate pl-4 text-xs text-muted-foreground",
                            children: k.path,
                          }),
                        ],
                      },
                      k.id,
                    ),
                  ),
                w &&
                  P.map((k, N) =>
                    g.jsxs(
                      "button",
                      {
                        className: `flex w-full items-center gap-2 px-4 py-1.5 text-left text-sm ${N === m ? "bg-accent text-accent-foreground" : ""}`,
                        onMouseEnter: () => x(N),
                        onClick: () => E(N),
                        "data-testid": `palette-cmd-${k.id}`,
                        children: [
                          g.jsx(Ac, {
                            className: "h-4 w-4 shrink-0 text-muted-foreground",
                          }),
                          g.jsx("span", {
                            className: "truncate",
                            children: k.label,
                          }),
                          k.hint &&
                            g.jsx("kbd", {
                              className:
                                "ml-auto rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground",
                              children: k.hint,
                            }),
                        ],
                      },
                      k.id,
                    ),
                  ),
              ],
            }),
          ],
        }),
      })
    : null;
}
let EP = 0;
function bP() {
  const { toast: n } = Om(),
    r = RE(),
    { data: o = [], isLoading: s } = fx({
      queryKey: ["/api/files"],
      queryFn: () => Er.list(),
    }),
    [a, c] = h.useState(null);
  h.useEffect(() => {
    s || c(Er.mode());
  }, [s, o]);
  const [f, p] = h.useState([]),
    [m, x] = h.useState(null),
    [y, w] = h.useState({}),
    [S, R] = h.useState({ line: 1, col: 1 }),
    [P, C] = h.useState(!1),
    [E, k] = h.useState(!0),
    [N, D] = h.useState("explorer"),
    [_, I] = h.useState(() => window.innerWidth >= 768),
    [F, $] = h.useState(232),
    [U, G] = h.useState(!1),
    [W, ce] = h.useState(440),
    [Y, ne] = h.useState(!1),
    [te, le] = h.useState(170),
    [Q, oe] = h.useState(null),
    [z, J] = h.useState(0),
    [X, T] = h.useState([]),
    [H, de] = h.useState(!1),
    [he, ve] = h.useState(""),
    ge = h.useRef(null),
    ke = h.useRef(null),
    xe = h.useRef(null);
  (h.useEffect(() => {
    vP();
  }, []),
    h.useEffect(() => {
      document.documentElement.classList.toggle("dark", E);
    }, [E]));
  const Se = h.useMemo(() => {
      const V = new Map();
      return (o.forEach((ee) => V.set(ee.id, ee)), V);
    }, [o]),
    be = m != null ? (Se.get(m) ?? null) : null,
    Gt = h.useMemo(
      () => o.map((V) => (y[V.id] !== void 0 ? { ...V, content: y[V.id] } : V)),
      [o, y],
    ),
    Ft = h.useCallback(
      (V) => {
        const ee = Se.get(V);
        return ee !== void 0 && y[V] !== void 0 && y[V] !== (ee.content ?? "");
      },
      [y, Se],
    ),
    cn = h.useMemo(
      () =>
        f
          .map((V) => Se.get(V))
          .filter((V) => !!V)
          .map((V) => ({ file: V, dirty: Ft(V.id) })),
      [f, Se, Ft],
    ),
    jn = h.useMemo(() => f.filter((V) => Ft(V)).length, [f, Ft]),
    Yt = ci({
      mutationFn: async ({ id: V, content: ee }) => {
        await Er.saveContent(V, ee);
      },
      onMutate: () => C(!0),
      onSettled: () => {
        (C(!1), so.invalidateQueries({ queryKey: ["/api/files"] }));
      },
    }),
    ji = ci({
      mutationFn: async ({ path: V, kind: ee }) =>
        await Er.create({
          path: V,
          kind: ee,
          content: ee === "file" ? "" : null,
        }),
      onSuccess: (V) => {
        (so.invalidateQueries({ queryKey: ["/api/files"] }),
          V.kind === "file" &&
            (p((ee) => (ee.includes(V.id) ? ee : [...ee, V.id])), x(V.id)));
      },
      onError: () =>
        n({
          title: "Could not create",
          description: "That path may already exist.",
        }),
    }),
    So = ci({
      mutationFn: async ({ id: V, path: ee }) => {
        await Er.rename(V, ee);
      },
      onSuccess: () => so.invalidateQueries({ queryKey: ["/api/files"] }),
      onError: () =>
        n({
          title: "Could not rename",
          description: "That path may already exist.",
        }),
    }),
    _i = ci({
      mutationFn: async (V) => {
        await Er.remove(V);
      },
      onSuccess: (V, ee) => {
        (so.invalidateQueries({ queryKey: ["/api/files"] }),
          p((We) => We.filter((Ye) => Ye !== ee)),
          x((We) => (We === ee ? null : We)));
      },
    }),
    Nr = ci({
      mutationFn: async () => {
        await Er.reset();
      },
      onSuccess: () => {
        (so.invalidateQueries({ queryKey: ["/api/files"] }),
          p([]),
          x(null),
          w({}),
          n({ title: "Workspace reset", description: "Demo files restored." }));
      },
    }),
    Tt = h.useCallback(
      (V) => {
        (p((ee) => (ee.includes(V.id) ? ee : [...ee, V.id])),
          x(V.id),
          r && I(!1));
      },
      [r],
    ),
    _n = h.useCallback((V) => {
      (p((ee) => {
        const We = ee.filter((Ye) => Ye !== V);
        return (
          x((Ye) => {
            if (Ye !== V) return Ye;
            const Jt = ee.indexOf(V);
            return We[Math.min(Jt, We.length - 1)] ?? null;
          }),
          We
        );
      }),
        w((ee) => {
          const { [V]: We, ...Ye } = ee;
          return Ye;
        }));
    }, []),
    Nt = h.useCallback(
      (V) => {
        if (V == null) return;
        const ee = y[V];
        if (ee === void 0) return;
        const We = Se.get(V);
        !We || ee === (We.content ?? "") || Yt.mutate({ id: V, content: ee });
      },
      [y, Se, Yt],
    ),
    Co = h.useCallback(() => {
      f.forEach((V) => Nt(V));
    }, [f, Nt]),
    Xt = h.useCallback(() => {
      const V = TE(Gt, be?.path ?? null);
      (oe(V), J((ee) => ee + 1), G(!0), ne(!0), T([]));
    }, [Gt, be]),
    Di = h.useCallback(
      (V) => {
        (Tt(V.file),
          (xe.current = { path: V.file.path, line: V.line, col: V.col }));
        const ee = ge.current;
        ee &&
          be?.path === V.file.path &&
          (ee.revealLineInCenter(V.line),
          ee.setPosition({ lineNumber: V.line, column: V.col }),
          ee.focus(),
          (xe.current = null));
      },
      [Tt, be],
    );
  (h.useEffect(() => {
    const V = xe.current,
      ee = ge.current;
    V &&
      ee &&
      be?.path === V.path &&
      (setTimeout(() => {
        (ee.revealLineInCenter(V.line),
          ee.setPosition({ lineNumber: V.line, column: V.col }),
          ee.focus());
      }, 60),
      (xe.current = null));
  }, [be]),
    h.useEffect(() => {
      if (m == null || !Ft(m)) return;
      const V = setTimeout(() => Nt(m), 1200);
      return () => clearTimeout(V);
    }, [y, m, Ft, Nt]),
    h.useEffect(() => {
      const V = (ee) => {
        !ee.data ||
          ee.data.__codeforge !== !0 ||
          T((We) => [
            ...We.slice(-499),
            {
              id: ++EP,
              level: ee.data.level ?? "log",
              text: String(ee.data.text ?? ""),
              time: NE(new Date()),
            },
          ]);
      };
      return (
        window.addEventListener("message", V),
        () => window.removeEventListener("message", V)
      );
    }, []));
  const Zt = h.useRef({ saveFile: Nt, run: Xt, openFile: Tt, activeId: m });
  ((Zt.current = { saveFile: Nt, run: Xt, openFile: Tt, activeId: m }),
    h.useEffect(() => {
      const V = (ee) => {
        if (!(ee.ctrlKey || ee.metaKey)) return;
        const Ye = ee.key.toLowerCase();
        Ye === "s"
          ? (ee.preventDefault(), Zt.current.saveFile(Zt.current.activeId))
          : Ye === "p"
            ? (ee.preventDefault(), ve(ee.shiftKey ? ">" : ""), de(!0))
            : Ye === "b" && !ee.shiftKey
              ? (ee.preventDefault(), I((Jt) => !Jt))
              : Ye === "enter"
                ? (ee.preventDefault(), Zt.current.run())
                : ee.key === "`" && (ee.preventDefault(), ne((Jt) => !Jt));
      };
      return (
        window.addEventListener("keydown", V),
        () => window.removeEventListener("keydown", V)
      );
    }, []));
  const Eo = h.useCallback((V, ee) => {
      ((ge.current = V),
        (ke.current = ee),
        V.addCommand(ee.KeyMod.CtrlCmd | ee.KeyCode.KeyS, () =>
          Zt.current.saveFile(Zt.current.activeId),
        ),
        V.addCommand(ee.KeyMod.CtrlCmd | ee.KeyCode.Enter, () =>
          Zt.current.run(),
        ),
        V.addCommand(ee.KeyMod.CtrlCmd | ee.KeyCode.KeyP, () => {
          (ve(""), de(!0));
        }));
    }, []),
    Dn = h.useCallback((V, ee, We, Ye, Jt = !1, Ll = 140, bo = 700) => {
      V.preventDefault();
      const ko = ee === "x" ? V.clientX : V.clientY,
        Po = We(),
        jr = (dn) => {
          const fn = (ee === "x" ? dn.clientX : dn.clientY) - ko,
            Ai = Po + (Jt ? -fn : fn);
          Ye(Math.max(Ll, Math.min(bo, Ai)));
        },
        _r = () => {
          (window.removeEventListener("pointermove", jr),
            window.removeEventListener("pointerup", _r));
        };
      (window.addEventListener("pointermove", jr),
        window.addEventListener("pointerup", _r));
    }, []),
    Mi = h.useMemo(
      () => [
        { id: "run", label: "Run project", hint: "Ctrl ↵", run: Xt },
        {
          id: "save",
          label: "Save active file",
          hint: "Ctrl S",
          run: () => Nt(m),
        },
        { id: "save-all", label: "Save all files", run: Co },
        {
          id: "toggle-sidebar",
          label: "Toggle sidebar",
          hint: "Ctrl B",
          run: () => I((V) => !V),
        },
        {
          id: "toggle-console",
          label: "Toggle console",
          hint: "Ctrl `",
          run: () => ne((V) => !V),
        },
        {
          id: "toggle-preview",
          label: "Toggle preview pane",
          run: () => G((V) => !V),
        },
        {
          id: "toggle-theme",
          label: "Toggle light/dark theme",
          run: () => k((V) => !V),
        },
        {
          id: "reset",
          label: "Reset workspace to demo files",
          run: () => Nr.mutate(),
        },
      ],
      [Xt, Nt, Co, m, Nr],
    );
  return g.jsxs("div", {
    className:
      "flex h-screen flex-col overflow-hidden bg-background text-foreground",
    children: [
      g.jsxs("header", {
        className:
          "flex h-10 shrink-0 items-center gap-2 border-b border-border bg-card px-3",
        children: [
          g.jsx("span", {
            className: "text-primary",
            children: g.jsx(ey, { size: 18 }),
          }),
          g.jsx("span", {
            className: "text-sm font-semibold tracking-tight",
            children: "CodeForge",
          }),
          g.jsx("span", {
            className: "hidden text-xs text-muted-foreground sm:inline",
            children: "browser IDE",
          }),
          g.jsxs("div", {
            className: "ml-auto flex items-center gap-1",
            children: [
              g.jsxs("button", {
                className:
                  "flex items-center gap-1.5 rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground hover:opacity-90",
                onClick: Xt,
                title: "Run project (Ctrl/Cmd + Enter)",
                "data-testid": "button-run",
                children: [
                  g.jsx($1, { className: "h-3 w-3 fill-current" }),
                  "Run",
                ],
              }),
              g.jsx("button", {
                className:
                  "rounded-md p-1.5 text-muted-foreground hover:text-foreground",
                onClick: () => k((V) => !V),
                title: "Toggle theme",
                "data-testid": "button-theme",
                children: E
                  ? g.jsx(W1, { className: "h-4 w-4" })
                  : g.jsx(L1, { className: "h-4 w-4" }),
              }),
            ],
          }),
        ],
      }),
      g.jsxs("div", {
        className: "relative flex min-h-0 flex-1",
        children: [
          g.jsxs("nav", {
            className:
              "flex w-11 shrink-0 flex-col items-center gap-1 border-r border-border bg-card py-2",
            children: [
              g.jsx(tl, {
                icon: N1,
                label: "Explorer",
                active: _ && N === "explorer",
                onClick: () => {
                  _ && N === "explorer" ? I(!1) : (D("explorer"), I(!0));
                },
                testId: "button-view-explorer",
              }),
              g.jsx(tl, {
                icon: H1,
                label: "Search",
                active: _ && N === "search",
                onClick: () => {
                  _ && N === "search" ? I(!1) : (D("search"), I(!0));
                },
                testId: "button-view-search",
              }),
              g.jsxs("div", {
                className: "mt-auto flex flex-col items-center gap-1",
                children: [
                  g.jsx(tl, {
                    icon: Ev,
                    label: "Console",
                    active: Y,
                    onClick: () => ne((V) => !V),
                    testId: "button-view-console",
                  }),
                  g.jsx(tl, {
                    icon: F1,
                    label: "Toggle sidebar",
                    active: !1,
                    onClick: () => I((V) => !V),
                    testId: "button-toggle-sidebar",
                  }),
                ],
              }),
            ],
          }),
          _ &&
            r &&
            g.jsx("div", {
              className: "absolute inset-0 z-20 bg-black/40",
              onClick: () => I(!1),
              "data-testid": "backdrop-sidebar",
            }),
          _ &&
            g.jsxs(g.Fragment, {
              children: [
                g.jsx("aside", {
                  className: r
                    ? "absolute inset-y-0 left-0 z-30 w-[78vw] max-w-[300px] overflow-hidden border-r border-border bg-sidebar shadow-xl"
                    : "shrink-0 overflow-hidden border-r border-border bg-sidebar",
                  style: r ? void 0 : { width: F },
                  children: s
                    ? g.jsx("div", {
                        className:
                          "flex h-full items-center justify-center text-muted-foreground",
                        children: g.jsx(bh, {
                          className: "h-4 w-4 animate-spin",
                        }),
                      })
                    : N === "explorer"
                      ? g.jsx(ik, {
                          files: o,
                          activePath: be?.path ?? null,
                          onOpen: Tt,
                          onCreate: (V, ee) => ji.mutate({ path: V, kind: ee }),
                          onRename: (V, ee) =>
                            So.mutate({ id: V.id, path: ee }),
                          onDelete: (V) => _i.mutate(V.id),
                        })
                      : g.jsx(sk, { files: Gt, onJump: Di }),
                }),
                !r &&
                  g.jsx("div", {
                    className:
                      "w-1 shrink-0 cursor-col-resize bg-transparent hover:bg-primary/40",
                    onPointerDown: (V) => Dn(V, "x", () => F, $, !1, 160, 420),
                  }),
              ],
            }),
          g.jsxs("main", {
            className: "flex min-w-0 flex-1 flex-col",
            children: [
              cn.length > 0
                ? g.jsxs(g.Fragment, {
                    children: [
                      g.jsx(gP, {
                        tabs: cn,
                        activeId: m,
                        onSelect: x,
                        onClose: _n,
                      }),
                      g.jsx("div", {
                        className: "min-h-0 flex-1",
                        children: be
                          ? g.jsx(yP, {
                              file: be,
                              value: y[be.id] ?? be.content ?? "",
                              dark: E,
                              onChange: (V) =>
                                w((ee) => ({ ...ee, [be.id]: V })),
                              onCursor: (V, ee) => R({ line: V, col: ee }),
                              onMount: Eo,
                              minimap: !r,
                            })
                          : g.jsx(tm, {
                              onQuickOpen: () => {
                                (ve(""), de(!0));
                              },
                            }),
                      }),
                    ],
                  })
                : g.jsx(tm, {
                    onQuickOpen: () => {
                      (ve(""), de(!0));
                    },
                  }),
              Y &&
                g.jsxs(g.Fragment, {
                  children: [
                    g.jsx("div", {
                      className:
                        "h-1 shrink-0 cursor-row-resize bg-transparent hover:bg-primary/40",
                      onPointerDown: (V) =>
                        Dn(V, "y", () => te, le, !0, 90, 400),
                    }),
                    g.jsx("div", {
                      style: { height: te },
                      className: "shrink-0",
                      children: g.jsx(SP, {
                        logs: X,
                        onClear: () => T([]),
                        onClose: () => ne(!1),
                      }),
                    }),
                  ],
                }),
            ],
          }),
          U &&
            (r
              ? g.jsx("div", {
                  className: "absolute inset-0 z-20 bg-background",
                  children: g.jsx(nm, {
                    srcdoc: Q?.srcdoc ?? null,
                    entry: Q?.entry ?? null,
                    runId: z,
                    onRefresh: Xt,
                    onClose: () => G(!1),
                  }),
                })
              : g.jsxs(g.Fragment, {
                  children: [
                    g.jsx("div", {
                      className:
                        "w-1 shrink-0 cursor-col-resize bg-transparent hover:bg-primary/40",
                      onPointerDown: (V) =>
                        Dn(V, "x", () => W, ce, !0, 260, 900),
                    }),
                    g.jsx("div", {
                      style: { width: W },
                      className: "shrink-0",
                      children: g.jsx(nm, {
                        srcdoc: Q?.srcdoc ?? null,
                        entry: Q?.entry ?? null,
                        runId: z,
                        onRefresh: Xt,
                        onClose: () => G(!1),
                      }),
                    }),
                  ],
                })),
          g.jsx(CP, {
            open: H,
            initialQuery: he,
            files: o,
            commands: Mi,
            onOpenFile: Tt,
            onDismiss: () => de(!1),
          }),
        ],
      }),
      g.jsxs("footer", {
        className:
          "flex h-6 shrink-0 items-center gap-3 border-t border-border bg-card px-3 text-[11px] text-muted-foreground",
        children: [
          g.jsxs("span", {
            className: "flex items-center gap-1",
            children: [g.jsx(D1, { className: "h-3 w-3" }), "main"],
          }),
          a === "local" &&
            g.jsxs("span", {
              className: "flex items-center gap-1",
              title: "No backend detected — files are stored in this browser",
              "data-testid": "status-storage",
              children: [g.jsx(A1, { className: "h-3 w-3" }), " Local"],
            }),
          g.jsx("span", {
            className: "flex items-center gap-1",
            "data-testid": "status-save",
            children: P
              ? g.jsxs(g.Fragment, {
                  children: [
                    g.jsx(bh, { className: "h-3 w-3 animate-spin" }),
                    " Saving…",
                  ],
                })
              : jn > 0
                ? `${jn} unsaved`
                : g.jsxs(g.Fragment, {
                    children: [
                      g.jsx(T1, { className: "h-3 w-3 text-green-500" }),
                      " Saved",
                    ],
                  }),
          }),
          g.jsxs("span", {
            className: "ml-auto hidden sm:inline",
            "data-testid": "status-cursor",
            children: ["Ln ", S.line, ", Col ", S.col],
          }),
          be &&
            g.jsx("span", {
              className: "hidden capitalize sm:inline",
              "data-testid": "status-language",
              children: dg(be.path),
            }),
          g.jsx("span", { children: "UTF-8" }),
        ],
      }),
    ],
  });
}
function tl({ icon: n, label: r, active: o, onClick: s, testId: a }) {
  return g.jsxs(hE, {
    children: [
      g.jsx(mE, {
        asChild: !0,
        children: g.jsx("button", {
          className: `relative flex h-9 w-9 items-center justify-center rounded-md ${o ? "text-foreground before:absolute before:left-[-6px] before:h-5 before:w-0.5 before:rounded-full before:bg-primary" : "text-muted-foreground hover:text-foreground"}`,
          onClick: s,
          "aria-label": r,
          "data-testid": a,
          children: g.jsx(n, { className: "h-[18px] w-[18px]" }),
        }),
      }),
      g.jsx(sg, { side: "right", children: r }),
    ],
  });
}
function kP() {
  return g.jsxs(b0, {
    children: [
      g.jsx(th, { path: "/", component: bP }),
      g.jsx(th, { component: xE }),
    ],
  });
}
function PP() {
  return g.jsx(ex, {
    client: so,
    children: g.jsxs(pE, {
      children: [
        g.jsx(OS, {}),
        g.jsx(pm, { hook: mm, children: g.jsx(kP, {}) }),
      ],
    }),
  });
}
window.location.hash || (window.location.hash = "#/");
o0.createRoot(document.getElementById("root")).render(g.jsx(PP, {}));
