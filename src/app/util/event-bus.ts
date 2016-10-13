// class Event {
//     constructor(name: string, fun: Function) {
//         this.name = name
//         this.fun = fun
//     }
//     name: string
//     fun: Function
// }

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
    }
}