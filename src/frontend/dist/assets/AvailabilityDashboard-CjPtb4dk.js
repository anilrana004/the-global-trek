import { c as createLucideIcon, r as reactExports, u as useComposedRefs, j as jsxRuntimeExports, d as cn, e as useActor, S as Skeleton, A as AnimatePresence, m as motion, X, B as Button, L as Link, f as createActor } from "./index-vYOW-QfD.js";
import { B as Badge } from "./badge-DuvBcwOn.js";
import { u as useControllableState, P as Primitive, c as composeEventHandlers, a as createContextScope } from "./index-Gp0GX1_L.js";
import { u as usePrevious, a as useSize } from "./index-BbojY84U.js";
import { U as Users } from "./users-DiG3WeOD.js";
import { T as TriangleAlert } from "./triangle-alert-CpbQD4jz.js";
import { C as Calendar } from "./calendar-0cg0IGtL.js";
import { T as TrendingUp } from "./trending-up-C4HVoG3E.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const TREK_META = {
  kedarkantha: {
    name: "Kedarkantha",
    state: "Uttarakhand",
    difficulty: "Easy–Moderate",
    duration: "5 Days",
    price: "₹8,500",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  "chopta-tungnath": {
    name: "Chopta Tungnath",
    state: "Uttarakhand",
    difficulty: "Easy–Moderate",
    duration: "3 Days",
    price: "₹6,500",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80"
  },
  "har-ki-dun": {
    name: "Har Ki Dun",
    state: "Uttarakhand",
    difficulty: "Easy–Moderate",
    duration: "6 Days",
    price: "₹9,500",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&q=80"
  },
  "kuari-pass": {
    name: "Kuari Pass",
    state: "Uttarakhand",
    difficulty: "Moderate",
    duration: "5 Days",
    price: "₹9,000",
    image: "https://images.unsplash.com/photo-1543728069-a3f97c5a2f34?w=600&q=80"
  },
  "phulara-ridge": {
    name: "Phulara Ridge",
    state: "Uttarakhand",
    difficulty: "Easy–Moderate",
    duration: "4 Days",
    price: "₹7,500",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=600&q=80"
  },
  "valley-of-flowers": {
    name: "Valley of Flowers",
    state: "Uttarakhand",
    difficulty: "Easy",
    duration: "5 Days",
    price: "₹10,500",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80"
  },
  roopkund: {
    name: "Roopkund",
    state: "Uttarakhand",
    difficulty: "Difficult",
    duration: "8 Days",
    price: "₹14,500",
    image: "https://images.unsplash.com/photo-1526773347046-cdb28cebe39b?w=600&q=80"
  },
  brahmatal: {
    name: "Brahmatal",
    state: "Uttarakhand",
    difficulty: "Moderate",
    duration: "6 Days",
    price: "₹10,000",
    image: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?w=600&q=80"
  },
  "dayara-bugyal": {
    name: "Dayara Bugyal",
    state: "Uttarakhand",
    difficulty: "Easy",
    duration: "4 Days",
    price: "₹7,800",
    image: "https://images.unsplash.com/photo-1560435417-e3a24c784f79?w=600&q=80"
  },
  "nag-tibba": {
    name: "Nag Tibba",
    state: "Uttarakhand",
    difficulty: "Easy",
    duration: "2 Days",
    price: "₹3,500",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80"
  },
  "hampta-pass": {
    name: "Hampta Pass",
    state: "Himachal Pradesh",
    difficulty: "Moderate",
    duration: "5 Days",
    price: "₹11,500",
    image: "https://images.unsplash.com/photo-1494496195158-c3bc5b4ff02d?w=600&q=80"
  },
  "sar-pass": {
    name: "Sar Pass",
    state: "Himachal Pradesh",
    difficulty: "Moderate",
    duration: "5 Days",
    price: "₹9,800",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80"
  },
  kheerganga: {
    name: "Kheerganga",
    state: "Himachal Pradesh",
    difficulty: "Easy",
    duration: "2 Days",
    price: "₹4,500",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80"
  },
  triund: {
    name: "Triund",
    state: "Himachal Pradesh",
    difficulty: "Easy",
    duration: "2 Days",
    price: "₹3,800",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80"
  },
  "beas-kund": {
    name: "Beas Kund",
    state: "Himachal Pradesh",
    difficulty: "Easy–Moderate",
    duration: "3 Days",
    price: "₹6,200",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80"
  }
};
const ALL_TREK_SLUGS = Object.keys(TREK_META);
const DURATION_OPTIONS = [
  "2 Days",
  "3 Days",
  "4 Days",
  "5 Days",
  "6 Days",
  "6+ Days"
];
function getDurationDays(dur) {
  const m = dur.match(/(\d+)/);
  return m ? Number.parseInt(m[1], 10) : 0;
}
function matchesDurationFilter(trekSlug, durations) {
  if (durations.size === 0) return true;
  const meta = TREK_META[trekSlug];
  if (!meta) return true;
  const days = getDurationDays(meta.duration);
  for (const d of durations) {
    if (d === "6+ Days" && days >= 6) return true;
    const filterDays = getDurationDays(d);
    if (filterDays === days) return true;
  }
  return false;
}
function getPriceNumber(trekSlug) {
  const meta = TREK_META[trekSlug];
  if (!meta) return 0;
  const m = meta.price.replace(/[₹,]/g, "");
  return Number.parseInt(m, 10) || 0;
}
function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  } catch {
    return dateStr;
  }
}
function computeStats(groups) {
  let totalSeats = 0;
  let soldOutCount = 0;
  let nextBatch = null;
  let maxSeats = 0;
  let mostAvailableTrek = "";
  for (const g of groups) {
    const meta = TREK_META[g.trekSlug];
    let trekSeats = 0;
    for (const b of g.batches) {
      const avail = Number(b.availableSeats);
      totalSeats += avail;
      trekSeats += avail;
      if (avail === 0) soldOutCount++;
      if (avail > 0 && b.batchDate) {
        if (!nextBatch || b.batchDate < nextBatch.date) {
          nextBatch = {
            date: b.batchDate,
            trekName: (meta == null ? void 0 : meta.name) ?? g.trekSlug,
            seats: avail
          };
        }
      }
    }
    if (trekSeats > maxSeats) {
      maxSeats = trekSeats;
      mostAvailableTrek = (meta == null ? void 0 : meta.name) ?? g.trekSlug;
    }
  }
  return { totalSeats, soldOutCount, nextBatch, mostAvailableTrek, maxSeats };
}
function SeatChip({ avail, total }) {
  if (avail === 0)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-900/40 text-red-300 border border-red-700/40", children: "SOLD OUT" });
  if (avail <= 5)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-900/40 text-amber-300 border border-amber-600/40", children: [
      avail,
      " of ",
      total
    ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-900/40 text-emerald-300 border border-emerald-700/40", children: [
    avail,
    " of ",
    total
  ] });
}
function StatusBadge({ avail }) {
  if (avail === 0)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-900/40 text-red-300 border border-red-700/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-red-400" }),
      " Sold Out"
    ] });
  if (avail <= 5)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-900/40 text-amber-300 border border-amber-600/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" }),
      " ",
      "Almost Full"
    ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-900/40 text-emerald-300 border border-emerald-700/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400" }),
    " Available"
  ] });
}
function BatchTableRow({
  batch,
  trekSlug
}) {
  var _a, _b;
  const avail = Number(batch.availableSeats);
  const total = Number(batch.totalSeats);
  const price = Number(batch.price);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-white/5 hover:bg-white/[0.02] transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-sm text-white/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-white/30 shrink-0" }),
      formatDate(batch.batchDate)
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-sm text-white/60", children: ((_a = TREK_META[trekSlug]) == null ? void 0 : _a.duration) ?? "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SeatChip, { avail, total: total > 0 ? total : 15 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-sm font-semibold text-white", children: [
      price > 0 ? `₹${price.toLocaleString("en-IN")}` : ((_b = TREK_META[trekSlug]) == null ? void 0 : _b.price) ?? "—",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 font-normal", children: "/person" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { avail }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: avail > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/booking/$trekSlug/select-batch",
        params: { trekSlug },
        "data-ocid": `availability.book_now.${trekSlug}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "font-label text-xs tracking-wide rounded-full h-7 px-4",
            style: { background: "#F4A623", color: "#0A2E1A" },
            children: "Book Now"
          }
        )
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/trek/$trekId",
        params: { trekId: trekSlug },
        hash: "batches",
        "data-ocid": `availability.waitlist.${trekSlug}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "font-label text-xs tracking-wide rounded-full h-7 px-4 text-white/50 border-white/20 hover:text-white",
            children: "Join Waitlist"
          }
        )
      }
    ) })
  ] });
}
function MobileBatchChip({
  batch,
  trekSlug
}) {
  var _a;
  const avail = Number(batch.availableSeats);
  const price = Number(batch.price);
  const displayPrice = price > 0 ? `₹${price.toLocaleString("en-IN")}` : ((_a = TREK_META[trekSlug]) == null ? void 0 : _a.price) ?? "";
  const chipStyle = avail === 0 ? "border-red-700/40 bg-red-900/20" : avail <= 5 ? "border-amber-600/40 bg-amber-900/20" : "border-emerald-700/40 bg-emerald-900/20";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `shrink-0 border rounded-xl px-3 py-2 flex flex-col gap-1 min-w-[140px] ${chipStyle}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-[11px]", children: formatDate(batch.batchDate) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white text-xs font-semibold", children: [
          avail > 0 ? `${avail} seats · ` : "",
          displayPrice
        ] }),
        avail > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/booking/$trekSlug/select-batch", params: { trekSlug }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold", style: { color: "#F4A623" }, children: "Book →" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 text-[11px] font-bold", children: "Sold Out" })
      ]
    }
  );
}
function TrekGroupCard({ group }) {
  const meta = TREK_META[group.trekSlug];
  if (!meta) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -8 },
      transition: { duration: 0.25 },
      className: "rounded-2xl overflow-hidden border border-white/10",
      style: { background: "rgba(10,46,26,0.7)" },
      "data-ocid": `availability.trek_card.${group.trekSlug}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-4 p-4",
            style: {
              background: "linear-gradient(135deg, rgba(26,122,76,0.5), rgba(20,92,56,0.8))"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: meta.image,
                  alt: meta.name,
                  className: "w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-white", children: meta.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/20", children: meta.state }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10", children: meta.difficulty })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs text-white/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "⏱ ",
                    meta.duration
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", style: { color: "#F4A623" }, children: [
                    "From ",
                    meta.price
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/treks/$state/$slug",
                  params: {
                    state: meta.state === "Uttarakhand" ? "uttarakhand" : "himachal-pradesh",
                    slug: group.trekSlug
                  },
                  className: "shrink-0 text-xs text-white/40 hover:text-white/80 transition-colors hidden sm:block",
                  children: "View Trek →"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-[11px] font-label text-white/30 uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Batch Dates" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Duration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Seats" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: group.batches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            BatchTableRow,
            {
              batch: b,
              trekSlug: group.trekSlug
            },
            `${b.trekSlug}-${b.batchDate}`
          )) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide", children: group.batches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          MobileBatchChip,
          {
            batch: b,
            trekSlug: group.trekSlug
          },
          `${b.trekSlug}-${b.batchDate}-mobile`
        )) })
      ]
    }
  );
}
function FilterPanel({
  filters,
  onFiltersChange,
  onClear
}) {
  const toggleState = (s) => {
    const next = new Set(filters.states);
    if (next.has(s)) next.delete(s);
    else next.add(s);
    onFiltersChange({ states: next });
  };
  const toggleDuration = (d) => {
    const next = new Set(filters.durations);
    if (next.has(d)) next.delete(d);
    else next.add(d);
    onFiltersChange({ durations: next });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label text-sm font-bold text-white uppercase tracking-widest", children: "Filter Batches" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onClear,
          className: "text-xs text-white/40 hover:text-white/80 transition-colors",
          "data-ocid": "availability.clear_filters_button",
          children: "Clear All"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-white/40 uppercase tracking-widest mb-3", children: "State" }),
      ["Uttarakhand", "Himachal Pradesh"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex items-center gap-2.5 mb-2 cursor-pointer group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: filters.states.has(s),
                onChange: () => toggleState(s),
                className: "w-4 h-4 rounded border-white/20 bg-white/10 accent-emerald-500",
                "data-ocid": `availability.filter_state.${s.toLowerCase().replace(" ", "_")}_checkbox`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/70 group-hover:text-white transition-colors", children: s })
          ]
        },
        s
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-white/40 uppercase tracking-widest mb-3", children: "Availability" }),
      [
        { val: "all", label: "All Batches" },
        { val: "available", label: "Available" },
        { val: "almostFull", label: "Almost Full (≤5)" },
        { val: "soldOut", label: "Sold Out" }
      ].map(({ val, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex items-center gap-2.5 mb-2 cursor-pointer group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "radio",
                name: "availability",
                value: val,
                checked: filters.availability === val,
                onChange: () => onFiltersChange({ availability: val }),
                className: "w-4 h-4 accent-emerald-500",
                "data-ocid": `availability.filter_avail.${val}_radio`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/70 group-hover:text-white transition-colors", children: label })
          ]
        },
        val
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-white/40 uppercase tracking-widest mb-3", children: "Duration" }),
      DURATION_OPTIONS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex items-center gap-2.5 mb-2 cursor-pointer group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: filters.durations.has(d),
                onChange: () => toggleDuration(d),
                className: "w-4 h-4 rounded border-white/20 bg-white/10 accent-emerald-500",
                "data-ocid": `availability.filter_duration.${d.replace(" ", "_").toLowerCase()}_checkbox`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/70 group-hover:text-white transition-colors", children: d })
          ]
        },
        d
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-white/40 uppercase tracking-widest mb-3", children: "Price Range (₹/person)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: filters.minPrice,
            onChange: (e) => onFiltersChange({ minPrice: Number(e.target.value) }),
            placeholder: "Min",
            className: "w-full px-3 py-2 rounded-lg text-sm text-white bg-white/10 border border-white/10 outline-none focus:border-emerald-500/60 placeholder:text-white/30",
            min: 0,
            "data-ocid": "availability.filter_price_min_input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 text-xs", children: "–" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: filters.maxPrice,
            onChange: (e) => onFiltersChange({ maxPrice: Number(e.target.value) }),
            placeholder: "Max",
            className: "w-full px-3 py-2 rounded-lg text-sm text-white bg-white/10 border border-white/10 outline-none focus:border-emerald-500/60 placeholder:text-white/30",
            min: 0,
            "data-ocid": "availability.filter_price_max_input"
          }
        )
      ] })
    ] })
  ] });
}
function AvailabilityDashboard() {
  const { actor, isFetching } = useActor(createActor);
  const [groups, setGroups] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [lastUpdated, setLastUpdated] = reactExports.useState(null);
  const [autoRefresh, setAutoRefresh] = reactExports.useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = reactExports.useState(false);
  const [filters, setFilters] = reactExports.useState({
    states: /* @__PURE__ */ new Set(),
    availability: "all",
    durations: /* @__PURE__ */ new Set(),
    minPrice: 3e3,
    maxPrice: 25e3
  });
  const intervalRef = reactExports.useRef(null);
  const fetchAll = reactExports.useCallback(async () => {
    if (!actor) return;
    setIsLoading(true);
    const result = [];
    for (const slug of ALL_TREK_SLUGS) {
      try {
        const batches = await actor.getBatchAvailability(slug);
        if (batches.length > 0) {
          result.push({ trekSlug: slug, batches });
        }
      } catch {
      }
    }
    if (result.length === 0) {
      const mockGroups = ALL_TREK_SLUGS.slice(0, 6).map(
        (slug) => ({
          trekSlug: slug,
          batches: [
            {
              trekSlug: slug,
              batchDate: "2026-12-20",
              batchType: "Regular",
              totalSeats: 15n,
              bookedSeats: 7n,
              availableSeats: 8n,
              price: BigInt(getPriceNumber(slug))
            },
            {
              trekSlug: slug,
              batchDate: "2026-12-27",
              batchType: "Regular",
              totalSeats: 15n,
              bookedSeats: 13n,
              availableSeats: 2n,
              price: BigInt(getPriceNumber(slug))
            },
            {
              trekSlug: slug,
              batchDate: "2027-01-03",
              batchType: "New Year",
              totalSeats: 15n,
              bookedSeats: 15n,
              availableSeats: 0n,
              price: BigInt(getPriceNumber(slug) + 1e3)
            }
          ]
        })
      );
      setGroups(mockGroups);
    } else {
      setGroups(result);
    }
    setLastUpdated(/* @__PURE__ */ new Date());
    setIsLoading(false);
  }, [actor]);
  reactExports.useEffect(() => {
    if (!actor || isFetching) return;
    fetchAll();
  }, [actor, isFetching, fetchAll]);
  reactExports.useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (autoRefresh && actor && !isFetching) {
      intervalRef.current = setInterval(fetchAll, 3e4);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoRefresh, actor, isFetching, fetchAll]);
  const updateFilters = (partial) => {
    setFilters((prev) => ({ ...prev, ...partial }));
  };
  const clearFilters = () => {
    setFilters({
      states: /* @__PURE__ */ new Set(),
      availability: "all",
      durations: /* @__PURE__ */ new Set(),
      minPrice: 3e3,
      maxPrice: 25e3
    });
  };
  const filteredGroups = groups.filter((g) => {
    const meta = TREK_META[g.trekSlug];
    if (!meta) return false;
    if (filters.states.size > 0 && !filters.states.has(meta.state))
      return false;
    if (!matchesDurationFilter(g.trekSlug, filters.durations)) return false;
    const price = getPriceNumber(g.trekSlug);
    if (price < filters.minPrice || price > filters.maxPrice) return false;
    return true;
  }).map((g) => {
    const filteredBatches = g.batches.filter((b) => {
      const avail = Number(b.availableSeats);
      if (filters.availability === "available") return avail > 0;
      if (filters.availability === "almostFull")
        return avail > 0 && avail <= 5;
      if (filters.availability === "soldOut") return avail === 0;
      return true;
    });
    return { ...g, batches: filteredBatches };
  }).filter((g) => g.batches.length > 0);
  const stats = computeStats(groups);
  const totalBatches = filteredGroups.reduce(
    (acc, g) => acc + g.batches.length,
    0
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "main",
    {
      className: "min-h-screen",
      style: { background: "#060E08" },
      "data-ocid": "availability.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Live Trek Availability 2026 | Global Trek" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "relative pt-24 pb-12 md:pt-32 md:pb-16 px-4",
            style: {
              background: "linear-gradient(160deg, #0A2E1A 0%, #145C38 50%, #0A2E1A 100%)"
            },
            "data-ocid": "availability.hero",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-label text-xs uppercase tracking-widest mb-2",
                      style: { color: "#2ECC71" },
                      children: "⚡ Live Dashboard"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h1",
                    {
                      className: "font-display text-4xl md:text-5xl font-bold text-white mb-3",
                      style: { lineHeight: 1.15 },
                      children: "Find Your Perfect Trek Batch"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-base md:text-lg max-w-xl", children: "Live seat availability across all 15 treks and 50+ batches for 2026" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: fetchAll,
                      disabled: isLoading,
                      className: "flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-all",
                      "data-ocid": "availability.manual_refresh_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          RefreshCw,
                          {
                            className: `w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`
                          }
                        ),
                        "Refresh"
                      ]
                    }
                  ),
                  lastUpdated && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/40", children: [
                    "Updated",
                    " ",
                    lastUpdated.toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit"
                    })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8", children: [
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5", style: { color: "#2ECC71" } }),
                  label: "Available Seats",
                  value: isLoading ? "—" : stats.totalSeats.toLocaleString("en-IN"),
                  sub: "across all batches",
                  ocid: "availability.stat_total_seats"
                },
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-red-400" }),
                  label: "Sold Out Batches",
                  value: isLoading ? "—" : String(stats.soldOutCount),
                  sub: "no seats remaining",
                  ocid: "availability.stat_soldout"
                },
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 text-amber-400" }),
                  label: "Next Batch",
                  value: isLoading ? "—" : stats.nextBatch ? stats.nextBatch.trekName : "No batches",
                  sub: stats.nextBatch ? `${formatDate(stats.nextBatch.date)} · ${stats.nextBatch.seats} seats` : "",
                  ocid: "availability.stat_next_batch"
                },
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TrendingUp,
                    {
                      className: "w-5 h-5",
                      style: { color: "#F4A623" }
                    }
                  ),
                  label: "Most Available",
                  value: isLoading ? "—" : stats.mostAvailableTrek || "—",
                  sub: isLoading ? "" : `${stats.maxSeats} total seats`,
                  ocid: "availability.stat_most_available"
                }
              ].map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-2xl border border-white/10 p-4",
                  style: { background: "rgba(255,255,255,0.06)" },
                  "data-ocid": card.ocid,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      card.icon,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-label text-[11px] uppercase tracking-widest text-white/40", children: card.label })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-white truncate", children: card.value }),
                    card.sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/40 mt-0.5 truncate", children: card.sub })
                  ]
                },
                card.label
              )) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "max-w-6xl mx-auto px-4 py-8",
            "data-ocid": "availability.main_section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "aside",
                {
                  className: "hidden md:block w-72 shrink-0 self-start sticky top-24 rounded-2xl border border-white/10 p-5",
                  style: { background: "rgba(10,46,26,0.8)" },
                  "data-ocid": "availability.filter_sidebar",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FilterPanel,
                    {
                      filters,
                      onFiltersChange: updateFilters,
                      onClear: clearFilters
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5 gap-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/50 text-sm", children: [
                    "Showing",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: totalBatches }),
                    " ",
                    "batches across",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: filteredGroups.length }),
                    " ",
                    "treks"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setMobileFilterOpen(true),
                        className: "md:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm text-white/70 hover:text-white transition-colors",
                        "data-ocid": "availability.mobile_filter_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4" }),
                          "Filters"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/50", children: "Auto-refresh" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          checked: autoRefresh,
                          onCheckedChange: setAutoRefresh,
                          "data-ocid": "availability.auto_refresh_toggle"
                        }
                      )
                    ] })
                  ] })
                ] }),
                isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "availability.loading_state", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-white/10 overflow-hidden",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "p-4 flex gap-4",
                          style: { background: "rgba(26,122,76,0.2)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-16 h-16 rounded-xl" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-40" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-24" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" })
                      ] })
                    ]
                  },
                  i
                )) }),
                !isLoading && filteredGroups.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center justify-center py-20 rounded-2xl border border-white/10",
                    style: { background: "rgba(10,46,26,0.4)" },
                    "data-ocid": "availability.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🏔" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-white mb-2", children: "No matching batches" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-sm text-center max-w-xs", children: "Try adjusting your filters or clearing them to see all available batches." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: clearFilters,
                          className: "mt-5 px-5 py-2 rounded-full text-sm font-semibold transition-colors",
                          style: { background: "#1A7A4C", color: "white" },
                          "data-ocid": "availability.empty_clear_filters_button",
                          children: "Clear Filters"
                        }
                      )
                    ]
                  }
                ),
                !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: filteredGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekGroupCard, { group }, group.trekSlug)) }) })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileFilterOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "fixed inset-0 z-40",
              style: { background: "rgba(0,0,0,0.6)" },
              onClick: () => setMobileFilterOpen(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { y: "100%" },
              animate: { y: 0 },
              exit: { y: "100%" },
              transition: { type: "spring", damping: 28, stiffness: 280 },
              className: "fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl p-6 overflow-y-auto max-h-[85vh]",
              style: { background: "#0A2E1A" },
              "data-ocid": "availability.mobile_filter_drawer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label text-base font-bold text-white uppercase tracking-widest", children: "Filters" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMobileFilterOpen(false),
                      "aria-label": "Close filter drawer",
                      "data-ocid": "availability.mobile_filter_close_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-white/60" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FilterPanel,
                  {
                    filters,
                    onFiltersChange: updateFilters,
                    onClear: clearFilters
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    className: "w-full mt-6 rounded-full font-label tracking-widest uppercase",
                    style: { background: "#F4A623", color: "#0A2E1A" },
                    onClick: () => setMobileFilterOpen(false),
                    "data-ocid": "availability.apply_filters_button",
                    children: [
                      "Show Results (",
                      totalBatches,
                      ")"
                    ]
                  }
                )
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  AvailabilityDashboard as default
};
