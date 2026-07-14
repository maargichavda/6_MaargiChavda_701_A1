function chatbot(question) {

    switch (question.toLowerCase()) {

        case "course":
            return "MSc IT";

        case "college":
            return "JP Dawar Institute";

        case "university":
            return "Veer Narmad South Gujarat University";

        case "fees":
            return "Fees are approximately Rs. 30,000 per year.";

        default:
            return "Sorry! I don't know the answer.";
    }
}

module.exports = chatbot;