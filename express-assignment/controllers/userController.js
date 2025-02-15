const users = [];

exports.getUsers = (req, res) => {
    res.json(users);
};

exports.createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = users.find(u => u.id == id);
    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(u => u.id == id);
    if (index !== -1) {
        users.splice(index, 1);
        res.json({ message: "User deleted" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
};


