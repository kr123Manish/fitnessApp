const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cors = require("cors");
const uuid = require("uuid");
const app = express();

app.use(cors());
app.set('view engine', 'ejs', 'cors');

app.use(bodyParser.json());

app.use(express.static("public"));
mongoose.connect("mongodb+srv://Group:<password>@api-cluster.dnb3xm9.mongodb.net/FitnessAppDb", {
    useNewUrlParser: "true",
});

mongoose.connection.on("error", err => {
    console.log("err", err)
});

mongoose.connection.on("connected", (err, res) => {
    console.log("Database is connected");
});

const fitnessProgramesSchema = new mongoose.Schema({
    ProgramId: { type: String, unique: true, required: true },
    ProgramName: { type: String, maxlength: 64 },
    Exercises: { type: Array },
});

const exercisesSchema = new mongoose.Schema({
    ExerciseId: { type: String, unique: true, required: true },
    ExerciseName: { type: String, maxlength: 128 },
    ExerciseLength: { type: Number },
});

const fitnessProgramesModel = mongoose.model("fitnessProgrames", fitnessProgramesSchema);
const exercisesModel = mongoose.model("exercises", exercisesSchema);


app.get("/exercises/getExercises", async (req, res) => {
    try {
        const result = await exercisesModel.find();
        if (result.length > 0) {
            res.send(result);
        } else {
            res.status(404).send('Exercises Not found.');
        }

    } catch (err) {
        console.log(err);
        res.status(500).send('Server side error.');
    }
});

app.post("/exercises/addExercise", async (req, res) => {
    try {

        const new_exercise = new exercisesModel({
            'ExerciseId': uuid.v4(),
            'ExerciseName': req.body.ExerciseName,
            'ExerciseLength': req.body.ExerciseLength
        });
        const result = await new_exercise.save();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server side error.');
    }
});

app.delete("/exercises/deleteExercise", async (req, res) => {
    const ExerciseId = req.body.ExerciseId;
    try {
        const result = await exercisesModel.deleteOne({ "ExerciseId": ExerciseId });
        if (result.deletedCount === 0) {
            return res.status(404).send('Exercise not found');
        }
        return res.status(200).send({
            "status": true
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server side error.');
    }
});

app.get("/fitnessProgrames/getfitnessProgrames", async (req, res) => {
    try {
        const result = await fitnessProgramesModel.find();
        let data = [];
        if (result.length > 0) {
            
            for (let i = 0; i < result.length; i++) {
                let exercises = [];
                for (let j = 0; j < result[i].Exercises.length; j++) {
                    //    console.log(result[i].Exercises[j]);
                    const exercise = await exercisesModel.findOne({ "ExerciseId": result[i].Exercises[j] });
                    exercises.push(exercise);
                    // console.log(exercises);
                };
                // console.log(exercises);
                data.push({
                    'ProgramId': result[i].ProgramId,
                    'ProgramName': result[i].ProgramName,
                    'Exercises': exercises
                })

            }
            res.send(data);
        } else {
            res.status(404).send('fitnessProgrames Not found.');
        }

    } catch (err) {
        console.log(err);
        res.status(500).send('Server side error.');
    }
});

app.post("/fitnessProgrames/addfitnessProgrames", async (req, res) => {
    try {

        const new_program = new fitnessProgramesModel({
            'ProgramId': uuid.v4(),
            'ProgramName': req.body.ProgramName,
            'Exercises': req.body.Exercises
        });
        const result = await new_program.save();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server side error.');
    }
});

app.delete("/fitnessProgrames/deletefitnessProgrames", async (req, res) => {
    const ProgramId = req.body.ProgramId;
    try {
        const result = await fitnessProgramesModel.deleteOne({ "ProgramId": ProgramId });
        if (result.deletedCount === 0) {
            return res.status(404).send('Program not found');
        }
        return res.status(200).send({
            "status": true
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server side error.');
    }
});

app.patch("/fitnessProgrames/updatefitnessProgrames/:ProgramId", async (req, res) => {

    try {
        const ProgramId = req.params.ProgramId;
        const patch = req.body;

        const updatedPragrame = await fitnessProgramesModel.findOneAndUpdate(
            { 'ProgramId': ProgramId },
            { $set: patch },
            { new: true }
        );

        if (!updatedPragrame) {
            return res.status(404).json({ error: 'Pragrame not found' });
        }

        res.status(200).json(updatedPragrame);

    } catch (err) {
        console.log(err);
        res.status(500).send('Server side error.');
    }
})
app.listen(process.env.PORT || 3000, function () {
    console.log("Server started at http://localhost:3000/");
})