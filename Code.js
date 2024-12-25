async function GetData() {

    try {


        let tbx = document.getElementById("tbx")
        let image = document.getElementById("image1");
        let PokeName = document.querySelectorAll(".card-content span")[0];
        let idText = document.querySelectorAll(".card-content span")[1];



        PokeType = document.getElementById("PokeType");
        PokeWeight = document.getElementById("PokeWeight");
        PokePower = document.getElementById("PokePower");


        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${tbx.value}`)
        let data = await response.json();


        image.src = data.sprites.front_default;
        PokeName.innerHTML = data.name
        idText.textContent = "#" + data.id
        PokeType.textContent = "Type: " +  data.types[0].type.name
        PokeWeight.textContent = "Weight: " + data.weight + " Kg"
        PokePower.textContent = "Power: " + data.moves[0].move.name + " / " + data.moves[2].move.name 
   
        AddCard();

    } catch (error) {

        if (tbx == "")
            alert("please fill the txtbox");
        else alert("something went wrong" + error);
    }

}


 function AddCard() {


    let cardContainer = document.getElementsByClassName("card-container")

    let card = document.getElementsByClassName("card");

    let cardClone = cardContainer[0].appendChild(card[0].cloneNode(true))


    card[0].style.display = "none";

    cardClone.style = "display:block;"

     return cardClone ;

}
