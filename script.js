const url = "https://restcountries.com/v3.1/name/"
const srchtxt = document.getElementById('text');
const srchbtn = document.getElementById('btn');

srchbtn.addEventListener('click', ()=> {
    fetchData(srchtxt.value);
})

async function fetchData(query) {
    const res = await fetch(`${url}${query}`);
    const data = await res.json();
    const cname = document.getElementById('icname');
    const cinfo = document.querySelector('.country-info');
    if(res.status == '400' || res.status == '404') {
        cname.style.display = 'block'
        cinfo.style.display = 'none'
        cname.innerHTML = 'Country Not Found';
    } else {
        // console.log(data);
        cinfo.style.display = 'block'
        cname.style.display = 'none'
        bindData(data);
    }
}

async function bindData(data) {
    const flag = document.getElementById('flag');
    const cname = document.getElementById('cname');
    const capital = document.getElementById('capital');
    const currency = document.getElementById('currency');
    const population = document.getElementById('population');
    const week = document.getElementById('week');
    const glink = document.getElementById('google');

    flag.src = data[0].flags.png;
    cname.innerHTML = "<b>Country : </b>"+data[0].name.common;
    capital.innerHTML = "<b>Capital : </b>"+data[0].capital;
    currency.innerHTML = "<b>Currency : </b>"+Object.values(data[0].currencies)[0].name;
    population.innerHTML = "<b>Population : </b>"+data[0].population;
    week.innerHTML = "<b>Start Of Week : </b>"+data[0].startOfWeek
    glink.href = data[0].maps.googleMaps;
}