function solution() {
    const s = "pPoooyY";
    const pCount = s
        .toLowerCase()
        .split("")
        .filter((el) => el === "p");

    const yCount = s
        .toLowerCase()
        .split("")
        .filter((el) => el === "y").length;
    return pCount === yCount ? true : false;
}

solution();
