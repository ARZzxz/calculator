const nutritionData = {
    apple: { calories: 52, carbs: 14, fats: 0.2, protein: 0.3 },
    banana: { calories: 89, carbs: 23, fats: 0.3, protein: 1.1 },
    chicken: { calories: 165, carbs: 0, fats: 3.6, protein: 31 },
    rice: { calories: 130, carbs: 28, fats: 0.3, protein: 2.7 },
    broccoli: { calories: 55, carbs: 11, fats: 0.6, protein: 3.7 },
    salmon: { calories: 206, carbs: 0, fats: 13, protein: 22 },
    egg: { calories: 155, carbs: 1.1, fats: 11, protein: 13 },
    milk: { calories: 42, carbs: 5, fats: 1, protein: 3.4 },
    bread: { calories: 265, carbs: 49, fats: 3.2, protein: 9 },
    cheese: { calories: 402, carbs: 1.3, fats: 33, protein: 25 }
};

document.getElementById('calculateBtn').addEventListener('click', function() {
    const foodType = document.getElementById('foodType').value;
    const unit = document.getElementById('unit').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const nutrition = nutritionData[foodType];
    let multiplier = 1;

    if (unit === 'ml' && foodType === 'milk') {
        multiplier = 1; // 100ml of milk
    } else if (unit === 'grams') {
        multiplier = amount / 100; // Convert to per 100g
    }

    const calories = (nutrition.calories * multiplier * amount).toFixed(2);
    const carbs = (nutrition.carbs * multiplier * amount).toFixed(2);
    const fats = (nutrition.fats * multiplier * amount).toFixed(2);
    const protein = (nutrition.protein * multiplier * amount).toFixed(2);

    document.getElementById('result').innerHTML = `
        <h2>Nutrition Information</h2>
        <p>Calories: ${calories} kcal</p>
        <p>Carbohydrates: ${carbs} g</p>
        <p>Fats: ${fats} g</p>
        <p>Protein: ${protein} g</p>
    `;
});