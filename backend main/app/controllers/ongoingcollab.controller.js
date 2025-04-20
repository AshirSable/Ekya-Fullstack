const db = require("../models");
const OngoingCollab = db.OngoingCollaboration;
const Profile = db.profile;
const User = db.user;

exports.createOngoingFromRequest = async (req, res) => {
  const { ownerId, collaboratorId, projectTitle } = req.body;

  try {
    const ownerProfile = await Profile.findOne({ where: { userId: ownerId } });
    const collaboratorProfile = await Profile.findOne({ where: { userId: collaboratorId } });

    const ongoing = await OngoingCollab.create({
      ownerId,
      collaboratorId,
      projectTitle,
      ownerName: ownerProfile.businessName,
      collaboratorName: collaboratorProfile.businessName,
      ownerLogo: ownerProfile.businessLogo,
      collaboratorLogo: collaboratorProfile.businessLogo,
    });

    res.status(201).json({ message: "Ongoing collaboration started", ongoing });
  } catch (error) {
    console.error("Error creating ongoing collab:", error);
    res.status(500).json({ error: "Failed to create ongoing collaboration" });
  }
};

exports.getOngoingForUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const collabs = await OngoingCollab.findAll({
      where: {
        [db.Sequelize.Op.or]: [
          { ownerId: userId },
          { collaboratorId: userId }
        ]
      }
    });

    res.status(200).json(collabs);
  } catch (error) {
    console.error("Error fetching ongoing collaborations:", error);
    res.status(500).json({ error: "Failed to fetch collaborations" });
  }
};

exports.updateWorkStatus = async (req, res) => {
  const { collabId } = req.params;
  const { userId } = req.body;

  try {
    const collab = await OngoingCollab.findByPk(collabId);
    if (!collab) return res.status(404).json({ error: "Collaboration not found" });

    if (collab.ownerId == userId) collab.ownerCompleted = true;
    else if (collab.collaboratorId == userId) collab.collaboratorCompleted = true;

    if (collab.ownerCompleted && collab.collaboratorCompleted) {
      collab.status = "completed";
    }

    await collab.save();

    res.status(200).json({ message: "Status updated", collab });
  } catch (error) {
    console.error("Error updating work status:", error);
    res.status(500).json({ error: "Failed to update status" });
  }
};
