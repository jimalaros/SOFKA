listajugadores = [];
listapreguntas = [];
listapreguntasRonda1 = [];
listapreguntasRonda2 = [];
listapreguntasRonda3 = [];
listapreguntasRonda4 = [];
listapreguntasRonda5 = [];
premiototal = [];

class Juego:
    def __init__(self, acumulado):
        self.acumulado=acumulado;
    
    def DatosPreguntas(self):
        print("Pregunta: {} - Respuesta1: {} - Respuesta2: {} - Respuesta3: {} - Respuesta4: {} - categoria: {} - premio: {}".format(self.pregunta, self.respuesta1, self.respuesta2, self.respuesta3, self.respuesta4, self.categoria, self.premio));    
        
    def DatosJugador(self):
        print("Nombre: {} - Apellido: {} - Correo: {} - Telefono: {}".format(self.nombre, self.apellido, self.correo, self.telefono));

class Jugador(Juego):
    def __init__(self, nombre, apellido, correo, telefono):
        self.nombre=nombre;
        self.apellido=apellido;
        self.correo=correo;
        self.telefono=telefono;

class Pregunta(Juego):
    def __init__(self, pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio):
        self.pregunta=pregunta;
        self.respuesta1=respuesta1;
        self.respuesta2=respuesta2;
        self.respuesta3=respuesta3;
        self.respuesta4=respuesta4;
        self.categoria=categoria;
        self.premio=premio;

def RegistrarJugadores():
    print("Registro de Jugadores\n");
    nombre = input("Ingrese el nombre: ");
    apellido = input("Ingrese el apellido: ");
    correo = input("Ingrese el correo: ");
    telefono = input("Ingrese el telefono: ");
    registro = Jugador(nombre, apellido, correo, telefono);
    listajugadores.append(registro);

def ListaJugadores():
    print("Listado de Jugadores\n");
    for registro in listajugadores:
        registro.DatosJugador();

def BuscarJugador():
    print("Buscar Jugador\n");
    correo = input("Ingrese el correo del jugador a buscar: ");
    for registro in listajugadores:
        if correo == registro.correo:
            registro.DatosJugador();

def RegistrarPreguntas():
    print("Registro de Preguntas\n");
    pregunta = "¿Donde nació Simon Bolivar?";
    respuesta1 = "Caracas";
    respuesta2 = "Santa Marta";
    respuesta3 = "Maracaibo";
    respuesta4 = "Monteria";
    categoria = 1;
    premio = 12500;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Qué nombre tiene tradicionalmente la fiesta que se hace a una mujer que espera un bebé?";
    respuesta1 = "Baby drizzle";
    respuesta2 = "Baby shower";
    respuesta3 = "Baby downpour";
    respuesta4 = "Baby deluge";
    categoria = 1;
    premio = 25000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "En un restaurante, si alguien invita, ¿Qué hace?";
    respuesta1 = "Pide la cuenta";
    respuesta2 = "Paga la cuenta";
    respuesta3 = "Rompe la cuenta";
    respuesta4 = "Te dice que pagues";
    categoria = 1;
    premio = 50000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "Si alguien pide ver tu identificación, ¿Qué puedes mostrarle?";
    respuesta1 = "La lengua";
    respuesta2 = "Los ojos";
    respuesta3 = "La nariz";
    respuesta4 = "El pasaporte";
    categoria = 1;
    premio = 75000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Cómo se llama la aplicación para chatear más famosa del mundo?";
    respuesta1 = "Whasapp";
    respuesta2 = "Instagram";
    respuesta3 = "Twitter";
    respuesta4 = "Facebook";
    categoria = 1;
    premio = 100000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "En los hoteles elegantes, ¿Qué snack suele dejarse sobre las almohadas?";
    respuesta1 = "Una menta";
    respuesta2 = "Un pretzel";
    respuesta3 = "Una manzana";
    respuesta4 = "Una foto";
    categoria = 2;
    premio = 150000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Qué planta es el símbolo nacional de Irlanda?";
    respuesta1 = "Una Rosa";
    respuesta2 = "Un Trébol";
    respuesta3 = "Una Orquidea";
    respuesta4 = "Un Girasol";
    categoria = 2;
    premio = 200000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Qué significa la abreviación en inglés 'BFF'?";
    respuesta1 = "Buff Fit Fella";
    respuesta2 = "Bye for Five";
    respuesta3 = "Best Friends Forever";
    respuesta4 = "Boy Friend Furious";
    categoria = 2;
    premio = 250000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿De qué país son nativos los canguros?";
    respuesta1 = "Perú";
    respuesta2 = "Australia";
    respuesta3 = "Nueva Zelanda";
    respuesta4 = "Irlanda";
    categoria = 2;
    premio = 300000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Cuál de estos nombres no aparece en el título de una obra de Shakespe?";
    respuesta1 = "Darren";
    respuesta2 = "Macbeth";
    respuesta3 = "Hamlet";
    respuesta4 = "Romeo";
    categoria = 2;
    premio = 350000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Qué es la trufa blanca?";
    respuesta1 = "Un hongo";
    respuesta2 = "Una Raiz";
    respuesta3 = "Un tuberculo";
    respuesta4 = "Una hortaliza";
    categoria = 3;
    premio = 450000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿En qué país ha desarrollado la mayor parte su labor de investigación la primatóloga Jane Goodall?";
    respuesta1 = "Burundi";
    respuesta2 = "Tanzania";
    respuesta3 = "Ruanda";
    respuesta4 = "Kenia";
    categoria = 3;
    premio = 550000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Qué revolución fue la última que vivió Isabel II como reina de España?";
    respuesta1 = "La sublevación de los sargentos de San Gil";
    respuesta2 = "El motín de Esquilache";
    respuesta3 = "El motín de La Granja de San Ildefonso";
    respuesta4 = "La gloriosa";
    categoria = 3;
    premio = 650000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Qué batalla supuso la derrota definitiva de Napoleón?";
    respuesta1 = "Lepanto";
    respuesta2 = "Los ojos";
    respuesta3 = "Watergate";
    respuesta4 = "Stalingrado";
    categoria = 3;
    premio = 750000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Cuál es el país más pequeño de África?";
    respuesta1 = "Mauricio";
    respuesta2 = "Ghana";
    respuesta3 = "Burundi";
    respuesta4 = "Islas Seychelles";
    categoria = 3;
    premio = 1000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "Si un día decidieras sembrar semillas de Quercus robur. ¿Qué crecería?";
    respuesta1 = "Flores";
    respuesta2 = "Árbol";
    respuesta3 = "Frutas";
    respuesta4 = "Grano";
    categoria = 4;
    premio = 2000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Los neurólogos creen que la corteza prefrontal del cerebro se activa cuando haces qué?";
    respuesta1 = "Tienes un ataque de pánico";
    respuesta2 = "Recuerdas un nombre";
    respuesta3 = "Entiendes una broma";
    respuesta4 = "Escuchas música";
    categoria = 4;
    premio = 5000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Cuál es el número aproximado de personas que han vivido en la Tierra?";
    respuesta1 = "108 000 millones";
    respuesta2 = "180 000 millones";
    respuesta3 = "1 110 000 millones";
    respuesta4 = "1 108 000 millones";
    categoria = 4;
    premio = 10000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Qué elemento químico fue nombrado en honor a un malvado duende del subsuelo?";
    respuesta1 = "Hafnio";
    respuesta2 = "Cobalto";
    respuesta3 = "Bario";
    respuesta4 = "Telurio";
    categoria = 4;
    premio = 15000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Con qué letra comienza la palabra del tomo 21 de la Enciclopedia Espasa?";
    respuesta1 = "E";
    respuesta2 = "F";
    respuesta3 = "G";
    respuesta4 = "H";
    categoria = 4;
    premio = 30000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Cuántos mares rodean la península de los Balcanes?";
    respuesta1 = "3";
    respuesta2 = "4";
    respuesta3 = "5";
    respuesta4 = "6";
    categoria = 5;
    premio = 50000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Qué novela escribió James Fenimore Cooper en una discusión con su esposa?";
    respuesta1 = "Los pioneros";
    respuesta2 = "Precaución";
    respuesta3 = "El último mohicano";
    respuesta4 = "El cazador de ciervos";
    categoria = 5;
    premio = 75000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Qué tipo de caballería estaba destinada tanto para acciones militares, ecuestres y patrullajes?";
    respuesta1 = "Coracero";
    respuesta2 = "Ulano";
    respuesta3 = "Dragón";
    respuesta4 = "Usar";
    categoria = 5;
    premio = 100000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿Cuál de estas leyes es falsa en Chile?";
    respuesta1 = "Prohibido tocar las campanas para incitar al pueblo a sublevarse";
    respuesta2 = "Prohibido andar en carruaje donde haya una multitud de gente";
    respuesta3 = "Prohibido poner plantas con maceteros en tus balcones o ventanas";
    respuesta4 = "Prohibido montar en burros o mulas estando bajo los efectos del alcohol";
    categoria = 5;
    premio = 250000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    pregunta = "¿En que año se entregó el primer premio Nobel de Literatura?";
    respuesta1 = "1901";
    respuesta2 = "1902";
    respuesta3 = "1903";
    respuesta4 = "1904";
    categoria = 5;
    premio = 500000000;
    registro = Pregunta(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);
    
    '''pregunta = input("Ingrese la pregunta: ");
    respuesta1 = input("Ingrese la primera respuesta: ");
    respuesta2 = input("Ingrese la segunda respuesta: ");
    respuesta3 = input("Ingrese la tercer respuesta: ");
    respuesta4 = input("Ingrese la cuarta respuesta: ");
    categoria = int(input("Ingrese la categoria: "));
    premio = int(input("Ingrese la bonificación de la pregunta: "));
    registro = Juego(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio);
    listapreguntas.append(registro);'''

def ListaPreguntas():
    print("Listado de Preguntas\n");
    categoria = int(input("ingrese la categoria a buscar: "));
    for registro in listapreguntas:
        if categoria == registro.categoria:
            registro.DatosPreguntas();

def RespuestasRonda1():
    print("Primera Ronda\n");
    respuestapregunta1 = input("Ingrese la respuesta para la primera pregunta: ");
    if respuestapregunta1 == "Caracas":
        primerpremio = listapreguntas[0].premio;
        premio1 = 0 + primerpremio;
        premiototal.append(premio1);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[0]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", 0);
    
    respuestapregunta2 = input("Ingrese la respuesta para la segunda pregunta: ");
    if respuestapregunta2 == "Baby shower":
        segundopremio = listapreguntas[1].premio;
        premio2 = premiototal[0] + segundopremio;
        premiototal.append(premio2);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[1]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[0]);
    
    respuestapregunta3 = input("Ingrese la respuesta para la tercer pregunta: ");
    if respuestapregunta3 == "Paga la cuenta":
        tercerpremio = listapreguntas[2].premio;
        premio3 = premiototal[1] + tercerpremio;
        premiototal.append(premio3);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[2]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[1]);
    
    respuestapregunta4 = input("Ingrese la respuesta para la cuarta pregunta: ");
    if respuestapregunta4 == "El pasaporte":
        cuartopremio = listapreguntas[3].premio;
        premio4 = premiototal[2] + cuartopremio;
        premiototal.append(premio4);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[3]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[2]);
    
    respuestapregunta5 = input("Ingrese la respuesta para la quinta pregunta: ");
    if respuestapregunta5 == "Whatsapp":
        quintopremio = listapreguntas[4].premio;
        premio5 = premiototal[3] + quintopremio;
        premiototal.append(premio5);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[4]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[3]);
    
def RespuestasRonda2():
    print("Segunda Ronda\n");
    respuestapregunta1 = input("Ingrese la respuesta para la primera pregunta: ");
    if respuestapregunta1 == "Una menta":
        primerpremio = listapreguntas[5].premio;
        premio1 = premiototal[4] + primerpremio;
        premiototal.append(premio1);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[5]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[4]);
    
    respuestapregunta2 = input("Ingrese la respuesta para la segunda pregunta: ");
    if respuestapregunta2 == "Un Trébol":
        segundopremio = listapreguntas[6].premio;
        premio2 = premiototal[5] + segundopremio;
        premiototal.append(premio2);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[6]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[5]);
    
    respuestapregunta3 = input("Ingrese la respuesta para la tercer pregunta: ");
    if respuestapregunta3 == "Best Friends Forever":
        tercerpremio = listapreguntas[7].premio;
        premio3 = premiototal[6] + tercerpremio;
        premiototal.append(premio3);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[7]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[6]);
    
    respuestapregunta4 = input("Ingrese la respuesta para la cuarta pregunta: ");
    if respuestapregunta4 == "Australia":
        cuartopremio = listapreguntas[8].premio;
        premio4 = premiototal[7] + cuartopremio;
        premiototal.append(premio4);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[8]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[7]);
    
    respuestapregunta5 = input("Ingrese la respuesta para la quinta pregunta: ");
    if respuestapregunta5 == "Darren":
        quintopremio = listapreguntas[9].premio;
        premio5 = premiototal[8] + quintopremio;
        premiototal.append(premio5);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[9]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[8]);
    
def RespuestasRonda3():
    print("Tercer Ronda\n");
    respuestapregunta1 = input("Ingrese la respuesta para la primera pregunta: ");
    if respuestapregunta1 == "Un hongo":
        primerpremio = listapreguntas[10].premio;
        premio1 = premiototal[9] + primerpremio;
        premiototal.append(premio1);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[10]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[9]);
    
    respuestapregunta2 = input("Ingrese la respuesta para la segunda pregunta: ");
    if respuestapregunta2 == "Tanzania":
        segundopremio = listapreguntas[11].premio;
        premio2 = premiototal[10] + segundopremio;
        premiototal.append(premio2);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[11]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[10]);
    
    respuestapregunta3 = input("Ingrese la respuesta para la tercer pregunta: ");
    if respuestapregunta3 == "La gloriosa":
        tercerpremio = listapreguntas[12].premio;
        premio3 = premiototal[11] + tercerpremio;
        premiototal.append(premio3);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[12]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[11]);
    
    respuestapregunta4 = input("Ingrese la respuesta para la cuarta pregunta: ");
    if respuestapregunta4 == "Waterloo":
        cuartopremio = listapreguntas[13].premio;
        premio4 = premiototal[12] + cuartopremio;
        premiototal.append(premio4);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[13]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[12]);
    
    respuestapregunta5 = input("Ingrese la respuesta para la quinta pregunta: ");
    if respuestapregunta5 == "Islas Seychelles":
        quintopremio = listapreguntas[14].premio;
        premio5 = premiototal[13] + quintopremio;
        premiototal.append(premio5);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[14]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[13]);
    
def RespuestasRonda4():
    print("Cuarta Ronda\n");
    respuestapregunta1 = input("Ingrese la respuesta para la primera pregunta: ");
    if respuestapregunta1 == "Árbol":
        primerpremio = listapreguntas[15].premio;
        premio1 = premiototal[14] + primerpremio;
        premiototal.append(premio1);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[15]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[14]);
    
    respuestapregunta2 = input("Ingrese la respuesta para la segunda pregunta: ");
    if respuestapregunta2 == "Entiendes una broma":
        segundopremio = listapreguntas[16].premio;
        premio2 = premiototal[15] + segundopremio;
        premiototal.append(premio2);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[16]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[15]);
    
    respuestapregunta3 = input("Ingrese la respuesta para la tercer pregunta: ");
    if respuestapregunta3 == "108 000 millones":
        tercerpremio = listapreguntas[17].premio;
        premio3 = premiototal[16] + tercerpremio;
        premiototal.append(premio3);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[17]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[16]);
    
    respuestapregunta4 = input("Ingrese la respuesta para la cuarta pregunta: ");
    if respuestapregunta4 == "Cobalto":
        cuartopremio = listapreguntas[18].premio;
        premio4 = premiototal[17] + cuartopremio;
        premiototal.append(premio4);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[18]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[17]);
    
    respuestapregunta5 = input("Ingrese la respuesta para la quinta pregunta: ");
    if respuestapregunta5 == "E":
        quintopremio = listapreguntas[19].premio;
        premio5 = premiototal[18] + quintopremio;
        premiototal.append(premio5);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[19]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[18]);
    
def RespuestasRonda5():
    print("Quinta Ronda\n");
    respuestapregunta1 = input("Ingrese la respuesta para la primera pregunta: ");
    if respuestapregunta1 == "6":
        primerpremio = listapreguntas[20].premio;
        premio1 = premiototal[19] + primerpremio;
        premiototal.append(premio1);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[20]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[19]);
    
    respuestapregunta2 = input("Ingrese la respuesta para la segunda pregunta: ");
    if respuestapregunta2 == "Precaución":
        segundopremio = listapreguntas[21].premio;
        premio2 = premiototal[20] + segundopremio;
        premiototal.append(premio2);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[21]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[20]);
    
    respuestapregunta3 = input("Ingrese la respuesta para la tercer pregunta: ");
    if respuestapregunta3 == "Dragón":
        tercerpremio = listapreguntas[22].premio;
        premio3 = premiototal[21] + tercerpremio;
        premiototal.append(premio3);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[22]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[21]);
    
    respuestapregunta4 = input("Ingrese la respuesta para la cuarta pregunta: ");
    if respuestapregunta4 == "Prohibido montar en burros o mulas estando bajo los efectos del alcohol":
        cuartopremio = listapreguntas[23].premio;
        premio4 = premiototal[22] + cuartopremio;
        premiototal.append(premio4);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[23]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[22]);
    
    respuestapregunta5 = input("Ingrese la respuesta para la quinta pregunta: ");
    if respuestapregunta5 == "1901":
        quintopremio = listapreguntas[24].premio;
        premio5 = premiototal[23] + quintopremio;
        premiototal.append(premio5);
        print("Su respuesta es correcta, el dinero acumulado es: ", premiototal[24]);
    else:
        print("Su respuesta es incorrecta, el dinero acumulado es: ", premiototal[23]);
        
        
def salir():
    print("Gracias por haber jugado...!");
    exit();
    
def main():
    while True:
        print("\n")
        print("|****************************|")
        print("|**|      Bienvenidos     |**|")
        print("|**|         Menu         |**|")
        print("|****************************|")
        print("")
        print("Seleccione una de las siguientes opciones:");
        print("1.- Registrar Jugador")
        print("2.- Mostrar Jugador")
        print("3.- Buscar Jugador")
        print("4.- Registrar Preguntas")
        print("5.- Listado de preguntas x categoria")
        print("6.- Contestar Preguntas Ronda 1")
        print("7.- Contestar Preguntas Ronda 2")
        print("8.- Contestar Preguntas Ronda 3")
        print("9.- Contestar Preguntas Ronda 4")
        print("10.- Contestar Preguntas Ronda 5")
        print("11.- Salir\n")
        
        opcion = int(input("Opcion: "))

        if opcion == 1:
            RegistrarJugadores();
        elif opcion == 2:
            ListaJugadores();
        elif opcion == 3:
            BuscarJugador();
        elif opcion == 4:
            RegistrarPreguntas();
        elif opcion == 5:
            ListaPreguntas();   
        elif opcion == 6:
            RespuestasRonda1();
        elif opcion == 7:
            RespuestasRonda2();
        elif opcion == 8:
            RespuestasRonda3();
        elif opcion == 9:
            RespuestasRonda4();
        elif opcion == 10:
            RespuestasRonda5();
        elif opcion == 11:
            salir();

if __name__ == '__main__':
    main();
