const fetchData = require('../utils/fethData');

const API = 'https://rickandmortyapi.com/api/character/';

const functionLoad = async (url_api) => { 
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
        const result = {
            count:data.info.count, 
            name:character.name, 
            dimension:origin.dimension
        }
        console.table(result);
    } catch (error) {
        console.error(error);
    }
   
}
console.log('Inicia')
functionLoad(API);
console.log('Termina')