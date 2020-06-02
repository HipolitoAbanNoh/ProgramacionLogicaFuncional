from pyswip import Prolog
prolog = Prolog()

prolog.consult("personas.pl")

X = input("----- Es un estudiante... ")
result = bool(list(prolog.query("estudiante(" + X + ")")))
print(result)

X = input("----- Es un egresado... ")
result = bool(list(prolog.query("egresado(" + X + ")")))
print(result)


prolog.consult("hechos.pl")

X = input ("----- En donde estudia... ")
for valor in prolog.query("estudia_en(" + X + ", Y)"):
    print( X,"estudia en el", valor["Y"])

X = input ("----- Quien egreso en la universidad... ")
for valor in prolog.query("egresado_en(" + X + ", Y)"):
    print( valor["Y"], "egreso en el", X)

X = input ("----- Matricula de... ")
for valor in prolog.query("matricula(" + X + ", Y)"):
    print( X,"tiene como matricula", valor["Y"])


prolog.consult("reglas.pl")

X = input("----- Eres mayor de edad, ingrese su edad: ")
result = bool(list(prolog.query("mayor_edad(" + X + ")")))
print(result)

X = input("----- Aprobo el semestre, ingrese su calificacion: ")
result = bool(list(prolog.query("aprobado(" + X + ")")))
print(result)