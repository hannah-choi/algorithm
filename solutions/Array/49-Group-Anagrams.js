// Problem: https://leetcode.com/problems/group-anagrams/description/

// O(n*k) Solution
export const groupAnagrams = (strs) => {
    const result = {}; // hashmap - didn't use map() as the return value is an array

    for (let str of strs) {
        const count = new Array(26).fill(0);

        for (let char of str) {
            count[char.charCodeAt() - 97]++; // 97 = 'a'.charCodeAt()
        }
        let key = count.join('#'); //To prevent number inputs

        result[key] ? result[key].push(str) : (result[key] = [str]);
    }

    return Object.values(result);
};
