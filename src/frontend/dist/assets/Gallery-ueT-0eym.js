import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, u as useComposedRefs, X, d as cn, o, w as vt, e as useActor, q as useQueryClient, s as useMutation, B as Button, f as createActor, I as Instagram } from "./index-vYOW-QfD.js";
import { u as useControllableState, P as Primitive, c as composeEventHandlers, a as createContextScope, d as createSlot, e as createContext2 } from "./index-Gp0GX1_L.js";
import { u as useId } from "./index-nGlcEp0j.js";
import { P as Portal$1, h as hideOthers, R as ReactRemoveScroll, u as useFocusGuards, F as FocusScope, D as DismissableLayer } from "./Combination-ZlVejo0s.js";
import { P as Presence } from "./index-C1krj90m.js";
import { I as Input } from "./input-CgB5bWX1.js";
import { L as Label } from "./label-D7RL7BJP.js";
import { T as Textarea } from "./textarea-Cn03-BzO.js";
import { C as Camera } from "./camera-wsqr0FH7.js";
import { C as CircleCheckBig } from "./circle-check-big-0ZnzuCxO.js";
import { L as LoaderCircle } from "./loader-circle-C1SQwfmc.js";
import { C as ChevronRight } from "./chevron-right--g-LsED4.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
var DIALOG_NAME = "Dialog";
var [createDialogContext] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog$1 = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog$1.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
  forceMount: void 0
});
var DialogPortal$1 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopeDialog, forceMount, children: reactExports.Children.map(children, (child) => /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, container, children: child }) })) });
};
DialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay$1.displayName = OVERLAY_NAME;
var Slot = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent$1.displayName = CONTENT_NAME;
var DialogContentModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a, _b;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  reactExports.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle) console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  reactExports.useEffect(() => {
    var _a;
    const describedById = (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root = Dialog$1;
var Portal = DialogPortal$1;
var Overlay = DialogOverlay$1;
var Content = DialogContent$1;
var Close = DialogClose;
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
var jt = (n) => {
  switch (n) {
    case "success":
      return ee;
    case "info":
      return ae;
    case "warning":
      return oe;
    case "error":
      return se;
    default:
      return null;
  }
}, te = Array(12).fill(0), Yt = ({ visible: n, className: e }) => o.createElement("div", { className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "), "data-visible": n }, o.createElement("div", { className: "sonner-spinner" }, te.map((t, a) => o.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a}` })))), ee = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), oe = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), ae = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), se = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Ot = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, o.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), o.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));
var Ft = () => {
  let [n, e] = o.useState(document.hidden);
  return o.useEffect(() => {
    let t = () => {
      e(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), n;
};
var bt = 1, yt = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    });
    this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    };
    this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    };
    this.create = (e) => {
      var S;
      let { message: t, ...a } = e, u = typeof (e == null ? void 0 : e.id) == "number" || ((S = e.id) == null ? void 0 : S.length) > 0 ? e.id : bt++, f = this.toasts.find((g) => g.id === u), w = e.dismissible === void 0 ? true : e.dismissible;
      return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), f ? this.toasts = this.toasts.map((g) => g.id === u ? (this.publish({ ...g, ...e, id: u, title: t }), { ...g, ...e, id: u, dismissible: w, title: t }) : g) : this.addToast({ title: t, ...a, dismissible: w, id: u }), u;
    };
    this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: true })), e);
    this.message = (e, t) => this.create({ ...t, message: e });
    this.error = (e, t) => this.create({ ...t, message: e, type: "error" });
    this.success = (e, t) => this.create({ ...t, type: "success", message: e });
    this.info = (e, t) => this.create({ ...t, type: "info", message: e });
    this.warning = (e, t) => this.create({ ...t, type: "warning", message: e });
    this.loading = (e, t) => this.create({ ...t, type: "loading", message: e });
    this.promise = (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let u = e instanceof Promise ? e : e(), f = a !== void 0, w, S = u.then(async (i) => {
        if (w = ["resolve", i], o.isValidElement(i)) f = false, this.create({ id: a, type: "default", message: i });
        else if (ie(i) && !i.ok) {
          f = false;
          let T = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error, F = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
          this.create({ id: a, type: "error", message: T, description: F });
        } else if (t.success !== void 0) {
          f = false;
          let T = typeof t.success == "function" ? await t.success(i) : t.success, F = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "success", message: T, description: F });
        }
      }).catch(async (i) => {
        if (w = ["reject", i], t.error !== void 0) {
          f = false;
          let D = typeof t.error == "function" ? await t.error(i) : t.error, T = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "error", message: D, description: T });
        }
      }).finally(() => {
        var i;
        f && (this.dismiss(a), a = void 0), (i = t.finally) == null || i.call(t);
      }), g = () => new Promise((i, D) => S.then(() => w[0] === "reject" ? D(w[1]) : i(w[1])).catch(D));
      return typeof a != "string" && typeof a != "number" ? { unwrap: g } : Object.assign(a, { unwrap: g });
    };
    this.custom = (e, t) => {
      let a = (t == null ? void 0 : t.id) || bt++;
      return this.create({ jsx: e(a), id: a, ...t }), a;
    };
    this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, v = new yt(), ne = (n, e) => {
  let t = (e == null ? void 0 : e.id) || bt++;
  return v.addToast({ title: n, ...e, id: t }), t;
}, ie = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", le = ne, ce = () => v.toasts, de = () => v.getActiveToasts(), ue = Object.assign(le, { success: v.success, info: v.info, warning: v.warning, error: v.error, custom: v.custom, message: v.message, promise: v.promise, dismiss: v.dismiss, loading: v.loading }, { getHistory: ce, getToasts: de });
function wt(n, { insertAt: e } = {}) {
  if (typeof document == "undefined") return;
  let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(document.createTextNode(n));
}
wt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function tt(n) {
  return n.label !== void 0;
}
var pe = 3, me = "32px", ge = "16px", Wt = 4e3, he = 356, be = 14, ye = 20, we = 200;
function M(...n) {
  return n.filter(Boolean).join(" ");
}
function xe(n) {
  let [e, t] = n.split("-"), a = [];
  return e && a.push(e), t && a.push(t), a;
}
var ve = (n) => {
  var Dt, Pt, Nt, Bt, Ct, kt, It, Mt, Ht, At, Lt;
  let { invert: e, toast: t, unstyled: a, interacting: u, setHeights: f, visibleToasts: w, heights: S, index: g, toasts: i, expanded: D, removeToast: T, defaultRichColors: F, closeButton: et, style: ut, cancelButtonStyle: ft, actionButtonStyle: l, className: ot = "", descriptionClassName: at = "", duration: X2, position: st, gap: pt, loadingIcon: rt, expandByDefault: B, classNames: s, icons: P, closeButtonAriaLabel: nt = "Close toast", pauseWhenPageIsHidden: it } = n, [Y, C] = o.useState(null), [lt, J] = o.useState(null), [W, H] = o.useState(false), [A, mt] = o.useState(false), [L, z] = o.useState(false), [ct, d] = o.useState(false), [h, y] = o.useState(false), [R, j] = o.useState(0), [p, _] = o.useState(0), O = o.useRef(t.duration || X2 || Wt), G = o.useRef(null), k = o.useRef(null), Vt = g === 0, Ut = g + 1 <= w, N = t.type, V = t.dismissible !== false, Kt = t.className || "", Xt = t.descriptionClassName || "", dt = o.useMemo(() => S.findIndex((r) => r.toastId === t.id) || 0, [S, t.id]), Jt = o.useMemo(() => {
    var r;
    return (r = t.closeButton) != null ? r : et;
  }, [t.closeButton, et]), Tt = o.useMemo(() => t.duration || X2 || Wt, [t.duration, X2]), gt = o.useRef(0), U = o.useRef(0), St = o.useRef(0), K = o.useRef(null), [Gt, Qt] = st.split("-"), Rt = o.useMemo(() => S.reduce((r, m, c) => c >= dt ? r : r + m.height, 0), [S, dt]), Et = Ft(), qt = t.invert || e, ht = N === "loading";
  U.current = o.useMemo(() => dt * pt + Rt, [dt, Rt]), o.useEffect(() => {
    O.current = Tt;
  }, [Tt]), o.useEffect(() => {
    H(true);
  }, []), o.useEffect(() => {
    let r = k.current;
    if (r) {
      let m = r.getBoundingClientRect().height;
      return _(m), f((c) => [{ toastId: t.id, height: m, position: t.position }, ...c]), () => f((c) => c.filter((b) => b.toastId !== t.id));
    }
  }, [f, t.id]), o.useLayoutEffect(() => {
    if (!W) return;
    let r = k.current, m = r.style.height;
    r.style.height = "auto";
    let c = r.getBoundingClientRect().height;
    r.style.height = m, _(c), f((b) => b.find((x) => x.toastId === t.id) ? b.map((x) => x.toastId === t.id ? { ...x, height: c } : x) : [{ toastId: t.id, height: c, position: t.position }, ...b]);
  }, [W, t.title, t.description, f, t.id]);
  let $ = o.useCallback(() => {
    mt(true), j(U.current), f((r) => r.filter((m) => m.toastId !== t.id)), setTimeout(() => {
      T(t);
    }, we);
  }, [t, T, f, U]);
  o.useEffect(() => {
    if (t.promise && N === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
    let r;
    return D || u || it && Et ? (() => {
      if (St.current < gt.current) {
        let b = (/* @__PURE__ */ new Date()).getTime() - gt.current;
        O.current = O.current - b;
      }
      St.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      O.current !== 1 / 0 && (gt.current = (/* @__PURE__ */ new Date()).getTime(), r = setTimeout(() => {
        var b;
        (b = t.onAutoClose) == null || b.call(t, t), $();
      }, O.current));
    })(), () => clearTimeout(r);
  }, [D, u, t, N, it, Et, $]), o.useEffect(() => {
    t.delete && $();
  }, [$, t.delete]);
  function Zt() {
    var r, m, c;
    return P != null && P.loading ? o.createElement("div", { className: M(s == null ? void 0 : s.loader, (r = t == null ? void 0 : t.classNames) == null ? void 0 : r.loader, "sonner-loader"), "data-visible": N === "loading" }, P.loading) : rt ? o.createElement("div", { className: M(s == null ? void 0 : s.loader, (m = t == null ? void 0 : t.classNames) == null ? void 0 : m.loader, "sonner-loader"), "data-visible": N === "loading" }, rt) : o.createElement(Yt, { className: M(s == null ? void 0 : s.loader, (c = t == null ? void 0 : t.classNames) == null ? void 0 : c.loader), visible: N === "loading" });
  }
  return o.createElement("li", { tabIndex: 0, ref: k, className: M(ot, Kt, s == null ? void 0 : s.toast, (Dt = t == null ? void 0 : t.classNames) == null ? void 0 : Dt.toast, s == null ? void 0 : s.default, s == null ? void 0 : s[N], (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt[N]), "data-sonner-toast": "", "data-rich-colors": (Nt = t.richColors) != null ? Nt : F, "data-styled": !(t.jsx || t.unstyled || a), "data-mounted": W, "data-promise": !!t.promise, "data-swiped": h, "data-removed": A, "data-visible": Ut, "data-y-position": Gt, "data-x-position": Qt, "data-index": g, "data-front": Vt, "data-swiping": L, "data-dismissible": V, "data-type": N, "data-invert": qt, "data-swipe-out": ct, "data-swipe-direction": lt, "data-expanded": !!(D || B && W), style: { "--index": g, "--toasts-before": g, "--z-index": i.length - g, "--offset": `${A ? R : U.current}px`, "--initial-height": B ? "auto" : `${p}px`, ...ut, ...t.style }, onDragEnd: () => {
    z(false), C(null), K.current = null;
  }, onPointerDown: (r) => {
    ht || !V || (G.current = /* @__PURE__ */ new Date(), j(U.current), r.target.setPointerCapture(r.pointerId), r.target.tagName !== "BUTTON" && (z(true), K.current = { x: r.clientX, y: r.clientY }));
  }, onPointerUp: () => {
    var x, Q, q, Z;
    if (ct || !V) return;
    K.current = null;
    let r = Number(((x = k.current) == null ? void 0 : x.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), m = Number(((Q = k.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), c = (/* @__PURE__ */ new Date()).getTime() - ((q = G.current) == null ? void 0 : q.getTime()), b = Y === "x" ? r : m, I = Math.abs(b) / c;
    if (Math.abs(b) >= ye || I > 0.11) {
      j(U.current), (Z = t.onDismiss) == null || Z.call(t, t), J(Y === "x" ? r > 0 ? "right" : "left" : m > 0 ? "down" : "up"), $(), d(true), y(false);
      return;
    }
    z(false), C(null);
  }, onPointerMove: (r) => {
    var Q, q, Z, zt;
    if (!K.current || !V || ((Q = window.getSelection()) == null ? void 0 : Q.toString().length) > 0) return;
    let c = r.clientY - K.current.y, b = r.clientX - K.current.x, I = (q = n.swipeDirections) != null ? q : xe(st);
    !Y && (Math.abs(b) > 1 || Math.abs(c) > 1) && C(Math.abs(b) > Math.abs(c) ? "x" : "y");
    let x = { x: 0, y: 0 };
    Y === "y" ? (I.includes("top") || I.includes("bottom")) && (I.includes("top") && c < 0 || I.includes("bottom") && c > 0) && (x.y = c) : Y === "x" && (I.includes("left") || I.includes("right")) && (I.includes("left") && b < 0 || I.includes("right") && b > 0) && (x.x = b), (Math.abs(x.x) > 0 || Math.abs(x.y) > 0) && y(true), (Z = k.current) == null || Z.style.setProperty("--swipe-amount-x", `${x.x}px`), (zt = k.current) == null || zt.style.setProperty("--swipe-amount-y", `${x.y}px`);
  } }, Jt && !t.jsx ? o.createElement("button", { "aria-label": nt, "data-disabled": ht, "data-close-button": true, onClick: ht || !V ? () => {
  } : () => {
    var r;
    $(), (r = t.onDismiss) == null || r.call(t, t);
  }, className: M(s == null ? void 0 : s.closeButton, (Bt = t == null ? void 0 : t.classNames) == null ? void 0 : Bt.closeButton) }, (Ct = P == null ? void 0 : P.close) != null ? Ct : Ot) : null, t.jsx || reactExports.isValidElement(t.title) ? t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title : o.createElement(o.Fragment, null, N || t.icon || t.promise ? o.createElement("div", { "data-icon": "", className: M(s == null ? void 0 : s.icon, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || Zt() : null, t.type !== "loading" ? t.icon || (P == null ? void 0 : P[N]) || jt(N) : null) : null, o.createElement("div", { "data-content": "", className: M(s == null ? void 0 : s.content, (It = t == null ? void 0 : t.classNames) == null ? void 0 : It.content) }, o.createElement("div", { "data-title": "", className: M(s == null ? void 0 : s.title, (Mt = t == null ? void 0 : t.classNames) == null ? void 0 : Mt.title) }, typeof t.title == "function" ? t.title() : t.title), t.description ? o.createElement("div", { "data-description": "", className: M(at, Xt, s == null ? void 0 : s.description, (Ht = t == null ? void 0 : t.classNames) == null ? void 0 : Ht.description) }, typeof t.description == "function" ? t.description() : t.description) : null), reactExports.isValidElement(t.cancel) ? t.cancel : t.cancel && tt(t.cancel) ? o.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || ft, onClick: (r) => {
    var m, c;
    tt(t.cancel) && V && ((c = (m = t.cancel).onClick) == null || c.call(m, r), $());
  }, className: M(s == null ? void 0 : s.cancelButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.cancelButton) }, t.cancel.label) : null, reactExports.isValidElement(t.action) ? t.action : t.action && tt(t.action) ? o.createElement("button", { "data-button": true, "data-action": true, style: t.actionButtonStyle || l, onClick: (r) => {
    var m, c;
    tt(t.action) && ((c = (m = t.action).onClick) == null || c.call(m, r), !r.defaultPrevented && $());
  }, className: M(s == null ? void 0 : s.actionButton, (Lt = t == null ? void 0 : t.classNames) == null ? void 0 : Lt.actionButton) }, t.action.label) : null));
};
function _t() {
  if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function Te(n, e) {
  let t = {};
  return [n, e].forEach((a, u) => {
    let f = u === 1, w = f ? "--mobile-offset" : "--offset", S = f ? ge : me;
    function g(i) {
      ["top", "right", "bottom", "left"].forEach((D) => {
        t[`${w}-${D}`] = typeof i == "number" ? `${i}px` : i;
      });
    }
    typeof a == "number" || typeof a == "string" ? g(a) : typeof a == "object" ? ["top", "right", "bottom", "left"].forEach((i) => {
      a[i] === void 0 ? t[`${w}-${i}`] = S : t[`${w}-${i}`] = typeof a[i] == "number" ? `${a[i]}px` : a[i];
    }) : g(S);
  }), t;
}
reactExports.forwardRef(function(e, t) {
  let { invert: a, position: u = "bottom-right", hotkey: f = ["altKey", "KeyT"], expand: w, closeButton: S, className: g, offset: i, mobileOffset: D, theme: T = "light", richColors: F, duration: et, style: ut, visibleToasts: ft = pe, toastOptions: l, dir: ot = _t(), gap: at = be, loadingIcon: X2, icons: st, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: rt } = e, [B, s] = o.useState([]), P = o.useMemo(() => Array.from(new Set([u].concat(B.filter((d) => d.position).map((d) => d.position)))), [B, u]), [nt, it] = o.useState([]), [Y, C] = o.useState(false), [lt, J] = o.useState(false), [W, H] = o.useState(T !== "system" ? T : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = o.useRef(null), mt = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = o.useRef(null), z = o.useRef(false), ct = o.useCallback((d) => {
    s((h) => {
      var y;
      return (y = h.find((R) => R.id === d.id)) != null && y.delete || v.dismiss(d.id), h.filter(({ id: R }) => R !== d.id);
    });
  }, []);
  return o.useEffect(() => v.subscribe((d) => {
    if (d.dismiss) {
      s((h) => h.map((y) => y.id === d.id ? { ...y, delete: true } : y));
      return;
    }
    setTimeout(() => {
      vt.flushSync(() => {
        s((h) => {
          let y = h.findIndex((R) => R.id === d.id);
          return y !== -1 ? [...h.slice(0, y), { ...h[y], ...d }, ...h.slice(y + 1)] : [d, ...h];
        });
      });
    });
  }), []), o.useEffect(() => {
    if (T !== "system") {
      H(T);
      return;
    }
    if (T === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window == "undefined") return;
    let d = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      d.addEventListener("change", ({ matches: h }) => {
        H(h ? "dark" : "light");
      });
    } catch (h) {
      d.addListener(({ matches: y }) => {
        try {
          H(y ? "dark" : "light");
        } catch (R) {
          console.error(R);
        }
      });
    }
  }, [T]), o.useEffect(() => {
    B.length <= 1 && C(false);
  }, [B]), o.useEffect(() => {
    let d = (h) => {
      var R, j;
      f.every((p) => h[p] || h.code === p) && (C(true), (R = A.current) == null || R.focus()), h.code === "Escape" && (document.activeElement === A.current || (j = A.current) != null && j.contains(document.activeElement)) && C(false);
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [f]), o.useEffect(() => {
    if (A.current) return () => {
      L.current && (L.current.focus({ preventScroll: true }), L.current = null, z.current = false);
    };
  }, [A.current]), o.createElement("section", { ref: t, "aria-label": `${pt} ${mt}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, P.map((d, h) => {
    var j;
    let [y, R] = d.split("-");
    return B.length ? o.createElement("ol", { key: d, dir: ot === "auto" ? _t() : ot, tabIndex: -1, ref: A, className: g, "data-sonner-toaster": true, "data-theme": W, "data-y-position": y, "data-lifted": Y && B.length > 1 && !w, "data-x-position": R, style: { "--front-toast-height": `${((j = nt[0]) == null ? void 0 : j.height) || 0}px`, "--width": `${he}px`, "--gap": `${at}px`, ...ut, ...Te(i, D) }, onBlur: (p) => {
      z.current && !p.currentTarget.contains(p.relatedTarget) && (z.current = false, L.current && (L.current.focus({ preventScroll: true }), L.current = null));
    }, onFocus: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || z.current || (z.current = true, L.current = p.relatedTarget);
    }, onMouseEnter: () => C(true), onMouseMove: () => C(true), onMouseLeave: () => {
      lt || C(false);
    }, onDragEnd: () => C(false), onPointerDown: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || J(true);
    }, onPointerUp: () => J(false) }, B.filter((p) => !p.position && h === 0 || p.position === d).map((p, _) => {
      var O, G;
      return o.createElement(ve, { key: p.id, icons: st, index: _, toast: p, defaultRichColors: F, duration: (O = l == null ? void 0 : l.duration) != null ? O : et, className: l == null ? void 0 : l.className, descriptionClassName: l == null ? void 0 : l.descriptionClassName, invert: a, visibleToasts: ft, closeButton: (G = l == null ? void 0 : l.closeButton) != null ? G : S, interacting: lt, position: d, style: l == null ? void 0 : l.style, unstyled: l == null ? void 0 : l.unstyled, classNames: l == null ? void 0 : l.classNames, cancelButtonStyle: l == null ? void 0 : l.cancelButtonStyle, actionButtonStyle: l == null ? void 0 : l.actionButtonStyle, removeToast: ct, toasts: B.filter((k) => k.position == p.position), heights: nt.filter((k) => k.position == p.position), setHeights: it, expandByDefault: w, gap: at, loadingIcon: X2, expanded: Y, pauseWhenPageIsHidden: rt, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function PhotoUpload({
  trekSlug,
  trekName,
  onClose
}) {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const fileInputRef = reactExports.useRef(null);
  const [preview, setPreview] = reactExports.useState(null);
  const [fileName, setFileName] = reactExports.useState("");
  const [form, setForm] = reactExports.useState({
    uploaderName: "",
    uploaderEmail: "",
    caption: "",
    dateOfTrek: "",
    isProfilePhoto: false
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const mutation = useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitTrekPhoto(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["approvedPhotos"] });
      queryClient.invalidateQueries({ queryKey: ["approvedPhotosByTrek"] });
      setSubmitted(true);
    },
    onError: () => {
      ue.error("Failed to submit photo. Please try again.");
    }
  });
  const handleFileChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      ue.error("Please select an image file.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      ue.error("Image must be under 10MB.");
      return;
    }
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a2;
      return setPreview((_a2 = ev.target) == null ? void 0 : _a2.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!preview) {
      ue.error("Please select a photo first.");
      return;
    }
    if (!form.uploaderName.trim()) {
      ue.error("Please enter your name.");
      return;
    }
    if (!form.uploaderEmail.trim()) {
      ue.error("Please enter your email.");
      return;
    }
    if (!form.dateOfTrek) {
      ue.error("Please select when you trekked.");
      return;
    }
    const input = {
      uploaderName: form.uploaderName.trim(),
      uploaderEmail: form.uploaderEmail.trim(),
      caption: form.caption.trim(),
      dateOfTrek: form.dateOfTrek,
      trekSlug,
      storageUrl: preview,
      // In production: upload to object-storage first
      isProfilePhoto: form.isProfilePhoto
    };
    mutation.mutate(input);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      style: { background: "rgba(0,0,0,0.7)" },
      "data-ocid": "photo_upload.dialog",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-background rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl",
          style: { fontFamily: "'DM Sans', system-ui, sans-serif" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border sticky top-0 bg-background rounded-t-2xl z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 20, className: "text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-lg font-bold text-foreground",
                    style: { fontFamily: "'Playfair Display', Georgia, serif" },
                    children: "Share Your Trek Photo"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  "data-ocid": "photo_upload.close_button",
                  className: "w-8 h-8 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16, className: "text-foreground" })
                }
              )
            ] }),
            submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center justify-center px-8 py-16 text-center",
                "data-ocid": "photo_upload.success_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 56, className: "text-primary mb-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "text-2xl font-bold text-foreground mb-2",
                      style: { fontFamily: "'Playfair Display', Georgia, serif" },
                      children: "Photo Submitted!"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6 max-w-xs", children: "Thank you for sharing your journey! Your photo will appear in the Community Gallery after our team reviews it (usually within 24 hours)." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      onClick: onClose,
                      className: "bg-primary text-white",
                      "data-ocid": "photo_upload.confirm_button",
                      children: "Back to Gallery"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "block text-sm font-semibold text-foreground mb-2", children: "Your Photo *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var _a;
                      return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                    },
                    "data-ocid": "photo_upload.upload_button",
                    className: "w-full border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 py-8 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all",
                    "aria-label": "Click to upload photo",
                    children: preview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: preview,
                        alt: "Preview",
                        className: "max-h-40 rounded-lg object-cover"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 32, className: "text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-medium", children: "Click to upload your trek photo" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "JPG, PNG, WebP · Max 10MB" })
                    ] })
                  }
                ),
                fileName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                  "📎 ",
                  fileName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: fileInputRef,
                    type: "file",
                    accept: "image/*",
                    onChange: handleFileChange,
                    className: "hidden",
                    "aria-label": "Select photo file",
                    "data-ocid": "photo_upload.dropzone"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-lg bg-primary/5 border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-xs text-primary font-semibold uppercase tracking-wide",
                  style: { fontFamily: "Montserrat, sans-serif" },
                  children: [
                    "Trek: ",
                    trekName
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "uploaderName", className: "text-sm font-semibold", children: "Your Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "uploaderName",
                    placeholder: "e.g. Rahul Mehta",
                    value: form.uploaderName,
                    onChange: (e) => setForm({ ...form, uploaderName: e.target.value }),
                    className: "mt-1",
                    "data-ocid": "photo_upload.input",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "uploaderEmail", className: "text-sm font-semibold", children: "Email *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "uploaderEmail",
                    type: "email",
                    placeholder: "your@email.com",
                    value: form.uploaderEmail,
                    onChange: (e) => setForm({ ...form, uploaderEmail: e.target.value }),
                    className: "mt-1",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dateOfTrek", className: "text-sm font-semibold", children: "When did you trek? *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "dateOfTrek",
                    value: form.dateOfTrek,
                    onChange: (e) => setForm({ ...form, dateOfTrek: e.target.value }),
                    className: "mt-1 w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                    "data-ocid": "photo_upload.select",
                    required: true,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select month & year" }),
                      ["2026", "2025", "2024"].flatMap(
                        (y) => MONTHS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: `${m} ${y}`, children: [
                          m,
                          " ",
                          y
                        ] }, `${m}-${y}`))
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "caption", className: "text-sm font-semibold", children: [
                  "Caption",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "caption",
                    placeholder: "Share a line about this moment…",
                    value: form.caption,
                    onChange: (e) => setForm({ ...form, caption: e.target.value }),
                    className: "mt-1 resize-none",
                    rows: 2,
                    "data-ocid": "photo_upload.textarea"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "isProfilePhoto",
                    checked: form.isProfilePhoto,
                    onChange: (e) => setForm({ ...form, isProfilePhoto: e.target.checked }),
                    className: "rounded border-border",
                    "data-ocid": "photo_upload.checkbox"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "isProfilePhoto",
                    className: "text-sm cursor-pointer",
                    children: "Use as my profile photo on Global Trek"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "By submitting, you confirm this is your original photo and grant Global Trek permission to feature it on the website and social media." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: mutation.isPending,
                  className: "w-full bg-primary text-white py-3 font-bold",
                  "data-ocid": "photo_upload.submit_button",
                  children: mutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin mr-2" }),
                    "Submitting…"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 16, className: "mr-2" }),
                    "Submit Photo for Review"
                  ] })
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
const ROTATIONS = [-2, -1, 0, 1, 2, -3, 3, -1.5, 1.5, -2.5];
const galleryData = [
  // Uttarakhand (10)
  {
    id: 1,
    src: "https://source.unsplash.com/800x600/?kedarkantha,summit,snow,himalaya",
    alt: "Kedarkantha summit covered in snow at sunrise",
    trek: "Kedarkantha Trek",
    category: "uttarakhand",
    state: "Uttarakhand"
  },
  {
    id: 2,
    src: "https://source.unsplash.com/800x600/?chopta,tungnath,temple,winter",
    alt: "Tungnath temple in winter snow Uttarakhand Himalayas",
    trek: "Chopta Tungnath",
    category: "uttarakhand",
    state: "Uttarakhand"
  },
  {
    id: 3,
    src: "https://source.unsplash.com/800x600/?har-ki-dun,valley,meadow,himalaya",
    alt: "Har Ki Dun valley of gods green meadow Uttarakhand",
    trek: "Har Ki Dun",
    category: "uttarakhand",
    state: "Uttarakhand"
  },
  {
    id: 4,
    src: "https://source.unsplash.com/800x600/?valley,flowers,uttarakhand,bloom,himalaya",
    alt: "Valley of Flowers in full bloom Uttarakhand India",
    trek: "Valley of Flowers",
    category: "uttarakhand",
    state: "Uttarakhand"
  },
  {
    id: 5,
    src: "https://source.unsplash.com/800x600/?roopkund,lake,himalaya,glacial",
    alt: "Roopkund mystery glacial lake Uttarakhand Himalayas",
    trek: "Roopkund Trek",
    category: "uttarakhand",
    state: "Uttarakhand"
  },
  {
    id: 6,
    src: "https://source.unsplash.com/800x600/?brahmatal,lake,frozen,winter,snow",
    alt: "Brahmatal frozen lake in winter Uttarakhand",
    trek: "Brahmatal Trek",
    category: "uttarakhand",
    state: "Uttarakhand"
  },
  {
    id: 7,
    src: "https://source.unsplash.com/800x600/?kuari,pass,nanda,devi,himalaya",
    alt: "Nanda Devi peak view from Kuari Pass Uttarakhand",
    trek: "Kuari Pass",
    category: "uttarakhand",
    state: "Uttarakhand"
  },
  {
    id: 8,
    src: "https://source.unsplash.com/800x600/?phulara,ridge,himalaya,sunrise",
    alt: "Phulara Ridge sunrise walk Uttarakhand India",
    trek: "Phulara Ridge",
    category: "uttarakhand",
    state: "Uttarakhand"
  },
  {
    id: 9,
    src: "https://source.unsplash.com/800x600/?dayara,bugyal,alpine,meadow,himalaya",
    alt: "Dayara Bugyal alpine meadow Uttarakhand",
    trek: "Dayara Bugyal",
    category: "uttarakhand",
    state: "Uttarakhand"
  },
  {
    id: 10,
    src: "https://source.unsplash.com/800x600/?nag,tibba,camping,forest,himalaya",
    alt: "Nag Tibba camping forest Uttarakhand hills",
    trek: "Nag Tibba",
    category: "uttarakhand",
    state: "Uttarakhand"
  },
  // Himachal Pradesh (10)
  {
    id: 11,
    src: "https://source.unsplash.com/800x600/?hampta,pass,crossover,snow,spiti",
    alt: "Hampta Pass crossover into Spiti Valley Himachal Pradesh",
    trek: "Hampta Pass",
    category: "himachal",
    state: "Himachal Pradesh"
  },
  {
    id: 12,
    src: "https://source.unsplash.com/800x600/?sar,pass,parvati,valley,kasol",
    alt: "Sar Pass trek through Parvati Valley Himachal Pradesh",
    trek: "Sar Pass",
    category: "himachal",
    state: "Himachal Pradesh"
  },
  {
    id: 13,
    src: "https://source.unsplash.com/800x600/?kheerganga,hot,springs,parvati",
    alt: "Kheerganga hot springs Parvati Valley Himachal Pradesh",
    trek: "Kheerganga",
    category: "himachal",
    state: "Himachal Pradesh"
  },
  {
    id: 14,
    src: "https://source.unsplash.com/800x600/?triund,camping,dharamshala,dhauladhar",
    alt: "Triund camping with Dhauladhar range Himachal Pradesh",
    trek: "Triund",
    category: "himachal",
    state: "Himachal Pradesh"
  },
  {
    id: 15,
    src: "https://source.unsplash.com/800x600/?beas,kund,glacial,lake,manali",
    alt: "Beas Kund glacial lake near Manali Himachal Pradesh",
    trek: "Beas Kund",
    category: "himachal",
    state: "Himachal Pradesh"
  },
  {
    id: 16,
    src: "https://source.unsplash.com/800x600/?spiti,valley,monastery,mountains",
    alt: "Spiti Valley monastery high altitude Himachal Pradesh",
    trek: "Spiti Valley",
    category: "himachal",
    state: "Himachal Pradesh"
  },
  {
    id: 17,
    src: "https://source.unsplash.com/800x600/?kullu,manali,snow,peaks,himalaya",
    alt: "Kullu Manali snow peaks winter Himachal Pradesh",
    trek: "Kullu Valley",
    category: "himachal",
    state: "Himachal Pradesh"
  },
  {
    id: 18,
    src: "https://source.unsplash.com/800x600/?lahaul,spiti,barren,landscape,himalaya",
    alt: "Lahaul Spiti barren dramatic landscape Himachal",
    trek: "Lahaul Valley",
    category: "himachal",
    state: "Himachal Pradesh"
  },
  {
    id: 19,
    src: "https://source.unsplash.com/800x600/?pin,parvati,pass,high,altitude,trek",
    alt: "Pin Parvati Pass high altitude himalayan crossover",
    trek: "Pin Parvati Pass",
    category: "himachal",
    state: "Himachal Pradesh"
  },
  {
    id: 20,
    src: "https://source.unsplash.com/800x600/?chandratal,lake,moonlight,spiti",
    alt: "Chandratal lake moonlight reflection Spiti Himachal Pradesh",
    trek: "Chandratal Lake",
    category: "himachal",
    state: "Himachal Pradesh"
  },
  // Yatras (10)
  {
    id: 21,
    src: "https://source.unsplash.com/800x600/?kedarnath,temple,morning,mist,himalaya",
    alt: "Kedarnath temple at dawn shrouded in mist Uttarakhand",
    trek: "Kedarnath Yatra",
    category: "yatras",
    state: "Uttarakhand"
  },
  {
    id: 22,
    src: "https://source.unsplash.com/800x600/?badrinath,temple,garhwal,himalaya",
    alt: "Badrinath temple sacred Garhwal Himalayas Uttarakhand",
    trek: "Badrinath Dham",
    category: "yatras",
    state: "Uttarakhand"
  },
  {
    id: 23,
    src: "https://source.unsplash.com/800x600/?gangotri,temple,bhagirathi,glacier",
    alt: "Gangotri temple Bhagirathi river glacier Uttarakhand",
    trek: "Gangotri Dham",
    category: "yatras",
    state: "Uttarakhand"
  },
  {
    id: 24,
    src: "https://source.unsplash.com/800x600/?yamunotri,temple,garhwal,himalaya",
    alt: "Yamunotri temple source of Yamuna river Uttarakhand",
    trek: "Yamunotri Dham",
    category: "yatras",
    state: "Uttarakhand"
  },
  {
    id: 25,
    src: "https://source.unsplash.com/800x600/?aarti,ganga,haridwar,pilgrims,ritual",
    alt: "Ganga aarti Haridwar evening pilgrimage ritual",
    trek: "Char Dham Yatra",
    category: "yatras",
    state: "Uttarakhand"
  },
  {
    id: 26,
    src: "https://source.unsplash.com/800x600/?pilgrims,himalaya,yatra,mountain,shrine",
    alt: "Pilgrims on Himalayan yatra mountain shrine Uttarakhand",
    trek: "Panch Kedar",
    category: "yatras",
    state: "Uttarakhand"
  },
  {
    id: 27,
    src: "https://source.unsplash.com/800x600/?triyuginarayan,temple,shiva,wedding",
    alt: "Triyuginarayan temple Lord Shiva wedding site Uttarakhand",
    trek: "Panch Kedar",
    category: "yatras",
    state: "Uttarakhand"
  },
  {
    id: 28,
    src: "https://source.unsplash.com/800x600/?gaurikund,pool,pilgrims,kedarnath,base",
    alt: "Gaurikund thermal pool base of Kedarnath yatra",
    trek: "Kedarnath Yatra",
    category: "yatras",
    state: "Uttarakhand"
  },
  {
    id: 29,
    src: "https://source.unsplash.com/800x600/?char,dham,yatra,crowd,devotees,himalaya",
    alt: "Char Dham yatra devotees mountain pilgrimage Uttarakhand",
    trek: "Char Dham Yatra",
    category: "yatras",
    state: "Uttarakhand"
  },
  {
    id: 30,
    src: "https://source.unsplash.com/800x600/?mandir,himalaya,mountain,temple,sacred",
    alt: "Sacred Himalayan temple mountain shrine India",
    trek: "Do Dham Yatra",
    category: "yatras",
    state: "Uttarakhand"
  },
  // Wildlife (10)
  {
    id: 31,
    src: "https://source.unsplash.com/800x600/?snow,leopard,himalaya,wildlife",
    alt: "Snow leopard Himalayan wildlife Uttarakhand India",
    trek: "Wildlife Safari",
    category: "wildlife",
    state: "Uttarakhand"
  },
  {
    id: 32,
    src: "https://source.unsplash.com/800x600/?himalayan,monal,pheasant,bird,colorful",
    alt: "Himalayan monal pheasant colorful state bird Uttarakhand",
    trek: "Bird Watching",
    category: "wildlife",
    state: "Uttarakhand"
  },
  {
    id: 33,
    src: "https://source.unsplash.com/800x600/?red,panda,sikkim,himalaya,bamboo",
    alt: "Red panda bamboo forest eastern Himalayas India",
    trek: "Wildlife Encounter",
    category: "wildlife",
    state: "Sikkim"
  },
  {
    id: 34,
    src: "https://source.unsplash.com/800x600/?bharal,blue,sheep,himalaya,cliff",
    alt: "Bharal blue sheep on Himalayan cliff grazing India",
    trek: "High Altitude Wildlife",
    category: "wildlife",
    state: "Himachal Pradesh"
  },
  {
    id: 35,
    src: "https://source.unsplash.com/800x600/?himalayan,deer,forest,musk,deer",
    alt: "Musk deer dense Himalayan forest Uttarakhand India",
    trek: "Forest Trek",
    category: "wildlife",
    state: "Uttarakhand"
  },
  {
    id: 36,
    src: "https://source.unsplash.com/800x600/?golden,eagle,himalaya,raptor,soaring",
    alt: "Golden eagle soaring over Himalayan peaks India",
    trek: "Bird Watching",
    category: "wildlife",
    state: "Himachal Pradesh"
  },
  {
    id: 37,
    src: "https://source.unsplash.com/800x600/?himalayan,fox,wildlife,high,altitude",
    alt: "Himalayan fox high altitude wildlife sighting",
    trek: "Wildlife Trek",
    category: "wildlife",
    state: "Uttarakhand"
  },
  {
    id: 38,
    src: "https://source.unsplash.com/800x600/?ibex,mountain,goat,himalaya,rocky",
    alt: "Himalayan ibex mountain goat rocky terrain India",
    trek: "High Altitude Trek",
    category: "wildlife",
    state: "Himachal Pradesh"
  },
  {
    id: 39,
    src: "https://source.unsplash.com/800x600/?rhododendron,forest,himalaya,flowers,red",
    alt: "Rhododendron forest red flowers Himalayan trek India",
    trek: "Valley Trek",
    category: "wildlife",
    state: "Sikkim"
  },
  {
    id: 40,
    src: "https://source.unsplash.com/800x600/?himalayan,vulture,griffon,soaring,birds",
    alt: "Himalayan griffon vulture soaring high altitude India",
    trek: "Bird Trek",
    category: "wildlife",
    state: "Uttarakhand"
  },
  // Landscapes (10)
  {
    id: 41,
    src: "https://source.unsplash.com/800x600/?himalaya,sunrise,golden,peaks,panorama",
    alt: "Himalayan peaks golden sunrise panoramic view India",
    trek: "Sunrise Trek",
    category: "landscapes",
    state: "Uttarakhand"
  },
  {
    id: 42,
    src: "https://source.unsplash.com/800x600/?milky,way,stars,himalaya,night,camping",
    alt: "Milky Way stars Himalayan sky night camping India",
    trek: "Night Sky Camp",
    category: "landscapes",
    state: "Himachal Pradesh"
  },
  {
    id: 43,
    src: "https://source.unsplash.com/800x600/?himalaya,river,valley,turquoise,water",
    alt: "Turquoise Himalayan river valley pristine waters India",
    trek: "River Valley Trek",
    category: "landscapes",
    state: "Uttarakhand"
  },
  {
    id: 44,
    src: "https://source.unsplash.com/800x600/?himalayan,glacier,ice,blue,crevasse",
    alt: "Himalayan glacier blue ice crevasse high altitude India",
    trek: "Glacier Trek",
    category: "landscapes",
    state: "Uttarakhand"
  },
  {
    id: 45,
    src: "https://source.unsplash.com/800x600/?snow,dunes,himalaya,sand,desert,spiti",
    alt: "Snow dusted sand dunes Spiti Valley Himachal Pradesh",
    trek: "Desert Trek",
    category: "landscapes",
    state: "Himachal Pradesh"
  },
  {
    id: 46,
    src: "https://source.unsplash.com/800x600/?himalaya,monsoon,clouds,forest,mist",
    alt: "Himalayan forest monsoon clouds mist ethereal India",
    trek: "Monsoon Trek",
    category: "landscapes",
    state: "Uttarakhand"
  },
  {
    id: 47,
    src: "https://source.unsplash.com/800x600/?alpine,lake,reflection,himalaya,mountains",
    alt: "Alpine lake mirror reflection Himalayan mountains India",
    trek: "Lake Trek",
    category: "landscapes",
    state: "Uttarakhand"
  },
  {
    id: 48,
    src: "https://source.unsplash.com/800x600/?himalaya,autumn,colors,forest,trek,fall",
    alt: "Himalayan forest autumn colors fall foliage India trek",
    trek: "Autumn Trek",
    category: "landscapes",
    state: "Himachal Pradesh"
  },
  {
    id: 49,
    src: "https://source.unsplash.com/800x600/?himalayan,canyon,gorge,river,narrow",
    alt: "Himalayan canyon gorge narrow river India trekking",
    trek: "Canyon Trek",
    category: "landscapes",
    state: "Uttarakhand"
  },
  {
    id: 50,
    src: "https://source.unsplash.com/800x600/?himalaya,winter,snow,landscape,pristine",
    alt: "Himalayan winter snow pristine white landscape India",
    trek: "Winter Trek",
    category: "landscapes",
    state: "Uttarakhand"
  }
];
const FILTER_LABELS = [
  { value: "all", label: "All" },
  { value: "uttarakhand", label: "Uttarakhand" },
  { value: "himachal", label: "Himachal Pradesh" },
  { value: "yatras", label: "Yatras" },
  { value: "wildlife", label: "Wildlife" },
  { value: "landscapes", label: "Landscapes" },
  { value: "community", label: "Community" }
];
function GalleryPage() {
  var _a;
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const [showUpload, setShowUpload] = reactExports.useState(false);
  const filtered = reactExports.useMemo(
    () => activeFilter === "all" ? galleryData : galleryData.filter((i) => i.category === activeFilter),
    [activeFilter]
  );
  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex(
    (i) => i !== null ? (i - 1 + filtered.length) % filtered.length : 0
  );
  const goNext = () => setLightboxIndex((i) => i !== null ? (i + 1) % filtered.length : 0);
  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", "data-ocid": "gallery.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "pt-28 pb-16 text-center relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0A2E1A 0%, #145C38 60%, #1A7A4C 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10",
              style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 bg-white/10 text-white/90 uppercase",
                style: { fontFamily: "Montserrat, sans-serif" },
                children: "Visual Stories"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-display text-5xl md:text-6xl font-bold text-white mb-3",
                style: {
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)"
                },
                children: "Himalayas in Pictures"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-white/75 text-lg mt-3 max-w-xl mx-auto",
                style: { fontFamily: "'DM Sans', system-ui, sans-serif" },
                children: "50 real moments captured on our trails — from sacred temples to snow summits"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-20 bg-background/95 backdrop-blur border-b border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-2 items-center justify-center", children: FILTER_LABELS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": `gallery.filter.${f.value}`,
        onClick: () => setActiveFilter(f.value),
        className: `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${activeFilter === f.value ? "bg-primary text-white border-primary shadow-md" : "bg-background text-foreground border-border hover:border-primary hover:text-primary"}`,
        style: { fontFamily: "Montserrat, sans-serif" },
        children: [
          f.label,
          f.value !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `ml-1.5 text-xs ${activeFilter === f.value ? "text-white/70" : "text-muted-foreground"}`,
              children: [
                "(",
                galleryData.filter((i) => i.category === f.value).length,
                ")"
              ]
            }
          )
        ]
      },
      f.value
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-[#1A7A4C] to-[#0f5c38] rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📸" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-semibold text-lg", children: "Trekked with Global Trek?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm", children: "Share your journey with 12,000+ fellow trekkers. Your photos inspire the next adventure." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowUpload(true),
            "data-ocid": "gallery.upload_button",
            className: "bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-xl whitespace-nowrap transition-colors",
            children: "Upload Your Photos"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          className: "text-sm text-muted-foreground mb-6 text-center",
          style: { fontFamily: "'DM Sans', sans-serif" },
          children: [
            "Showing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
            " ",
            "photos",
            activeFilter !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " ",
              "in",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: (_a = FILTER_LABELS.find((f) => f.value === activeFilter)) == null ? void 0 : _a.label })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-2 md:columns-3", style: { columnGap: "20px" }, children: filtered.map((item, idx) => {
        const rotation = ROTATIONS[item.id % ROTATIONS.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "break-inside-avoid mb-5 bg-white cursor-pointer text-left w-full",
            style: {
              transform: `rotate(${rotation}deg)`,
              boxShadow: "4px 4px 16px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.12)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              padding: "8px 8px 28px 8px",
              borderRadius: "2px",
              position: "relative"
            },
            onMouseEnter: (e) => {
              const el = e.currentTarget;
              el.style.transform = "rotate(0deg) scale(1.05)";
              el.style.boxShadow = "8px 12px 32px rgba(20,92,56,0.30), 0 4px 8px rgba(0,0,0,0.18)";
              el.style.zIndex = "10";
            },
            onMouseLeave: (e) => {
              const el = e.currentTarget;
              el.style.transform = `rotate(${rotation}deg)`;
              el.style.boxShadow = "4px 4px 16px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.12)";
              el.style.zIndex = "auto";
            },
            onClick: () => openLightbox(idx),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(idx);
              }
            },
            "data-ocid": `gallery.item.${idx + 1}`,
            tabIndex: 0,
            "aria-label": `View photo: ${item.alt}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.src,
                  alt: item.alt,
                  className: "w-full object-cover block",
                  style: {
                    aspectRatio: idx % 3 === 1 ? "4/5" : "4/3",
                    display: "block"
                  },
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-center text-xs mt-2 px-1 leading-tight",
                  style: {
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#6c757d"
                  },
                  children: item.trek
                }
              )
            ]
          },
          item.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "text-3xl font-bold text-foreground mb-2",
            style: { fontFamily: "'Playfair Display', Georgia, serif" },
            children: "🌄 Community Photos"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Real photos from real trekkers — unfiltered, unedited, unforgettable." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full text-center py-12 bg-muted/40 rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl mb-4 block", children: "📷" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium", children: "Be the first to share your trek photos!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Photos appear here after a quick review (within 24 hours)." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowUpload(true),
              "data-ocid": "gallery.community_upload_button",
              className: "mt-4 bg-[#1A7A4C] text-white px-6 py-2 rounded-xl hover:bg-[#0f5c38] transition-colors",
              children: "Share Your Photos"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-border bg-card shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
            style: {
              background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 20, className: "text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm font-semibold text-foreground",
              style: { fontFamily: "Montserrat, sans-serif" },
              children: "Follow @GlobalTrek on Instagram"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-muted-foreground",
              style: { fontFamily: "'DM Sans', sans-serif" },
              children: "Daily Himalayan inspiration & trek stories"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://instagram.com/globaltrek.in",
            target: "_blank",
            rel: "noreferrer",
            "data-ocid": "gallery.instagram_link",
            className: "ml-4 px-5 py-2 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90 flex-shrink-0",
            style: {
              background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
              fontFamily: "Montserrat, sans-serif"
            },
            children: "Follow"
          }
        )
      ] }) })
    ] }),
    showUpload && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PhotoUpload,
      {
        trekSlug: "community",
        trekName: "Community Gallery",
        onClose: () => setShowUpload(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: lightboxIndex !== null,
        onOpenChange: (open) => !open && closeLightbox(),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DialogContent,
          {
            className: "max-w-4xl w-full p-0 overflow-hidden bg-background border-0",
            style: { borderRadius: "16px" },
            "data-ocid": "gallery.dialog",
            children: currentItem && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: closeLightbox,
                  "data-ocid": "gallery.close_button",
                  className: "absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors",
                  "aria-label": "Close lightbox",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-bold",
                  style: { fontFamily: "Montserrat, sans-serif" },
                  children: [
                    (lightboxIndex ?? 0) + 1,
                    " / ",
                    filtered.length
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative bg-black flex items-center justify-center",
                  style: { minHeight: "400px" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: currentItem.src,
                      alt: currentItem.alt,
                      className: "w-full object-contain",
                      style: { maxHeight: "70vh" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 bg-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: goPrev,
                    "data-ocid": "gallery.prev_button",
                    className: "w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary transition-all flex-shrink-0",
                    "aria-label": "Previous photo",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20, className: "text-foreground" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center flex-1 mx-4 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-semibold text-foreground text-base",
                      style: { fontFamily: "'Playfair Display', Georgia, serif" },
                      children: currentItem.trek
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs text-muted-foreground mt-0.5 truncate",
                      style: { fontFamily: "'DM Sans', sans-serif" },
                      children: currentItem.alt
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold text-white",
                      style: {
                        background: "#145C38",
                        fontFamily: "Montserrat, sans-serif"
                      },
                      children: currentItem.state
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: goNext,
                    "data-ocid": "gallery.next_button",
                    className: "w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary transition-all flex-shrink-0",
                    "aria-label": "Next photo",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20, className: "text-foreground" })
                  }
                )
              ] })
            ] })
          }
        )
      }
    )
  ] });
}
export {
  GalleryPage as default
};
