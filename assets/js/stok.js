$(document).ready(function(){
    read_list_stok()
});

function read_list_stok() {
    var url = script_url+"?action=list-stok";
   $.getJSON(url, function (json) {
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {
            let nama = json.records[i].Nama;
            let stok = json.records[i].Stok;
            var x = document.getElementById("list-stok");

            if(stok <= 10){
                x.innerHTML +=
                "<tr>" +
                    "<td>" + nama + "</td>" +
                    "<td><div class=\"alert alert-danger\" role=\"alert\">" + stok + "</div></td>" +
                "</tr>";
            }
        }

         $(".load-list").remove();
    });
}
