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
  mainContent.innerHTML = '';

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
 * aggiungo la proprietà colore alle icone
 */
const colorIcons = (icons, colors) => {
  return icons.map(
    (icon) => {
      return {
        ...icon,
        'color': colors[icon.category]
      };
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
const btnLoad = document.getElementById('btn-load');
const categoriesSelect = document.getElementById('categories');
const categories = [];
const formName = document.getElementById('name');
const formFamily = document.getElementById('family');
const formPrefix = document.getElementById('prefix');
const formCategory = document.getElementById('category');
let coloredIcons = [];

/**
 * Main program
 */

// coloro le icone
coloredIcons = colorIcons(icons, colors);

// aggiungo le options alla select in base alle categorie
//    estraggo le categorie dall'array
coloredIcons.forEach(
  (icon) => {
    if (!categories.includes(icon.category)) {
      categories.push(icon.category);
    }
  }
);

//    creo le options
categories.forEach(
  (category) => {
    categoriesSelect.innerHTML += `<option value="${category}">${category}</option>`;
  }
);

// stampo a video le cards
printCards(coloredIcons);

/**
 * Events
 */

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

// al click del bottone Load
btnLoad.addEventListener('click',
  () => {
    // controllo se la categoria è gia presente nel DB
    let check = false
    for (let key in colors) {
      if (key == formCategory.value) {
        check = true
      }
    }
    // se non è presente aggiungo un nuovo colore
    if (!check) {
      colors[formCategory.value] = prompt(`Which color would you like for ${formCategory.value}`);
    }

    icons.push(
      {
        'name': formName.value,
        'family': formFamily.value,
        'prefix': formPrefix.value,
        'category': formCategory.value
      }
    );
    coloredIcons = colorIcons(icons, colors);
    printCards(coloredIcons);
  }
);