import cookie from 'cookie';
import { NextApiHandler } from "next";
import { fetchJson } from "../../lib/api";
import { User } from "../../lib/user";

const { CMS_URL } = process.env

const handleLogin: NextApiHandler<User> = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end()
    return;
  }
  const { email, password } = req.body;
  try {
    console.log(`submitted ${email}, ${password}`);
    const { jwt, user } = await fetchJson(`${CMS_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ identifier: email, password })
    });
    res.status(200)
      .setHeader("Set-Cookie", cookie.serialize("jwt", jwt, {
        path: "/api", // only read the cookie on Next api routes
        httpOnly: true, // only use the cookie on the header, prevents client-side (js) code to read it
      }))
      .json({
        id: user.id,
        name: user.username,
      })
  } catch (err) {
    res.status(401).end()
  }
}

export default handleLogin