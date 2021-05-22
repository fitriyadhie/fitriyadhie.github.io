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


      if(menu=='yes'){
        var menuz = document.getElementById("menu");
        var aEl  = document.createElement("a");
        menuz.innerHTML +=
        "<tr>" +
          "<td>" + nama + "</td>" +
          "<td>" + harga + "</td>" +
          "<td>" + "<a href=\"#0\" class=\"cd-add-to-cart js-cd-add-to-cart\" data-price=\""+harga+"\">Add To Cart</a>" + "</td>" +
        "</tr>";
        //menuz.appendChild(menuz);
        // var x = document.getElementById("menu");
        // x.innerHTML +=
        // "<tr>" +
        //   "<td>" + nama + "</td>" +
        //   "<td>" + harga + "</td>" +
        //   "<td>" + "<a href=\"#0\" class=\"cd-add-to-cart js-cd-add-to-cart\" data-price=\""+harga+"\">Add To Cart</a>" + "</td>" +
        // "</tr>";
        // $( "#menu" ).append( "<tr>" +
        //   "<td>" + nama + "</td>" +
        //   "<td>" + harga + "</td>" +
        //   "<td>" + "<a href=\"#0\" class=\"cd-add-to-cart js-cd-add-to-cart\" data-price=\""+harga+"\">Add To Cart</a>" + "</td>" +
        // "</tr>" );
      }else{
        var x = document.getElementById("menu");
      //let x = row.insertCell(-1);
        x.innerHTML +=
        "<tr class=\"table-info\">"+
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