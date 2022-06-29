const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const jwt=require("jsonwebtoken")
const hbs=require("hbs")
const bcrypt=require("bcrypt")
require("./db")
const app = express();
const port = process.env.PORT || 3008;

const Signin = require("./dataset_user.js")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname , "/hbsfiles/public")));

hbs.registerPartials(path.join(__dirname,"hbsfiles/partials"))
app.set("view engine", "hbs");
app.set("views",path.join(__dirname,'hbsfiles'))



app.get("/", (req, res) => {
    res.render("index");
});
app.get("/student.hbs", (req, res) => {
    res.render("student",);
})

app.get("/driver.hbs", (req, res) => {
    res.render("driver");
});
app.get("/signup.hbs", (req, res) => {
    res.render("signup");
});


app.post("/signup", async (req, res) => {
    try {
        const pw = req.body.pw;
        const re_pw = req.body.re_pw;
        // const tokencreation=async()=>{
            // const token=await  jwt.sign({_id:"global.id"},"",{expiresIn:"2 minutes"});
            // return token;
            // const verify=await jwt.verify(token,"");
        // }
        // tokencreation();
        if (pw === re_pw) { 
            const signindata = new Signin({
                dvr_stu: req.body.dvr_stu,
                name: req.body.name,
                email: req.body.email,
                mobno: req.body.mobno,
                pw :pw 

                // tokens:tokens.concat({token:token})
            });

            signuped = await signindata.save()


            res.status(201).render("index");
        }

        else {

            res.send("password not matching")
        }
    } catch (error) { res.status(400).send(error); }



})
app.post("/signin", async (req, res) => {
    try {
        const pwget = await Signin.findOne({ $or:[{email: req.body.email_mobno},{mobno:req.body.email_mobno }]});
        global.id = pwget._id
        global.name = pwget.name
        console.log("fuck off")
        const check= await bcrypt.compare(req.body.pwc,pwget.pw)
        console.log(check)
        console.log("fuck off")
        if ( check ) {
            console.log("fuckofff")
            if (pwget.dvr_stu === "student") {
                console.log("fuck off")
                const list = await Signin.find({ dvr_stu: "driver" });
                console.log("fuck off")
                let str = []
                for (let i = 0; i < list.length; i++) {
                    str[i]= list[i].ev_name + ":" + list[i].status + ' at ' + list[i].time.substr(3, 22)
                }
                console.log("fuck off")
                res.status(201).render("student", { name: pwget.name, email: pwget.email,str:str})
                console.log("fuck off")}
            else if (pwget.dvr_stu === "driver") {
                res.status(201).render("driver", { name: pwget.name })
            }
            else {
                res.send("check log credentials")
            }
        }
    }
    catch (error) {
        res.status(400).send("check loin credentials");
    }
})

app.post("/update", async (req, res) => {
    try {
        const updatedoc = async (_id) => {
            try {
                const result = await Signin.updateOne({ _id: _id }, {
                    $set: {
                        ev_name: req.body.ev_name,
                        status: req.body.status,
                        time: new Date()
                    }
                })
                console.log(result)
                res.status(201).render("driver", { name: global.name })

            }
            catch (err) {
                console.log(err)
            }
        }
        updatedoc(global.id);
    }
    catch (error) {
        res.status(400).send(error);
    }
})


app.listen(port, () => { console.log("server is running at port no", port); })