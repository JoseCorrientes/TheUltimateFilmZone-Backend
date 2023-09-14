// import nodemailer  from 'nodemailer'
import SibApi from "sib-api-v3-sdk";

async function emailService(data, urlImage, email, message) {
  try {
    const SibClient = SibApi.ApiClient.instance;

    SibClient.authentications["api-key"].apiKey = process.env.BREVO_API_PASS;

    const transactionEmailApi = new SibApi.TransactionalEmailsApi();
    let smtpMailData = new SibApi.SendSmtpEmail();

    const sender = {
      email: "theultimatefilmapp@gmail.com",
      name: "The Ultimate Film App",
    };

    smtpMailData.sender = sender;
    smtpMailData.to = [
      {
        email: email,
        name: "Ultimate Film App!",
      },
    ];

    smtpMailData.subject = "You must see this movie!";
    smtpMailData.htmlContent = `<html><body>
        <div>
        ${message}
        </br>
        <hr>
        <img
            src=${urlImage}
        />
        <h2>Titulo: ${data.original_title}</h1>
        <h3>Año: ${data.release_date.slice(0, 4)}</h2>
        <p>Description: </p>
        <p>${data.overview}</p>
        <hr>
        </div></body></html>`;

    let result;
    await transactionEmailApi
      .sendTransacEmail(smtpMailData)
      .then((response) => {
        result = 200;
      })
      .catch((error) => {
        result = 500;
      });
    return result;
  } catch (e) {
    console.log(e);
  }
}

export default emailService;
