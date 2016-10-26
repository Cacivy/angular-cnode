export const EventBus = {
    events: [],

    on(name: string, fun: Function) {
        this.events.push({
            name: name,
            fun: fun
        });
    },

    emit(name: string, param: any) {
        var event = this.events.find(x => x.name === name)
        if (event) {
            event.fun(param)
        }
    },

    remove(name: string) {
        var event = this.events.find(x => x.name === name)
        if (event) {
            var index = this.events.indexOf(event)
            this.events.splice(index, 1)
        }
    }
}