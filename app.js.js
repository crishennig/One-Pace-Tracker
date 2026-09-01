// Exemplo de função para obter a duração de um episódio do data.js
function getEpisodeDuration(fullEpisodeTitle) {
    // Extrai o identificador base, por exemplo: "Skypiea 01" de "Skypiea 01 - Heaven's Gate"
    const baseName = fullEpisodeTitle.split(" - ")[0].trim();
    return episodeDurations[baseName] || "00:25:00"; // fallback padrão se não achar
}