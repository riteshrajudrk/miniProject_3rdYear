import { useAppContext } from "../context/useAppContext";
import avatar from "../assets/avatar.jpg";
import "./Profile.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Profile = () => {
  const { user } = useAppContext();

  if (!user) return null;

  return (

    <>
       <div className="home-hero-wrapper-all-events">
        <Navbar />
      </div>

    <div className="profile-container">
      <div className="profile-card">
        <img src={avatar} alt="User Avatar" className="profile-avatar" />

        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>

        <div className="profile-divider" />

        <p className="profile-note">
          Welcome to <strong>EventEase</strong>.  
          You can manage your events and profile here.
        </p>
      </div>
    </div>

    </>
  );
};

export default Profile;
