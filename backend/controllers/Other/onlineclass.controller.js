const Onlineclass = require("../../models/Other/onlineclass.model");

const addResource = async (req, res) => {
  try {
    const { title, link } = req.body;
    const newResource = new Onlineclass({ title, link });
    await newResource.save();
    res.json({ success: true, message: 'Resource added successfully' });
  } catch (error) {
    console.error('Error adding resource:', error);
    res.status(500).json({ success: false, message: 'Failed to add resource' });
  }
};

const getAllResources = async (req, res) => {
  try {
    const resources = await Onlineclass.find();
    res.json({ success: true, resources });
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch resources' });
  }
};

module.exports = { addResource, getAllResources };
