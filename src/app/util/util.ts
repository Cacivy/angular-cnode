export const Util = {
    convertParamToString : (param: Object) => {
        let quertString: string = ''

        for (let key in param) {
            quertString += `&${key}=${param[key]}`
        }

        return quertString.substr(1)
    }
}