const Re = (a) => import(a), Ge = () => Promise.resolve().then(() => Le), { Fragment: S, jsx: e, jsxs: t } = globalThis.__GLOBALS__.ReactJSXRuntime, y = globalThis.__GLOBALS__.getAssetURL("4240c22dc2eff66792554a6f1593c0dd9dd2e971.png");
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
globalThis.__GLOBALS__.React;
const { Children: We, cloneElement: Ze, Component: $e, createContext: Be, createElement: b, createFactory: Ee, createRef: Je, forwardRef: M, Fragment: De, isValidElement: Ue, lazy: Xe, memo: Oe, Profiler: Ve, PureComponent: Ye, startTransition: qe, StrictMode: Pe, Suspense: Fe, use: Qe, useCallback: Ke, useContext: et, useDebugValue: tt, useDeferredValue: at, useEffect: lt, useId: rt, useImperativeHandle: st, useInsertionEffect: nt, useLayoutEffect: ot, useMemo: it, useReducer: ct, useRef: dt, useState: f, useSyncExternalStore: ht, useTransition: mt, version: gt } = globalThis.__GLOBALS__.React;
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), A = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (l, r, s) => s ? s.toUpperCase() : r.toLowerCase()
), w = (a) => {
  const l = A(a);
  return l.charAt(0).toUpperCase() + l.slice(1);
}, _ = (...a) => a.filter((l, r, s) => !!l && l.trim() !== "" && s.indexOf(l) === r).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var T = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L = M(
  ({
    color: a = "currentColor",
    size: l = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: s,
    className: o = "",
    children: c,
    iconNode: m,
    ...g
  }, i) => b(
    "svg",
    {
      ref: i,
      ...T,
      width: l,
      height: l,
      stroke: a,
      strokeWidth: s ? Number(r) * 24 / Number(l) : r,
      className: _("lucide", o),
      ...g
    },
    [
      ...m.map(([d, p]) => b(d, p)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n = (a, l) => {
  const r = M(
    ({ className: s, ...o }, c) => b(L, {
      ref: c,
      iconNode: l,
      className: _(
        `lucide-${C(w(a))}`,
        `lucide-${a}`,
        s
      ),
      ...o
    })
  );
  return r.displayName = w(a), r;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R = [
  [
    "path",
    {
      d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
      key: "3s7exb"
    }
  ],
  ["path", { d: "M10 2c1 .5 2 2 2 5", key: "fcco2y" }]
], j = n("apple", R);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], W = n("award", G);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], $ = n("book-open", Z);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
], E = n("brain", B);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], D = n("calendar", J);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], X = n("chevron-left", U);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], v = n("chevron-right", O);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], H = n("download", V);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
], q = n("facebook", Y);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
], F = n("heart", P);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
], K = n("instagram", Q);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ee = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], te = n("mail", ee);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], le = n("menu", ae);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], se = n("message-circle", re);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ne = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], oe = n("phone", ne);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
], ce = n("quote", ie);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], u = n("send", de);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
], z = n("sparkles", he);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], ge = n("star", me);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
], pe = n("trending-down", xe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
], be = n("trending-up", fe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ue = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
], Ne = n("twitter", ue);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
], I = n("utensils", ye);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const we = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ve = n("x", we);
function ke({ logoImage: a }) {
  const [l, r] = f(!1), s = (o) => {
    const c = document.getElementById(o);
    c && (c.scrollIntoView({ behavior: "smooth" }), r(!1));
  };
  return /* @__PURE__ */ e("header", { className: "sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm", children: /* @__PURE__ */ t("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-between h-20", children: [
      /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(
        "img",
        {
          src: a,
          alt: "Slim Spark Logo",
          className: "h-12 w-auto"
        }
      ) }),
      /* @__PURE__ */ t("nav", { className: "hidden md:flex items-center space-x-8", children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => s("about"),
            className: "text-gray-700 hover:text-orange-500 transition-colors",
            children: "О программе"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => s("how-it-works"),
            className: "text-gray-700 hover:text-orange-500 transition-colors",
            children: "Как это работает"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => s("cta"),
            className: "px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:shadow-lg transition-all",
            children: "Начать сейчас"
          }
        )
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          className: "md:hidden p-2",
          onClick: () => r(!l),
          children: l ? /* @__PURE__ */ e(ve, { className: "h-6 w-6 text-gray-700" }) : /* @__PURE__ */ e(le, { className: "h-6 w-6 text-gray-700" })
        }
      )
    ] }),
    l && /* @__PURE__ */ e("nav", { className: "md:hidden py-4 border-t border-gray-200", children: /* @__PURE__ */ t("div", { className: "flex flex-col space-y-4", children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => s("about"),
          className: "text-gray-700 hover:text-orange-500 transition-colors text-left",
          children: "О программе"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => s("how-it-works"),
          className: "text-gray-700 hover:text-orange-500 transition-colors text-left",
          children: "Как это работает"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => s("cta"),
          className: "px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:shadow-lg transition-all text-center",
          children: "Начать сейчас"
        }
      )
    ] }) })
  ] }) });
}
const Me = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function x(a) {
  const [l, r] = f(!1), s = () => {
    r(!0);
  }, { src: o, alt: c, style: m, className: g, ...i } = a;
  return l ? /* @__PURE__ */ e(
    "div",
    {
      className: `inline-block bg-gray-100 text-center align-middle ${g ?? ""}`,
      style: m,
      children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ e("img", { src: Me, alt: "Error loading image", ...i, "data-original-url": o }) })
    }
  ) : /* @__PURE__ */ e("img", { src: o, alt: c, className: g, style: m, ...i, onError: s });
}
function _e({ logoImage: a }) {
  return /* @__PURE__ */ t("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ t("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ e("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative", children: /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ t("div", { className: "text-center lg:text-left space-y-8", children: [
        /* @__PURE__ */ e("div", { className: "inline-block px-4 py-2 bg-orange-100 rounded-full", children: /* @__PURE__ */ e("span", { className: "text-orange-600", children: "✨ Похудение без спорта" }) }),
        /* @__PURE__ */ t("h1", { className: "text-4xl sm:text-5xl lg:text-6xl", children: [
          "Измените свою жизнь",
          /* @__PURE__ */ e("span", { className: "block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mt-2", children: "без строгих диет" })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0", children: "Slim-Spark помогает достичь здорового веса через работу с эмоциями и осознанное питание. Никаких изнурительных тренировок — только забота о себе." }),
        /* @__PURE__ */ e("div", { className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start", children: /* @__PURE__ */ t(
          "a",
          {
            href: "https://t.me/your_channel",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:shadow-xl transition-all transform hover:scale-105",
            children: [
              /* @__PURE__ */ e(u, { className: "h-5 w-5 group-hover:rotate-12 transition-transform" }),
              "Записаться на бесплатную консультацию"
            ]
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "pt-8 space-y-4", children: [
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-500", children: "Скачайте приложение и начните свой путь к здоровому весу уже сегодня" }),
          /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start", children: [
            /* @__PURE__ */ t(
              "a",
              {
                href: "#",
                className: "inline-flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors",
                children: [
                  /* @__PURE__ */ e(j, { className: "h-6 w-6" }),
                  /* @__PURE__ */ t("div", { className: "text-left", children: [
                    /* @__PURE__ */ e("div", { className: "text-xs", children: "Загрузите в" }),
                    /* @__PURE__ */ e("div", { className: "text-sm font-semibold", children: "App Store" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ t(
              "a",
              {
                href: "#",
                className: "inline-flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors",
                children: [
                  /* @__PURE__ */ e(H, { className: "h-6 w-6" }),
                  /* @__PURE__ */ t("div", { className: "text-left", children: [
                    /* @__PURE__ */ e("div", { className: "text-xs", children: "Доступно в" }),
                    /* @__PURE__ */ e("div", { className: "text-sm font-semibold", children: "Google Play" })
                  ] })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "relative lg:h-[600px]", children: /* @__PURE__ */ t("div", { className: "relative h-full rounded-3xl overflow-hidden shadow-2xl", children: [
        /* @__PURE__ */ e(
          x,
          {
            src: "https://images.unsplash.com/photo-1758274539654-23fa349cc090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBlYWNlZnVsJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MTc5Nzk5MHww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Wellness and peaceful meditation",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" })
      ] }) })
    ] }) })
  ] });
}
function je() {
  return /* @__PURE__ */ e("section", { id: "about", className: "py-20 bg-white", children: /* @__PURE__ */ t("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ t("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ t("h2", { className: "text-3xl sm:text-4xl lg:text-5xl mb-6", children: [
        "О программе",
        /* @__PURE__ */ e("span", { className: "block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500 mt-2", children: "Slim-Spark" })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-lg text-gray-600 mb-4", children: "Slim-Spark — это инновационная программа похудения, которая фокусируется на внутренних изменениях, а не на внешнем давлении. Мы помогаем людям обрести здоровый вес через понимание своих эмоций и построение гармоничных отношений с едой." }),
      /* @__PURE__ */ e("p", { className: "text-lg text-gray-600", children: "Наш подход основан на научных исследованиях в области психологии питания и направлен на долгосрочные результаты. Вы не просто худеете — вы меняете свою жизнь к лучшему." })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16", children: [
      {
        icon: E,
        title: "Работа с эмоциями",
        description: "Понимаем истинные причины переедания и учимся справляться с эмоциональным голодом",
        color: "from-purple-500 to-purple-600"
      },
      {
        icon: I,
        title: "Осознанное питание",
        description: "Формируем здоровые пищевые привычки без строгих ограничений и диет",
        color: "from-orange-500 to-orange-600"
      },
      {
        icon: F,
        title: "Забота о себе",
        description: "Развиваем любовь к своему телу и учимся заботиться о своем благополучии",
        color: "from-pink-500 to-pink-600"
      },
      {
        icon: z,
        title: "Без спорта",
        description: "Достигаем результатов через изменение отношения к еде, а не через изнурительные тренировки",
        color: "from-teal-500 to-teal-600"
      }
    ].map((l, r) => {
      const s = l.icon;
      return /* @__PURE__ */ t(
        "div",
        {
          className: "group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2",
          children: [
            /* @__PURE__ */ e("div", { className: `inline-flex p-4 rounded-2xl bg-gradient-to-br ${l.color} mb-6 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ e(s, { className: "h-8 w-8 text-white" }) }),
            /* @__PURE__ */ e("h3", { className: "text-xl mb-3", children: l.title }),
            /* @__PURE__ */ e("p", { className: "text-gray-600", children: l.description })
          ]
        },
        r
      );
    }) }),
    /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ e("div", { className: "relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl", children: /* @__PURE__ */ e(
        x,
        {
          src: "https://images.unsplash.com/photo-1720287333807-4cec121e7e5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGNvbG9yZnVsJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzE3OTgxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Healthy colorful vegetables",
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ e("div", { className: "relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl", children: /* @__PURE__ */ e(
        x,
        {
          src: "https://images.unsplash.com/photo-1765896387493-b473e1c0fb78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjB3ZWxsYmVpbmclMjBoYXBwaW5lc3MlMjB3b21hbnxlbnwxfHx8fDE3NzE3OTgxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Emotional wellbeing and happiness",
          className: "w-full h-full object-cover"
        }
      ) })
    ] })
  ] }) });
}
function He() {
  const a = [
    {
      step: "01",
      icon: se,
      title: "Консультация",
      description: "Начните с бесплатной консультации, где мы обсудим ваши цели, эмоциональные триггеры и построим индивидуальный план",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02",
      icon: $,
      title: "Работа с эмоциями",
      description: "Изучаем психологические причины переедания и учимся распознавать эмоциональный голод",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      icon: I,
      title: "Формирование привычек",
      description: "Создаем новые здоровые пищевые привычки через осознанное питание и заботу о себе",
      color: "from-orange-500 to-orange-600"
    },
    {
      step: "04",
      icon: be,
      title: "Достижение результата",
      description: "Постепенно достигаем здорового веса и поддерживаем его без стресса и насилия над собой",
      color: "from-teal-500 to-teal-600"
    }
  ];
  return /* @__PURE__ */ e("section", { id: "how-it-works", className: "py-20 bg-gradient-to-br from-orange-50 via-white to-teal-50", children: /* @__PURE__ */ t("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ t("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ t("h2", { className: "text-3xl sm:text-4xl lg:text-5xl mb-6", children: [
        "Как это",
        /* @__PURE__ */ e("span", { className: "block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500 mt-2", children: "работает" })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-lg text-gray-600", children: "Наша программа состоит из четырех последовательных этапов, которые помогут вам достичь здорового веса естественным путем" })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto", children: a.map((l, r) => {
      const s = l.icon;
      return /* @__PURE__ */ t(
        "div",
        {
          className: "group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300",
          children: [
            /* @__PURE__ */ e("div", { className: "absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-md", children: /* @__PURE__ */ e("span", { className: "text-2xl text-gray-700", children: l.step }) }),
            /* @__PURE__ */ e("div", { className: `inline-flex p-4 rounded-2xl bg-gradient-to-br ${l.color} mb-6 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ e(s, { className: "h-8 w-8 text-white" }) }),
            /* @__PURE__ */ e("h3", { className: "text-2xl mb-4", children: l.title }),
            /* @__PURE__ */ e("p", { className: "text-gray-600 text-lg", children: l.description }),
            r < a.length - 1 && r % 2 === 0 && /* @__PURE__ */ e("div", { className: "hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent" })
          ]
        },
        r
      );
    }) })
  ] }) });
}
const h = [
  {
    id: 1,
    name: "Анна М.",
    age: 34,
    city: "Москва",
    photo: "https://images.unsplash.com/photo-1660578008356-6d96db082e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwd2VpZ2h0JTIwbG9zcyUyMHRyYW5zZm9ybWF0aW9uJTIwc21pbGluZ3xlbnwxfHx8fDE3NzE3OTg0NTR8MA&ixlib=rb-4.1.0&q=80&w=400",
    weightLost: 18,
    months: 4,
    rating: 5,
    text: "Я пробовала десятки диет и каждый раз срывалась. Оказалось, что я заедала стресс после работы — и мы с куратором разобрались именно с этим. Никаких ограничений, никакого зала. Просто поняла себя — и вес ушёл сам.",
    highlight: "Без диет и спортзала",
    tag: "Эмоциональное переедание",
    tagColor: "bg-purple-100 text-purple-700"
  },
  {
    id: 2,
    name: "Елена К.",
    age: 41,
    city: "Санкт-Петербург",
    photo: "https://images.unsplash.com/photo-1590905775253-a4f0f3c426ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMGhhcHB5JTIwaGVhbHRoeSUyMGNvbmZpZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTc5ODQ1Nnww&ixlib=rb-4.1.0&q=80&w=400",
    weightLost: 12,
    months: 3,
    rating: 5,
    text: "После второго ребёнка вес не уходил годами. Физически я просто не могла заниматься спортом. Slim-Spark показал мне, что дело было в хроническом недосыпе и тревожности. Уже через месяц я почувствовала лёгкость — и внутри, и снаружи.",
    highlight: "После родов",
    tag: "Хронический стресс",
    tagColor: "bg-teal-100 text-teal-700"
  },
  {
    id: 3,
    name: "Дмитрий В.",
    age: 38,
    city: "Екатеринбург",
    photo: "https://images.unsplash.com/photo-1758521960645-ac7cfb219d7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwbWFuJTIwaGVhbHRoeSUyMGZpdCUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzE3OTg0NTZ8MA&ixlib=rb-4.1.0&q=80&w=400",
    weightLost: 22,
    months: 6,
    rating: 5,
    text: "Работа — стресс, дома — усталость. Ел всё подряд по ночам, сам понимал что это неправильно, но не мог остановиться. Программа помогла разорвать этот цикл. Сейчас минус 22 кг и я не чувствую себя ни в чём ограниченным.",
    highlight: "Ночные перекусы",
    tag: "Рабочий стресс",
    tagColor: "bg-blue-100 text-blue-700"
  },
  {
    id: 4,
    name: "Юлия Р.",
    age: 29,
    city: "Казань",
    photo: "https://images.unsplash.com/photo-1687672507164-0745296226a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHlvdW5nJTIwd29tYW4lMjB3ZWxsbmVzcyUyMG1pbmRmdWwlMjBlYXRpbmd8ZW58MXx8fHwxNzcxNzk4NDU2fDA&ixlib=rb-4.1.0&q=80&w=400",
    weightLost: 9,
    months: 2,
    rating: 5,
    text: "Я всегда думала, что мне нужна только сила воли. Но оказалось, что я ела от скуки и одиночества. Два месяца с Slim-Spark изменили моё отношение к еде полностью. Теперь я ем осознанно и с удовольствием.",
    highlight: "Изменила отношение к еде",
    tag: "Скука и одиночество",
    tagColor: "bg-orange-100 text-orange-700"
  },
  {
    id: 5,
    name: "Марина Т.",
    age: 46,
    city: "Новосибирск",
    photo: "https://images.unsplash.com/photo-1755034074327-9dcbdaf36981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB3b21hbiUyMGhlYWx0aHklMjBsaWZlc3R5bGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE3OTg0NTV8MA&ixlib=rb-4.1.0&q=80&w=400",
    weightLost: 15,
    months: 5,
    rating: 5,
    text: "В 46 лет думала, что это уже невозможно. Гормоны, возраст, усталость... Куратор объяснила мне, как работает метаболизм в моём возрасте и почему эмоции так влияют на вес. Результат превзошёл все ожидания!",
    highlight: "Старт в 46 лет",
    tag: "Возрастные изменения",
    tagColor: "bg-rose-100 text-rose-700"
  }
], ze = [
  { value: "94%", label: "клиентов достигают цели" },
  { value: "3–6", label: "месяцев до результата" },
  { value: "12 кг", label: "средний результат" },
  { value: "0", label: "тренировок требуется" }
];
function Ie() {
  const [a, l] = f(0), [r, s] = f(!1), o = (i) => {
    r || (s(!0), setTimeout(() => {
      l(i), s(!1);
    }, 200));
  }, c = () => o((a - 1 + h.length) % h.length), m = () => o((a + 1) % h.length), g = [
    (a - 1 + h.length) % h.length,
    a,
    (a + 1) % h.length
  ];
  return /* @__PURE__ */ e("section", { id: "testimonials", className: "py-20 bg-white overflow-hidden", children: /* @__PURE__ */ t("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ t("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6", children: [
        /* @__PURE__ */ e(W, { className: "h-4 w-4" }),
        /* @__PURE__ */ e("span", { className: "text-sm", children: "Реальные истории" })
      ] }),
      /* @__PURE__ */ t("h2", { className: "text-3xl sm:text-4xl lg:text-5xl mb-6", children: [
        "Истории успеха",
        /* @__PURE__ */ e("span", { className: "block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500 mt-2", children: "наших клиентов" })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-lg text-gray-600", children: "Люди, которые нашли свой путь к здоровому весу — без спорта, без жёстких диет, через понимание себя" })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16", children: ze.map((i, d) => /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-orange-50 to-teal-50 rounded-2xl p-5 text-center border border-orange-100", children: [
      /* @__PURE__ */ e("div", { className: "text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500 mb-1", children: i.value }),
      /* @__PURE__ */ e("div", { className: "text-sm text-gray-500", children: i.label })
    ] }, d)) }),
    /* @__PURE__ */ t("div", { className: "relative max-w-6xl mx-auto", children: [
      /* @__PURE__ */ e("div", { className: "hidden lg:grid lg:grid-cols-3 gap-6", children: g.map((i, d) => {
        const p = h[i], N = d === 1;
        return /* @__PURE__ */ e(
          "div",
          {
            onClick: () => !N && o(i),
            className: `relative bg-white rounded-3xl p-7 border transition-all duration-500 flex flex-col gap-4 ${N ? "shadow-2xl border-orange-200 scale-100 z-10" : "shadow-md border-gray-100 scale-95 opacity-70 cursor-pointer hover:opacity-90"}`,
            children: /* @__PURE__ */ e(k, { testimonial: p })
          },
          p.id
        );
      }) }),
      /* @__PURE__ */ e("div", { className: "lg:hidden", children: /* @__PURE__ */ e(
        "div",
        {
          className: `bg-white rounded-3xl p-6 sm:p-8 border border-orange-200 shadow-2xl transition-opacity duration-200 ${r ? "opacity-0" : "opacity-100"}`,
          children: /* @__PURE__ */ e(k, { testimonial: h[a] })
        }
      ) }),
      /* @__PURE__ */ t("div", { className: "flex items-center justify-center gap-4 mt-8", children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: c,
            className: "w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-500 transition-all duration-200",
            "aria-label": "Предыдущий отзыв",
            children: /* @__PURE__ */ e(X, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex gap-2", children: h.map((i, d) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => o(d),
            className: `rounded-full transition-all duration-300 ${d === a ? "w-8 h-3 bg-gradient-to-r from-orange-500 to-teal-500" : "w-3 h-3 bg-gray-200 hover:bg-gray-300"}`,
            "aria-label": `Перейти к отзыву ${d + 1}`
          },
          d
        )) }),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: m,
            className: "w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-500 transition-all duration-200",
            "aria-label": "Следующий отзыв",
            children: /* @__PURE__ */ e(v, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-16 text-center", children: [
      /* @__PURE__ */ e("p", { className: "text-gray-500 mb-2", children: "Хотите такой же результат?" }),
      /* @__PURE__ */ t(
        "a",
        {
          href: "https://t.me/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all duration-300",
          children: [
            "Начать свою историю",
            /* @__PURE__ */ e(v, { className: "h-5 w-5" })
          ]
        }
      )
    ] })
  ] }) });
}
function Se({ rating: a }) {
  return /* @__PURE__ */ e("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }).map((l, r) => /* @__PURE__ */ e(
    ge,
    {
      className: `h-4 w-4 ${r < a ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`
    },
    r
  )) });
}
function k({ testimonial: a }) {
  return /* @__PURE__ */ t(S, { children: [
    /* @__PURE__ */ e("div", { className: "absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-orange-400 to-teal-400 rounded-full flex items-center justify-center shadow-md", children: /* @__PURE__ */ e(ce, { className: "h-5 w-5 text-white" }) }),
    /* @__PURE__ */ e("span", { className: `inline-block text-xs px-3 py-1 rounded-full w-fit ${a.tagColor}`, children: a.tag }),
    /* @__PURE__ */ t("p", { className: "text-gray-700 text-base leading-relaxed flex-1 italic", children: [
      '"',
      a.text,
      '"'
    ] }),
    /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-xl text-sm", children: [
        /* @__PURE__ */ e(pe, { className: "h-4 w-4" }),
        /* @__PURE__ */ t("span", { children: [
          "−",
          a.weightLost,
          " кг"
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-xl text-sm", children: [
        /* @__PURE__ */ e(D, { className: "h-4 w-4" }),
        /* @__PURE__ */ t("span", { children: [
          a.months,
          " мес."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "h-px bg-gradient-to-r from-orange-100 via-teal-100 to-transparent" }),
    /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-full overflow-hidden border-2 border-orange-200 flex-shrink-0", children: /* @__PURE__ */ e(
        x,
        {
          src: a.photo,
          alt: a.name,
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ t("div", { className: "min-w-0", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ t("span", { className: "text-gray-900 text-sm truncate", children: [
            a.name,
            ", ",
            a.age
          ] }),
          /* @__PURE__ */ e("span", { className: "text-xs text-gray-400", children: a.city })
        ] }),
        /* @__PURE__ */ e(Se, { rating: a.rating })
      ] }),
      /* @__PURE__ */ e("div", { className: "ml-auto flex-shrink-0", children: /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-orange-500 to-teal-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap", children: a.highlight }) })
    ] })
  ] });
}
function Ce() {
  return /* @__PURE__ */ t("section", { id: "cta", className: "py-20 bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ t("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-10 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-10 left-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ e("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative", children: /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-6", children: [
          /* @__PURE__ */ e(z, { className: "h-6 w-6 text-orange-400" }),
          /* @__PURE__ */ e("span", { className: "text-orange-400", children: "Начните прямо сейчас" })
        ] }),
        /* @__PURE__ */ e("h2", { className: "text-3xl sm:text-4xl mb-6", children: "Скачайте приложение Slim-Spark" }),
        /* @__PURE__ */ e("p", { className: "text-gray-300 text-lg mb-8", children: "Получите доступ к персонализированным рекомендациям, отслеживайте свой прогресс и общайтесь с экспертами прямо из приложения" }),
        /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ t(
            "a",
            {
              href: "#",
              className: "inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors",
              children: [
                /* @__PURE__ */ e(j, { className: "h-7 w-7" }),
                /* @__PURE__ */ t("div", { className: "text-left", children: [
                  /* @__PURE__ */ e("div", { className: "text-xs", children: "Загрузите в" }),
                  /* @__PURE__ */ e("div", { className: "text-base font-semibold", children: "App Store" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            "a",
            {
              href: "#",
              className: "inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors",
              children: [
                /* @__PURE__ */ e(H, { className: "h-7 w-7" }),
                /* @__PURE__ */ t("div", { className: "text-left", children: [
                  /* @__PURE__ */ e("div", { className: "text-xs", children: "Доступно в" }),
                  /* @__PURE__ */ e("div", { className: "text-base font-semibold", children: "Google Play" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: "mt-8 relative h-64 rounded-2xl overflow-hidden", children: /* @__PURE__ */ e(
          x,
          {
            src: "https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwbW9iaWxlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE3OTgxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Smartphone app",
            className: "w-full h-full object-cover"
          }
        ) })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-6", children: [
          /* @__PURE__ */ e(u, { className: "h-6 w-6" }),
          /* @__PURE__ */ e("span", { children: "Бесплатная консультация" })
        ] }),
        /* @__PURE__ */ e("h2", { className: "text-3xl sm:text-4xl mb-6", children: "Запишитесь на консультацию в Telegram" }),
        /* @__PURE__ */ e("p", { className: "text-blue-100 text-lg mb-8", children: "Получите персональную консультацию от наших экспертов. Мы обсудим ваши цели, ответим на все вопросы и составим индивидуальный план действий" }),
        /* @__PURE__ */ t("div", { className: "space-y-4 mb-8", children: [
          /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-sm", children: "✓" }) }),
            /* @__PURE__ */ e("p", { className: "text-blue-100", children: "Диагностика ваших пищевых привычек" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-sm", children: "✓" }) }),
            /* @__PURE__ */ e("p", { className: "text-blue-100", children: "Выявление эмоциональных триггеров" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-sm", children: "✓" }) }),
            /* @__PURE__ */ e("p", { className: "text-blue-100", children: "Индивидуальный план достижения целей" })
          ] })
        ] }),
        /* @__PURE__ */ t(
          "a",
          {
            href: "https://t.me/your_channel",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto",
            children: [
              /* @__PURE__ */ e(u, { className: "h-5 w-5 group-hover:rotate-12 transition-transform" }),
              /* @__PURE__ */ e("span", { className: "font-semibold", children: "Записаться на консультацию" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function Ae() {
  return /* @__PURE__ */ e("footer", { className: "bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16", children: /* @__PURE__ */ t("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h3", { className: "text-xl mb-4", children: "Slim-Spark" }),
        /* @__PURE__ */ e("p", { className: "text-gray-400 mb-4", children: "Программа похудения через работу с эмоциями и осознанное питание. Без спорта, без стресса, с заботой о себе." })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h3", { className: "text-xl mb-4", children: "Быстрые ссылки" }),
        /* @__PURE__ */ t("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: "#about", className: "text-gray-400 hover:text-orange-400 transition-colors", children: "О программе" }) }),
          /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: "#how-it-works", className: "text-gray-400 hover:text-orange-400 transition-colors", children: "Как это работает" }) }),
          /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: "#cta", className: "text-gray-400 hover:text-orange-400 transition-colors", children: "Начать сейчас" }) })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h3", { className: "text-xl mb-4", children: "Контакты" }),
        /* @__PURE__ */ t("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ t("li", { className: "flex items-center gap-2 text-gray-400", children: [
            /* @__PURE__ */ e(te, { className: "h-5 w-5 text-orange-400" }),
            /* @__PURE__ */ e("a", { href: "mailto:info@slimspark.ru", className: "hover:text-orange-400 transition-colors", children: "info@slimspark.ru" })
          ] }),
          /* @__PURE__ */ t("li", { className: "flex items-center gap-2 text-gray-400", children: [
            /* @__PURE__ */ e(oe, { className: "h-5 w-5 text-orange-400" }),
            /* @__PURE__ */ e("a", { href: "tel:+79991234567", className: "hover:text-orange-400 transition-colors", children: "+7 (999) 123-45-67" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h3", { className: "text-xl mb-4", children: "Социальные сети" }),
        /* @__PURE__ */ t("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ e(
            "a",
            {
              href: "#",
              className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors",
              children: /* @__PURE__ */ e(K, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ e(
            "a",
            {
              href: "#",
              className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors",
              children: /* @__PURE__ */ e(q, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ e(
            "a",
            {
              href: "#",
              className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors",
              children: /* @__PURE__ */ e(Ne, { className: "h-5 w-5" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "border-t border-gray-700 pt-8 text-center", children: [
      /* @__PURE__ */ e("p", { className: "text-gray-400", children: "© 2026 Slim-Spark. Все права защищены." }),
      /* @__PURE__ */ e("p", { className: "text-gray-500 text-sm mt-2", children: "Проконсультируйтесь с врачом перед началом любой программы похудения." })
    ] })
  ] }) });
}
function Te() {
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50", children: [
    /* @__PURE__ */ e(ke, { logoImage: y }),
    /* @__PURE__ */ e(_e, { logoImage: y }),
    /* @__PURE__ */ e(je, {}),
    /* @__PURE__ */ e(He, {}),
    /* @__PURE__ */ e(Ie, {}),
    /* @__PURE__ */ e(Ce, {}),
    /* @__PURE__ */ e(Ae, {})
  ] });
}
const Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ge as Code0_8,
  Re as __importModule__
};
