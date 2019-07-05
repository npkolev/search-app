// Base url
const laureateSearchUrl = 'http://nobel.divedeeper.io/twigkit/api/core/services/platform/search/platforms.workflow.laureates?q=';
// Fiter values to be passed with the request. They can be passed in as parameter rathern than hard-coding them
const filteredFields = '&fi=firstname,surname,gender,id,Prize+Category,year';

// Asynchronously get the data from the 
async function fetchResults(value, checked) {
    const wildCard = checked ? '*' : '';

    // Fetch data only if user input is passed in
   if(value) {
        try {
            const response = await fetch(`${laureateSearchUrl}${value}${wildCard}${filteredFields}`);
            const json = await response.json(); 
            const main = document.querySelector('main');

            // Loop through the results and create card for each entry
            json.results.forEach(result => {
            const resultList = document.createElement('result-list');
            resultList.result = result;
            // Append each result-list custom element to the main 
            main.appendChild(resultList);
            });

        } catch(err) {
            console.log(err); // TypeError: failed to fetch
        }
   } 
}

export default fetchResults;