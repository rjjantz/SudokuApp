import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

import type { Request, Response } from 'express';

app.get('/', (req: Request, res: Response) => {
  res.send('Sudoku API is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
