import mongoose from 'mongoose';

const ContactUsSchema = new mongoose.Schema({
    helpData: [
        {
            mainHeading: { type: String, required: true },
            subHeadings: [
                {
                    title: { type: String, required: true },
                    details: [String], // List of strings per sub-heading
                },
            ],
        },
    ],
    addressDetails: {
        heading: { type: String },
        AddressLines: [String],
        contactLines: [
            {
                startingLine: String,
                highlightLine: String,
                endingLine: String,
            },
        ],
    },
});

const ContactUs = mongoose.model('ContactUs', ContactUsSchema);
export default ContactUs;
