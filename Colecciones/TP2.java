import java.util.ArrayList;

public class TP2 {
    public static void main(String[] args) {
        ArrayList<Alumno> alumnos = new ArrayList<>();
        alumnos.add(new Alumno("Lucia", 10));
        alumnos.add(new Alumno("Mateo", 7));
        alumnos.add(new Alumno("Lucia", 10));

        for (Alumno alumno : alumnos) {
            System.out.println(alumno);
        }
    }
}

class Alumno {
    private final String nombre;
    private final int nota;

    public Alumno(String nombre, int nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    @Override
    public String toString() {
        return nombre + " - Nota: " + nota;
    }
}
