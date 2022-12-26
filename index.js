function display(value) {
    const bill_amt = document.querySelector("#input").value
    const people = document.querySelector("#people").value
 
    const tip = document.querySelector("#tip-amt").value = bill_amt * (value)/100 ;
    console.log(tip)
    const total = parseInt(tip) + parseInt(bill_amt)
    console.log(total)
           document.querySelector('#custom').value
    
     document.querySelector("#tip-total").value = total/people;
 
 }
 function reset(){
     document.querySelector("#input").value=""
     document.querySelector("#people").value =""
     document.querySelector('#tip-amt').value =""
     document.querySelector('#tip-total').value =""
 }
 