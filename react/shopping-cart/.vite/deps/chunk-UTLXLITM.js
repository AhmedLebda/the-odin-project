import {
  capitalize_default
} from "./chunk-PPOPK472.js";
import {
  createChainedFunction,
  debounce,
  deprecatedPropType,
  isMuiElement,
  ownerDocument,
  ownerWindow,
  requirePropFactory,
  setRef,
  unsupportedProp,
  useControlled,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef,
  useId,
  useIsFocusVisible,
  useRtl,
  visuallyHidden_default
} from "./chunk-JZVN3UOR.js";
import {
  chainPropTypes
} from "./chunk-2BNMDHRW.js";
import {
  ClassNameGenerator_default,
  _objectWithoutPropertiesLoose,
  clamp_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clamp,
  require_jsx_runtime,
  require_prop_types,
  slotShouldForwardProp_default,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-GMRCNM2S.js";
import {
  clsx_default
} from "./chunk-TMXZRJBF.js";
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

// node_modules/@mui/material/Rating/Rating.js
init_extends();
var React5 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_clamp();

// node_modules/@mui/material/utils/createChainedFunction.js
var createChainedFunction_default = createChainedFunction;

// node_modules/@mui/material/utils/createSvgIcon.js
init_extends();
var React2 = __toESM(require_react());

// node_modules/@mui/material/SvgIcon/SvgIcon.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
var svgIconClasses_default = svgIconClasses;

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
var useUtilityClasses = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: void 0
    }[ownerState.color]
  };
});
var SvgIcon = React.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const hasSvgAsChild = React.isValidElement(children) && children.type === "svg";
  const ownerState = _extends({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime2.jsxs)(SvgIconRoot, _extends({
    as: component,
    className: clsx_default(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? (0, import_jsx_runtime.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types.default.string
} : void 0;
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/utils/createSvgIcon.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime3.jsx)(SvgIcon_default, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React2.memo(React2.forwardRef(Component));
}

// node_modules/@mui/material/utils/debounce.js
var debounce_default = debounce;

// node_modules/@mui/material/utils/deprecatedPropType.js
var deprecatedPropType_default = deprecatedPropType;

// node_modules/@mui/material/utils/isMuiElement.js
var isMuiElement_default = isMuiElement;

// node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument_default = ownerDocument;

// node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow_default = ownerWindow;

// node_modules/@mui/material/utils/requirePropFactory.js
var requirePropFactory_default = requirePropFactory;

// node_modules/@mui/material/utils/setRef.js
var setRef_default = setRef;

// node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect_default2 = useEnhancedEffect_default;

// node_modules/@mui/material/utils/useId.js
var useId_default = useId;

// node_modules/@mui/material/utils/unsupportedProp.js
var unsupportedProp_default = unsupportedProp;

// node_modules/@mui/material/utils/useControlled.js
var useControlled_default = useControlled;

// node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback_default2 = useEventCallback_default;

// node_modules/@mui/material/utils/useForkRef.js
var useForkRef_default = useForkRef;

// node_modules/@mui/material/utils/useIsFocusVisible.js
var useIsFocusVisible_default = useIsFocusVisible;

// node_modules/@mui/material/utils/index.js
var unstable_ClassNameGenerator = {
  configure: (generator) => {
    if (true) {
      console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join("\n"));
    }
    ClassNameGenerator_default.configure(generator);
  }
};

// node_modules/@mui/material/internal/svg-icons/Star.js
var React3 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Star_default = createSvgIcon((0, import_jsx_runtime4.jsx)("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star");

// node_modules/@mui/material/internal/svg-icons/StarBorder.js
var React4 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var StarBorder_default = createSvgIcon((0, import_jsx_runtime5.jsx)("path", {
  d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
}), "StarBorder");

// node_modules/@mui/material/Rating/ratingClasses.js
function getRatingUtilityClass(slot) {
  return generateUtilityClass("MuiRating", slot);
}
var ratingClasses = generateUtilityClasses("MuiRating", ["root", "sizeSmall", "sizeMedium", "sizeLarge", "readOnly", "disabled", "focusVisible", "visuallyHidden", "pristine", "label", "labelEmptyValueActive", "icon", "iconEmpty", "iconFilled", "iconHover", "iconFocus", "iconActive", "decimal"]);
var ratingClasses_default = ratingClasses;

// node_modules/@mui/material/Rating/Rating.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded2 = ["value"];
var _excluded22 = ["className", "defaultValue", "disabled", "emptyIcon", "emptyLabelText", "getLabelText", "highlightSelectedOnly", "icon", "IconContainerComponent", "max", "name", "onChange", "onChangeActive", "onMouseLeave", "onMouseMove", "precision", "readOnly", "size", "value"];
function getDecimalPrecision(num) {
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToPrecision(value, precision) {
  if (value == null) {
    return value;
  }
  const nearest = Math.round(value / precision) * precision;
  return Number(nearest.toFixed(getDecimalPrecision(precision)));
}
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    size,
    readOnly,
    disabled,
    emptyValueFocused,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", `size${capitalize_default(size)}`, disabled && "disabled", focusVisible && "focusVisible", readOnly && "readOnly"],
    label: ["label", "pristine"],
    labelEmptyValue: [emptyValueFocused && "labelEmptyValueActive"],
    icon: ["icon"],
    iconEmpty: ["iconEmpty"],
    iconFilled: ["iconFilled"],
    iconHover: ["iconHover"],
    iconFocus: ["iconFocus"],
    iconActive: ["iconActive"],
    decimal: ["decimal"],
    visuallyHidden: ["visuallyHidden"]
  };
  return composeClasses(slots, getRatingUtilityClass, classes);
};
var RatingRoot = styled_default("span", {
  name: "MuiRating",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${ratingClasses_default.visuallyHidden}`]: styles.visuallyHidden
    }, styles.root, styles[`size${capitalize_default(ownerState.size)}`], ownerState.readOnly && styles.readOnly];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "inline-flex",
  // Required to position the pristine input absolutely
  position: "relative",
  fontSize: theme.typography.pxToRem(24),
  color: "#faaf00",
  cursor: "pointer",
  textAlign: "left",
  width: "min-content",
  WebkitTapHighlightColor: "transparent",
  [`&.${ratingClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity,
    pointerEvents: "none"
  },
  [`&.${ratingClasses_default.focusVisible} .${ratingClasses_default.iconActive}`]: {
    outline: "1px solid #999"
  },
  [`& .${ratingClasses_default.visuallyHidden}`]: visuallyHidden_default
}, ownerState.size === "small" && {
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === "large" && {
  fontSize: theme.typography.pxToRem(30)
}, ownerState.readOnly && {
  pointerEvents: "none"
}));
var RatingLabel = styled_default("label", {
  name: "MuiRating",
  slot: "Label",
  overridesResolver: ({
    ownerState
  }, styles) => [styles.label, ownerState.emptyValueFocused && styles.labelEmptyValueActive]
})(({
  ownerState
}) => _extends({
  cursor: "inherit"
}, ownerState.emptyValueFocused && {
  top: 0,
  bottom: 0,
  position: "absolute",
  outline: "1px solid #999",
  width: "100%"
}));
var RatingIcon = styled_default("span", {
  name: "MuiRating",
  slot: "Icon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, ownerState.iconEmpty && styles.iconEmpty, ownerState.iconFilled && styles.iconFilled, ownerState.iconHover && styles.iconHover, ownerState.iconFocus && styles.iconFocus, ownerState.iconActive && styles.iconActive];
  }
})(({
  theme,
  ownerState
}) => _extends({
  // Fit wrapper to actual icon size.
  display: "flex",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  }),
  // Fix mouseLeave issue.
  // https://github.com/facebook/react/issues/4492
  pointerEvents: "none"
}, ownerState.iconActive && {
  transform: "scale(1.2)"
}, ownerState.iconEmpty && {
  color: (theme.vars || theme).palette.action.disabled
}));
var RatingDecimal = styled_default("span", {
  name: "MuiRating",
  slot: "Decimal",
  shouldForwardProp: (prop) => slotShouldForwardProp_default(prop) && prop !== "iconActive",
  overridesResolver: (props, styles) => {
    const {
      iconActive
    } = props;
    return [styles.decimal, iconActive && styles.iconActive];
  }
})(({
  iconActive
}) => _extends({
  position: "relative"
}, iconActive && {
  transform: "scale(1.2)"
}));
function IconContainer(props) {
  const other = _objectWithoutPropertiesLoose(props, _excluded2);
  return (0, import_jsx_runtime6.jsx)("span", _extends({}, other));
}
true ? IconContainer.propTypes = {
  value: import_prop_types2.default.number.isRequired
} : void 0;
function RatingItem(props) {
  const {
    classes,
    disabled,
    emptyIcon,
    focus,
    getLabelText,
    highlightSelectedOnly,
    hover,
    icon,
    IconContainerComponent,
    isActive,
    itemValue,
    labelProps,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    readOnly,
    ownerState,
    ratingValue,
    ratingValueRounded
  } = props;
  const isFilled = highlightSelectedOnly ? itemValue === ratingValue : itemValue <= ratingValue;
  const isHovered = itemValue <= hover;
  const isFocused = itemValue <= focus;
  const isChecked = itemValue === ratingValueRounded;
  const id = useId_default();
  const container = (0, import_jsx_runtime6.jsx)(RatingIcon, {
    as: IconContainerComponent,
    value: itemValue,
    className: clsx_default(classes.icon, isFilled ? classes.iconFilled : classes.iconEmpty, isHovered && classes.iconHover, isFocused && classes.iconFocus, isActive && classes.iconActive),
    ownerState: _extends({}, ownerState, {
      iconEmpty: !isFilled,
      iconFilled: isFilled,
      iconHover: isHovered,
      iconFocus: isFocused,
      iconActive: isActive
    }),
    children: emptyIcon && !isFilled ? emptyIcon : icon
  });
  if (readOnly) {
    return (0, import_jsx_runtime6.jsx)("span", _extends({}, labelProps, {
      children: container
    }));
  }
  return (0, import_jsx_runtime7.jsxs)(React5.Fragment, {
    children: [(0, import_jsx_runtime7.jsxs)(RatingLabel, _extends({
      ownerState: _extends({}, ownerState, {
        emptyValueFocused: void 0
      }),
      htmlFor: id
    }, labelProps, {
      children: [container, (0, import_jsx_runtime6.jsx)("span", {
        className: classes.visuallyHidden,
        children: getLabelText(itemValue)
      })]
    })), (0, import_jsx_runtime6.jsx)("input", {
      className: classes.visuallyHidden,
      onFocus,
      onBlur,
      onChange,
      onClick,
      disabled,
      value: itemValue,
      id,
      type: "radio",
      name,
      checked: isChecked
    })]
  });
}
true ? RatingItem.propTypes = {
  classes: import_prop_types2.default.object.isRequired,
  disabled: import_prop_types2.default.bool.isRequired,
  emptyIcon: import_prop_types2.default.node,
  focus: import_prop_types2.default.number.isRequired,
  getLabelText: import_prop_types2.default.func.isRequired,
  highlightSelectedOnly: import_prop_types2.default.bool.isRequired,
  hover: import_prop_types2.default.number.isRequired,
  icon: import_prop_types2.default.node,
  IconContainerComponent: import_prop_types2.default.elementType.isRequired,
  isActive: import_prop_types2.default.bool.isRequired,
  itemValue: import_prop_types2.default.number.isRequired,
  labelProps: import_prop_types2.default.object,
  name: import_prop_types2.default.string,
  onBlur: import_prop_types2.default.func.isRequired,
  onChange: import_prop_types2.default.func.isRequired,
  onClick: import_prop_types2.default.func.isRequired,
  onFocus: import_prop_types2.default.func.isRequired,
  ownerState: import_prop_types2.default.object.isRequired,
  ratingValue: import_prop_types2.default.number,
  ratingValueRounded: import_prop_types2.default.number,
  readOnly: import_prop_types2.default.bool.isRequired
} : void 0;
var defaultIcon = (0, import_jsx_runtime6.jsx)(Star_default, {
  fontSize: "inherit"
});
var defaultEmptyIcon = (0, import_jsx_runtime6.jsx)(StarBorder_default, {
  fontSize: "inherit"
});
function defaultLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}`;
}
var Rating = React5.forwardRef(function Rating2(inProps, ref) {
  const props = useThemeProps({
    name: "MuiRating",
    props: inProps
  });
  const {
    className,
    defaultValue = null,
    disabled = false,
    emptyIcon = defaultEmptyIcon,
    emptyLabelText = "Empty",
    getLabelText = defaultLabelText,
    highlightSelectedOnly = false,
    icon = defaultIcon,
    IconContainerComponent = IconContainer,
    max = 5,
    name: nameProp,
    onChange,
    onChangeActive,
    onMouseLeave,
    onMouseMove,
    precision = 1,
    readOnly = false,
    size = "medium",
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded22);
  const name = useId_default(nameProp);
  const [valueDerived, setValueState] = useControlled_default({
    controlled: valueProp,
    default: defaultValue,
    name: "Rating"
  });
  const valueRounded = roundValueToPrecision(valueDerived, precision);
  const isRtl = useRtl();
  const [{
    hover,
    focus
  }, setState] = React5.useState({
    hover: -1,
    focus: -1
  });
  let value = valueRounded;
  if (hover !== -1) {
    value = hover;
  }
  if (focus !== -1) {
    value = focus;
  }
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default();
  const [focusVisible, setFocusVisible] = React5.useState(false);
  const rootRef = React5.useRef();
  const handleRef = useForkRef_default(focusVisibleRef, rootRef, ref);
  const handleMouseMove = (event) => {
    if (onMouseMove) {
      onMouseMove(event);
    }
    const rootNode = rootRef.current;
    const {
      right,
      left,
      width: containerWidth
    } = rootNode.getBoundingClientRect();
    let percent;
    if (isRtl) {
      percent = (right - event.clientX) / containerWidth;
    } else {
      percent = (event.clientX - left) / containerWidth;
    }
    let newHover = roundValueToPrecision(max * percent + precision / 2, precision);
    newHover = clamp_default(newHover, precision, max);
    setState((prev) => prev.hover === newHover && prev.focus === newHover ? prev : {
      hover: newHover,
      focus: newHover
    });
    setFocusVisible(false);
    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };
  const handleMouseLeave = (event) => {
    if (onMouseLeave) {
      onMouseLeave(event);
    }
    const newHover = -1;
    setState({
      hover: newHover,
      focus: newHover
    });
    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };
  const handleChange = (event) => {
    let newValue = event.target.value === "" ? null : parseFloat(event.target.value);
    if (hover !== -1) {
      newValue = hover;
    }
    setValueState(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  };
  const handleClear = (event) => {
    if (event.clientX === 0 && event.clientY === 0) {
      return;
    }
    setState({
      hover: -1,
      focus: -1
    });
    setValueState(null);
    if (onChange && parseFloat(event.target.value) === valueRounded) {
      onChange(event, null);
    }
  };
  const handleFocus = (event) => {
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }
    const newFocus = parseFloat(event.target.value);
    setState((prev) => ({
      hover: prev.hover,
      focus: newFocus
    }));
  };
  const handleBlur = (event) => {
    if (hover !== -1) {
      return;
    }
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    const newFocus = -1;
    setState((prev) => ({
      hover: prev.hover,
      focus: newFocus
    }));
  };
  const [emptyValueFocused, setEmptyValueFocused] = React5.useState(false);
  const ownerState = _extends({}, props, {
    defaultValue,
    disabled,
    emptyIcon,
    emptyLabelText,
    emptyValueFocused,
    focusVisible,
    getLabelText,
    icon,
    IconContainerComponent,
    max,
    precision,
    readOnly,
    size
  });
  const classes = useUtilityClasses2(ownerState);
  return (0, import_jsx_runtime7.jsxs)(RatingRoot, _extends({
    ref: handleRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: clsx_default(classes.root, className, readOnly && "MuiRating-readOnly"),
    ownerState,
    role: readOnly ? "img" : null,
    "aria-label": readOnly ? getLabelText(value) : null
  }, other, {
    children: [Array.from(new Array(max)).map((_, index) => {
      const itemValue = index + 1;
      const ratingItemProps = {
        classes,
        disabled,
        emptyIcon,
        focus,
        getLabelText,
        highlightSelectedOnly,
        hover,
        icon,
        IconContainerComponent,
        name,
        onBlur: handleBlur,
        onChange: handleChange,
        onClick: handleClear,
        onFocus: handleFocus,
        ratingValue: value,
        ratingValueRounded: valueRounded,
        readOnly,
        ownerState
      };
      const isActive = itemValue === Math.ceil(value) && (hover !== -1 || focus !== -1);
      if (precision < 1) {
        const items = Array.from(new Array(1 / precision));
        return (0, import_jsx_runtime6.jsx)(RatingDecimal, {
          className: clsx_default(classes.decimal, isActive && classes.iconActive),
          ownerState,
          iconActive: isActive,
          children: items.map(($, indexDecimal) => {
            const itemDecimalValue = roundValueToPrecision(itemValue - 1 + (indexDecimal + 1) * precision, precision);
            return (0, import_jsx_runtime6.jsx)(RatingItem, _extends({}, ratingItemProps, {
              // The icon is already displayed as active
              isActive: false,
              itemValue: itemDecimalValue,
              labelProps: {
                style: items.length - 1 === indexDecimal ? {} : {
                  width: itemDecimalValue === value ? `${(indexDecimal + 1) * precision * 100}%` : "0%",
                  overflow: "hidden",
                  position: "absolute"
                }
              }
            }), itemDecimalValue);
          })
        }, itemValue);
      }
      return (0, import_jsx_runtime6.jsx)(RatingItem, _extends({}, ratingItemProps, {
        isActive,
        itemValue
      }), itemValue);
    }), !readOnly && !disabled && (0, import_jsx_runtime7.jsxs)(RatingLabel, {
      className: clsx_default(classes.label, classes.labelEmptyValue),
      ownerState,
      children: [(0, import_jsx_runtime6.jsx)("input", {
        className: classes.visuallyHidden,
        value: "",
        id: `${name}-empty`,
        type: "radio",
        name,
        checked: valueRounded == null,
        onFocus: () => setEmptyValueFocused(true),
        onBlur: () => setEmptyValueFocused(false),
        onChange: handleChange
      }), (0, import_jsx_runtime6.jsx)("span", {
        className: classes.visuallyHidden,
        children: emptyLabelText
      })]
    })]
  }));
});
true ? Rating.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The default value. Use when the component is not controlled.
   * @default null
   */
  defaultValue: import_prop_types2.default.number,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * The icon to display when empty.
   * @default <StarBorder fontSize="inherit" />
   */
  emptyIcon: import_prop_types2.default.node,
  /**
   * The label read when the rating input is empty.
   * @default 'Empty'
   */
  emptyLabelText: import_prop_types2.default.node,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {number} value The rating label's value to format.
   * @returns {string}
   * @default function defaultLabelText(value) {
   *   return `${value} Star${value !== 1 ? 's' : ''}`;
   * }
   */
  getLabelText: import_prop_types2.default.func,
  /**
   * If `true`, only the selected icon will be highlighted.
   * @default false
   */
  highlightSelectedOnly: import_prop_types2.default.bool,
  /**
   * The icon to display.
   * @default <Star fontSize="inherit" />
   */
  icon: import_prop_types2.default.node,
  /**
   * The component containing the icon.
   * @default function IconContainer(props) {
   *   const { value, ...other } = props;
   *   return <span {...other} />;
   * }
   */
  IconContainerComponent: import_prop_types2.default.elementType,
  /**
   * Maximum rating.
   * @default 5
   */
  max: import_prop_types2.default.number,
  /**
   * The name attribute of the radio `input` elements.
   * This input `name` should be unique within the page.
   * Being unique within a form is insufficient since the `name` is used to generated IDs.
   */
  name: import_prop_types2.default.string,
  /**
   * Callback fired when the value changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number|null} value The new value.
   */
  onChange: import_prop_types2.default.func,
  /**
   * Callback function that is fired when the hover state changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number} value The new value.
   */
  onChangeActive: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onMouseLeave: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onMouseMove: import_prop_types2.default.func,
  /**
   * The minimum increment value change allowed.
   * @default 1
   */
  precision: chainPropTypes(import_prop_types2.default.number, (props) => {
    if (props.precision < 0.1) {
      return new Error(["MUI: The prop `precision` should be above 0.1.", "A value below this limit has an imperceptible impact."].join("\n"));
    }
    return null;
  }),
  /**
   * Removes all hover effects and pointer events.
   * @default false
   */
  readOnly: import_prop_types2.default.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["small", "medium", "large"]), import_prop_types2.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * The rating value.
   */
  value: import_prop_types2.default.number
} : void 0;
var Rating_default = Rating;

export {
  createChainedFunction_default,
  getSvgIconUtilityClass,
  svgIconClasses_default,
  SvgIcon_default,
  createSvgIcon,
  debounce_default,
  deprecatedPropType_default,
  isMuiElement_default,
  ownerDocument_default,
  ownerWindow_default,
  requirePropFactory_default,
  setRef_default,
  useEnhancedEffect_default2 as useEnhancedEffect_default,
  useId_default,
  unsupportedProp_default,
  useControlled_default,
  useEventCallback_default2 as useEventCallback_default,
  useForkRef_default,
  useIsFocusVisible_default,
  unstable_ClassNameGenerator,
  getRatingUtilityClass,
  ratingClasses_default,
  Rating_default
};
//# sourceMappingURL=chunk-UTLXLITM.js.map
