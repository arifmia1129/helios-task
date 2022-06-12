const addDb = (user) => {
    let users = [];

    const stored = localStorage.getItem("users-info");

    if (stored) {
        users = JSON.parse(stored);
    }
    else {
        users = [];
    }
    users.push(user)
    localStorage.setItem("users-info", JSON.stringify(users));
}

const storedDetails = () => {
    let users = [];

    const stored = localStorage.getItem("users-info");
    if (stored) {
        users = JSON.parse(stored);
    }
    return users;
}

export { addDb, storedDetails };