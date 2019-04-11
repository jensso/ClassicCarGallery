const fetchBtn = document.querySelector(`button`);

const getImage = async (ev) => {
  ev.currentTarget.removeEventListener(`click`,getImage);
  const imageFolder = `./src/carInfo.json`;
  const imageLink = await fetch(imageFolder);
  const imageAddress = await imageLink.json();
try {
for (let i = 0; i < imageAddress.length; i++) {
  let delayFetch = (name, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fetch(imageFolder))
        }, time)
      })
    }
        let carToShow = await delayFetch(imageAddress[i],1500);
        await carToShow.json();

      let container = document.querySelector(`#container`);
      let section = document.createElement(`SECTION`);
      let image = document.createElement(`IMG`);
      let span = document.createElement('SPAN');
      let header = document.createElement(`H2`);
      let paragraph = document.createElement(`P`);

      image.src = imageAddress[i].address;
      span.innerText = 'click the car to enlarge view';
      header.innerText = imageAddress[i].title;
      paragraph.innerText = imageAddress[i].description;

      container.appendChild(section);
      section.appendChild(image);
      section.appendChild(span);
      section.appendChild(header);
      section.appendChild(paragraph);
      document.body.appendChild(container);

  const biggerPicture = image.addEventListener(`click`, (ev)=> {
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

        closeSpan.addEventListener(`click`, (ev)=> {
        document.body.removeChild(newSection);
          })
      })
    }
  }
catch (error) {
      console.log(error);
    }
};

fetchBtn.addEventListener(`click`,getImage);
