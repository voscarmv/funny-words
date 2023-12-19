import fetch from 'node-fetch';
const API = 'https://en.wiktionary.org/w/api.php';

(
    async () => {
        const category = 'English_humorous_terms';
        const query = `?format=json&action=query&list=categorymembers&cmtitle=Category:${category}`;
        const url = `${API}${query}`;
        try {
            const humorous = await fetch(
                url
            );
            const words = await humorous.json();
            console.log(words.query.categorymembers);
        } catch(e) {
            console.error(e)
        }
    }
)();