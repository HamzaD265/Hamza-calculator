const c_c = document.getElementById('c_c');
const display_area = document.getElementById('display_area');

c_c.addEventListener('click', e =>  {
    if (e.target.tagName === "BUTTON") {
      switch(e.target.textContent)  {
        case "C":
            C();
            break;
        case "Del":
            deleteonevalue();
            break;
        case "=":
            evaluate();
            break;   
        default:
            addToDisplay_Area(e.target.textContent); 

      }
    }
})

function C() {
    display_area.textContent = "";
}

function addToDisplay_Area(value) {
    display_area.textContent =display_area.textContent + value;
}

function deleteonevalue() {
   let  currentcontent = display_area.textContent;
   display_area.textContent = currentcontent.substring(0,currentcontent.length - 1)
}


function evaluate() {
    try {
        let calculation = math.evaluate(display_area.textContent);
        display_area.textContent = calculation;
    } catch (error) {
        display_area.textContent = 'invalid operation';
        console.error(error);
    }
    
}