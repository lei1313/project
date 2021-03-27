const ol = document.querySelector("ol");
const movies = [
    {
        name: "Spirited Away",
        year: 2001,
        director: "Hayao Miyazaki",
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/220px-Spirited_Away_Japanese_poster.png" 
    
    },
    {
        name: "Coraline",
        year: 2009,
        director: "Henry Selick",
        image:"https://i.ebayimg.com/images/g/ULgAAOxyD5pRJp10/s-l500.jpg"
    },
    {
        name: "Pirates of the Caribbean: Dead Man's Chest",
        year: 2006,
        director: "Gore Verbinski",
        image:"https://upload.wikimedia.org/wikipedia/en/2/2d/Pirates_of_the_caribbean_2_poster_b.jpg"
    },
];
const template = movies.map(movies => `
<li>
    <p>Name: ${movies.name}</p>
    <p>Year: ${movies.year}</p>
    <p>Director: ${movies.director}</p>
    <img src =${movies.image} ></img>
</li>
`);

console.log(template)
ol.innerHTML = template.join('');

