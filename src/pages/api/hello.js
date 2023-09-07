// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method == "POST") {
    // Some action related to POST
  } else {
    //Handle any other HTTP method
  }
  res.status(200).json({ name: "John Doe" });
}
