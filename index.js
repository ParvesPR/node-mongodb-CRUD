const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mongodb

const uri = "mongodb+srv://dbuser:FSVHHKsjImVSDSLB@cluster0.z9ugs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db('mealExpress').collection('user');

        app.post('/', (req, res) => {
            const newUser = req.body;
            console.log('user sending', newUser);
            res.send('received')
        })

    }

    finally {

    }

}
run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('CRUD running node server')
});

app.listen(port, () => {
    console.log('running CRUD')
});