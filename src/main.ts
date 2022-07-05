
type Brewery= {
        address_2: null;
        address_3: null;
        brewery_type: string;
        city: string;
        country: string;
        county_province: null;
        created_at: string;
        id: number;
        latitude: string;
        longitude: string;
        name: string;
        obdb_id: string;
        phone:string;
        postal_code:string;
        state:string;
        street:string;
        updated_at:string;
        website_url:string;
     
}




const breweries:Brewery[] = [
    {
      address_2: null,
      address_3: null,
      brewery_type: 'large',
      city: 'San Diego',
      country: 'United States',
      county_province: null,
      created_at: '2018-07-24T00:00:00.000Z',
      id: 8041,
      latitude: '32.714813',
      longitude: '-117.129593',
      name: '10 Barrel Brewing Co',
      obdb_id: '10-barrel-brewing-co-san-diego',
      phone: '6195782311',
      postal_code: '92101-6618',
      state: 'California',
      street: '1501 E St',
      updated_at: '2018-08-23T00:00:00.000Z',
      website_url: 'http://10barrel.com'
    }
  ]
  

type State ={
    USState:string,
    breweries:Brewery[]
}


let state: State ={
    USState:'',
    breweries:[]
}


//Q: Which state are we looking for? state.USState
// Q: what breweries do we need to display? state.breweries





let mainEl = document.querySelector('main')


function renderSearchBar(){


    let h1El = document.createElement('h1')
    h1El.textContent= 'List of Breweries'

    let searchBarHeader= document.createElement('header')
    searchBarHeader.classList.add('search-bar')
    
    let form = document.createElement('form')
    form.id= 'search-breweries-form'
    form.autocomplete= 'off'
    let searchLabel= document.createElement('label')
    searchLabel.classList.add('search-breweries')
    searchLabel.textContent= 'Search breweries:'


    let input= document.createElement('input')
    input.id='search-breweries'
    input.name='search-breweries'
    input.type='text'


form.append(searchLabel, input)
searchBarHeader.append(form)
mainEl?.append(h1El, searchBarHeader)
    

}

function renderListOfBrewery(){

    let article= document.createElement('article')

    let ulEl= document.createElement('ul')
    ulEl.className=('breweries-list')

    fetch(`https://api.openbrewerydb.org/breweries?by_state=${state.USState}`,{
        method:'GET',

        headers:{
            'Content-Type': 'application/json'
        },

    }).then(response=>response.json())
    .then(data=>{
        data.forEach((brewery: Brewery) => {
            let liEl= document.createElement('li')



            let h2El= document.createElement('h2')
            h2El.textContent=brewery.name

            let divTypeEl= document.createElement('div')
            divTypeEl.classList.add('type')
            divTypeEl.textContent= 'brewery.brewery_type'

            let adressSection= document.createElement('section')
            adressSection.className=('adress')

            let h3El= document.createElement('h3')
            h3El.textContent='Adress:'

            let pEl= document.createElement('p')
            pEl.textContent= brewery.street

            let paraEl= document.createElement('p')
            paraEl.textContent= `${brewery.city}`
                

            let phoneSection= document.createElement('section')
            phoneSection.classList.add('phone')

            let h3PhoneEl= document.createElement('h3')
            h3PhoneEl.textContent= 'Phone:'

            let paragraphPhone= document.createElement('p')
            paragraphPhone.textContent=brewery.phone
            
            
        });
    })
    

}