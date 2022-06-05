const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion} = require('mongodb');
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json())
//Dashboard
//V0tf5N2ga9TWC5V7



const uri = "mongodb+srv://Dashboard:V0tf5N2ga9TWC5V7@cluster0.dctmt.mongodb.net/?retryWrites=true&w=majority";
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const chartCollection = client.db('dashboard').collection('chart');

        app.get('/chart', async (req, res) => {
            const query = {};
            const cursor = chartCollection.find(query);
            const list = await cursor.toArray();
            res.send(list);
        });

      


    }
    finally {

    }
}

run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Dashboard server Running')
})

app.listen(port, () => {
    console.log('Dashboard server Running ');
})