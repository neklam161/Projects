// a express server handle api request and respond back with a json object
const OpenAI= require('openai');
const { Configuration, OpenAIApi } = OpenAI;


const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const port=3001;

const configuration = new Configuration({
    organization: "org-sqBGp1w5mH3bHWHfO9ckew9g",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);


app.use(bodyParser.json());
app.use(cors());

app.post('/',async (req,res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pretend you are Steve Jobs. Answer with motivational
        content.
    Steve: How can I help you today?
    Person: I want some motivation.
    Steve: You are amazing, you can create any type of business you want.
    Person: ${message}?
    Steve:`,
        max_tokens: 100,
        temperature: 0,
      });
      console.log(response.data.choices)
      if (response.data){
        if (response.data.choices){
            res.json({
                message:response.data.choices[0].text
              });
        }
      }
      
});


app.listen(port,() =>{
    console.log(`Example app listening on port http://localhost:${port}`)
});