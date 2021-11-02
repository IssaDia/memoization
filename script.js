const cache = {};

const memoTimes10 = (n) => {
    if (n in cache) {
        return cache[n];
    } else {
        const result = n * 10;
        cache[n] = result;
        return result
    }
}