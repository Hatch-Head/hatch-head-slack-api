// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const BASE = process.env.URL || 'http://5200742d7a99.ngrok.io'

export default (req, res) => {
  res.status(200).json(
    {
      "blocks": [
        {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": "*ABN* 63 647 869 752"
            }
          ]
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": "*ACN* 647 869 752"
            }
          ]
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": "*TFN* 539 564 601"
            }
          ]
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": "*Bank details* BSB: 062692 ACC: 4377 1135"
            }
          ]
        }
      ]
    }
  )
}
