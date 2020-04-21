const restCountriesApi = axios.create({
    baseURL: "https://restcountries.eu/rest/v2/name/"
})

const printCountryInfo = country => {
    document.getElementById('countryName').innerText = `Información de ${country.name}`
    document.getElementById('countryCapital').innerText = `Capital: ${country.capital} (${country.population} habitantes)`
}

const getCountryInfo = theName => {

    restCountriesApi
        .get(theName)
        .then(responseFromAPI => printCountryInfo(responseFromAPI.data[0]))
        .catch(err => {
            err.response.status === 404 ? alert("El país " + theName + " no existe, ¡merluzo!") : alert("Error de servidor")
        })
}





document.getElementById("theButton").onclick = () => {
    const country = document.getElementById("theInput").value
    getCountryInfo(country)
}