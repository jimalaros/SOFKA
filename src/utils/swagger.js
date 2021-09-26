export const swaggerOptions = {
    definition: 
      {
        "openapi": "3.0.0",
        "info": {
          "title": "CONCURSO PREGUNTAS Y RESPUESTAS",
          "description": "Aplicación para que las personas se registren, inicien sesión y respondan las preguntas para ganar dinero",
          "version": "1.0.0"
        },
        "servers": [
          {
            "url": "http://localhost:5000",
            "description": "Servidor local"
          }
        ],
        "tags": [
          {
            "name": "Usuarios",
            "description": "Todos los usuarios del sistema"
          },
          {
            "name": "PrimeraRonda",
            "description": "Preguntas de dificultad 1"
          },
          {
            "name": "SegundaRonda",
            "description": "Preguntas de dificultad 2"
          },
          {
            "name": "TercerRonda",
            "description": "Preguntas de dificultad 3"
          },
          {
            "name": "CuartaRonda",
            "description": "Preguntas de dificultad 4"
          },
          {
            "name": "QuintaRonda",
            "description": "Preguntas de dificultad 5"
          },
          {
            "name": "Historial",
            "description": "Historial de juego"
          }
        ],
        "paths": {
          "/usuarios": {
            "get": {
              "tags": [
                "Usuarios"
              ],
              "summary": "Todos los usuarios del sistema",
              "description": "Todos los usuarios registrados en el sistema",
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Usuario"
                      }
                    }
                  }
                },
              }
            }
          },
          "/usuarios/nuevos": {
            "post": {
              "tags": [
                "Usuarios"
              ],
              "summary": "Para crear nuevos usuarios en el sistema",
              "description": "Crear usuarios",
              "security": [],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Usuario"
                    }
                  }
                }
              },
              "responses": {
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/usuarios/Login": {
            "post": {
              "tags": [
                "Usuarios"
              ],
              "summary": "Para que los usuarios inicien sesión",
              "description": "Iniciar sesión",
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UsuarioLogin"
                    }
                  }
                }
              },
              "responses": {
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                },
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/primeraronda": {
            "get": {
              "tags": [
                "PrimeraRonda"
              ],
              "summary": "Para ver y responder todas las preguntas de categoria 1",
              "security": [],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Pregunta"
                      }
                    }
                  }
                },
              }
            }
          },
          "/primeraronda/CrearPregunta": {
            "post": {
              "tags": [
                "PrimeraRonda"
              ],
              "summary": "Para crear preguntas categoria 1",
              "security": [],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Pregunta"
                    }
                  }
                }
              },
              "responses": {
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/primeraronda/PrimeraRespuesta/{id}": {
            "post": {
              "tags": [
                "PrimeraRonda"
              ],
              "summary": "Para responder a la primera pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/primeraronda/SegundaRespuesta/{id}": {
            "post": {
              "tags": [
                "PrimeraRonda"
              ],
              "summary": "Para responder a la segunda pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/primeraronda/TercerRespuesta/{id}": {
            "post": {
              "tags": [
                "PrimeraRonda"
              ],
              "summary": "Para responder a la tercera pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/primeraronda/CuartaRespuesta/{id}": {
            "post": {
              "tags": [
                "PrimeraRonda"
              ],
              "summary": "Para responder a la cuarta pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/primeraronda/QuintaRespuesta/{id}": {
            "post": {
              "tags": [
                "PrimeraRonda"
              ],
              "summary": "Para responder a la quinta pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/primeraronda/AgregarDinero": {
            "post": {
              "tags": [
                "PrimeraRonda"
              ],
              "summary": "Para guardar el dinero conseguido en la primera ronda",
              "security": [],
              "responses": {
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/segundaronda": {
            "get": {
              "tags": [
                "SegundaRonda"
              ],
              "summary": "Para ver y responder todas las preguntas de categoria 2",
              "security": [],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Pregunta"
                      }
                    }
                  }
                },
              }
            }
          },
          "/segundaronda/DineroRonda1": {
            "get": {
              "tags": [
                "SegundaRonda"
              ],
              "summary": "Para ver el dinero acumulado de la ronda anterior",
              "security": [],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Dinero"
                      }
                    }
                  }
                },
              }
            }
          },
          "/segundaronda/CrearPregunta": {
            "post": {
              "tags": [
                "SegundaRonda"
              ],
              "summary": "Para crear preguntas categoria 2",
              "security": [],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Pregunta"
                    }
                  }
                }
              },
              "responses": {
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/segundaronda/PrimeraRespuesta/{id}": {
            "post": {
              "tags": [
                "SegundaRonda"
              ],
              "summary": "Para responder a la primera pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/segundaronda/SegundaRespuesta/{id}": {
            "post": {
              "tags": [
                "SegundaRonda"
              ],
              "summary": "Para responder a la segunda pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/segundaronda/TercerRespuesta/{id}": {
            "post": {
              "tags": [
                "SegundaRonda"
              ],
              "summary": "Para responder a la tercera pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/segundaronda/CuartaRespuesta/{id}": {
            "post": {
              "tags": [
                "SegundaRonda"
              ],
              "summary": "Para responder a la cuarta pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/segundaronda/QuintaRespuesta/{id}": {
            "post": {
              "tags": [
                "SegundaRonda"
              ],
              "summary": "Para responder a la quinta pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/segundaronda/AgregarDinero": {
            "post": {
              "tags": [
                "SegundaRonda"
              ],
              "summary": "Para guardar el dinero conseguido en la segunda ronda",
              "security": [],
              "responses": {
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/tercerronda": {
            "get": {
              "tags": [
                "TercerRonda"
              ],
              "summary": "Para ver y responder todas las preguntas de categoria 3",
              "security": [],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Pregunta"
                      }
                    }
                  }
                }
              }
            }
          },
          "/tercerronda/DineroRonda2": {
            "get": {
              "tags": [
                "TercerRonda"
              ],
              "summary": "Para ver el dinero acumulado de la ronda anterior",
              "security": [],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Dinero"
                      }
                    }
                  }
                },
              }
            }
          },
          "/tercerronda/CrearPregunta": {
            "post": {
              "tags": [
                "TercerRonda"
              ],
              "summary": "Para crear preguntas categoria 3",
              "security": [],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Pregunta"
                    }
                  }
                }
              },
              "responses": {
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/tercerronda/PrimeraRespuesta/{id}": {
            "post": {
              "tags": [
                "TercerRonda"
              ],
              "summary": "Para responder a la primera pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/tercerronda/SegundaRespuesta/{id}": {
            "post": {
              "tags": [
                "TercerRonda"
              ],
              "summary": "Para responder a la segunda pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/tercerronda/TercerRespuesta/{id}": {
            "post": {
              "tags": [
                "TercerRonda"
              ],
              "summary": "Para responder a la tercera pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/tercerronda/CuartaRespuesta/{id}": {
            "post": {
              "tags": [
                "TercerRonda"
              ],
              "summary": "Para responder a la cuarta pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/tercerronda/QuintaRespuesta/{id}": {
            "post": {
              "tags": [
                "TercerRonda"
              ],
              "summary": "Para responder a la quinta pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/tercerronda/AgregarDinero": {
            "post": {
              "tags": [
                "TercerRonda"
              ],
              "summary": "Para guardar el dinero conseguido en la tercer ronda",
              "security": [],
              "responses": {
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/cuartaronda": {
            "get": {
              "tags": [
                "CuartaRonda"
              ],
              "summary": "Para ver y responder todas las preguntas de categoria 4",
              "security": [],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Pregunta"
                      }
                    }
                  }
                },
              }
            }
          },
          "/cuartaronda/DineroRonda3": {
            "get": {
              "tags": [
                "CuartaRonda"
              ],
              "summary": "Para ver el dinero acumulado de la ronda anterior",
              "security": [],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Dinero"
                      }
                    }
                  }
                },
              }
            }
          },
          "/cuartaronda/CrearPregunta": {
            "post": {
              "tags": [
                "CuartaRonda"
              ],
              "summary": "Para crear preguntas categoria 4",
              "security": [],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Pregunta"
                    }
                  }
                }
              },
              "responses": {
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/cuartaronda/PrimeraRespuesta/{id}": {
            "post": {
              "tags": [
                "CuartaRonda"
              ],
              "summary": "Para responder a la primera pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/cuartaronda/SegundaRespuesta/{id}": {
            "post": {
              "tags": [
                "CuartaRonda"
              ],
              "summary": "Para responder a la segunda pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/cuartaronda/TercerRespuesta/{id}": {
            "post": {
              "tags": [
                "CuartaRonda"
              ],
              "summary": "Para responder a la tercera pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/cuartaronda/CuartaRespuesta/{id}": {
            "post": {
              "tags": [
                "CuartaRonda"
              ],
              "summary": "Para responder a la cuarta pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/cuartaronda/QuintaRespuesta/{id}": {
            "post": {
              "tags": [
                "CuartaRonda"
              ],
              "summary": "Para responder a la quinta pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/cuartaronda/AgregarDinero": {
            "post": {
              "tags": [
                "CuartaRonda"
              ],
              "summary": "Para guardar el dinero conseguido en la cuarta ronda",
              "security": [],
              "responses": {
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/quintaronda": {
            "get": {
              "tags": [
                "QuintaRonda"
              ],
              "summary": "Para ver y responder todas las preguntas de categoria 5",
              "security": [],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Pregunta"
                      }
                    }
                  }
                },
              }
            }
          },
          "/quintaronda/DineroRonda4": {
            "get": {
              "tags": [
                "QuintaRonda"
              ],
              "summary": "Para ver el dinero acumulado de la ronda anterior",
              "security": [],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Dinero"
                      }
                    }
                  }
                },
              }
            }
          },
          "/quintaronda/CrearPregunta": {
            "post": {
              "tags": [
                "QuintaRonda"
              ],
              "summary": "Para crear preguntas categoria 5",
              "security": [],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Pregunta"
                    }
                  }
                }
              },
              "responses": {
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/quintaronda/PrimeraRespuesta/{id}": {
            "post": {
              "tags": [
                "QuintaRonda"
              ],
              "summary": "Para responder a la primera pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/quintaronda/SegundaRespuesta/{id}": {
            "post": {
              "tags": [
                "QuintaRonda"
              ],
              "summary": "Para responder a la segunda pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/quintaronda/TercerRespuesta/{id}": {
            "post": {
              "tags": [
                "QuintaRonda"
              ],
              "summary": "Para responder a la tercera pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/quintaronda/CuartaRespuesta/{id}": {
            "post": {
              "tags": [
                "QuintaRonda"
              ],
              "summary": "Para responder a la cuarta pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/quintaronda/QuintaRespuesta/{id}": {
            "post": {
              "tags": [
                "QuintaRonda"
              ],
              "summary": "Para responder a la quinta pregunta",
              "security": [],
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Respuesta"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/quintaronda/AgregarDinero": {
            "post": {
              "tags": [
                "QuintaRonda"
              ],
              "summary": "Para guardar el dinero conseguido en la quinta ronda",
              "responses": {
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
          "/historial": {
            "get": {
              "tags": [
                "Historial"
              ],
              "summary": "Todos los usuarios del sistema",
              "description": "Todos los usuarios registrados en el sistema",
              "security": [],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Historial"
                      }
                    }
                  }
                }
              }
            }
          },
          "/historial/CrearHistorial": {
            "post": {
              "tags": [
                "Historial"
              ],
              "summary": "Para crear el historial",
              "security": [],
              "responses": {
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
              }
            }
          },
        },
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "components": {
          "securitySchemes": {
            "bearerAuth": {
              "type": "http",
              "scheme": "bearer"
            }
          },
          "schemas": {
            "Usuario": {
              "type": "object",
              "required": [
                "nombre",
                "apellido",
                "correo",
                "telefono",
                "contraseña"
              ],
              "properties": {
                "nombre": {
                  "type": "string",
                  "example": "Jaao"
                },
                "apellido": {
                  "type": "string",
                  "example": "A"
                },
                "correo": {
                  "type": "string",
                  "example": "j@gmail.com"
                },
                "telefono": {
                  "type": "number",
                  "example": 311111
                },
                "contraseña": {
                  "type": "string",
                  "example": "111111"
                },
              }
            },
            "UsuarioLogin": {
              "type": "object",
              "required": [
                "correo",
                "contraseña"
              ],
              "properties": {
                "correo": {
                  "type": "string",
                  "example": "j.j@gmail.com"
                },
                "contraseña": {
                  "type": "string",
                  "example": "111111"
                }
              }
            },
            "Pregunta": {
              "type": "object",
              "required": [
                "pregunta",
                "respuesta1",
                "respuesta2",
                "respuesta3",
                "respuesta4",
                "categoria",
                "premio"
              ],
              "properties": {
                "pregunta": {
                  "type": "string",
                  "example": "¿Cómo se llama la aplicación para chatear más famosa del mundo?"
                },
                "respuesta1": {
                  "type": "string",
                  "example": "Whatsapp"
                },
                "respuesta2": {
                  "type": "string",
                  "example": "Facebook"
                },
                "respuesta3": {
                  "type": "string",
                  "example": "Instagram"
                },
                "respuesta4": {
                  "type": "string",
                  "example": "Twitter"
                },
                "categoria": {
                  "type": "number",
                  "example": 1
                },
                "premio": {
                  "type": "number",
                  "example": 12500
                }
              }
            },
            "Respuesta": {
              "type": "object",
              "required": [
                "respuesta"
              ],
              "properties": {
                "respuesta": {
                  "type": "string",
                  "example": "Whatsapp"
                }
              }
            },
            "Dinero": {
              "type": "object",
              "required": [
                "acumulado"
              ],
              "properties": {
                "acumulado": {
                  "type": "number",
                  "example": 250000
                }
              }
            },
            "Historial": {
              "type": "object",
              "required": [
                "usuario",
                "telefono",
                "dinero"
              ],
              "properties": {
                "usuario": {
                  "type": "string",
                  "example": "Alex"
                },
                "telefono": {
                  "type": "string",
                  "example": "3200000"
                },
                "dinero": {
                  "type": "number",
                  "example": 1000000
                }
              }
            }
          }
        }
      },
    apis: ['./src/routes*.js']
  };
  