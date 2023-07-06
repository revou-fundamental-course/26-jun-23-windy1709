var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 2000)
function plusDiv(index) {
    showImage(slideIndex += index)
}
function showImage(index) {
    console.log(index)
    const imgList = document.getElementsByClassName("auto-slide")
    if (index > imgList.length) { slideIndex = 1}
    if (index < 1) {slideIndex = imgList.length}
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "block"
}
for (i = 1; i <= 10; i++) {
    console.log(i)
}

function validateForm() {
    let x = document.forms["newform"]["name"].value;
    let y = document.forms["newform"]["email"].value;
    if (x == "" || y=="") {
      alert("Nama atau Email tidak boleh kosong");
      return false;
    }
  }