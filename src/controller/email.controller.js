import emailService from "../service/email.service.js";

emailService;

const sendEmail = async (req, res) => {
  try {
    let result = await emailService(
      req.body.info,
      req.body.urlImage,
      req.body.email,
      req.body.message
    );
    if (result == 200)
      return res.status(200).json({ status: "Ok", message: "Email Sended" });
    else
      res.status(200).json({ status: "Error", message: "Email wasn't sended" });
  } catch (e) {
    // return res.status(200).send({status: 'Error', message: e })
    console.log("Error");
  }
};

export { sendEmail };
