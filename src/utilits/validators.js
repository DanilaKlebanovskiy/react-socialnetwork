export const required = (value) => {
   if (value) return  undefined
    return  "Field is required"

}

export const maxLengthCreator = (max) => (value) => {
    if (value && value.length > max ) return `max length ${max}`
    return undefined
}