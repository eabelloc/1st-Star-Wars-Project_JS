const charactersURL = "https://starwars-server.vercel.app/characters";

window.onload = () => {
  initCharacters();
};

const initCharacters = async () => {
  const characters = await getCharacters();
  mappedCharacters(characters);
};

const getCharacters = async () => {
  const rawData = await fetch(charactersURL);
  const jsonData = await rawData.json();
  return jsonData;
};

const mappedCharacters = (list) => {
    list.data.characters.map((item) => {
        return printCharacters ({name: item.name,
                            origin: item.origin,
                            role: item.role,
                            image: item.image,
                            description: item.description,
        })
})};

const printCharacters = (item) => {
    const charactersContainer = document.querySelector('#characters_container')
    charactersContainer.innerHTML += `
    <figure class="figure_container">
        <div class="name_origin_container">
            <h3>${item.name}</h3>
            <h4 class="character_origin">${item.origin}</h4>
        </div>
        <img src="${item.image}" alt="${item.name}" />
        <h4>${item.role}</h4>
        <p>${item.description}</p>
    </figure>
  `;
};

/*PARALLAX :3*/
$(window).scroll(function(e){
    parallax();
  });
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top',-(scrolled*0.2)+'px');
  }