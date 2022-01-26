
const load1 = () => {
  fetch('https://api.pexels.com/v1/search?query=tree',
    {
      method: 'GET',
      headers: {Authorization:'563492ad6f91700001000001e2948236206a4d278ffe5c700fc3bb68'},
    })
    .then((response) => response.json())
    .then((respdata) =>{
      console.log(respdata)
      const svg = document.querySelectorAll('svg')
      for (let i = 0; i < svg.length; i++) {
        
        svg[i].classList.add('d-none')
      }
      const row = document.querySelector("body > main > div > div > div")
      for (let i = 0; i < respdata.photos.length; i++) {
        
        
        let newDiv = document.createElement('div')
        newDiv.classList.add("col-md-4")
        newDiv.innerHTML = `
         
         <div class="card mb-4 shadow-sm">
         <img src="${respdata.photos[i].src.small}" alt="">
         
         <div class="card-body">
           <p class="card-text">
             This is a wider card with supporting text below as a natural
             lead-in to additional content. This content is a little bit
             longer.
           </p>
           <div
             class="d-flex justify-content-between align-items-center"
           >
             <div class="btn-group">
               <button
                 type="button"
                 class="btn btn-sm btn-outline-secondary"
               >
                 View
               </button>
               <button
                 type="button"
                 class="btn btn-sm btn-outline-secondary" onclick="hide()"
               >
                hide
               </button>
             </div>
             <small class="text-muted">${respdata.photos[i].id}</small>
           </div>
         </div>
       </div>
            
         `
         
        row.appendChild(newDiv)
        
      
      
       }
       

    })
    
    
  
      
    
    
    
    
}


const hide = event => event.target.closest('.card').remove()