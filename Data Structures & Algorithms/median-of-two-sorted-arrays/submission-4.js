class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        var totalLength = nums1.length + nums2.length;

        if (totalLength % 2 != 0){
            // odd
            var medianIndex = Math.floor(totalLength / 2);
            var counter = 0;
            var leftStart = 0, rightStart = 0;
            while(leftStart < nums1.length  ||  rightStart < nums2.length){
                if (leftStart < nums1.length && rightStart < nums2.length){
                    if (nums1[leftStart] <= nums2[rightStart] && leftStart < nums1.length){
                    if (counter === medianIndex) return nums1[leftStart];
                    leftStart++;
                }
                else if (rightStart < nums2.length){
                    if (counter === medianIndex) return nums2[rightStart];
                    rightStart++;
                }
                }
                else if (leftStart < nums1.length){
                    if (counter === medianIndex) return nums1[leftStart];
                    leftStart++;
                }
                else{
                    if (counter === medianIndex) return nums2[rightStart];
                    rightStart++;
                }
                

                counter++;
            }
        }
        else{
            // even
            var leftStart = 0, rightStart = 0;
            var secondIndex = Math.floor(totalLength / 2);
            var firstIndex = secondIndex - 1;
            var firstElement = -1;
            var secondElement = -1;
            var counter = 0;
            while((leftStart < nums1.length  ||  rightStart < nums2.length)){
                if (leftStart < nums1.length && rightStart < nums2.length){
                    if (nums1[leftStart] <= nums2[rightStart]){
                    if (counter === firstIndex){
                        firstElement = nums1[leftStart];
                    } else if (counter === secondIndex){
                        secondElement = nums1[leftStart];
                    }

                    leftStart++;
                }
                else{
                    if (counter === firstIndex){
                        firstElement = nums2[rightStart];
                    } else if (counter === secondIndex){
                        secondElement = nums2[rightStart];
                    }

                    rightStart++;
                }
                }
                else if (leftStart < nums1.length){
                    if (counter === firstIndex){
                        firstElement = nums1[leftStart];
                    } else if (counter === secondIndex){
                        secondElement = nums1[leftStart];
                    }
                    leftStart++;
                }
                else{
                    if (counter === firstIndex){
                        firstElement = nums2[rightStart];
                    } else if (counter === secondIndex){
                        secondElement = nums2[rightStart];
                    }

                    rightStart++;
                }
                

                counter++;
                if (firstElement != -1 && secondElement != -1){
                    return (firstElement + secondElement) / 2;
                }
            }
        }
        
    }
}
