import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";


const productos = [
  {
    id: 1,
    nombre: "TPV Móvil Ualá",
    imagen: ["/productos/dispositivo1.png", "/productos/dispositivo1-1.png", "/productos/dispositivo1-2.png", "/productos/dispositivo1-3.png"],
    precio: 1999,
    descripcion: "Cobra en cualquier lugar con este dispositivo portátil y confiable.",
    stock: 75,
    category: "terminales"
  },
  {
    id: 2,
    nombre: "TPV Fijo Ualá",
    imagen: ["/productos/dispositivo2.png", "/productos/dispositivo2-2.png", "/productos/dispositivo2-3.png", "/productos/dispositivo2-1.png"],
    precio: 2499,
    descripcion: "Ideal para negocios establecidos, combina estilo y funcionalidad.",
    stock: 60,
    category: "terminales"
  },
  {
    id: 3,
    nombre: "Mini TPV Bluetooth Ualá",
    imagen: ["/productos/tpv-mini-bluetooth.png", "/productos/tpv-mini-bluetooth-1.png", "/productos/tpv-mini-bluetooth-2.png", "/productos/tpv-mini-bluetooth-3.png"],
    precio: 1499,
    descripcion: "Pequeño pero poderoso, conecta fácilmente vía Bluetooth.",
    stock: 80,
    category: "promociones"
  },
  {
    id: 4,
    nombre: "TPV Inalámbrico Ualá",
    imagen: ["/productos/tpv-inalambrico.png", "/productos/tpv-inalambrico-1.png", "/productos/tpv-inalambrico-2.png", "/productos/tpv-inalambrico-3.png"],
    precio: 2699,
    descripcion: "La libertad de cobrar sin cables, ideal para cualquier negocio.",
    stock: 55,
    category: "promociones"
  },
  {
    id: 5,
    nombre: "TPV con Impresora Integrada",
    imagen: ["/productos/tpv-impresora.png", "/productos/tpv-impresora-1.png", "/productos/tpv-impresora-2.png", "/productos/tpv-impresora-3.png"],
    precio: 4299,
    descripcion: "Cobra y entrega tickets al instante con este equipo todo en uno.",
    stock: 50,
    category: "terminales"
  },
  {
    id: 6,
    nombre: "Funda Ualá",
    imagen: ["/productos/funda-tpv.png", "/productos/funda-tpv-1.png", "/productos/funda-tpv-2.png", "/productos/funda-tpv-3.png"],
    precio: 299,
    descripcion: "Protege tu TPV con estilo y seguridad.",
    stock: 90,
    category: "accesorios"
  },
  {
    id: 7,
    nombre: "Cable USB-C",
    imagen: ["/productos/cable-usbc.png", "/productos/cable-usbc-1.png", "/productos/cable-usbc-2.png", "/productos/cable-usbc-3.png"],
    precio: 149,
    descripcion: "Carga y sincroniza tus dispositivos con este cable de alta calidad.",
    stock: 120,
    category: "accesorios"
  },
  {
    id: 8,
    nombre: "Protector de Pantalla",
    imagen: ["/productos/protector-pantalla.png", "/productos/protector-pantalla-1.png", "/productos/protector-pantalla-2.png", "/productos/protector-pantalla-3.png"],
    precio: 99,
    descripcion: "Mantén tu pantalla impecable y libre de rayones.",
    stock: 100,
    category: "accesorios"
  },
  {
    id: 9,
    nombre: "Soporte Ajustable",
    imagen: ["/productos/soporte-ajustable.png", "/productos/soporte-ajustable-1.png", "/productos/soporte-ajustable-2.png", "/productos/soporte-ajustable-3.png"],
    precio: 299,
    descripcion: "Optimiza tu espacio con este práctico soporte ajustable.",
    stock: 70,
    category: "accesorios"
  },
  {
    id: 10,
    nombre: "TPV Medium Ualabis",
    imagen: ["/productos/dispositivo3.png", "/productos/dispositivo3-1.png", "/productos/dispositivo3-2.png", "/productos/dispositivo3-3.png"],
    precio: 299,
    descripcion: "La solución ideal para negocios en crecimiento.",
    stock: 65,
    category: "terminales"
  }
  
];

const seedProducts = () => {
    const productosRef = collection (db, "productos")
    productos.map(({id, ...dataProduct}) => {
        addDoc(productosRef, dataProduct)
    })
console.log ("productos subidos")
return
}

seedProducts()