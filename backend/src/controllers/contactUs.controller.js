import ContactUs from '../models/contactUs.model.js';

// GET all data
export const getContactUsData = async (req, res) => {
  const data = await ContactUs.findOne();
  res.json(data);
};

// INSERT new helping detail
export const insertHelpingDetails = async (req, res) => {
  const { mainHeading, subHeadings } = req.body;

  let data = await ContactUs.findOne();
  if (!data) data = new ContactUs({ helpData: [], addressDetails: {} });

  data.helpData.push({ mainHeading, subHeadings });
  await data.save();

  res.json({ message: 'Main heading with sub-headings added successfully' });
};

// DELETE main-heading
export const deleteHelpingDetailsWithMainHeading = async (req, res) => {
  const { mainHeading } = req.params;

  const data = await ContactUs.findOne();
  if (!data) return res.status(404).json({ message: 'Data not found' });

  data.helpData = data.helpData.filter(item => item.mainHeading !== mainHeading);
  await data.save();

  res.json({ message: 'Main heading deleted successfully' });
};

// DELETE all helpData
export const deleteAllHelpingDetails = async (req, res) => {
  const data = await ContactUs.findOne();
  if (!data) return res.status(404).json({ message: 'Data not found' });

  data.helpData = [];
  await data.save();

  res.json({ message: 'All help data deleted' });
};

// CHANGE address heading
export const changeAddressDetailsHeading = async (req, res) => {
  const { heading } = req.body;

  const data = await ContactUs.findOne();
  if (!data) return res.status(404).json({ message: 'Data not found' });

  data.addressDetails.heading = heading;
  await data.save();

  res.json({ message: 'Address heading updated' });
};

// CHANGE address lines
export const changeAddressDetailsAddressLines = async (req, res) => {
  const { lines } = req.body; // lines: string[]

  const data = await ContactUs.findOne();
  if (!data) return res.status(404).json({ message: 'Data not found' });

  data.addressDetails.AddressLines = lines;
  await data.save();

  res.json({ message: 'Address lines updated' });
};

// DELETE all address lines
export const deleteAddressDetailsAddressLines = async (req, res) => {
  const data = await ContactUs.findOne();
  if (!data) return res.status(404).json({ message: 'Data not found' });

  data.addressDetails.AddressLines = [];
  await data.save();

  res.json({ message: 'Address lines deleted' });
};

// CHANGE contact lines
export const changeAddressDetailsContactLines = async (req, res) => {
  const { contactLines } = req.body;

  const data = await ContactUs.findOne();
  if (!data) return res.status(404).json({ message: 'Data not found' });

  data.addressDetails.contactLines = contactLines;
  await data.save();

  res.json({ message: 'Contact lines updated' });
};

// DELETE all contact lines
export const deleteAddressDetailsContactLines = async (req, res) => {
  const data = await ContactUs.findOne();
  if (!data) return res.status(404).json({ message: 'Data not found' });

  data.addressDetails.contactLines = [];
  await data.save();

  res.json({ message: 'Contact lines deleted' });
};
