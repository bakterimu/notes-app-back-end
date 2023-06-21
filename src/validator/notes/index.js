const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadsSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validateResult = NotePayloadsSchema.validate(payload);
    if (validateResult.error) {
      throw new InvariantError(validateResult.error);
    }
  },
};

module.exports = NotesValidator;
