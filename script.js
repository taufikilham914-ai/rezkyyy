function openScene(){

    document.getElementById("intro").style.opacity = "0";

    setTimeout(() => {

        document.getElementById("intro").style.display = "none";

        document.getElementById("scene").classList.add("show");

    },1000);

}