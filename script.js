var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  /* Do things after DOM has fully loaded */ 
  var cp = "current-project"

  const dropdownIcon = () => {
    const dropdown = document.createElement('span');
    dropdown.innerHTML = `<svg width="14px" height="7px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Delivery" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Transactions-(Landing)" transform="translate(-1360.000000, -29.000000)" fill="#CDCFD3" fill-rule="nonzero">
          <g id="Group-4" transform="translate(1360.000000, 29.000000)">
              <polygon id="Shape" points="0 0 5 5 10 0"></polygon>
          </g>
      </g>
      </g>
    </svg>`;
    return dropdown;
  }

  const [wrap, list, main, input] = ['.info-wrapper', '.project-list', '.main-records', '.input']
    .map(node => document.querySelector(node));

  

  const dropdown = () => {

    const cns = main.querySelectorAll('div');
    const iplace = createInput();
    const dropdown = showDropdown();
    cns.forEach(c => {
      if(c.classList.length == 0) {
        c.appendChild(dropdown);
      }
    });
    document.querySelector('.input').appendChild(iplace);
  };

  const createInput = () => {
    // Creates the input outline
    //const input = document.createElement("div");
    // input.classList = "input";
    input.addEventListener("click", toggleDropdown);

    // Creates the input placeholder content
    const inputPlaceholder = document.createElement("div");
    inputPlaceholder.classList = "input__placeholder";

    const placeholder = document.createElement("p");
    placeholder.textContent = "Select folder";
    placeholder.classList.add('placeholder')

    // Appends the placeholder and chevron (stored in assets.js)
    inputPlaceholder.appendChild(placeholder);
    inputPlaceholder.appendChild(dropdownIcon());
    //input.appendChild(inputPlaceholder);

    return inputPlaceholder;
  };

  const showDropdown = () => {
    const structure = document.createElement("div");
    structure.classList.add("structure", "hide");

    var chapterNames = Object.keys(folders["folder"]);
    for (var i = 0; i < chapterNames.length; i++) {
      var chapterName = chapterNames[i];
      var { title, description, background_info } = folders["folder"][`${chapterName}`][0];
      // Following works tho commented out.
      //console.log(`Project Info: ${background_info}`)
      const option = document.createElement("div");
      option.addEventListener("click", () => selectOption(chapterName));
      option.setAttribute("id", chapterName);
      const n = document.createElement("h5");
      n.textContent = `E:/dev/${chapterName}`;

      option.appendChild(n);
      structure.appendChild(option);
    }
    return structure;
  };

  const toggleDropdown = () => {
    const dropdown = document.querySelector(".structure");
    dropdown.classList.toggle("hide");

    const input = document.querySelector(".input");
    input.classList.toggle("input__active");
  };

  const selectOption = (name) => {
    alert(name);
    const text = document.querySelector('.placeholder');
    text.textContent = name;
    text.classList.add('input__selected')
    toggleDropdown();
    displayFolder(name);
  };

  let p = document.createElement("p");
  // const detail = db["folders"]["current-project"];
  // console.log(input);

  const { folder: {current_project: [{status: [{ongoing}]}]} } = folders;
  //const { title, description, background_info } = folders["folder"].current_project[0];
  console.log(ongoing);



  //p.innerText = background_info;
  wrap.appendChild(p);

  folders["folder"].current_project.forEach (function(fl) {
  	var t = fl.title;
  	//console.log(t);
  	let li = document.createElement("li");
  	li.innerHTML = `<svg class="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
  		  <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z">
  		  </path>
  		</svg>
  	<span>${t}</span>`;
  	list.appendChild(li);
  }

  )

	const data = {
	  "results": [
	    {
	      "gender": "male",
	      "name": {
	        "title": "mr",
	        "first": "mike",
	        "last": "lowry"
	      }
	    },
	    {
	      "gender": "female",
	      "name": {
	        "title": "miss",
	        "first": "mia",
	        "last": "sutton"
	      }
	    }
	  ]
	};
// declare a const variable named firstItem that holds the first element of the array
const { results: [firstItem] } = data;
// You could event destructure the content of this first array item like this
const { results: [{ gender, name }] } = data;
// or go deeper like this
//const { results: [{ name: { title, first, last } }] } = data;
//console.log(firstItem);
//console.log(name);

dropdown();

console.log(input);

const displayFolder = (folderName) => {
   tp = input.querySelector('.placeholder');
   alert(folderName)
   var { title, description, background_info } = folders["folder"][`${folderName}`][0];
   console.log(title);
}
});
