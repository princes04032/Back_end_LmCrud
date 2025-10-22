const express = require('express');
const router = express.Router();
const memberController = require('../controllers/member');

// Define routes
router.get('/', memberController.getAllMembers);
router.get('/:id', memberController.getMemberById);
router.post('/', memberController.createMember);
router.delete('/:id', memberController.deleteMember);

module.exports = router;