def addDigits(num):
        """
        :type num: int
        :rtype: int
        """
        sum = 0
        flag = True
        while flag:
            while num != 0 :
                    val = num % 10
                    sum += val
                    num = int(num/10)
            if sum>=0 and sum <=9:
                flag= False
                return sum
            num = sum
            sum = 0

print(addDigits(38))