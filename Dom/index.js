function joined() {
  const title = (document.getElementById("title").innerText =
    "Thanks for Joining!");
}

// arrow function
// const joined=()=>{
//     const title=document.getElementById('title').innerText="Thanks for Joining!"

// }

// coverter app
function convert(){
let m=document.getElementById('meterInput');
// console.log(m.value);
let cm=m.value*100;
let finalResult=m.value +"M is "+cm+" CM"
let result=document.getElementById('result')
result.innerText=(finalResult)
m.value="";
// console.log(cm)
}


// bill split
function bill(){
    let amount=document.getElementById('amount');
    let person=document.getElementById('person');
    let result=document.getElementById('result')

    let result1=(amount.value/person.value).toFixed(2);

    let finalResult="The Bill Divide Equally among the " +person.value + " people is :"+result1;
    result.innerText=(finalResult);
    person.value=""
    amount.value=""
}
// omini calculator refer for more things..


// manage all user in one place
let users=[];
function add(){
    let name=document.getElementById('name');
    let email=document.getElementById('email');

    //object
    let user={  
        name:name.value,
        email:email.value
    }
    let doesUserExist=users.filter((user)=>{
        return user.email==email.value;
    })
    if(doesUserExist.length==0){
        users.push(user)
    }
    else{    // ensuring the duplicate email shuld not exist inro the array
    console.log("doesUserExist?:" +doesUserExist)
    }
    console.log(users)
    // name.value=""
    // email.value=""
}
