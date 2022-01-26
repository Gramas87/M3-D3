
window.onload = () => {
  fetch('https://api.pexels.com/v1/search?query=tree',
    {
      method: 'GET',
      headers: {Authorization:'563492ad6f91700001000001e2948236206a4d278ffe5c700fc3bb68'},
    })
    .then((response) => response.json())
    .then((respdata) =>{
      for (let i = 0; i < respdata.photos.length; i++) {
        let newDiv = document.createElement('div')
        newDiv.innerHTML = ` 
            <div class="card mb-4 shadow-sm">
              <img src="" alt="">
              <div class="card-body">
                aaaaaaaaaaaaaaaa
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      hide
                    </button>
                  </div>
                  <small class="text-muted">${respdata.photos[i].id}</small>
                </div>
              </div>
            </div>
             
            </div>
         `
      document.getElementsByClassName("container1").appendChild(newDiv)
      
      
       }

    })
    
    
  
      
    
    
    
    
}