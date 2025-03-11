(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_tab2_tab2_module_ts"], {
    /***/
    32810:
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CameraSource": function CameraSource() {
          return (
            /* binding */
            _CameraSource
          );
        },

        /* harmony export */
        "CameraDirection": function CameraDirection() {
          return (
            /* binding */
            _CameraDirection
          );
        },

        /* harmony export */
        "CameraResultType": function CameraResultType() {
          return (
            /* binding */
            _CameraResultType
          );
        }
        /* harmony export */

      });

      var _CameraSource;

      (function (CameraSource) {
        /**
         * Prompts the user to select either the photo album or take a photo.
         */
        CameraSource["Prompt"] = "PROMPT";
        /**
         * Take a new photo using the camera.
         */

        CameraSource["Camera"] = "CAMERA";
        /**
         * Pick an existing photo from the gallery or photo album.
         */

        CameraSource["Photos"] = "PHOTOS";
      })(_CameraSource || (_CameraSource = {}));

      var _CameraDirection;

      (function (CameraDirection) {
        CameraDirection["Rear"] = "REAR";
        CameraDirection["Front"] = "FRONT";
      })(_CameraDirection || (_CameraDirection = {}));

      var _CameraResultType;

      (function (CameraResultType) {
        CameraResultType["Uri"] = "uri";
        CameraResultType["Base64"] = "base64";
        CameraResultType["DataUrl"] = "dataUrl";
      })(_CameraResultType || (_CameraResultType = {}));
      /***/

    },

    /***/
    4320:
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CameraDirection": function CameraDirection() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection
          );
        },

        /* harmony export */
        "CameraResultType": function CameraResultType() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType
          );
        },

        /* harmony export */
        "CameraSource": function CameraSource() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource
          );
        },

        /* harmony export */
        "Camera": function Camera() {
          return (
            /* binding */
            _Camera
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      41899);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      32810);

      var _Camera = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          2524)).then(function (m) {
            return new m.CameraWeb();
          });
        }
      });
      /***/

    },

    /***/
    10975:
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Directory": function Directory() {
          return (
            /* binding */
            _Directory
          );
        },

        /* harmony export */
        "Encoding": function Encoding() {
          return (
            /* binding */
            _Encoding
          );
        },

        /* harmony export */
        "FilesystemDirectory": function FilesystemDirectory() {
          return (
            /* binding */
            _FilesystemDirectory
          );
        },

        /* harmony export */
        "FilesystemEncoding": function FilesystemEncoding() {
          return (
            /* binding */
            _FilesystemEncoding
          );
        }
        /* harmony export */

      });

      var _Directory;

      (function (Directory) {
        /**
         * The Documents directory
         * On iOS it's the app's documents directory.
         * Use this directory to store user-generated content.
         * On Android it's the Public Documents folder, so it's accessible from other apps.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`.
         * It's not accesible on Android 11 or newer.
         *
         * @since 1.0.0
         */
        Directory["Documents"] = "DOCUMENTS";
        /**
         * The Data directory
         * On iOS it will use the Documents directory.
         * On Android it's the directory holding application files.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.0.0
         */

        Directory["Data"] = "DATA";
        /**
         * The Library directory
         * On iOS it will use the Library directory.
         * On Android it's the directory holding application files.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.1.0
         */

        Directory["Library"] = "LIBRARY";
        /**
         * The Cache directory
         * Can be deleted in cases of low memory, so use this directory to write app-specific files
         * that your app can re-create easily.
         *
         * @since 1.0.0
         */

        Directory["Cache"] = "CACHE";
        /**
         * The external directory
         * On iOS it will use the Documents directory
         * On Android it's the directory on the primary shared/external
         * storage device where the application can place persistent files it owns.
         * These files are internal to the applications, and not typically visible
         * to the user as media.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.0.0
         */

        Directory["External"] = "EXTERNAL";
        /**
         * The external storage directory
         * On iOS it will use the Documents directory
         * On Android it's the primary shared/external storage directory.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`.
         * It's not accesible on Android 11 or newer.
         *
         * @since 1.0.0
         */

        Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
      })(_Directory || (_Directory = {}));

      var _Encoding;

      (function (Encoding) {
        /**
         * Eight-bit UCS Transformation Format
         *
         * @since 1.0.0
         */
        Encoding["UTF8"] = "utf8";
        /**
         * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
         * Unicode character set
         * This encoding is only supported on Android.
         *
         * @since 1.0.0
         */

        Encoding["ASCII"] = "ascii";
        /**
         * Sixteen-bit UCS Transformation Format, byte order identified by an
         * optional byte-order mark
         * This encoding is only supported on Android.
         *
         * @since 1.0.0
         */

        Encoding["UTF16"] = "utf16";
      })(_Encoding || (_Encoding = {}));
      /**
       * @deprecated Use `Directory`.
       * @since 1.0.0
       */


      var _FilesystemDirectory = _Directory;
      /**
       * @deprecated Use `Encoding`.
       * @since 1.0.0
       */

      var _FilesystemEncoding = _Encoding;
      /***/
    },

    /***/
    7081:
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Directory": function Directory() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory
          );
        },

        /* harmony export */
        "Encoding": function Encoding() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding
          );
        },

        /* harmony export */
        "FilesystemDirectory": function FilesystemDirectory() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory
          );
        },

        /* harmony export */
        "FilesystemEncoding": function FilesystemEncoding() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding
          );
        },

        /* harmony export */
        "Filesystem": function Filesystem() {
          return (
            /* binding */
            _Filesystem
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      41899);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      10975);

      var _Filesystem = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          16603)).then(function (m) {
            return new m.FilesystemWeb();
          });
        }
      });
      /***/

    },

    /***/
    10265:
    /*!*********************************************************************!*\
      !*** ./node_modules/@capacitor/preferences/dist/esm/definitions.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    59475:
    /*!***************************************************************!*\
      !*** ./node_modules/@capacitor/preferences/dist/esm/index.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Preferences": function Preferences() {
          return (
            /* binding */
            _Preferences
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      41899);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      10265);

      var _Preferences = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Preferences', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_preferences_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          18068)).then(function (m) {
            return new m.PreferencesWeb();
          });
        }
      });
      /***/

    },

    /***/
    61957:
    /*!*******************************************!*\
      !*** ./src/app/services/photo.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotoService": function PhotoService() {
          return (
            /* binding */
            _PhotoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/camera */
      4320);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @capacitor/core */
      41899);
      /* harmony import */


      var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/filesystem */
      7081);
      /* harmony import */


      var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/preferences */
      59475);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _PhotoService = /*#__PURE__*/function () {
        function _PhotoService(platform) {
          _classCallCheck(this, _PhotoService);

          this.platform = platform;
          this.photos = [];
          this.PHOTO_STORAGE = 'photos';

          this.convertBlobToBase64 = function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function () {
                resolve(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          };
        }

        _createClass(_PhotoService, [{
          key: "loadSaved",
          value: function loadSaved() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var photoList, _iterator, _step, photo, readFile;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
                        key: this.PHOTO_STORAGE
                      });

                    case 2:
                      photoList = _context.sent;
                      this.photos = JSON.parse(photoList.value) || []; // If running on the web...

                      if (this.platform.is('hybrid')) {
                        _context.next = 24;
                        break;
                      }

                      // Display the photo by reading into base64 format
                      _iterator = _createForOfIteratorHelper(this.photos);
                      _context.prev = 6;

                      _iterator.s();

                    case 8:
                      if ((_step = _iterator.n()).done) {
                        _context.next = 16;
                        break;
                      }

                      photo = _step.value;
                      _context.next = 12;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                        path: photo.filepath,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
                      });

                    case 12:
                      readFile = _context.sent;
                      // Web platform only: Load the photo as base64 data
                      photo.webviewPath = "data:image/jpeg;base64,".concat(readFile.data);

                    case 14:
                      _context.next = 8;
                      break;

                    case 16:
                      _context.next = 21;
                      break;

                    case 18:
                      _context.prev = 18;
                      _context.t0 = _context["catch"](6);

                      _iterator.e(_context.t0);

                    case 21:
                      _context.prev = 21;

                      _iterator.f();

                      return _context.finish(21);

                    case 24:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[6, 18, 21, 24]]);
            }));
          }
          /* Use the device camera to take a photo:
          // https://capacitor.ionicframework.com/docs/apis/camera
             // Store the photo data into permanent file storage:
          // https://capacitor.ionicframework.com/docs/apis/filesystem
             // Store a reference to all photo filepaths using Storage API:
          // https://capacitor.ionicframework.com/docs/apis/storage
          */

        }, {
          key: "addNewToGallery",
          value: function addNewToGallery() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var capturedPhoto, savedImageFile;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                        quality: 100 // highest quality (0 to 100)

                      });

                    case 2:
                      capturedPhoto = _context2.sent;
                      _context2.next = 5;
                      return this.savePicture(capturedPhoto);

                    case 5:
                      savedImageFile = _context2.sent;
                      // Add new photo to Photos array
                      this.photos.unshift(savedImageFile); // Cache all photo data for future retrieval

                      _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
                        key: this.PHOTO_STORAGE,
                        value: JSON.stringify(this.photos)
                      });

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // Save picture to file on device

        }, {
          key: "savePicture",
          value: function savePicture(photo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var base64Data, fileName, savedFile;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.readAsBase64(photo);

                    case 2:
                      base64Data = _context3.sent;
                      // Write the file to the data directory
                      fileName = new Date().getTime() + '.jpeg';
                      _context3.next = 6;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                        path: fileName,
                        data: base64Data,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
                      });

                    case 6:
                      savedFile = _context3.sent;

                      if (!this.platform.is('hybrid')) {
                        _context3.next = 11;
                        break;
                      }

                      return _context3.abrupt("return", {
                        filepath: savedFile.uri,
                        webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.convertFileSrc(savedFile.uri)
                      });

                    case 11:
                      return _context3.abrupt("return", {
                        filepath: fileName,
                        webviewPath: photo.webPath
                      });

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // Read camera photo into base64 format based on the platform the app is running on

        }, {
          key: "readAsBase64",
          value: function readAsBase64(photo) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var file, response, blob;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!this.platform.is('hybrid')) {
                        _context4.next = 7;
                        break;
                      }

                      _context4.next = 3;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                        path: photo.path
                      });

                    case 3:
                      file = _context4.sent;
                      return _context4.abrupt("return", file.data);

                    case 7:
                      _context4.next = 9;
                      return fetch(photo.webPath);

                    case 9:
                      response = _context4.sent;
                      _context4.next = 12;
                      return response.blob();

                    case 12:
                      blob = _context4.sent;
                      _context4.next = 15;
                      return this.convertBlobToBase64(blob);

                    case 15:
                      return _context4.abrupt("return", _context4.sent);

                    case 16:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // Delete picture by removing it from reference data and the filesystem

        }, {
          key: "deletePicture",
          value: function deletePicture(photo, position) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var filename;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      // Remove this photo from the Photos reference data array
                      this.photos.splice(position, 1); // Update photos array cache by overwriting the existing photo array

                      _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
                        key: this.PHOTO_STORAGE,
                        value: JSON.stringify(this.photos)
                      }); // delete photo file from filesystem


                      filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
                      _context5.next = 5;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.deleteFile({
                        path: filename,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
                      });

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return _PhotoService;
      }();

      _PhotoService.ɵfac = function PhotoService_Factory(t) {
        return new (t || _PhotoService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform));
      };

      _PhotoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _PhotoService,
        factory: _PhotoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    14608:
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2PageModule": function Tab2PageModule() {
          return (
            /* binding */
            _Tab2PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab2.page */
      70442);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _Tab2PageModule = /*#__PURE__*/_createClass(function _Tab2PageModule() {
        _classCallCheck(this, _Tab2PageModule);
      });

      _Tab2PageModule.ɵfac = function Tab2PageModule_Factory(t) {
        return new (t || _Tab2PageModule)();
      };

      _Tab2PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _Tab2PageModule
      });
      _Tab2PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
          path: '',
          component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_Tab2PageModule, {
          declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    70442:
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2Page": function Tab2Page() {
          return (
            /* binding */
            _Tab2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/photo.service */
      61957);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function Tab2Page_ion_col_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Tab2Page_ion_col_11_Template_ion_img_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var photo_r1 = restoredCtx.$implicit;
            var position_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.showActionSheet(photo_r1, position_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var photo_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", photo_r1.webviewPath);
        }
      }

      var _Tab2Page = /*#__PURE__*/function () {
        function _Tab2Page(photoService, actionSheetController) {
          _classCallCheck(this, _Tab2Page);

          this.photoService = photoService;
          this.actionSheetController = actionSheetController;
        }

        _createClass(_Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.photoService.loadSaved();

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "showActionSheet",
          value: function showActionSheet(photo, position) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this = this;

              var actionSheet;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.actionSheetController.create({
                        header: 'Photos',
                        buttons: [{
                          text: 'Delete',
                          role: 'destructive',
                          icon: 'trash',
                          handler: function handler() {
                            _this.photoService.deletePicture(photo, position);
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {// Nothing to do, action sheet is automatically closed
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context7.sent;
                      _context7.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return _Tab2Page;
      }();

      _Tab2Page.ɵfac = function Tab2Page_Factory(t) {
        return new (t || _Tab2Page)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_photo_service__WEBPACK_IMPORTED_MODULE_0__.PhotoService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController));
      };

      _Tab2Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _Tab2Page,
        selectors: [["app-tab2"]],
        decls: 15,
        vars: 1,
        consts: [["collapse", "condense"], ["size", "large"], ["size", "6", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed"], [3, "click"], ["name", "camera"], ["size", "6"], [3, "src", "click"]],
        template: function Tab2Page_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Photo Gallery ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Photo Gallery");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, Tab2Page_ion_col_11_Template, 2, 1, "ion-col", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-fab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-fab-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Tab2Page_Template_ion_fab_button_click_13_listener() {
              return ctx.photoService.addNewToGallery();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.photoService.photos);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonImg],
        styles: ["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    3786:
    /*!*****************************************!*\
      !*** ./node_modules/tslib/tslib.es6.js ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "__extends": function __extends() {
          return (
            /* binding */
            _extends
          );
        },

        /* harmony export */
        "__assign": function __assign() {
          return (
            /* binding */
            _assign2
          );
        },

        /* harmony export */
        "__rest": function __rest() {
          return (
            /* binding */
            _rest
          );
        },

        /* harmony export */
        "__decorate": function __decorate() {
          return (
            /* binding */
            _decorate
          );
        },

        /* harmony export */
        "__param": function __param() {
          return (
            /* binding */
            _param
          );
        },

        /* harmony export */
        "__metadata": function __metadata() {
          return (
            /* binding */
            _metadata
          );
        },

        /* harmony export */
        "__awaiter": function __awaiter() {
          return (
            /* binding */
            _awaiter
          );
        },

        /* harmony export */
        "__generator": function __generator() {
          return (
            /* binding */
            _generator
          );
        },

        /* harmony export */
        "__createBinding": function __createBinding() {
          return (
            /* binding */
            _createBinding
          );
        },

        /* harmony export */
        "__exportStar": function __exportStar() {
          return (
            /* binding */
            _exportStar
          );
        },

        /* harmony export */
        "__values": function __values() {
          return (
            /* binding */
            _values
          );
        },

        /* harmony export */
        "__read": function __read() {
          return (
            /* binding */
            _read
          );
        },

        /* harmony export */
        "__spread": function __spread() {
          return (
            /* binding */
            _spread
          );
        },

        /* harmony export */
        "__spreadArrays": function __spreadArrays() {
          return (
            /* binding */
            _spreadArrays
          );
        },

        /* harmony export */
        "__spreadArray": function __spreadArray() {
          return (
            /* binding */
            _spreadArray
          );
        },

        /* harmony export */
        "__await": function __await() {
          return (
            /* binding */
            _await
          );
        },

        /* harmony export */
        "__asyncGenerator": function __asyncGenerator() {
          return (
            /* binding */
            _asyncGenerator
          );
        },

        /* harmony export */
        "__asyncDelegator": function __asyncDelegator() {
          return (
            /* binding */
            _asyncDelegator
          );
        },

        /* harmony export */
        "__asyncValues": function __asyncValues() {
          return (
            /* binding */
            _asyncValues
          );
        },

        /* harmony export */
        "__makeTemplateObject": function __makeTemplateObject() {
          return (
            /* binding */
            _makeTemplateObject
          );
        },

        /* harmony export */
        "__importStar": function __importStar() {
          return (
            /* binding */
            _importStar
          );
        },

        /* harmony export */
        "__importDefault": function __importDefault() {
          return (
            /* binding */
            _importDefault
          );
        },

        /* harmony export */
        "__classPrivateFieldGet": function __classPrivateFieldGet() {
          return (
            /* binding */
            _classPrivateFieldGet
          );
        },

        /* harmony export */
        "__classPrivateFieldSet": function __classPrivateFieldSet() {
          return (
            /* binding */
            _classPrivateFieldSet
          );
        },

        /* harmony export */
        "__classPrivateFieldIn": function __classPrivateFieldIn() {
          return (
            /* binding */
            _classPrivateFieldIn
          );
        }
        /* harmony export */

      });
      /******************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function _extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign2 = function _assign() {
        _assign2 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign2.apply(this, arguments);
      };

      function _rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function _decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function _param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function _metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function _awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function _generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (g && (g = 0, op[0] && (_ = 0)), _) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      var _createBinding = Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);

        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            }
          };
        }

        Object.defineProperty(o, k2, desc);
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      };

      function _exportStar(m, o) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) _createBinding(o, m, p);
        }
      }

      function _values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function _read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }
      /** @deprecated */


      function _spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(_read(arguments[i]));
        }

        return ar;
      }
      /** @deprecated */


      function _spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      function _spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      }

      function _await(v) {
        return this instanceof _await ? (this.v = v, this) : new _await(v);
      }

      function _asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof _await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function _asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: _await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function _asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof _values === "function" ? _values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function _makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      var __setModuleDefault = Object.create ? function (o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function (o, v) {
        o["default"] = v;
      };

      function _importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) _createBinding(result, mod, k);
        }

        __setModuleDefault(result, mod);

        return result;
      }

      function _importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function _classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      }

      function _classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      }

      function _classPrivateFieldIn(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_tab2_tab2_module_ts-es5.js.map