const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ msg: "All fields required" });
    }

    if (mobile.length !== 10) {
      return res.status(400).json({ msg: "Mobile must be 10 digits" });
    }

    const newMsg = new Message({ name, email, mobile, message });
    await newMsg.save();

    res.json({ msg: "Message saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
