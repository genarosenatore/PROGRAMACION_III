import java.util.HashMap;
import java.util.Map;

public class TP4 {
    public static void main(String[] args) {
        HashMap<String, Curso> cursos = new HashMap<>();
        cursos.put("WEB1", new Curso("Desarrollo Web I", "Valeria"));
        cursos.put("SO2", new Curso("Sistemas Operativos II", "Diego"));
        cursos.put("ALG1", new Curso("Algoritmos I", "Julia"));

        System.out.println("Curso WEB1: " + cursos.get("WEB1"));
        System.out.println("Curso SO2: " + cursos.get("SO2"));

        System.out.println("\nTodos los cursos");
        for (Map.Entry<String, Curso> entrada : cursos.entrySet()) {
            System.out.println(entrada.getKey() + " - " + entrada.getValue());
        }
    }
}

class Curso {
    private final String nombre;
    private final String docente;

    public Curso(String nombre, String docente) {
        this.nombre = nombre;
        this.docente = docente;
    }

    @Override
    public String toString() {
        return nombre + " (docente: " + docente + ")";
    }
}
