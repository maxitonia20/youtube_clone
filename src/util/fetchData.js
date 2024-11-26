const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

 export const searchvideos = async (query ) => {
    const response = await fetch(`${BASE_URL}/${query}`,{
        method: "GET",
        headers: {
            'x-rapidapi-key': 'f6e6c5e846mshecff228758e72fep1b8b56jsn9ef040e3cdc3',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    })
    const result = await response.json();
    return result;
}