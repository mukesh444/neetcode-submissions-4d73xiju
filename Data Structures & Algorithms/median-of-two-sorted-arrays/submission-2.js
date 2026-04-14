class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        var nums1Start = 0, nums2Start = 0;
        var medianArray = [];
        var medianLeftIndex = Math.floor((nums1.length+nums2.length)/2) - 1;
        var medianRightIndex = Math.floor((nums1.length+nums2.length)/2);
        var counter = 0;
        while(nums1Start <= nums1.length - 1 || nums2Start <= nums2.length - 1){
            if (nums2.length === 0 || nums1[nums1Start] <= nums2[nums2Start]){
                if ((nums1.length + nums2.length)%2 === 0 && (medianLeftIndex === counter || medianRightIndex === counter)){
                    medianArray.push(nums1[nums1Start]);
                    if (medianArray.length === 2){
                        break;
                    }
                }
                else if (medianRightIndex === counter){
                    medianArray.push(nums1[nums1Start]);
                    break;
                }

                nums1Start++;
            }
            else{
                if ((nums1.length + nums2.length)%2 === 0 && (medianLeftIndex === counter || medianRightIndex === counter)){
                    medianArray.push(nums2[nums2Start]);
                    if (medianArray.length === 2){
                        break;
                    }
                }
                else if (medianRightIndex === counter){
                    medianArray.push(nums2[nums2Start]);
                    break;
                }
                nums2Start++;
            }

            counter++;
        }

        return (nums1.length + nums2.length)%2 === 0 ? (medianArray[0] + medianArray[1])/2 : medianArray[0];
    }
}
