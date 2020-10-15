module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0 ) return false;
    let arr = str.split('');
    let resultArr = [];
    arr.forEach(element => {
        if (element !== resultArr[resultArr.length - 1]) {
            let brackConf = bracketsConfig.find(el => el[0] == element);
            if (brackConf == undefined) return false;
            resultArr.push(brackConf[1]);
        } else {
            resultArr.pop();
        }
    });
    return resultArr.length == 0 ? true : false;
}
