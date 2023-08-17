import Navbar from "../components/nav.js";
document.getElementById('navbar').innerHTML=Navbar();

const display =(data) =>{
    data.map((products)=>{
        let img = document.createElement('img');
        img.src=products.image;
        let title = document.createElement('h2');
        title.innerHTML=products.title;
        let price = document.createElement('p');
        price.innerHTML=products.price;
        let category = document.createElement('p');
        category.innerHTML=products.category;
        let rating = document.createElement('span');
        rating.innerHTML=products.rating.rate;
        if(products.rating.rate > 4){
            rating.style.color="green"
        }
        else if((products.rating.rate < 4) && (products.rating.rate >= 3)){
            rating.style.color="yellow"

        }
        else{
            rating.style.color="red"

        }
        let btn = document.createElement('Button');
        btn.innerHTML="BUY NOW";
        let div = document.createElement('div');
        div.append(img,title,price,category,rating,btn)
        document.getElementById("box2").append(div)



    })
}


const get =()=>{
    fetch("http://localhost:3000/products")
    .then((response)=>response.json())
    .then((response)=>display(response))
}
get()