var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Router_target, _Router_now;
import Home from '../pages/Home.js';
import Topic from '../pages/Topic.js';
import MyPage from '../pages/MyPage.js';
export const html = (string, ...args) => String.raw({ raw: string }, args);
export class Router {
    constructor(target) {
        _Router_target.set(this, null);
        _Router_now.set(this, '/');
        this.routes = [
            { link: '/', children: Home },
            { link: '/topic', children: Topic },
            { link: '/mypage', children: MyPage }
        ];
        __classPrivateFieldSet(this, _Router_target, target, "f");
        const observer = new MutationObserver((mutationList) => { console.log(mutationList); });
        const observerConfig = { attributes: true, childList: true, subtree: true, characterData: true, characterDataOldValue: true };
        observer.observe(__classPrivateFieldGet(this, _Router_target, "f"), observerConfig);
    }
    go(link) {
        var _a, _b;
        __classPrivateFieldSet(this, _Router_now, link, "f");
        if (__classPrivateFieldGet(this, _Router_target, "f")) {
            history.pushState(null, '', link);
            const findPage = (_a = this.routes.find(route => route.link === link)) === null || _a === void 0 ? void 0 : _a.children();
            (_b = __classPrivateFieldGet(this, _Router_target, "f")) === null || _b === void 0 ? void 0 : _b.replaceChildren(findPage);
        }
    }
    inital() {
        this.go('/');
        const menus = document.querySelectorAll('.menu');
        menus.forEach(menu => menu.addEventListener('click', (e) => {
            const link = e.currentTarget.dataset.link;
            this.go(link);
        }));
    }
}
_Router_target = new WeakMap(), _Router_now = new WeakMap();
