
const elements = document.querySelectorAll(
    '.content div'
  );
  
  elements.forEach(element => {
    // console.log(element);
    element.addEventListener('click', function name(event) {
        if (element.classList[0].includes('block') ) {
            let block = element.classList[0];
            let description = document.querySelector(`.${block} .description`);
            if (description.style.display === "block") {
                description.style.display = "none";
              } else {
                description.style.display = "block";
              }
            
            let arrow = document.querySelector(`.${block} #icon_arrow`);
            if (arrow.style.transform === "rotate(180deg)") {
                arrow.style.transform = "rotate(0deg)";
              } else {
                arrow.style.transform = "rotate(180deg)";
              }
        }
    })
  });