const User = require('../model/user');
const bcrypt = require('bcrypt');
const moreInfo = require('../model/userInfo');
const getAge = require('../utils/getAge');


module.exports.renderUser = (req, res) => {
    res.render('user/register.ejs');
}

module.exports.register = async (req, res) => {
    const user = new User(req.body.user);
    const cryptedPw = await bcrypt.hash(user.password, 11);
    user.password = cryptedPw;
    await user.save();
    req.flash('success', 'You made a new account!');
    req.session.user_id = user._id;
    req.session.username = user.username;
    res.redirect('/userInfo');
}

module.exports.renderLogin = (req, res) => {
    res.render('user/login.ejs');
}

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
            req.flash('success', 'You are logged!');
            req.session.user_id = user._id;
            req.session.username = user.username;
            res.redirect('/');
        }
        else {
            req.flash('error', 'Wrong username or password!');
            res.redirect('/login');
        }
    }
    catch (e) {
        req.flash('error', 'Wrong username or password!');
        res.redirect('/login');
    }
}

module.exports.logout = async (req, res) => {
    req.flash('success', 'You are loggout!');
    req.session.user_id = null;
    res.redirect('/')
}

module.exports.renderProfile = async (req, res) => {
    const user = await User.findById(req.session.user_id);
    const moreInfoUser = await moreInfo.findOne({ userId: req.session.user_id })
    const age = getAge(moreInfoUser.bday);
    res.render('user/profile.ejs', { user, age });
}

module.exports.renderChangePw = async (req, res) => {
    const user = await User.findById(req.session.user_id);
    res.render('user/changePassword.ejs', { user });
}

module.exports.changePw = async (req, res) => {
    const user = await User.findById(req.session.user_id);
    const { p1 } = req.body;
    const cryptedPw = await bcrypt.hash(p1, 11);
    user.password = cryptedPw;
    await user.save();
    req.flash('success', 'The password was successfully change!')
    res.redirect(`/profile/${res.locals.currentUser}`);

}