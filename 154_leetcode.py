def findMin(nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        l = 0
        r = len(nums)-1
        curr_min = nums[0]
        while l<=r:
            if nums[l] < curr_min:
                curr_min = nums[l]
            if nums[r] < curr_min:
                curr_min = nums[r]
            l+=1
            r-=1
        return curr_min