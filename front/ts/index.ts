import { Router } from "./utils/utils.js";

const content = document.getElementById('content')
const router = new Router(content as HTMLElement)
router.inital()
