import java.util.HashSet;
import java.util.Objects;

public class TP3 {
    public static void main(String[] args) {
        HashSet<Producto> productos = new HashSet<>();
        productos.add(new Producto("LIB17", "Atlas escolar"));
        productos.add(new Producto("LIB24", "Diccionario"));
        productos.add(new Producto("LIB17", "Atlas de bolsillo"));

        for (Producto producto : productos) {
            System.out.println(producto);
        }
    }
}

final class Producto {
    private final String codigo;
    private final String descripcion;

    public Producto(String codigo, String descripcion) {
        this.codigo = codigo;
        this.descripcion = descripcion;
    }

    @Override
    public boolean equals(Object objeto) {
        if (!(objeto instanceof Producto)) {
            return false;
        }
        Producto otro = (Producto) objeto;
        return Objects.equals(codigo, otro.codigo);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(codigo);
    }

    @Override
    public String toString() {
        return codigo + " - " + descripcion;
    }
}
