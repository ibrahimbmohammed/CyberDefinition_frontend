document
  .querySelector(".contact1-form-btn")
  .addEventListener("submit", postData);

function postData(event) {
  //event.preventDefault();

  let author = document.getElementById("author").value;
  let body = document.getElementById("body").value;
  let definition = document.getElementById("definition").value;
  let goals = document.getElementById("goals").value;
  let link = document.getElementById("link").value;
  let reference = document.getElementById("reference").value;
  let year = document.getElementById("year").value;

  fetch(
    "https://cors-anywhere.herokuapp.com/https://europe-west1-cybersecurity-def-api.cloudfunctions.net/api/definations",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: author,
        body: body,
        definition: definition,
        goals: goals,
        link: link,
        reference: reference,
        year: year,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("pain").reset();
      return console.log(data);
    })
    .catch((err) => console.log(err));
}
