export class TopicParam {
    constructor(page: number = 1, tab: string = '', limit: number = 10, mdrender: boolean = true) {
        this.page = page
        this.tab = tab
        this.limit = limit
        this.mdrender = mdrender
    }
    page: number
    tab: string
    limit: number
    mdrender: boolean
}
