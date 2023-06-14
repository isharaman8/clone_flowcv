export const _getYears = () => {
    const year = new Date().getFullYear()
    const array = []

    for (let i = year; i >= 1944; i--) {
        array.push(i)
    }

    return array
}
