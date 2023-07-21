import {NewVehiculo, NewTipoVehiculo} from '@/verceldb/schema/vehiculos'

export const seedTiposVehiculos: NewTipoVehiculo[] = [
  {  
    codigo: 'M.U.400-1',
    descripcion: 'Unimog Bi-Vial', 
    clase: 'MRA',
    marca: 'Mercedes',
    modelo: 'U400',
    tipo_uic : '99',
    serie_uic: '8945',
    imagen: 'unimog.jpg'
  },
  {  
    codigo: 'TTM-6934',
    descripcion: 'Tolva de Balasto', 
    clase: 'VAG',
    marca: '',
    modelo: '',
    tipo_uic : '32',
    serie_uic: '6934',
    imagen: 'tolva.jpg'
  },
  {  
    codigo: 'LTF',
    descripcion: 'Porta Autos', 
    clase: 'VAG',
    marca: '',
    modelo: '',
    tipo_uic : '28',
    serie_uic: '2910',
    imagen: 'portaautos.jpg'
  },
]


export const seedVehiculos: NewVehiculo[] = [
  {
    num_uic: '98-71-0098-734-1',
    tipo: 'M.U.400-1',
    descripcion: 'Vehículo Bivial para traccionar composiciones en cambiador de anchos',
    fabricante: 'Ziewhoff',
    EEM: 'TRIA',
  },
  {
    num_uic: '32-71-6934-001-2',
    tipo: 'TTM-6934',
    descripcion: 'Tolva de transporte y descarga de balasto para obras y mantenimiento de vía',
    EEM: 'MANFEV',
  },
  {
    num_uic: '32-71-6934-025-1',
    tipo: 'TTM-6934',
    descripcion: 'Tolva de transporte y descarga de balasto para obras y mantenimiento de vía',
    EEM: 'MANFEV',
  },
  {
    num_uic: '32-71-6934-031-9',
    tipo: 'TTM-6934',
    descripcion: 'Tolva de transporte y descarga de balasto para obras y mantenimiento de vía',
    EEM: 'MANFEV',
  },
  {
    num_uic: '28-71-291-0-009-8',
    tipo: 'LTF',
    descripcion: 'Porta Autos de ejes',
    EEM: 'MANFEV',
  },
  {
    num_uic: '32-71-6934-045-9',
    tipo: 'TTM-6934',
    descripcion: 'Tolva de transporte y descarga de balasto para obras y mantenimiento de vía',
    EEM: 'MANFEV',
  },
]