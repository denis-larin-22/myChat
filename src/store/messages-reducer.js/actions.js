import { createPayloadAction } from '../_utils/createActions';

export const sendMessage = createPayloadAction('SEND');
export const deleteMessage = createPayloadAction('DELETE');