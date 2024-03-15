let products = JSON.parse(localStorage.getItem('data')) || []


console.log("Products",products);

const handlesubmit =(e)=>{
    e.preventDefault();

    let data={
        title:document.getElementById("title").value,       
        title:document.getElementById("price").value,

        title:document.getElementById("img").value,


    }

    products.push(data);

    localStorage.setItem("data",JSON.stringify(products));
}


document.querySelector("#form").addEventListener("submit" ,handlesubmit)