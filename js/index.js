// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(json=>console.log(json))

const getProducts = async () => {
  try {
    const url = 'https://fakestoreapi.com/products';
    const response = await (await fetch(url)).json();

    console.log(response);

      let resultsContainer = document.getElementById('results__container');
      resultsContainer.innerHTML = '<p>There are ' + response.length + ' results </p>';


  } catch (err) {
    console.log(err.toString());
  }



}

(() => {
  getProducts();
})()