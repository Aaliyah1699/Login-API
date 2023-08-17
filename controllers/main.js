const login = async (req, res) => {
  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello `,
    secret: `Here is your authorized data, yor lucky number ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
