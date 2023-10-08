!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var n = e();
    for (var r in n) ("object" == typeof exports ? exports : t)[r] = n[r];
  }
})(window, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 8))
    );
  })([
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "render", function () {
          return R;
        }),
        n.d(e, "hydrate", function () {
          return F;
        }),
        n.d(e, "createElement", function () {
          return p;
        }),
        n.d(e, "h", function () {
          return p;
        }),
        n.d(e, "Fragment", function () {
          return m;
        }),
        n.d(e, "createRef", function () {
          return y;
        }),
        n.d(e, "isValidElement", function () {
          return o;
        }),
        n.d(e, "Component", function () {
          return g;
        }),
        n.d(e, "cloneElement", function () {
          return U;
        }),
        n.d(e, "createContext", function () {
          return z;
        }),
        n.d(e, "toChildArray", function () {
          return E;
        }),
        n.d(e, "__u", function () {
          return j;
        }),
        n.d(e, "options", function () {
          return r;
        });
      var r,
        o,
        i,
        u,
        _,
        a,
        c,
        l = {},
        f = [],
        s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function d(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function h(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function p(t, e, n) {
        var r,
          o,
          i,
          u = arguments,
          _ = {};
        for (i in e)
          "key" == i ? (r = e[i]) : "ref" == i ? (o = e[i]) : (_[i] = e[i]);
        if (arguments.length > 3)
          for (n = [n], i = 3; i < arguments.length; i++) n.push(u[i]);
        if (
          (null != n && (_.children = n),
          "function" == typeof t && null != t.defaultProps)
        )
          for (i in t.defaultProps)
            void 0 === _[i] && (_[i] = t.defaultProps[i]);
        return v(t, _, r, o, null);
      }
      function v(t, e, n, o, i) {
        var u = {
          type: t,
          props: e,
          key: n,
          ref: o,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: null == i ? ++r.__v : i,
        };
        return null != r.vnode && r.vnode(u), u;
      }
      function y() {
        return { current: null };
      }
      function m(t) {
        return t.children;
      }
      function g(t, e) {
        (this.props = t), (this.context = e);
      }
      function b(t, e) {
        if (null == e) return t.__ ? b(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return "function" == typeof t.type ? b(t) : null;
      }
      function T(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break;
            }
          return T(t);
        }
      }
      function w(t) {
        ((!t.__d && (t.__d = !0) && i.push(t) && !x.__r++) ||
          _ !== r.debounceRendering) &&
          ((_ = r.debounceRendering) || u)(x);
      }
      function x() {
        for (var t; (x.__r = i.length); )
          (t = i.sort(function (t, e) {
            return t.__v.__b - e.__v.__b;
          })),
            (i = []),
            t.some(function (t) {
              var e, n, r, o, i, u, _;
              t.__d &&
                ((u = (i = (e = t).__v).__e),
                (_ = e.__P) &&
                  ((n = []),
                  ((r = d({}, i)).__v = i.__v + 1),
                  (o = S(
                    _,
                    i,
                    r,
                    e.__n,
                    void 0 !== _.ownerSVGElement,
                    null != i.__h ? [u] : null,
                    n,
                    null == u ? b(i) : u,
                    i.__h
                  )),
                  C(n, i),
                  o != u && T(i)));
            });
      }
      function O(t, e, n, r, o, i, u, _, a, c) {
        var s,
          d,
          p,
          y,
          g,
          T,
          w,
          x = (r && r.__k) || f,
          O = x.length;
        for (
          a == l && (a = null != u ? u[0] : O ? b(r, 0) : null),
            n.__k = [],
            s = 0;
          s < e.length;
          s++
        )
          if (
            null !=
            (y = n.__k[s] =
              null == (y = e[s]) || "boolean" == typeof y
                ? null
                : "string" == typeof y || "number" == typeof y
                ? v(null, y, null, null, y)
                : Array.isArray(y)
                ? v(m, { children: y }, null, null, null)
                : null != y.__e || null != y.__c
                ? v(y.type, y.props, y.key, null, y.__v)
                : y)
          ) {
            if (
              ((y.__ = n),
              (y.__b = n.__b + 1),
              null === (p = x[s]) || (p && y.key == p.key && y.type === p.type))
            )
              x[s] = void 0;
            else
              for (d = 0; d < O; d++) {
                if ((p = x[d]) && y.key == p.key && y.type === p.type) {
                  x[d] = void 0;
                  break;
                }
                p = null;
              }
            (g = S(t, y, (p = p || l), o, i, u, _, a, c)),
              (d = y.ref) &&
                p.ref != d &&
                (w || (w = []),
                p.ref && w.push(p.ref, null, y),
                w.push(d, y.__c || g, y)),
              null != g
                ? (null == T && (T = g),
                  (a = A(t, y, p, x, u, g, a)),
                  c || "option" != n.type
                    ? "function" == typeof n.type && (n.__d = a)
                    : (t.value = ""))
                : a && p.__e == a && a.parentNode != t && (a = b(p));
          }
        if (((n.__e = T), null != u && "function" != typeof n.type))
          for (s = u.length; s--; ) null != u[s] && h(u[s]);
        for (s = O; s--; ) null != x[s] && j(x[s], x[s]);
        if (w) for (s = 0; s < w.length; s++) k(w[s], w[++s], w[++s]);
      }
      function E(t, e) {
        return (
          (e = e || []),
          null == t ||
            "boolean" == typeof t ||
            (Array.isArray(t)
              ? t.some(function (t) {
                  E(t, e);
                })
              : e.push(t)),
          e
        );
      }
      function A(t, e, n, r, o, i, u) {
        var _, a, c;
        if (void 0 !== e.__d) (_ = e.__d), (e.__d = void 0);
        else if (o == n || i != u || null == i.parentNode)
          t: if (null == u || u.parentNode !== t) t.appendChild(i), (_ = null);
          else {
            for (a = u, c = 0; (a = a.nextSibling) && c < r.length; c += 2)
              if (a == i) break t;
            t.insertBefore(i, u), (_ = u);
          }
        return void 0 !== _ ? _ : i.nextSibling;
      }
      function P(t, e, n) {
        "-" === e[0]
          ? t.setProperty(e, n)
          : (t[e] =
              null == n
                ? ""
                : "number" != typeof n || s.test(e)
                ? n
                : n + "px");
      }
      function M(t, e, n, r, o) {
        var i, u, _;
        if ((o && "className" == e && (e = "class"), "style" === e))
          if ("string" == typeof n) t.style.cssText = n;
          else {
            if (("string" == typeof r && (t.style.cssText = r = ""), r))
              for (e in r) (n && e in n) || P(t.style, e, "");
            if (n) for (e in n) (r && n[e] === r[e]) || P(t.style, e, n[e]);
          }
        else
          "o" === e[0] && "n" === e[1]
            ? ((i = e !== (e = e.replace(/Capture$/, ""))),
              (u = e.toLowerCase()) in t && (e = u),
              (e = e.slice(2)),
              t.l || (t.l = {}),
              (t.l[e + i] = n),
              (_ = i ? I : D),
              n
                ? r || t.addEventListener(e, _, i)
                : t.removeEventListener(e, _, i))
            : "list" !== e &&
              "tagName" !== e &&
              "form" !== e &&
              "type" !== e &&
              "size" !== e &&
              "download" !== e &&
              "href" !== e &&
              !o &&
              e in t
            ? (t[e] = null == n ? "" : n)
            : "function" != typeof n &&
              "dangerouslySetInnerHTML" !== e &&
              (e !== (e = e.replace(/xlink:?/, ""))
                ? null == n || !1 === n
                  ? t.removeAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      e.toLowerCase()
                    )
                  : t.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      e.toLowerCase(),
                      n
                    )
                : null == n || (!1 === n && !/^ar/.test(e))
                ? t.removeAttribute(e)
                : t.setAttribute(e, n));
      }
      function D(t) {
        this.l[t.type + !1](r.event ? r.event(t) : t);
      }
      function I(t) {
        this.l[t.type + !0](r.event ? r.event(t) : t);
      }
      function H(t, e, n) {
        var r, o;
        for (r = 0; r < t.__k.length; r++)
          (o = t.__k[r]) &&
            ((o.__ = t),
            o.__e &&
              ("function" == typeof o.type && o.__k.length > 1 && H(o, e, n),
              (e = A(n, o, o, t.__k, null, o.__e, e)),
              "function" == typeof t.type && (t.__d = e)));
      }
      function S(t, e, n, o, i, u, _, a, c) {
        var l,
          f,
          s,
          h,
          p,
          v,
          y,
          b,
          T,
          w,
          x,
          E = e.type;
        if (void 0 !== e.constructor) return null;
        null != n.__h &&
          ((c = n.__h), (a = e.__e = n.__e), (e.__h = null), (u = [a])),
          (l = r.__b) && l(e);
        try {
          t: if ("function" == typeof E) {
            if (
              ((b = e.props),
              (T = (l = E.contextType) && o[l.__c]),
              (w = l ? (T ? T.props.value : l.__) : o),
              n.__c
                ? (y = (f = e.__c = n.__c).__ = f.__E)
                : ("prototype" in E && E.prototype.render
                    ? (e.__c = f = new E(b, w))
                    : ((e.__c = f = new g(b, w)),
                      (f.constructor = E),
                      (f.render = L)),
                  T && T.sub(f),
                  (f.props = b),
                  f.state || (f.state = {}),
                  (f.context = w),
                  (f.__n = o),
                  (s = f.__d = !0),
                  (f.__h = [])),
              null == f.__s && (f.__s = f.state),
              null != E.getDerivedStateFromProps &&
                (f.__s == f.state && (f.__s = d({}, f.__s)),
                d(f.__s, E.getDerivedStateFromProps(b, f.__s))),
              (h = f.props),
              (p = f.state),
              s)
            )
              null == E.getDerivedStateFromProps &&
                null != f.componentWillMount &&
                f.componentWillMount(),
                null != f.componentDidMount && f.__h.push(f.componentDidMount);
            else {
              if (
                (null == E.getDerivedStateFromProps &&
                  b !== h &&
                  null != f.componentWillReceiveProps &&
                  f.componentWillReceiveProps(b, w),
                (!f.__e &&
                  null != f.shouldComponentUpdate &&
                  !1 === f.shouldComponentUpdate(b, f.__s, w)) ||
                  e.__v === n.__v)
              ) {
                (f.props = b),
                  (f.state = f.__s),
                  e.__v !== n.__v && (f.__d = !1),
                  (f.__v = e),
                  (e.__e = n.__e),
                  (e.__k = n.__k),
                  f.__h.length && _.push(f),
                  H(e, a, t);
                break t;
              }
              null != f.componentWillUpdate &&
                f.componentWillUpdate(b, f.__s, w),
                null != f.componentDidUpdate &&
                  f.__h.push(function () {
                    f.componentDidUpdate(h, p, v);
                  });
            }
            (f.context = w),
              (f.props = b),
              (f.state = f.__s),
              (l = r.__r) && l(e),
              (f.__d = !1),
              (f.__v = e),
              (f.__P = t),
              (l = f.render(f.props, f.state, f.context)),
              (f.state = f.__s),
              null != f.getChildContext &&
                (o = d(d({}, o), f.getChildContext())),
              s ||
                null == f.getSnapshotBeforeUpdate ||
                (v = f.getSnapshotBeforeUpdate(h, p)),
              (x =
                null != l && l.type == m && null == l.key
                  ? l.props.children
                  : l),
              O(t, Array.isArray(x) ? x : [x], e, n, o, i, u, _, a, c),
              (f.base = e.__e),
              (e.__h = null),
              f.__h.length && _.push(f),
              y && (f.__E = f.__ = null),
              (f.__e = !1);
          } else
            null == u && e.__v === n.__v
              ? ((e.__k = n.__k), (e.__e = n.__e))
              : (e.__e = N(n.__e, e, n, o, i, u, _, c));
          (l = r.diffed) && l(e);
        } catch (t) {
          (e.__v = null),
            (c || null != u) &&
              ((e.__e = a), (e.__h = !!c), (u[u.indexOf(a)] = null)),
            r.__e(t, e, n);
        }
        return e.__e;
      }
      function C(t, e) {
        r.__c && r.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              r.__e(t, e.__v);
            }
          });
      }
      function N(t, e, n, r, o, i, u, _) {
        var a,
          c,
          s,
          d,
          h,
          p = n.props,
          v = e.props;
        if (((o = "svg" === e.type || o), null != i))
          for (a = 0; a < i.length; a++)
            if (
              null != (c = i[a]) &&
              ((null === e.type ? 3 === c.nodeType : c.localName === e.type) ||
                t == c)
            ) {
              (t = c), (i[a] = null);
              break;
            }
        if (null == t) {
          if (null === e.type) return document.createTextNode(v);
          (t = o
            ? document.createElementNS("http://www.w3.org/2000/svg", e.type)
            : document.createElement(e.type, v.is && { is: v.is })),
            (i = null),
            (_ = !1);
        }
        if (null === e.type) p === v || (_ && t.data === v) || (t.data = v);
        else {
          if (
            (null != i && (i = f.slice.call(t.childNodes)),
            (s = (p = n.props || l).dangerouslySetInnerHTML),
            (d = v.dangerouslySetInnerHTML),
            !_)
          ) {
            if (null != i)
              for (p = {}, h = 0; h < t.attributes.length; h++)
                p[t.attributes[h].name] = t.attributes[h].value;
            (d || s) &&
              ((d &&
                ((s && d.__html == s.__html) || d.__html === t.innerHTML)) ||
                (t.innerHTML = (d && d.__html) || ""));
          }
          (function (t, e, n, r, o) {
            var i;
            for (i in n)
              "children" === i ||
                "key" === i ||
                i in e ||
                M(t, i, null, n[i], r);
            for (i in e)
              (o && "function" != typeof e[i]) ||
                "children" === i ||
                "key" === i ||
                "value" === i ||
                "checked" === i ||
                n[i] === e[i] ||
                M(t, i, e[i], n[i], r);
          })(t, v, p, o, _),
            d
              ? (e.__k = [])
              : ((a = e.props.children),
                O(
                  t,
                  Array.isArray(a) ? a : [a],
                  e,
                  n,
                  r,
                  "foreignObject" !== e.type && o,
                  i,
                  u,
                  l,
                  _
                )),
            _ ||
              ("value" in v &&
                void 0 !== (a = v.value) &&
                (a !== t.value || ("progress" === e.type && !a)) &&
                M(t, "value", a, p.value, !1),
              "checked" in v &&
                void 0 !== (a = v.checked) &&
                a !== t.checked &&
                M(t, "checked", a, p.checked, !1));
        }
        return t;
      }
      function k(t, e, n) {
        try {
          "function" == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          r.__e(t, n);
        }
      }
      function j(t, e, n) {
        var o, i, u;
        if (
          (r.unmount && r.unmount(t),
          (o = t.ref) && ((o.current && o.current !== t.__e) || k(o, null, e)),
          n || "function" == typeof t.type || (n = null != (i = t.__e)),
          (t.__e = t.__d = void 0),
          null != (o = t.__c))
        ) {
          if (o.componentWillUnmount)
            try {
              o.componentWillUnmount();
            } catch (t) {
              r.__e(t, e);
            }
          o.base = o.__P = null;
        }
        if ((o = t.__k)) for (u = 0; u < o.length; u++) o[u] && j(o[u], e, n);
        null != i && h(i);
      }
      function L(t, e, n) {
        return this.constructor(t, n);
      }
      function R(t, e, n) {
        var o, i, u;
        r.__ && r.__(t, e),
          (i = (o = n === a) ? null : (n && n.__k) || e.__k),
          (t = p(m, null, [t])),
          (u = []),
          S(
            e,
            ((o ? e : n || e).__k = t),
            i || l,
            l,
            void 0 !== e.ownerSVGElement,
            n && !o
              ? [n]
              : i
              ? null
              : e.childNodes.length
              ? f.slice.call(e.childNodes)
              : null,
            u,
            n || l,
            o
          ),
          C(u, t);
      }
      function F(t, e) {
        R(t, e, a);
      }
      function U(t, e, n) {
        var r,
          o,
          i,
          u = arguments,
          _ = d({}, t.props);
        for (i in e)
          "key" == i ? (r = e[i]) : "ref" == i ? (o = e[i]) : (_[i] = e[i]);
        if (arguments.length > 3)
          for (n = [n], i = 3; i < arguments.length; i++) n.push(u[i]);
        return (
          null != n && (_.children = n),
          v(t.type, _, r || t.key, o || t.ref, null)
        );
      }
      function z(t, e) {
        var n = {
          __c: (e = "__cC" + c++),
          __: t,
          Consumer: function (t, e) {
            return t.children(e);
          },
          Provider: function (t, n, r) {
            return (
              this.getChildContext ||
                ((n = []),
                ((r = {})[e] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.shouldComponentUpdate = function (t) {
                  this.props.value !== t.value && n.some(w);
                }),
                (this.sub = function (t) {
                  n.push(t);
                  var e = t.componentWillUnmount;
                  t.componentWillUnmount = function () {
                    n.splice(n.indexOf(t), 1), e && e.call(t);
                  };
                })),
              t.children
            );
          },
        };
        return (n.Provider.__ = n.Consumer.contextType = n);
      }
      (r = {
        __e: function (t, e) {
          for (var n, r, o, i = e.__h; (e = e.__); )
            if ((n = e.__c) && !n.__)
              try {
                if (
                  ((r = n.constructor) &&
                    null != r.getDerivedStateFromError &&
                    (n.setState(r.getDerivedStateFromError(t)), (o = n.__d)),
                  null != n.componentDidCatch &&
                    (n.componentDidCatch(t), (o = n.__d)),
                  o)
                )
                  return (e.__h = i), (n.__E = n);
              } catch (e) {
                t = e;
              }
          throw t;
        },
        __v: 0,
      }),
        (o = function (t) {
          return null != t && void 0 === t.constructor;
        }),
        (g.prototype.setState = function (t, e) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = d({}, this.state))),
            "function" == typeof t && (t = t(d({}, n), this.props)),
            t && d(n, t),
            null != t && this.__v && (e && this.__h.push(e), w(this));
        }),
        (g.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), w(this));
        }),
        (g.prototype.render = m),
        (i = []),
        (u =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (x.__r = 0),
        (a = l),
        (c = 0);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DIRECTION = e.HEAD_DEFAULT_SIZE = void 0),
        (e.HEAD_DEFAULT_SIZE = 10),
        (e.DIRECTION = {
          TOP_LEFT: "top-left",
          TOP: "top",
          TOP_RIGHT: "top-right",
          RIGHT: "right",
          BOTTOM_LEFT: "bottom-left",
          BOTTOM: "bottom",
          BOTTOM_RIGHT: "bottom-right",
          LEFT: "left",
        });
    },
    function (t, e, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        o =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(e, n) ||
                r(e, t, n);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HEAD = void 0),
        o(n(14), e);
      var i = n(7);
      Object.defineProperty(e, "HEAD", {
        enumerable: !0,
        get: function () {
          return i.default;
        },
      });
    },
    function (t, e, n) {
      "use strict";
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Arrow = void 0);
      var o = n(0),
        i = n(10),
        u = n(11),
        _ = n(12),
        a = n(5),
        c = n(2);
      e.Arrow = function (t) {
        var e = t.className,
          n = t.head,
          a = t.from,
          l = t.to,
          f = t.forwardRef,
          s = t.updateDelay,
          d = i.useState(function () {
            return _.default(a, l, n);
          }),
          h = d[0],
          p = d[1];
        i.useEffect(
          function () {
            return u.default(a, l, {
              update: function () {
                return p(_.default(a, l, n));
              },
              updateDelay: s,
            }).clear;
          },
          [a, n, l, s]
        );
        return o.h(
          "svg",
          {
            className: e,
            style: { top: h.offset.y, left: h.offset.x, position: "fixed" },
            width: h.size.width,
            height: h.size.height,
            ref: f,
          },
          o.h("path", { className: e + "__path", d: h.pathCommands }),
          h.heads.map(function (t) {
            if (!t.node) return null;
            var n = {
              className: e + "__head " + e + "__head--" + t.id,
              transform: c.headTransformCSS(t),
            };
            if ("string" == typeof t.node)
              return o.h(
                "g",
                r({ key: t.id }, n, {
                  dangerouslySetInnerHTML: { __html: t.node },
                })
              );
            var i = t.node;
            return i.tagName
              ? o.h(
                  "g",
                  r({}, n, { dangerouslySetInnerHTML: { __html: i.outerHTML } })
                )
              : o.h("g", r({ key: t.id }, n), t.node);
          })
        );
      };
      e.default = function (t) {
        var n = t.className,
          r = void 0 === n ? "arrow" : n,
          i = t.head,
          u = void 0 === i ? c.HEAD.THIN : i,
          _ = t.from,
          l = t.to,
          f = t.updateDelay,
          s = o.createRef(),
          d = document.createDocumentFragment();
        if (!_)
          throw new Error("undefined from, try to pass it as from={() => ...}");
        if (!l)
          throw new Error("undefined to, try to pass it as to={() => ...}");
        o.render(
          o.h(e.Arrow, {
            className: r,
            head: u,
            from: a.castToAnchor(_),
            to: a.castToAnchor(l),
            forwardRef: s,
            updateDelay: f,
          }),
          d
        );
        return {
          node: d,
          clear: function () {
            var t = s.current,
              e = t.parentNode;
            e && e.removeChild(t);
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.default = function (t) {
        var e = "function" == typeof t ? t() : t;
        return document.body.contains(e) ? e : null;
      };
    },
    function (t, e, n) {
      "use strict";
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.autoAnchorWithPoint =
          e.createAnchorWithPoint =
          e.castToAnchor =
            void 0);
      var o = n(4),
        i = n(1);
      e.castToAnchor = function (t) {
        return "function" == typeof t || t instanceof HTMLElement
          ? { node: t }
          : t;
      };
      e.createAnchorWithPoint = function (t) {
        var n = e.castToAnchor(t),
          u = (function (t) {
            var e = o.default(t.node);
            if (!e)
              throw new Error("point is null, check if 'from'/'to' exists");
            var n = e.getBoundingClientRect(),
              r = n.x || n.left,
              u = n.y || n.top;
            switch (t.direction) {
              case i.DIRECTION.TOP_LEFT:
                return { x: r, y: u };
              case i.DIRECTION.TOP:
                return { x: r + n.width / 2, y: u };
              case i.DIRECTION.TOP_RIGHT:
                return { x: r + n.width, y: u };
              case i.DIRECTION.RIGHT:
                return { x: r + n.width, y: u + n.height / 2 };
              case i.DIRECTION.BOTTOM_LEFT:
                return { x: r, y: u + n.height };
              case i.DIRECTION.BOTTOM:
                return { x: r + n.width / 2, y: u + n.height };
              case i.DIRECTION.BOTTOM_RIGHT:
                return { x: r + n.width, y: u + n.height };
              case i.DIRECTION.LEFT:
                return { x: r, y: u + n.height / 2 };
              default:
                return { x: r + n.width / 2, y: u + n.height / 2 };
            }
          })(n);
        return r(r({}, n), u);
      };
      e.autoAnchorWithPoint = function (t, n) {
        if (t.translation && t.direction) return t;
        var o = r({}, t),
          u = function (t, e) {
            !(function (t) {
              o.direction || (o.direction = t);
            })(t),
              (function (t) {
                o.translation || (o.translation = t);
              })(e);
          };
        return (
          Math.abs(t.x - n.x) > Math.abs(t.y - n.y)
            ? t.x < n.x
              ? u(i.DIRECTION.RIGHT, [0.3, 0])
              : u(i.DIRECTION.LEFT, [-0.3, 0])
            : t.y < n.y
            ? u(i.DIRECTION.BOTTOM, [0, 0.3])
            : u(i.DIRECTION.TOP, [0, -0.3]),
          e.createAnchorWithPoint(o)
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.pointSubtraction = e.pointBezier = e.pointToArray = void 0);
      e.pointToArray = function (t) {
        return [t.x, t.y];
      };
      e.pointBezier = function (t, e) {
        return {
          x: t.x + e.width * t.translation[0],
          y: t.y + e.height * t.translation[1],
        };
      };
      e.pointSubtraction = function (t, e) {
        return r(r({}, t), { x: t.x - e.x, y: t.y - e.y });
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(15),
        o = n(16),
        i = n(17),
        u = n(18),
        _ = n(19),
        a = n(20),
        c = n(21),
        l = n(22),
        f = {
          diamond: r.default,
          DIAMOND: r.default,
          dot: o.default,
          DOT: o.default,
          image: i.default,
          IMAGE: i.default,
          none: a.default,
          NONE: a.default,
          inv: u.default,
          INV: u.default,
          normal: _.default,
          NORMAL: _.default,
          thin: c.default,
          THIN: c.default,
          vee: l.default,
          VEE: l.default,
        };
      e.default = f;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HEAD = e.DIRECTION = void 0);
      var r = n(9),
        o = n(3);
      r.assignArrowCreate(window), (e.default = o.default);
      var i = n(1);
      Object.defineProperty(e, "DIRECTION", {
        enumerable: !0,
        get: function () {
          return i.DIRECTION;
        },
      });
      var u = n(2);
      Object.defineProperty(e, "HEAD", {
        enumerable: !0,
        get: function () {
          return u.HEAD;
        },
      });
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.assignArrowCreate = void 0);
      var r = n(3);
      e.assignArrowCreate = function (t) {
        t && (t.arrowCreate = r.default);
      };
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "useState", function () {
          return p;
        }),
        n.d(e, "useReducer", function () {
          return v;
        }),
        n.d(e, "useEffect", function () {
          return y;
        }),
        n.d(e, "useLayoutEffect", function () {
          return m;
        }),
        n.d(e, "useRef", function () {
          return g;
        }),
        n.d(e, "useImperativeHandle", function () {
          return b;
        }),
        n.d(e, "useMemo", function () {
          return T;
        }),
        n.d(e, "useCallback", function () {
          return w;
        }),
        n.d(e, "useContext", function () {
          return x;
        }),
        n.d(e, "useDebugValue", function () {
          return O;
        }),
        n.d(e, "useErrorBoundary", function () {
          return E;
        });
      var r,
        o,
        i,
        u = n(0),
        _ = 0,
        a = [],
        c = u.options.__b,
        l = u.options.__r,
        f = u.options.diffed,
        s = u.options.__c,
        d = u.options.unmount;
      function h(t, e) {
        u.options.__h && u.options.__h(o, t, _ || e), (_ = 0);
        var n = o.__H || (o.__H = { __: [], __h: [] });
        return t >= n.__.length && n.__.push({}), n.__[t];
      }
      function p(t) {
        return (_ = 1), v(H, t);
      }
      function v(t, e, n) {
        var i = h(r++, 2);
        return (
          (i.t = t),
          i.__c ||
            ((i.__ = [
              n ? n(e) : H(void 0, e),
              function (t) {
                var e = i.t(i.__[0], t);
                i.__[0] !== e && ((i.__ = [e, i.__[1]]), i.__c.setState({}));
              },
            ]),
            (i.__c = o)),
          i.__
        );
      }
      function y(t, e) {
        var n = h(r++, 3);
        !u.options.__s &&
          I(n.__H, e) &&
          ((n.__ = t), (n.__H = e), o.__H.__h.push(n));
      }
      function m(t, e) {
        var n = h(r++, 4);
        !u.options.__s &&
          I(n.__H, e) &&
          ((n.__ = t), (n.__H = e), o.__h.push(n));
      }
      function g(t) {
        return (
          (_ = 5),
          T(function () {
            return { current: t };
          }, [])
        );
      }
      function b(t, e, n) {
        (_ = 6),
          m(
            function () {
              "function" == typeof t ? t(e()) : t && (t.current = e());
            },
            null == n ? n : n.concat(t)
          );
      }
      function T(t, e) {
        var n = h(r++, 7);
        return I(n.__H, e) && ((n.__ = t()), (n.__H = e), (n.__h = t)), n.__;
      }
      function w(t, e) {
        return (
          (_ = 8),
          T(function () {
            return t;
          }, e)
        );
      }
      function x(t) {
        var e = o.context[t.__c],
          n = h(r++, 9);
        return (
          (n.__c = t),
          e ? (null == n.__ && ((n.__ = !0), e.sub(o)), e.props.value) : t.__
        );
      }
      function O(t, e) {
        u.options.useDebugValue && u.options.useDebugValue(e ? e(t) : t);
      }
      function E(t) {
        var e = h(r++, 10),
          n = p();
        return (
          (e.__ = t),
          o.componentDidCatch ||
            (o.componentDidCatch = function (t) {
              e.__ && e.__(t), n[1](t);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function A() {
        a.forEach(function (t) {
          if (t.__P)
            try {
              t.__H.__h.forEach(M), t.__H.__h.forEach(D), (t.__H.__h = []);
            } catch (e) {
              (t.__H.__h = []), u.options.__e(e, t.__v);
            }
        }),
          (a = []);
      }
      (u.options.__b = function (t) {
        (o = null), c && c(t);
      }),
        (u.options.__r = function (t) {
          l && l(t), (r = 0);
          var e = (o = t.__c).__H;
          e && (e.__h.forEach(M), e.__h.forEach(D), (e.__h = []));
        }),
        (u.options.diffed = function (t) {
          f && f(t);
          var e = t.__c;
          e &&
            e.__H &&
            e.__H.__h.length &&
            ((1 !== a.push(e) && i === u.options.requestAnimationFrame) ||
              (
                (i = u.options.requestAnimationFrame) ||
                function (t) {
                  var e,
                    n = function () {
                      clearTimeout(r),
                        P && cancelAnimationFrame(e),
                        setTimeout(t);
                    },
                    r = setTimeout(n, 100);
                  P && (e = requestAnimationFrame(n));
                }
              )(A)),
            (o = void 0);
        }),
        (u.options.__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(M),
                (t.__h = t.__h.filter(function (t) {
                  return !t.__ || D(t);
                }));
            } catch (n) {
              e.some(function (t) {
                t.__h && (t.__h = []);
              }),
                (e = []),
                u.options.__e(n, t.__v);
            }
          }),
            s && s(t, e);
        }),
        (u.options.unmount = function (t) {
          d && d(t);
          var e = t.__c;
          if (e && e.__H)
            try {
              e.__H.__.forEach(M);
            } catch (t) {
              u.options.__e(t, e.__v);
            }
        });
      var P = "function" == typeof requestAnimationFrame;
      function M(t) {
        var e = o;
        "function" == typeof t.__c && t.__c(), (o = e);
      }
      function D(t) {
        var e = o;
        (t.__c = t.__()), (o = e);
      }
      function I(t, e) {
        return (
          !t ||
          t.length !== e.length ||
          e.some(function (e, n) {
            return e !== t[n];
          })
        );
      }
      function H(t, e) {
        return "function" == typeof e ? e(t) : e;
      }
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(4),
        o = ["x", "y", "width", "height"],
        i = { from: null, to: null },
        u = function (t, e) {
          var n = e.getBoundingClientRect();
          return t
            ? {
                equal: !o.some(function (e) {
                  return t[e] !== n[e];
                }),
                rect: n,
              }
            : { equal: !1, rect: n };
        };
      e.default = function (t, e, n) {
        var o,
          _ = n.updateDelay,
          a = void 0 === _ ? 0 : _,
          c = n.update,
          l = i,
          f = function () {
            var n = r.default(t.node),
              o = r.default(e.node);
            if (n && o) {
              var _ = (function (t, e, n) {
                var r = u(t.from, e),
                  o = u(t.to, n);
                return r.equal && o.equal ? null : { from: r.rect, to: o.rect };
              })(l, n, o);
              _ && (l !== i && c(), (l = _));
            }
          };
        if (a) {
          var s = setInterval(f, a);
          return {
            clear: function () {
              return clearInterval(s);
            },
          };
        }
        var d = function () {
          f(), (o = requestAnimationFrame(d));
        };
        return (
          (o = requestAnimationFrame(d)),
          {
            clear: function () {
              return cancelAnimationFrame(o);
            },
          }
        );
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(5),
        o = n(13),
        i = n(2),
        u = n(23);
      e.default = function (t, e, n) {
        var _ = i.prepareHeads(n),
          a = i.calculateHeadsPadding(_),
          c = r.createAnchorWithPoint(t),
          l = r.createAnchorWithPoint(e),
          f = o.produceContainer(
            r.autoAnchorWithPoint(c, l),
            r.autoAnchorWithPoint(l, c),
            a
          ),
          s = u.pathListBezier(f, a),
          d = i.assignPathToHeads(_, s);
        return {
          pathCommands: u.convertPathToSVG(s),
          size: (function (t, e) {
            var n = u.pathReducer(t, function (t, e) {
              return { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) };
            });
            return { width: n.x + 2 * e.width, height: n.y + 2 * e.height };
          })(s, a),
          offset: (function (t, e, n) {
            var r = function (e) {
              return Math.min(t[0][e] - n.width, t[3][e] - n.height);
            };
            return {
              x: e.position.x - r("x") - n.width,
              y: e.position.y - r("y") - n.height,
            };
          })(s, f, a),
          heads: d,
        };
      };
    },
    function (t, e, n) {
      "use strict";
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.produceContainer = void 0);
      var o = n(6),
        i = function (t, e, n) {
          return o.pointSubtraction(
            r(r({}, t), { x: t.x - e.x, y: t.y - e.y }),
            { x: 2 * -n.width, y: 2 * -n.height }
          );
        };
      e.produceContainer = function (t, e, n) {
        var r = { x: Math.min(t.x, e.x), y: Math.min(t.y, e.y) },
          o = i(t, r, n),
          u = i(e, r, n);
        return {
          position: r,
          relativeFrom: o,
          relativeTo: u,
          size: (function (t, e) {
            return { width: Math.max(t.x, e.x), height: Math.max(t.y, e.y) };
          })(o, u),
        };
      };
    },
    function (t, e, n) {
      "use strict";
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.headTransformCSS =
          e.assignPathToHeads =
          e.calculateHeadsPadding =
          e.prepareHeads =
          e.prepareHeadNode =
            void 0);
      var o = n(7),
        i = function (t) {
          return Math.round(1e3 * t) / 1e3;
        },
        u = function (t) {
          if ("string" == typeof t) {
            var e = t;
            return o.default[e];
          }
          if ("object" == typeof t) {
            if ("function" == typeof t.func) return t.func;
            if ("string" == typeof t.func) return u(t.func);
          }
          if ("function" == typeof t) return t;
          throw new Error("head type is invalid");
        };
      e.prepareHeadNode = function (t) {
        var e = u(t)(t);
        if (!e || !e.width || !e.height)
          throw new Error(
            "head function should return { node, width, height }"
          );
        return (
          "object" == typeof t && Object.assign(e, t),
          e.distance || (e.distance = 1),
          e
        );
      };
      e.prepareHeads = function (t) {
        return (Array.isArray(t) ? t : [t]).map(e.prepareHeadNode);
      };
      e.calculateHeadsPadding = function (t) {
        return t.reduce(
          function (t, e) {
            var n = { width: t.width, height: t.height };
            return (
              e.width > n.width && (n.width = e.width),
              e.height > n.height && (n.height = e.height),
              n
            );
          },
          { width: 0, height: 0 }
        );
      };
      e.assignPathToHeads = function (t, e) {
        return t.map(function (t, n) {
          return r(
            r(
              r({ id: n }, t),
              (function (t, e) {
                var n = t.distance,
                  r = function (t) {
                    return (
                      Math.pow(1 - n, 2) * (e[1][t] - e[0][t]) +
                      2 * n * (1 - n) * (e[2][t] - e[1][t]) +
                      n * n * (e[3][t] - e[2][t])
                    );
                  },
                  o = r("x"),
                  u = r("y"),
                  _ = i(-Math.atan2(o, u) + 0.5 * Math.PI);
                return { degree: i(_ * (180 / Math.PI)), radius: _ };
              })(t, e)
            ),
            (function (t, e) {
              var n = t.distance,
                r = function (t) {
                  return (
                    Math.pow(1 - n, 3) * e[0][t] +
                    3 * n * Math.pow(1 - n, 2) * e[1][t] +
                    3 * n * n * (1 - n) * e[2][t] +
                    n * n * n * e[3][t]
                  );
                };
              return { x: r("x"), y: r("y") };
            })(t, e)
          );
        });
      };
      e.headTransformCSS = function (t) {
        return (
          "rotate(" +
          t.degree +
          ", " +
          t.x +
          ", " +
          t.y +
          "), translate(" +
          t.x +
          ", " +
          t.y +
          ")"
        );
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(0),
        o = n(1);
      e.default = function (t) {
        var e = t.size,
          n = void 0 === e ? o.HEAD_DEFAULT_SIZE : e;
        return {
          node: r.h(
            "g",
            { transform: "translate(-" + n + ", 0)" },
            r.h("path", {
              d: "M" + -n + " 0 L0 " + -n + " L" + n + " 0 L0 " + n + " Z",
            })
          ),
          width: n,
          height: n,
        };
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(0),
        o = n(1);
      e.default = function (t) {
        var e = t.size,
          n = void 0 === e ? o.HEAD_DEFAULT_SIZE : e;
        return {
          node: r.h(
            "g",
            { transform: "translate(-" + n + ", 0)" },
            r.h("circle", { cx: 0, cy: 0, r: n })
          ),
          width: n,
          height: n,
        };
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.default = function (t) {
        var e = t.src,
          n = t.width,
          r = t.height;
        if (!e || !n || !r)
          throw new Error("image requires src, height, width");
        var o = document.createElementNS("http://www.w3.org/2000/svg", "image");
        return (
          o.setAttributeNS(null, "width", String(n)),
          o.setAttributeNS(null, "height", String(r)),
          o.setAttributeNS(null, "x", String(-n)),
          o.setAttributeNS(null, "y", String(-r / 2)),
          o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e),
          { node: o, width: n, height: r }
        );
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(0),
        o = n(1);
      e.default = function (t) {
        var e = t.size,
          n = void 0 === e ? o.HEAD_DEFAULT_SIZE : e;
        return {
          node: r.h("path", {
            d: "M" + -n + " 0 L0 " + -n + " L0 " + n + " Z",
          }),
          width: n,
          height: n,
        };
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(0),
        o = n(1);
      e.default = function (t) {
        var e = t.size,
          n = void 0 === e ? o.HEAD_DEFAULT_SIZE : e;
        return {
          node: r.h("path", {
            d: "M" + -n + " " + -n + " L0 0 L" + -n + " " + n + " Z",
          }),
          width: n,
          height: n,
        };
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(1);
      e.default = function () {
        return {
          node: null,
          width: r.HEAD_DEFAULT_SIZE,
          height: r.HEAD_DEFAULT_SIZE,
        };
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(0),
        o = n(1);
      e.default = function (t) {
        var e = t.size,
          n = void 0 === e ? o.HEAD_DEFAULT_SIZE : e;
        return {
          node: r.h(
            "g",
            null,
            r.h("line", { x1: -n, y1: -n, x2: 0, y2: 0 }),
            r.h("line", { x1: 0, y1: 0, x2: -n, y2: n })
          ),
          width: n,
          height: n,
        };
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(0),
        o = n(1);
      e.default = function (t) {
        var e = t.size,
          n = void 0 === e ? o.HEAD_DEFAULT_SIZE : e;
        return {
          node: r.h(
            "g",
            { transform: "translate(-" + n + ", 0)" },
            r.h("path", {
              d:
                "M" +
                -n +
                " " +
                -n +
                " L" +
                n +
                " 0 L" +
                -n +
                " " +
                n +
                " L0 0 Z",
            })
          ),
          width: n,
          height: n,
        };
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.pathListBezier = e.pathReducer = e.convertPathToSVG = void 0);
      var r = n(6);
      e.convertPathToSVG = function (t) {
        var e = ["M"];
        return (
          e.push(r.pointToArray(t[0])),
          e.push("C"),
          e.push(r.pointToArray(t[1])),
          e.push(","),
          e.push(r.pointToArray(t[2])),
          e.push(","),
          e.push(r.pointToArray(t[3])),
          e.flat().join(" ").replace(/ ,/g, ",")
        );
      };
      e.pathReducer = function (t, e) {
        return t.reduce(function (t, n) {
          return e(t, n);
        });
      };
      e.pathListBezier = function (t, n) {
        var o = [];
        return (
          o.push(t.relativeFrom),
          o.push(r.pointBezier(t.relativeFrom, t.size)),
          o.push(r.pointBezier(t.relativeTo, t.size)),
          o.push(t.relativeTo),
          (function (t, n) {
            var r = e.pathReducer(t, function (t, e) {
              return { x: Math.min(t.x, e.x), y: Math.min(t.y, e.y) };
            });
            return t.map(function (t) {
              return { x: t.x - r.x + n.width, y: t.y - r.y + n.height };
            });
          })(o, n)
        );
      };
    },
  ]);
});
