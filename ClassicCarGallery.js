let fetchSpan = document.querySelector(`span:nth-of-type(2)`);

let getImage = async ev => {
ev.currentTarget.removeEventListener(`click`,getImage);
let imageFolder = `./src/abc.json`;
let imageLink = await fetch(imageFolder);
let imageAddress = await imageLink.json();
// console.log(imageAddress);
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
      document.body.appendChild(container);

      let biggerPicture = image.addEventListener(`click`, ev=> {
        let newSection = document.createElement(`SECTION`);
        newSection.setAttribute(`id`, `newSection`);
        let newPicture = document.createElement(`IMG`);
        newPicture.setAttribute(`id`,`newPicture`);
        let closeSpan = document.createElement(`SPAN`);
        closeSpan.setAttribute(`id`,`closeSpan`);
        closeSpan.innerText = `close`;

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

fetchSpan.addEventListener(`click`,getImage);
