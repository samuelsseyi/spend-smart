let budgetAmount;


const saveBudget = ()=>{
  budgetAmount = document.getElementById("budgetAmount").value
  if (budgetAmount === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Please Enter Your Budget Amount Before Proceeding"
  } else{
    document.getElementById("welcomeDisplay").style.display = "none"
    document.getElementById("secondaryWelcome").style.display = "block"
    document.getElementById("userBudgetConfirm").innerHTML = `Great! <br><br>You have set a Budget Amount of &#8358;${budgetAmount}, now how do you want to spend it?` 
  }
}

const firstAddBudgetBtn = ()=> {
  document.getElementById("secondaryWelcome").style.display = "none"
  document.getElementById("budgetItemsCard").style.display = "block"
  document.getElementById("addBudgetTitle").innerHTML = `Your Total Budget Balance is &#8358;${budgetAmount}`
   

}


const allocateBudget = ()=> {
 let itemName = document.getElementById("itemName").value
 let itemAmount = document.getElementById("itemAmount").value
 let itemQty = document.getElementById("itemQty").value
 let itemAmountQty = Math.round(`${itemAmount * itemQty}`)
 let theCurrentTime = new Date().toLocaleTimeString()

 if (itemName === "" || itemQty === "" || itemAmount === ""){
  document.getElementById("errorDiv2").style.display = "block"
  errorDiv2.innerHTML = "Oops! Looks like you missed a required field."
 } else if ( itemAmountQty > budgetAmount){
  document.getElementById("errorDiv2").style.display = "block"
  errorDiv2.innerHTML = "Uh-oh! Item cost exceeds budget balance. Please select a more affordable option."
 } else if (itemAmount <= 0 || itemQty <= 0){
  document.getElementById("errorDiv2").style.display = "block"
  errorDiv2.innerHTML = "Uh-oh! Seems item price or quantity is too small."
 } else {
  document.getElementById("errorDiv2").style.display = "none"

  let budgetBalance = Math.round(`${budgetAmount -= itemAmountQty}`)
  document.getElementById("addBudgetTitle").innerHTML = `Your Total Budget Balance is &#8358;${budgetBalance}`



  document.getElementById("dispCard").style.display = "block"
  document.getElementById("itemsDisp").innerHTML += `<li>You Added ${itemName}: Price &#8358;${itemAmount} | Quantity ${itemQty} | Total Amount &#8358;${itemAmountQty} | Time ${theCurrentTime} </li> <br>`

  document.getElementById("itemName").value = ""
  document.getElementById("itemAmount").value = ""
  document.getElementById("itemQty").value = ""
 }
}

const refreshButton = ()=>{
  location.reload();
}

