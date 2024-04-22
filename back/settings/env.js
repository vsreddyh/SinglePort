const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;
url='mongodb+srv://Project:Florencemidhebaramvesam@project.tbx2krn.mongodb.net/projectpalace'
mongoose.connect(url);

const loginSchema = new mongoose.Schema({
    student_name : String,
    email_address : String,
    password : String,
    field_name:String,
    college_name:String,
    photo:ObjectId,
    projects:[ObjectId],
    Description:String,
    skills:[String],
    Domains:[String],
    likes:[ObjectId],
},{ versionKey: false });
const collegeSchema = new mongoose.Schema({
    college_name: String,
    email_address: String,
    password:String,
  },{ versionKey: false });
const hrSchema = new mongoose.Schema({
    hr_name : String,
    photo : ObjectId,
    email_address : String,
    password : String,
    company_name:String,
    bookmarks:[ObjectId]
},{ versionKey: false });
const departmentSchema=new mongoose.Schema({
    field_name:String,
},{ versionKey: false });
const companySchema=new mongoose.Schema({
    company_name:String,
},{ versionKey: false });
const projectschema = new mongoose.Schema({
    Domain:String,
    Skills:Array,
    College:String,
    Project_Name:String,
    Likes:Number,
    Description:String,
    Date:Date,
    photo:ObjectId,
    Video:ObjectId,
    Comments:Array,
    Students:Array,
    photos:Array,
    File:ObjectId
},{ versionKey: false });
const skillSchema=new mongoose.Schema({
    skill_name:String,
},{ versionKey: false });

const Course = mongoose.model('student', loginSchema);
const recruiter = mongoose.model('head_recruiter', hrSchema);
const college=mongoose.model('college',collegeSchema);
const Department =mongoose.model('feild',departmentSchema);
const companies =mongoose.model('companie',companySchema);
const projects = mongoose.model('project',projectschema);
const skills=mongoose.model('skill',skillSchema);

module.exports = {
    EMAIL : 'freemovies5247@gmail.com',
    PASSWORD : 'btjqbzhxpulroavl',
    JWT_SECRET :  'bV5zN2xZ4vU9nW6xZ7aB1vD3kF6gH8jK',
    SESSION_KEY : '9a3jKL$#3jfk4kljg%2f7sJ@*Lmn2J7H',
    Course:Course,
    plagarismapi:'6ac8aba9fcmsh58413014b14e402p1d6408jsn839d018b7b26',
    geminiapi:'AIzaSyD4MBRVZSfaXvrvsji4Z_LRrgtPztIcOk4',
    college:college,
    Department:Department,
    projects:projects,
    recruiter:recruiter,
    companies:companies,
    skills:skills,
    url:url,
}