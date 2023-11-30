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

let timerId = setTimeout(showSale, 3000);

function showSale() {
   let popup = document.getElementById("popup");
   popup.style.display = "block";
}
