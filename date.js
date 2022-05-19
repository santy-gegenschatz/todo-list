module.exports = getDate; // Without the parenthesis
function getDate() {
    let today = new Date();
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    today = today.toLocaleDateString("en-US", options);
    return today
}