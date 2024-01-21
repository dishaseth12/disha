var cursor = document.querySelector(".cursor")
var seventhpart = document.querySelector(".seventhpart")
seventhpart.addEventListener("mousemove",function(dets){
     cursor.style.opacity = 1
     cursor.style.display = "flex"
     cursor.style.left = dets.x+"px"
     cursor.style.top = dets.y+"px"
     cursor.style.marginTop = "-80px"
})
seventhpart.addEventListener("mouseleave",function(dets){
     cursor.style.display = "none"
})