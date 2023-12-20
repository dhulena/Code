function onFormSubmit(){
    var formData=readFormData();
    insertNewRecord(formData);

}
function readFormData(){
    var formData={};
    formData["fullName"]=document.getElementById("fullname").value;
    formData["latname"]=document.getElementById("lastname").value;
    formData["age"]=document.getElementById("age").value;
    return formData;

}
function insertNewRecord(data){
    var table=document.getElementById("employeeList").getElementsByTagName('tbody')[0];
var newRow=table.insertRow(table.length);
celll1=newRow.insertCell(0);
cell1.innerHTML=data.fullname;
celll2=newRow.insertCell(1);
cell2.innerHTML=data.lastname;
celll3=newRow.insertCell(2);
cell3.innerHTML=data.age;
celll4=newRow.insertCell(3);
cell4.innerHTML=`<a>Edit</a>
<a>Delete</a>`;


}
function resetForm(){
    document.getElementById("fullname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("age").value="";
}