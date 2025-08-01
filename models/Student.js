const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  major: { type: String, required: true },
  status: { type: String, enum: ['active', 'graduated', 'withdrawn'], default: 'active' },
  GPA: { type: Number, min: 0, max: 4 },
  enrollmentDate: { type: Date, required: true },
  courses: [{ type: String }]
});

module.exports = mongoose.model('Student', studentSchema);
