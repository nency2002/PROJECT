import Navbar from "../components/nav.js";
document.getElementById('navbar').innerHTML = Navbar();

const display = (data) => {
    data.map((products) => {
        let img = document.createElement('img');
        img.src = products.image;
        let title = document.createElement('h2');
        title.innerHTML = products.title;
        let price = document.createElement('p');
        price.innerHTML = products.price;
        let category = document.createElement('p');
        category.innerHTML = products.category;
        let rating = document.createElement('span');
        rating.innerHTML = products.rating.rate;
        if (products.rating.rate > 4) {
            rating.style.color = "green"
        }
        else if ((products.rating.rate < 4) && (products.rating.rate >= 3)) {
            rating.style.color = "yellow"
        }
        else {
            rating.style.color = "red"
        }
        let btn = document.createElement('Button');
        btn.innerHTML = "BUY NOW";
        // btn.addEventListener("click",()=>{
        //     console.log(products.id)
        //     let loggin = localStorage.getItem("loggin")
        //     if(loggin){
        //         fetch(`http://localhost:3000/cart?id=${products.id}`)
        //         .then((res)=>res.json())
        //         .then((data)=>{
        //             if(data.length > 0){
        //                 alert("product was defaine")
        //                 fetch (`http://localhost:3000/cart/${products.id}`,{
        //                     method:"PATCH",
        //                     headers:{"content-type":"application/json"},
        //                     body:JSON.stringify({Qty:data[0].Qty+1}),
        //                 });
        //                 console.log(data.length)
        //             }
        //             else{
        //                 fetch ("http://localhost:3000/cart",{
        //                     method:"POST",
        //                     headers:{"content-type":"application/json"},
        //                     body:JSON.stringify({...products,Qty:1}),
        //                 });
        //             }
        //         })
        //     }
        //     else{
        //         alert("you have to loggin first")
        //         setTimeout(() => {
        //             window.location.href = "/pages/login.html"
        //         },1000)
        //     }
        // })
        btn.addEventListener("click", () => {
            console.log(products.id)
            let loggin = localStorage.getItem("loggin")
            if (loggin) {
                fetch("http://localhost:3000/cart", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(products),
                });
            }
            else {
                alert("you have to loggin first")
                setTimeout(() => {
                    window.location.href = "/pages/login.html"
                }, 1000)
            }
        })
        let div = document.createElement('div');
        div.append(img, title, price, category, rating, btn)
        document.getElementById("box2").append(div)
    })
}


const get = () => {
    fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((response) => display(response))
}
get()