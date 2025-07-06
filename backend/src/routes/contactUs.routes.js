import express from 'express';
import {
    getContactUsData,
    insertHelpingDetails,
    deleteHelpingDetailsWithMainHeading,
    deleteAllHelpingDetails,
    changeAddressDetailsHeading,
    changeAddressDetailsAddressLines,
    deleteAddressDetailsAddressLines,
    changeAddressDetailsContactLines,
    deleteAddressDetailsContactLines,
} from '../controllers/contactUs.controller.js';

const router = express.Router();

router.get('/data', getContactUsData);
router.post('/insert/hd', insertHelpingDetails);
router.delete('/main-heading/:mainHeading', deleteHelpingDetailsWithMainHeading);
router.delete('/hd/all', deleteAllHelpingDetails);

router.patch('/ad/heading', changeAddressDetailsHeading);
router.patch('/ad/address', changeAddressDetailsAddressLines);
router.delete('/ad/address', deleteAddressDetailsAddressLines);

router.patch('/ad/contact', changeAddressDetailsContactLines);
router.delete('/ad/contact', deleteAddressDetailsContactLines);

export default router;
