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
        If you deposit $${principalValue}<br />
        at an interest rate of ${rate}%<br />
        You will receive an amount of $${interest}<br />
        in the year ${futureYear}
    `;
    result.style.display = 'block';
}
    
function updateRate() {
    const rateValue = document.getElementById('rate').value;
    const rateText = document.getElementById('rate_val');

    rateText.innerText = rateValue+'%';
}