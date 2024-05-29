import { google } from "googleapis";
import User from "../models/User.js";

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET_ID,
    process.env.REDIRECT_URL
);

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const getAuthUrl = () => {
    return oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
};

const getTokens = async (code) => {
    const { tokens } = await oauth2Client.getToken(code);
    return tokens;
};

export { getAuthUrl, getTokens, oauth2Client };