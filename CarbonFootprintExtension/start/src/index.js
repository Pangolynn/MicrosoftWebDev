//1
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');
// results divs
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');

//6
//call the API

//5
//set up user's api key and region

//4
// handle form submission

//3 initial checks
function init() {
    //check localStorage
    const storedApiKey = localStorage.getItem('apiKey');
    const storedRegion = localStorage.getItem('regionName');
    
    
    if (storedApiKey === null || storedRegion === null) {
        // we don't have keys, show form
        form.style.display = 'block';
        results.style.display = 'none';
        loading.style.display = 'none';
        clearBtn.style.display = 'none';
        errors.textContent = '';
    } else {
        // we have keys, show results
        displayCarbonUsage(storedApiKey, storedRegion);
        results.style.display= 'none';
        form.style.display = 'none';
        clearBtn.style.display = 'block';
    }
};


//2
// set listeners and start app
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();

