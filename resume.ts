
function toggleProjects() {
 
  const toggleProjectDiv = document.getElementById('toggle-project') as HTMLDivElement | null;
// Add a null check
  if (toggleProjectDiv) {
      if (toggleProjectDiv.style.display === 'none' || toggleProjectDiv.style.display === '') {
          toggleProjectDiv.style.display = 'block';
      } else {
          toggleProjectDiv.style.display = 'none';
      }
  } else {
      console.warn("Element with ID 'toggle-project' not found.");
  }
}
