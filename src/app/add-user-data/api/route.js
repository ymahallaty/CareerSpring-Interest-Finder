import { google } from "googleapis";

export async function POST(req) {
  try {
    const body = await req.json(); // Ensure you parse the request body
    const { email, firstName, lastName, school } = body;

    if (!email || !firstName || !lastName || !school) {
      return new Response(JSON.stringify({ error: "Please fill in all the required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
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

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error adding data to Google Sheets:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
