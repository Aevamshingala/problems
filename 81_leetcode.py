def search(nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: bool
        """
        l = 0
        r = len(nums)-1
        found = False
        while l <= r:
            if nums[l] == target:
                found = True
                return found
            if nums[r] == target:
                found = True
                return found
            l+=1
            r-=1
        return found


print(search([2,5,6,0,0,1,2],0))