import Home from '../pages/Home.js'
import Topic from '../pages/Topic.js'
import MyPage from '../pages/MyPage.js'
export const html = (string:TemplateStringsArray,...args:any[]) => String.raw({raw:string}, args)
export class Router {
    #target: null|HTMLElement = null
    #now:string = '/'
    readonly routes = [
        {link:'/', children: Home},
        {link:'/topic', children: Topic},
        {link:'/mypage', children: MyPage}
    ]
    
    constructor (target:HTMLElement){
        this.#target = target

        const observer = new MutationObserver((mutationList)=>{console.log(mutationList)})
        const observerConfig =  {attributes:true, childList:true, subtree:true, characterData:true, characterDataOldValue:true}
        observer.observe(this.#target,observerConfig)
    }

    go(link:string){
        this.#now = link
        if(this.#target){
            history.pushState(null, '',link)
            const findPage = this.routes.find(route => route.link === link)?.children() as HTMLElement
            this.#target?.replaceChildren(findPage)
        }
    }

    inital (){
        this.go('/')
        const menus = document.querySelectorAll('.menu')
        menus.forEach(menu => menu.addEventListener('click', (e)=>{
            const link = (e.currentTarget as HTMLElement).dataset.link as string
            this.go(link)
        }))
    }
}

