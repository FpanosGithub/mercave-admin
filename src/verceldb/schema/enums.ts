import { pgEnum } from 'drizzle-orm/pg-core';
//ENUMS
export const anchosEnum = pgEnum('anchos', ['UIC-IB', 'UIC-RUS', 'UIC-RUS-IB', 'METR-UIC', 'UIC', 'IB']);
export const orgEnum = pgEnum('organizaciones', ['TRIA', 'ADIF', 'VGS', 'BV', 'MANFEV']);
export const clasesVehiculosEnum = pgEnum('clases', ['LOC', 'VAG', 'MRA']);
export const tiposEventoEnum = pgEnum('tipos_eventos', ['START', 'STOP', 'CIRC', 'NUDO']);
export const sentidoCambioEnum = pgEnum('sentidos_cambio', ['UICIB', 'IBUIC', 'UICRUS', 'RUSUIC']);
export const TiposCambiadoresEnum = pgEnum('tipos_cambiadores', ['Experimental', 'Comercial']);
