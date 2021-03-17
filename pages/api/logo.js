// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const BASE = process.env.URL || 'http://5200742d7a99.ngrok.io'

export default (req, res) => {
  res.status(200).json(
    {
      "blocks": [
        {
          "type": "image",
          "image_url": `${BASE}/logo-stack.png`,
          "alt_text": "marg"
        },
        {
          "type": "image",
          "image_url": `${BASE}/logo-strap.png`,
          "alt_text": "marg"
        }
      ]
    }
  )
}
