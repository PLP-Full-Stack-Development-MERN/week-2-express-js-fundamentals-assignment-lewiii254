const products = [];

exports.getProducts = (req, res) => {
    res.json(products);
};

exports.createProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const product = products.find(p => p.id == id);
    if (product) {
        product.name = name || product.name;
        product.price = price || product.price;
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(p => p.id == id);
    if (index !== -1) {
        products.splice(index, 1);
        res.json({ message: "Product deleted" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};
