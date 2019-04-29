let id = 1;

export default {
   estado:{
    canchas:{
        canchaList: [
            {
                nombre:'Cancha 1',
                horarios: [
                    {
                        dia:'Lunes',
                        desde:'15:00',
                        hasta:'23:00',
                        duracionTurno:'60',
                    },
                    {
                        dia:'Martes',
                        desde:'15:00',
                        hasta:'23:00',
                        duracionTurno:'60',
                    },
                    {
                        dia:'Miercoles',
                        desde:'15:00',
                        hasta:'23:00',
                        duracionTurno:'60',
                    },
                    {
                        dia:'Jueves',
                        desde:'15:00',
                        hasta:'23:00',
                        duracionTurno:'60',
                    },
                    {
                        dia:'Viernes',
                        desde:'15:00',
                        hasta:'23:00',
                        duracionTurno:'60',
                    },
                ],
                reservas: [
                    {
                        fecha:'22/04/2019',
                        hora:'16:00',
                        reservadoPor:'Pepe',
                    }
                ],
            },
            {
            nombre:'Cancha 2',
                horarios: [
                    {
                        dia:'Lunes',
                        desde:'18:00',
                        hasta:'23:00',
                        duracionTurno:'60',
                    },
                    {
                        dia:'Martes',
                        desde:'18:00',
                        hasta:'23:00',
                        duracionTurno:'60',
                    },
                    {
                        dia:'Miercoles',
                        desde:'18:00',
                        hasta:'23:00',
                        duracionTurno:'60',
                    },
                    {
                        dia:'Jueves',
                        desde:'18:00',
                        hasta:'23:00',
                        duracionTurno:'60',
                    },
                    {
                        dia:'Viernes',
                        desde:'18:00',
                        hasta:'23:00',
                        duracionTurno:'60',
                    },
                ],
                reservas: [
                    {
                        fecha:'22/04/2019',
                        hora:'20:00',
                        reservadoPor:'Pepe',
                    }
                ],
            },

        ],
        canchaNew:{
            nombre:'',
            horarios: [
                {
                    dia:'',
                    desde:'',
                    hasta:'',
                    duracionTurno:'',
                },
            ]
        },
        reservaNew:{
            fecha:'',
            hora:'',
            reservadoPor:'',
        }
    },
   },
   ui: {
    listaCancha: [],
   },
};
