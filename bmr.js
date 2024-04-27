document.getElementById('bmr-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);

    let bmr;

    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    document.getElementById('result').innerHTML = `<p>Your Basal Energy Requirement (BMR) is: ${bmr.toFixed(2)} calories per day.</p>`;
});
