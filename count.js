let count = 0

document.getElementById('plus-btn').addEventListener('click',function(){
        
      const p = document.getElementById("p-count");
      
       count++

        p.innerText = count
})

document.getElementById('minus-btn').addEventListener('click',function(){
        
    const p = document.getElementById("p-count");
    
     count--

      p.innerText = count
})

