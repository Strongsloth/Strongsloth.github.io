let buttonTextList = [];
let maxLength = 100
let length = 5

function addTo() {
    let textarea = document.getElementById("textContent");
    let textareaValue = textarea.value.trim();

    if (textareaValue === '') {
        window.alert("Please enter text in the text area!");
    } else if (textareaValue.length < length) {
        window.alert(`You have not allotted the minimum ${length} characters requirements.`);
    } else if (buttonTextList.length >= maxLength) {
        window.alert(`You have allotted the maximum ${maxLength} entries allowed.\nReload this page to clear unsaved data.`);
    } else {
        buttonTextList.push(textareaValue);
        let listString = buttonTextList.join("\n");
        document.getElementById("listD").innerText = listString;
    }
}

