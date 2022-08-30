const setLocalStorge = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorge = (key: string) => {
    const isExistItem = localStorage.getItem(key);
    if (isExistItem) {
        return JSON.parse(isExistItem);
    }
    return null;
}

const convertToMinutes = (number: number) => {
    return number * 60
}


export {
    setLocalStorge,
    getLocalStorge,
    convertToMinutes
}