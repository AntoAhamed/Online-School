const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

main().catch(err => console.log(err)); //DB connections starts from here

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/online-school');
    console.log("Connection build successfully");
}

const studentsSchema = new mongoose.Schema({
    usernameOfS: { type: String, default: "s901s" },
    passwordOfS: { type: String, default: "s901s" },
    usernameOfP: { type: String, default: "p901s" },
    passwordOfP: { type: String, default: "s901s" },
    name: { type: String, default: "Jubair" },
    roll: { type: String, default: "901" },
    class: { type: Number, default: 9 },
    group: { type: String, default: "science" },
    father: { type: String, default: "x" },
    mother: { type: String, default: "y" },
    contact: { type: String, default: "01811122233" },
    email: { type: String, default: "jubair@gmail.com" },
    total: { type: Number, default: 0 },
    present: { type: Number, default: 0 },
    absent: { type: Number, default: 0 }
});

const STUDENTS = mongoose.model('students', studentsSchema);

const teachersSchema = new mongoose.Schema({
    username: { type: String, default: "t101" },
    password: { type: String, default: "t101" },
    name: { type: String, default: "Sayem" },
    contact: { type: String, default: "01811122233" },
    email: { type: String, default: "sayem@gmail.com" }
});

const TEACHERS = mongoose.model('teachers', teachersSchema);

const routinesSchema = new mongoose.Schema({
    class: { type: Number, default: 9 },
    group: { type: String, default: "science" },
    subject: { type: String, default: "Bangla" },
    day: { type: String, default: "sunday" },
    time: { type: String, default: "08:00AM" },
    teacher: { type: String, default: "Sayem" },
    meet: { type: String, default: "https://meet.google.com/aaa-bbbb-ccc" },
    classroom: { type: String, default: "a1bcdef" }
});

const ROUTINES = mongoose.model('routines', routinesSchema);

const resultSchema = new mongoose.Schema({
    class: { type: Number },
    group: { type: String },
    roll: { type: String },
    subject: { type: String },
    CT1: { type: Number },
    mid: { type: Number },
    CT2: { type: Number , default: 0},
    final: { type: Number }
});

const RESULT = mongoose.model('result', resultSchema);

var tmpUser, tmpType;

//login api
app.post('/login', async (req, res) => {
    const { username, password, type } = req.body;

    tmpUser = username;

    var check;

    if (type === "student") {
        tmpType = "student";

        const data = {
            usernameOfS: username,
            passwordOfS: password
        }

        check = await STUDENTS.findOne(data);
        console.log(check);
    }

    if (type === "parent") {
        tmpType = "parent";

        const data = {
            usernameOfP: username,
            passwordOfP: password
        }

        check = await STUDENTS.findOne(data);
        console.log(check);
    }

    if (type === "teacher") {
        tmpType = "teacher";

        const data = {
            username: username,
            password: password
        }

        check = await TEACHERS.findOne(data);
        console.log(check);
    }

    try {
        if (check) {
            res.json("success");
        }
        else {
            res.json("failed");
        }
    }
    catch (e) {
        console.log(e);
    }
})

//get user api
app.get('/get_user', async (req, res) => {
    var userData;

    try {
        if (tmpType === "student") {
            userData = await STUDENTS.findOne({ usernameOfS: tmpUser });
        }
        if (tmpType === "parent") {
            userData = await STUDENTS.findOne({ usernameOfP: tmpUser });
        }
        if (tmpType === "teacher") {
            userData = await TEACHERS.findOne({ username: tmpUser });
        }

        res.send({ user: userData });
    }
    catch (e) {
        console.log(e)
    }
})

//api to get class routine
app.post('/get_routine', async (req, res) => {
    const { classs, group } = req.body;

    const d = new Date();

    let day = d.getDay();
    console.log(day)

    let today;

    switch (day) {
        case 0:
            today = "sunday";
            break;
        case 1:
            today = "monday";
            break;
        case 2:
            today = "tuesday";
            break;
        case 3:
            today = "wednesday";
            break;
        case 4:
            today = "thursday";
            break;
        default:
            today = "sunday";
            break;
    }

    console.log(classs, group, today);
    const check = await ROUTINES.find({ class: classs, group: group, day: today });

    try {
        if (check) {
            res.send({ data: check });
            console.log(check.length);
        }
        else {
            res.json("failed");
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.post('/student_profile', async (req, res) => {
    const { classs, group, roll } = req.body;

    console.log(classs, group, roll)

    const check = await STUDENTS.findOne({ class: classs, group: group, roll: roll });

    try {
        if (check) {
            res.send({ data: check });
            console.log(check);
        }
        else {
            res.json("failed");
        }
    }
    catch (e) {
        console.log(e);
    }
})

//api to get subjects of the day for teacher
app.post('/get_subjects', async (req, res) => {
    const { name } = req.body;

    const d = new Date();

    let day = d.getDay();
    console.log(day)

    let today;

    switch (day) {
        case 0:
            today = "sunday";
            break;
        case 1:
            today = "monday";
            break;
        case 2:
            today = "tuesday";
            break;
        case 3:
            today = "wednesday";
            break;
        case 4:
            today = "thursday";
            break;
        default:
            today = "sunday";
            break;
    }

    console.log(name, today);
    const check = await ROUTINES.find({ teacher: name, day: today });

    try {
        if (check) {
            res.send({ data: check });
            console.log(check.length);
        }
        else {
            res.json("something wrong!");
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.post('/get_students', async (req, res) => {
    const { classs, group } = req.body;

    const check = await STUDENTS.find({ class: classs, group: group });
    console.log(classs, group);

    try {
        if (check) {
            res.send({ data: check });
            console.log(check);
        }
        else {
            res.json("failed");
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.post('/publish_result', async (req, res) => {
    const { classs, group, roll, subject, CT1, mid, CT2, final } = req.body;

    console.log(classs, group, roll, subject, CT1, mid, CT2, final)
    
    const data = {
        class: classs,
        group: group,
        roll: roll,
        subject: subject,
        CT1: CT1,
        mid: mid,
        CT2: CT2,
        final: final
    }

    const check = await RESULT.findOne({class: classs, group: group, roll: roll, subject: subject});

    try {
        if (check) {
            res.json("failed");
        }
        else {
            await RESULT.insertMany([data]);
            res.json("success");
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.post('/get_result', async (req, res) => {
    const { classs, group, roll } = req.body;

    const check = await RESULT.find({ class: classs, group: group, roll: roll });

    try {
        if (check) {
            res.send({ data: check });
            console.log(check.length);
        }
    }
    catch (e) {
        console.log(e);
    }
})



//START THE SERVER
app.listen(port, () => {
    console.log(`Our app listening on port ${port}`)
})