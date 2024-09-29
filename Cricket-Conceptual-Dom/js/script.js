// const price = document.getElementById('budget').innerText;
// const convertPrice = parseInt(price);

// const cartCount = document.getElementById('cart').innerText;
// const convertCartCount = parseInt(cartCount);

// const leftCount = document.getElementById('left').innerText;
// const convertLeftCount = parseInt(leftCount);

const allBtn = document.getElementsByClassName('add-btn');
for (const btn of allBtn)
{
    btn.addEventListener('click', function (event) {
        //console.log(event.target.parentNode.childNodes;)
        const name = event.target.parentNode.childNodes[1].innerText; ///Tamim Iqbal

        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-players-container');

        //check cart if it is >6 .If >6 then limit is over. No more add to cart the player
        const beforeUpdateCartCount = getConvertValue('cart');
        const beforeUpdateLeftCount = getConvertValue('left');

        if (beforeUpdateCartCount + 1 > 4 || beforeUpdateLeftCount - 1 < 0) {
            alert('Limit is over !');
            return;
        }

        
        //one player can be selected one (add to cart btn)
        // btn.disabled = true;
        // btn.style.backgroundColor = 'red';
        event.target.setAttribute("disabled", false);
        event.target.parentNode.style.backgroundColor = 'red';

        //update Budget
        const budget = getConvertValue('budget');
        document.getElementById('budget').innerText = budget - parseInt(price);

        //after checking then update Cart
        const cartCount = getConvertValue('cart');
        document.getElementById('cart').innerText = cartCount + 1;

        //update left
        const leftCount = getConvertValue('left');
        document.getElementById('left').innerText = leftCount - 1;

        const div = document.createElement('div');
        div.classList.add('flex');
        div.classList.add('justify-around');
        div.classList.add('gap-x-10');
        
       
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);


        //update total cost , grand total cost
        updateTotalCost(price);
        updateGrandTotal();

        


        
    })
}

const price = getConvertValue('budget');
const cartCount = getConvertValue('cart');
const leftCount = getConvertValue('left');

function getConvertValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;

}


function updateTotalCost(value) {
    const totalCost = getConvertValue('total-cost'); //price jeta given
    const sum = totalCost + parseInt(value); // new total price of players
    document.getElementById('total-cost').innerText = sum;

}

function updateGrandTotal(status) {
    const totalCost = getConvertValue('total-cost');
    //add to cart theke call korle status parameter ache
    if (status == undefined)
    {
    //apply button theke call korle status parameter nai
    //const totalCost = getConvertValue('total-cost');
        document.getElementById('grand-total').innerText = totalCost;

    }
    else {
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode == 'BEKAR')
        {
            const discount = totalCost - (totalCost * 0.2);
            document.getElementById('grand-total').innerText = discount;
        }
        else {
            alert('Please enter a valid coupon code');
        }   
    }
}
