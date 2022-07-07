const inputFile = document.querySelector(".picture_input");
const pictureImage = document.querySelector(".picture_image");
const pictureImageText = "Escolha sua Imagem";
pictureImage.innerHTML=pictureImageText;


inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
  //  console.log(inputTarget);

    const file = inputTarget.files[0];
   
    if (file){
        const reader = new FileReader();     
        
        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture_img');
            pictureImage.innerHTML= '';

            pictureImage.appendChild(img);
            
        });
        reader.readAsDataURL(file);

    } else {
        pictureImage.innerHTML=pictureImageText;
    }
});