"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.addNewSet = exports.addFidhCard = exports.creatOptions = exports.getNameSet = void 0;
var URL = "http://127.0.0.1:8000/";
var name_set = [];
var getNameSet = function () {
    var text = "wojtek/sets";
    var url = "".concat(URL).concat(text);
    fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (data) {
        return data.forEach(function (element) {
            if (element.name_set in name_set) {
                console.log();
            }
            else {
                name_set.push(element.name_set);
            }
        });
    })["catch"](function (error) { return console.error(error); });
};
exports.getNameSet = getNameSet;
var creatOptions = function (select) {
    var nameset = __spreadArray([], new Set(name_set), true);
    var lengtNameSet = nameset.length;
    var elementSelect = select;
    var length = elementSelect.options.length - 1;
    if (elementSelect.options.length == 1) {
        var index = 0;
        while (lengtNameSet != index) {
            elementSelect.options[length + 1] = new Option(nameset[index], nameset[index]);
            index++;
            length++;
        }
    }
};
exports.creatOptions = creatOptions;
// funkcja do zapisywania fiszek do zestawu
var addFidhCard = function (event) {
    event.preventDefault();
    var notion = document.querySelector("#notion");
    var notion_value = notion.value;
    var definition = document.querySelector("#def");
    var definition_value = definition.value;
    var name_set = document.querySelector("#nameset_select");
    var name_set_value = name_set.value;
    var text = "flashcards/".concat(notion_value, "/").concat(definition_value, "/").concat(name_set_value, "/'wojtek'");
    var url = "".concat(URL).concat(text);
    console.log(url);
    fetch(url, {
        method: "POST"
    })
        .then(function (res) { return console.log(res.ok); })["catch"](function (error) { return console.error(error); });
};
exports.addFidhCard = addFidhCard;
// funkcja do zapisywania nowego zestawu
var addNewSet = function (event) {
    event.preventDefault();
    var name_set = document.querySelector('#nameset');
    var name_set_value = name_set.value;
    var text = "add_set/?user_name=wojtek&name_set=".concat(name_set_value);
    var url = "".concat(URL).concat(text);
    fetch(url, { method: 'POST' })
        .then(function (res) { return console.log(res.ok); })["catch"](function (error) { return console.error(error); });
};
exports.addNewSet = addNewSet;
