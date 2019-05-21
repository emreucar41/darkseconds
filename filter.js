let oc = ["oc", "oç", "orospu çocuğu", "orospu cocugu", "orospuçocuğu", "orospuçocugu", "orspucocugu", "orspuçocugu", "orospuçocuğu", "orospucocuğu", "orospu cocugu"];
const kufur = oc;


module.exports = (message) => {
    return new Promise((resolve, reject) => {

        let smessage = message.content.split("  ");

        smessage.forEach(word => {
            if (kufur.indexOf(word.toLowerCase()) !== -1) {
                message.reply("Küfür İçeren Kelimeler Yazma!")
                message.delete();
                resolve(1);

            }
        });
        resolve(0);

    });

}