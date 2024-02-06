export async function GET() {
  return Response.json({
    contactMediums: [
      {
        medium: "github",
        username: "kavinvalli",
        link: "https://github.com/kavinvalli",
      },
      {
        medium: "email",
        username: "mail@kavin.me",
        link: "mailto:mail@kavin.me",
      },
      {
        medium: "facebook",
        username: "kavin.valli.25",
        link: "https://www.facebook.com/kavin.valli.25/",
      },
      {
        medium: "linkedin",
        username: "kavinvalli",
        link: "https://www.linkedin.com/in/kavinvalli/",
      },
    ],
  });
}
