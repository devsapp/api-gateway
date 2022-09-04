"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockProcess = exports.Slogger = exports.handleClientRequst = exports.formatRequest = exports.generateRandomStr = exports.merge = exports.deepClone = exports.handleAutoFormat = void 0;
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:30:43
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-04 21:56:53
 */
var autoMap_1 = require("../constant/autoMap");
//处理auto字段
function handleAutoFormat(o) {
    var map = new Map();
    Object.keys(autoMap_1.constant.autoMapTable).forEach(function (item) {
        map.set(item, autoMap_1.constant.autoMapTable[item]);
    });
    return (function deepFormat(initalObj, finalObj) {
        var obj = finalObj || {};
        for (var i in initalObj) {
            if (typeof initalObj[i] === 'object') {
                obj[i] = initalObj[i].constructor === Array ? [] : {};
                deepFormat(initalObj[i], obj[i]);
            }
            else {
                if (initalObj[i] === 'auto') {
                    obj[i] = "".concat(map.get(i)).concat(generateRandomStr());
                }
                else {
                    obj[i] = initalObj[i];
                }
            }
        }
        return obj;
    })(o);
}
exports.handleAutoFormat = handleAutoFormat;
function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        if (typeof initalObj[i] === 'object') {
            //判断构造函数是不是Array即initalObj[i]是不是数组，注意判断数组不能用typeof，因为typeof [1,2,3] === 'object'
            obj[i] = initalObj[i].constructor === Array ? [] : {};
            deepClone(initalObj[i], obj[i]);
        }
        else {
            obj[i] = initalObj[i];
        }
    }
    return obj;
}
exports.deepClone = deepClone;
function mergeClone(target) {
    if (typeof target === 'object') {
        return target.constructor === Array
            ? deepClone(target, [])
            : deepClone(target, {});
    }
    return target;
}
function merge(initalObj) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        var _loop_1 = function (key) {
            if (source[key] === undefined && key in initalObj) {
                return "continue";
            }
            if (typeof source[key] === 'object') {
                if (typeof initalObj[key] === 'object' &&
                    Object.prototype.toString.call(initalObj[key]) ===
                        Object.prototype.toString.call(initalObj[key])) {
                    if (initalObj[key].constructor === Array) {
                        initalObj[key] = source[key].map(function (element, index) {
                            if (typeof initalObj[key][index] === 'object')
                                return merge(initalObj[key][index], element);
                            return element;
                        });
                        return "continue";
                    }
                    merge(initalObj[key], source[key]);
                }
                else {
                    initalObj[key] = mergeClone(source[key]);
                }
            }
            else {
                initalObj[key] = mergeClone(source[key]);
            }
        };
        for (var key in source) {
            _loop_1(key);
        }
    }
    return initalObj;
}
exports.merge = merge;
function generateRandomStr() {
    return Math.random().toString(36).slice(-6);
}
exports.generateRandomStr = generateRandomStr;
/**
 *
 * @param target
 * @description 根据阿里云openApi需求规范参数
 */
function formatRequest(target) {
    var obj = deepClone(target);
    for (var key in obj) {
        if (typeof obj[key] === 'object')
            obj[key] = JSON.stringify(obj[key]);
    }
    return obj;
}
exports.formatRequest = formatRequest;
var core_1 = require("@serverless-devs/core");
var error_1 = require("../constant/error");
function handleClientRequst(client, fnName, body, runtime) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, error_2;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    _b = (_a = Object).assign;
                    _c = [{ responseStatus: true }];
                    return [4 /*yield*/, client[fnName](body, runtime)];
                case 1: return [2 /*return*/, _b.apply(_a, _c.concat([(_d.sent()).body]))];
                case 2:
                    error_2 = _d.sent();
                    // console.error(error)
                    return [2 /*return*/, {
                            responseStatus: false,
                            error: error_2,
                        }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.handleClientRequst = handleClientRequst;
function parseError(message) {
    core_1.Logger.debug('解析Error', '开始');
    var firstIndex = message.indexOf('request id');
    if (firstIndex === -1)
        return message;
    message = message.slice(0, firstIndex).replace(/code: [0-9]+, /g, '');
    var transform = error_1.errorDictionary.get(message.split(':')[0]);
    if (transform) {
        if (transform.type)
            throw new core_1.CatchableError(transform.text);
        message = transform.text;
    }
    core_1.Logger.debug('解析Error', '完成');
    return message;
}
/**
 * @description  封装core包的打印方法，去除不必要参数，支持读入多个log以及对象log
 */
var Slogger = /** @class */ (function () {
    function Slogger() {
    }
    Slogger.formatLog = function (logs) {
        logs.forEach(function (element, index) {
            if (element instanceof Error) {
                logs[index] = element.stack || element.message;
            }
        });
        var arr = deepClone(logs, []);
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string')
                continue;
            if (typeof arr[i] === 'object') {
                arr.splice(i, 1);
                var len = 0;
                for (var key in logs[i]) {
                    arr.splice(i + len, 0, "".concat(key, ": ").concat(logs[i][key]));
                    len++;
                }
                if (len)
                    i += len - 1;
            }
        }
        return arr;
    };
    Slogger.info = function () {
        var _this = this;
        var logs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            logs[_i] = arguments[_i];
        }
        logs = this.formatLog(logs);
        logs.forEach(function (log) {
            _this.logger.info(log);
        });
    };
    Slogger.warn = function () {
        var _this = this;
        var logs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            logs[_i] = arguments[_i];
        }
        logs = this.formatLog(logs);
        logs.forEach(function (log) {
            _this.logger.warn(log);
        });
    };
    // 这里对error进行处理，解析存在错误栈的错误，最终只显示名称，名且对一些常用错误友好提示
    Slogger.error = function () {
        var _this = this;
        var logs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            logs[_i] = arguments[_i];
        }
        for (var i = 0; i < logs.length; i++) {
            if (Object.prototype.toString.call(logs[i]) === '[object Error]') {
                logs[i] = parseError(logs[i].message);
            }
        }
        logs = this.formatLog(logs);
        logs.forEach(function (log) {
            _this.logger.error(log);
        });
    };
    Slogger.debug = function () {
        var _this = this;
        var logs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            logs[_i] = arguments[_i];
        }
        logs = this.formatLog(logs);
        logs.forEach(function (log) {
            _this.logger.debug(log);
        });
    };
    Slogger.log = function () {
        var _this = this;
        var logs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            logs[_i] = arguments[_i];
        }
        logs = this.formatLog(logs);
        logs.forEach(function (log) {
            _this.logger.log(log);
        });
    };
    Slogger.task = function (tasks) {
        this.logger.task('tast', tasks);
    };
    Slogger.logger = new core_1.Logger('API-GATEWAY');
    return Slogger;
}());
exports.Slogger = Slogger;
/**
 * @description 阻塞
 */
var blockProcess = function (time) {
    if (time === void 0) { time = 1000; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (res) {
                    setTimeout(function () { res(); }, time);
                })];
        });
    });
};
exports.blockProcess = blockProcess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3Rvb2xzL3Rvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRztBQUNILCtDQUE4QztBQUM5QyxVQUFVO0FBQ1YsU0FBZ0IsZ0JBQWdCLENBQUMsQ0FBTTtJQUNyQyxJQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO0lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1FBQzdDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGtCQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQyxDQUFDLENBQUE7SUFDRixPQUFPLENBQUMsU0FBUyxVQUFVLENBQUMsU0FBUyxFQUFFLFFBQVM7UUFDOUMsSUFBSSxHQUFHLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQTtRQUN4QixLQUFLLElBQUksQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUN2QixJQUFJLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDcEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtnQkFDckQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNqQztpQkFBTTtnQkFDTCxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUU7b0JBQzNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFHLEdBQUcsQ0FBQyxH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