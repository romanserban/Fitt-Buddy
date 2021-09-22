//express framework
const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
//non-sql database mongoose
const mongoose = require('mongoose');
const methodOverride = require('method-override');
//for user-sesion
const session = require('express-session');
const ExpressError = require('./utils/ExpressError')
const flash = require('connect-flash');

const user = require('./routes/users');
const userInfo = require('./routes/userInfo');
const trackingUser = require('./routes/trackingUser');
const meal = require('./routes/meal');
const recipe = require('./routes/recipes');
const reviews = require('./routes/reviews');
const exercises = require('./routes/exercises');

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


const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}


const app = express();
// app.use(imgMapSizer());
//use for the new tamplate
app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
//set views main folder to 
app.set('views', path.join(__dirname, 'view'))
//to parse the body in requests
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(flash());
app.use('/uploads', express.static('uploads'));


app.use((request, response, next) => {
    response.locals.success = request.flash('success');
    response.locals.error = request.flash('error');
    response.locals.currentUser = request.session.user_id;
    response.locals.username = request.session.username;
    next();
})

app.use('/', user);
app.use('/', userInfo);
app.use('/', trackingUser);
app.use('/', meal);
app.use('/recipes', recipe);
app.use('/recipes/:id/reviews', reviews);
app.use('/exercises', exercises)

app.get('/', (request, response) => {
    response.render('start.ejs');
})

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

app.listen(3000, () => {
    console.log('Server on port 3000')
})