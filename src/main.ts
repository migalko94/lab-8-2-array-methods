import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Apartado 1 a)

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesAsignadosAPediatria: Pacientes[] = [];
  pacientesAsignadosAPediatria = pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === "Pediatra"
  );
  return pacientesAsignadosAPediatria;
};

const pacientesAsignadosAPediatria =
  obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesAsignadosAPediatria);

// Apartado 1 b)

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesAsignadosAPediatriaYMenorDeDiezAnios: Pacientes[] = [];
  pacientesAsignadosAPediatriaYMenorDeDiezAnios = pacientes.filter(
    (paciente: Pacientes) =>
      paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
  return pacientesAsignadosAPediatriaYMenorDeDiezAnios;
};

const pacientesAsignadosAPediatriaYMenoresDeDiezAnios =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesAsignadosAPediatriaYMenoresDeDiezAnios);

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente: Pacientes): boolean =>
      paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
};

const protocoloUrgencia = activarProtocoloUrgencia(pacientes);
console.log("Activación del protocolo de urgencia = ", protocoloUrgencia);

//Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesReasignadosAMedicoFamilia: Pacientes[] = [];
  pacientesReasignadosAMedicoFamilia = pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === "Pediatra"
  );
  pacientesReasignadosAMedicoFamilia = pacientesReasignadosAMedicoFamilia.map(
    (paciente: Pacientes): Pacientes => {
      return { ...paciente, especialidad: "Medico de familia" };
    }
  );

  return pacientesReasignadosAMedicoFamilia;
};

const muestraPacientesReasignadosAMedicoFamilia =
  reasignaPacientesAMedicoFamilia(pacientes);
console.log(muestraPacientesReasignadosAMedicoFamilia);

//Apartado 4

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
  );
};

const esRequeridoElPediatra = hayPacientesDePediatria(pacientes);
console.log(
  "Hay pacientes de pediatría y se requiere la presencia del pediatra = ",
  esRequeridoElPediatra
);

//Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let pacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  let pacientesMedicoFamilia: Pacientes[] = [];
  pacientesMedicoFamilia = pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === "Medico de familia"
  );

  let pacientesPediatra: Pacientes[] = [];
  pacientesPediatra = pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === "Pediatra"
  );

  let pacientesCardiologo: Pacientes[] = [];
  pacientesCardiologo = pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === "Cardiólogo"
  );

  pacientesPorEspecialidad = {
    medicoDeFamilia: pacientesMedicoFamilia.length,
    pediatria: pacientesPediatra.length,
    cardiologia: pacientesCardiologo.length,
  };

  return pacientesPorEspecialidad;
};

const muestraPacientesPorEspecialidad =
  cuentaPacientesPorEspecialidad(pacientes);
console.log(muestraPacientesPorEspecialidad);
