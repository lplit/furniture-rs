import type { NextApiRequest, NextApiResponse } from "next";

type SubscribeResponse = {
  success: boolean;
  message: string;
};

type SubscribeError = {
  success: false;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubscribeResponse | SubscribeError>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  const { email } = req.body;

  if (typeof email !== "string" || !isValidEmail(email)) {
    res.status(400).json({ success: false, message: "Invalid email address" });
    return;
  }

  // Stub: replace with ConvertKit / Beehiiv / Mailchimp integration later.
  void email;

  res.status(200).json({
    success: true,
    message: "You're on the list. We'll be in touch.",
  });
}
