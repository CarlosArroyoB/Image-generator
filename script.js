//Boton de generar nombre -------------------------------------------------
const setName = document.getElementById("setName");

const setNameHandler = () =>{
    const nameInput = document.getElementById("name"); // las constantes se crean una vez se apriete el boton
    
    const createdBy = document.getElementById("createdBy");
    const name = nameInput.value;
    console.log(name);
    createdBy.innerHTML =  `Aplicación creada por: ${name}`; //Coloc
}
setName.addEventListener("click",setNameHandler);
//--------------------------------------------------------------------------

const images = [
    "guts1.jpeg",
    "guts2.jpeg",
    "guts3.jpeg",
];
const cargarImgs = (imgName)=>{
    return `imgs/${imgName}`;
}

let index = 0;

const renderizarImg = () =>{
    const characterImg = document.getElementById("characterImg");
    characterImg.src = cargarImgs(images[index]);
    if(index==images.length-1){
        index =0;
    }
    else{
        index++;
    }
    console.log(index)
};

const changeImgButton = document.getElementById("changeImg");

changeImgButton.addEventListener("click",renderizarImg);

