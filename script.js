document.addEventListener("DOMContentLoaded", function () {
    const repairForm = document.getElementById("repair-form");
  
    repairForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = {
        name: document.getElementById("name").value.trim(),
        contact: document.getElementById("contact").value.trim(),
        model: document.getElementById("model").value.trim(),
        opened: document.getElementById("opened").value,
        problem: document.getElementById("problem").value.trim(),
      };
  
      fetch("submit-repair.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        repairForm.reset();
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Try again.");
      });
    });
  });
  