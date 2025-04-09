import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "AhmedGamalGoda1@gmail.com",
    pass: "AhmedGamalGoda1",
  },
});
