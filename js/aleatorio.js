export function aleatorio(lista) {
    if (Array.isArray(lista)) {
        const posicao = Math.floor(Math.random() * lista.length);
        return lista[posicao];
    }
    return lista;
}