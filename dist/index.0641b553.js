// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6IXwR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
/**
 * @typedef Command
 * @property {string} command
 * @property {string} responseType
 * @property {string?} value
 * @property {string[]?} headers
 * @property {string[]?} rows
 */ /**
 * @type {Command[]} commands
 */ var _commandsJson = require("./resources/commands.json");
var _commandsJsonDefault = parcelHelpers.interopDefault(_commandsJson);
var _customComands = require("./custom-comands");
var _draggable = require("./draggable");
// Tableau contenant les commandes (utile pour la complétion des commandes)
let commandsList = [];
_commandsJsonDefault.default.forEach((c)=>{
    commandsList.push(c.command);
});
// Commandes qui nécessitent un traitement JS
const customCommands = [
    "clear",
    "dark",
    "light",
    "get cv"
];
commandsList = commandsList.concat(customCommands);
// Commandes 'easter eggs' non disponibles à l'autocomplétion
const hiddenCommands = [
    "pif",
    "rm -rf /"
];
// Ajout de la possibilité de déplacer la fenêtre pour les PC test test test
if (window.innerWidth > 1024) _draggable.dragElement(document.querySelector(".terminal"));
// Tableau contenant l'historique des commandes
const commandsHistory = [];
let historyMode = false;
let historyIndex = -1;
const terminalBody = document.querySelector(".terminal__body");
// Ajout de la ligne par défaut
addNewLine();
// Easter egg de décembre, ajout de flocons de neige
const now = new Date();
if (now.getMonth() === 11) {
    let htmlFlakes = "";
    for(let i = 0; i < 6; i++)htmlFlakes += `<div class="snowflake">❅</div><div class="snowflake">❆</div>`;
    const html = `<div class="snowflakes" aria-hidden="true">${htmlFlakes}</div>`;
    document.body.append(stringToDom(html));
}
// Mise en mode sombre si le thème du navigateur est sombre
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) _customComands.setDarkMode(true);
/**
 * Retourne le HTML de la réponse pour une commande donnée
 * @param {string} command
 */ function getDomForCommand(command) {
    const commandObj = _commandsJsonDefault.default.find((el)=>el.command === command
    );
    let html = "";
    if (commandObj === undefined) html = `'${command.split(" ")[0]}' n’est pas reconnu en tant que commande interne ou externe, un programme exécutable ou un fichier de commandes. Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.`;
    else {
        if (commandObj.responseType === "list" && Array.isArray(commandObj.value)) {
            html = "<ul>";
            html += commandObj.value.map((s)=>`<li>${s}</li>`
            ).join("");
            html += "</ul>";
        } else if (commandObj.responseType === "text") html = commandObj.value;
        else if (commandObj.responseType === "table") {
            const headers = commandObj.headers;
            const rows = commandObj.rows;
            const thsHtml = headers.map((h)=>`<th>${h}</th>`
            ).join("");
            const tdsHtml = rows.map((r)=>`<tr>${r.map((rtd)=>`<td>${rtd}</td>`
                ).join("")}</tr>`
            ).join("");
            html = `<table><thead><tr>${thsHtml}</tr></thead><tbody>${tdsHtml}</tbody></table>`;
        } else if (commandObj.responseType === "code") html = `<pre>${commandObj.value.join("\n")}</pre>`;
    }
    return html;
}
/**
 * Ajoute une nouvelle ligne input de commande et désactive la précédente.
 * @param {string|null} previousUid uid de la ligne précédente.
 */ function addNewLine(previousUid = null) {
    const uid = Math.random().toString(36).replace("0.", "");
    // terminal__line
    const terminalLineEl = document.createElement("div");
    terminalLineEl.classList.add("terminal__line");
    // terminal__response
    const terminalResponseEl = document.createElement("div");
    terminalResponseEl.classList.add("terminal__response");
    terminalResponseEl.id = `response-${uid}`;
    // input text
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.id = `input-${uid}`;
    inputEl.autocapitalize = "off";
    inputEl.dataset.uid = uid;
    inputEl.dataset.active = "1"; // Utile pour le focus
    inputEl.addEventListener("keydown", onCommandInput);
    terminalLineEl.appendChild(inputEl);
    if (previousUid) {
        const previousInputEl = document.getElementById(previousUid);
        if (previousInputEl) {
            previousInputEl.setAttribute("disabled", "true");
            previousInputEl.removeEventListener("keydown", onCommandInput);
            delete previousInputEl.dataset.active;
        }
    }
    document.getElementById("terminal").appendChild(terminalLineEl);
    document.getElementById("terminal").appendChild(terminalResponseEl);
    inputEl.focus(); // Ajoute le focus dès la création du champs
}
/**
 * Gère le keydown sur l'input de la commande.
 * @param e
 */ function onCommandInput(e) {
    const commandValue = e.target.value.trim().toLowerCase();
    if (e.keyCode === 13) // ENTER
    {
        if (commandValue !== "") {
            historyMode = false;
            const idResponse = `response-${e.target.dataset.uid}`;
            const responseEl = document.getElementById(idResponse);
            let html;
            if (hiddenCommands.includes(commandValue) || customCommands.includes(commandValue)) html = handleCustomCommands(commandValue);
            else html = getDomForCommand(commandValue);
            if (responseEl) {
                responseEl.innerHTML = html;
                commandsHistory.push(commandValue);
                addNewLine(e.target.id);
            }
        }
    } else if (e.keyCode === 9) {
        // TAB
        e.preventDefault();
        if (commandValue === "") this.value = "help";
        else {
            const matchingCommand = commandsList.find((c)=>c.startsWith(commandValue)
            );
            if (matchingCommand) this.value = matchingCommand;
        }
        historyMode = false;
    } else if (e.keyCode === 38 || e.keyCode === 40) {
        // UP / DOWN
        // Gestion de l'historique
        if (commandsHistory.length > 0) {
            if (historyMode === false) historyIndex = commandsHistory.length - 1;
            else {
                if (e.keyCode === 38 && historyIndex !== 0) // UP
                historyIndex--;
                else if (e.keyCode === 40 && historyIndex !== commandsHistory.length - 1) historyIndex++;
            }
            this.value = commandsHistory[historyIndex];
        }
        historyMode = true;
    }
}
/**
 * Permet de gérer les commandes cachées (non proposées dans l'autocomplétion)
 * @param {string} command
 * @returns {string|void} Html à afficher dans la réponse de la commande
 */ function handleCustomCommands(command) {
    switch(command){
        case "pif":
            _customComands.pif();
            return "C'est la fête !";
        case "light":
            if (!document.body.classList.contains("dark-mode")) return "Vous êtes déjà en mode clair";
            _customComands.setDarkMode(false);
            return "Vous êtes maintenant en mode clair.";
        case "dark":
            if (document.body.classList.contains("dark-mode")) return "Vous êtes déjà en mode sombre";
            _customComands.setDarkMode(true);
            return "Vous êtes maintenant en mode sombre.";
        case "get cv":
            _customComands.getCV();
            return "Le CV va être téléchargé.";
        case "rm -rf /":
            _customComands.rmRf();
            return "w4dhIHZhIFDDiVRFUiAh";
        case "clear":
            terminalBody.innerHTML = `<div id="terminal"></div>`;
            return;
    }
}
/**
 * Convert HTML to DOM object
 * @param html
 * @returns {DocumentFragment}
 */ function stringToDom(html) {
    return document.createRange().createContextualFragment(html);
}
// ------------------------------------------------------------------------------------
//                                EVENT LISTENNER
// ------------------------------------------------------------------------------------
// Ajout du focus sur l'input même si on clique sur le body (pour garder le curseur)
document.body.addEventListener("click", function(e) {
    if (e.target.tagName !== "INPUT") {
        const activeInput = document.querySelector("input[data-active]");
        activeInput.focus();
    }
});
document.querySelector(".fake-close").addEventListener("click", function(e) {
    const terminalEl = document.querySelector(".terminal");
    terminalEl.parentElement.removeChild(terminalEl);
});

},{"./resources/commands.json":"6jRee","./custom-comands":"9MjcF","./draggable":"1qqD7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6jRee":[function(require,module,exports) {
module.exports = JSON.parse("[{\"command\":\"help\",\"responseType\":\"list\",\"value\":[\"<code>about</code> : Display some information about myself\",\"<code>clear</code> : Clean the terminal\",\"<code>experiences</code> : Display all my experiences\",\"<code>get cv</code> : Download my CV\",\"<code>help</code> : Display this help\",\"<code>hobby</code> : Display all my hobbies\",\"<code>projets-perso</code> : Display all my personal projects\",\"<code>dark/light</code> : Change the theme\",\"<em>You can use the TAB button to complete a command</em>\",\"<em>You can retrieve the previous command using the arrow</em>\"]},{\"command\":\"about\",\"responseType\":\"code\",\"value\":[\"{\",\"   \\\"nom\\\" : \\\"Laurent Risser\\\",\",\"   \\\"poste\\\" : \\\"Data Engineer\\\",\",\"   \\\"experience\\\" : \\\"2 years\\\",\",\"   \\\"ville\\\" : \\\"Montreal, Canada\\\"\",\"}\"]},{\"command\":\"experiences\",\"responseType\":\"table\",\"headers\":[\"Date\",\"Position\",\"Company\",\"Description\"],\"rows\":[[\"02/2021<br/>Today\",\"Data Engineer\",\"GEANIZ<br/><em>Montréal, Canada</em>\",\"Build a data ingestion pipeline using Python and Google Cloud<br/>Built several automatic tools to extract and transform various files\"],[\"08/2019<br/>01/2021\",\"Bilingual Client Support\",\"Apexa Corp<br/><em>Toronto, Canada</em>\",\"Tracked, manage and resolve technical client’s issues using JIRA<br/>Helped the development by testing an upcoming new sprint release using a testing environment.\"],[\"01/2018<br/>07/2019\",\"Bilingual Health Coordinator\",\"Shoppers Drug Mart Specialty Health Network <br/><em>Toronto, Montreal</em>\",\"Contact, and schedule high cost drug deliveries with patients accross Canada<br/>Effectively coordinating processes and procedures. Working cooperatively with other departments within the company (reimbursement, clinical coordination).\"],[\"09/2017<br/>12/2017\",\"Bilingual Customer Service Representative\",\"Millenium One Solution<br/><em>Toronto, Canada</em>\",\"Responded and communicated to customer inquiries in a pleasant, courteous, professional, and well-informed manner.\"]]},{\"command\":\"hobby\",\"responseType\":\"list\",\"value\":[\"Sport: Road Cycling, Running\",\"IT: Python, GCP, AWS\",\"Others: Movies, Politics, Photography\"]},{\"command\":\"projets-perso\",\"responseType\":\"table\",\"headers\":[\"Nom\",\"Description\",\"Tech\",\"Liens\"],\"rows\":[[\"Chartsfinder - Web<br/>(2021)\",\"Application web pour trouver rapidement des cartes aéronautiques. Une version C# existait déjà mais j'ai préféré la mettre à jour avec une version web qui est plus simple d'utilisation.\",\"Angular 11, PHP 7.4\",\"<a href=\\\"https://chartsfinder.adautry.fr\\\" target=\\\"blank\\\">Lien</a>\"],[\"Personal website<br/>(2021)\",\"Site web personnel me permettant de montrer mes projets et de déployer une nouvelle version du logiciel.<br/>Il y a même un jeu caché...\",\"Symfony 5\",\"<a href=\\\"https://adautry.fr\\\" target=\\\"blank\\\">Lien</a>\"],[\"Chartsfinder - Software<br/>(2020)\",\"Logiciel permettant de récupérer rapidement les cartes aéronautiques.\",\"C# WPF\",\"<a href=\\\"https://adautry.fr/software/chartsfinder\\\" target=\\\"blank\\\">Lien</a>\"]]}]");

},{}],"9MjcF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Affiche des confettis sur la page
 */ parcelHelpers.export(exports, "pif", ()=>pif
);
parcelHelpers.export(exports, "setDarkMode", ()=>setDarkMode
);
parcelHelpers.export(exports, "getCV", ()=>getCV
);
parcelHelpers.export(exports, "rmRf", ()=>rmRf
);
var _canvasConfetti = require("canvas-confetti");
var _canvasConfettiDefault = parcelHelpers.interopDefault(_canvasConfetti);
var _fireworksJs = require("fireworks-js");
function pif() {
    const count = 200;
    const defaults = {
        origin: {
            y: 0.7
        }
    };
    function fire(particleRatio, opts) {
        _canvasConfettiDefault.default(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }
    fire(0.25, {
        spread: 26,
        startVelocity: 55
    });
    fire(0.2, {
        spread: 60
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45
    });
}
function setDarkMode(value) {
    if (value) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
}
function getCV() {
    const a = document.createElement("a");
    a.href = "resources/data_engineer_resume_laurent_risser.pdf";
    a.setAttribute("download", "data_engineer_resume_laurent_risser.pdf");
    a.click();
}
function rmRf() {
    setDarkMode(true);
    document.body.classList.add("firework");
    const fireworks = new _fireworksJs.Fireworks(document.body, {
        mouse: {
            click: true,
            move: false,
            max: 7
        }
    });
    fireworks.start();
}

},{"canvas-confetti":"cIEGq","fireworks-js":"7PZsK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIEGq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
);
// canvas-confetti v1.5.1 built on 2022-02-08T22:20:40.944Z
var module = {};
// source content
(function main(global, module1, isWorker, workerSize) {
    var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
    function noop() {}
    // create a promise if it exists, otherwise, just
    // call the function directly
    function promise(func) {
        var ModulePromise = module1.exports.Promise;
        var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
        if (typeof Prom === 'function') return new Prom(func);
        func(noop, noop);
        return null;
    }
    var raf = function() {
        var TIME = Math.floor(1000 / 60);
        var frame, cancel;
        var frames = {};
        var lastFrameTime = 0;
        if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
            frame = function(cb) {
                var id = Math.random();
                frames[id] = requestAnimationFrame(function onFrame(time) {
                    if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
                        lastFrameTime = time;
                        delete frames[id];
                        cb();
                    } else frames[id] = requestAnimationFrame(onFrame);
                });
                return id;
            };
            cancel = function(id) {
                if (frames[id]) cancelAnimationFrame(frames[id]);
            };
        } else {
            frame = function(cb) {
                return setTimeout(cb, TIME);
            };
            cancel = function(timer) {
                return clearTimeout(timer);
            };
        }
        return {
            frame: frame,
            cancel: cancel
        };
    }();
    var getWorker = function() {
        var worker1;
        var prom;
        var resolves = {};
        function decorate(worker) {
            function execute(options, callback) {
                worker.postMessage({
                    options: options || {},
                    callback: callback
                });
            }
            worker.init = function initWorker(canvas) {
                var offscreen = canvas.transferControlToOffscreen();
                worker.postMessage({
                    canvas: offscreen
                }, [
                    offscreen
                ]);
            };
            worker.fire = function fireWorker(options, size, done) {
                if (prom) {
                    execute(options, null);
                    return prom;
                }
                var id = Math.random().toString(36).slice(2);
                prom = promise(function(resolve) {
                    function workerDone(msg) {
                        if (msg.data.callback !== id) return;
                        delete resolves[id];
                        worker.removeEventListener('message', workerDone);
                        prom = null;
                        done();
                        resolve();
                    }
                    worker.addEventListener('message', workerDone);
                    execute(options, id);
                    resolves[id] = workerDone.bind(null, {
                        data: {
                            callback: id
                        }
                    });
                });
                return prom;
            };
            worker.reset = function resetWorker() {
                worker.postMessage({
                    reset: true
                });
                for(var id in resolves){
                    resolves[id]();
                    delete resolves[id];
                }
            };
        }
        return function() {
            if (worker1) return worker1;
            if (!isWorker && canUseWorker) {
                var code = [
                    'var CONFETTI, SIZE = {}, module = {};',
                    '(' + main.toString() + ')(this, module, true, SIZE);',
                    'onmessage = function(msg) {',
                    '  if (msg.data.options) {',
                    '    CONFETTI(msg.data.options).then(function () {',
                    '      if (msg.data.callback) {',
                    '        postMessage({ callback: msg.data.callback });',
                    '      }',
                    '    });',
                    '  } else if (msg.data.reset) {',
                    '    CONFETTI.reset();',
                    '  } else if (msg.data.resize) {',
                    '    SIZE.width = msg.data.resize.width;',
                    '    SIZE.height = msg.data.resize.height;',
                    '  } else if (msg.data.canvas) {',
                    '    SIZE.width = msg.data.canvas.width;',
                    '    SIZE.height = msg.data.canvas.height;',
                    '    CONFETTI = module.exports.create(msg.data.canvas);',
                    '  }',
                    '}', 
                ].join('\n');
                try {
                    worker1 = new Worker(URL.createObjectURL(new Blob([
                        code
                    ])));
                } catch (e) {
                    // eslint-disable-next-line no-console
                    typeof console.warn === 'function' && console.warn('🎊 Could not load worker', e);
                    return null;
                }
                decorate(worker1);
            }
            return worker1;
        };
    }();
    var defaults = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: [
            'square',
            'circle'
        ],
        zIndex: 100,
        colors: [
            '#26ccff',
            '#a25afd',
            '#ff5e7e',
            '#88ff5a',
            '#fcff42',
            '#ffa62d',
            '#ff36ff'
        ],
        // probably should be true, but back-compat
        disableForReducedMotion: false,
        scalar: 1
    };
    function convert(val, transform) {
        return transform ? transform(val) : val;
    }
    function isOk(val) {
        return !(val === null || val === undefined);
    }
    function prop(options, name, transform) {
        return convert(options && isOk(options[name]) ? options[name] : defaults[name], transform);
    }
    function onlyPositiveInt(number) {
        return number < 0 ? 0 : Math.floor(number);
    }
    function randomInt(min, max) {
        // [min, max)
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function toDecimal(str) {
        return parseInt(str, 16);
    }
    function colorsToRgb(colors) {
        return colors.map(hexToRgb);
    }
    function hexToRgb(str) {
        var val = String(str).replace(/[^0-9a-f]/gi, '');
        if (val.length < 6) val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
        return {
            r: toDecimal(val.substring(0, 2)),
            g: toDecimal(val.substring(2, 4)),
            b: toDecimal(val.substring(4, 6))
        };
    }
    function getOrigin(options) {
        var origin = prop(options, 'origin', Object);
        origin.x = prop(origin, 'x', Number);
        origin.y = prop(origin, 'y', Number);
        return origin;
    }
    function setCanvasWindowSize(canvas) {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    }
    function setCanvasRectSize(canvas) {
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    function getCanvas(zIndex) {
        var canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0px';
        canvas.style.left = '0px';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = zIndex;
        return canvas;
    }
    function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
        context.save();
        context.translate(x, y);
        context.rotate(rotation);
        context.scale(radiusX, radiusY);
        context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
        context.restore();
    }
    function randomPhysics(opts) {
        var radAngle = opts.angle * (Math.PI / 180);
        var radSpread = opts.spread * (Math.PI / 180);
        return {
            x: opts.x,
            y: opts.y,
            wobble: Math.random() * 10,
            wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
            velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
            angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
            tiltAngle: (Math.random() * 0.5 + 0.25) * Math.PI,
            color: opts.color,
            shape: opts.shape,
            tick: 0,
            totalTicks: opts.ticks,
            decay: opts.decay,
            drift: opts.drift,
            random: Math.random() + 2,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: opts.gravity * 3,
            ovalScalar: 0.6,
            scalar: opts.scalar
        };
    }
    function updateFetti(context, fetti) {
        fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
        fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
        fetti.wobble += fetti.wobbleSpeed;
        fetti.velocity *= fetti.decay;
        fetti.tiltAngle += 0.1;
        fetti.tiltSin = Math.sin(fetti.tiltAngle);
        fetti.tiltCos = Math.cos(fetti.tiltAngle);
        fetti.random = Math.random() + 2;
        fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
        fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
        var progress = (fetti.tick++) / fetti.totalTicks;
        var x1 = fetti.x + fetti.random * fetti.tiltCos;
        var y1 = fetti.y + fetti.random * fetti.tiltSin;
        var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
        var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
        context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
        context.beginPath();
        if (fetti.shape === 'circle') context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
        else {
            context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
            context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
            context.lineTo(Math.floor(x2), Math.floor(y2));
            context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
        }
        context.closePath();
        context.fill();
        return fetti.tick < fetti.totalTicks;
    }
    function animate(canvas, fettis1, resizer, size, done) {
        var animatingFettis = fettis1.slice();
        var context = canvas.getContext('2d');
        var animationFrame;
        var destroy;
        var prom = promise(function(resolve) {
            function onDone() {
                animationFrame = destroy = null;
                context.clearRect(0, 0, size.width, size.height);
                done();
                resolve();
            }
            function update() {
                if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
                    size.width = canvas.width = workerSize.width;
                    size.height = canvas.height = workerSize.height;
                }
                if (!size.width && !size.height) {
                    resizer(canvas);
                    size.width = canvas.width;
                    size.height = canvas.height;
                }
                context.clearRect(0, 0, size.width, size.height);
                animatingFettis = animatingFettis.filter(function(fetti) {
                    return updateFetti(context, fetti);
                });
                if (animatingFettis.length) animationFrame = raf.frame(update);
                else onDone();
            }
            animationFrame = raf.frame(update);
            destroy = onDone;
        });
        return {
            addFettis: function(fettis) {
                animatingFettis = animatingFettis.concat(fettis);
                return prom;
            },
            canvas: canvas,
            promise: prom,
            reset: function() {
                if (animationFrame) raf.cancel(animationFrame);
                if (destroy) destroy();
            }
        };
    }
    function confettiCannon(canvas, globalOpts) {
        var isLibCanvas = !canvas;
        var allowResize = !!prop(globalOpts || {}, 'resize');
        var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
        var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
        var worker = shouldUseWorker ? getWorker() : null;
        var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
        var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
        var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
        var animationObj;
        function fireLocal(options, size, done) {
            var particleCount = prop(options, 'particleCount', onlyPositiveInt);
            var angle = prop(options, 'angle', Number);
            var spread = prop(options, 'spread', Number);
            var startVelocity = prop(options, 'startVelocity', Number);
            var decay = prop(options, 'decay', Number);
            var gravity = prop(options, 'gravity', Number);
            var drift = prop(options, 'drift', Number);
            var colors = prop(options, 'colors', colorsToRgb);
            var ticks = prop(options, 'ticks', Number);
            var shapes = prop(options, 'shapes');
            var scalar = prop(options, 'scalar');
            var origin = getOrigin(options);
            var temp = particleCount;
            var fettis = [];
            var startX = canvas.width * origin.x;
            var startY = canvas.height * origin.y;
            while(temp--)fettis.push(randomPhysics({
                x: startX,
                y: startY,
                angle: angle,
                spread: spread,
                startVelocity: startVelocity,
                color: colors[temp % colors.length],
                shape: shapes[randomInt(0, shapes.length)],
                ticks: ticks,
                decay: decay,
                gravity: gravity,
                drift: drift,
                scalar: scalar
            }));
            // if we have a previous canvas already animating,
            // add to it
            if (animationObj) return animationObj.addFettis(fettis);
            animationObj = animate(canvas, fettis, resizer, size, done);
            return animationObj.promise;
        }
        function fire(options) {
            var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
            var zIndex = prop(options, 'zIndex', Number);
            if (disableForReducedMotion && preferLessMotion) return promise(function(resolve) {
                resolve();
            });
            if (isLibCanvas && animationObj) // use existing canvas from in-progress animation
            canvas = animationObj.canvas;
            else if (isLibCanvas && !canvas) {
                // create and initialize a new canvas
                canvas = getCanvas(zIndex);
                document.body.appendChild(canvas);
            }
            if (allowResize && !initialized) // initialize the size of a user-supplied canvas
            resizer(canvas);
            var size = {
                width: canvas.width,
                height: canvas.height
            };
            if (worker && !initialized) worker.init(canvas);
            initialized = true;
            if (worker) canvas.__confetti_initialized = true;
            function onResize() {
                if (worker) {
                    // TODO this really shouldn't be immediate, because it is expensive
                    var obj = {
                        getBoundingClientRect: function() {
                            if (!isLibCanvas) return canvas.getBoundingClientRect();
                        }
                    };
                    resizer(obj);
                    worker.postMessage({
                        resize: {
                            width: obj.width,
                            height: obj.height
                        }
                    });
                    return;
                }
                // don't actually query the size here, since this
                // can execute frequently and rapidly
                size.width = size.height = null;
            }
            function done() {
                animationObj = null;
                if (allowResize) global.removeEventListener('resize', onResize);
                if (isLibCanvas && canvas) {
                    document.body.removeChild(canvas);
                    canvas = null;
                    initialized = false;
                }
            }
            if (allowResize) global.addEventListener('resize', onResize, false);
            if (worker) return worker.fire(options, size, done);
            return fireLocal(options, size, done);
        }
        fire.reset = function() {
            if (worker) worker.reset();
            if (animationObj) animationObj.reset();
        };
        return fire;
    }
    // Make default export lazy to defer worker creation until called.
    var defaultFire;
    function getDefaultFire() {
        if (!defaultFire) defaultFire = confettiCannon(null, {
            useWorker: true,
            resize: true
        });
        return defaultFire;
    }
    module1.exports = function() {
        return getDefaultFire().apply(this, arguments);
    };
    module1.exports.reset = function() {
        getDefaultFire().reset();
    };
    module1.exports.create = confettiCannon;
})(function() {
    if (typeof window !== 'undefined') return window;
    if (typeof self !== 'undefined') return self;
    return this || {};
}(), module, false);
// end source content
exports.default = module.exports;
var create = module.exports.create;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7PZsK":[function(require,module,exports) {
/*!
 * fireworks-js 1.3.5 by Vitalij Ryndin (https://crashmax.ru)
 * https://fireworks.js.org
 * License MIT
 */ !function(t, i) {
    var s, e;
    module.exports = i();
}(this, function() {
    return (()=>{
        var t1 = {
            511: (t2, i2, s2)=>{
                Object.defineProperty(i2, "__esModule", {
                    value: !0
                }), i2.Explosion = void 0;
                var e = s2(909);
                i2.Explosion = class {
                    constructor(t){
                        var { x: i , y: s , ctx: h , hue: n , exp: o , gravity: a , friction: r , brightness: c , explosionLength: _  } = t;
                        for(this._coordinates = [], this._alpha = 1, this._x = i, this._y = s, this._exp = o, this._ctx = h, this._gravity = a, this._friction = r, this._explosionLength = _; this._explosionLength--;)this._coordinates.push([
                            i,
                            s
                        ]);
                        this._angle = (0, e.randomFloat)(0, 2 * Math.PI), this._speed = (0, e.randomInt)(1, 10), this._hue = (0, e.randomInt)(n - 20, n + 20), this._brightness = (0, e.randomInt)(c.min, c.max), this._decay = (0, e.randomFloat)(c.decay.min, c.decay.max);
                    }
                    update(t) {
                        this._coordinates.pop(), this._coordinates.unshift([
                            this._x,
                            this._y
                        ]), this._speed *= this._friction, this._x += Math.cos(this._angle) * this._speed, this._y += Math.sin(this._angle) * this._speed + this._gravity, this._alpha -= this._decay, this._alpha <= this._decay && t();
                    }
                    draw() {
                        var t = this._coordinates.length - 1;
                        this._ctx.beginPath(), this._exp && (this._ctx.arc(this._x, this._y, (0, e.randomFloat)(0.5, 1.5), 0, 2 * Math.PI), this._ctx.fill()), this._ctx.fillStyle = (0, e.hsla)(this._hue, this._brightness, this._alpha), this._ctx.moveTo(this._coordinates[t][0], this._coordinates[t][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, e.hsla)(this._hue, this._brightness, this._alpha), this._ctx.stroke();
                    }
                };
            },
            909: (t3, i3)=>{
                Object.defineProperty(i3, "__esModule", {
                    value: !0
                }), i3.hsla = i3.getDistance = i3.randomInt = i3.randomFloat = void 0, i3.randomFloat = function(t, i) {
                    return Math.random() * (i - t) + t;
                }, i3.randomInt = function(t, i) {
                    return Math.floor(t + Math.random() * (i + 1 - t));
                }, i3.getDistance = function(t, i, s, e) {
                    var h = Math.pow;
                    return Math.sqrt(h(t - s, 2) + h(i - e, 2));
                }, i3.hsla = function(t, i) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    return "hsla(".concat(t, ", 100%, ").concat(i, "%, ").concat(s, ")");
                };
            },
            449: function(t4, i4, s3) {
                var e2 = this && this.__awaiter || function(t5, i5, s, e) {
                    return new (s || (s = Promise))(function(h, n) {
                        function o(t) {
                            try {
                                r(e.next(t));
                            } catch (t6) {
                                n(t6);
                            }
                        }
                        function a(t) {
                            try {
                                r(e.throw(t));
                            } catch (t7) {
                                n(t7);
                            }
                        }
                        function r(t8) {
                            var i;
                            t8.done ? h(t8.value) : (i = t8.value, i instanceof s ? i : new s(function(t) {
                                t(i);
                            })).then(o, a);
                        }
                        r((e = e.apply(t5, i5 || [])).next());
                    });
                };
                Object.defineProperty(i4, "__esModule", {
                    value: !0
                }), i4.Sound = void 0;
                var h1 = s3(909);
                i4.Sound = class {
                    constructor(t){
                        this._buffer = [], this.onInit = !0, this._audioContext = new (window.AudioContext || window.webkitAudioContext), this.options = Object.assign({
                            enabled: !1,
                            files: [
                                "explosion0.mp3",
                                "explosion1.mp3",
                                "explosion2.mp3"
                            ],
                            volume: {
                                min: 4,
                                max: 8
                            }
                        }, t), this.init();
                    }
                    init() {
                        this.onInit && this.options.enabled && (this.onInit = !1, this.load());
                    }
                    load() {
                        return e2(this, void 0, void 0, function*() {
                            for (var t9 of this.options.files){
                                var i = yield (yield fetch(t9)).arrayBuffer();
                                this._audioContext.decodeAudioData(i).then((t)=>{
                                    this._buffer.push(t);
                                }).catch((t)=>{
                                    throw t;
                                });
                            }
                        });
                    }
                    play() {
                        if (this.options.enabled && this._buffer.length) {
                            var t = this._audioContext.createBufferSource(), i = this._buffer[(0, h1.randomInt)(0, this._buffer.length - 1)], s = this._audioContext.createGain();
                            t.buffer = i, s.gain.value = (0, h1.randomFloat)(this.options.volume.min / 100, this.options.volume.max / 100), s.connect(this._audioContext.destination), t.connect(s), t.start(0);
                        } else this.init();
                    }
                };
            },
            668: (t10, i6, s4)=>{
                Object.defineProperty(i6, "__esModule", {
                    value: !0
                }), i6.Trace = void 0;
                var e = s4(909);
                i6.Trace = class {
                    constructor(t){
                        var { x: i , y: s , dx: h , dy: n , ctx: o , hue: a , speed: r , traceLength: c , acceleration: _  } = t;
                        for(this._coordinates = [], this._currentDistance = 0, this._x = i, this._y = s, this._sx = i, this._sy = s, this._dx = h, this._dy = n, this._ctx = o, this._hue = a, this._speed = r, this._traceLength = c, this._acceleration = _, this._totalDistance = (0, e.getDistance)(i, s, h, n); this._traceLength--;)this._coordinates.push([
                            i,
                            s
                        ]);
                        this._angle = Math.atan2(n - s, h - i), this._brightness = (0, e.randomInt)(50, 70);
                    }
                    update(t) {
                        this._coordinates.pop(), this._coordinates.unshift([
                            this._x,
                            this._y
                        ]), this._speed *= this._acceleration;
                        var i = Math.cos(this._angle) * this._speed, s = Math.sin(this._angle) * this._speed;
                        this._currentDistance = (0, e.getDistance)(this._sx, this._sy, this._x + i, this._y + s), this._currentDistance >= this._totalDistance ? t(this._dx, this._dy, this._hue) : (this._x += i, this._y += s);
                    }
                    draw() {
                        var t = this._coordinates.length - 1;
                        this._ctx.beginPath(), this._ctx.moveTo(this._coordinates[t][0], this._coordinates[t][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, e.hsla)(this._hue, this._brightness), this._ctx.stroke();
                    }
                };
            }
        }, i1 = {};
        function s1(e) {
            var h = i1[e];
            if (void 0 !== h) return h.exports;
            var n = i1[e] = {
                exports: {}
            };
            return t1[e].call(n.exports, n, n.exports, s1), n.exports;
        }
        var e1 = {};
        return (()=>{
            var t11 = e1;
            Object.defineProperty(t11, "__esModule", {
                value: !0
            }), t11.Fireworks = void 0;
            var i7 = s1(668), h = s1(449), n1 = s1(511), o1 = s1(909);
            t11.Fireworks = class {
                constructor(t12){
                    var { autoresize: i = !0 , boundaries: s , brightness: e , delay: n , hue: o , mouse: a , sound: r , trace: c = 3 , speed: _ = 2 , explosion: d = 5 , gravity: u = 1.5 , opacity: l = 0.5 , particles: p = 50 , friction: x = 0.95 , rocketsPoint: m = 50 , acceleration: v = 1.05  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._tick = 0, this._version = "1.3.5", this._running = !1, this._randomRocketsPoint = !1, this._experimentals = !1, this._m = !1, this._container = t12, this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"), this._container.appendChild(this._canvas), this._sound = new h.Sound(r), this.setSize(), this.setBoundaries(Object.assign({
                        visible: !1,
                        x: 50,
                        y: 50
                    }, s)), this.autoresize = i, this.trace = c, this.speed = _, this.explosion = d, this.gravity = u, this.opacity = l, this.particles = p, this.friction = x, this.rocketsPoint = m, this.acceleration = v, this.hue = Object.assign({
                        min: 0,
                        max: 360
                    }, o), this.mouse = Object.assign({
                        click: !1,
                        move: !1,
                        max: 1
                    }, a), this.delay = Object.assign({
                        min: 15,
                        max: 30
                    }, n), this.brightness = Object.assign({
                        min: 50,
                        max: 80,
                        decay: {
                            min: 0.015,
                            max: 0.03
                        }
                    }, e), this.autoresize && window.addEventListener("resize", ()=>this.windowResize()
                    ), this._canvas.addEventListener("mousedown", (t)=>this.mouseDown(t)
                    ), this._canvas.addEventListener("mouseup", (t)=>this.mouseUp(t)
                    ), this._canvas.addEventListener("mousemove", (t)=>this.mouseMove(t)
                    );
                }
                get isRunning() {
                    return this._running;
                }
                get version() {
                    return this._version;
                }
                start() {
                    this._running || (this._running = !0, this.clear(), this.render());
                }
                stop() {
                    this._running && (this._running = !1, this.clear());
                }
                unmount() {
                    window.removeEventListener("resize", this.windowResize), this._canvas.addEventListener("mousedown", this.mouseDown), this._canvas.addEventListener("mouseup", this.mouseUp), this._canvas.addEventListener("mousemove", this.mouseMove);
                }
                pause() {
                    this._running = !this._running;
                }
                clear() {
                    this._ctx && (this._traces = [], this._explosions = [], this._ctx.clearRect(0, 0, this._width, this._height));
                }
                setOptions(t) {
                    for (var [i, s] of Object.entries(t)){
                        var e = Object.prototype.hasOwnProperty.call(this, i);
                        if ("function" == typeof this[i]) throw new Error("You cannot change the methods of the class!");
                        e && ("object" == typeof this[i] ? Object.assign(this[i], s) : this[i] = s), "sound" === i && Object.assign(this._sound.options, s);
                    }
                }
                setSize() {
                    var { width: t = this._container.clientWidth , height: i = this._container.clientHeight  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._width = t, this._height = i, this._canvas.width = t, this._canvas.height = i, this.setBoundaries({
                        width: t,
                        height: i
                    });
                }
                setBoundaries(t) {
                    this.boundaries = Object.assign(Object.assign({}, this.boundaries), t);
                }
                useMouse(t, i) {
                    (this.mouse.click || this.mouse.move) && (this._mx = t.pageX - this._canvas.offsetLeft, this._my = t.pageY - this._canvas.offsetTop, this._m = i);
                }
                windowResize() {
                    this.setSize();
                }
                mouseDown(t) {
                    this.useMouse(t, this.mouse.click);
                }
                mouseUp(t) {
                    this.useMouse(t, !1);
                }
                mouseMove(t) {
                    this.useMouse(t, this._m);
                }
                render() {
                    this._ctx && this._running && (requestAnimationFrame(()=>this.render()
                    ), this._ctx.globalCompositeOperation = "destination-out", this._ctx.fillStyle = "rgba(0, 0, 0, ".concat(this.opacity, ")"), this._ctx.fillRect(0, 0, this._width, this._height), this._ctx.globalCompositeOperation = "lighter", this.drawBoundaries(), this.initTrace(), this.drawTrace(), this.drawExplosion(), this._tick++);
                }
                drawBoundaries() {
                    this.boundaries.visible && (this._ctx.beginPath(), this._ctx.strokeStyle = "red", this._ctx.rect(this.boundaries.x, this.boundaries.y, this.boundaries.width - 2 * this.boundaries.x, 0.5 * this.boundaries.height), this._ctx.stroke());
                }
                initTrace() {
                    this._ds = (0, o1.randomInt)(this.delay.min, this.delay.max), (2 * this._ds < this._tick || this._m && this.mouse.max > this._traces.length) && (this._traces.push(new i7.Trace({
                        x: this._width * (this._randomRocketsPoint ? (0, o1.randomInt)(0, 100) : this.rocketsPoint) / 100,
                        y: this._height,
                        dx: this._mx && this.mouse.move || this._m ? this._mx : (0, o1.randomInt)(this.boundaries.x, this.boundaries.width - 2 * this.boundaries.x),
                        dy: this._my && this.mouse.move || this._m ? this._my : (0, o1.randomInt)(this.boundaries.y, 0.5 * this.boundaries.height),
                        ctx: this._ctx,
                        hue: (0, o1.randomInt)(this.hue.min, this.hue.max),
                        speed: this.speed,
                        acceleration: this.acceleration,
                        traceLength: this.trace
                    })), this._tick = 0);
                }
                drawTrace() {
                    for(var t = this._traces.length; t--;)this._traces[t].draw(), this._traces[t].update((i, s, e)=>{
                        this.initExplosion(i, s, e), this._sound.play(), this._traces.splice(t, 1);
                    });
                }
                initExplosion(t, i, s) {
                    for(var e = this.particles; e--;)this._explosions.push(new n1.Explosion({
                        x: t,
                        y: i,
                        ctx: this._ctx,
                        hue: s,
                        friction: this.friction,
                        gravity: this.gravity,
                        explosionLength: this.explosion,
                        brightness: this.brightness,
                        exp: this._experimentals
                    }));
                }
                drawExplosion() {
                    for(var t = this._explosions.length; t--;)this._explosions[t].draw(), this._explosions[t].update(()=>{
                        this._explosions.splice(t, 1);
                    });
                }
            };
        })(), e1;
    })();
});

},{}],"1qqD7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dragElement", ()=>dragElement
);
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const element = document.querySelector(".terminal__header");
    if (element) // if present, the header is where you move the DIV from:
    element.onmousedown = dragMouseDown;
    else // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6IXwR","bNKaB"], "bNKaB", "parcelRequiredb1a")

//# sourceMappingURL=index.0641b553.js.map
