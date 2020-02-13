#Obtener la cantidad de elementos mayores O iguales a 5 en la tupla.

def mayor_o_igual_cuatro(elemento):
    return elemento >= 4
tupla = (5,33,4,78,3,40,77,3,4,55,30,25,1,30)
resultado = tuple(filter( lambda elemento: elemento >= 4, tupla))
resultado = len(resultado)
print(resultado)
