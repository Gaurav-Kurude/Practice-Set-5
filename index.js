function discount (customerAge, isMember, totalPurchase){
    if(customerAge < 18 || customerAge > 60 && totalPurchase >= 100){
       console.log("Eligible for Discount");
       
    } else if( isMember == true && totalPurchase >= 50){
        console.log("Eligible for Discount");
    }else{
        console.log( "Not Eligible for Discount");
        
    }
};
discount(16, false, 120);
discount(45, false, 40);

console.log("--------------------------------");

function month(monthlySales, isTeamLeader){
    if(monthlySales >= 5000 && isTeamLeader == true){
       console.log("True");
       
    }else {
       console.log("False");
       
    }
};

month(7000, true);
month(4000, true);
