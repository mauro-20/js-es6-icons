// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

/**
 * Functions
 */

/**
 * dato l'array crea le card nell'html
 */
const printCards = (icons) => {
  //reset iniziale
  mainContent.innerHTML = ''

  icons.forEach(
    (icon) => {
      const { name, family, prefix, color } = icon;

      mainContent.innerHTML += `
      <div class="card">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
          <div class="card-text">
            <h5>${name}</h5>
          </div>
        </div>
    `;
    }
  );
};


/**
 * Variables
 */

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

const colors = {
  'food': 'green',
  'beverage': 'blue',
  'animal': 'brown'
};

const mainContent = document.getElementById('main-content');

/**
 * Main program
 */

// aggiungo il colore delle icone tramite l'oggetto colors
const coloredIcons = icons.map(
  (icon) => {
    return {
      ...icon,
      'color': colors[icon.category]
    };
  }
);


// aggiungo le options alla select in base alle categorie
//    estraggo le categorie dall'array
const categories = [];
coloredIcons.forEach(
  (icon) => {
    if (!categories.includes(icon.category)) {
      categories.push(icon.category);
    }
  }
);
console.log(categories);

//    creo le options
const categoriesSelect = document.getElementById('categories');
categories.forEach(
  (category) => {
    categoriesSelect.innerHTML += `<option value="${category}">${category}</option>`;
  }
);


// stampo a video le cards
printCards(coloredIcons);

// al change della select filtro per categorie
categoriesSelect.addEventListener('change',
  () => {
    // creo un array di oggetti filtrati
    const filteredIcons = coloredIcons.filter(
      (icon) => {
        if (icon.category == categoriesSelect.value || categoriesSelect.value == '') {
          return true;
        }
      }
    );

    // stampo a video le cards filtrate
    printCards(filteredIcons);
  }
);
