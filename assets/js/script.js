let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;
    console.log(data)

    let i;
    for (i = 0; i < data.length; i++) {
      let nama = data[i]["gsx$nama"]["$t"];
      let harga = data[i]["gsx$harga"]["$t"];
      let menu = data[i]["gsx$menu"]["$t"];

      var x = document.getElementById("menuz");

      if(menu=='yes'){
        x.innerHTML +=
        "<tr>" +
          "<td>" + nama + "</td>" +
          "<td>" + harga + "</td>" +
          "<td>" + "<a href=\"#0\" class=\"cd-add-to-cart js-cd-add-to-cart\" data-price=\""+harga+"\" data-nama=\""+nama+"\">Add To Cart</a>" + "</td>" +
        "</tr>";
      }else{
        // var x = document.getElementById("menuz");
        x.innerHTML +=
        "<tr id=\""+harga+"\" class=\"table-info\">"+
          "<th colspan=\"3\">"+nama+"</th>"+
        "</tr>";
      }

    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1ikPzdwXTa4oHc_uS6X4mVtfNdWrtXDKoU5gCdUI5yHU/2/public/values?alt=json",
  true
);
xmlhttp.send();

