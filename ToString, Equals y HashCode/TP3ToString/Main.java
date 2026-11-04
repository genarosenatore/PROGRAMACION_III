import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Estudiante juan = new Estudiante("Juan", 20, "Programación");
        Estudiante maria = new Estudiante("María", 22, "Programación");
        Estudiante pedro = new Estudiante("Pedro", 21, "Programación");

        Curso estructuras = new Curso("Estructuras de Datos", "Prof. Carlos Ruiz");
        estructuras.agregarEstudiante(juan);
        estructuras.agregarEstudiante(maria);
        estructuras.agregarEstudiante(pedro);

        Curso programacion = new Curso("Programación III", "Prof. Ana López");
        programacion.agregarEstudiante(juan);
        programacion.agregarEstudiante(maria);

        Curso basesDeDatos = new Curso("Bases de Datos", "Prof. Luis Gómez");
        basesDeDatos.agregarEstudiante(pedro);

        ArrayList<Curso> cursos = new ArrayList<>();
        cursos.add(estructuras);
        cursos.add(programacion);
        cursos.add(basesDeDatos);

        for (Curso curso : cursos) {
            System.out.println(curso);
        }
    }
}
