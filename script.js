console.log("OK");
var arr = [];
async function getData() {

    try{

        const response = await fetch("https://gauravgitacc.github.io/postAppData/auctionData.json");

        arr = await response.json();
        
        sessionStorage.setItem("myArr", JSON.stringify(arr));

        if(arr)
        {
            showData(arr);
        }
       }
       catch(e) {
        console.log("ERROR",e);
       }

    // console.log(arr);
   d
}
// getData();

if(sessionStorage.getItem("myArr"))
{
    var myArr = JSON.parse(sessionStorage.getItem("myArr"));
    showData(myArr);
    arr = myArr;
}
else
{
    getData();
}

document.getElementById("search").addEventListener("input",searchData);

function searchData() {
    const searchValue = document.getElementById("search").value;
    var newArr = arr.filter((item) =>
        item.toLocation.toLowerCase().includes(searchValue.trim().toLowerCase())
    );

    showData(newArr);
}

function showData(arr){
    document.getElementById("container").innerHTML ="";

    let innerHtml = "";

    arr.forEach(element => {
        
        innerHtml +=`
        <div id="box-container">
    <div id="upper-part">
        <div>
            <div class='status ${element.status=="PENDING" ? "yellow" :  element.status == "CANCELLED" ? "red" :"" }'>${element.status}</div>
            <div style='padding-left:10px'>${element.caseNumber}</div>
        </div>
        <p>${l=element.date}</p>
    </div>
    <hr>
    <div id="lower-part">
        <strong>${element.toLocation}</strong>
        <p>${element.fromLocation} <span style="float:right;">${element.fare}</span></p>
    </div>
</div>
        `;
    });

    document.getElementById("container").innerHTML = innerHtml;
}




