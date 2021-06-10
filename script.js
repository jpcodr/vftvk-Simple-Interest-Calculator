function compute() {
    const principal = document.getElementById("principal");
    const principalValue = principal.value;
    if (principalValue <= 0) {
        alert('Please enter a positive number');
        principal.focus();
        return;
    }
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principalValue * years * rate / 100;
    const futureYear = new Date().getFullYear() + parseInt(years);
    const result = document.getElementById('result');

    result.innerHTML = `
        If you deposit <span class='highlight'>$${principalValue}</span><br />
        at an interest rate of <span class='highlight'>${rate}%</span><br />
        You will receive an amount of <span class='highlight'>$${interest}</span><br />
        in the year <span class='highlight'>${futureYear}</span>
    `;
    result.style.display = 'block';
}
    
function updateRate() {
    const rateValue = document.getElementById('rate').value;
    const rateText = document.getElementById('rate_val');

    rateText.innerText = rateValue+'%';
}