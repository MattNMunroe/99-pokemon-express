const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
    res.send(
        `<h1> 99 little bugs in the code </h1> <a href="/bugs/101">Pull one down, patch it around</a>`
        );
    });
    
    app.get("/bugs/:numberOfBugs", (req, res) => {
        const { numberOfBugs } = req.params;
        let bugsAsNumber = Number(numberOfBugs);
        
        if (bugsAsNumber >= 200) {
            res.send(`
            <h1>${bugsAsNumber} little bugs in the code</h1>
            <a href="/bugs">Too many bugs!! Start over!</a>
            `);
        } else {
            res.send(`<h1>${bugsAsNumber} little bugs in the code</h1>
            <a href="/bugs/${(bugsAsNumber += 2)}">Pull one down, patch it around</a>`);
        }
    });
    
    app.get("/pokemon", (req, res) => {
        res.send(pokemon);
    });
    
    app.get("/pokemon/search", (req, res) => {
        const search = req.query.name;
        let foundPokemon = pokemon.find(
            (poke) => poke.name.toLowerCase() === search.toLowerCase()
            );
            
            if (foundPokemon) {
                res.send([foundPokemon]);
            } else {
                res.send([]);
            }
        });
        
        app.get("/pokemon/:indexOfArray", (req, res) => {
            const { indexOfArray } = req.params;
            if (pokemon[indexOfArray]) {
                res.send(pokemon[indexOfArray]);
            } else {
                res.send(`Sorry, no pokemon found at ${indexOfArray}`);
            }
        });
        
        app.get("/:verb/:adjective/:noun", (req, res) => {
          const { verb, adjective, noun } = req.params;
          res.send(
            `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
          );
        });
        
        module.exports = app;
