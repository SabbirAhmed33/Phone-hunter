const searchPhone = () => {
    const searchFild = document.getElementById('search-fild');
    const searchText = searchFild.value;
    searchFild.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then (res =>res.json())
    .then (data =>displaySearchResult(data.data))

    const displaySearchResult = data => {
        const searchResult = document.getElementById('search-result');
        data.forEach(phone=>{
            console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML= `
                <div class="card h-100">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">${phone.brand}</p>
                    </div>
                    <button onclick="searchById(${phone.slug})" class="card-footer">
                      <small class="text-muted">Deatails</small>
                    </button>
                </div>
        `
        searchResult.appendChild(div)
        })
    }
}
// Search By Id
const searchById = phoneId => {
    console.log(phoneId);
}