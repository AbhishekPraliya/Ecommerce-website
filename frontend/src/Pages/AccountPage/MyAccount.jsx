// MyAccount.jsx
import './MyAccount.css';
import {
    LogOut, User, CreditCard, Wallet, MapPin, HelpCircle, Shirt, BookOpen, Users
} from 'lucide-react';
import alternativeProfileImg from "../../assets/alternative-profile-image.png"
import { useAuth0 } from "@auth0/auth0-react";

const MyAccount = () => {
    const {user,logout} = useAuth0();
    const firstLetter = user?.name?.charAt(0).toUpperCase();
    const userData = {
        phone: "7206273890",
    };
    
    const boxes = [
        { icon: <Shirt />, title: "My Orders", desc: "View, Modify And Track Orders" },
        { icon: <CreditCard />, title: "My Payments", desc: "View And Modify Payment Methods" },
        { icon: <Wallet />, title: "My Wallet", desc: "My Wallet History And Redeemed Gift Cards" },
        { icon: <MapPin />, title: "My Addresses", desc: "Edit, Add Or Remove Addresses" },
        { icon: <User />, title: "My Profile", desc: "Edit Personal Info And Change Password" },
        { icon: <HelpCircle />, title: "Help & Support", desc: "Reach Out To Us" },
        { icon: <BookOpen />, title: "Our Story", desc: "Our Story" },
        { icon: <Users />, title: "Fanbook", desc: "Fan Images" },
    ];

    return (
        <div className="account-container">
            <div className="sidebar">
                <div className="menu-item active">Overview</div>
                <div className="menu-item"><Shirt /> My Orders</div>
                <div className="menu-item"><CreditCard /> My Payments</div>
                <div className="menu-item"><Wallet /> My Wallet</div>
                <div className="menu-item"><MapPin /> My Addresses</div>
                <div className="menu-item"><User /> My Profile</div>
                <div className="menu-item logout" onClick={()=>logout()}><LogOut /> Logout</div>
            </div>

            <div className="account-main">
                <div className="account-header">
                    <div className='account-avatar-info'>
                        <div className="user-avatar">
                            {user?.picture ? (
                                <img src={user?.picture || alternativeProfileImg} alt="User" />
                            ) : (
                                <div className="fallback-avatar">{firstLetter}</div>
                            )}
                        </div>
                        <div className="user-info">
                            <div className="user-name">{user?.name || "-----"}</div>
                            <div className="user-email">{user?.email || "-----@---.com"}</div>
                            <div className="user-phone">{userData.phone}</div>
                        </div>
                    </div>
                    <button className="edit-profile" onClick={()=>logout()}>LogOut</button>
                </div>

                <div className="account-grid">
                    {boxes.map((box, i) => (
                        <div className="account-box" key={i}>
                            <div className="account-box-icon">{box.icon}</div>
                            <div className="account-box-title">{box.title}</div>
                            <div className="account-box-desc">{box.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
