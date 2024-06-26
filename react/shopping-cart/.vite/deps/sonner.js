"use client";
import {
  require_react_dom
} from "./chunk-RS4GO633.js";
import {
  require_react
} from "./chunk-DRJP35UV.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/sonner/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var { entries: ke, setPrototypeOf: Ne, isFrozen: Ze, getPrototypeOf: Je, getOwnPropertyDescriptor: Qe } = Object;
var { freeze: O, seal: X, create: Be } = Object;
var { apply: ce, construct: de } = typeof Reflect != "undefined" && Reflect;
O || (O = function(n) {
  return n;
});
X || (X = function(n) {
  return n;
});
ce || (ce = function(n, t, a) {
  return n.apply(t, a);
});
de || (de = function(n, t) {
  return new n(...t);
});
var Zt = F(Array.prototype.forEach);
var De = F(Array.prototype.pop);
var jt = F(Array.prototype.push);
var te = F(String.prototype.toLowerCase);
var ae = F(String.prototype.toString);
var Ie = F(String.prototype.match);
var $t = F(String.prototype.replace);
var tn = F(String.prototype.indexOf);
var en = F(String.prototype.trim);
var Q = F(Object.prototype.hasOwnProperty);
var U = F(RegExp.prototype.test);
var Vt = nn(TypeError);
function F(r) {
  return function(n) {
    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), g = 1; g < t; g++)
      a[g - 1] = arguments[g];
    return ce(r, n, a);
  };
}
function nn(r) {
  return function() {
    for (var n = arguments.length, t = new Array(n), a = 0; a < n; a++)
      t[a] = arguments[a];
    return de(r, t);
  };
}
function d(r, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : te;
  Ne && Ne(r, null);
  let a = n.length;
  for (; a--; ) {
    let g = n[a];
    if (typeof g == "string") {
      let E = t(g);
      E !== g && (Ze(n) || (n[a] = E), g = E);
    }
    r[g] = true;
  }
  return r;
}
function on(r) {
  for (let n = 0; n < r.length; n++)
    Q(r, n) || (r[n] = null);
  return r;
}
function Nt(r) {
  let n = Be(null);
  for (let [t, a] of ke(r))
    Q(r, t) && (Array.isArray(a) ? n[t] = on(a) : a && typeof a == "object" && a.constructor === Object ? n[t] = Nt(a) : n[t] = a);
  return n;
}
function Jt(r, n) {
  for (; r !== null; ) {
    let a = Qe(r, n);
    if (a) {
      if (a.get)
        return F(a.get);
      if (typeof a.value == "function")
        return F(a.value);
    }
    r = Je(r);
  }
  function t() {
    return null;
  }
  return t;
}
var Ce = O(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var re = O(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var se = O(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var an = O(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var ie = O(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var rn = O(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var Le = O(["#text"]);
var Me = O(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var le = O(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var Pe = O(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var Qt = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var sn = X(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var ln = X(/<%[\w\W]*|[\w\W]*%>/gm);
var cn = X(/\${[\w\W]*}/gm);
var dn = X(/^data-[\-\w.\u00B7-\uFFFF]/);
var un = X(/^aria-[\-\w]+$/);
var He = X(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var fn = X(/^(?:\w+script|data):/i);
var mn = X(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var Ue = X(/^html$/i);
var pn = X(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i);
var Oe = Object.freeze({ __proto__: null, MUSTACHE_EXPR: sn, ERB_EXPR: ln, TMPLIT_EXPR: cn, DATA_ATTR: dn, ARIA_ATTR: un, IS_ALLOWED_URI: He, IS_SCRIPT_OR_DATA: fn, ATTR_WHITESPACE: mn, DOCTYPE_NAME: Ue, CUSTOM_ELEMENT: pn });
var gn = function() {
  return typeof window == "undefined" ? null : window;
};
var hn = function(n, t) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let a = null, g = "data-tt-policy-suffix";
  t && t.hasAttribute(g) && (a = t.getAttribute(g));
  let E = "dompurify" + (a ? "#" + a : "");
  try {
    return n.createPolicy(E, { createHTML(y) {
      return y;
    }, createScriptURL(y) {
      return y;
    } });
  } catch (y) {
    return console.warn("TrustedTypes policy " + E + " could not be created."), null;
  }
};
function Fe() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gn(), n = (l) => Fe(l);
  if (n.version = "3.0.10", n.removed = [], !r || !r.document || r.document.nodeType !== 9)
    return n.isSupported = false, n;
  let { document: t } = r, a = t, g = a.currentScript, { DocumentFragment: E, HTMLTemplateElement: y, Node: A, Element: T, NodeFilter: mt, NamedNodeMap: wt = r.NamedNodeMap || r.MozNamedAttrMap, HTMLFormElement: Dt, DOMParser: It, trustedTypes: f } = r, st = T.prototype, Ct = Jt(st, "cloneNode"), Bt = Jt(st, "nextSibling"), Ht = Jt(st, "childNodes"), pt = Jt(st, "parentNode");
  if (typeof y == "function") {
    let l = t.createElement("template");
    l.content && l.content.ownerDocument && (t = l.content.ownerDocument);
  }
  let R, it = "", { implementation: k, createNodeIterator: lt, createDocumentFragment: m, getElementsByTagName: z } = t, { importNode: Ut } = a, P = {};
  n.isSupported = typeof ke == "function" && typeof pt == "function" && k && k.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: N, ERB_EXPR: q, TMPLIT_EXPR: gt, DATA_ATTR: Lt, ARIA_ATTR: ct, IS_SCRIPT_OR_DATA: et, ATTR_WHITESPACE: xt, CUSTOM_ELEMENT: W } = Oe, { IS_ALLOWED_URI: nt } = Oe, v = null, b = d({}, [...Ce, ...re, ...se, ...ie, ...Le]), u = null, D = d({}, [...Me, ...le, ...Pe, ...Qt]), p = Object.seal(Be(null, { tagNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, allowCustomizedBuiltInElements: { writable: true, configurable: false, enumerable: true, value: false } })), C = null, w = null, ht = true, I = true, Y = false, Tt = true, bt = false, G = false, Ft = false, Mt = false, ot = false, Z = false, vt = false, dt = true, zt = false, ee = "user-content-", Pt = true, yt = false, Et = {}, at = null, J = d({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Kt = null, Wt = d({}, ["audio", "video", "img", "source", "image", "track"]), Ot = null, Yt = d({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), At = "http://www.w3.org/1998/Math/MathML", _t = "http://www.w3.org/2000/svg", j = "http://www.w3.org/1999/xhtml", ut = j, kt = false, c = null, _ = d({}, [At, _t, j], ae), S = null, $ = ["application/xhtml+xml", "text/html"], V = "text/html", h = null, rt = null, qt = t.createElement("form"), pe = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, ne = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(rt && rt === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = Nt(e), S = $.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? V : e.PARSER_MEDIA_TYPE, h = S === "application/xhtml+xml" ? ae : te, v = Q(e, "ALLOWED_TAGS") ? d({}, e.ALLOWED_TAGS, h) : b, u = Q(e, "ALLOWED_ATTR") ? d({}, e.ALLOWED_ATTR, h) : D, c = Q(e, "ALLOWED_NAMESPACES") ? d({}, e.ALLOWED_NAMESPACES, ae) : _, Ot = Q(e, "ADD_URI_SAFE_ATTR") ? d(Nt(Yt), e.ADD_URI_SAFE_ATTR, h) : Yt, Kt = Q(e, "ADD_DATA_URI_TAGS") ? d(Nt(Wt), e.ADD_DATA_URI_TAGS, h) : Wt, at = Q(e, "FORBID_CONTENTS") ? d({}, e.FORBID_CONTENTS, h) : J, C = Q(e, "FORBID_TAGS") ? d({}, e.FORBID_TAGS, h) : {}, w = Q(e, "FORBID_ATTR") ? d({}, e.FORBID_ATTR, h) : {}, Et = Q(e, "USE_PROFILES") ? e.USE_PROFILES : false, ht = e.ALLOW_ARIA_ATTR !== false, I = e.ALLOW_DATA_ATTR !== false, Y = e.ALLOW_UNKNOWN_PROTOCOLS || false, Tt = e.ALLOW_SELF_CLOSE_IN_ATTR !== false, bt = e.SAFE_FOR_TEMPLATES || false, G = e.WHOLE_DOCUMENT || false, ot = e.RETURN_DOM || false, Z = e.RETURN_DOM_FRAGMENT || false, vt = e.RETURN_TRUSTED_TYPE || false, Mt = e.FORCE_BODY || false, dt = e.SANITIZE_DOM !== false, zt = e.SANITIZE_NAMED_PROPS || false, Pt = e.KEEP_CONTENT !== false, yt = e.IN_PLACE || false, nt = e.ALLOWED_URI_REGEXP || He, ut = e.NAMESPACE || j, p = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && pe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (p.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && pe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (p.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (p.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), bt && (I = false), Z && (ot = true), Et && (v = d({}, Le), u = [], Et.html === true && (d(v, Ce), d(u, Me)), Et.svg === true && (d(v, re), d(u, le), d(u, Qt)), Et.svgFilters === true && (d(v, se), d(u, le), d(u, Qt)), Et.mathMl === true && (d(v, ie), d(u, Pe), d(u, Qt))), e.ADD_TAGS && (v === b && (v = Nt(v)), d(v, e.ADD_TAGS, h)), e.ADD_ATTR && (u === D && (u = Nt(u)), d(u, e.ADD_ATTR, h)), e.ADD_URI_SAFE_ATTR && d(Ot, e.ADD_URI_SAFE_ATTR, h), e.FORBID_CONTENTS && (at === J && (at = Nt(at)), d(at, e.FORBID_CONTENTS, h)), Pt && (v["#text"] = true), G && d(v, ["html", "head", "body"]), v.table && (d(v, ["tbody"]), delete C.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Vt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Vt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        R = e.TRUSTED_TYPES_POLICY, it = R.createHTML("");
      } else
        R === void 0 && (R = hn(f, g)), R !== null && typeof it == "string" && (it = R.createHTML(""));
      O && O(e), rt = e;
    }
  }, ge = d({}, ["mi", "mo", "mn", "ms", "mtext"]), he = d({}, ["foreignobject", "desc", "title", "annotation-xml"]), Ve = d({}, ["title", "style", "font", "a", "script"]), Te = d({}, [...re, ...se, ...an]), be = d({}, [...ie, ...rn]), Xe = function(e) {
    let o = pt(e);
    (!o || !o.tagName) && (o = { namespaceURI: ut, tagName: "template" });
    let s = te(e.tagName), x = te(o.tagName);
    return c[e.namespaceURI] ? e.namespaceURI === _t ? o.namespaceURI === j ? s === "svg" : o.namespaceURI === At ? s === "svg" && (x === "annotation-xml" || ge[x]) : !!Te[s] : e.namespaceURI === At ? o.namespaceURI === j ? s === "math" : o.namespaceURI === _t ? s === "math" && he[x] : !!be[s] : e.namespaceURI === j ? o.namespaceURI === _t && !he[x] || o.namespaceURI === At && !ge[x] ? false : !be[s] && (Ve[s] || !Te[s]) : !!(S === "application/xhtml+xml" && c[e.namespaceURI]) : false;
  }, St = function(e) {
    jt(n.removed, { element: e });
    try {
      e.parentNode.removeChild(e);
    } catch (o) {
      e.remove();
    }
  }, oe = function(e, o) {
    try {
      jt(n.removed, { attribute: o.getAttributeNode(e), from: o });
    } catch (s) {
      jt(n.removed, { attribute: null, from: o });
    }
    if (o.removeAttribute(e), e === "is" && !u[e])
      if (ot || Z)
        try {
          St(o);
        } catch (s) {
        }
      else
        try {
          o.setAttribute(e, "");
        } catch (s) {
        }
  }, ye = function(e) {
    let o = null, s = null;
    if (Mt)
      e = "<remove></remove>" + e;
    else {
      let M = Ie(e, /^[\r\n\t ]+/);
      s = M && M[0];
    }
    S === "application/xhtml+xml" && ut === j && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    let x = R ? R.createHTML(e) : e;
    if (ut === j)
      try {
        o = new It().parseFromString(x, S);
      } catch (M) {
      }
    if (!o || !o.documentElement) {
      o = k.createDocument(ut, "template", null);
      try {
        o.documentElement.innerHTML = kt ? it : x;
      } catch (M) {
      }
    }
    let L = o.body || o.documentElement;
    return e && s && L.insertBefore(t.createTextNode(s), L.childNodes[0] || null), ut === j ? z.call(o, G ? "html" : "body")[0] : G ? o.documentElement : L;
  }, Ee = function(e) {
    return lt.call(e.ownerDocument || e, e, mt.SHOW_ELEMENT | mt.SHOW_COMMENT | mt.SHOW_TEXT | mt.SHOW_PROCESSING_INSTRUCTION, null);
  }, Ke = function(e) {
    return e instanceof Dt && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof wt) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, we = function(e) {
    return typeof A == "function" && e instanceof A;
  }, ft = function(e, o, s) {
    P[e] && Zt(P[e], (x) => {
      x.call(n, o, s, rt);
    });
  }, xe = function(e) {
    let o = null;
    if (ft("beforeSanitizeElements", e, null), Ke(e))
      return St(e), true;
    let s = h(e.nodeName);
    if (ft("uponSanitizeElement", e, { tagName: s, allowedTags: v }), e.hasChildNodes() && !we(e.firstElementChild) && U(/<[/\w]/g, e.innerHTML) && U(/<[/\w]/g, e.textContent))
      return St(e), true;
    if (!v[s] || C[s]) {
      if (!C[s] && Ae(s) && (p.tagNameCheck instanceof RegExp && U(p.tagNameCheck, s) || p.tagNameCheck instanceof Function && p.tagNameCheck(s)))
        return false;
      if (Pt && !at[s]) {
        let x = pt(e) || e.parentNode, L = Ht(e) || e.childNodes;
        if (L && x) {
          let M = L.length;
          for (let B = M - 1; B >= 0; --B)
            x.insertBefore(Ct(L[B], true), Bt(e));
        }
      }
      return St(e), true;
    }
    return e instanceof T && !Xe(e) || (s === "noscript" || s === "noembed" || s === "noframes") && U(/<\/no(script|embed|frames)/i, e.innerHTML) ? (St(e), true) : (bt && e.nodeType === 3 && (o = e.textContent, Zt([N, q, gt], (x) => {
      o = $t(o, x, " ");
    }), e.textContent !== o && (jt(n.removed, { element: e.cloneNode() }), e.textContent = o)), ft("afterSanitizeElements", e, null), false);
  }, ve = function(e, o, s) {
    if (dt && (o === "id" || o === "name") && (s in t || s in qt))
      return false;
    if (!(I && !w[o] && U(Lt, o))) {
      if (!(ht && U(ct, o))) {
        if (!u[o] || w[o]) {
          if (!(Ae(e) && (p.tagNameCheck instanceof RegExp && U(p.tagNameCheck, e) || p.tagNameCheck instanceof Function && p.tagNameCheck(e)) && (p.attributeNameCheck instanceof RegExp && U(p.attributeNameCheck, o) || p.attributeNameCheck instanceof Function && p.attributeNameCheck(o)) || o === "is" && p.allowCustomizedBuiltInElements && (p.tagNameCheck instanceof RegExp && U(p.tagNameCheck, s) || p.tagNameCheck instanceof Function && p.tagNameCheck(s))))
            return false;
        } else if (!Ot[o]) {
          if (!U(nt, $t(s, xt, ""))) {
            if (!((o === "src" || o === "xlink:href" || o === "href") && e !== "script" && tn(s, "data:") === 0 && Kt[e])) {
              if (!(Y && !U(et, $t(s, xt, "")))) {
                if (s)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, Ae = function(e) {
    return e !== "annotation-xml" && Ie(e, W);
  }, _e = function(e) {
    ft("beforeSanitizeAttributes", e, null);
    let { attributes: o } = e;
    if (!o)
      return;
    let s = { attrName: "", attrValue: "", keepAttr: true, allowedAttributes: u }, x = o.length;
    for (; x--; ) {
      let L = o[x], { name: M, namespaceURI: B, value: Rt } = L, Gt = h(M), H = M === "value" ? Rt : en(Rt);
      if (s.attrName = Gt, s.attrValue = H, s.keepAttr = true, s.forceKeepAttr = void 0, ft("uponSanitizeAttribute", e, s), H = s.attrValue, s.forceKeepAttr || (oe(M, e), !s.keepAttr))
        continue;
      if (!Tt && U(/\/>/i, H)) {
        oe(M, e);
        continue;
      }
      bt && Zt([N, q, gt], (Re) => {
        H = $t(H, Re, " ");
      });
      let Se = h(e.nodeName);
      if (ve(Se, Gt, H)) {
        if (zt && (Gt === "id" || Gt === "name") && (oe(M, e), H = ee + H), R && typeof f == "object" && typeof f.getAttributeType == "function" && !B)
          switch (f.getAttributeType(Se, Gt)) {
            case "TrustedHTML": {
              H = R.createHTML(H);
              break;
            }
            case "TrustedScriptURL": {
              H = R.createScriptURL(H);
              break;
            }
          }
        try {
          B ? e.setAttributeNS(B, M, H) : e.setAttribute(M, H), De(n.removed);
        } catch (Re) {
        }
      }
    }
    ft("afterSanitizeAttributes", e, null);
  }, qe = function l(e) {
    let o = null, s = Ee(e);
    for (ft("beforeSanitizeShadowDOM", e, null); o = s.nextNode(); )
      ft("uponSanitizeShadowNode", o, null), !xe(o) && (o.content instanceof E && l(o.content), _e(o));
    ft("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(l) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = null, s = null, x = null, L = null;
    if (kt = !l, kt && (l = "<!-->"), typeof l != "string" && !we(l))
      if (typeof l.toString == "function") {
        if (l = l.toString(), typeof l != "string")
          throw Vt("dirty is not a string, aborting");
      } else
        throw Vt("toString is not a function");
    if (!n.isSupported)
      return l;
    if (Ft || ne(e), n.removed = [], typeof l == "string" && (yt = false), yt) {
      if (l.nodeName) {
        let Rt = h(l.nodeName);
        if (!v[Rt] || C[Rt])
          throw Vt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (l instanceof A)
      o = ye("<!---->"), s = o.ownerDocument.importNode(l, true), s.nodeType === 1 && s.nodeName === "BODY" || s.nodeName === "HTML" ? o = s : o.appendChild(s);
    else {
      if (!ot && !bt && !G && l.indexOf("<") === -1)
        return R && vt ? R.createHTML(l) : l;
      if (o = ye(l), !o)
        return ot ? null : vt ? it : "";
    }
    o && Mt && St(o.firstChild);
    let M = Ee(yt ? l : o);
    for (; x = M.nextNode(); )
      xe(x) || (x.content instanceof E && qe(x.content), _e(x));
    if (yt)
      return l;
    if (ot) {
      if (Z)
        for (L = m.call(o.ownerDocument); o.firstChild; )
          L.appendChild(o.firstChild);
      else
        L = o;
      return (u.shadowroot || u.shadowrootmode) && (L = Ut.call(a, L, true)), L;
    }
    let B = G ? o.outerHTML : o.innerHTML;
    return G && v["!doctype"] && o.ownerDocument && o.ownerDocument.doctype && o.ownerDocument.doctype.name && U(Ue, o.ownerDocument.doctype.name) && (B = "<!DOCTYPE " + o.ownerDocument.doctype.name + `>
` + B), bt && Zt([N, q, gt], (Rt) => {
      B = $t(B, Rt, " ");
    }), R && vt ? R.createHTML(B) : B;
  }, n.setConfig = function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ne(l), Ft = true;
  }, n.clearConfig = function() {
    rt = null, Ft = false;
  }, n.isValidAttribute = function(l, e, o) {
    rt || ne({});
    let s = h(l), x = h(e);
    return ve(s, x, o);
  }, n.addHook = function(l, e) {
    typeof e == "function" && (P[l] = P[l] || [], jt(P[l], e));
  }, n.removeHook = function(l) {
    if (P[l])
      return De(P[l]);
  }, n.removeHooks = function(l) {
    P[l] && (P[l] = []);
  }, n.removeAllHooks = function() {
    P = {};
  }, n;
}
var ze = Fe();
var We = (r) => {
  switch (r) {
    case "success":
      return bn;
    case "info":
      return En;
    case "warning":
      return yn;
    case "error":
      return wn;
    default:
      return null;
  }
};
var Tn = Array(12).fill(0);
var Ye = ({ visible: r }) => import_react2.default.createElement("div", { className: "sonner-loading-wrapper", "data-visible": r }, import_react2.default.createElement("div", { className: "sonner-spinner" }, Tn.map((n, t) => import_react2.default.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${t}` }))));
var bn = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" }));
var yn = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" }));
var En = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" }));
var wn = import_react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react2.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }));
var je = () => {
  let [r, n] = import_react3.default.useState(false);
  return import_react3.default.useEffect(() => {
    let t = () => {
      n(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), r;
};
var ue = 1;
var fe = class {
  constructor() {
    this.subscribe = (n) => (this.subscribers.push(n), () => {
      let t = this.subscribers.indexOf(n);
      this.subscribers.splice(t, 1);
    });
    this.publish = (n) => {
      this.subscribers.forEach((t) => t(n));
    };
    this.addToast = (n) => {
      this.publish(n), this.toasts = [...this.toasts, n];
    };
    this.create = (n) => {
      var A;
      let { message: t, ...a } = n, g = typeof (n == null ? void 0 : n.id) == "number" || ((A = n.id) == null ? void 0 : A.length) > 0 ? n.id : ue++, E = this.toasts.find((T) => T.id === g), y = n.dismissible === void 0 ? true : n.dismissible;
      return E ? this.toasts = this.toasts.map((T) => T.id === g ? (this.publish({ ...T, ...n, id: g, title: t }), { ...T, ...n, id: g, dismissible: y, title: t }) : T) : this.addToast({ title: t, ...a, dismissible: y, id: g }), g;
    };
    this.dismiss = (n) => (n || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: n, dismiss: true })), n);
    this.message = (n, t) => this.create({ ...t, message: n });
    this.error = (n, t) => this.create({ ...t, message: n, type: "error" });
    this.success = (n, t) => this.create({ ...t, type: "success", message: n });
    this.info = (n, t) => this.create({ ...t, type: "info", message: n });
    this.warning = (n, t) => this.create({ ...t, type: "warning", message: n });
    this.loading = (n, t) => this.create({ ...t, type: "loading", message: n });
    this.promise = (n, t) => {
      if (!t)
        return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: n, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let g = n instanceof Promise ? n : n(), E = a !== void 0;
      return g.then((y) => {
        if (y && typeof y.ok == "boolean" && !y.ok) {
          E = false;
          let A = typeof t.error == "function" ? t.error(`HTTP error! status: ${y.status}`) : t.error, T = typeof t.description == "function" ? t.description(`HTTP error! status: ${y.status}`) : t.description;
          this.create({ id: a, type: "error", message: A, description: T });
        } else if (t.success !== void 0) {
          E = false;
          let A = typeof t.success == "function" ? t.success(y) : t.success, T = typeof t.description == "function" ? t.description(y) : t.description;
          this.create({ id: a, type: "success", message: A, description: T });
        }
      }).catch((y) => {
        if (t.error !== void 0) {
          E = false;
          let A = typeof t.error == "function" ? t.error(y) : t.error, T = typeof t.description == "function" ? t.description(y) : t.description;
          this.create({ id: a, type: "error", message: A, description: T });
        }
      }).finally(() => {
        var y;
        E && (this.dismiss(a), a = void 0), (y = t.finally) == null || y.call(t);
      }), a;
    };
    this.custom = (n, t) => {
      let a = (t == null ? void 0 : t.id) || ue++;
      return this.create({ jsx: n(a), id: a, ...t }), a;
    };
    this.subscribers = [], this.toasts = [];
  }
};
var K = new fe();
var xn = (r, n) => {
  let t = (n == null ? void 0 : n.id) || ue++;
  return K.addToast({ title: r, ...n, id: t }), t;
};
var vn = xn;
var An = Object.assign(vn, { success: K.success, info: K.info, warning: K.warning, error: K.error, custom: K.custom, message: K.message, promise: K.promise, dismiss: K.dismiss, loading: K.loading });
function me(r, { insertAt: n } = {}) {
  if (!r || typeof document == "undefined")
    return;
  let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", n === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r));
}
me(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Xt(r) {
  return r.label !== void 0 && typeof r.onClick == "function";
}
var Sn = 3;
var Rn = "32px";
var Nn = 4e3;
var Dn = 356;
var In = 14;
var Cn = 20;
var Ln = 200;
function Mn(...r) {
  return r.filter(Boolean).join(" ");
}
var Pn = (r) => {
  var Ot, Yt, At, _t, j, ut, kt;
  let { invert: n, toast: t, unstyled: a, interacting: g, setHeights: E, visibleToasts: y, heights: A, index: T, toasts: mt, expanded: wt, removeToast: Dt, closeButton: It, style: f, cancelButtonStyle: st, actionButtonStyle: Ct, className: Bt = "", descriptionClassName: Ht = "", duration: pt, position: R, gap: it, loadingIcon: k, expandByDefault: lt, classNames: m, icons: z, closeButtonAriaLabel: Ut = "Close toast", pauseWhenPageIsHidden: P, cn: N } = r, [q, gt] = import_react.default.useState(false), [Lt, ct] = import_react.default.useState(false), [et, xt] = import_react.default.useState(false), [W, nt] = import_react.default.useState(false), [v, b] = import_react.default.useState(0), [u, D] = import_react.default.useState(0), p = import_react.default.useRef(null), C = import_react.default.useRef(null), w = T === 0, ht = T + 1 <= y, I = t.type, Y = t.dismissible !== false, Tt = t.className || "", bt = t.descriptionClassName || "", G = import_react.default.useMemo(() => A.findIndex((c) => c.toastId === t.id) || 0, [A, t.id]), Ft = import_react.default.useMemo(() => {
    var c;
    return (c = t.closeButton) != null ? c : It;
  }, [t.closeButton, It]), Mt = import_react.default.useMemo(() => t.duration || pt || Nn, [t.duration, pt]), ot = import_react.default.useRef(0), Z = import_react.default.useRef(0), vt = import_react.default.useRef(0), dt = import_react.default.useRef(null), [zt, ee] = R.split("-"), Pt = import_react.default.useMemo(() => A.reduce((c, _, S) => S >= G ? c : c + _.height, 0), [A, G]), yt = je(), Et = t.invert || n, at = I === "loading";
  Z.current = import_react.default.useMemo(() => G * it + Pt, [G, Pt]), import_react.default.useEffect(() => {
    gt(true);
  }, []), import_react.default.useLayoutEffect(() => {
    if (!q)
      return;
    let c = C.current, _ = c.style.height;
    c.style.height = "auto";
    let S = c.getBoundingClientRect().height;
    c.style.height = _, D(S), E(($) => $.find((h) => h.toastId === t.id) ? $.map((h) => h.toastId === t.id ? { ...h, height: S } : h) : [{ toastId: t.id, height: S, position: t.position }, ...$]);
  }, [q, t.title, t.description, E, t.id]);
  let J = import_react.default.useCallback(() => {
    ct(true), b(Z.current), E((c) => c.filter((_) => _.toastId !== t.id)), setTimeout(() => {
      Dt(t);
    }, Ln);
  }, [t, Dt, E, Z]);
  import_react.default.useEffect(() => {
    if (t.promise && I === "loading" || t.duration === 1 / 0 || t.type === "loading")
      return;
    let c, _ = Mt;
    return wt || g || P && yt ? (() => {
      if (vt.current < ot.current) {
        let V = (/* @__PURE__ */ new Date()).getTime() - ot.current;
        _ = _ - V;
      }
      vt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      _ !== 1 / 0 && (ot.current = (/* @__PURE__ */ new Date()).getTime(), c = setTimeout(() => {
        var V;
        (V = t.onAutoClose) == null || V.call(t, t), J();
      }, _));
    })(), () => clearTimeout(c);
  }, [wt, g, lt, t, Mt, J, t.promise, I, P, yt]), import_react.default.useEffect(() => {
    let c = C.current;
    if (c) {
      let _ = c.getBoundingClientRect().height;
      return D(_), E((S) => [{ toastId: t.id, height: _, position: t.position }, ...S]), () => E((S) => S.filter(($) => $.toastId !== t.id));
    }
  }, [E, t.id]), import_react.default.useEffect(() => {
    t.delete && J();
  }, [J, t.delete]);
  function Kt() {
    return z != null && z.loading ? import_react.default.createElement("div", { className: "sonner-loader", "data-visible": I === "loading" }, z.loading) : k ? import_react.default.createElement("div", { className: "sonner-loader", "data-visible": I === "loading" }, k) : import_react.default.createElement(Ye, { visible: I === "loading" });
  }
  function Wt(c) {
    return { __html: ze.sanitize(c) };
  }
  return import_react.default.createElement("li", { "aria-live": t.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: C, className: N(Bt, Tt, m == null ? void 0 : m.toast, (Ot = t == null ? void 0 : t.classNames) == null ? void 0 : Ot.toast, m == null ? void 0 : m.default, m == null ? void 0 : m[I], (Yt = t == null ? void 0 : t.classNames) == null ? void 0 : Yt[I]), "data-sonner-toast": "", "data-styled": !(t.jsx || t.unstyled || a), "data-mounted": q, "data-promise": !!t.promise, "data-removed": Lt, "data-visible": ht, "data-y-position": zt, "data-x-position": ee, "data-index": T, "data-front": w, "data-swiping": et, "data-dismissible": Y, "data-type": I, "data-invert": Et, "data-swipe-out": W, "data-expanded": !!(wt || lt && q), style: { "--index": T, "--toasts-before": T, "--z-index": mt.length - T, "--offset": `${Lt ? v : Z.current}px`, "--initial-height": lt ? "auto" : `${u}px`, ...f, ...t.style }, onPointerDown: (c) => {
    at || !Y || (p.current = /* @__PURE__ */ new Date(), b(Z.current), c.target.setPointerCapture(c.pointerId), c.target.tagName !== "BUTTON" && (xt(true), dt.current = { x: c.clientX, y: c.clientY }));
  }, onPointerUp: () => {
    var $, V, h, rt;
    if (W || !Y)
      return;
    dt.current = null;
    let c = Number((($ = C.current) == null ? void 0 : $.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), _ = (/* @__PURE__ */ new Date()).getTime() - ((V = p.current) == null ? void 0 : V.getTime()), S = Math.abs(c) / _;
    if (Math.abs(c) >= Cn || S > 0.11) {
      b(Z.current), (h = t.onDismiss) == null || h.call(t, t), J(), nt(true);
      return;
    }
    (rt = C.current) == null || rt.style.setProperty("--swipe-amount", "0px"), xt(false);
  }, onPointerMove: (c) => {
    var qt;
    if (!dt.current || !Y)
      return;
    let _ = c.clientY - dt.current.y, S = c.clientX - dt.current.x, V = (zt === "top" ? Math.min : Math.max)(0, _), h = c.pointerType === "touch" ? 10 : 2;
    Math.abs(V) > h ? (qt = C.current) == null || qt.style.setProperty("--swipe-amount", `${_}px`) : Math.abs(S) > h && (dt.current = null);
  } }, Ft && !t.jsx ? import_react.default.createElement("button", { "aria-label": Ut, "data-disabled": at, "data-close-button": true, onClick: at || !Y ? () => {
  } : () => {
    var c;
    J(), (c = t.onDismiss) == null || c.call(t, t);
  }, className: N(m == null ? void 0 : m.closeButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.closeButton) }, import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, import_react.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), import_react.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, t.jsx || import_react.default.isValidElement(t.title) ? t.jsx || t.title : import_react.default.createElement(import_react.default.Fragment, null, I || t.icon || t.promise ? import_react.default.createElement("div", { "data-icon": "", className: N(m == null ? void 0 : m.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || Kt() : null, t.type !== "loading" ? t.icon || (z == null ? void 0 : z[I]) || We(I) : null) : null, import_react.default.createElement("div", { "data-content": "", className: N(m == null ? void 0 : m.content) }, import_react.default.createElement("div", { "data-title": "", className: N(m == null ? void 0 : m.title, (_t = t == null ? void 0 : t.classNames) == null ? void 0 : _t.title), dangerouslySetInnerHTML: Wt(t.title) }), t.description ? import_react.default.createElement("div", { "data-description": "", className: N(Ht, bt, m == null ? void 0 : m.description, (j = t == null ? void 0 : t.classNames) == null ? void 0 : j.description), dangerouslySetInnerHTML: Wt(t.description) }) : null), import_react.default.isValidElement(t.cancel) ? t.cancel : t.cancel && Xt(t.cancel) ? import_react.default.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || st, onClick: (c) => {
    Xt(t.cancel) && Y && (J(), t.cancel.onClick(c));
  }, className: N(m == null ? void 0 : m.cancelButton, (ut = t == null ? void 0 : t.classNames) == null ? void 0 : ut.cancelButton) }, t.cancel.label) : null, import_react.default.isValidElement(t.action) ? t.action : t.action && Xt(t.action) ? import_react.default.createElement("button", { "data-button": "", style: t.actionButtonStyle || Ct, onClick: (c) => {
    Xt(t.action) && (t.action.onClick(c), !c.defaultPrevented && J());
  }, className: N(m == null ? void 0 : m.actionButton, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.actionButton) }, t.action.label) : null));
};
function $e() {
  if (typeof window == "undefined" || typeof document == "undefined")
    return "ltr";
  let r = document.documentElement.getAttribute("dir");
  return r === "auto" || !r ? window.getComputedStyle(document.documentElement).direction : r;
}
var Jn = (r) => {
  let { invert: n, position: t = "bottom-right", hotkey: a = ["altKey", "KeyT"], expand: g, closeButton: E, className: y, offset: A, theme: T = "light", richColors: mt, duration: wt, style: Dt, visibleToasts: It = Sn, toastOptions: f, dir: st = $e(), gap: Ct = In, loadingIcon: Bt, icons: Ht, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: R, cn: it = Mn } = r, [k, lt] = import_react.default.useState([]), m = import_react.default.useMemo(() => Array.from(new Set([t].concat(k.filter((b) => b.position).map((b) => b.position)))), [k, t]), [z, Ut] = import_react.default.useState([]), [P, N] = import_react.default.useState(false), [q, gt] = import_react.default.useState(false), [Lt, ct] = import_react.default.useState(T !== "system" ? T : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), et = import_react.default.useRef(null), xt = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), W = import_react.default.useRef(null), nt = import_react.default.useRef(false), v = import_react.default.useCallback((b) => lt((u) => u.filter(({ id: D }) => D !== b.id)), []);
  return import_react.default.useEffect(() => K.subscribe((b) => {
    if (b.dismiss) {
      lt((u) => u.map((D) => D.id === b.id ? { ...D, delete: true } : D));
      return;
    }
    setTimeout(() => {
      import_react_dom.default.flushSync(() => {
        lt((u) => {
          let D = u.findIndex((p) => p.id === b.id);
          return D !== -1 ? [...u.slice(0, D), { ...u[D], ...b }, ...u.slice(D + 1)] : [b, ...u];
        });
      });
    });
  }), []), import_react.default.useEffect(() => {
    if (T !== "system") {
      ct(T);
      return;
    }
    T === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ct("dark") : ct("light")), typeof window != "undefined" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: b }) => {
      ct(b ? "dark" : "light");
    });
  }, [T]), import_react.default.useEffect(() => {
    k.length <= 1 && N(false);
  }, [k]), import_react.default.useEffect(() => {
    let b = (u) => {
      var p, C;
      a.every((w) => u[w] || u.code === w) && (N(true), (p = et.current) == null || p.focus()), u.code === "Escape" && (document.activeElement === et.current || (C = et.current) != null && C.contains(document.activeElement)) && N(false);
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [a]), import_react.default.useEffect(() => {
    if (et.current)
      return () => {
        W.current && (W.current.focus({ preventScroll: true }), W.current = null, nt.current = false);
      };
  }, [et.current]), k.length ? import_react.default.createElement("section", { "aria-label": `${pt} ${xt}`, tabIndex: -1 }, m.map((b, u) => {
    var C;
    let [D, p] = b.split("-");
    return import_react.default.createElement("ol", { key: b, dir: st === "auto" ? $e() : st, tabIndex: -1, ref: et, className: y, "data-sonner-toaster": true, "data-theme": Lt, "data-rich-colors": mt, "data-y-position": D, "data-x-position": p, style: { "--front-toast-height": `${((C = z[0]) == null ? void 0 : C.height) || 0}px`, "--offset": typeof A == "number" ? `${A}px` : A || Rn, "--width": `${Dn}px`, "--gap": `${Ct}px`, ...Dt }, onBlur: (w) => {
      nt.current && !w.currentTarget.contains(w.relatedTarget) && (nt.current = false, W.current && (W.current.focus({ preventScroll: true }), W.current = null));
    }, onFocus: (w) => {
      w.target instanceof HTMLElement && w.target.dataset.dismissible === "false" || nt.current || (nt.current = true, W.current = w.relatedTarget);
    }, onMouseEnter: () => N(true), onMouseMove: () => N(true), onMouseLeave: () => {
      q || N(false);
    }, onPointerDown: (w) => {
      w.target instanceof HTMLElement && w.target.dataset.dismissible === "false" || gt(true);
    }, onPointerUp: () => gt(false) }, k.filter((w) => !w.position && u === 0 || w.position === b).map((w, ht) => {
      var I, Y;
      return import_react.default.createElement(Pn, { key: w.id, icons: Ht, index: ht, toast: w, duration: (I = f == null ? void 0 : f.duration) != null ? I : wt, className: f == null ? void 0 : f.className, descriptionClassName: f == null ? void 0 : f.descriptionClassName, invert: n, visibleToasts: It, closeButton: (Y = f == null ? void 0 : f.closeButton) != null ? Y : E, interacting: q, position: b, style: f == null ? void 0 : f.style, unstyled: f == null ? void 0 : f.unstyled, classNames: f == null ? void 0 : f.classNames, cancelButtonStyle: f == null ? void 0 : f.cancelButtonStyle, actionButtonStyle: f == null ? void 0 : f.actionButtonStyle, removeToast: v, toasts: k.filter((Tt) => Tt.position == w.position), heights: z.filter((Tt) => Tt.position == w.position), setHeights: Ut, expandByDefault: g, gap: Ct, loadingIcon: Bt, expanded: P, pauseWhenPageIsHidden: R, cn: it });
    }));
  })) : null;
};
export {
  Jn as Toaster,
  An as toast
};
/*! Bundled license information:

sonner/dist/index.mjs:
  (*! Bundled license information:
  
  dompurify/dist/purify.es.mjs:
    (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
  *)
*/
//# sourceMappingURL=sonner.js.map
