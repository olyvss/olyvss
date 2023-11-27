 function sendRequest() {
      const usernameInput = document.getElementById('userInput');
      const username = usernameInput.value;

      const apiUrl = `https://api.mojang.com/users/profiles/minecraft/${username}`;


      const xhr = new XMLHttpRequest();
      xhr.open('GET', apiUrl);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const responseDiv = document.getElementById('response');
          const responseData = JSON.parse(xhr.responseText);

          const uuid = responseData.id;
          responseDiv.innerHTML = `UUID for username '${username}': ${uuid}`;
        } else {
          console.error('Error:', xhr.statusText);
        }
      };
      xhr.send();
    }
