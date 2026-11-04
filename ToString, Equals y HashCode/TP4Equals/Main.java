import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Producto producto1 = new Producto("P001", "Cuaderno", 2500);
        Producto producto2 = new Producto("P002", "Lapicera", 800);
        Producto producto3 = new Producto("P001", "Cuaderno tapa dura", 3200);
        Producto producto4 = new Producto("P003", "Regla", 1000);

        System.out.println("Comparación por referencia (==): " + (producto1 == producto3));
        System.out.println("Comparación por código (equals): " + producto1.equals(producto3));
        System.out.println();

        ArrayList<Producto> productos = new ArrayList<>();
        agregarProducto(productos, producto1);
        agregarProducto(productos, producto2);
        agregarProducto(productos, producto3);
        agregarProducto(productos, producto4);

        System.out.println("\nLista de productos:");
        for (Producto producto : productos) {
            System.out.println(producto);
        }
        System.out.println("Cantidad de productos: " + productos.size());
    }

    private static void agregarProducto(ArrayList<Producto> productos, Producto producto) {
        if (!productos.contains(producto)) {
            productos.add(producto);
        } else {
            System.out.println("Producto duplicado: " + producto);
        }
    }
}
