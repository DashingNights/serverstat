const express = require('express');
const app = express();
const port = 9999
app.use(express.json());
app.set('json spaces', 4);

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});

app.get('/status', function(req: any, res: any) {
    res.setHeader('Content-Type', 'application/json');
    res.json({"Server_status":"online"})
});