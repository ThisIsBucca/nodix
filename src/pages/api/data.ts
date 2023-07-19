
export default function handler(req, res) {
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
  