import { create } from "zustand";
import { axiosInstance } from "../../lib/axios.js";
import { toast } from "react-hot-toast";

export const useWebContactUsStore = create((set,get) => ({
    helpData: [
        {
            mainHeading: 'Orders, Delivery & Payment',
            subHeadings: [
                {
                    title: 'Orders',
                    details: ['How do I check the status of my order?', 'Can I change my delivery address after placing an order?'],
                },
                {
                    title: 'Delivery',
                    details: ['When will my order be delivered?', 'Can I choose my delivery time?'],
                },
                {
                    title: 'Payment',
                    details: ['What payment methods are accepted?', 'Why was my payment declined?'],
                },
            ],
        },
        {
            mainHeading: 'Cancellations',
            subHeadings: [
                {
                    title: 'Order Cancellation',
                    details: ['How do I cancel an order?', 'Can I cancel part of my order?'],
                },
            ],
        },
        {
            mainHeading: 'Refunds & Returns',
            subHeadings: [
                {
                    title: 'Returns',
                    details: ['How do I return a product?', 'What is your return policy?'],
                },
                {
                    title: 'Refunds',
                    details: ['When will I receive my refund?', 'Where will the refund be credited?'],
                },
            ],
        },
        {
            mainHeading: 'My Account',
            subHeadings: [
                {
                    title: 'Account Info',
                    details: ['How to update my email or phone number?', 'I forgot my password, what do I do?'],
                },
            ],
        },
    ],
    addressDetails: {
        heading: 'Corporate Address :',
        AddressLines: [
            'Bewakoof Brands Pvt. Ltd.',
            'WeWorks Chromium,',
            '3rd Floor, B114-116,',
            'Next to L&T Flyover, Jogeshwari Vikhroli Link Road,',
            'Andheri (East) Mumbai, Maharashtra, 400076',
        ],
        contactLines: [
            {
                startingLine: 'You can reach us at',
                highlightLine: 'care@bewakoof.com',
                endingLine: "with all queries"
            },
            {
                startingLine: 'Our mobile No.',
                highlightLine: '893892582',
                endingLine: "for contact us"
            },
        ],
    },
    contactUsData: null,
    isLoading: false,

    // ✅ GET contact us data
    getContactUsData: async () => {
        set({ isLoading: true });
        try {
            const res = await axiosInstance.get('/api/contact-us/data');
            set({ contactUsData: res.data });
        } catch (err) {
            console.error('Fetch contact us data failed:', err);
            toast.error('Failed to load contact data');
        } finally {
            set({ isLoading: false });
        }
    },

    // ✅ INSERT a new main heading with sub-headings
    insertHelpingDetails: async (payload) => {
        try {
            await axiosInstance.post('/api/contact-us/insert/hd', payload);
            toast.success('Helping section added');
            get().getContactUsData();
        } catch (err) {
            console.error(err);
            toast.error('Insert failed');
        }
    },

    // ✅ DELETE a main heading
    deleteHelpingDetailsWithMainHeading: async (mainHeading) => {
        try {
            await axiosInstance.delete(`/api/contact-us/main-heading/${mainHeading}`);
            toast.success('Main heading deleted');
            get().getContactUsData();
        } catch (err) {
            console.error(err);
            toast.error('Deletion failed');
        }
    },

    // ✅ DELETE all helpData
    deleteAllHelpingDetails: async () => {
        try {
            await axiosInstance.delete('/api/contact-us/hd/all');
            toast.success('All help data cleared');
            get().getContactUsData();
        } catch (err) {
            console.error(err);
            toast.error('Deletion failed');
        }
    },

    // ✅ UPDATE address heading
    changeAddressDetailsHeading: async (heading) => {
        try {
            await axiosInstance.patch('/api/contact-us/ad/heading', { heading });
            toast.success('Address heading updated');
            get().getContactUsData();
        } catch (err) {
            console.error(err);
            toast.error('Update failed');
        }
    },

    // ✅ UPDATE address lines
    changeAddressDetailsAddressLines: async (lines) => {
        try {
            await axiosInstance.patch('/api/contact-us/ad/address', { lines });
            toast.success('Address lines updated');
            get().getContactUsData();
        } catch (err) {
            console.error(err);
            toast.error('Update failed');
        }
    },

    // ✅ DELETE address lines
    deleteAddressDetailsAddressLines: async () => {
        try {
            await axiosInstance.delete('/api/contact-us/ad/address');
            toast.success('Address lines deleted');
            get().getContactUsData();
        } catch (err) {
            console.error(err);
            toast.error('Deletion failed');
        }
    },

    // ✅ UPDATE contact lines
    changeAddressDetailsContactLines: async (contactLines) => {
        try {
            await axiosInstance.patch('/api/contact-us/ad/contact', { contactLines });
            toast.success('Contact lines updated');
            get().getContactUsData();
        } catch (err) {
            console.error(err);
            toast.error('Update failed');
        }
    },

    // ✅ DELETE contact lines
    deleteAddressDetailsContactLines: async () => {
        try {
            await axiosInstance.delete('/api/contact-us/ad/contact');
            toast.success('Contact lines deleted');
            get().getContactUsData();
        } catch (err) {
            console.error(err);
            toast.error('Deletion failed');
        }
    },

}));
