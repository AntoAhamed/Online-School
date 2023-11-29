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
    CT2: { type: Number, default: 0 },
    final: { type: Number }
});

const RESULT = mongoose.model('results', resultSchema);

const feedbackSchema = new mongoose.Schema({
    class: { type: Number },
    group: { type: String },
    roll: { type: String },
    feedback: { type: String },
    name: { type: String },
    contact: { type: String },
    email: { type: String },
    reply: [{ type: String }]
});

const FEEDBACK = mongoose.model('feedbacks', feedbackSchema);

const attendanceSchema = new mongoose.Schema({
    class: { type: Number },
    group: { type: String },
    roll: { type: String },
    date: { type: String }
});

const ATTENDANCE = mongoose.model('attendances', attendanceSchema);

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
    }

    if (type === "parent") {
        tmpType = "parent";

        const data = {
            usernameOfP: username,
            passwordOfP: password
        }

        check = await STUDENTS.findOne(data);
    }

    if (type === "teacher") {
        tmpType = "teacher";

        const data = {
            username: username,
            password: password
        }

        check = await TEACHERS.findOne(data);
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

    const check = await ROUTINES.find({ class: classs, group: group, day: today });

    try {
        if (check) {
            res.send({ data: check });
        }
        else {
            res.json("failed");
        }
    }
    catch (e) {
        console.log(e);
    }
})

//api to get student
app.post('/student_profile', async (req, res) => {
    const { classs, group, roll } = req.body;

    const check = await STUDENTS.findOne({ class: classs, group: group, roll: roll });

    try {
        if (check) {
            res.send({ data: check });
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

    const check = await ROUTINES.find({ teacher: name, day: today });

    try {
        if (check) {
            res.send({ data: check });
        }
        else {
            res.json("something wrong!");
        }
    }
    catch (e) {
        console.log(e);
    }
})

//api to get students
app.post('/get_students', async (req, res) => {
    const { classs, group } = req.body;

    const check = await STUDENTS.find({ class: classs, group: group });

    try {
        if (check) {
            res.send({ data: check });
        }
        else {
            res.json("failed");
        }
    }
    catch (e) {
        console.log(e);
    }
})

//api to publish result
app.post('/publish_result', async (req, res) => {
    const { classs, group, tmpRoll, subject, CT1, mid, CT2, final } = req.body;

    let data;

    if (classs == 10) {
        data = {
            class: classs,
            group: group,
            roll: tmpRoll,
            subject: subject,
            CT1: CT1,
            mid: mid,
            CT2: 0,
            final: final
        }
    } else {
        data = {
            class: classs,
            group: group,
            roll: tmpRoll,
            subject: subject,
            CT1: CT1,
            mid: mid,
            CT2: CT2,
            final: final
        }
    }

    const check = await RESULT.findOne({ class: classs, group: group, roll: tmpRoll, subject: subject });

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

//api to get results
app.post('/get_result', async (req, res) => {
    const { classs, group, roll } = req.body;

    const check = await RESULT.find({ class: classs, group: group, roll: roll });

    try {
        if (check) {
            res.send({ data: check });
        }
    }
    catch (e) {
        console.log(e);
    }
})

//api to post feedback
app.post('/post_feedback', async (req, res) => {
    const { classs, group, roll, feedback, T_name, T_contact, T_email } = req.body;

    const data = {
        class: classs,
        group: group,
        roll: roll,
        feedback: feedback,
        name: T_name,
        contact: T_contact,
        email: T_email
    }

    try {
        await FEEDBACK.insertMany([data]);
        res.json("success");
    }
    catch (e) {
        console.log(e);
    }
})

//api to get feedbacks
app.post('/get_feedbacks', async (req, res) => {
    const { classs, group, roll } = req.body;

    const check = await FEEDBACK.find({ class: classs, group: group, roll: roll });

    try {
        if (check) {
            res.send({ data: check });
        }
    }
    catch (e) {
        console.log(e);
    }
})

//api to get teachers feedbacks
app.post('/get_teacher_feedbacks', async (req, res) => {
    const { classs, group, roll, T_name } = req.body;

    const check = await FEEDBACK.find({ class: classs, group: group, roll: roll, name: T_name });

    try {
        if (check) {
            res.send({ data: check });
        }
    }
    catch (e) {
        console.log(e);
    }
})

//api to give attendance
app.post('/attendance', async (req, res) => {
    const { classs, group, roll, value } = req.body;

    const d = new Date();

    const date = d.toLocaleDateString();

    const data = {
        class: classs,
        group: group,
        roll: roll,
        date: date
    }

    const check = await ATTENDANCE.findOne({ class: classs, group: group, roll: roll, date: date });

    const student = await STUDENTS.findOne({ class: classs, group: group, roll: roll });

    var total = student.total;
    var present = student.present;
    var absent = student.absent;

    try {
        if (!check) {
            total++;
            if (value === "present") {
                present++;
            }
            if (value === "absent") {
                absent++;
            }
            await ATTENDANCE.insertMany([data]);
            await STUDENTS.updateOne({ class: classs, group: group, roll: roll }, { $set: { total: total, present: present, absent: absent } });
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

//api to post reply
app.post('/setreply', async (req, res) => {
    const { id, reply } = req.body;

    let feedback = await FEEDBACK.findOne({ _id: id })

    var allReply = feedback.reply
    allReply.push(reply)

    console.log(reply)
    console.log(allReply)

    try {
        await FEEDBACK.updateOne({ _id: id }, { $set: { reply: allReply } });
        res.json("success");
    }
    catch (e) {
        console.log(e);
    }
})

//write next apis from here...

//api to get result of student for teacher
app.post('/get_result_for_teacher', async (req, res) => {
    const { classs, group, tmpRoll, subject } = req.body;

    const check = await RESULT.findOne({ class: classs, group: group, roll: tmpRoll, subject: subject });

    try {
        if (check) {
            res.send({ data: check });
        } else {
            res.json("failed");
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.get('/get_full_results', async (req, res) => {
    const check = await RESULT.find();

    try {
        if (check) {
            res.send({ data: check });
        } else {
            res.json("failed");
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