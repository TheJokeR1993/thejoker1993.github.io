
export const errCoin = (str) => {
    if (str === '') return
    const reg = /[A-Za-z0-9]+/
    const current_reg = str.match(reg)

    if (!reg.test(str) || current_reg[0] !== current_reg.input) return 'coinERR'
}

export const sortChange = (arr, str) => {
    if (str.length !== 2) {
        arr.sort((a, b) => a.market_data.current_price.usd - b.market_data.current_price.usd)
        return str === 'down' ? arr.reverse() : arr

    } else {
        const newArr = []
        const newNum = arr.filter(item => +item.name.slice(0, 1) + 1 && item).sort((a, b) => +a.name.slice(0, 1) - +b.name.slice(0, 1))
        const newStr = arr.filter(item => !(+item.name.slice(0, 1) + 1) && item).sort((a, b) => a.name > b.name ? 1 : -1 || 0)
        str[0] === 'n'
            ? str[1] === 'a'
                ? newArr.push(...newNum, ...newStr)
                : newArr.push(...newNum, ...newStr.reverse())
            : str[0] === 'a'
                ? newArr.push(...newStr, ...newNum)
                : newArr.push(...newStr.reverse(), ...newNum)
        return newArr


    }

}
