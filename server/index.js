import express from "express";
import cors from "cors"; // Import the cors package

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Use the cors middleware
app.use(cors());

// POST request handler
app.post('/', (req, res) => {
    const { name, dateOfBirth, gender, bloodPressure, bmi, cholesterolLevel, previousConditions, smoking } = req.body;

    // Log the received data
    console.log('POST request received:');
    console.log('Name:', name);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Gender:', gender);
    console.log('Blood Pressure:', bloodPressure);
    console.log('BMI:', bmi);
    console.log('Cholesterol Level:', cholesterolLevel);
    console.log('Previous Conditions:', previousConditions);
    console.log('Smoking:', smoking);

    // Respond with a success message
    res.send({ message: 'Data received successfully' });
});

// GET request handler
app.get('/', (req, res) => {
    // Dummy data for demonstration
    const data = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        gender: 'male',
        // Add more fields as needed
    };

    // Log the data sent in the GET request
    console.log('GET request received:', data);

    // Respond with the dummy data
    res.send(data);
});

app.listen(8000, () => {
    console.log("Server is running");
});
