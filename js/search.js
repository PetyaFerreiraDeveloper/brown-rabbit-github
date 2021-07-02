import {news} from './scripts.js';

// grab the search input

const SEARCH = document.forms['search'].querySelector('input');

SEARCH.addEventListener('keyup', (e) => {
    e.preventDefault();
    let searchItem = e.target.value.toLowerCase();
    let words = searchItem
                .toLowerCase()
                .split(' ')
                .filter(function(word) {
                    return word.trim() !== '';
                });

    if(words.length && searchItem.length > 2) {
        // create a regExp of all the search words
        let searchItemRegEx = new RegExp(words.join('|'), 'gim');
        let articleString = '';
        let filteredList = news.filter(function(article) {
            // create a string of all object values
            for (let key in article) {
                if (article.hasOwnProperty(key) && article[key] !== '') {
                    articleString += article[key].toString().toLowerCase().trim() + ' ';
                }
            }   
            // add searched Item to sessionStorage
            window.sessionStorage.setItem('searchItem', searchItem);

            // return the news objects where a match with the search regEx is found
            return articleString.match(searchItemRegEx);
        });
        console.log('filteredList', filteredList);
        const SEARCHRESULTS = JSON.stringify(filteredList);
        window.sessionStorage.setItem('searchResults', SEARCHRESULTS);

        // add search result to the url as parameters

        const SEARCHURL = new URL("http://127.0.0.1:5500/search.html");

        // redirect to search.html
        window.location.href = SEARCHURL;
    }
    
})