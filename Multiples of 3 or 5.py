def solution(number):
    suma_total= 0
    
    for numero in range(number):
        if numero % 3 == 0 or numero % 5 == 0:
            suma_total +=numero
        
    return suma_total


print (solution (10))
