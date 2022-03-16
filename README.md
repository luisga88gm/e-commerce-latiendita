PROYECTO E-COMMERCE "LA TIENDITA"

Una API Rest creada en base a la tecnología ReactJS en CODERHOUSE.

2022/>

Profesor: Leo Omaña // Agustín Molés
Tutor: Rodrigo Collins

Descripción de las ramas/carpetas:

CartContext => logica del carrito (contador de productos,calcular total,agregar/eliminar stock de un producto,eliminar item, terminar compra)
hooks => useProductFirebase => traer todos los productos  (getProduct) /traer un producto por id  (getProductId) /  enviar formulario de compra (useFormCheckout)

layout => footer and header
routes => rutas de la pagina.
Item Checkout => Verificacion de la compra del usuario, se ve un listado de los productos del carrito con el importe total 
Item Details => Muestra la informacion de un item seleccionado y la opcion de agregarlo al carrito
Item List => Muestra la informacion de los items llamados desde la api, se vincula tambien con el llamado a una categoria
loading => Spinner para la animacion de carga libreria =>  "react-icons": "^4.3.1" 
ShoppingContainer => Cart de la pagina, se puede modificar el item para agregar/eliminar stock, eliminar items y terminar compra
Libreria CSSTransition => "react-transition-group": "^4.4.2" para la animacion fade de la pagina (se uso para el despliegue de la categoria)



/*Se uso el localStorage para guardar el carrito del usuario*/