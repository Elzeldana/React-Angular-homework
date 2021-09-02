   import * as data from "/peopledata.js";

   const peopleEndWithA= data.peopleArray.filter(x=>x.name.endsWith("a"));
    console.log(peopleEndWithA);
    peopleEndWithA.forEach((x)=>{
        console.log(x);
    }); 
     let gridList= document.getElementById("gridList");   
    let renderPeople =(peopleData) => { 
     removeAllChildNodes(gridList);
        console.log(peopleData);
          peopleData.forEach(x => {          
          let listItem= `<li class="cards_item">
                <div class="card">
                    <div class="card_image"><img src="${x.image}"}></div>
                    <div class="card_content">
                        <h2 class="card_title">Name: ${x.name}</h2>
                        <p class="card_text">Age: ${x.age}</p>
                        <p class="card_text">Role: ${x.role}</p>
                        <button class="btn card_btn">Contact</button>
                    </div>
                </div>
            </li>`
          console.log(x.name);
          gridList.innerHTML+=listItem;
      });
    }
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }
        document.getElementById("all-names").addEventListener("click", ()=>{renderPeople(data.peopleArray)});
        document.getElementById("names-A").addEventListener("click", ()=>{ renderPeople(peopleEndWithA)});
  

 

  
 
        
    