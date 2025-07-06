import React, { useState } from "react";
import "./businessAccountCreationPage.css";

const BusinessAccountCreationPage = ({ onSubmit, initialData = {} }) => {
  const [form, setForm] = useState({
    businessId: initialData.businessId || "",
    businessName: initialData.businessName || "",
    businessLogo: initialData.businessLogo || "",
    businessBanner: initialData.businessBanner || "",
    description: initialData.description || "",
    website: initialData.socialLinks?.website || "",
    instagram: initialData.socialLinks?.instagram || "",
    facebook: initialData.socialLinks?.facebook || "",
    twitter: initialData.socialLinks?.twitter || "",
    status: initialData.status || "Pending",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...form,
      socialLinks: {
        website: form.website,
        instagram: form.instagram,
        facebook: form.facebook,
        twitter: form.twitter,
      },
    };
    onSubmit(finalData);
  };

  return (
    <div className="business-account-page-container">
      <h2>{initialData.businessId ? "Edit Brand" : "Create New Brand"}</h2>
      <form onSubmit={handleSubmit} className="business-account-form">
        <label>
          Business ID:
          <input
            name="businessId"
            value={form.businessId}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Business Name:
          <input
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Logo URL:
          <input
            name="businessLogo"
            value={form.businessLogo}
            onChange={handleChange}
          />
        </label>

        <label>
          Banner URL:
          <input
            name="businessBanner"
            value={form.businessBanner}
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </label>


        <label>
          Website:
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
          />
        </label>

        <label>
          Instagram:
          <input
            name="instagram"
            value={form.instagram}
            onChange={handleChange}
          />
        </label>

        <label>
          Facebook:
          <input
            name="facebook"
            value={form.facebook}
            onChange={handleChange}
          />
        </label>

        <label>
          Twitter:
          <input
            name="twitter"
            value={form.twitter}
            onChange={handleChange}
          />
        </label>

        <label>
          Status:
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>

        <button type="submit" className="business-account-submit-btn">
          {initialData.businessId ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default BusinessAccountCreationPage;
