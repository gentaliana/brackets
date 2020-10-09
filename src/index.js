module.exports = function check(str, bracketsConfig) {
    const bracketsLength = bracketsConfig.length;
    for (let i = 0; i < bracketsLength; i++) {
        let brackets = bracketsConfig[i].join("");
        while (true) {
            if (str.includes(brackets)) {
                str = str.replace(brackets, "");
                i = -1;
            } else {
                break;
            }
        }
    }
    return str ? false : true;
};
