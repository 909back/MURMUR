import { Router } from "./utils/utils.js";
// define custom component
import "./components/Button.js";
const content = document.getElementById('content');
const router = new Router(content);
router.inital();
