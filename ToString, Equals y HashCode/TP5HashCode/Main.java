import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        Producto producto1 = new Producto("P001", "Cuaderno", 2500);
        Producto producto2 = new Producto("P002", "Lapicera", 800);
        Producto producto3 = new Producto("P001", "Cuaderno tapa dura", 3200);
        Producto producto4 = new Producto("P003", "Regla", 1000);
        Producto producto5 = new Producto("P002", "Lapicera azul", 900);
        Producto producto6 = new Producto("P001", "Cuaderno", 2500);

        System.out.println("Productos con el mismo código:");
        System.out.println(producto1);
        System.out.println(producto3);
        System.out.println("Son iguales: " + producto1.equals(producto3));
        System.out.println("Hash del primer producto: " + producto1.hashCode());
        System.out.println("Hash del segundo producto: " + producto3.hashCode());

        HashSet<Producto> productos = new HashSet<>();
        agregarProducto(productos, producto1);
        agregarProducto(productos, producto2);
        agregarProducto(productos, producto3);
        agregarProducto(productos, producto4);
        agregarProducto(productos, producto5);
        agregarProducto(productos, producto6);

        System.out.println("\nProductos guardados:");
        for (Producto producto : productos) {
            System.out.println(producto);
        }

        System.out.println("Cantidad de productos únicos: " + productos.size());
        System.out.println("Se evitaron los duplicados: " + (productos.size() == 3));
        System.out.println("Contiene un producto con código P001: "
                + productos.contains(new Producto("P001", "Otro nombre", 0)));
    }

    private static void agregarProducto(HashSet<Producto> productos, Producto producto) {
        if (productos.add(producto)) {
            System.out.println("\nAgregado: " + producto);
        } else {
            System.out.println("\nDuplicado, no se agregó: " + producto);
        }
    }
}
