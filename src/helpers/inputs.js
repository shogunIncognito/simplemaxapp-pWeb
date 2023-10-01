export const carInputs = [
  {
    type: 'text',
    name: 'model',
    placeholder: 'Modelo',
    value: 'Corolla'
  },
  {
    type: 'number',
    name: 'year',
    placeholder: 'Año',
    value: 2019
  },
  {
    type: 'text',
    name: 'color',
    placeholder: 'Color',
    value: 'Rojo'
  },
  {
    type: 'number',
    name: 'kilometers',
    placeholder: 'Kilometros',
    value: 4323
  },
  {
    type: 'string',
    name: 'description',
    placeholder: 'Descripcion',
    value: 'Carro ultra veloz para toda la familia'
  },
  {
    type: 'number',
    name: 'price',
    placeholder: 'Precio',
    value: 123000
  }
]

export const tableHeaders = ['ID', 'Marca', 'Modelo', 'Año', 'Kilómetros', 'Color', 'Precio', 'Imagen', 'Acciones']

export const panelLinks = [
  {
    href: '/panel',
    text: 'Autos'
  },
  {
    href: '/panel/users',
    text: 'Usuarios'
  }
]
