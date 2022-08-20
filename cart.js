function updateQuantity(isIncrease, id, price){
    const oldValue = document.getElementById(id);
    const oldValueString = oldValue.value;
    const oldValueInt = parseInt(oldValueString);
    let newQuantity;


    if(isIncrease === true){
        newQuantity = oldValueInt + 1;
    }else{
        newQuantity = oldValueInt - 1;
    }
    document.getElementById(id).value = newQuantity;


    const totalPrice = newQuantity * price;
    const totalNewPrice = document.getElementById('price1');
    const totalNewPrice2 = document.getElementById('price2');
    if(price === price1){
        totalNewPrice.innerText = totalPrice;
    }else{
        totalNewPrice2.innerText = totalPrice;
    }


    const subtotal = parseInt(document.getElementById('price1').innerText) + parseInt(document.getElementById('price2').innerText);
    const subTotals = parseInt(subtotal);
    document.getElementById('subtotal').innerText = subTotals;


    const tax = (subtotal * 15) / 100;
    const ntax = parseInt(tax);
    document.getElementById('tax').innerText = ntax;

    const taxTotal = subTotals + ntax;
    document.getElementById('final-total').innerText = parseInt(taxTotal);
}

    const price1 = parseInt(document.getElementById('price1').innerText);
    const price2 = parseInt(document.getElementById('price2').innerText);

    document.getElementById('plus-btn1').addEventListener('click', function(){
        updateQuantity(true, 'curent-value1', price1);
    })
    document.getElementById('minus-btn1').addEventListener('click', function(){
        updateQuantity(false, 'curent-value1', price1);
    })
    document.getElementById('plus-btn2').addEventListener('click', function(){
        updateQuantity(true, 'curent-value2', price2);
    })
    document.getElementById('minus-btn2').addEventListener('click', function(){
        updateQuantity(false, 'curent-value2', price2);
    })



    function remove(cross, itemId){
        document.getElementById(cross).addEventListener('click', function(){
            const cross = document.getElementById(itemId);
            cross.style.display = 'none';
        })
    }

    remove('remove1', 'first-item'); remove('remove2','second-item')