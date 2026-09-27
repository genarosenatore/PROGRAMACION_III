// Interfaces que representan los datos recibidos desde The Simpsons API.
interface SimpsonCharacter {
    id: number;
    age: number | null;
    birthdate: string | null;
    gender: string;
    name: string;
    occupation: string;
    portrait_path: string;
    phrases: string[];
    status: string;
}

interface IResponseApi {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
    results: SimpsonCharacter[];
}

// URLs utilizadas por la aplicacion.
const API_URL: string = "https://thesimpsonsapi.com/api/characters";
const IMAGE_BASE_URL: string = "https://cdn.thesimpsonsapi.com/500";

// Elementos del DOM con su tipo correspondiente.
const loadBtn = document.getElementById("load-btn") as HTMLButtonElement;
const loadingSection = document.getElementById("loading") as HTMLElement;
const errorDiv = document.getElementById("error-message") as HTMLDivElement;
const charactersContainer = document.getElementById("characters-container") as HTMLElement;

// Muestra el indicador de carga y oculta cualquier error anterior.
const showLoading = (): void => {
    loadingSection.classList.remove("hidden");
    errorDiv.classList.add("hidden");
    loadBtn.disabled = true;
};

// Oculta el indicador de carga y vuelve a habilitar el boton.
const hideLoading = (): void => {
    loadingSection.classList.add("hidden");
    loadBtn.disabled = false;
};

// Muestra un error y lo oculta automaticamente despues de 5 segundos.
const showError = (message: string): void => {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");

    window.setTimeout(() => {
        errorDiv.classList.add("hidden");
    }, 5000);
};

// Crea la tarjeta HTML correspondiente a un personaje.
const createCharacterCard = (character: SimpsonCharacter): HTMLElement => {
    const card = document.createElement("div");
    card.className = "character-card";

    const image = document.createElement("img");
    image.src = `${IMAGE_BASE_URL}${character.portrait_path}`;
    image.alt = `Imagen de ${character.name}`;
    image.loading = "lazy";

    const name = document.createElement("h3");
    name.textContent = character.name;

    const phrase = document.createElement("p");
    const firstPhrase = character.phrases.length > 0
        ? character.phrases[0]
        : "Sin frases registradas";
    phrase.textContent = `“${firstPhrase}”`;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(phrase);

    return card;
};

// Limpia el contenedor y agrega las tarjetas recibidas.
const renderCharacters = (characters: SimpsonCharacter[]): void => {
    charactersContainer.innerHTML = "";

    characters.forEach((character) => {
        const card = createCharacterCard(character);
        charactersContainer.appendChild(card);
    });
};

// Consulta la API, valida la respuesta y muestra los personajes.
const fetchCharacters = async (): Promise<void> => {
    showLoading();

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`La peticion fallo con el estado ${response.status}`);
        }

        const data: IResponseApi = await response.json();

        if (!data || !Array.isArray(data.results)) {
            throw new Error("La API devolvio datos con un formato inesperado.");
        }

        renderCharacters(data.results);
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        showError("No se pudieron cargar los personajes. Intenta nuevamente.");
    } finally {
        hideLoading();
    }
};

// El boton inicia la consulta a la API.
loadBtn.addEventListener("click", () => {
    fetchCharacters();
});
