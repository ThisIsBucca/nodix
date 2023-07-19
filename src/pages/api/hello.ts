// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    // Make a request to your Express backend
    fetch('http://localhost:3001/api/data')
      .then((response) => response.json())
      .then((data) => {

        // Handle the response from the backend
        res.status(200).json(data);
      })
      .catch((error) => {
        
        // Handle any errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      });
}
