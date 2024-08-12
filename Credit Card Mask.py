
def maskify(cc):
    cc_str = str(cc)  
    return '#' * (len(cc_str) - 4) + cc_str[-4:]  


print(maskify(2355645635446))
