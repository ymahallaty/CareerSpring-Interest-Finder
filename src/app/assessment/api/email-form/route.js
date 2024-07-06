import { google } from "googleapis";
import { z } from "zod";

// Define the Zod schema with specific validations
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  // firstName: z.string().regex(/^[A-Za-z\s]+$/, "First name must contain only letters and spaces"),
  // lastName: z.string().regex(/^[A-Za-z\s]+$/, "Last name must contain only letters and spaces"),
  // school: z.string().regex(/^[A-Za-z0-9]{6}$/, "School code must be exactly 6 alphanumeric characters"),
  firstName: z.string().trim().regex(/^[\p{L}\s-]+$/u, "First name must contain only letters, spaces, and hyphens"),
  lastName: z.string().trim().regex(/^[\p{L}\s-]+$/u, "Last name must contain only letters, spaces, and hyphens"),
  // school: z.string().regex(/^[\p{L}\d\s-]+$/u, "School name must contain only letters, numbers, spaces, hyphens, and the '&' symbol"),
  school: z.string().trim().regex(/^[\p{L}\d\s\-&',.]+$/u, "School name must contain only letters, numbers, spaces, periods, hyphens, apostrophes, and the '&' symbol")

});

export async function POST(req) {
  try {
    const body = await req.json(); 
    console.log('here is the body from the route path: ', body)

    // Validate the request body using Zod
    const result = formSchema.safeParse(body);

    console.log('here is the result: ', result)

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error.errors.map(err => err.message) }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { email, firstName, lastName, school, career_interest_results, realistic_score, investigative_score, artistic_score, social_score, enterprising_score, conventional_score} = body;

    // Authenticate with Google Sheets API

    // private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    // private_key: process.env.GOOGLE_PRIVATE_KEY,
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets"
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // const spreadsheetId = "1XCAPV-6qTPsAdskYyruFbXze2TNXZITd5Y1AWkyyQms"; // Replace with your spreadsheet ID
    const spreadsheetId = process.env.GOOGLE_SHEET_ID; // Replace with your spreadsheet ID
    const range = "Sheet1!A2:K1000"; // The range where you want to append data

    // Ensure values are treated as text by using the valueInputOption "RAW"
    const values = [[email, firstName, lastName, school, career_interest_results, realistic_score, investigative_score, artistic_score, social_score, enterprising_score, conventional_score]];

    // range: 'A1:D1',
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
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
