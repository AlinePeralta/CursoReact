const productos = [
    {
      id: 1,
      nombre: "TPV Móvil Ualá",
      imagen: ["/productos/dispositivo1.png", "/productos/tpv-impresora.png", "/productos/dispositivo3.png","/productos/tpv-mini-bluetooth.png" ],
      precio: 1999,
      descripcion:"lorem12",
      stock: 1,
      category:"terminales"

    },
    {
      id: 2,
      nombre: "TPV Fijo Ualá",
      imagen: ["/productos/dispositivo1.png", "/productos/tpv-impresora.png", "/productos/dispositivo3.png","/productos/tpv-mini-bluetooth.png" ],
      precio: 2499,
      descripcion:"",
      stock: 10,
      category:"terminales"
    },
    {
      id: 3,
      nombre: "Mini TPV Bluetooth Ualá",
      imagen: ["/productos/dispositivo1.png", "/productos/tpv-impresora.png", "/productos/dispositivo3.png","/productos/tpv-mini-bluetooth.png" ],
      precio: 1499,
      descripcion:"",
      stock: 10,
      category:"promociones"
    },
    {
      id: 4,
      nombre: "TPV Inalámbrico Ualá",
      imagen: "/productos/tpv-mini-bluetooth.png",
      precio: 2699,
      descripcion:"",
      stock: 10,
      category:"promociones"
    },
    {
      id: 5,
      nombre: "TPV con Impresora Integrada",
      imagen: "/productos/dispositivo2.png",
      precio: 4299,
      descripcion:"",
      stock: 10,
      category:"terminales"
    },
    {
      id: 6,
      nombre: "Funda  Ualá",
      imagen: "/productos/funda-tpv.png",
      precio: 299,
      descripcion:"",
      stock: 10,
      category:"accesorios"
    },
    {
      id: 7,
      nombre: "Cable USB-C ",
      imagen: "/productos/cable-usbc.png",
      precio: 149,
      descripcion:"",
      stock: 10,
      category:"accesorios"
    },
    {
      id: 8,
      nombre: "Protector de Pantalla ",
      imagen: "/productos/protector-pantalla.png",
      precio: 99,
      descripcion:"",
      stock: 10,
      category:"accesorios"
      
    },
    {
      id: 9,
      nombre: "Soporte Ajustable ",
      imagen: "/productos/soporte-ajustable.png",
      precio: 299,
      descripcion:"",
      stock: 10,
      category:"accesorios"
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