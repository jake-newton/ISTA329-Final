window.addEventListener("DOMContentLoaded", function () {
   /*
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);
   });
   */
});

function fetchQuotes(topic, count) {
   /*
   let xmlRequest = new XMLHttpRequest();
   xmlRequest.responseType = "json";
   xmlRequest.addEventListener("load", responseReceivedHandler);
   xmlRequest.open("GET", "https://wp.zybooks.com/quotes.php?topic="+topic+"&count="+count);
   xmlRequest.send();
   */
}

function responseReceivedHandler() {
   /*
   let fullQuotes = this.response;
   if (!fullQuotes["error"]) {
      let html = "<ol>";
      for(let i = 0; i < fullQuotes.length; i++){
         html += `<li>`+fullQuotes[i].quote+' - '+fullQuotes[i].source+`</li>`;
      }
      html += "</ol>";
      document.querySelector("#quotes").innerHTML = html;
   } else {
      let html = fullQuotes["error"];
      document.querySelector("#quotes").innerHTML = html;
   }
   */
}