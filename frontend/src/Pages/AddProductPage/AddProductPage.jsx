import React, { useState } from "react";
import "./AddProductPage.css";
import * as XLSX from "xlsx";
import Papa from "papaparse";

// Fake categories
const fakeCategories = {
    Clothing: ["T-Shirts", "Shirts", "Jeans"],
    Footwear: ["Sneakers", "Boots", "Sandals"],
    Accessories: ["Watches", "Belts", "Sunglasses"],
};

const AddProductPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        originalPrice: "",
        image: "",
        moreImages: "",
        gender: "",
        discount: "",
        colors: "",
        sizes: "",
        outOfStockSize: "",
        lowStockSize: "",
        offer: "",
        productDescription: "",
        categories: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (category) => {
        setFormData((prev) => {
            const exists = prev.categories.includes(category);
            const updated = exists
                ? prev.categories.filter((cat) => cat !== category)
                : [...prev.categories, category];
            return { ...prev, categories: updated };
        });
    };

    const handleJSONUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target.result);
                console.log("JSON Data:", json);
                alert("JSON file uploaded!");
            } catch (error) {
                alert("Invalid JSON file.");
                console.log(error);
            }
        };
        reader.readAsText(file);
    };

    const handleCSVUpload = (e) => {
        const file = e.target.files[0];
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                console.log("CSV Data:", result.data);
                alert("CSV file uploaded!");
            },
        });
    };

    const handleExcelUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const workbook = XLSX.read(event.target.result, { type: "binary" });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const data = XLSX.utils.sheet_to_json(sheet);
            console.log("Excel Data:", data);
            alert("Excel file uploaded!");
        };
        reader.readAsBinaryString(file);
    };

    const handleSubmit = () => {
        const processedData = {
            ...formData,
            colors: formData.colors.split(",").map((c) => c.trim()),
            sizes: formData.sizes.split(",").map((s) => s.trim()),
            moreImages: formData.moreImages.split(",").map((img) => img.trim()),
        };
        console.log("Final Product Data:", processedData);
        // Send to backend here
    };

    return (
        <div className="add-product-page-main">
            <div className="add-product-page-container">
                <h2 className="add-product-page-title">Add New Product</h2>

                <div className="add-product-page-multi-upload">
                    <label>
                        Upload JSON File  :
                        <input type="file" accept=".json" onChange={handleJSONUpload} />
                    </label>

                    <label>
                        Upload CSV File  :
                        <input type="file" accept=".csv" onChange={handleCSVUpload} />
                    </label>

                    <label>
                        Upload Excel File (.xlsx)  :
                        <input type="file" accept=".xlsx" onChange={handleExcelUpload} />
                    </label>
                </div>

                <div className="add-product-page-form">
                    {[
                        ["Name: (Printed micky-mouse t-shirt for Women) or (Plain blue t-shirt for Men)", "name"],
                        ["Price", "price"],
                        ["Original Price", "originalPrice"],
                        ["Main Image URL", "image"],
                        ["More Images: (img1,img2)", "moreImages"],
                        ["Gender: (male,female,unisex)", "gender"],
                        ["Discount", "discount"],
                        ["Colors: (red,green,blue)", "colors"],
                        ["Sizes: (S,M,L)", "sizes"],
                        ["Out of Stock Size", "outOfStockSize"],
                        ["Low Stock Size", "lowStockSize"],
                        ["Offer", "offer"],
                    ].map(([label, name]) => (
                        <label key={name}>
                            {label}:
                            <input
                                name={name}
                                value={formData[name]}
                                onChange={handleInputChange}
                            />
                        </label>
                    ))}

                    <label>
                        Product Description:
                        <textarea
                            name="productDescription"
                            value={formData.productDescription}
                            onChange={handleInputChange}
                        />
                    </label>

                    <div className="add-product-page-category-dropdown">
                        <span>Categories:</span>
                        {Object.entries(fakeCategories).map(([type, list]) => (
                            <div key={type} className="add-product-page-category-dropdown-item">
                                <strong>{type}</strong>
                                <div className="add-product-page-checkbox-group">
                                    {list.map((cat) => (
                                        <label key={cat} className="add-product-page-checkbox-item">
                                            <input
                                                type="checkbox"
                                                checked={formData.categories.includes(cat)}
                                                onChange={() => handleCheckboxChange(cat)}
                                            />
                                            {cat}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="add-product-page-submit"
                        onClick={handleSubmit}
                    >
                        Submit Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
