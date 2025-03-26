from collections import Counter
def countAndSay(n):
        """
        :type n: int
        :rtype: str
        """
        j = 1
        r = "1"
        m = r
                                             # 1211
        while j!=n:
            c = m[0]
            cou= 0 
            newm = ""
            for i in m:
                if c != i:
                    newm+=str(cou)+str(c)
                    c  = i
                    cou = 0

                cou+=1
            newm+=str(cou)+str(c)
            m = newm
        
            j+=1
        return m


print(countAndSay(5))