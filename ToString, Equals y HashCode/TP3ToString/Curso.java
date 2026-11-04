import java.util.ArrayList;

public class Curso {
    private String nombre;
    private String profesor;
    private ArrayList<Estudiante> listaDeEstudiantes;

    public Curso(String nombre, String profesor) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.listaDeEstudiantes = new ArrayList<>();
    }

    public void agregarEstudiante(Estudiante estudiante) {
        listaDeEstudiantes.add(estudiante);
    }

    @Override
    public String toString() {
        StringBuilder resultado = new StringBuilder();
        resultado.append("Curso: ").append(nombre).append("\n");
        resultado.append("Profesor: ").append(profesor).append("\n");
        resultado.append("Cantidad de alumnos: ").append(listaDeEstudiantes.size()).append("\n");
        resultado.append("Estudiantes:\n");

        if (listaDeEstudiantes.isEmpty()) {
            resultado.append("  No hay estudiantes inscriptos.\n");
        } else {
            for (Estudiante estudiante : listaDeEstudiantes) {
                resultado.append("  - ").append(estudiante).append("\n");
            }
        }

        return resultado.toString();
    }
}
