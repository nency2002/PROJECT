import Navbar from "../components/nav.js";
document.getElementById('navbar').innerHTML=Navbar();


fetch(`http://localhost:3000/cart`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })