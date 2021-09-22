const Recipe = require('../model/recipe');
const mongoose = require('mongoose');
const { name1, name2 } = require('./names');
const { Logger } = require('mongodb');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const userInfo = require('../model/userInfo');
const Meal = require('../model/meal');
const Review = require('../model/review');
const Exercise = require('../model/exercise');

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function generateRandomExercises(userId) {
    const group = ['abs', 'biceps', 'triceps', 'back', 'shoulders', 'chest', 'calves', 'forearms', 'trapesiuz', 'legs'];
    const category = group[getRandomInt(0, group.length)];
    const name = capFirst(category) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
    const author = userId;
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed minus totam officiis ducimus soluta, perspiciatis recusandae eius odit commodi! Sit quae maiores officiis quasi totam atque quas repellat inventore.";
    const e = new Exercise({
        name: name,
        category: category,
        description: description,
        author: author
    })
    return e;
}

function generateRandomRecipe(userId) {
    const name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
    const calories = Math.floor(Math.random() * 1000);
    const carbs = Math.floor(Math.random() * 50) + 10;
    const fats = Math.floor(Math.random() * 40) + 10;
    const protein = Math.floor(Math.random() * 30) + 10;
    const image = "https://source.unsplash.com/collection/4704199";
    const author = userId;
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed minus totam officiis ducimus soluta, perspiciatis recusandae eius odit commodi! Sit quae maiores officiis quasi totam atque quas repellat inventore."

    const r = new Recipe({
        name: name,
        calories: calories,
        carbs: carbs,
        fats: fats,
        protein: protein,
        image: image,
        description: description,
        author: author,
    })
    return r;
}

mongoose.connect('mongodb://localhost:27017/fit-buddy', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

function randomNutients() {
    const calories = Math.floor(Math.random() * 1000) + 500;
    const carbs = Math.floor(Math.random() * 50) + 10;
    const fats = Math.floor(Math.random() * 40) + 10;
    const protein = Math.floor(Math.random() * 30) + 10;
    return { carbs, calories, fats, protein }
}

function recipeAdd1(userId) {
    const name = "Healty and delicious salad"
    const { carbs, calories, fats, protein } = randomNutients();
    const description = "Try this new recipe!! A very easy and dilicios recipe. You need the next ingredients:..."
    const image = "images/salata1.jpg"
    const author = userId;
    const r = new Recipe({
        name: name,
        calories: calories,
        carbs: carbs,
        fats: fats,
        protein: protein,
        image: image,
        description: description,
        author: author,
    })
    return r
}
function recipeAdd2(userId) {
    const name = "Healty way to cook chicken"
    const { carbs, calories, fats, protein } = randomNutients();
    const description = `Ingredients
    Ingredient Checklist
    One 3-pound chicken, wing tips removed
    1/4 cup unsweetened coconut milk
    2 tablespoons red curry paste
    1 teaspoon dark brown sugar
    Salt and freshly ground pepper
    
    Oops! We cannot find any ingredients on sale near you. Do we have the correct zip code?
    
    Zip Code
    00000
     UPDATE
    or use the browser to
    Find Me
    DirectionsInstructions Checklist
    Step 1
    Light a grill. Using kitchen shears, cut along both sides of the chicken backbone; discard the backbone. Turn the chicken breast side up and press down firmly on the breast bone to crack and flatten it. Using a sharp knife, cut deep slits to the bone 1/2 inch apart along the chicken legs and thighs. Transfer the flattened chicken to a medium baking dish.
    
    Step 2
    In a small bowl, whisk the coconut milk with the curry paste and brown sugar until smooth. Rub the curry mixture all over the chicken, into the slits and under the skin; season with salt and pepper.
    
    Step 3
    Grill the chicken skin side down over moderate heat until the skin is browned and crisp, about 10 minutes. Turn the chicken skin side up, cover and grill over moderate heat until cooked through, about 20 minutes. Transfer the chicken to a cutting board and let rest for 5 minutes. Carve the chicken and serve.`
    const image = "images/pui.jpg"
    const author = userId;
    const r = new Recipe({
        name: name,
        calories: calories,
        carbs: carbs,
        fats: fats,
        protein: protein,
        image: image,
        description: description,
        author: author,
    })
    return r
}

function recipeAdd3(userId) {
    const name = "Creamy soup"
    const { carbs, calories, fats, protein } = randomNutients();
    const description = "da"
    const image = "images/supacrema.jpg"
    const author = userId;
    const r = new Recipe({
        name: name,
        calories: calories,
        carbs: carbs,
        fats: fats,
        protein: protein,
        image: image,
        description: description,
        author: author,
    })
    return r
}

const seedDB = async () => {
    await userInfo.deleteMany({});
    await Meal.deleteMany({});
    await Recipe.deleteMany({});
    await Review.deleteMany({});
    await User.deleteMany({});
    await Exercise.deleteMany({});
    // const user = new User({ username: "admin", password: "admin", email: "admin@a.com" })
    // const cryptedPw = await bcrypt.hash(user.password, 11);
    // user.password = cryptedPw;
    // await user.save();
    // for (let i = 0; i < 25; i++) {
    //     const recipe = generateRandomRecipe(user._id);
    //     console.log(recipe);
    //     await recipe.save();
    // }
    // for (let i = 0; i < 30; i++) {
    //     const exercise = generateRandomExercises(user._id);
    //     console.log(exercise);
    //     await exercise.save();
    // }
    // console.log(user);
}

seedDB().then(() => {
    mongoose.connection.close();
})



