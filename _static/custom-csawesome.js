var bhtoc = document.querySelector(".globaltoc");
var bhtoclist;        
if (bhtoc != undefined) {
    bhtoclist = bhtoc.children;
    if (bhtoclist != "undefined" && bhtoclist[0].innerText.startsWith("1"))
    {
      bhtoclist[0].querySelector("a").innerHTML = "1.1 Getting Started";
      bhtoclist[1].querySelector("a").innerHTML = "1.1.1 Preface";
      bhtoclist[2].querySelector("a").innerHTML = "1.1.2. About the AP CS A Exam";
   }
}