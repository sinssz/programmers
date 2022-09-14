function solution() {
    const phone_number = "01033334444";
    return phone_number
        .split("")
        .map((num, index) => {
            return index < phone_number.length - 4 ? "*" : num;
        })
        .join("");
}
solution();
