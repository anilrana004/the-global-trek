import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, e as useComposedRefs, f as cn, u as useParams, n as useNavigate, a as Mountain, M as MapPin, B as Button } from "./index-BBTrFTBe.js";
import { B as Badge } from "./badge-CJwTKBSh.js";
import { I as Input } from "./input-Ck0AKkZ2.js";
import { a as useControllableState, P as Primitive, b as composeEventHandlers, c as createContextScope } from "./index-CrXichEr.js";
import { R as Root, I as Item, c as createRovingFocusGroupScope } from "./index-D6OHrg2m.js";
import { u as useDirection } from "./index-BkidHmmt.js";
import { a as usePrevious, u as useSize } from "./index-DTH3kros.js";
import { P as Presence } from "./index-BqRH8AsL.js";
import { C as Clock } from "./clock-CZ4FlYUV.js";
import { T as TrendingUp } from "./trending-up-B6L0Gg4b.js";
import { C as CircleCheckBig } from "./circle-check-big-BUgPA5Mu.js";
import { C as CreditCard } from "./credit-card-C8spIcpC.js";
import { L as Lock } from "./lock-KpezPfP7.js";
import { S as Shield } from "./shield-LxBVxM2z.js";
import { C as ChevronRight } from "./chevron-right-BS-1H6f5.js";
import "./index-IWxBNSnd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadio,
      name,
      checked = false,
      required,
      disabled,
      value = "on",
      onCheck,
      form,
      ...radioProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioProvider, { scope: __scopeRadio, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": checked,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...radioProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            if (!checked) onCheck == null ? void 0 : onCheck();
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadioBubbleInput,
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
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.checked, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef
      }
    ) });
  }
);
RadioIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var RadioBubbleInput = reactExports.forwardRef(
  ({
    __scopeRadio,
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
      Primitive.input,
      {
        type: "radio",
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
RadioBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext] = createContextScope(RADIO_GROUP_NAME, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadioGroup,
      name,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      orientation,
      dir,
      loop = true,
      onValueChange,
      ...groupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? null,
      onChange: onValueChange,
      caller: RADIO_GROUP_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RadioGroupProvider,
      {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.div,
              {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: forwardedRef
              }
            )
          }
        )
      }
    );
  }
);
RadioGroup$1.displayName = RADIO_GROUP_NAME;
var ITEM_NAME = "RadioGroupItem";
var RadioGroupItem$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext(ITEM_NAME, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      const handleKeyDown = (event) => {
        if (ARROW_KEYS.includes(event.key)) {
          isArrowKeyPressedRef.current = true;
        }
      };
      const handleKeyUp = () => isArrowKeyPressedRef.current = false;
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      };
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Radio,
          {
            disabled: isDisabled,
            required: context.required,
            checked,
            ...radioScope,
            ...itemProps,
            name: context.name,
            ref: composedRefs,
            onCheck: () => context.onValueChange(itemProps.value),
            onKeyDown: composeEventHandlers((event) => {
              if (event.key === "Enter") event.preventDefault();
            }),
            onFocus: composeEventHandlers(itemProps.onFocus, () => {
              var _a;
              if (isArrowKeyPressedRef.current) (_a = ref.current) == null ? void 0 : _a.click();
            })
          }
        )
      }
    );
  }
);
RadioGroupItem$1.displayName = ITEM_NAME;
var INDICATOR_NAME2 = "RadioGroupIndicator";
var RadioGroupIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
  }
);
RadioGroupIndicator.displayName = INDICATOR_NAME2;
var Root2 = RadioGroup$1;
var Item2 = RadioGroupItem$1;
var Indicator = RadioGroupIndicator;
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item2,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const STEPS = ["Batch", "Details", "Add-ons", "Pay"];
function BookingProgress({ current }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0 justify-center py-6", children: STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-mono border-2 transition-colors ${i < current ? "bg-[var(--gt-green-700)] border-[var(--gt-green-700)] text-white" : i === current ? "bg-[var(--gt-green-800)] border-[var(--gt-green-800)] text-white" : "bg-transparent border-[var(--gt-gray-400)] text-[var(--gt-gray-600)]"}`,
          children: i < current ? "✓" : i + 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `text-xs font-mono ${i <= current ? "text-[var(--gt-green-700)] font-semibold" : "text-[var(--gt-gray-600)]"}`,
          children: step
        }
      )
    ] }),
    i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-0.5 w-16 mx-1 mb-5 ${i < current ? "bg-[var(--gt-green-700)]" : "bg-[var(--gt-gray-200)]"}`
      }
    )
  ] }, step)) });
}
const COUPONS = {
  TREK10: 0.1,
  FIRSTTIME: 0.15,
  SUMMER2026: 0.12
};
const BASE_AMOUNT = 17e3;
const ADDON_AMOUNT = 4700;
const GST_RATE = 0.05;
function Payment() {
  const { trekSlug } = useParams({ from: "/booking/$trekSlug/payment" });
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = reactExports.useState("");
  const [appliedCoupon, setAppliedCoupon] = reactExports.useState(null);
  const [couponError, setCouponError] = reactExports.useState("");
  const [paymentSplit, setPaymentSplit] = reactExports.useState("full");
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  const subtotal = BASE_AMOUNT + ADDON_AMOUNT;
  const discountAmt = appliedCoupon ? Math.round(subtotal * appliedCoupon.discount) : 0;
  const afterDiscount = subtotal - discountAmt;
  const gst = Math.round(afterDiscount * GST_RATE);
  const fullTotal = afterDiscount + gst;
  const partialAmount = Math.round(fullTotal * 0.3);
  const emiAmount = Math.round(fullTotal / 3);
  const payNow = paymentSplit === "full" ? fullTotal : paymentSplit === "partial" ? partialAmount : emiAmount;
  function applyCoupon() {
    const key = couponCode.trim().toUpperCase();
    if (COUPONS[key]) {
      setAppliedCoupon({ code: key, discount: COUPONS[key] });
      setCouponError("");
    } else {
      setCouponError(
        "Invalid coupon code. Try TREK10, FIRSTTIME, or SUMMER2026."
      );
      setAppliedCoupon(null);
    }
  }
  function handlePayment() {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      void navigate({
        to: "/booking/confirmation/$id",
        params: { id: "GT-2026-KK-08547" }
      });
    }, 2e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--gt-green-50)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-20 bg-white border-b border-[var(--gt-green-100)] shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "w-4 h-4 text-[var(--gt-green-700)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold font-display text-[var(--gt-green-900)] text-sm", children: [
        trekSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        " ",
        "Trek"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[var(--gt-gray-600)] flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
        "Dec 20–24, 2026"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[var(--gt-gray-600)] flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
        "5 Days / 4 Nights"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[var(--gt-gray-600)] flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3" }),
        "3,810m"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "secondary",
          className: "bg-[var(--gt-green-100)] text-[var(--gt-green-800)] font-mono text-xs",
          children: "2 Trekkers"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookingProgress, { current: 3 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-[var(--gt-green-900)]", children: "Review & Payment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--gt-gray-600)] text-sm mt-1", children: "Almost there! Review your order and complete your booking." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5 space-y-4",
              "data-ocid": "payment.order_summary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-[var(--gt-green-900)]", children: "Order Summary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
                  [
                    {
                      label: "2× Kedarkantha Trek Base Price",
                      amount: BASE_AMOUNT
                    },
                    { label: "2× Pickup — Dehradun Clock Tower", amount: 2400 },
                    { label: "2× Essential Gear Kit", amount: 1300 },
                    { label: "2× Trek Insurance", amount: 1e3 }
                  ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-gray-600)]", children: row.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                      "₹",
                      row.amount.toLocaleString("en-IN")
                    ] })
                  ] }, row.label)),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[var(--gt-gray-100)] pt-3 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[var(--gt-gray-600)]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "₹",
                        subtotal.toLocaleString("en-IN")
                      ] })
                    ] }),
                    discountAmt > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[var(--gt-green-700)] font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Discount (",
                        appliedCoupon == null ? void 0 : appliedCoupon.code,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "−₹",
                        discountAmt.toLocaleString("en-IN")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[var(--gt-gray-600)]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GST (5%)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "₹",
                        gst.toLocaleString("en-IN")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-[var(--gt-green-900)] text-base border-t border-[var(--gt-gray-200)] pt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "₹",
                        fullTotal.toLocaleString("en-IN")
                      ] })
                    ] })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5",
              "data-ocid": "payment.coupon_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold font-display text-[var(--gt-green-900)] mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4" }),
                  "Apply Coupon Code"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: couponCode,
                      onChange: (e) => setCouponCode(e.target.value),
                      onKeyDown: (e) => e.key === "Enter" && applyCoupon(),
                      placeholder: "e.g. TREK10",
                      className: "uppercase font-mono border-[var(--gt-gray-200)] focus:border-[var(--gt-green-700)]",
                      "data-ocid": "payment.coupon_input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      onClick: applyCoupon,
                      variant: "outline",
                      className: "border-[var(--gt-green-700)] text-[var(--gt-green-700)] hover:bg-[var(--gt-green-50)] font-mono",
                      "data-ocid": "payment.apply_coupon_button",
                      children: "Apply"
                    }
                  )
                ] }),
                couponError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs text-[var(--gt-red)] mt-2 flex items-center gap-1",
                    "data-ocid": "payment.coupon_error",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚠" }),
                      couponError
                    ]
                  }
                ),
                appliedCoupon && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-sm text-[var(--gt-green-700)] font-semibold mt-2 flex items-center gap-1",
                    "data-ocid": "payment.coupon_success",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
                      " ",
                      appliedCoupon.code,
                      " ",
                      "applied — ",
                      Math.round(appliedCoupon.discount * 100),
                      "% off!"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--gt-gray-400)] mt-2", children: "Try: TREK10 · FIRSTTIME · SUMMER2026" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5",
              "data-ocid": "payment.split_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold font-display text-[var(--gt-green-900)] mb-4", children: "Payment Options" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  RadioGroup,
                  {
                    value: paymentSplit,
                    onValueChange: (v) => setPaymentSplit(v),
                    className: "space-y-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "pay-full",
                          className: `flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${paymentSplit === "full" ? "border-[var(--gt-green-700)] bg-[var(--gt-green-50)]" : "border-[var(--gt-gray-200)] hover:border-[var(--gt-green-500)]"}`,
                          "data-ocid": "payment.full_option",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              RadioGroupItem,
                              {
                                value: "full",
                                id: "pay-full",
                                className: "mt-0.5 border-[var(--gt-green-700)] text-[var(--gt-green-700)]"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-[var(--gt-gray-900)]", children: [
                                "Pay Full Now — ₹",
                                fullTotal.toLocaleString("en-IN")
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--gt-gray-600)] mt-0.5", children: "Confirmed booking. Nothing due at base camp." })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "pay-partial",
                          className: `flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${paymentSplit === "partial" ? "border-[var(--gt-green-700)] bg-[var(--gt-green-50)]" : "border-[var(--gt-gray-200)] hover:border-[var(--gt-green-500)]"}`,
                          "data-ocid": "payment.partial_option",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              RadioGroupItem,
                              {
                                value: "partial",
                                id: "pay-partial",
                                className: "mt-0.5 border-[var(--gt-green-700)] text-[var(--gt-green-700)]"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-[var(--gt-gray-900)]", children: [
                                "Pay 30% Now — ₹",
                                partialAmount.toLocaleString("en-IN")
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-[var(--gt-gray-600)] mt-0.5", children: [
                                "Rest (₹",
                                (fullTotal - partialAmount).toLocaleString("en-IN"),
                                ") due at base camp."
                              ] })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "pay-emi",
                          className: `flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${paymentSplit === "emi" ? "border-[var(--gt-green-700)] bg-[var(--gt-green-50)]" : "border-[var(--gt-gray-200)] hover:border-[var(--gt-green-500)]"}`,
                          "data-ocid": "payment.emi_option",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              RadioGroupItem,
                              {
                                value: "emi",
                                id: "pay-emi",
                                className: "mt-0.5 border-[var(--gt-green-700)] text-[var(--gt-green-700)]"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-[var(--gt-gray-900)]", children: [
                                "EMI — 3 months @ ₹",
                                emiAmount.toLocaleString("en-IN"),
                                "/month"
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--gt-gray-600)] mt-0.5", children: "0% interest on select HDFC/ICICI cards." })
                            ] })
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-white rounded-2xl border border-[var(--gt-gray-200)] p-5 space-y-4 sticky top-20",
              "data-ocid": "payment.checkout_card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[var(--gt-gray-600)] font-mono", children: "Amount to Pay Now" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold font-display text-[var(--gt-green-900)] mt-1", children: [
                    "₹",
                    payNow.toLocaleString("en-IN")
                  ] }),
                  paymentSplit !== "full" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-[var(--gt-gray-400)] mt-1", children: [
                    "of ₹",
                    fullTotal.toLocaleString("en-IN"),
                    " total"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex flex-wrap justify-center gap-2",
                    "data-ocid": "payment.method_icons",
                    children: ["UPI", "Card", "NetBanking", "Wallets", "EMI"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "px-2.5 py-1 rounded-full text-xs font-mono bg-[var(--gt-gray-100)] text-[var(--gt-gray-600)] border border-[var(--gt-gray-200)]",
                        children: m
                      },
                      m
                    ))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: handlePayment,
                    disabled: isProcessing,
                    className: "w-full bg-[var(--gt-green-800)] hover:bg-[var(--gt-green-700)] text-white font-bold font-mono py-4 text-base rounded-xl gap-2 transition-all",
                    "data-ocid": "payment.razorpay_button",
                    children: isProcessing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" }),
                      "Processing..."
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-5 h-5" }),
                      "Pay ₹",
                      payNow.toLocaleString("en-IN"),
                      " via Razorpay"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "grid grid-cols-2 gap-2",
                    "data-ocid": "payment.trust_indicators",
                    children: [
                      { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" }), label: "256-bit SSL" },
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3 h-3" }),
                        label: "PCI-DSS Level 1"
                      },
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3" }),
                        label: "Razorpay Secured"
                      },
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-3 h-3" }),
                        label: "Instant Email"
                      }
                    ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-1.5 text-xs text-[var(--gt-gray-600)] bg-[var(--gt-gray-50)] rounded-lg px-2 py-1.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gt-green-700)]", children: t.icon }),
                          t.label
                        ]
                      },
                      t.label
                    ))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-[var(--gt-gray-400)]", children: [
                  "By paying, you agree to our",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/terms", className: "underline", children: "Terms" }),
                  " ",
                  "and",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/cancellation-policy", className: "underline", children: "Cancellation Policy" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[var(--gt-green-50)] rounded-xl border border-[var(--gt-green-100)] p-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-[var(--gt-green-900)] mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
              "Need help?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[var(--gt-gray-600)]", children: [
              "Call",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[var(--gt-green-700)]", children: "+91-98765-43210" }),
              " ",
              "or",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://wa.me/919876543210",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-[var(--gt-green-700)] underline ml-1",
                  "data-ocid": "payment.whatsapp_link",
                  children: "WhatsApp us"
                }
              ),
              " ",
              "for help."
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Payment as default
};
