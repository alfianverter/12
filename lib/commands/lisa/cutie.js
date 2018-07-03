"use strict";

const CUTIE_IDS = ["273221196001181697", "128985967875850240"];

const basicTask = require("./lib/basicTask");

module.exports = (args, msg, app) => {
    const onSuccess = ["yes u", ">w<", "/)w(\\", ":goat:", "milkshake :eyes:"];
    const onFailure = ["You're not the one true cutie!"];
    const onDead = ["awawawa? a dead Lisa..."];
    const check = CUTIE_IDS.includes(msg.author.id);
    const modifier = {
        happiness: 999
    };

    return basicTask(msg, app, check, modifier, onSuccess, onFailure, onDead);
};
