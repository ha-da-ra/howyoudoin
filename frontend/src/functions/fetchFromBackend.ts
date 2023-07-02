
/**Läd Daten aus dem Backend */
export async function fetchFromBackend(link : string, method?: string){
    return fetch((window.location.origin + "/" +  link), {
        method: method ?? 'GET'
    });
}
