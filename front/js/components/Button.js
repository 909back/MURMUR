var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MurButtons_target;
import { html } from "../utils/utils.js";
const style = html `
    <style>
        button {
            box-sizing:border-box;
            border:none;
            background-color:#fff;
            padding:6px;
        }
    </style>
`;
const button = html `
    <button>테스트</button>
`;
class MurButtons extends HTMLElement {
    constructor() {
        super();
        _MurButtons_target.set(this, null);
        const shawdow = this.attachShadow({ mode: 'open' });
        shawdow.innerHTML = [style, button].join("");
    }
    static get observedAttributes() {
        return ["className", "disabled", "size", "type", "color", "degree"];
    }
    connectedCallback() {
        // DOM에 추가되었을 때 실행될 함수
    }
    disconnectedCallback() {
        // DOM에서 제거되었을 때 실행할 함수 
    }
    attributeChangedCallback(attr, prevVal, newVal) {
        var _a;
        switch (attr) {
            case 'disabled': return __classPrivateFieldGet(this, _MurButtons_target, "f").disabled = newVal;
            default: return (_a = __classPrivateFieldGet(this, _MurButtons_target, "f")) === null || _a === void 0 ? void 0 : _a.classList.add(newVal);
        }
    }
}
_MurButtons_target = new WeakMap();
customElements.define('mur-button', MurButtons);
