import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Lock, X, Eye, EyeOff } from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // new
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: authUser?.fullName || "",
    email: authUser?.email || "",
    password: "",
  });

  const handleClose = () => navigate("/");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImg(reader.result); // preview
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    if (formData.password) data.append("password", formData.password);
    if (selectedFile) data.append("profilePic", selectedFile);

    await updateProfile(data); // send FormData to backend
    setFormData({ ...formData, password: "" });
    setSelectedFile(null); // reset file input
  };

  return (
    <div className="h-screen pt-20 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8 relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold">Profile</h1>
            <p className="mt-2 text-sm sm:text-base">
              Your profile information
            </p>
          </div>

          {/* Avatar upload */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-4"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
                  isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                }`}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 text-center">
              {isUpdatingProfile
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* Editable form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-base-200 rounded-lg border outline-none text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-base-200 rounded-lg border outline-none text-sm sm:text-base"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                New Password
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Leave blank to keep current"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-base-200 rounded-lg border outline-none pr-10 text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Save button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition disabled:opacity-50 text-sm sm:text-base"
              disabled={isUpdatingProfile}
            >
              {isUpdatingProfile ? "Updating..." : "Save Changes"}
            </button>
          </form>

          {/* Account info */}
          <div className="mt-6 bg-base-300 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-medium mb-4">
              Account Information
            </h2>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
