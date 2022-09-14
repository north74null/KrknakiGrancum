function createTables() {
    let arr = [
        document.getElementById("i1").value,
        document.getElementById("i2").value,
        document.getElementById("i3").value,
        document.getElementById("i4").value,
        document.getElementById("i5").value,
        document.getElementById("i6").value
    ]
    var tables = document.getElementById("tables");
    function createOneTable(hashiv, debet, kredit) {
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");

        var row1 = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cellText1 = document.createTextNode(hashiv);
        cell1.colSpan = 2;
        var row2 = document.createElement("tr");
        var cell2 = document.createElement("td");
        var cellText2 = document.createTextNode("Դեբետ");
        var cell3 = document.createElement("td");
        var cellText3 = document.createTextNode("Կրեդիտ");
        var row3 = document.createElement("tr");
        var cell4 = document.createElement("td");
        var cellText4 = document.createTextNode(debet);
        var cell5 = document.createElement("td");
        var cellText5 = document.createTextNode(kredit);

        cell1.appendChild(cellText1);
        cell2.appendChild(cellText2);
        cell3.appendChild(cellText3);
        cell4.appendChild(cellText4);
        cell5.appendChild(cellText5);
        row1.appendChild(cell1);
        row2.appendChild(cell2);
        row2.appendChild(cell3);
        row3.appendChild(cell4);
        row3.appendChild(cell5);
        tblBody.appendChild(row1);
        tblBody.appendChild(row2);
        tblBody.appendChild(row3);
        tbl.appendChild(tblBody);
        tables.appendChild(tbl);
    }
    if ((arr[0].length == 3 || arr[0].length == 4) && (arr[2].length == 3 || arr[2].length == 4) && arr[1] != "" && arr[3] != "" && arr[4] != "") {
/*ակտիվային*/if ((arr[0].slice(0, 1) == 1 || arr[0].slice(0, 1) == 2) && (arr[2].slice(0, 1) == 1 || arr[2].slice(0, 1) == 2)) {
            console.log("ակտիվային")
            createOneTable(arr[0], arr[1], "")
            createOneTable(arr[2], arr[3], "")
            createOneTable(arr[0], "", arr[4])
            createOneTable(arr[2], arr[4], "")
            createOneTable(arr[0], parseInt(arr[1]) - parseInt(arr[4]), "")
            createOneTable(arr[2], parseInt(arr[3]) + parseInt(arr[4]), "")
        }
/*պասիվային*/if ((arr[0].slice(0, 1) == 4 || arr[0].slice(0, 1) == 5) && (arr[2].slice(0, 1) == 4 || arr[2].slice(0, 1) == 5)) {
            console.log("պասիվային")
            createOneTable(arr[0], "", arr[1])
            createOneTable(arr[2], "", arr[3])
            createOneTable(arr[0], arr[4], "")
            createOneTable(arr[2], "", arr[4])
            createOneTable(arr[0], "", parseInt(arr[1]) - parseInt(arr[4]))
            createOneTable(arr[2], "", parseInt(arr[3]) + parseInt(arr[4]))
        }
/*ակտիվա-պասիվային ավելացումով*/if ((arr[0].slice(0, 1) == 4 || arr[0].slice(0, 1) == 5) && (arr[2].slice(0, 1) == 1 || arr[2].slice(0, 1) == 2)) {
            console.log("ակտիվա-պասիվային ավելացումով")
            createOneTable(arr[0], "", arr[1])
            createOneTable(arr[2], arr[3], "")
            createOneTable(arr[0], "", arr[4])
            createOneTable(arr[2], arr[4], "")
            createOneTable(arr[0], "", parseInt(arr[1]) + parseInt(arr[4]))
            createOneTable(arr[2], parseInt(arr[3]) + parseInt(arr[4]), "")
        }
/*ակտիվա-պասիվային նվազեցում*/if ((arr[0].slice(0, 1) == 1 || arr[0].slice(0, 1) == 2) && (arr[2].slice(0, 1) == 4 || arr[2].slice(0, 1) == 5)) {
            console.log("ակտիվա-պասիվային նվազեցումով")
            createOneTable(arr[0], arr[1], "")
            createOneTable(arr[2], "", arr[3])
            createOneTable(arr[0], "", arr[4])
            createOneTable(arr[2], arr[4], "")
            createOneTable(arr[0], parseInt(arr[1]) - parseInt(arr[4]), "")
            createOneTable(arr[2], "", parseInt(arr[3]) - parseInt(arr[4]))
        }
    }
}