def possibleStringCount(word, k):

    wordArr = list(word)
    newwordArr = []
    newstr = ""
    for i in wordArr:
        if [i*wordArr.count(i)] not in newwordArr:
          newwordArr.append([i*wordArr.count(i)])
          

possibleStringCount("aabbccdd",7)