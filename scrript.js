// Function to load chapter content
function loadChapter(chapterFile) {
    fetch(chapterFile)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.text();
      })
      .then(data => {
        document.getElementById('main-content').innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading chapter:", error);
        alert("Failed to load chapter content.");
      });
  }
  
  // Function to add new content dynamically
  function addNewContent() {
    const content = `
      <div class="container">
        <h2>New Content</h2>
        <p>This is new content added dynamically.</p>
        <button class="btn btn-secondary mt-3" onclick="location.reload()">Back to Chapters</button>
      </div>
    `;
    document.getElementById('main-content').innerHTML = content;
  }
  