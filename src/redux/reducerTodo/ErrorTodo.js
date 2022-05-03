
export const what_error = (item, arr) => {
    const reg = /[A-Za-zа-яА-я0-9-_!:? ]+/
    if (!item.trim()) return 'trim'
    const current_reg = item.match(reg)
    console.log(reg.test(item));
    if(!reg.test(item)) return 'todoERR'
    if (current_reg[0] !== current_reg.input) return 'todoERR'
    if (arr.find(i => i.value.toLowerCase() === item.toLowerCase().trim())) return 'same'
    return ''
  }

  
  