const controller = {
  index: (req, res) => {
    res.json({ message: "Hello controller!" });
  },
};

module.exports = {
    index: controller.index
}