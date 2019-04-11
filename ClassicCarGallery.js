const fetchBtn = document.querySelector(`button`);

const getImage = async (ev) => {
ev.currentTarget.removeEventListener(`click`,getImage);
const imageFolder = `./src/carInfo.json`;
const imageLink = await fetch(imageFolder);
const imageAddress = await imageLink.json();

for (let i = 0; i < imageAddress.length; i++) {

      let container = document.querySelector(`#container`);
      let section = document.createElement(`SECTION`);
      // section.setAttribute(`className`,`fetched`);
      // section.classList.add(`fetched`);
      let image = document.createElement(`IMG`);
      let header = document.createElement(`H2`);
      let paragraph = document.createElement(`P`);

      image.src = imageAddress[i].address;
      header.innerText = imageAddress[i].title;
      paragraph.innerText = imageAddress[i].description;

      container.appendChild(section);
      section.appendChild(image);
      section.appendChild(header);
      section.appendChild(paragraph);
      setInterval(()=> {
        document.body.appendChild(container);
      },2000);

const biggerPicture = image.addEventListener(`click`, ev=> {
        let newSection = document.createElement(`SECTION`);
        newSection.setAttribute(`id`, `newSection`);
        let newPicture = document.createElement(`IMG`);
        newPicture.setAttribute(`id`,`newPicture`);
        let closeSpan = document.createElement(`SPAN`);
        closeSpan.setAttribute(`id`,`closeSpan`);
        closeSpan.innerText = `X`;
        newPicture.src = imageAddress[i].address;
        newSection.appendChild(newPicture);
        newSection.appendChild(closeSpan);
        document.body.appendChild(newSection);
        closeSpan.addEventListener(`click`, ev=> {
        document.body.removeChild(newSection);
          })
      })
    }
}

fetchBtn.addEventListener(`click`,getImage);
