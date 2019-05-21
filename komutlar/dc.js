module.exports.run = (client, message, args) => {
    var v = ~~(Math.random() * 3); // 0 to 2
    var deathText = "Doğruluk\` ";
    var aliveText = "Cesaretlik\` ";
    var defaultText = "Doğruluk \`Vs\` Cesaretlik";

    message.channel.send(defaultText + "   **Doğruluk Mu?**")
        .then(msg => {
            setTimeout(function () {
                msg.edit(defaultText + "   **Cesaret Mi?**")
                    .then(msg => {
                        setTimeout(function () {
                            msg.edit(defaultText + "   **Son 1**")
                                .then(msg => {
                                    setTimeout(function () {

                                        if (v == 0) {
                                            msg.edit(deathText);
                                        } else {
                                            msg.edit(aliveText);
                                        }

                                    }, 1000);
                                });
                        }, 1000);
                    });
            }, 1000);
        })
        .catch(console.error);
};

module.exports.help = {
    name: "oyna",
    alias: ["p", "joker", "roulette"],
    permission: "default",
    type: "fun",
    guildOnly: false,
    help: "Simulate a russian roulette game so you don't die IRL by mistake."
};