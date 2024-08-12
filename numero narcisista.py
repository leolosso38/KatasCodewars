def narcissistic(value):
    numero = str(value)

    suma = 0

    for i in numero:
        suma += int(i) ** len(numero)
    return suma == value
  


print (narcissistic(153))
print (narcissistic(1938))
print (narcissistic(9474))
print (narcissistic(3000))
