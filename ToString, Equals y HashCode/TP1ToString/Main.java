import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Estudiante> lista = new ArrayList<>();

        lista.add(new Estudiante("Juan", 20, "Ingeniería en Sistemas"));
        lista.add(new Estudiante("María", 22, "Diseño Gráfico"));
        lista.add(new Estudiante("Pedro", 21, "Medicina"));

        System.out.println(lista);
    }
}
