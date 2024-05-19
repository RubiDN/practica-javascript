/*Practica objetos

const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};

console.log(producto1);

producto1.foto = "https://postimg.cc/Yj1hBcwP";
producto1.id = "001abc";
producto1["detalle"] = "escribir el detalle del celular";
producto1["color"] = "gris";

console.log(producto1);
delete producto1["id"];
delete producto1.detalle;
console.log(producto1);*/

/*Practica clases

class Persona{
    constructor(nombre,vida){
        this.nombre=nombre
        this.vida=vida
    }
    comer (cantidad){
        this.vida=this.vida+cantidad
        console.log("La vida de "+this.nombre+ " acaba de aumentar a: "+this.vida);
    }
    entrenar(cantidad){
        this.vida=this.vida-cantidad
        console.log("La vida de "+this.nombre+" acaba de disminuir por entrenamiento");
    }
}

const juan=new Persona ("Juan",100)
const marta=new Persona ("Marta",150)

console.log(juan);
console.log(marta);


juan.comer(10)
juan.comer(50)
juan.comer(50)
juan.entrenar(30)

marta.comer(20)
marta.entrenar(50)*/

class Product{
    //constructor
    constructor(id,title,price,stock,images,onsale,supplier,color,description){
        this.id =id;
        this.title=title;
        this.price=price;
        this.stock=stock;
        this.images=images;
        this.onsale=onsale;
        //atributo privado
        this._supplier=supplier;
        this.color=color;
        this.description=description;
    }
    /*//metodos getter y setter del atributo privado
    get supplier() {
        return this._supplier;
    }

    set supplier(newSupplier){
        this._supplier=newSupplier;
    }

    //define el metodo sellLimits para que cumpla los requerimientos
    sellUnits(units) {
        if (units>this.stock){
            console.log("No hay suficiente stock");
            return;
        }
        else this.stock=this.stock-units
    }*/
}



/*
const prod1= new Product();
const prod2= new Product("002","radio",150);
const prod3=new Product("003","tv",5000,10,true,[],true)

console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod2.title);
console.log(prod3.onsale);


const prod4=new Product();
prod4._supplier="backus";//define proveedor= backus
console.log(prod4._supplier);

const prod5= new Product();
prod5.stock=12;//define stock=12
console.log(prod5);

prod5.sellUnits(10);//Usa metodo sellUnits para vender 10 unidades
prod5.sellUnits(5);//Usa metodo sellUnits para vender 5 unidades
console.log(prod5);*/


const prod1=new Product("001","tv",5000,10,true,[],true);
const prod2=new Product("002","radio",400,10,true,[],true);
const prod3=new Product("003","dvd",600,10,true,[],true);
const prod4=new Product("004","pc",5000,10,true,[],true);

const products =[prod1,prod2,prod3,prod4];
console.log(products);
console.log(products[1]);
console.log(products[3].title);





const prod5=new Product("005","camera",5000,10,true,[],true);
const prod6=new Product("006","pc",5000,10,true,[],true);

products.unshift(prod5);
products.push(prod6);
console.log(products);


console.log("Nuevo ejercicio");
products.shift();
products.pop();
console.log(products);