import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, firstName, lastName, school } = req.body;

      if(!email || !firstName || !lastName || !school) {
        throw new Error("Please fill in all the required fields.")
      }

      // Authenticate with Google Sheets API
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      const spreadsheetId = "1XCAPV-6qTPsAdskYyruFbXze2TNXZITd5Y1AWkyyQms"; // Replace with your spreadsheet ID
      const range = "Sheet1!A2:D1000"; // The range where you want to append data

      const values = [[email, firstName, lastName, school]];

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        resource: { values },
      });

      console.log("Data appended successfully:", response.data);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error adding data to Google Sheets:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
