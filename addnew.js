let items = [];


const addItem = (ev) => {
    console.log("Hello")
    ev.preventDefault(); //to stop the form submitting
    let item = {
        Name: document.getElementById('iname').value,
        Quantity: document.getElementById('inum').value,
        Unit: document.getElementById('tbox1').value,
        Department: document.getElementById('tbox2').value,
        Notes: document.getElementById('tbox3').value
    }
    items.push(item);
    console.log(items);


    document.forms[0].reset(); 
    console.warn('added', {
        items
    });
   
    let output = "<tr><th>Name</th><th>Quantiy</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
    for (let i = 0; i < items.length; i++) {

        output += "<tr>";
       
        output += "<td>" + items[i].Name + "</td>";
        output += "<td>" + items[i].Quantity + "</td>";
        output += "<td>" + items[i].Unit + "</td>";
        output += "<td>" + items[i].Department + "</td>";
        output += "<td>" + items[i].Notes + "</td>";



    }

    tbl1.innerHTML = output;
    // saving to localStorage
   

    
       
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let List = JSON.parse(this.responseText);
                let item = List.list;

               
                let output = "<tr><th>Name</th><th>Quantiy</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
                for (let j = 0; j < item.length; j++) {
                    
                        output += "<tr>";
                        
                        output += "<td>" + item[j].Name + "</td>";
                        output += "<td>" + item[j].Quantity + "</td>";
                        output += "<td>" + item[j].Unit + "</td>";
                        output += "<td>" + item[j].Department + "</td>";
                        output += "<td>" + item[j].Notes + "</td>";
                   

                }

                tbl2.innerHTML = output;
            }
        }
        xhttp.open("GET", "list.json", true);
        xhttp.send();
    
    localStorage.setItem("list.json", JSON.stringify(items));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('adnewbt').addEventListener('click', addItem);
});
   
