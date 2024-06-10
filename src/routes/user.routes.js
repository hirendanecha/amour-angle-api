const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const profileController = require("./../controllers/profile.controller");
const authorize = require("../middleware/authorize");

router.post("/register", userController.create);
// router.post("/profile", profileController.create);
router.get("/user/verification/:token", userController.verification);
router.get("/countries", userController.getZipCountries);
router.get("/zip/:zip", userController.getZipData);
router.get("/states", userController.getStats);
router.post("/login", userController.adminLogin);
router.get("/verify-token/:token", userController.verifyToken);
router.post("/forgot-password", userController.forgotPassword);
router.get("/profile/:id", profileController.FindProfileById);
router.get("/states", userController.getStats);
router.use(authorize.authorization);
router.get("/get-profile-pictures/:id", profileController.getProfilePictures);
router.get("/get-profiles/:id", profileController.getProfiles);
router.get("/get-interest", userController.getInterest);
router.post("/add-interest", userController.addInterest);
router.post("/add-pictures", profileController.addPictures);
router.post("/", userController.findAll);
router.get("/get", userController.getAll);
router.get("/logout", userController.logout);
router.get("/change-status/:id", userController.changeActiveStatus);
// router.get("/suspend-user/:id", userController.userSuspend);
// router.get("/activate-media/:id", userController.activateMedia);
// router.get("/change-user-type/:id", userController.changeAccountType);
router.post("/get-emails", userController.getEmail);
// router.post("/", userController.login);
router.post("/set-password", userController.setPassword);
router.post("/get-notification/:id", profileController.getNotificationById);
router.get("/search-user", profileController.getUsersByUsername);
router.get("/:id", userController.findById);
router.put("/update-pictures/:id", profileController.updatePicture);
router.put("/:id", userController.update);
router.put("/profile/:id", profileController.updateProfile);
router.get("/notification/:id", profileController.getNotification);
router.get("/get-notification/:id", profileController.getNotification);
router.post("/user/verification/resend", userController.resendVerification);
router.get("/edit-notification/:id", profileController.editNotifications);
router.delete("/:id", userController.delete);
router.delete("/notification/:id", profileController.deleteNotification);
router.get("/groupsAndPosts", profileController.groupsAndPosts);

module.exports = router;
