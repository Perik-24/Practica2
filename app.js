const mongoose = require('mongoose');

const uri_db = 'mongodb://localhost:27017/Practica2';

mongoose.connect(uri_db)
  .then(() => {
    console.log('CONEXION EXITOSA');
  })
  .catch((err) => {
    console.error('ERROR AL CONECTAR A LA BASE DE DATOS(NO JALA)', err);
  });

// Schema
const userSchema = new mongoose.Schema({
    //Atributos
  name: {
    type: String
  },
  apepat: {
    type: String 
  },
  apemat: {
    type: String
  },
  fechanac: {
    type: Date
  },
  TelNumber:{
    type: Number
  },
  sexo: {
    type: String
  },
  lastcharacter: {
    type: String
  }
});

// Model
const Alumnos = new mongoose.model('Tabla de Registro', userSchema);

Alumnos.create(
    {
        name:'Diego',
        apepat:'Martinez',
        apemat:'Lozada',
        fechanac: new Date('2004, 8, 24 '),
        TelNumber:4492882314,
        
    }
)