export const useDateConverter = (dateData) => {
    const dateArr = dateData.split('-');
    let date1 = new Date(dateArr[0], dateArr[1], dateArr[2]).toString().slice(3, 15)
    let modifiedDate = date1.slice(0, 7) + ',' + date1.slice(7)
    return modifiedDate
}
