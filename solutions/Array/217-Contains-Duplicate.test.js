import { containsDuplicate } from "./217-Contains-Duplicate";

describe.each([
    [[1,2,3,1], true],
    [[1,2,3,4], false],
    [[1,1,1,3,3,4,3,2,4,2], true]
])(``, (nums, expected) => {
    it(`checks if the array contains duplicated value`, ()=>{
        expect(containsDuplicate(nums)).toBe(expected)
    })
})