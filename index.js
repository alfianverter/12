"use strict";

const Dingy = require("di-ngy");
const commands = require("./lib/commands");
const onInit = require("./lib/events/onInit");
const onConnect = require("./lib/events/onConnect");
const onMessage = require("./lib/events/onMessage");

const config = {
    token: process.env.DISCORD_TOKEN_STABLE,
    prefix: "$",
    dataPersisted: {
        dir: "./data/",
        files: [
            "lisa",

            "tag_storage",

            "pokemon_abilities",
            "pokemon_items",
            "pokemon_moves",
            "pokemon_pokedex",
            "pokemon_typechart",
            "pokemon_format"
        ]
    },
    roles: [
        {
            name: "Admin",
            power: 10,
            assignable: false,
            check: msg =>
                [
                    "128985967875850240" //Nobo
                ].includes(msg.author.id)
        },
        {
            name: "Trusted",
            power: 10,
            assignable: false,
            check: msg =>
                [
                    "178470784984023040", //Niklas
                    "236226432970391556", //Lilla
                    "80403171238748160", //Fraw
                    "78541183818674176" //Squas
                ].includes(msg.author.id)
        },
        {
            name: "User",
            power: 1,
            assignable: true,
            check: () => true
        }
    ],
    options: {
        logLevel: "verbose"
    }
};

const bot = new Dingy(
    config,
    commands,
    {},
    {
        onInit,
        onConnect,
        onMessage
    }
);

bot.connect();
