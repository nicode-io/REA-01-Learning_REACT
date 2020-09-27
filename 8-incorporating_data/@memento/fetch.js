// Fetch
    const fetch = require("node-fetch");

    fetch(`https://api.github.com/users/nicode-io`)
        .then(response => response.json())
        .then(console.log)
        .catch(console.error)

// Async fetch
    async function requestGihubUser(githubLogin) {
        try {
            const response = await fetch(
                `https://api.github.com/users/${githubLogin}`
            );
            const userData = await response.json();
            console.log(userData);
        } catch (error) {
            console.error(error)
        }
    }

// Uploading files with fetch
    // const formData = new FormData();
    // formData.append("username", "moontahoe");
    // formData.append("fullname", "Alex Banks");
    // formData.append("avatar", imgFile);

    // fetch("/create/user", {
    //     method: "POST",
    //     body: formData
    // });

// Authorized requests
    // fetch(`https://api.github.com/users/${login}`, {
    //     method: "GET",
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // });

