const checkBodyMiddle = (req, res, next) => {
  const { name, team } = req.body;
  if (!name || !team) {
    return res.status(400).json({ message: "Please enter a name and a team." });
  }
  next();
};

module.exports = {
  checkBodyMiddle,
};
