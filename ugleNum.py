
# def nthUglyNumber(n):
#           if n==1:
#             return 1
#           ugly = [1]
#           i = 2
#           while(len(ugly)!=n):
#             flag = False
#             def primefactor(n):
#                   factors = []
                  
#                   # Divide by 2 while n is even
#                   while n % 2 == 0:
#                       factors.append(2)
#                       n //= 2
                  
#                   # Check odd numbers from 3 onwards
#                   for i in range(3, int(n**0.5) + 1, 2):
#                       while n % i == 0:
#                           factors.append(i)
#                           n //= i

#                   # If n is still greater than 2, it must be prime
#                   if n > 2:
#                       factors.append(n)
#                   if factors[-1] >= 9:
#                       factors[-1]=0
                      
#                   return factors

#             primearr = primefactor(i)
#             print (primearr)
#             for j in [4,6,7,8,9,0]:
#                 if  j  in primearr:
#                     flag = True
#                     break
#             if not flag:
#                  ugly.append(i)
#             i+=1
#           return ugly
            

# print(nthUglyNumber(215))


#             # def primefactor(n,divisor=2):
#             #     if n<2:
#             #           return[]
#             #     if n % divisor == 0:
#             #           return [divisor] + primefactor(n//divisor,divisor)
#             #     return[divisor]+ primefactor(n,divisor+1 if divisor == 2 else divisor+2)

def nthUglyNumber(n):
        """
        :type n: int
        :rtype: int
        """
        ugly = [1]
        p2 = 0
        p3 = 0
        p5 = 0
        while(len(ugly)!=n):
            two = ugly[p2]*2
            three = ugly[p3]*3
            five = ugly[p5]*5
            minval = min(two,three,five)
            ugly.append(minval)
            if minval == two:
                p2+=1
            if minval == three:
                p3+=1
            if minval == five:
                p5+=1

        return ugly[-1]
print(nthUglyNumber(12))