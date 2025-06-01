document.getElementById('follower-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const count = document.getElementById('follower-count').value;
    const resultMessage = document.getElementById('result-message');

    // Mock response for demo purposes
    resultMessage.textContent = `Processing request to add ${count} followers to ${username}... (This is a demo!)`;
});
