const productos = [
    {
      id: 1,
      nombre: "TPV Móvil Ualá",
      imagen: "/productos/dispositivo1.png",
      precio: 1999
    },
    {
      id: 2,
      nombre: "TPV Fijo Ualá",
      imagen: "/productos/tpv-impresora.png",
      precio: 2499
    },
    {
      id: 3,
      nombre: "Mini TPV Bluetooth Ualá",
      imagen: "/productos/dispositivo3.png",
      precio: 1499
    },
    {
      id: 4,
      nombre: "TPV Inalámbrico Ualá",
      imagen: "/productos/tpv-mini-bluetooth.png",
      precio: 2699
    },
    {
      id: 5,
      nombre: "TPV con Impresora Integrada",
      imagen: "/productos/dispositivo2.png",
      precio: 4299
    },
    {
      id: 6,
      nombre: "Funda  Ualá",
      imagen: "/productos/funda-tpv.png",
      precio: 299
    },
    {
      id: 7,
      nombre: "Cable USB-C ",
      imagen: "/productos/cable-usbc.png",
      precio: 149
    },
    {
      id: 8,
      nombre: "Protector de Pantalla ",
      imagen: "/productos/protector-pantalla.png",
      precio: 99
    },
    {
      id: 9,
      nombre: "Soporte Ajustable ",
      imagen: "/productos/soporte-ajustable.png",
      precio: 299
    },
    // {
    //   id: 10,
    //   nombre: "TPV Inalambrico",
    //   imagen: "/productos/tpv-inalambrico.png",
    //   precio: 499
    // }
  ];

  
//  const condicion=false 
//   /  const promesa = new Promise((resolve, reject)=>{
    //   if(condicion){
    //     resolve("se resolvio")
    //   }else
    //     reject("se rechazo")
    //  })
    
  
  const getProducts = () =>{
    return new Promise ((resolve, reject)=>{
      setTimeout(()=>{
        resolve(productos)
      },2000)
      })
    };

    export { getProducts } 