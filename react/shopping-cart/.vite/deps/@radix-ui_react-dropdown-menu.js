import {
  arrow,
  autoUpdate,
  flip,
  hide,
  limitShift,
  offset,
  shift,
  size,
  useFloating
} from "./chunk-QDH4ZTYX.js";
import {
  require_react_dom
} from "./chunk-RS4GO633.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$43e446d32b3d21af,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05
} from "./chunk-XZEBVQRM.js";
import {
  _extends,
  init_extends
} from "./chunk-IB7FZ6MA.js";
import {
  require_react
} from "./chunk-DRJP35UV.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
init_extends();
var import_react22 = __toESM(require_react(), 1);

// node_modules/@radix-ui/primitive/dist/index.mjs
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/@radix-ui/react-context/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = (0, import_react.createContext)(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const value = (0, import_react.useMemo)(
        () => context,
        Object.values(context)
      );
      return (0, import_react.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const context = (0, import_react.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return (0, import_react.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react2.useRef)(callback);
  (0, import_react2.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react2.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react3.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react3.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react3.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react3.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/@radix-ui/react-primitive/dist/index.mjs
init_extends();
var import_react4 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var $8927f6f2acc4f386$var$NODES = [
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
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = (0, import_react4.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    (0, import_react4.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return (0, import_react4.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/@radix-ui/react-menu/dist/index.mjs
init_extends();
var import_react21 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collection/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = import_react5.default.useRef(null);
    const itemMap = import_react5.default.useRef(/* @__PURE__ */ new Map()).current;
    return import_react5.default.createElement(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref
    }, children);
  };
  Object.assign(CollectionProvider, {
    displayName: PROVIDER_NAME
  });
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = import_react5.default.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return import_react5.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  Object.assign(CollectionSlot, {
    displayName: COLLECTION_SLOT_NAME
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = import_react5.default.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = import_react5.default.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    import_react5.default.useEffect(() => {
      context.itemMap.set(ref, {
        ref,
        ...itemData
      });
      return () => void context.itemMap.delete(ref);
    });
    return import_react5.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  Object.assign(CollectionItemSlot, {
    displayName: ITEM_SLOT_NAME
  });
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react5.default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection,
    createCollectionScope
  ];
}

// node_modules/@radix-ui/react-direction/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);
var $f631663db3294ace$var$DirectionContext = (0, import_react6.createContext)(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = (0, import_react6.useContext)($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
init_extends();
var import_react8 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var import_react7 = __toESM(require_react(), 1);
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react7.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var $5cb92bef7577960e$var$DISMISSABLE_LAYER_NAME = "DismissableLayer";
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = (0, import_react8.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = (0, import_react8.forwardRef)((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react8.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react8.useState)(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = (0, import_react8.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  (0, import_react8.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react8.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react8.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return (0, import_react8.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
Object.assign($5cb92bef7577960e$export$177fb62ff3ec1f22, {
  displayName: $5cb92bef7577960e$var$DISMISSABLE_LAYER_NAME
});
var $5cb92bef7577960e$var$BRANCH_NAME = "DismissableLayerBranch";
var $5cb92bef7577960e$export$4d5eb2109db14228 = (0, import_react8.forwardRef)((props, forwardedRef) => {
  const context = (0, import_react8.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const ref = (0, import_react8.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react8.useEffect)(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [
    context.branches
  ]);
  return (0, import_react8.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, props, {
    ref: composedRefs
  }));
});
Object.assign($5cb92bef7577960e$export$4d5eb2109db14228, {
  displayName: $5cb92bef7577960e$var$BRANCH_NAME
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react8.useRef)(false);
  const handleClickRef = (0, import_react8.useRef)(() => {
  });
  (0, import_react8.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      } else
        ownerDocument.removeEventListener("click", handleClickRef.current);
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react8.useRef)(false);
  (0, import_react8.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var import_react9 = __toESM(require_react(), 1);
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  (0, import_react9.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
init_extends();
var import_react10 = __toESM(require_react(), 1);
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$var$FOCUS_SCOPE_NAME = "FocusScope";
var $d3863c46a17e8a28$export$20e40289641fbbb6 = (0, import_react10.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react10.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react10.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react10.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react10.useEffect)(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container1.contains(relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleMutations = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations)
          if (mutation.removedNodes.length > 0)
            $d3863c46a17e8a28$var$focus(container1);
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      const mutationObserver = new MutationObserver(handleMutations);
      if (container1)
        mutationObserver.observe(container1, {
          childList: true,
          subtree: true
        });
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
        mutationObserver.disconnect();
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react10.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react10.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return (0, import_react10.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
Object.assign($d3863c46a17e8a28$export$20e40289641fbbb6, {
  displayName: $d3863c46a17e8a28$var$FOCUS_SCOPE_NAME
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index = updatedArray.indexOf(item);
  if (index !== -1)
    updatedArray.splice(index, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/@radix-ui/react-id/dist/index.mjs
var $2AODx$react = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var import_react11 = __toESM(require_react(), 1);
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react11.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-id/dist/index.mjs
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
init_extends();
var import_react14 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-arrow/dist/index.mjs
init_extends();
var import_react12 = __toESM(require_react(), 1);
var $7e8f5cd07187803e$var$NAME = "Arrow";
var $7e8f5cd07187803e$export$21b07c8f274aebd5 = (0, import_react12.forwardRef)((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return (0, import_react12.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.svg, _extends({}, arrowProps, {
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), props.asChild ? children : (0, import_react12.createElement)("polygon", {
    points: "0,0 30,0 15,10"
  }));
});
Object.assign($7e8f5cd07187803e$export$21b07c8f274aebd5, {
  displayName: $7e8f5cd07187803e$var$NAME
});
var $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var import_react13 = __toESM(require_react(), 1);
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size2, setSize] = (0, import_react13.useState)(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size2;
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
var [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
var [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
var $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = (0, import_react14.useState)(null);
  return (0, import_react14.createElement)($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
Object.assign($cf1ac5d9fe0e8206$export$badac9ada3a0bdf9, {
  displayName: $cf1ac5d9fe0e8206$var$POPPER_NAME
});
var $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
var $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react14.useEffect)(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
    ref: composedRefs
  }));
});
Object.assign($cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d, {
  displayName: $cf1ac5d9fe0e8206$var$ANCHOR_NAME
});
var $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
var [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
var $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = (0, import_react14.forwardRef)((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = (0, import_react14.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow2, setArrow] = (0, import_react14.useState)(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow2);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: updatePositionStrategy === "always"
      });
      return cleanup;
    },
    elements: {
      reference: context.anchor
    },
    middleware: [
      offset({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions && shift({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift() : void 0,
        ...detectOverflowOptions
      }),
      avoidCollisions && flip({
        ...detectOverflowOptions
      }),
      size({
        ...detectOverflowOptions,
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      }),
      arrow2 && arrow({
        element: arrow2,
        padding: arrowPadding
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached && hide({
        strategy: "referenceHidden",
        ...detectOverflowOptions
      })
    ]
  });
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPositioned)
      handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPositioned,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = (0, import_react14.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  return (0, import_react14.createElement)("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props.dir
  }, (0, import_react14.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-side": placedSide,
    "data-align": placedAlign
  }, contentProps, {
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPositioned ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  }))));
});
Object.assign($cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc, {
  displayName: $cf1ac5d9fe0e8206$var$CONTENT_NAME
});
var $cf1ac5d9fe0e8206$var$ARROW_NAME = "PopperArrow";
var $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = (0, import_react14.forwardRef)(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd02(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
  const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    (0, import_react14.createElement)("span", {
      ref: contentContext.onArrowChange,
      style: {
        position: "absolute",
        left: contentContext.arrowX,
        top: contentContext.arrowY,
        [baseSide]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[contentContext.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: `rotate(180deg)`,
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[contentContext.placedSide],
        visibility: contentContext.shouldHideArrow ? "hidden" : void 0
      }
    }, (0, import_react14.createElement)($7e8f5cd07187803e$export$be92b6f5f03c0fe9, _extends({}, arrowProps, {
      ref: forwardedRef,
      style: {
        ...arrowProps.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
  displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
});
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
var $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x,
        y
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
var $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
var $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
var $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
var $cf1ac5d9fe0e8206$export$21b07c8f274aebd5 = $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0;

// node_modules/@radix-ui/react-portal/dist/index.mjs
init_extends();
var import_react15 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);
var $f1701beae083dbae$var$PORTAL_NAME = "Portal";
var $f1701beae083dbae$export$602eac185826482c = (0, import_react15.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? import_react_dom3.default.createPortal((0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});
Object.assign($f1701beae083dbae$export$602eac185826482c, {
  displayName: $f1701beae083dbae$var$PORTAL_NAME
});

// node_modules/@radix-ui/react-presence/dist/index.mjs
var import_react16 = __toESM(require_react(), 1);
var import_react_dom4 = __toESM(require_react_dom(), 1);
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react16.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react16.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? (0, import_react16.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react16.useState)();
  const stylesRef = (0, import_react16.useRef)({});
  const prevPresentRef = (0, import_react16.useRef)(present);
  const prevAnimationNameRef = (0, import_react16.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react16.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom4.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react16.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
init_extends();
var import_react17 = __toESM(require_react(), 1);
var $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d7bdfb9eb0fdf311$var$GROUP_NAME = "RovingFocusGroup";
var [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($d7bdfb9eb0fdf311$var$GROUP_NAME);
var [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d7bdfb9eb0fdf311$var$GROUP_NAME, [
  $d7bdfb9eb0fdf311$var$createCollectionScope
]);
var [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
var $d7bdfb9eb0fdf311$export$8699f7c8af148338 = (0, import_react17.forwardRef)((props, forwardedRef) => {
  return (0, import_react17.createElement)($d7bdfb9eb0fdf311$var$Collection.Provider, {
    scope: props.__scopeRovingFocusGroup
  }, (0, import_react17.createElement)($d7bdfb9eb0fdf311$var$Collection.Slot, {
    scope: props.__scopeRovingFocusGroup
  }, (0, import_react17.createElement)($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, _extends({}, props, {
    ref: forwardedRef
  }))));
});
Object.assign($d7bdfb9eb0fdf311$export$8699f7c8af148338, {
  displayName: $d7bdfb9eb0fdf311$var$GROUP_NAME
});
var $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = (0, import_react17.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, ...groupProps } = props;
  const ref = (0, import_react17.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = (0, import_react17.useState)(false);
  const handleEntryFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEntryFocus);
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = (0, import_react17.useRef)(false);
  const [focusableItemsCount, setFocusableItemsCount] = (0, import_react17.useState)(0);
  (0, import_react17.useEffect)(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
    }
  }, [
    handleEntryFocus
  ]);
  return (0, import_react17.createElement)($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: (0, import_react17.useCallback)(
      (tabStopId) => setCurrentTabStopId(tabStopId),
      [
        setCurrentTabStopId
      ]
    ),
    onItemShiftTab: (0, import_react17.useCallback)(
      () => setIsTabbingBackOut(true),
      []
    ),
    onFocusableItemAdd: (0, import_react17.useCallback)(
      () => setFocusableItemsCount(
        (prevCount) => prevCount + 1
      ),
      []
    ),
    onFocusableItemRemove: (0, import_react17.useCallback)(
      () => setFocusableItemsCount(
        (prevCount) => prevCount - 1
      ),
      []
    )
  }, (0, import_react17.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
    "data-orientation": orientation
  }, groupProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...props.style
    },
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, () => {
      isClickFocusRef.current = true;
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, (event) => {
      const isKeyboardFocus = !isClickFocusRef.current;
      if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
        const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
        event.currentTarget.dispatchEvent(entryFocusEvent);
        if (!entryFocusEvent.defaultPrevented) {
          const items = getItems().filter(
            (item) => item.focusable
          );
          const activeItem = items.find(
            (item) => item.active
          );
          const currentItem = items.find(
            (item) => item.id === currentTabStopId
          );
          const candidateItems = [
            activeItem,
            currentItem,
            ...items
          ].filter(Boolean);
          const candidateNodes = candidateItems.map(
            (item) => item.ref.current
          );
          $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
        }
      }
      isClickFocusRef.current = false;
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsTabbingBackOut(false)
    )
  })));
});
var $d7bdfb9eb0fdf311$var$ITEM_NAME = "RovingFocusGroupItem";
var $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = (0, import_react17.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
  const autoId = $1746a345f3d73bb7$export$f680877a34711e37();
  const id = tabStopId || autoId;
  const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove } = context;
  (0, import_react17.useEffect)(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [
    focusable,
    onFocusableItemAdd,
    onFocusableItemRemove
  ]);
  return (0, import_react17.createElement)($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id,
    focusable,
    active
  }, (0, import_react17.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    tabIndex: isCurrentTabStop ? 0 : -1,
    "data-orientation": context.orientation
  }, itemProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!focusable)
        event.preventDefault();
      else
        context.onItemFocus(id);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => context.onItemFocus(id)
    ),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget)
        return;
      const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
      if (focusIntent !== void 0) {
        event.preventDefault();
        const items = getItems().filter(
          (item) => item.focusable
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if (focusIntent === "last")
          candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev")
            candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
        );
      }
    })
  })));
});
Object.assign($d7bdfb9eb0fdf311$export$ab9df7c53fe8454, {
  displayName: $d7bdfb9eb0fdf311$var$ITEM_NAME
});
var $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
  const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(key))
    return void 0;
  if (orientation === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(key))
    return void 0;
  return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index) => array[(startIndex + index) % array.length]
  );
}
var $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
var $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React9 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React5 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react18 = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react18.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var React2 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react19 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var React3 = __toESM(require_react());
var import_react20 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
var React4 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React4.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React5.forwardRef(function(props, parentRef) {
  var ref = React5.useRef(null);
  var _a = React5.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React5.createElement(
    React5.Fragment,
    null,
    enabled && React5.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React5.cloneElement(React5.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React5.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React8 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React7 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React6 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React6.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React7.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React7.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React7.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React8.useRef([]);
  var touchStartRef = React8.useRef([0, 0]);
  var activeAxis = React8.useRef();
  var id = React8.useState(idCounter++)[0];
  var Style2 = React8.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React8.useRef(props);
  React8.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React8.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React8.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React8.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React8.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React8.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React8.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React8.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React8.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React8.createElement(
    React8.Fragment,
    null,
    inert ? React8.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React8.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React9.forwardRef(function(props, ref) {
  return React9.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/@radix-ui/react-menu/dist/index.mjs
var $6cc32821e9371a1c$var$SELECTION_KEYS = [
  "Enter",
  " "
];
var $6cc32821e9371a1c$var$FIRST_KEYS = [
  "ArrowDown",
  "PageUp",
  "Home"
];
var $6cc32821e9371a1c$var$LAST_KEYS = [
  "ArrowUp",
  "PageDown",
  "End"
];
var $6cc32821e9371a1c$var$FIRST_LAST_KEYS = [
  ...$6cc32821e9371a1c$var$FIRST_KEYS,
  ...$6cc32821e9371a1c$var$LAST_KEYS
];
var $6cc32821e9371a1c$var$SUB_OPEN_KEYS = {
  ltr: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowRight"
  ],
  rtl: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowLeft"
  ]
};
var $6cc32821e9371a1c$var$SUB_CLOSE_KEYS = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
};
var $6cc32821e9371a1c$var$MENU_NAME = "Menu";
var [$6cc32821e9371a1c$var$Collection, $6cc32821e9371a1c$var$useCollection, $6cc32821e9371a1c$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$createMenuContext, $6cc32821e9371a1c$export$4027731b685e72eb] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6cc32821e9371a1c$var$MENU_NAME, [
  $6cc32821e9371a1c$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $6cc32821e9371a1c$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var $6cc32821e9371a1c$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var [$6cc32821e9371a1c$var$MenuProvider, $6cc32821e9371a1c$var$useMenuContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$MenuRootProvider, $6cc32821e9371a1c$var$useMenuRootContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var $6cc32821e9371a1c$export$d9b273488cd8ce6f = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const [content, setContent] = (0, import_react21.useState)(null);
  const isUsingKeyboardRef = (0, import_react21.useRef)(false);
  const handleOpenChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onOpenChange);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  (0, import_react21.useEffect)(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, {
        capture: true,
        once: true
      });
      document.addEventListener("pointermove", handlePointer, {
        capture: true,
        once: true
      });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, {
      capture: true
    });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, {
        capture: true
      });
      document.removeEventListener("pointerdown", handlePointer, {
        capture: true
      });
      document.removeEventListener("pointermove", handlePointer, {
        capture: true
      });
    };
  }, []);
  return (0, import_react21.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent
  }, (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuRootProvider, {
    scope: __scopeMenu,
    onClose: (0, import_react21.useCallback)(
      () => handleOpenChange(false),
      [
        handleOpenChange
      ]
    ),
    isUsingKeyboardRef,
    dir: direction,
    modal
  }, children)));
};
Object.assign($6cc32821e9371a1c$export$d9b273488cd8ce6f, {
  displayName: $6cc32821e9371a1c$var$MENU_NAME
});
var $6cc32821e9371a1c$var$ANCHOR_NAME = "MenuAnchor";
var $6cc32821e9371a1c$export$9fa5ebd18bee4d43 = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...anchorProps } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  return (0, import_react21.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({}, popperScope, anchorProps, {
    ref: forwardedRef
  }));
});
Object.assign($6cc32821e9371a1c$export$9fa5ebd18bee4d43, {
  displayName: $6cc32821e9371a1c$var$ANCHOR_NAME
});
var $6cc32821e9371a1c$var$PORTAL_NAME = "MenuPortal";
var [$6cc32821e9371a1c$var$PortalProvider, $6cc32821e9371a1c$var$usePortalContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, {
  forceMount: void 0
});
var $6cc32821e9371a1c$export$793392f970497feb = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, __scopeMenu);
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$PortalProvider, {
    scope: __scopeMenu,
    forceMount
  }, (0, import_react21.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react21.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
Object.assign($6cc32821e9371a1c$export$793392f970497feb, {
  displayName: $6cc32821e9371a1c$var$PORTAL_NAME
});
var $6cc32821e9371a1c$var$CONTENT_NAME = "MenuContent";
var [$6cc32821e9371a1c$var$MenuContentProvider, $6cc32821e9371a1c$var$useMenuContentContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$CONTENT_NAME);
var $6cc32821e9371a1c$export$479f0f2f71193efe = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, (0, import_react21.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react21.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, rootContext.modal ? (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuRootContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuRootContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })))));
});
var $6cc32821e9371a1c$var$MenuRootContentModal = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const ref = (0, import_react21.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react21.useEffect)(() => {
    const content = ref.current;
    if (content)
      return hideOthers(content);
  }, []);
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: context.open,
    disableOutsideScroll: true,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    ),
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuRootContentNonModal = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuContentImpl = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const getItems = $6cc32821e9371a1c$var$useCollection(__scopeMenu);
  const [currentItemId, setCurrentItemId] = (0, import_react21.useState)(null);
  const contentRef = (0, import_react21.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef, context.onContentChange);
  const timerRef = (0, import_react21.useRef)(0);
  const searchRef = (0, import_react21.useRef)("");
  const pointerGraceTimerRef = (0, import_react21.useRef)(0);
  const pointerGraceIntentRef = (0, import_react21.useRef)(null);
  const pointerDirRef = (0, import_react21.useRef)("right");
  const lastPointerXRef = (0, import_react21.useRef)(0);
  const ScrollLockWrapper = disableOutsideScroll ? Combination_default : import_react21.Fragment;
  const scrollLockWrapperProps = disableOutsideScroll ? {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  } : void 0;
  const handleTypeaheadSearch = (key) => {
    var _items$find, _items$find2;
    const search = searchRef.current + key;
    const items = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = document.activeElement;
    const currentMatch = (_items$find = items.find(
      (item) => item.ref.current === currentItem
    )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
    const values = items.map(
      (item) => item.textValue
    );
    const nextMatch = $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch);
    const newItem = (_items$find2 = items.find(
      (item) => item.textValue === nextMatch
    )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current;
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
    if (newItem)
      setTimeout(
        () => newItem.focus()
      );
  };
  (0, import_react21.useEffect)(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const isPointerMovingToSubmenu = (0, import_react21.useCallback)((event) => {
    var _pointerGraceIntentRe, _pointerGraceIntentRe2;
    const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
    return isMovingTowards && $6cc32821e9371a1c$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
  }, []);
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuContentProvider, {
    scope: __scopeMenu,
    searchRef,
    onItemEnter: (0, import_react21.useCallback)((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    onItemLeave: (0, import_react21.useCallback)((event) => {
      var _contentRef$current;
      if (isPointerMovingToSubmenu(event))
        return;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
      setCurrentItemId(null);
    }, [
      isPointerMovingToSubmenu
    ]),
    onTriggerLeave: (0, import_react21.useCallback)((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    pointerGraceTimerRef,
    onPointerGraceIntentChange: (0, import_react21.useCallback)((intent) => {
      pointerGraceIntentRef.current = intent;
    }, [])
  }, (0, import_react21.createElement)(ScrollLockWrapper, scrollLockWrapperProps, (0, import_react21.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: trapFocus,
    onMountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onOpenAutoFocus, (event) => {
      var _contentRef$current2;
      event.preventDefault();
      (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
    }),
    onUnmountAutoFocus: onCloseAutoFocus
  }, (0, import_react21.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss
  }, (0, import_react21.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    dir: rootContext.dir,
    orientation: "vertical",
    loop,
    currentTabStopId: currentItemId,
    onCurrentTabStopIdChange: setCurrentItemId,
    onEntryFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onEntryFocus, (event) => {
      if (!rootContext.isUsingKeyboardRef.current)
        event.preventDefault();
    })
  }), (0, import_react21.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open),
    "data-radix-menu-content": "",
    dir: rootContext.dir
  }, popperScope, contentProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const target = event.target;
      const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      const isCharacterKey = event.key.length === 1;
      if (isKeyDownInside) {
        if (event.key === "Tab")
          event.preventDefault();
        if (!isModifierKey && isCharacterKey)
          handleTypeaheadSearch(event.key);
      }
      const content = contentRef.current;
      if (event.target !== content)
        return;
      if (!$6cc32821e9371a1c$var$FIRST_LAST_KEYS.includes(event.key))
        return;
      event.preventDefault();
      const items = getItems().filter(
        (item) => !item.disabled
      );
      const candidateNodes = items.map(
        (item) => item.ref.current
      );
      if ($6cc32821e9371a1c$var$LAST_KEYS.includes(event.key))
        candidateNodes.reverse();
      $6cc32821e9371a1c$var$focusFirst(candidateNodes);
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, (event) => {
      if (!event.currentTarget.contains(event.target)) {
        window.clearTimeout(timerRef.current);
        searchRef.current = "";
      }
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      const target = event.target;
      const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
      if (event.currentTarget.contains(target) && pointerXHasChanged) {
        const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
        pointerDirRef.current = newDir;
        lastPointerXRef.current = event.clientX;
      }
    }))
  })))))));
});
Object.assign($6cc32821e9371a1c$export$479f0f2f71193efe, {
  displayName: $6cc32821e9371a1c$var$CONTENT_NAME
});
var $6cc32821e9371a1c$var$GROUP_NAME = "MenuGroup";
var $6cc32821e9371a1c$export$22a631d1f72787bb = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...groupProps } = props;
  return (0, import_react21.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "group"
  }, groupProps, {
    ref: forwardedRef
  }));
});
Object.assign($6cc32821e9371a1c$export$22a631d1f72787bb, {
  displayName: $6cc32821e9371a1c$var$GROUP_NAME
});
var $6cc32821e9371a1c$var$LABEL_NAME = "MenuLabel";
var $6cc32821e9371a1c$export$dd37bec0e8a99143 = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...labelProps } = props;
  return (0, import_react21.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, labelProps, {
    ref: forwardedRef
  }));
});
Object.assign($6cc32821e9371a1c$export$dd37bec0e8a99143, {
  displayName: $6cc32821e9371a1c$var$LABEL_NAME
});
var $6cc32821e9371a1c$var$ITEM_NAME = "MenuItem";
var $6cc32821e9371a1c$var$ITEM_SELECT = "menu.itemSelect";
var $6cc32821e9371a1c$export$2ce376c2cc3355c8 = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { disabled = false, onSelect, ...itemProps } = props;
  const ref = (0, import_react21.useRef)(null);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const isPointerDownRef = (0, import_react21.useRef)(false);
  const handleSelect = () => {
    const menuItem = ref.current;
    if (!disabled && menuItem) {
      const itemSelectEvent = new CustomEvent($6cc32821e9371a1c$var$ITEM_SELECT, {
        bubbles: true,
        cancelable: true
      });
      menuItem.addEventListener(
        $6cc32821e9371a1c$var$ITEM_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(menuItem, itemSelectEvent);
      if (itemSelectEvent.defaultPrevented)
        isPointerDownRef.current = false;
      else
        rootContext.onClose();
    }
  };
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuItemImpl, _extends({}, itemProps, {
    ref: composedRefs,
    disabled,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, handleSelect),
    onPointerDown: (event) => {
      var _props$onPointerDown;
      (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
      isPointerDownRef.current = true;
    },
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      var _event$currentTarget;
      if (!isPointerDownRef.current)
        (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SELECTION_KEYS.includes(event.key)) {
        event.currentTarget.click();
        event.preventDefault();
      }
    })
  }));
});
Object.assign($6cc32821e9371a1c$export$2ce376c2cc3355c8, {
  displayName: $6cc32821e9371a1c$var$ITEM_NAME
});
var $6cc32821e9371a1c$var$MenuItemImpl = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, __scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const ref = (0, import_react21.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [isFocused, setIsFocused] = (0, import_react21.useState)(false);
  const [textContent, setTextContent] = (0, import_react21.useState)("");
  (0, import_react21.useEffect)(() => {
    const menuItem = ref.current;
    if (menuItem) {
      var _menuItem$textContent;
      setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : "").trim());
    }
  }, [
    itemProps.children
  ]);
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$Collection.ItemSlot, {
    scope: __scopeMenu,
    disabled,
    textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
  }, (0, import_react21.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled
  }), (0, import_react21.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "menuitem",
    "data-highlighted": isFocused ? "" : void 0,
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0
  }, itemProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      if (disabled)
        contentContext.onItemLeave(event);
      else {
        contentContext.onItemEnter(event);
        if (!event.defaultPrevented) {
          const item = event.currentTarget;
          item.focus();
        }
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse(
      (event) => contentContext.onItemLeave(event)
    )),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsFocused(false)
    )
  }))));
});
var $6cc32821e9371a1c$var$CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var $6cc32821e9371a1c$export$f6f243521332502d = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, (0, import_react21.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemcheckbox",
    "aria-checked": $6cc32821e9371a1c$var$isIndeterminate(checked) ? "mixed" : checked
  }, checkboxItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      checkboxItemProps.onSelect,
      () => onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($6cc32821e9371a1c$var$isIndeterminate(checked) ? true : !checked),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
Object.assign($6cc32821e9371a1c$export$f6f243521332502d, {
  displayName: $6cc32821e9371a1c$var$CHECKBOX_ITEM_NAME
});
var $6cc32821e9371a1c$var$RADIO_GROUP_NAME = "MenuRadioGroup";
var [$6cc32821e9371a1c$var$RadioGroupProvider, $6cc32821e9371a1c$var$useRadioGroupContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$RADIO_GROUP_NAME, {
  value: void 0,
  onValueChange: () => {
  }
});
var $6cc32821e9371a1c$export$ea2200c9eee416b3 = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { value, onValueChange, ...groupProps } = props;
  const handleValueChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onValueChange);
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$RadioGroupProvider, {
    scope: props.__scopeMenu,
    value,
    onValueChange: handleValueChange
  }, (0, import_react21.createElement)($6cc32821e9371a1c$export$22a631d1f72787bb, _extends({}, groupProps, {
    ref: forwardedRef
  })));
});
Object.assign($6cc32821e9371a1c$export$ea2200c9eee416b3, {
  displayName: $6cc32821e9371a1c$var$RADIO_GROUP_NAME
});
var $6cc32821e9371a1c$var$RADIO_ITEM_NAME = "MenuRadioItem";
var $6cc32821e9371a1c$export$69bd225e9817f6d0 = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { value, ...radioItemProps } = props;
  const context = $6cc32821e9371a1c$var$useRadioGroupContext($6cc32821e9371a1c$var$RADIO_ITEM_NAME, props.__scopeMenu);
  const checked = value === context.value;
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, (0, import_react21.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemradio",
    "aria-checked": checked
  }, radioItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(radioItemProps.onSelect, () => {
      var _context$onValueChang;
      return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
Object.assign($6cc32821e9371a1c$export$69bd225e9817f6d0, {
  displayName: $6cc32821e9371a1c$var$RADIO_ITEM_NAME
});
var $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [$6cc32821e9371a1c$var$ItemIndicatorProvider, $6cc32821e9371a1c$var$useItemIndicatorContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, {
  checked: false
});
var $6cc32821e9371a1c$export$a2593e23056970a3 = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
  const indicatorContext = $6cc32821e9371a1c$var$useItemIndicatorContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, __scopeMenu);
  return (0, import_react21.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $6cc32821e9371a1c$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
  }, (0, import_react21.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, itemIndicatorProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(indicatorContext.checked)
  })));
});
Object.assign($6cc32821e9371a1c$export$a2593e23056970a3, {
  displayName: $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME
});
var $6cc32821e9371a1c$var$SEPARATOR_NAME = "MenuSeparator";
var $6cc32821e9371a1c$export$1cec7dcdd713e220 = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...separatorProps } = props;
  return (0, import_react21.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "separator",
    "aria-orientation": "horizontal"
  }, separatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($6cc32821e9371a1c$export$1cec7dcdd713e220, {
  displayName: $6cc32821e9371a1c$var$SEPARATOR_NAME
});
var $6cc32821e9371a1c$var$ARROW_NAME = "MenuArrow";
var $6cc32821e9371a1c$export$bcdda4773debf5fa = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...arrowProps } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  return (0, import_react21.createElement)($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends({}, popperScope, arrowProps, {
    ref: forwardedRef
  }));
});
Object.assign($6cc32821e9371a1c$export$bcdda4773debf5fa, {
  displayName: $6cc32821e9371a1c$var$ARROW_NAME
});
var $6cc32821e9371a1c$var$SUB_NAME = "MenuSub";
var [$6cc32821e9371a1c$var$MenuSubProvider, $6cc32821e9371a1c$var$useMenuSubContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$SUB_NAME);
var $6cc32821e9371a1c$export$71bdb9d1e2909932 = (props) => {
  const { __scopeMenu, children, open = false, onOpenChange } = props;
  const parentMenuContext = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_NAME, __scopeMenu);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const [trigger, setTrigger] = (0, import_react21.useState)(null);
  const [content, setContent] = (0, import_react21.useState)(null);
  const handleOpenChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onOpenChange);
  (0, import_react21.useEffect)(() => {
    if (parentMenuContext.open === false)
      handleOpenChange(false);
    return () => handleOpenChange(false);
  }, [
    parentMenuContext.open,
    handleOpenChange
  ]);
  return (0, import_react21.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent
  }, (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuSubProvider, {
    scope: __scopeMenu,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerId: $1746a345f3d73bb7$export$f680877a34711e37(),
    trigger,
    onTriggerChange: setTrigger
  }, children)));
};
Object.assign($6cc32821e9371a1c$export$71bdb9d1e2909932, {
  displayName: $6cc32821e9371a1c$var$SUB_NAME
});
var $6cc32821e9371a1c$var$SUB_TRIGGER_NAME = "MenuSubTrigger";
var $6cc32821e9371a1c$export$5fbbb3ba7297405f = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const openTimerRef = (0, import_react21.useRef)(null);
  const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
  const scope = {
    __scopeMenu: props.__scopeMenu
  };
  const clearOpenTimer = (0, import_react21.useCallback)(() => {
    if (openTimerRef.current)
      window.clearTimeout(openTimerRef.current);
    openTimerRef.current = null;
  }, []);
  (0, import_react21.useEffect)(
    () => clearOpenTimer,
    [
      clearOpenTimer
    ]
  );
  (0, import_react21.useEffect)(() => {
    const pointerGraceTimer = pointerGraceTimerRef.current;
    return () => {
      window.clearTimeout(pointerGraceTimer);
      onPointerGraceIntentChange(null);
    };
  }, [
    pointerGraceTimerRef,
    onPointerGraceIntentChange
  ]);
  return (0, import_react21.createElement)($6cc32821e9371a1c$export$9fa5ebd18bee4d43, _extends({
    asChild: true
  }, scope), (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuItemImpl, _extends({
    id: subContext.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": subContext.contentId,
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open)
  }, props, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, subContext.onTriggerChange),
    onClick: (event) => {
      var _props$onClick;
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
      if (props.disabled || event.defaultPrevented)
        return;
      event.currentTarget.focus();
      if (!context.open)
        context.onOpenChange(true);
    },
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      contentContext.onItemEnter(event);
      if (event.defaultPrevented)
        return;
      if (!props.disabled && !context.open && !openTimerRef.current) {
        contentContext.onPointerGraceIntentChange(null);
        openTimerRef.current = window.setTimeout(() => {
          context.onOpenChange(true);
          clearOpenTimer();
        }, 100);
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse((event) => {
      var _context$content;
      clearOpenTimer();
      const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
      if (contentRect) {
        var _context$content2;
        const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
        const rightSide = side === "right";
        const bleed = rightSide ? -5 : 5;
        const contentNearEdge = contentRect[rightSide ? "left" : "right"];
        const contentFarEdge = contentRect[rightSide ? "right" : "left"];
        contentContext.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: event.clientX + bleed,
              y: event.clientY
            },
            {
              x: contentNearEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.bottom
            },
            {
              x: contentNearEdge,
              y: contentRect.bottom
            }
          ],
          side
        });
        window.clearTimeout(pointerGraceTimerRef.current);
        pointerGraceTimerRef.current = window.setTimeout(
          () => contentContext.onPointerGraceIntentChange(null),
          300
        );
      } else {
        contentContext.onTriggerLeave(event);
        if (event.defaultPrevented)
          return;
        contentContext.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (props.disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
        var _context$content3;
        context.onOpenChange(true);
        (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus();
        event.preventDefault();
      }
    })
  })));
});
Object.assign($6cc32821e9371a1c$export$5fbbb3ba7297405f, {
  displayName: $6cc32821e9371a1c$var$SUB_TRIGGER_NAME
});
var $6cc32821e9371a1c$var$SUB_CONTENT_NAME = "MenuSubContent";
var $6cc32821e9371a1c$export$e7142ab31822bde6 = (0, import_react21.forwardRef)((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...subContentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_CONTENT_NAME, props.__scopeMenu);
  const ref = (0, import_react21.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  return (0, import_react21.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, (0, import_react21.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react21.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, (0, import_react21.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({
    id: subContext.contentId,
    "aria-labelledby": subContext.triggerId
  }, subContentProps, {
    ref: composedRefs,
    align: "start",
    side: rootContext.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    trapFocus: false,
    onOpenAutoFocus: (event) => {
      var _ref$current;
      if (rootContext.isUsingKeyboardRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
      event.preventDefault();
    },
    onCloseAutoFocus: (event) => event.preventDefault(),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      if (event.target !== subContext.trigger)
        context.onOpenChange(false);
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      rootContext.onClose();
      event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isKeyDownInside = event.currentTarget.contains(event.target);
      const isCloseKey = $6cc32821e9371a1c$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
      if (isKeyDownInside && isCloseKey) {
        var _subContext$trigger;
        context.onOpenChange(false);
        (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus();
        event.preventDefault();
      }
    })
  })))));
});
Object.assign($6cc32821e9371a1c$export$e7142ab31822bde6, {
  displayName: $6cc32821e9371a1c$var$SUB_CONTENT_NAME
});
function $6cc32821e9371a1c$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $6cc32821e9371a1c$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $6cc32821e9371a1c$var$getCheckedState(checked) {
  return $6cc32821e9371a1c$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function $6cc32821e9371a1c$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $6cc32821e9371a1c$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index) => array[(startIndex + index) % array.length]
  );
}
function $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char) => char === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = $6cc32821e9371a1c$var$wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter(
      (v) => v !== currentMatch
    );
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function $6cc32821e9371a1c$var$isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $6cc32821e9371a1c$var$isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return $6cc32821e9371a1c$var$isPointInPolygon(cursorPos, area);
}
function $6cc32821e9371a1c$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $6cc32821e9371a1c$export$be92b6f5f03c0fe9 = $6cc32821e9371a1c$export$d9b273488cd8ce6f;
var $6cc32821e9371a1c$export$b688253958b8dfe7 = $6cc32821e9371a1c$export$9fa5ebd18bee4d43;
var $6cc32821e9371a1c$export$602eac185826482c = $6cc32821e9371a1c$export$793392f970497feb;
var $6cc32821e9371a1c$export$7c6e2c02157bb7d2 = $6cc32821e9371a1c$export$479f0f2f71193efe;
var $6cc32821e9371a1c$export$eb2fcfdbd7ba97d4 = $6cc32821e9371a1c$export$22a631d1f72787bb;
var $6cc32821e9371a1c$export$b04be29aa201d4f5 = $6cc32821e9371a1c$export$dd37bec0e8a99143;
var $6cc32821e9371a1c$export$6d08773d2e66f8f2 = $6cc32821e9371a1c$export$2ce376c2cc3355c8;
var $6cc32821e9371a1c$export$16ce288f89fa631c = $6cc32821e9371a1c$export$f6f243521332502d;
var $6cc32821e9371a1c$export$a98f0dcb43a68a25 = $6cc32821e9371a1c$export$ea2200c9eee416b3;
var $6cc32821e9371a1c$export$371ab307eab489c0 = $6cc32821e9371a1c$export$69bd225e9817f6d0;
var $6cc32821e9371a1c$export$c3468e2714d175fa = $6cc32821e9371a1c$export$a2593e23056970a3;
var $6cc32821e9371a1c$export$1ff3c3f08ae963c0 = $6cc32821e9371a1c$export$1cec7dcdd713e220;
var $6cc32821e9371a1c$export$21b07c8f274aebd5 = $6cc32821e9371a1c$export$bcdda4773debf5fa;
var $6cc32821e9371a1c$export$d7a01e11500dfb6f = $6cc32821e9371a1c$export$71bdb9d1e2909932;
var $6cc32821e9371a1c$export$2ea8a7a591ac5eac = $6cc32821e9371a1c$export$5fbbb3ba7297405f;
var $6cc32821e9371a1c$export$6d4de93b380beddf = $6cc32821e9371a1c$export$e7142ab31822bde6;

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var $d08ef79370b62062$var$DROPDOWN_MENU_NAME = "DropdownMenu";
var [$d08ef79370b62062$var$createDropdownMenuContext, $d08ef79370b62062$export$c0623cd925aeb687] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d08ef79370b62062$var$DROPDOWN_MENU_NAME, [
  $6cc32821e9371a1c$export$4027731b685e72eb
]);
var $d08ef79370b62062$var$useMenuScope = $6cc32821e9371a1c$export$4027731b685e72eb();
var [$d08ef79370b62062$var$DropdownMenuProvider, $d08ef79370b62062$var$useDropdownMenuContext] = $d08ef79370b62062$var$createDropdownMenuContext($d08ef79370b62062$var$DROPDOWN_MENU_NAME);
var $d08ef79370b62062$export$e44a253a59704894 = (props) => {
  const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const triggerRef = (0, import_react22.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_react22.createElement)($d08ef79370b62062$var$DropdownMenuProvider, {
    scope: __scopeDropdownMenu,
    triggerId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react22.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, (0, import_react22.createElement)($6cc32821e9371a1c$export$be92b6f5f03c0fe9, _extends({}, menuScope, {
    open,
    onOpenChange: setOpen,
    dir,
    modal
  }), children));
};
Object.assign($d08ef79370b62062$export$e44a253a59704894, {
  displayName: $d08ef79370b62062$var$DROPDOWN_MENU_NAME
});
var $d08ef79370b62062$var$TRIGGER_NAME = "DropdownMenuTrigger";
var $d08ef79370b62062$export$d2469213b3befba9 = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$TRIGGER_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$b688253958b8dfe7, _extends({
    asChild: true
  }, menuScope), (0, import_react22.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    id: context.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": context.open ? context.contentId : void 0,
    "data-state": context.open ? "open" : "closed",
    "data-disabled": disabled ? "" : void 0,
    disabled
  }, triggerProps, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, context.triggerRef),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false) {
        context.onOpenToggle();
        if (!context.open)
          event.preventDefault();
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (disabled)
        return;
      if ([
        "Enter",
        " "
      ].includes(event.key))
        context.onOpenToggle();
      if (event.key === "ArrowDown")
        context.onOpenChange(true);
      if ([
        "Enter",
        " ",
        "ArrowDown"
      ].includes(event.key))
        event.preventDefault();
    })
  })));
});
Object.assign($d08ef79370b62062$export$d2469213b3befba9, {
  displayName: $d08ef79370b62062$var$TRIGGER_NAME
});
var $d08ef79370b62062$var$PORTAL_NAME = "DropdownMenuPortal";
var $d08ef79370b62062$export$cd369b4d4d54efc9 = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$602eac185826482c, _extends({}, menuScope, portalProps));
};
Object.assign($d08ef79370b62062$export$cd369b4d4d54efc9, {
  displayName: $d08ef79370b62062$var$PORTAL_NAME
});
var $d08ef79370b62062$var$CONTENT_NAME = "DropdownMenuContent";
var $d08ef79370b62062$export$6e76d93a37c01248 = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...contentProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$CONTENT_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const hasInteractedOutsideRef = (0, import_react22.useRef)(false);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$7c6e2c02157bb7d2, _extends({
    id: context.contentId,
    "aria-labelledby": context.triggerId
  }, menuScope, contentProps, {
    ref: forwardedRef,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      if (!hasInteractedOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
      hasInteractedOutsideRef.current = false;
      event.preventDefault();
    }),
    onInteractOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onInteractOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!context.modal || isRightClick)
        hasInteractedOutsideRef.current = true;
    }),
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
Object.assign($d08ef79370b62062$export$6e76d93a37c01248, {
  displayName: $d08ef79370b62062$var$CONTENT_NAME
});
var $d08ef79370b62062$var$GROUP_NAME = "DropdownMenuGroup";
var $d08ef79370b62062$export$246bebaba3a2f70e = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...groupProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$eb2fcfdbd7ba97d4, _extends({}, menuScope, groupProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$246bebaba3a2f70e, {
  displayName: $d08ef79370b62062$var$GROUP_NAME
});
var $d08ef79370b62062$var$LABEL_NAME = "DropdownMenuLabel";
var $d08ef79370b62062$export$76e48c5b57f24495 = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...labelProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$b04be29aa201d4f5, _extends({}, menuScope, labelProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$76e48c5b57f24495, {
  displayName: $d08ef79370b62062$var$LABEL_NAME
});
var $d08ef79370b62062$var$ITEM_NAME = "DropdownMenuItem";
var $d08ef79370b62062$export$ed97964d1871885d = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$6d08773d2e66f8f2, _extends({}, menuScope, itemProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$ed97964d1871885d, {
  displayName: $d08ef79370b62062$var$ITEM_NAME
});
var $d08ef79370b62062$var$CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem";
var $d08ef79370b62062$export$53a69729da201fa9 = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$16ce288f89fa631c, _extends({}, menuScope, checkboxItemProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$53a69729da201fa9, {
  displayName: $d08ef79370b62062$var$CHECKBOX_ITEM_NAME
});
var $d08ef79370b62062$var$RADIO_GROUP_NAME = "DropdownMenuRadioGroup";
var $d08ef79370b62062$export$3323ad73d55f587e = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$a98f0dcb43a68a25, _extends({}, menuScope, radioGroupProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$3323ad73d55f587e, {
  displayName: $d08ef79370b62062$var$RADIO_GROUP_NAME
});
var $d08ef79370b62062$var$RADIO_ITEM_NAME = "DropdownMenuRadioItem";
var $d08ef79370b62062$export$e4f69b41b1637536 = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$371ab307eab489c0, _extends({}, menuScope, radioItemProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$e4f69b41b1637536, {
  displayName: $d08ef79370b62062$var$RADIO_ITEM_NAME
});
var $d08ef79370b62062$var$INDICATOR_NAME = "DropdownMenuItemIndicator";
var $d08ef79370b62062$export$42355ae145153fb6 = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$c3468e2714d175fa, _extends({}, menuScope, itemIndicatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$42355ae145153fb6, {
  displayName: $d08ef79370b62062$var$INDICATOR_NAME
});
var $d08ef79370b62062$var$SEPARATOR_NAME = "DropdownMenuSeparator";
var $d08ef79370b62062$export$da160178fd3bc7e9 = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$1ff3c3f08ae963c0, _extends({}, menuScope, separatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$da160178fd3bc7e9, {
  displayName: $d08ef79370b62062$var$SEPARATOR_NAME
});
var $d08ef79370b62062$var$ARROW_NAME = "DropdownMenuArrow";
var $d08ef79370b62062$export$34b8980744021ec5 = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...arrowProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$21b07c8f274aebd5, _extends({}, menuScope, arrowProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$34b8980744021ec5, {
  displayName: $d08ef79370b62062$var$ARROW_NAME
});
var $d08ef79370b62062$export$2f307d81a64f5442 = (props) => {
  const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$d7a01e11500dfb6f, _extends({}, menuScope, {
    open,
    onOpenChange: setOpen
  }), children);
};
var $d08ef79370b62062$var$SUB_TRIGGER_NAME = "DropdownMenuSubTrigger";
var $d08ef79370b62062$export$21dcb7ec56f874cf = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$2ea8a7a591ac5eac, _extends({}, menuScope, subTriggerProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$21dcb7ec56f874cf, {
  displayName: $d08ef79370b62062$var$SUB_TRIGGER_NAME
});
var $d08ef79370b62062$var$SUB_CONTENT_NAME = "DropdownMenuSubContent";
var $d08ef79370b62062$export$f34ec8bc2482cc5f = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react22.createElement)($6cc32821e9371a1c$export$6d4de93b380beddf, _extends({}, menuScope, subContentProps, {
    ref: forwardedRef,
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
Object.assign($d08ef79370b62062$export$f34ec8bc2482cc5f, {
  displayName: $d08ef79370b62062$var$SUB_CONTENT_NAME
});
var $d08ef79370b62062$export$be92b6f5f03c0fe9 = $d08ef79370b62062$export$e44a253a59704894;
var $d08ef79370b62062$export$41fb9f06171c75f4 = $d08ef79370b62062$export$d2469213b3befba9;
var $d08ef79370b62062$export$602eac185826482c = $d08ef79370b62062$export$cd369b4d4d54efc9;
var $d08ef79370b62062$export$7c6e2c02157bb7d2 = $d08ef79370b62062$export$6e76d93a37c01248;
var $d08ef79370b62062$export$eb2fcfdbd7ba97d4 = $d08ef79370b62062$export$246bebaba3a2f70e;
var $d08ef79370b62062$export$b04be29aa201d4f5 = $d08ef79370b62062$export$76e48c5b57f24495;
var $d08ef79370b62062$export$6d08773d2e66f8f2 = $d08ef79370b62062$export$ed97964d1871885d;
var $d08ef79370b62062$export$16ce288f89fa631c = $d08ef79370b62062$export$53a69729da201fa9;
var $d08ef79370b62062$export$a98f0dcb43a68a25 = $d08ef79370b62062$export$3323ad73d55f587e;
var $d08ef79370b62062$export$371ab307eab489c0 = $d08ef79370b62062$export$e4f69b41b1637536;
var $d08ef79370b62062$export$c3468e2714d175fa = $d08ef79370b62062$export$42355ae145153fb6;
var $d08ef79370b62062$export$1ff3c3f08ae963c0 = $d08ef79370b62062$export$da160178fd3bc7e9;
var $d08ef79370b62062$export$21b07c8f274aebd5 = $d08ef79370b62062$export$34b8980744021ec5;
var $d08ef79370b62062$export$d7a01e11500dfb6f = $d08ef79370b62062$export$2f307d81a64f5442;
var $d08ef79370b62062$export$2ea8a7a591ac5eac = $d08ef79370b62062$export$21dcb7ec56f874cf;
var $d08ef79370b62062$export$6d4de93b380beddf = $d08ef79370b62062$export$f34ec8bc2482cc5f;
export {
  $d08ef79370b62062$export$21b07c8f274aebd5 as Arrow,
  $d08ef79370b62062$export$16ce288f89fa631c as CheckboxItem,
  $d08ef79370b62062$export$7c6e2c02157bb7d2 as Content,
  $d08ef79370b62062$export$e44a253a59704894 as DropdownMenu,
  $d08ef79370b62062$export$34b8980744021ec5 as DropdownMenuArrow,
  $d08ef79370b62062$export$53a69729da201fa9 as DropdownMenuCheckboxItem,
  $d08ef79370b62062$export$6e76d93a37c01248 as DropdownMenuContent,
  $d08ef79370b62062$export$246bebaba3a2f70e as DropdownMenuGroup,
  $d08ef79370b62062$export$ed97964d1871885d as DropdownMenuItem,
  $d08ef79370b62062$export$42355ae145153fb6 as DropdownMenuItemIndicator,
  $d08ef79370b62062$export$76e48c5b57f24495 as DropdownMenuLabel,
  $d08ef79370b62062$export$cd369b4d4d54efc9 as DropdownMenuPortal,
  $d08ef79370b62062$export$3323ad73d55f587e as DropdownMenuRadioGroup,
  $d08ef79370b62062$export$e4f69b41b1637536 as DropdownMenuRadioItem,
  $d08ef79370b62062$export$da160178fd3bc7e9 as DropdownMenuSeparator,
  $d08ef79370b62062$export$2f307d81a64f5442 as DropdownMenuSub,
  $d08ef79370b62062$export$f34ec8bc2482cc5f as DropdownMenuSubContent,
  $d08ef79370b62062$export$21dcb7ec56f874cf as DropdownMenuSubTrigger,
  $d08ef79370b62062$export$d2469213b3befba9 as DropdownMenuTrigger,
  $d08ef79370b62062$export$eb2fcfdbd7ba97d4 as Group,
  $d08ef79370b62062$export$6d08773d2e66f8f2 as Item,
  $d08ef79370b62062$export$c3468e2714d175fa as ItemIndicator,
  $d08ef79370b62062$export$b04be29aa201d4f5 as Label,
  $d08ef79370b62062$export$602eac185826482c as Portal,
  $d08ef79370b62062$export$a98f0dcb43a68a25 as RadioGroup,
  $d08ef79370b62062$export$371ab307eab489c0 as RadioItem,
  $d08ef79370b62062$export$be92b6f5f03c0fe9 as Root,
  $d08ef79370b62062$export$1ff3c3f08ae963c0 as Separator,
  $d08ef79370b62062$export$d7a01e11500dfb6f as Sub,
  $d08ef79370b62062$export$6d4de93b380beddf as SubContent,
  $d08ef79370b62062$export$2ea8a7a591ac5eac as SubTrigger,
  $d08ef79370b62062$export$41fb9f06171c75f4 as Trigger,
  $d08ef79370b62062$export$c0623cd925aeb687 as createDropdownMenuScope
};
//# sourceMappingURL=@radix-ui_react-dropdown-menu.js.map
